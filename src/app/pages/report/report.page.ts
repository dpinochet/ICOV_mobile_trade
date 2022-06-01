import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BaseServicesService } from 'src/app/services/base-services.service';
import { ReportServicesService } from 'src/app/services/report-services.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  

  ngOnInit() {
  }

  allChipToday: number;
  allPOSCreatedToday: number;
  allChipMonth: number;
  allPOSCreatedMonth: number;
  allSalesDay356: number;
  allSalesDay374: number;
  allSalesMonth356: number;
  allSalesMonth374: number;
  posMonth: number;
  posDay: number;
  publishDay: number;
  publishMonth: number;
  visitDay: number;
  visitMonth: number;

  constructor(public navCtrl: NavController,
    
    private report: ReportServicesService,
    private base: BaseServicesService, ) {
    this.allChipToday = 0;
    this.allPOSCreatedToday = 0;
    this.allChipMonth = 0;
    this.allPOSCreatedMonth = 0;
    this.allSalesDay356 = 0;
    this.allSalesDay374 = 0;
    this.posMonth = 0;
    this.posDay = 0;
    this.publishDay = 0;
    this.publishMonth = 0;

  }

  ionViewDidLoad() {
    // this.getPosDay();
    // this.getPosMonth();
    // this.getAllSalesMonth374();
    // this.getAllSalesMonth356();
    // this.getAllSalesDay356();
    // this.getAllSalesDay374();
    this.getPublishMonth();
    this.getPublishDay();
    // this.getVisits();
  }

  //
  // getCreatedSubsidiary(){
  //   this.report.getAllChipDeliveryByUser(this.base.getDataUser()).subscribe(
  //     data=>{
  //       console.log('All chip delivery ' + data);
  //       let countDay = 0;
  //       let countMonth = 0;
  //       const today = new Date();
  //       let dd = today.getDate();
  //       let mm = today.getMonth() + 1; //January is 0!
  //       let yyyy = today.getFullYear();
  //       //delivery Today
  //       data.forEach(element => {
  //         let dateSale = new Date(element.created_at);
  //         let ddSale = dateSale.getDate();
  //         let mmSale = dateSale.getMonth() + 1;
  //         let yyyySale = dateSale.getFullYear();
  //         if (mm == mmSale && yyyy == yyyySale && dd == ddSale) {
  //             countDay++;
  //         }
  //         if(mm == mmSale && yyyy == yyyySale){
  //           countMonth++;
  //         }
  //       })
  //       this.allChipToday = countDay;
  //       this.allChipMonth = countMonth;
  //     },
  //     error=>{alert(error)},
  //     ()=>{});
  //     this.getAllSalesMonth356();
  // }

  // getPOSCreated() {
  //   this.report.getAllPOSCreatedByUser(this.base.getDataUser()).subscribe(
  //     data => {
  //       let countDayPOS = 0;
  //       let countMonthPOS = 0;
  //       const today = new Date();
  //       let dd = today.getDate();
  //       let mm = today.getMonth() + 1; //January is 0!
  //       let yyyy = today.getFullYear();
  //       //delivery Today
  //       data.forEach(element => {
  //         let dateSale = new Date(element.created_at);
  //         let ddSale = dateSale.getDate();
  //         let mmSale = dateSale.getMonth() + 1;
  //         let yyyySale = dateSale.getFullYear();
  //         if (mm == mmSale && yyyy == yyyySale && dd == ddSale) {
  //           countDayPOS++;
  //         }
  //         if (mm == mmSale && yyyy == yyyySale) {
  //           countMonthPOS++;
  //         }
  //       });
  //       this.allPOSCreatedToday = countDayPOS;
  //       this.allPOSCreatedMonth = countMonthPOS;
  //     },
  //     error => { alert(error) },
  //     () => { });
  // }

  getPublishDay() {
    this.report.getPublishDayReport(this.base.getDataUser()).subscribe(
      data => {
        if (JSON.stringify(data).includes('{}')) {
          this.publishDay = 0;
        } else {
          this.publishDay = parseInt(JSON.stringify(data));
        }
      },
      error => { alert(error) },
      () => { });
  }

  getPublishMonth() {
    this.report.getPublishMonthReport(this.base.getDataUser()).subscribe(
      data => {
        if (JSON.stringify(data).includes('{}')) {
          this.publishMonth = 0;
        } else {
          this.publishMonth = parseInt(JSON.stringify(data));
        }
      },
      error => { alert(error) },
      () => { });
  }

  getAllSalesMonth374() {
    this.report.getAllSalesMonth374ByUser(this.base.getDataUser()).subscribe(
      data => {
        this.allSalesMonth374 = Object.keys(data).length
      },
      error => { alert(error) },
      () => { });
  }

  getPosDay() {
    this.report.getAllPOSDay(this.base.getDataUser()).subscribe(
      data => {
        // this.posDay = Object.keys(data).length
        // this.posDay = data
        if (JSON.stringify(data).includes('{}')) {
          this.posDay = 0;
        } else {
          this.posDay = parseInt(JSON.stringify(data));
        }
      },
      error => { alert(error) },
      () => { });
  }

  getPosMonth() {
    this.report.getAllPOSMonth(this.base.getDataUser()).subscribe(
      data => {
        if (JSON.stringify(data).includes('{}')) {
          this.posMonth = 0;
        } else {
          this.posMonth = parseInt(JSON.stringify(data));
        }
        // this.posMonth = Object.keys(data).length
      },
      error => { alert(error) },
      () => { });
  }


  getAllSalesMonth356() {
    this.report.getAllSalesMonth356ByUser(this.base.getDataUser()).subscribe(
      data => {
        this.allSalesMonth356 = Object.keys(data).length
      },
      error => { alert(error) },
      () => { });
  }



  getAllSalesDay374() {
    this.report.getAllSalesDay374ByUser(this.base.getDataUser()).subscribe(
      data => {
        this.allSalesDay374 = Object.keys(data).length
      },
      error => { alert(error) },
      () => { });
  }

  getAllSalesDay356() {
    this.report.getAllSalesDay356ByUser(this.base.getDataUser()).subscribe(
      data => {
        this.allSalesDay356 = Object.keys(data).length
      },
      error => { alert(error) },
      () => { });
  }

  getVisits() {
    this.report.getAllVisits(this.base.getDataUser()).subscribe(
      data => {
        // this.allSalesDay356 = Object.keys(data).length
        this.visitDay = data[0].visitas_diarias;
        this.visitMonth = data[0].visitas_mensuales;
      },
      error => { alert(error) },
      () => { });
  }




}
