(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_incidencias_incidencias_module_ts"],{

/***/ 69498:
/*!*****************************************************************!*\
  !*** ./src/app/pages/incidencias/incidencias-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidenciasPageRoutingModule": function() { return /* binding */ IncidenciasPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incidencias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incidencias.page */ 36754);




const routes = [
    {
        path: '',
        component: _incidencias_page__WEBPACK_IMPORTED_MODULE_0__.IncidenciasPage
    }
];
let IncidenciasPageRoutingModule = class IncidenciasPageRoutingModule {
};
IncidenciasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncidenciasPageRoutingModule);



/***/ }),

/***/ 44679:
/*!*********************************************************!*\
  !*** ./src/app/pages/incidencias/incidencias.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidenciasPageModule": function() { return /* binding */ IncidenciasPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _incidencias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incidencias-routing.module */ 69498);
/* harmony import */ var _incidencias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incidencias.page */ 36754);







let IncidenciasPageModule = class IncidenciasPageModule {
};
IncidenciasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _incidencias_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncidenciasPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_incidencias_page__WEBPACK_IMPORTED_MODULE_1__.IncidenciasPage]
    })
], IncidenciasPageModule);



/***/ }),

/***/ 36754:
/*!*******************************************************!*\
  !*** ./src/app/pages/incidencias/incidencias.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncidenciasPage": function() { return /* binding */ IncidenciasPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incidencias_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incidencias.page.html */ 1753);
/* harmony import */ var _incidencias_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incidencias.page.scss */ 18317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comunicacion-component.service */ 8077);
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notificaciones.service */ 91319);
/* harmony import */ var src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/socket-service.service */ 20905);
/* harmony import */ var src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite-service.service */ 61412);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);











let IncidenciasPage = class IncidenciasPage {
    constructor(navCtrl, _comunic, _sqlite, _notification, _socket) {
        this.navCtrl = navCtrl;
        this._comunic = _comunic;
        this._sqlite = _sqlite;
        this._notification = _notification;
        this._socket = _socket;
        this.listIncidencias = new Array();
        this.showEmojiPicker = false;
        this.editorMsg = '';
        this.userData = null;
        this.photo = null;
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
        });
        this.updateArray();
        this.getIncidencias();
        try {
            let user_data_parse_json = localStorage.getItem('userData');
            let user_data_json_parse = JSON.parse(user_data_parse_json);
            this.userData = user_data_json_parse[0];
            console.log('userData-incidencias: ', this.userData);
            this.bottomScroll();
        }
        catch (e) { }
        //   setTimeout(()=>{
        //     console.log('user-data-capacitación: ',this.userData);
        //   },2000);
        // }
    }
    ngOnInit() {
    }
    changeDate(fecha) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(fecha).format('YYYY-MM-DD HH:mm:ss');
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CapacitacionPage');
    }
    getIncidencias() {
        this._notification.getHistorialIncidencias().then((incidencias) => {
            console.log('getIncidencias: ', incidencias);
            incidencias.forEach(element => {
                if (this.userData.email === element.recipient) {
                    this.listIncidencias.push(element);
                }
            });
            console.log('getHistorialMessageIncidencias: ', incidencias);
        }, err => {
            //historial desde sqlite
        });
    }
    updateArray() {
        this._comunic.itemComunicacion.subscribe((notificaciones) => {
            if (notificaciones.name === 'new-notification') {
                if (notificaciones.item.event === 'incidencias') {
                    if (this.userData.email === notificaciones.item.recipient) {
                        this.listIncidencias.push(notificaciones.item);
                    }
                }
            }
        });
    }
    switchEmojiPicker() {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        //this.content.resize();
        this.scrollToBottom();
    }
    focus() {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    }
    setTextareaScroll() {
        const textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    }
    scrollToBottom() {
        setTimeout(() => {
            if (this.content.scrollToBottom) {
                this.content.scrollToBottom();
            }
        }, 400);
    }
    marcarLeido() {
    }
    enviarMensaje() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let messageIncidencia = {
                user_created: this.userData.email,
                message: this.messageForm.value.message,
                // image: this.photo,
                created_at: new Date(),
                recipient: this.userData.email
            };
            this._socket.addNotificacionIncidencia(messageIncidencia);
            this.messageForm.reset();
            //  let add_capacitation_response = await  this._notification.addCapacitation(messageCapacitacion);
            //  console.log('add_capacitation_response:',add_capacitation_response);
            this.bottomScroll();
        });
    }
    bottomScroll() {
        // setTimeout(() => {
        //   let chat = document.getElementById("chatRoom");
        //    chat.scroll({
        //      top: chat.scrollHeight,
        //      behavior: 'smooth'
        //    });
        //  }, 2000);
        $('#chatRoom').animate({
            scrollTop: $('#chatRoom').get(0).scrollHeight
        }, 1500);
    }
};
IncidenciasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__.ComunicacionComponentService },
    { type: src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_5__.SqliteServiceService },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__.NotificacionesService },
    { type: src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_4__.SocketServiceService }
];
IncidenciasPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent,] }],
    messageInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['chat_input',] }]
};
IncidenciasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-incidencias',
        template: _raw_loader_incidencias_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incidencias_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IncidenciasPage);



/***/ }),

/***/ 18317:
/*!*********************************************************!*\
  !*** ./src/app/pages/incidencias/incidencias.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-incidencias {\n  /* Chat containers */\n  /* Darker chat container */\n  /* Clear floats */\n  /* Style images */\n  /* Style the right image */\n  /* Style time text */\n  /* Style time text */\n}\npage-incidencias .container {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n}\npage-incidencias .darker {\n  border-color: #ccc;\n  background-color: #ddd;\n}\npage-incidencias .container::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\npage-incidencias .container img {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%;\n}\npage-incidencias .container img.right {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0;\n}\npage-incidencias .time-right {\n  float: right;\n  color: #aaa;\n}\npage-incidencias .time-left {\n  float: left;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2lkZW5jaWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQStGUyxvQkFBQTtFQVNULDBCQUFBO0VBTUEsaUJBQUE7RUFPQSxpQkFBQTtFQVNBLDBCQUFBO0VBT0Esb0JBQUE7RUFNQSxvQkFBQTtBQW5JQTtBQXdGQztFQUNDLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBdEZGO0FBMEZBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQXhGRjtBQTRGQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQTFGRjtBQThGQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUE1RkY7QUFnR0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBOUZGO0FBa0dBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFoR0Y7QUFvR0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQWxHRiIsImZpbGUiOiJpbmNpZGVuY2lhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWluY2lkZW5jaWFzIHtcbiAgICAvLyBpb24tY29udGVudCAuc2Nyb2xsLWNvbnRlbnQge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OyB9XG4gICAgICBcbiAgICAvLyAgIGlvbi1mb290ZXIge1xuICAgIC8vICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLy8gICAgIGhlaWdodDogMjU1cHg7IH1cbiAgICAgIFxuICAgIC8vICAgLmxpbmUtYnJlYWtlciB7XG4gICAgLy8gICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgfVxuICAgICAgXG4gICAgLy8gICAuaW5wdXQtd3JhcCB7XG4gICAgLy8gICAgIHBhZGRpbmc6IDVweDtcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDsgfVxuICAgIC8vICAgICAuaW5wdXQtd3JhcCB0ZXh0YXJlYSB7XG4gICAgLy8gICAgICAgZmxleDogMTtcbiAgICAvLyAgICAgICBib3JkZXI6IDA7XG4gICAgLy8gICAgICAgYm9yZGVyLWJvdHRvbTogMXB4ICMzODdlZjU7XG4gICAgLy8gICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxuICAgICAgXG4gICAgLy8gICAubWVzc2FnZS13cmFwIHtcbiAgICAvLyAgICAgcGFkZGluZzogMCAxMHB4OyB9XG4gICAgLy8gICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2Uge1xuICAgIC8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyAgICAgICBwYWRkaW5nOiA3cHggMDsgfVxuICAgIC8vICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLnVzZXItaW1nIHtcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgLy8gICAgICAgICB3aWR0aDogNDVweDtcbiAgICAvLyAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAvLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjM2KTsgfVxuICAgIC8vICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwge1xuICAgIC8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAvLyAgICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgcCB7XG4gICAgLy8gICAgICAgICAgIG1hcmdpbjogMDsgfVxuICAgIC8vICAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWluZm8gcCB7XG4gICAgLy8gICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAvLyAgICAgICAgICAgY29sb3I6ICM4ODg7IH1cbiAgICAvLyAgICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAvLyAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgLy8gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgIC8vICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIC8vICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAvLyAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgLy8gICAgICAgICAgIG1heC13aWR0aDogODAlOyB9XG4gICAgLy8gICAgICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHNwYW4udHJpYW5nbGUge1xuICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC8vICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgLy8gICAgICAgICAgICAgdG9wOiAxMnB4O1xuICAgIC8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xuICAgIC8vICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIC8vICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC8vICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAvLyAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctY29udGVudCB7XG4gICAgLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvLyAgICAgICBmbG9hdDogbGVmdDsgfVxuICAgIC8vICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwge1xuICAgIC8vICAgICAgIHBhZGRpbmctbGVmdDogNjBweDsgfVxuICAgIC8vICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLnVzZXItaW1nIHtcbiAgICAvLyAgICAgICBsZWZ0OiAwOyB9XG4gICAgLy8gICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xuICAgIC8vICAgICAgIGNvbG9yOiAjMzQzNDM0OyB9XG4gICAgLy8gICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgICAvLyAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgLy8gICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgLy8gICAgICAgICBsZWZ0OiAtNXB4OyB9XG4gICAgLy8gICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwge1xuICAgIC8vICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7IH1cbiAgICAvLyAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctaW5mbyB7XG4gICAgLy8gICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgIC8vICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC51c2VyLWltZyB7XG4gICAgLy8gICAgICAgcmlnaHQ6IDA7IH1cbiAgICAvLyAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCBpb24tc3Bpbm5lciB7XG4gICAgLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIC8vICAgICAgIHRvcDogNTBweDsgfVxuICAgIC8vICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XG4gICAgLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgICAvLyAgICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgICAvLyAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODdlZjU7XG4gICAgLy8gICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgIC8vICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgLy8gICAgICAgICByaWdodDogLTVweDsgfVxuXG5cbiAgICAgICAgIC8qIENoYXQgY29udGFpbmVycyAqL1xuIC5jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4vKiBEYXJrZXIgY2hhdCBjb250YWluZXIgKi9cbi5kYXJrZXIge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi8qIFN0eWxlIGltYWdlcyAqL1xuLmNvbnRhaW5lciBpbWcge1xuICBmbG9hdDogbGVmdDtcbiAgbWF4LXdpZHRoOiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFN0eWxlIHRoZSByaWdodCBpbWFnZSAqL1xuLmNvbnRhaW5lciBpbWcucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6MDtcbn1cblxuLyogU3R5bGUgdGltZSB0ZXh0ICovXG4udGltZS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi8qIFN0eWxlIHRpbWUgdGV4dCAqL1xuLnRpbWUtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzk5OTtcbn1cbn0iXX0= */");

/***/ }),

/***/ 1753:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/incidencias/incidencias.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the IncidenciasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons ion-button menuToggle>\n      <button ion-button left menuToggle=\"menu\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title> Incidencias </ion-title>\n  </ion-toolbar>\n</ion-header>-->\n\n<ion-header no-border slot=\"fixed\">\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Incidencias</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" >\n<!-- \n  <div class=\"message-wrap\">\n\n      <div *ngFor=\"let msg of listIncidencias\" class=\"message\">\n  \n  \n        <ion-grid>\n          <ion-row>\n            <ion-col col-3>\n  \n              <img class=\"user-img\" src=\"assets/imgs/chat_local.png\" alt=\"\">\n  \n            </ion-col>\n            <ion-col col-9>\n              <div class=\"msg-info\">\n                <p>\n                  {{msg?.user_created}}&nbsp;&nbsp;&nbsp;{{msg?.created_at}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  \n       \n        <br />\n        <div class=\"msg-detail\">\n  \n          <div class=\"msg-content\">\n     \n  \n            <p style=\"color:gray\">{{msg?.message}}</p>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n   -->\n\n\n    <div *ngFor=\"let capacitado of listIncidencias\" id=\"chatRoom\">\n      <div *ngIf=\"capacitado?.recipient!=userData?.email\"  class=\"container\">\n          <div class=\"right\">\n              <strong><p>{{capacitado?.user_created}}</p></strong>\n          </div>\n          <p>{{capacitado?.message}}</p>\n          <span class=\"time-right\">{{capacitado?.created_at}}</span>\n        </div>\n        <div  *ngIf=\"capacitado?.recipient===userData?.email\"  class=\"container darker \">\n            <div>\n                <strong><p>{{capacitado?.user_created}}</p></strong>\n            </div>\n          <p>{{capacitado?.message}}</p>\n          <span class=\"time-right\">{{ changeDate(capacitado?.created_at)}}</span>\n        </div>\n    </div>\n    \n    \n\n\n  \n  \n  </ion-content>\n  <ion-footer no-border  style=\"background: white;\">\n    \n    <div class=\"input-wrap\">\n      <!-- <button ion-button clear icon-only item-right (click)=\"switchEmojiPicker()\">\n          <ion-icon name=\"md-happy\"></ion-icon>\n        </button> -->\n        <ion-grid>\n          <ion-row>\n            <ion-col col-11>\n              <form [formGroup]=\"messageForm\">\n                  <ion-textarea formControlName=\"message\" placeholder=\"Registre su mensaje\"></ion-textarea>\n                <!-- <textarea formControlName=\"message\">\n                </textarea> -->\n          \n              </form>\n  \n            </ion-col>\n            <ion-col col-1 class=\"ion-text-end\">\n              \n              <ion-button fill=\"clear\"  [disabled]=\"!messageForm?.valid\" (click)=\"enviarMensaje()\">\n                <ion-icon name=\"send\" slot=\"icon-only\" color=\"violet\"></ion-icon>\n              </ion-button>\n  \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n    <!-- <emoji-picker [(ngModel)]=\"editorMsg\"></emoji-picker> -->\n  </ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_incidencias_incidencias_module_ts-es2015.js.map