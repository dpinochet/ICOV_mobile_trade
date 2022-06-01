import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { BaseServicesService } from 'src/app/services/base-services.service';
import { PosServicesService } from 'src/app/services/pos-services.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-concessions',
  templateUrl: './concessions.page.html',
  styleUrls: ['./concessions.page.scss'],
})
export class ConcessionsPage implements OnInit {

  constructor(public navCtrl: NavController,
    
    //private storage: Storage,
    private pos: PosServicesService,
    private base: BaseServicesService,
    fb: FormBuilder,
  ) {

    this.form = fb.group({
      discount: ['', Validators.compose([Validators.required
      ])],
    });

  }

  ngOnInit() {
  }
  id_subsidiary: any;
  total_concessions: string;
  form: FormGroup;

  


  ionViewWillEnter() {
    /*this.storage.get('idSubsidiary').then((val) => {
      this.id_subsidiary = val;
      // console.log(val);
      if (this.id_subsidiary != 'null') {
        this.getConcessions();
      }
    });*/
    // console.log('tab');
    this.getidSub();
  }

  async getidSub()
  {
     await Storage.get({ key: 'idSubsidiary'}).then((val) => {
      this.id_subsidiary = val.value;
    }).then(() => {
      if (this.id_subsidiary != 'null') {
        this.getConcessions();
      }
    });
    
  }

  getConcessions() {
    if (this.id_subsidiary != 'null') {

      this.pos.obtainConcessionsBackend(this.id_subsidiary).subscribe(
        data => {
          if(JSON.stringify(data).includes('{}')){
            this.total_concessions = '0';
          }else{
            this.total_concessions = JSON.stringify(data);
          }
          // console.log('concesiones: ' + JSON.stringify(data));
          // console.log('conc'+Object.keys(data));
          // if  (Object.keys(data).length == 0) {
          // } else {
          // }

        },
        error => { alert(error) },
        () => { });

    } else {
      alert('No ha seleccionado una sucursal válida');
    }
  }

  charge_concession() {
    let data = this.form.value;
    if (data.discount > this.total_concessions) {
      alert('Debe cobrar un máximo de: ' + this.total_concessions + ' concesiones.');
    } else {
      this.pos.updateConcessionsBackend(this.id_subsidiary, parseInt(data.discount)).subscribe(
        data => {
          // console.log('concesiones: ' + JSON.stringify(data));
          this.total_concessions = JSON.stringify(data);
          alert('Se ha cobrado la concesión');
          //this.navCtrl.parent.select(0);
        },
        error => { alert(error) },
        () => { });
    }

  }

}
