import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { BaseServicesService } from 'src/app/services/base-services.service';
import { PosServicesService } from 'src/app/services/pos-services.service';
import { MapsAPILoader } from '@agm/core';
import { DeliveryChipPage } from '../delivery-chip/delivery-chip.page';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html', 
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
 


  ngOnInit() {
  }

  public latitude: number;
  public longitude: number;
  public zoom: number;
  public subsidiary_categories: any;
  public modelPos: any;
  public base64Image: any;
  public icon: any;
  public categories: any = [];

  @ViewChild("search")
  public searchElementRef;
  constructor(
    public navCtrl: NavController,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private camera: Camera,
    private loadcrtl: LoadingController,
    private pos: PosServicesService,
    private base: BaseServicesService,
    public modalCtrl: ModalController,
    //private storage: Storage
  ) {
    this.setCurrentPosition();
    this.modelPos = {};
    this.icon = {
      url: '../../../assets/imgs/store.png',
      scaledSize: {
        height: 80,
        width: 80
      }
    }
    //Image Default
    this.base64Image                = '../../../assets/imgs/course_no_image.png';
    this.modelPos.picture_business  = this.base64Image;

    this.obtainsCategories();

  }

  async setStorage(k,v)
  {
    
      await Storage.set({
        key: k,
        value:v,
      });
   
  }
  ionViewDidLoad() {
    // let dataUrl:string=
    // this.modelPos.picture_business = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==";
    this.mapsAPILoader.load().then(() => {
      let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
      let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.zoom = 18;
          this.modelPos.latitude = this.latitude;
          this.modelPos.longitude = this.longitude;
        });
      });

    });
  }


  private async openCamera() {
    let load = await this.loadcrtl.create({ message: 'Validando Espere un Momento...' });
    this.camera.getPicture({
      saveToPhotoAlbum: false,
      targetWidth: 300,
      targetHeight: 300,
      quality: 65,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
    }).then(imageData => {
      load.present();
      this.base64Image = "data:image/jpg;base64," + imageData;
      this.modelPos.picture_business = this.base64Image;
      load.dismiss();
    }, error => {
      alert(error);
    });
  }

  private async setCurrentPosition() {
    let load = await this.loadcrtl.create({ message: 'Buscando GPS Espere un Momento...' });
    load.present();
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.zoom = 18;
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.modelPos.latitude = this.latitude;
        this.modelPos.longitude = this.longitude;
        // this.modelPos.longitude = -70.12879040000001;
      });
    }
    load.dismiss();
  }


  private async  createPOS() {
    let load = await this.loadcrtl.create({ message: 'Creando punto de venta' });
    load.present();
    this.modelPos.is_activate = true;
    this.modelPos.user_created = this.base.getDataUser();
    this.pos.postPos(this.modelPos).subscribe(
      rs => {
        load.dismiss();
        alert('Los datos fueron ingresados correctamente.');

        let data = { id: rs.id, name: rs.name_business };
       // this.storage.set('subsidiary', rs.name_business);
        //this.storage.set('idSubsidiary', rs.id);
        this.setStorage('subsidiary',rs.name_business);
        this.setStorage('idSubsidiary', rs.id);
        //let contactModal = this.modalCtrl.create(DeliveryChipPage, data);
        //contactModal.present();
        this.presentModal(data);

      }, error => {
        load.dismiss();
        alert(error);
      });
  } 

  async presentModal(data) {
    const modal = await this.modalCtrl.create({
      component: DeliveryChipPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'data': data,
       
      }
    });
    return await modal.present();
  }

  private obtainsCategories() {

    console.log('obtener categorias');
    this.pos.get_categories().subscribe(
      rs => {
        this.subsidiary_categories = rs;
        console.log(rs);

      }, error => {
        alert(error);
      });

  }

  selectCategory(e, item) {
    console.log(e);
    this.modelPos.idCategory = item.id;

  }

}
