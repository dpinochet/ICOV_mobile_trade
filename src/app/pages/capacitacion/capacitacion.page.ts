import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  NavController, IonContent} from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import * as moment from 'moment';
import { ComunicacionComponentService } from 'src/app/services/comunicacion-component.service';
import { SqliteServiceService } from 'src/app/services/sqlite-service.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { SocketServiceService } from 'src/app/services/socket-service.service';
declare var $:any;

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.page.html',
  styleUrls: ['./capacitacion.page.scss'],
})
export class CapacitacionPage implements OnInit {
  listCapacitados = new Array();
  showEmojiPicker = false;
  @ViewChild(IonContent ) content: IonContent ;
  @ViewChild('chat_input') messageInput: ElementRef;
  editorMsg = '';
  userData = null;
  photo = null;
  messageForm = new FormGroup({
    message: new FormControl(null, Validators.required)
  })
  constructor(
    public navCtrl: NavController,
    private _comunic: ComunicacionComponentService,
    private _sqlite: SqliteServiceService,
    private _notification: NotificacionesService,
    private _socket: SocketServiceService,
    private _camera:Camera
  ) {
    console.log('ddd')
    this.updateArray();
    this.getCapacitados();

    
    
    try{
      let user_data_parse_json = localStorage.getItem('userData');

      let user_data_json_parse =JSON.parse(user_data_parse_json);
      this.userData = user_data_json_parse[0];
      console.log('userData-capacitación: ',this.userData);
      this.bottomScroll();

    }catch(e){}
    //   setTimeout(()=>{
    //     console.log('user-data-capacitación: ',this.userData);
    //   },2000);
    // }
  }

  ngOnInit() {
  }

 


  ionViewDidLoad() {
    console.log('ionViewDidLoad CapacitacionPage');
  }



  changeDate(fecha){
   return moment(fecha).format('YYYY-MM-DD HH:mm:ss');
  }


  getCapacitados() {


    this._notification.getHistorialCapacitation().then((capacitation: any) => {


      console.log('capacitasion: ',capacitation);

      capacitation.forEach(element => {

        if(this.userData.email===element.recipient){

          this.listCapacitados.push(element);
        }

      });


      console.log('getHistorialMessageCapacitation: ', capacitation);

    }, err => {
      //historial desde sqlite


    })



  }

  updateArray() {
    this._comunic.itemComunicacion.subscribe((notificaciones) => {
      console.log('notificacion-updateArray: ',notificaciones);

      if (notificaciones.name === 'new-notification') {
        if (notificaciones.item.event === 'capacitacion') {
          console.log('updateArray-capacitacion-notificacion:',notificaciones);
          if(this.userData.email===notificaciones.item.recipient){
            
            this.listCapacitados.push(notificaciones.item);
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
    let messageCapacitacion = {

      user_created: this.userData.email,
      message: this.messageForm.value.message,
      image: this.photo,
      created_at: new Date(),
      recipient:this.userData.email
    }


    this._socket.addNotificacionCapacitacion(messageCapacitacion);
    this.messageForm.reset();
    //  let add_capacitation_response = await  this._notification.addCapacitation(messageCapacitacion);

    //  console.log('add_capacitation_response:',add_capacitation_response);

    this.bottomScroll();

  }

  async cargarPhoto(){
      this._camera.getPicture({
        quality: 75,
        destinationType: this._camera.DestinationType.FILE_URI,
        encodingType: this._camera.EncodingType.JPEG,
        mediaType: this._camera.MediaType.PICTURE,
        saveToPhotoAlbum:false
      }).then((picture)=>{
        this.photo = "data:image/jpeg;base64," + picture;
        setTimeout(()=>{
          console.log('cameraphoto: ',this.photo);
        },2000);
      },errorCamara=>{
        console.log('errorCamara: ',errorCamara);
      })
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
