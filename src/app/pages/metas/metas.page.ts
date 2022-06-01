import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ComunicacionComponentService } from 'src/app/services/comunicacion-component.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { SocketServiceService } from 'src/app/services/socket-service.service';
import { SqliteServiceService } from 'src/app/services/sqlite-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.page.html',
  styleUrls: ['./metas.page.scss'],
})
export class MetasPage implements OnInit {

 

  
  listMetas = new Array();
  userData = null;
  constructor(public navCtrl: NavController,
    
    private _comunic: ComunicacionComponentService,
    private _sqlite: SqliteServiceService,
    private _notification: NotificacionesService,
    private _socket: SocketServiceService) {

      
     
    try{

      let userDataJson = localStorage.getItem('userData'); 
      this.userData = JSON.parse(userDataJson);
      console.log('userDataMetas: ',this.userData);

    }catch(e){

      

    }  
    this.getMetas();
    this.updateArray();
  }


  changeDate(fecha){
    return moment(fecha).format('YYYY-MM-DD HH:mm:ss');
   }
 
   ngOnInit() {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MetasPage');
  }


  getMetas() {


    this._notification.getHistorialPromotion().then((metas: any) => {


      console.log('capacitasion: ', metas);

      metas.forEach(element => {

        this.listMetas.push(element);
      });

      // this.evaluaYMarcaComoLeido(metas);


      console.log('getHistorialMessageMetas ', metas);

    }, err => {
      //historial desde sqlite


    })



  }


  updateArray() {
    this._comunic.itemComunicacion.subscribe((notificaciones) => {

      if (notificaciones.name === 'new-notification') {
        if (notificaciones.item.event === 'promocion') {
          this.marcarComoLeida(notificaciones.item);
          this.listMetas.push(notificaciones.item);
        }
      }
    })
  }


async  evaluaYMarcaComoLeido(metas){
    let funciones={
      obtenerPromocionesPorUsuario:()=>{
        return new Promise(async(resolve,reject)=>{
            let promociones_user= await this._notification.getPromotionRead(this.userData[0].email);

            resolve(promociones_user);
        })
      },
      obtienePromocionesNoLeidas:(promocionesUsuario, promociones)=>{
        return new Promise(async(resolve,reject)=>{


          let promocionesNoLeidas= new Array();
          let contador=0;
          for(let i=0; i<promociones.length;i++){
              let findPromocion = promocionesUsuario.findIndex((o)=> o.promotion_id == promociones[i].promotion_id)

              if(findPromocion==-1){
                promocionesNoLeidas.push(promociones[i]);
              }

              contador = contador+1;

              if(contador==promociones.length){
                resolve(promocionesNoLeidas);
              }
          }




        })
      },
      registraPromocionesNoLeidas:(promociones)=>{
        return new Promise(async(resolve,reject)=>{

          console.log('promociones-no-leidas: ',promociones);
          let contador =0;
          for(let i=0;i<promociones.length;i++){
            let modelMeta = {


              promotion_id: promociones[i].promotion_id,
              id_user: this.userData[0].id,
              photo: null,
              date_photo: null,
              seen: true,
              date_seen: null,
              created_at: moment().format('YYYY-MM-DD HH:mm')
        
            }
        
            let promocion_registrada = await this._notification.postMarcarComoLeidaMeta(modelMeta);
            contador = contador+1;
            if(contador==promociones.length){
              resolve(true);
            }
          }

        })
      }
    }


    let  promociones = await  funciones.obtenerPromocionesPorUsuario();
    let  promociones_no_leidas = await funciones.obtienePromocionesNoLeidas(promociones,metas);
    let  registra_promociones_no_leidas = await funciones.registraPromocionesNoLeidas(promociones_no_leidas);










  }



  marcarComoLeida(meta) {
      console.log('meta_marca_como_leido: ',meta);
    let modelMeta = {


      promotion_id: meta.promotion_id,
      id_user: this.userData[0].id,
      photo: null,
      date_photo: null,
      seen: true,
      date_seen: null,
      created_at: moment().format('YYYY-MM-DD HH:mm')

    }

    this._notification.postMarcarComoLeidaMeta(modelMeta);
  }



}
