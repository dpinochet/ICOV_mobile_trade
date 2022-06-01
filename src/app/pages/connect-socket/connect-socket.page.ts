import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-connect-socket',
  templateUrl: './connect-socket.page.html',
  styleUrls: ['./connect-socket.page.scss'],
})
export class ConnectSocketPage implements OnInit {

  
  constructor(
    public navCtrl: NavController,
  ) {} // End Constructor

  ngOnInit() {
  }

  send_messages:     any = [];
  received_messages: any = [];
  public message:    string = '';
  public user:       string = 'contacto2@icov.cl';
  private receiver:  WebSocket = new WebSocket('ws://' + '192.168.100.9:8001' + '/notifications/');
  private sender:    WebSocket = new WebSocket('ws://' + '192.168.100.9:8001' + '/ws/chat/incidencias_trade/');


  ionViewDidLoad() { this.setSock() }

  setSock() {
    // Create connections with websockets
    this.receiver.onopen = () => { console.info('websocket receiver open')};
    this.sender.onopen = () => { console.info('websocket sender open') };

    // Push messages on respective's arrays
    this.receiver.onmessage = (event) => { this.received_messages.push(event.data) };
    this.sender.onmessage = (event) => { this.send_messages.push(JSON.parse(event.data)) };

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
        created_at:this.getCurrentDate(),
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

}
