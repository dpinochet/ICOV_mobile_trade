(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_trainings_trainings_module_ts"],{

/***/ 39818:
/*!*************************************************************!*\
  !*** ./src/app/pages/trainings/trainings-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingsPageRoutingModule": function() { return /* binding */ TrainingsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _trainings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainings.page */ 91041);




const routes = [
    {
        path: '',
        component: _trainings_page__WEBPACK_IMPORTED_MODULE_0__.TrainingsPage
    }
];
let TrainingsPageRoutingModule = class TrainingsPageRoutingModule {
};
TrainingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrainingsPageRoutingModule);



/***/ }),

/***/ 37064:
/*!*****************************************************!*\
  !*** ./src/app/pages/trainings/trainings.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingsPageModule": function() { return /* binding */ TrainingsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _trainings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainings-routing.module */ 39818);
/* harmony import */ var _trainings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings.page */ 91041);







let TrainingsPageModule = class TrainingsPageModule {
};
TrainingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trainings_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingsPageRoutingModule,
        ],
        declarations: [_trainings_page__WEBPACK_IMPORTED_MODULE_1__.TrainingsPage]
    })
], TrainingsPageModule);



/***/ }),

/***/ 91041:
/*!***************************************************!*\
  !*** ./src/app/pages/trainings/trainings.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingsPage": function() { return /* binding */ TrainingsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_trainings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./trainings.page.html */ 15894);
/* harmony import */ var _trainings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings.page.scss */ 33928);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);








let TrainingsPage = class TrainingsPage {
    constructor(navCtrl, base, auth) {
        this.navCtrl = navCtrl;
        this.base = base;
        this.auth = auth;
        this.send_messages = [];
        this.received_messages = [];
        this.message = '';
        this.user = '';
        this.receiver = new WebSocket('ws://' + '192.168.100.9:8001' + '/notifications/');
        this.sender = new WebSocket('ws://' + '192.168.100.9:8001' + '/ws/chat/incidencias_trade/');
        this.user = this.base.getDataUser();
    } // End Constructor
    ngOnInit() {
    }
    ionViewDidLoad() {
        this.getMessages(),
            this.setSock();
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
        this.receiver.onmessage = (event) => { this.send_messages.push(event.data); };
        this.sender.onmessage = (event) => {
            this.send_messages.push(JSON.parse(event.data));
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
                channel: 2,
                category_sender: 'mobile',
                created_at: this.getCurrentDate(),
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
TrainingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__.UserServicesService }
];
TrainingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-trainings',
        template: _raw_loader_trainings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trainings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrainingsPage);



/***/ }),

/***/ 33928:
/*!*****************************************************!*\
  !*** ./src/app/pages/trainings/trainings.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-trainings ion-content .scroll-content {\n  background-color: #f5f5f5;\n}\npage-trainings ion-footer {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.11);\n  background-color: #fff;\n  height: 255px;\n}\npage-trainings .line-breaker {\n  white-space: pre-line;\n}\npage-trainings .input-wrap {\n  padding: 5px;\n  display: flex;\n}\npage-trainings .input-wrap textarea {\n  flex: 1;\n  border: 0;\n  border-bottom: 1px #387ef5;\n  border-style: solid;\n}\npage-trainings .message-wrap {\n  padding: 0 10px;\n}\npage-trainings .message-wrap .message {\n  position: relative;\n  padding: 7px 0;\n}\npage-trainings .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\npage-trainings .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block;\n}\npage-trainings .message-wrap .message .msg-detail p {\n  margin: 0;\n}\npage-trainings .message-wrap .message .msg-detail .msg-info p {\n  font-size: 0.8em;\n  color: #888;\n}\npage-trainings .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  color: #fff;\n  width: auto;\n  max-width: 80%;\n}\npage-trainings .message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  transform: rotate(45deg);\n  position: absolute;\n}\npage-trainings .message-wrap .message.left .msg-content {\n  background-color: #fff;\n  float: left;\n}\npage-trainings .message-wrap .message.left .msg-detail {\n  padding-left: 60px;\n}\npage-trainings .message-wrap .message.left .user-img {\n  left: 0;\n}\npage-trainings .message-wrap .message.left .msg-detail .msg-content {\n  color: #343434;\n}\npage-trainings .message-wrap .message.left .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px;\n}\npage-trainings .message-wrap .message.right .msg-detail {\n  padding-right: 60px;\n}\npage-trainings .message-wrap .message.right .msg-detail .msg-info {\n  text-align: right;\n}\npage-trainings .message-wrap .message.right .user-img {\n  right: 0;\n}\npage-trainings .message-wrap .message.right ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px;\n}\npage-trainings .message-wrap .message.right .msg-detail .msg-content {\n  background-color: #387ef5;\n  float: right;\n}\npage-trainings .message-wrap .message.right .msg-detail .msg-content span.triangle {\n  background-color: #387ef5;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtBQUFSO0FBRUk7RUFDSSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUFSO0FBRUk7RUFDSSxxQkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFSO0FBRUk7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUFBUjtBQUVJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBQVI7QUFFSTtFQUNJLFNBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQVI7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQVI7QUFFSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxzQkFBQTtFQUNBLFdBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUVJO0VBQ0ksT0FBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFFSTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBQVI7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUFFSTtFQUNJLFFBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFSO0FBRUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFBUjtBQUVJO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUFSIiwiZmlsZSI6InRyYWluaW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXRyYWluaW5ncyB7XG4gICAgaW9uLWNvbnRlbnQgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICB9XG4gICAgaW9uLWZvb3RlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgaGVpZ2h0OiAyNTVweDtcbiAgICB9XG4gICAgLmxpbmUtYnJlYWtlciB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICB9XG4gICAgLmlucHV0LXdyYXAge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5pbnB1dC13cmFwIHRleHRhcmVhIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggIzM4N2VmNTtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB9XG4gICAgLm1lc3NhZ2Utd3JhcCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogN3B4IDA7XG4gICAgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLnVzZXItaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gICAgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHAge1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgIH1cbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQgc3Bhbi50cmlhbmdsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctY29udGVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAudXNlci1pbWcge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAgICAgY29sb3I6ICMzNDM0MzQ7XG4gICAgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQgc3Bhbi50cmlhbmdsZSB7XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgbGVmdDogLTVweDtcbiAgICB9XG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gICAgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLnVzZXItaW1nIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgaW9uLXNwaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 15894:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trainings/trainings.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons ion-button menuToggle>\n          <button ion-button left menuToggle=\"menu\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title> Capacitaciones </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"content content-md\">\n<div class=\"fixed-content\" style=\"margin-top: 56px; margin-bottom: 55px;\"></div>\n  <div class=\"scroll-content\" >\n    <div _ngcontent-c0=\"\" class=\"message-wrap\">\n\n      <div *ngFor=\"let message of send_messages \">\n\n        <div *ngIf=\"message.channel == 2\" >\n\n          <div class=\"\" *ngIf=\"this.user != message.sender\">\n\n            <div class=\"message left\">\n              <img alt=\"\" class=\"user-img\" src=\"../../../assets/imgs/icov.png\">\n              <div class=\"msg-detail\">\n                  <div class=\"msg-info\">\n                    <p> {{ message.sender }} </p>\n                    <p> {{ message.created_at | date:'dd/MM/yyyy HH:mm' }} </p>\n                  </div>\n                  <div class=\"msg-content\">\n                    <span  class=\"triangle\"></span>\n                    <p class=\"line-breaker \"> {{ message.message }}</p>\n                  </div>\n              </div>\n            </div>\n\n          </div>\n\n          <div *ngIf=\"this.user == message.sender\">\n              <div class=\"message right\">\n\n                  <img alt=\"\" class=\"user-img\" src=\"../../../assets/imgs/icov.png\">\n                  <div class=\"msg-detail\">\n                      <div class=\"msg-info\">\n                        <p > {{ message.created_at | date:'dd/MM/yyyy HH:mm'}} </p>\n                      </div>\n                      <div class=\"msg-content\">\n                        <span class=\"triangle\"></span>\n                        <p class=\"line-breaker \">{{message.message}}</p>\n                      </div>\n                  </div>\n              </div>\n\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer  style=\"height: 55px;\">\n\n  <form  (ngSubmit)='submit()'>\n      <div _ngcontent-c0=\"\" class=\"input-wrap\">\n\n          <button class=\"button button-md button-clear button-clear-md\">\n            <span class=\"button-inner\"> <ion-icon name=\"happy\"></ion-icon> </span>\n          </button>\n\n          <ion-input placeholder=\"Escriba su mensaje\" name=\"message\"\n           [(ngModel)]='message' value=\"{{message}}\">\n         </ion-input>\n\n          <button class=\"button button-md button-clear button-clear-md\">\n            <span class=\"button-inner\"> <ion-icon name=\"send\"></ion-icon> </span>\n          <div class=\"button-effect\" ></div></button>\n\n      </div>\n  </form>\n\n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_trainings_trainings_module_ts-es2015.js.map