import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { BaseServicesService } from 'src/app/services/base-services.service';
import { DeliveryServicesService } from 'src/app/services/delivery-services.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { ImgModalPage } from '../img-modal/img-modal.page';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.page.html',
  styleUrls: ['./visits.page.scss'],
})
export class VisitsPage implements OnInit {


  ngOnInit() {
  }

  public form: FormGroup;
  public date_start: any = '';
  private allStores: any = [];
  public arrayGrouped = [];

  constructor(
    public navCtrl:     NavController,
    public fb:          FormBuilder,
    private delivery:   DeliveryServicesService,
    private auth:       UserServicesService,
    private base:       BaseServicesService,
    public modalCtrl:   ModalController,
    private loadcrtl:   LoadingController,
    private route:Router


  ) {
    this.form = fb.group({
      date_start:   ['', Validators.compose([Validators.required])],
    })
    // console.log(this.form);
  } // End constructor

  callSubmit(){this.obtainTrades()}

  async obtainTrades() {
    let load = await this.loadcrtl.create({ message: 'Cargando, Espere un Momento...' });
    load.present()
    let date = this.date_start
    let arraySubsidiaries = [];
    this.arrayGrouped = [];

    this.delivery.getVisitsByUserDay(date).subscribe(
      data => {
        load.dismiss()
        let trade = data
        this.allStores = data;
      },
      _err => {
        load.dismiss()
        console.error(_err);
        if( _err == 'Las credenciales de autenticación no se proveyeron.'){ this.refreshToken()}
      }
    )
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
        // console.log('se obtuvo refresh token');
        console.log(data);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);

      }, _err => { console.error('no refresh') },
      () => { this.callSubmit() }
    )

  }

  modalPhoto(img){
   // let imgModal = this.navCtrl.push(ImgModalPage, { img: img });
   this.route.navigateByUrl('img-modal', { state: img });
  }

  


}
