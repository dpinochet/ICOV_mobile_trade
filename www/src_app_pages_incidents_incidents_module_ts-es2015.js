(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_incidents_incidents_module_ts"],{

/***/ 17328:
/*!*************************************************************!*\
  !*** ./src/app/pages/incidents/incidents-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentsPageRoutingModule": function() { return /* binding */ IncidentsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incidents_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incidents.page */ 94445);




const routes = [
    {
        path: '',
        component: _incidents_page__WEBPACK_IMPORTED_MODULE_0__.IncidentsPage
    }
];
let IncidentsPageRoutingModule = class IncidentsPageRoutingModule {
};
IncidentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncidentsPageRoutingModule);



/***/ }),

/***/ 2315:
/*!*****************************************************!*\
  !*** ./src/app/pages/incidents/incidents.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentsPageModule": function() { return /* binding */ IncidentsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _incidents_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incidents-routing.module */ 17328);
/* harmony import */ var _incidents_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incidents.page */ 94445);







let IncidentsPageModule = class IncidentsPageModule {
};
IncidentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _incidents_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncidentsPageRoutingModule,
        ],
        declarations: [_incidents_page__WEBPACK_IMPORTED_MODULE_1__.IncidentsPage]
    })
], IncidentsPageModule);



/***/ }),

/***/ 94445:
/*!***************************************************!*\
  !*** ./src/app/pages/incidents/incidents.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidentsPage": function() { return /* binding */ IncidentsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incidents_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incidents.page.html */ 14582);
/* harmony import */ var _incidents_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incidents.page.scss */ 13374);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);








let IncidentsPage = class IncidentsPage {
    constructor(navCtrl, base, auth) {
        this.navCtrl = navCtrl;
        this.base = base;
        this.auth = auth;
        this.send_messages = [];
        this.received_messages = [];
        this.message = '';
        this.user = 'contacto2@icov.cl';
        this.receiver = new WebSocket('ws://' + '192.168.100.9:8001' + '/notifications/');
        this.sender = new WebSocket('ws://' + '192.168.100.9:8001' + '/ws/chat/incidencias_trade/');
        this.user = this.base.getDataUser();
    } // End Constructor
    ionViewDidLoad() {
        this.getMessages(),
            this.setSock();
    }
    ngOnInit() {
    }
    getMessages() {
        this.base.getOldMessages().subscribe(data => {
            this.send_messages = data;
        }, _err => {
            if (_err == 'Las credenciales de autenticación no se proveyeron.') {
                this.refreshToken();
            }
        });
    }
    setSock() {
        // Create connections with websockets
        this.receiver.onopen = () => { console.info('websocket receiver open'); };
        this.sender.onopen = () => { console.info('websocket sender open'); };
        // Push messages on respective's arrays
        this.receiver.onmessage = (event) => {
            this.send_messages.push(event.data);
            console.log(this.received_messages);
        };
        this.sender.onmessage = (event) => {
            this.send_messages.push(JSON.parse(event.data));
            console.log(this.send_messages);
        };
        if (this.receiver.readyState == WebSocket.OPEN) {
            this.receiver.onopen(null);
        }
    }
    submit() { this.sendMessage(); }
    sendMessage() {
        if (this.message != '') {
            this.sender.send(JSON.stringify({
                type: "user.announcement",
                message: this.message,
                sender: this.user,
                channel: 1,
                category_sender: 'mobile',
                // created_at:this.getCurrentDate(),
                created_at: new Date(),
            }));
            this.message = '';
        }
    }
    getCurrentDate() {
        let today = new Date(), dd = today.getDate(), mm = today.getMonth() + 1;
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return (dd + '/' + mm + '/' + today.getFullYear() + ' ' + today.getHours() + ":" +
            today.getMinutes() + ":" + today.getSeconds());
    }
    refreshToken() {
        let oauthCredentials = {
            //Production
            client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
            client_id: 'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',
            // Testing
            //client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
            //client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
            grant_type: 'refresh_token',
            refresh_token: this.base.getDataRefreshToken()
        };
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        params = params.append('grant_type', oauthCredentials.grant_type);
        params = params.append('client_id', oauthCredentials.client_id);
        params = params.append('client_secret', oauthCredentials.client_secret);
        params = params.append('refresh_token', oauthCredentials.refresh_token);
        this.auth.obtainToken(params).subscribe(data => {
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
        }, _err => { console.error('no refresh'); }, () => {
            this.getMessages();
        });
    }
};
IncidentsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__.UserServicesService }
];
IncidentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-incidents',
        template: _raw_loader_incidents_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incidents_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IncidentsPage);



/***/ }),

/***/ 13374:
/*!*****************************************************!*\
  !*** ./src/app/pages/incidents/incidents.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-incidents ion-content .scroll-content {\n  background-color: #f5f5f5;\n}\npage-incidents ion-footer {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.11);\n  background-color: #fff;\n  height: 255px;\n}\npage-incidents .line-breaker {\n  white-space: pre-line;\n}\npage-incidents .input-wrap {\n  padding: 5px;\n  display: flex;\n}\npage-incidents .input-wrap textarea {\n  flex: 1;\n  border: 0;\n  border-bottom: 1px #387ef5;\n  border-style: solid;\n}\npage-incidents .message-wrap {\n  padding: 0 10px;\n}\npage-incidents .message-wrap .message {\n  position: relative;\n  padding: 7px 0;\n}\npage-incidents .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\npage-incidents .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block;\n}\npage-incidents .message-wrap .message .msg-detail p {\n  margin: 0;\n}\npage-incidents .message-wrap .message .msg-detail .msg-info p {\n  font-size: 0.8em;\n  color: #888;\n}\npage-incidents .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  color: #fff;\n  width: auto;\n  max-width: 80%;\n}\npage-incidents .message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  transform: rotate(45deg);\n  position: absolute;\n}\npage-incidents .message-wrap .message.left .msg-content {\n  background-color: #fff;\n  float: left;\n}\npage-incidents .message-wrap .message.left .msg-detail {\n  padding-left: 60px;\n}\npage-incidents .message-wrap .message.left .user-img {\n  left: 0;\n}\npage-incidents .message-wrap .message.left .msg-detail .msg-content {\n  color: #343434;\n}\npage-incidents .message-wrap .message.left .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px;\n}\npage-incidents .message-wrap .message.right .msg-detail {\n  padding-right: 60px;\n}\npage-incidents .message-wrap .message.right .msg-detail .msg-info {\n  text-align: right;\n}\npage-incidents .message-wrap .message.right .user-img {\n  right: 0;\n}\npage-incidents .message-wrap .message.right ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px;\n}\npage-incidents .message-wrap .message.right .msg-detail .msg-content {\n  background-color: #387ef5;\n  float: right;\n}\npage-incidents .message-wrap .message.right .msg-detail .msg-content span.triangle {\n  background-color: #387ef5;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSx5QkFBQTtBQUROO0FBR0k7RUFDRSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUROO0FBR0k7RUFDRSxxQkFBQTtBQUROO0FBR0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUROO0FBRU07RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBQ007RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFDUjtBQUFRO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUFFVjtBQURRO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBR1Y7QUFGVTtFQUNFLFNBQUE7QUFJWjtBQUhVO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBS1o7QUFKVTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBTVo7QUFMWTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtBQU9kO0FBTk07RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFRUjtBQVBNO0VBQ0Usa0JBQUE7QUFTUjtBQVJNO0VBQ0UsT0FBQTtBQVVSO0FBVE07RUFDRSxjQUFBO0FBV1I7QUFWUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBWVY7QUFYTTtFQUNFLG1CQUFBO0FBYVI7QUFaUTtFQUNFLGlCQUFBO0FBY1Y7QUFiTTtFQUNFLFFBQUE7QUFlUjtBQWRNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWdCUjtBQWZNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBaUJSO0FBaEJRO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQWtCViIsImZpbGUiOiJpbmNpZGVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1pbmNpZGVudHMge1xuXG4gICAgaW9uLWNvbnRlbnQgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IH1cbiAgXG4gICAgaW9uLWZvb3RlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgaGVpZ2h0OiAyNTVweDsgfVxuICBcbiAgICAubGluZS1icmVha2VyIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgfVxuICBcbiAgICAuaW5wdXQtd3JhcCB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgICAuaW5wdXQtd3JhcCB0ZXh0YXJlYSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4ICMzODdlZjU7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7IH1cbiAgXG4gICAgLm1lc3NhZ2Utd3JhcCB7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDdweCAwOyB9XG4gICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLnVzZXItaW1nIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpOyB9XG4gICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7IH1cbiAgICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctaW5mbyBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4OyB9XG4gICAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTsgfVxuICAgICAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQgc3Bhbi50cmlhbmdsZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctY29udGVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAudXNlci1pbWcge1xuICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAgICAgY29sb3I6ICMzNDM0MzQ7IH1cbiAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgICBsZWZ0OiAtNXB4OyB9XG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNjBweDsgfVxuICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctaW5mbyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLnVzZXItaW1nIHtcbiAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgaW9uLXNwaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB0b3A6IDUwcHg7IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHNwYW4udHJpYW5nbGUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODdlZjU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICAgICAgICByaWdodDogLTVweDsgfVxuICB9Il19 */");

/***/ }),

/***/ 14582:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incidents/incidents.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons ion-button menuToggle>\n          <button ion-button left menuToggle=\"menu\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title> Incidencias </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"content content-md\">\n\n<div class=\"fixed-content\" style=\"margin-top: 56px; margin-bottom: 55px;\"></div>\n  <div class=\"scroll-content\" >\n    <div _ngcontent-c0=\"\" class=\"message-wrap\">\n      <div *ngFor=\"let message of send_messages\">\n\n        <div *ngIf=\"message.channel == 1\" >\n\n          <div class=\"\" *ngIf=\"this.user != message.sender\">\n\n            <div class=\"message left\">\n              <img alt=\"\" class=\"user-img\" src=\"../../../assets/imgs/icov.png\">\n              <div class=\"msg-detail\">\n                  <div class=\"msg-info\">\n                    <p > {{ message.sender }} </p>\n                    <p> {{ message.created_at | date:'dd/MM/yyyy HH:mm' }} </p>\n                  </div>\n                  <div class=\"msg-content\">\n                      <span  class=\"triangle\"></span>\n                      <p class=\"line-breaker \"> {{message.message}} </p>\n                  </div>\n              </div>\n            </div>\n\n          </div>\n\n          <div *ngIf=\"this.user == message.sender\">\n              <div class=\"message right\">\n\n                  <img alt=\"\" class=\"user-img\" src=\"../../../assets/imgs/icov.png\">\n                  <div class=\"msg-detail\">\n                      <div class=\"msg-info\">\n                        <p > {{ message.created_at | date:'dd/MM/yyyy HH:mm' }} </p>\n                      </div>\n                      <div class=\"msg-content\">\n                        <span class=\"triangle\"></span>\n                        <p class=\"line-breaker \">{{message.message}} </p>\n                      </div>\n                  </div>\n              </div>\n\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer  style=\"height: 55px;\">\n\n  <form  (ngSubmit)='submit()'>\n      <div _ngcontent-c0=\"\" class=\"input-wrap\">\n\n          <button class=\"button button-md button-clear button-clear-md\">\n            <span class=\"button-inner\"> <ion-icon name=\"happy\"></ion-icon> </span>\n          </button>\n\n          <ion-input placeholder=\"Escriba su mensaje\" name=\"message\"\n           [(ngModel)]='message' value=\"{{message}}\">\n         </ion-input>\n\n          <button class=\"button button-md button-clear button-clear-md\">\n            <span class=\"button-inner\"> <ion-icon name=\"send\"></ion-icon> </span>\n          <div class=\"button-effect\" ></div></button>\n\n      </div>\n  </form>\n\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_incidents_incidents_module_ts-es2015.js.map