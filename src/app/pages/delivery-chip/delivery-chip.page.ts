import { Component, Input, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { BaseServicesService } from 'src/app/services/base-services.service';
import { DeliveryServicesService } from 'src/app/services/delivery-services.service';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-chip',
  templateUrl: './delivery-chip.page.html',
  styleUrls: ['./delivery-chip.page.scss'],
})
export class DeliveryChipPage implements OnInit {
  @Input() data: any;
  constructor(public navCtrl: NavController,
    private loadcrtl: LoadingController,
    private barcodeScanner: BarcodeScanner,
    private deliveryServices: DeliveryServicesService,
    private base: BaseServicesService,
    private route:Router,
   // private app: App,
    public toastCtrl: ToastController,
    private storage: Storage) {
    this.load = this.loadcrtl.create({ message: 'Buscando GPS Espere un Momento...' });
    this.chip = {
      lccid: 0,
      idType: 1,
      text: 'Chip NO encontrado',
      user_created: this.base.getDataUser(),
    };

    this.allBarcode = [];
    this.front_chips_array = [];
    this.chipStateObj = {};
    this.scanned_chip = {};
    this.cont = 0;

    this.id_subsidiary = this.base.getDataSubsidiary();

    //this.id = this.navParams.get('id');
   // this.name = this.navParams.get('name');

    this.id = this.data.id;
    this.name = this.data.name;

    if (this.name == undefined) {
    } else {
      this.modal = true;
    }


  }

  ngOnInit() {
  }

  modelChips: any;
  load: any;
  allBarcode: any[];
  chipStateObj: any;
  state: any;
  id_subsidiary: any;
  color: any;
  chip: any;
  name: string = '';
  title_subsidiary: string = '';
  id: string = '';
  consecion: boolean = false;
  modal: boolean = false;

  scanned_chip: {};
  front_chips_array: any[];
  cont: any;
  

  ionViewWillEnter() {
   /* this.storage.get('idSubsidiary').then((val) => {
      this.id_subsidiary = val;
      // console.log(val);
    });
    this.storage.get('subsidiary').then((val) => {
      this.title_subsidiary = val;
    });*/
    this.getidSubsidiary();
    this.getsubsidiary();

  }

  async getidSubsidiary()
  {
    const { value } = await Storage.get({ key: 'idSubsidiary'});
    this.id_subsidiary = value;
    
  }

  async getsubsidiary()
  {
    
     const { value } = await Storage.get({ key: 'subsidiary'});
    
    this.title_subsidiary = value;
  }
  scanChips() {

    this.barcodeScanner.scan({ torchOn: true }).then(barcodeData => {
      if (barcodeData.cancelled) {
        return false;
      } else {
        if (this.allBarcode.indexOf(barcodeData.text) === -1) {
          this.allBarcode.push(barcodeData.text);
          this.deliveryServices.getDeliveryChips(barcodeData.text).subscribe(
            data => {
              if (data == '' || data == ' ') {
                this.notFound(barcodeData.text);
              } else { this.saveDelivery(data[0].id, barcodeData.text); }
            },
            err => {
              this.notFound(barcodeData.text);
            });

        } else if (this.allBarcode.indexOf(barcodeData.text) > -1) {
          this.tostScan(barcodeData);
        }
      }
    }).catch(err => { alert(err) });
  }

  async tostScan(e)
  {
    let toast = await this.toastCtrl.create({
      message: e.text + ' ya existe en Listado.',
      duration: 2500
    });
    await toast.present();
  }

  async tostSave()
  {
    let toast = await this.toastCtrl.create({
      message: 'El chip fue ingresado anteriormente',
      duration: 2500
    });
    await toast.present();
  }

  saveDelivery(idChip, barcodeTxt) {
    this.chipStateObj.user_created = this.base.getDataUser();
    this.chipStateObj.idChip = idChip;
    this.chipStateObj.consecion = this.consecion;
    if (this.id == undefined) {
      // this.chipStateObj.idSubsidiary = this.base.getDataSubsidiary(); Se modifica por SQLite Storage
      this.chipStateObj.idSubsidiary = this.id_subsidiary;
    } else {
      this.chipStateObj.idSubsidiary = this.id;
    }
    this.deliveryServices.postChipDelivery(this.chipStateObj).subscribe(
      rs => {
        this.scanned_chip = {
          code: barcodeTxt,
          icon: 'thumbs-up'
        };
        this.front_chips_array.push(this.scanned_chip);
        this.cont++;
      },
      err => {
        console.error(err);
        /*let toast = this.toastCtrl.create({
          message: 'El chip fue ingresado anteriormente',
          duration: 2500
        });
        toast.present();*/
        this.tostSave();
        this.scanned_chip = {
          code: barcodeTxt,
          icon: 'thumbs-down'
        };
        this.front_chips_array.push(this.scanned_chip);
      });
  }

  async tostFound(msg)
  {
    let toast = await this.toastCtrl.create({
      message:msg,
      buttons: [
         {
          text: 'OK',
          role: 'OK',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();
  }

  notFound(barcodeTxt) {
    this.chip.lccid = barcodeTxt;
    this.deliveryServices.postChip(this.chip).subscribe(
      res => {
        //no se puede llamar a this.saveDelivery() desde esta profundidad
        this.chipStateObj.user_created = this.base.getDataUser();
        this.chipStateObj.idChip = res.id;
        this.chipStateObj.consecion = this.consecion;
        if (this.id == undefined) {
          // this.chipStateObj.idSubsidiary = this.base.getDataSubsidiary(); Se modifica por SQLite Storage
          this.chipStateObj.idSubsidiary = this.id_subsidiary;
        } else {
          this.chipStateObj.idSubsidiary = this.id;
        }
        this.deliveryServices.postChipDelivery(this.chipStateObj).subscribe(
          rs => {
           /* let toast = this.toastCtrl.create({
              message: 'Chip No encontrado, se guardará en la base de datos informando el estado',
              showCloseButton: true,
              closeButtonText: 'Ok'
            });
            toast.present();*/
            this.tostFound('Chip No encontrado, se guardará en la base de datos informando el estado');
            this.scanned_chip = {
              code: barcodeTxt,
              icon: 'thumbs-up'
            };
            this.front_chips_array.push(this.scanned_chip);
            this.cont++;
          },
          err => {
            console.error(err);
            /*let toast = this.toastCtrl.create({
              message: 'El chip fue ingresado anteriormente',
              showCloseButton: true,
              closeButtonText: 'Ok'
            });
            toast.present();*/
            this.tostFound('El chip fue ingresado anteriormente');
            this.scanned_chip = {
              code: barcodeTxt,
              icon: 'thumbs-down'
            };
            this.front_chips_array.push(this.scanned_chip);
          });

      },
      er => {
        console.error(er);
       /* let toast = this.toastCtrl.create({
          message: 'chip inválido',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();*/
        this.tostFound('chip inválido');
        this.scanned_chip = {
          code: barcodeTxt,
          icon: 'thumbs-down'
        };
        this.front_chips_array.push(this.scanned_chip);
      }
    );
  }

  go_home() {
    this.navCtrl.pop();
    //this.app.getRootNavById().setRoot(HomePage);
    //this.navCtrl.navigateRoot(HomePage)
    this.route.navigateByUrl('home');
  }

}
