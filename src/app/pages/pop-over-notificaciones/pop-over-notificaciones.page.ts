import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ComunicacionComponentService } from 'src/app/services/comunicacion-component.service';
import { MetasPage } from '../metas/metas.page';

@Component({
  selector: 'app-pop-over-notificaciones',
  templateUrl: './pop-over-notificaciones.page.html',
  styleUrls: ['./pop-over-notificaciones.page.scss'],
})
export class PopOverNotificacionesPage implements OnInit {



  ngOnInit() {
  }

  listaNotificaciones=new Array();
  capacitaciones = new Array();
  incidencias = new Array();
  promociones = new Array();

  constructor(public navCtrl: NavController,private _comunic:ComunicacionComponentService,private route:Router) {
    this._comunic.itemComunicacion.subscribe((notificaciones:any)=>{
      if(notificaciones.name==="lista-notificaciones"){
        this.listaNotificaciones=notificaciones.item;
        this.parseNotificaciones(notificaciones.item);
      }if(notificaciones.name==='new-notification'){
        if(notificaciones.item.event==='promocion'){
          this.promociones.push(notificaciones.item);
        }if(notificaciones.item.event==='capacitacion'){
          this.capacitaciones.push(notificaciones.item);
        }if(notificaciones.item.event==='incidencias'){
          this.incidencias.push(notificaciones.item);
        }
      }
    })
  }


  parseNotificaciones(listaNotificaciones){
    for(let i=0;i<listaNotificaciones.length;i++){

      if(listaNotificaciones[i].event==="promocion"){

        this.promociones.push(listaNotificaciones[i]);

      }if(listaNotificaciones[i].event==='capacitacion'){

        this.capacitaciones.push(listaNotificaciones[i]);

      }if(listaNotificaciones[i].event==='incidencias'){

        this.incidencias.push(listaNotificaciones[i]);
      }

    }
  }



  goBack() {
    this.navCtrl.pop();
 
  }


  goCapacitacion(){
    //this.navCtrl.push(CapacitacionPage);
    this.route.navigateByUrl('capacitacion');
  }

  goPromociones(){
    //this.navCtrl.push(MetasPage);
    this.route.navigateByUrl('metas');
    
  }


  goIncidencias(){
    //this.navCtrl.push(IncidenciasPage);
    this.route.navigateByUrl('incidencias');
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverNotificacionesPage');
  }

}
