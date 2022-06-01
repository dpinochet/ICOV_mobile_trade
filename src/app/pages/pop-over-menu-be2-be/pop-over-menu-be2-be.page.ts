import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, PopoverController } from '@ionic/angular';
import { ComunicacionComponentService } from 'src/app/services/comunicacion-component.service';
import { DeliveryServicesService } from 'src/app/services/delivery-services.service';
//import * as v from 'voca';


@Component({
  selector: 'app-pop-over-menu-be2-be',
  templateUrl: './pop-over-menu-be2-be.page.html',
  styleUrls: ['./pop-over-menu-be2-be.page.scss'],
})
export class PopOverMenuBe2BePage implements OnInit {

  

  ngOnInit() {
  }

  formLeyend = new FormGroup({
    leyend: new FormControl(null, [Validators.required])
  });
  modelDeliveryPublish: any;
  imagenes: any[] = new Array();
  user: any = null;
  subsidiary: any = null;
  idx_card=null;
  comentario_card_arr:any[]=new Array();
  card_data=null;
  constructor(public navCtrl: NavController,
     private _comunc: ComunicacionComponentService,public popoverCtrl: PopoverController,
    private deliveryPublish: DeliveryServicesService,public alertController: AlertController) {

    this._comunc.itemComunicacion.subscribe((item: any) => {
      // console.log('item-data-popover');
      if (item.name === 'data-pop-over') {
        this.user = item.itemAdd.user;
        this.subsidiary = item.itemAdd.subsidiary;
        this.imagenes = item.itemAdd.imagenes;
        this.formLeyend.controls.leyend.setValue(item.itemAdd.leyend);
        this.optener_hashtag(item.itemAdd.leyend);
        this.idx_card=item.itemAdd.idx_card;
        this.card_data=item.itemAdd.card;
        console.log('card_selected:',item.itemAdd.card);
      }
      setTimeout(() => {

        console.log('pop-over-data: ', item);

      }, 10)

    })
  }

  optener_hashtag(comentario:string){
    let arr_hashtag:any[] = comentario==null ? [] :comentario.split(' ');
    console.log('divider_hashtag: ',arr_hashtag);
    let hashtag_arr:any[]=new Array();
    arr_hashtag.forEach((item_comment:string)=>{
      //let find_hashtag:number = v.lastIndexOf(item_comment,'#');
      let find_hashtag:number = item_comment.lastIndexOf('#');

      if(find_hashtag>-1){
        hashtag_arr.push(item_comment);
      }
    })

    setTimeout(()=>{
      console.log('hash_tag_find: ',hashtag_arr);
    },1000);
    console.log('comentario: ',comentario);
  }

  delay() {
    return new Promise(resolve => setTimeout(resolve, 300));
  }


  async publishv2_method() {
    // notice that we can await a function
    // that returns a promise

    try{


      this.modelDeliveryPublish = {
        user_created: this.user.email,
        subsidiary: this.subsidiary.id,
        description: this.formLeyend.value.leyend,
        brand_id:this.card_data.id
      }
      console.log("pot",this.modelDeliveryPublish)
      let publishv2
      let error
       error=await this.deliveryPublish.publishv2(this.modelDeliveryPublish).then(function(data) {
        publishv2=data;
        return false;
    })
    .catch(function(err) {
        // Tratar el error
        return true
       
    });
      console.log("potee",error)
      console.log("publis",publishv2)
      if (publishv2 != null && error==false) {

        this.imagenes.forEach(async(img:any,idx)=>{
          let model_publish_photo={
            photo:img.url,
            publish_id:publishv2.id
          }

         error= await this.deliveryPublish.publishPhoto(model_publish_photo).then(function(data) {
            console.log("imagenes agregadas");
        })
        .catch(function(err) {
            // Tratar el error
           return true;
           
        });
          this.imagenes.splice(idx,10);
          
          
        });
        if(error==false)
        {
        this.presentAlert("Aviso","Operación exitosa");
        // console.log('postDelevery-response-check-out: ', publishv2);
        // this.imagenes.splice(idx, 1);
        this.close();
        }
        else{
          this.presentAlert("Algunas Imagenes no se agregaron","por favor revise su conexión a internet o inténtelo mas tarde");
          this.close();
        }
      }
      else{
        
        this.presentAlert("Error en la operación","por favor revise su conexión a internet o inténtelo mas tarde");
        this.close();

      }
      
      // console.log('item-register', { item: { img: img, idx: idx } });
      

    }catch(e){}

  }


  // async registrarCheckOut() {

  //   await this.publishv2_method(img, idx);

  //   if (this.imagenes.length > 0) {

  //     this.imagenes.forEach(async (img, idx) => {
  //     })
  //   } if (this.imagenes.length == 0) {
  //     this.modelDeliveryPublish = {
  //       user_created: this.user.email,
  //       subsidiary: this.subsidiary.id,
  //       quantity: 1,
  //       photo: null,
  //       description: null
  //     }


  
  //     try{

  //       let rs = await this.deliveryPublish.publishv2(this.modelDeliveryPublish);
  //       if(rs!=null){
  //         this._comunc.addItem({name:'b2b-finish',itemAdd:{
  //           b2bfinish:true,idx_card:this.idx_card
  //         }});
  //       }

  //     }catch(e){}

  //   }


  //   console.log('done!');



  //   this.close();

  // }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverMenuBe2BePage');
  }


  close() {
   // this.viewCtrl.dismiss();
   this.popoverCtrl.dismiss();
  }

  async presentAlert(type,msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: type,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
 