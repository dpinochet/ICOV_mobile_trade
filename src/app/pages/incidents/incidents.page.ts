import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BaseServicesService } from 'src/app/services/base-services.service';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.page.html',
  styleUrls: ['./incidents.page.scss'],
})
export class IncidentsPage implements OnInit {



  

  send_messages:     any = [];
  received_messages: any = [];
  public message:    string = '';
  public user:       string = 'contacto2@icov.cl';
  private receiver:  WebSocket = new WebSocket('ws://' + '192.168.100.9:8001' + '/notifications/');
  private sender:    WebSocket = new WebSocket('ws://' + '192.168.100.9:8001' + '/ws/chat/incidencias_trade/');

  constructor(
    public navCtrl:     NavController,
    public base:        BaseServicesService,
    private auth:       UserServicesService
  ) { this.user = this.base.getDataUser() } // End Constructor

  ionViewDidLoad() {
    this.getMessages(),
    this.setSock()
  }

  ngOnInit() {
  }

  getMessages(){
    this.base.getOldMessages().subscribe(
      data => {
        this.send_messages = data
      },
      _err => {
        if (_err == 'Las credenciales de autenticación no se proveyeron.') {
          this.refreshToken();
        }
      }
    )
  }

  setSock() {
    // Create connections with websockets
    this.receiver.onopen = () => { console.info('websocket receiver open')};
    this.sender.onopen = () => { console.info('websocket sender open') };

    // Push messages on respective's arrays
    this.receiver.onmessage = (event) => {
      this.send_messages.push(event.data)
      console.log(this.received_messages);
    };
    this.sender.onmessage = (event) => {
      this.send_messages.push(JSON.parse(event.data))
      console.log(this.send_messages);
    };

    if (this.receiver.readyState == WebSocket.OPEN) { this.receiver.onopen(null) }

  }

  submit () { this.sendMessage() }

  sendMessage() {
    if(this.message != '') {
      this.sender.send(JSON.stringify({
        type:"user.announcement",
        message:this.message,
        sender: this.user,
        channel: 1,
        category_sender: 'mobile',
        // created_at:this.getCurrentDate(),
        created_at:new Date(),
      }));

      this.message = ''
    }

  }


  getCurrentDate(){
    let today:any = new Date(), dd:any = today.getDate(),
    mm:any = today.getMonth() + 1;

    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }

    return (dd + '/' + mm + '/' + today.getFullYear() +' '+ today.getHours() + ":"+
     today.getMinutes() + ":" + today.getSeconds());
  }

  refreshToken(){
    let oauthCredentials = {
      //Production
      client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
      client_id:      'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',

      // Testing
      //client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
      //client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',

      grant_type:     'refresh_token',
      refresh_token:  this.base.getDataRefreshToken()
    }

    let params = new HttpParams();
    params = params.append('grant_type', oauthCredentials.grant_type);
    params = params.append('client_id', oauthCredentials.client_id);
    params = params.append('client_secret', oauthCredentials.client_secret);
    params = params.append('refresh_token', oauthCredentials.refresh_token);

    this.auth.obtainToken(params).subscribe(
      data => {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);

      }, _err => { console.error('no refresh') },
      () => {
        this.getMessages()
      }
    )

  }


}
