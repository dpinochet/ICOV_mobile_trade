
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController,IonContent } from '@ionic/angular';
import { ComunicacionComponentService } from 'src/app/services/comunicacion-component.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { SocketServiceService } from 'src/app/services/socket-service.service';
import { SqliteServiceService } from 'src/app/services/sqlite-service.service';
import * as moment from 'moment';
declare var $:any;

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
})
export class IncidenciasPage implements OnInit {


  

  listIncidencias = new Array();
  showEmojiPicker = false;
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('chat_input') messageInput: ElementRef;
  editorMsg = '';
  userData = null;
  photo = null;
  messageForm = new FormGroup({
    message: new FormControl(null, Validators.required)
  })
  constructor(public navCtrl: NavController,
    private _comunic: ComunicacionComponentService,
    private _sqlite: SqliteServiceService,
    private _notification: NotificacionesService,
    private _socket: SocketServiceService) {



      this.updateArray();
      this.getIncidencias();
      try{
        let user_data_parse_json = localStorage.getItem('userData');
  
        let user_data_json_parse =JSON.parse(user_data_parse_json);
        this.userData = user_data_json_parse[0];
        console.log('userData-incidencias: ',this.userData);
        this.bottomScroll();
  
      }catch(e){}
      //   setTimeout(()=>{
      //     console.log('user-data-capacitación: ',this.userData);
      //   },2000);
      // }
  }

  ngOnInit() {
  }



  changeDate(fecha){
    return moment(fecha).format('YYYY-MM-DD HH:mm:ss');
   }
 
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad CapacitacionPage');
  }


  getIncidencias() {


    this._notification.getHistorialIncidencias().then((incidencias: any) => {


      console.log('getIncidencias: ',incidencias);

      incidencias.forEach(element => {
        if(this.userData.email===element.recipient){

          this.listIncidencias.push(element);
        }

      });


      console.log('getHistorialMessageIncidencias: ', incidencias);

    }, err => {
      //historial desde sqlite


    })



  }

  updateArray() {
    this._comunic.itemComunicacion.subscribe((notificaciones) => {

      if (notificaciones.name === 'new-notification') {
        if (notificaciones.item.event === 'incidencias') {
          if(this.userData.email===notificaciones.item.recipient){

            this.listIncidencias.push(notificaciones.item);
          }
        }
      }
    })
  }


  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    //this.content.resize();
    this.scrollToBottom();
  }



  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea = this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  marcarLeido() {

  }


 async enviarMensaje() {
    let messageIncidencia = {
      user_created: this.userData.email,
      message: this.messageForm.value.message,
      // image: this.photo,
      created_at: new Date(),
      recipient:this.userData.email
    }


    this._socket.addNotificacionIncidencia(messageIncidencia);
    this.messageForm.reset();
    //  let add_capacitation_response = await  this._notification.addCapacitation(messageCapacitacion);

    //  console.log('add_capacitation_response:',add_capacitation_response);
    this.bottomScroll();

  }


  bottomScroll(){
    // setTimeout(() => {
    //   let chat = document.getElementById("chatRoom");
    //    chat.scroll({
    //      top: chat.scrollHeight,
    //      behavior: 'smooth'
    //    });
    //  }, 2000);

    $('#chatRoom').animate({
      scrollTop: $('#chatRoom').get(0).scrollHeight
  }, 1500);
  }

}
