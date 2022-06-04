(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_report_report_module_ts"],{

/***/ 70248:
/*!*******************************************************!*\
  !*** ./src/app/pages/report/report-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageRoutingModule": function() { return /* binding */ ReportPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.page */ 29213);




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_0__.ReportPage
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ 81725:
/*!***********************************************!*\
  !*** ./src/app/pages/report/report.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageModule": function() { return /* binding */ ReportPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-routing.module */ 70248);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page */ 29213);







let ReportPageModule = class ReportPageModule {
};
ReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportPageRoutingModule
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_1__.ReportPage]
    })
], ReportPageModule);



/***/ }),

/***/ 29213:
/*!*********************************************!*\
  !*** ./src/app/pages/report/report.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPage": function() { return /* binding */ ReportPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./report.page.html */ 4479);
/* harmony import */ var _report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page.scss */ 24345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_report_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/report-services.service */ 1893);







let ReportPage = class ReportPage {
    constructor(navCtrl, report, base) {
        this.navCtrl = navCtrl;
        this.report = report;
        this.base = base;
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
    ngOnInit() {
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
        this.report.getPublishDayReport(this.base.getDataUser()).subscribe(data => {
            if (JSON.stringify(data).includes('{}')) {
                this.publishDay = 0;
            }
            else {
                this.publishDay = parseInt(JSON.stringify(data));
            }
        }, error => { alert(error); }, () => { });
    }
    getPublishMonth() {
        this.report.getPublishMonthReport(this.base.getDataUser()).subscribe(data => {
            if (JSON.stringify(data).includes('{}')) {
                this.publishMonth = 0;
            }
            else {
                this.publishMonth = parseInt(JSON.stringify(data));
            }
        }, error => { alert(error); }, () => { });
    }
    getAllSalesMonth374() {
        this.report.getAllSalesMonth374ByUser(this.base.getDataUser()).subscribe(data => {
            this.allSalesMonth374 = Object.keys(data).length;
        }, error => { alert(error); }, () => { });
    }
    getPosDay() {
        this.report.getAllPOSDay(this.base.getDataUser()).subscribe(data => {
            // this.posDay = Object.keys(data).length
            // this.posDay = data
            if (JSON.stringify(data).includes('{}')) {
                this.posDay = 0;
            }
            else {
                this.posDay = parseInt(JSON.stringify(data));
            }
        }, error => { alert(error); }, () => { });
    }
    getPosMonth() {
        this.report.getAllPOSMonth(this.base.getDataUser()).subscribe(data => {
            if (JSON.stringify(data).includes('{}')) {
                this.posMonth = 0;
            }
            else {
                this.posMonth = parseInt(JSON.stringify(data));
            }
            // this.posMonth = Object.keys(data).length
        }, error => { alert(error); }, () => { });
    }
    getAllSalesMonth356() {
        this.report.getAllSalesMonth356ByUser(this.base.getDataUser()).subscribe(data => {
            this.allSalesMonth356 = Object.keys(data).length;
        }, error => { alert(error); }, () => { });
    }
    getAllSalesDay374() {
        this.report.getAllSalesDay374ByUser(this.base.getDataUser()).subscribe(data => {
            this.allSalesDay374 = Object.keys(data).length;
        }, error => { alert(error); }, () => { });
    }
    getAllSalesDay356() {
        this.report.getAllSalesDay356ByUser(this.base.getDataUser()).subscribe(data => {
            this.allSalesDay356 = Object.keys(data).length;
        }, error => { alert(error); }, () => { });
    }
    getVisits() {
        this.report.getAllVisits(this.base.getDataUser()).subscribe(data => {
            // this.allSalesDay356 = Object.keys(data).length
            this.visitDay = data[0].visitas_diarias;
            this.visitMonth = data[0].visitas_mensuales;
        }, error => { alert(error); }, () => { });
    }
};
ReportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_report_services_service__WEBPACK_IMPORTED_MODULE_3__.ReportServicesService },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService }
];
ReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReportPage);



/***/ }),

/***/ 1893:
/*!*****************************************************!*\
  !*** ./src/app/services/report-services.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportServicesService": function() { return /* binding */ ReportServicesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-services.service */ 94000);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);



//import { Storage } from '@ionic/storage';



let ReportServicesService = class ReportServicesService {
    // public url: string = 'http://192.168.100.9:8001/api/v1/';
    // public url: string = 'http://192.168.100.13:8000/api/v1/';
    // public url: string = 'https://redamigos.herokuapp.com/api/v1/';
    constructor(http, base, storage) {
        this.http = http;
        this.base = base;
        this.storage = storage;
        this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
        /*this.storage.get('base_url').then((val) => {
          this.url = val + "api/v1/";
        });*/
        this.geturl();
    }
    geturl() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({ key: 'base_url' });
            this.url = value + 'api/v1/';
        });
    }
    getAllPOSMonth(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'reports/subsidiaryMonthByUser/?user=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    getAllPOSDay(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'reports/subsidiaryDayByUser/?user=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    getAllChipDeliveryByUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'chipDelivery/?user=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    // Ventas Diarias por usuario
    getAllSalesDay356ByUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'salesDay356/?user=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    getAllSalesDay374ByUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'salesDay374/?user=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    // Ventas Mensuales por usuario
    getAllSalesMonth356ByUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'salesMonth356/?user=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    getAllSalesMonth374ByUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'salesMonth374/?user=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    getPublishDayReport(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'reports/publishDayByUser/?user=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    getPublishMonthReport(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'reports/publishMonthByUser/?user=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    getAllVisits(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'reports/totalColaboradoresVisitas/?user_email=' + user, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
};
ReportServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService },
    { type: _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
ReportServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ReportServicesService);



/***/ }),

/***/ 24345:
/*!***********************************************!*\
  !*** ./src/app/pages/report/report.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-report .card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  margin-bottom: 3px;\n}\npage-report .card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\npage-report .card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n  margin-bottom: 3px;\n}\npage-report #homeContent {\n  text-align: center;\n}\npage-report #homeContent h1 {\n  font-size: 1.5em;\n  color: #337ab7;\n}\npage-report #homeContent p {\n  color: #FF6702;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGVjtBQUtRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFIVjtBQU1RO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKVjtBQVNNO0VBQ0Usa0JBQUE7QUFQUjtBQVFRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBTlo7QUFRUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQU5aIiwiZmlsZSI6InJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXJlcG9ydCB7XG4gICAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcblxuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMzYlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MiU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgICNob21lQ29udGVudCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzM3YWI3O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICNGRjY3MDI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 4479:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report/report.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons ion-button menuToggle>\n          <button ion-button left menuToggle=\"menu\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Reportes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"homeContent\">\n  <ion-card>\n      <ion-item>\n          <h1>Trade Diario</h1>\n          <p>{{ publishDay }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Trade Mensual</h1>\n          <p>{{ publishMonth }}</p>\n      </ion-item>\n  </ion-card>\n  <!-- <ion-card>\n      <ion-item>\n          <h1>356 Diario</h1>\n          <p>{{ allSalesDay356 }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Autoplan Diario</h1>\n          <p>{{ allSalesDay374 }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>356 Mensual</h1>\n          <p>{{ allSalesMonth356 }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Autoplan Mensual</h1>\n          <p>{{ allSalesMonth374 }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Puntos de Venta Hoy</h1>\n          <p>{{ posDay }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Puntos de Venta Mes</h1>\n          <p>{{ posMonth }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Visitas Hoy</h1>\n          <p>{{ visitDay }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Visitas Mensual</h1>\n          <p>{{ visitMonth }}</p>\n      </ion-item>\n  </ion-card> -->\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_report_report_module_ts-es2015.js.map