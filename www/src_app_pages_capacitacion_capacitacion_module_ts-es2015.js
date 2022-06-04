(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_capacitacion_capacitacion_module_ts"],{

/***/ 82552:
/*!*******************************************************************!*\
  !*** ./src/app/pages/capacitacion/capacitacion-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitacionPageRoutingModule": function() { return /* binding */ CapacitacionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _capacitacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitacion.page */ 43212);




const routes = [
    {
        path: '',
        component: _capacitacion_page__WEBPACK_IMPORTED_MODULE_0__.CapacitacionPage
    }
];
let CapacitacionPageRoutingModule = class CapacitacionPageRoutingModule {
};
CapacitacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CapacitacionPageRoutingModule);



/***/ }),

/***/ 7409:
/*!***********************************************************!*\
  !*** ./src/app/pages/capacitacion/capacitacion.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitacionPageModule": function() { return /* binding */ CapacitacionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capacitacion-routing.module */ 82552);
/* harmony import */ var _capacitacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capacitacion.page */ 43212);







let CapacitacionPageModule = class CapacitacionPageModule {
};
CapacitacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _capacitacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.CapacitacionPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_capacitacion_page__WEBPACK_IMPORTED_MODULE_1__.CapacitacionPage]
    })
], CapacitacionPageModule);



/***/ }),

/***/ 43212:
/*!*********************************************************!*\
  !*** ./src/app/pages/capacitacion/capacitacion.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitacionPage": function() { return /* binding */ CapacitacionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_capacitacion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./capacitacion.page.html */ 58166);
/* harmony import */ var _capacitacion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capacitacion.page.scss */ 37173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/comunicacion-component.service */ 8077);
/* harmony import */ var src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite-service.service */ 61412);
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notificaciones.service */ 91319);
/* harmony import */ var src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/socket-service.service */ 20905);












let CapacitacionPage = class CapacitacionPage {
    constructor(navCtrl, _comunic, _sqlite, _notification, _socket, _camera) {
        this.navCtrl = navCtrl;
        this._comunic = _comunic;
        this._sqlite = _sqlite;
        this._notification = _notification;
        this._socket = _socket;
        this._camera = _camera;
        this.listCapacitados = new Array();
        this.showEmojiPicker = false;
        this.editorMsg = '';
        this.userData = null;
        this.photo = null;
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
        });
        console.log('ddd');
        this.updateArray();
        this.getCapacitados();
        try {
            let user_data_parse_json = localStorage.getItem('userData');
            let user_data_json_parse = JSON.parse(user_data_parse_json);
            this.userData = user_data_json_parse[0];
            console.log('userData-capacitación: ', this.userData);
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
    ionViewDidLoad() {
        console.log('ionViewDidLoad CapacitacionPage');
    }
    changeDate(fecha) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(fecha).format('YYYY-MM-DD HH:mm:ss');
    }
    getCapacitados() {
        this._notification.getHistorialCapacitation().then((capacitation) => {
            console.log('capacitasion: ', capacitation);
            capacitation.forEach(element => {
                if (this.userData.email === element.recipient) {
                    this.listCapacitados.push(element);
                }
            });
            console.log('getHistorialMessageCapacitation: ', capacitation);
        }, err => {
            //historial desde sqlite
        });
    }
    updateArray() {
        this._comunic.itemComunicacion.subscribe((notificaciones) => {
            console.log('notificacion-updateArray: ', notificaciones);
            if (notificaciones.name === 'new-notification') {
                if (notificaciones.item.event === 'capacitacion') {
                    console.log('updateArray-capacitacion-notificacion:', notificaciones);
                    if (this.userData.email === notificaciones.item.recipient) {
                        this.listCapacitados.push(notificaciones.item);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let messageCapacitacion = {
                user_created: this.userData.email,
                message: this.messageForm.value.message,
                image: this.photo,
                created_at: new Date(),
                recipient: this.userData.email
            };
            this._socket.addNotificacionCapacitacion(messageCapacitacion);
            this.messageForm.reset();
            //  let add_capacitation_response = await  this._notification.addCapacitation(messageCapacitacion);
            //  console.log('add_capacitation_response:',add_capacitation_response);
            this.bottomScroll();
        });
    }
    cargarPhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this._camera.getPicture({
                quality: 75,
                destinationType: this._camera.DestinationType.FILE_URI,
                encodingType: this._camera.EncodingType.JPEG,
                mediaType: this._camera.MediaType.PICTURE,
                saveToPhotoAlbum: false
            }).then((picture) => {
                this.photo = "data:image/jpeg;base64," + picture;
                setTimeout(() => {
                    console.log('cameraphoto: ', this.photo);
                }, 2000);
            }, errorCamara => {
                console.log('errorCamara: ', errorCamara);
            });
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
CapacitacionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_4__.ComunicacionComponentService },
    { type: src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_5__.SqliteServiceService },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_6__.NotificacionesService },
    { type: src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_7__.SocketServiceService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera }
];
CapacitacionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent,] }],
    messageInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['chat_input',] }]
};
CapacitacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-capacitacion',
        template: _raw_loader_capacitacion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_capacitacion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CapacitacionPage);



/***/ }),

/***/ 37173:
/*!***********************************************************!*\
  !*** ./src/app/pages/capacitacion/capacitacion.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-capacitacion {\n  /* Chat containers */\n  /* Darker chat container */\n  /* Clear floats */\n  /* Style images */\n  /* Style the right image */\n  /* Style time text */\n  /* Style time text */\n}\npage-capacitacion .container {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n}\npage-capacitacion .darker {\n  border-color: #ccc;\n  background-color: #ddd;\n}\npage-capacitacion .container::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\npage-capacitacion .container img {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%;\n}\npage-capacitacion .container img.right {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0;\n}\npage-capacitacion .time-right {\n  float: right;\n  color: #aaa;\n}\npage-capacitacion .time-left {\n  float: left;\n  color: #999;\n}\n.ionic-content {\n  --offset-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcGFjaXRhY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUErRkssb0JBQUE7RUFTTCwwQkFBQTtFQU1BLGlCQUFBO0VBT0EsaUJBQUE7RUFTQSwwQkFBQTtFQU9BLG9CQUFBO0VBTUEsb0JBQUE7QUFuSUE7QUF3RkM7RUFDQyx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQXRGRjtBQTBGQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUF4RkY7QUE0RkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUExRkY7QUE4RkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNUZGO0FBZ0dBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQTlGRjtBQWtHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBaEdGO0FBb0dBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFsR0Y7QUFxR0E7RUFDRSw2QkFBQTtBQWxHRiIsImZpbGUiOiJjYXBhY2l0YWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1jYXBhY2l0YWNpb24ge1xuICAgIC8vIGlvbi1jb250ZW50IC5zY3JvbGwtY29udGVudCB7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IH1cbiAgICAgIFxuICAgIC8vICAgaW9uLWZvb3RlciB7XG4gICAgLy8gICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvLyAgICAgaGVpZ2h0OiAyNTVweDsgfVxuICAgICAgXG4gICAgLy8gICAubGluZS1icmVha2VyIHtcbiAgICAvLyAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lOyB9XG4gICAgICBcbiAgICAvLyAgIC5pbnB1dC13cmFwIHtcbiAgICAvLyAgICAgcGFkZGluZzogNXB4O1xuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgLy8gICAgIC5pbnB1dC13cmFwIHRleHRhcmVhIHtcbiAgICAvLyAgICAgICBmbGV4OiAxO1xuICAgIC8vICAgICAgIGJvcmRlcjogMDtcbiAgICAvLyAgICAgICBib3JkZXItYm90dG9tOiAxcHggIzM4N2VmNTtcbiAgICAvLyAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XG4gICAgICBcbiAgICAvLyAgIC5tZXNzYWdlLXdyYXAge1xuICAgIC8vICAgICBwYWRkaW5nOiAwIDEwcHg7IH1cbiAgICAvLyAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSB7XG4gICAgLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vICAgICAgIHBhZGRpbmc6IDdweCAwOyB9XG4gICAgLy8gICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAudXNlci1pbWcge1xuICAgIC8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICAvLyAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgIC8vICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgIC8vICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpOyB9XG4gICAgLy8gICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCB7XG4gICAgLy8gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC8vICAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCBwIHtcbiAgICAvLyAgICAgICAgICAgbWFyZ2luOiAwOyB9XG4gICAgLy8gICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctaW5mbyBwIHtcbiAgICAvLyAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIC8vICAgICAgICAgICBjb2xvcjogIzg4ODsgfVxuICAgIC8vICAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xuICAgIC8vICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAvLyAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgLy8gICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgLy8gICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIC8vICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAvLyAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7IH1cbiAgICAvLyAgICAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQgc3Bhbi50cmlhbmdsZSB7XG4gICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAvLyAgICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAvLyAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNkZGQ7XG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLy8gICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLy8gICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgIC8vICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1jb250ZW50IHtcbiAgICAvLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC8vICAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgLy8gICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCB7XG4gICAgLy8gICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4OyB9XG4gICAgLy8gICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAudXNlci1pbWcge1xuICAgIC8vICAgICAgIGxlZnQ6IDA7IH1cbiAgICAvLyAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XG4gICAgLy8gICAgICAgY29sb3I6ICMzNDM0MzQ7IH1cbiAgICAvLyAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHNwYW4udHJpYW5nbGUge1xuICAgIC8vICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgICAvLyAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAvLyAgICAgICAgIGxlZnQ6IC01cHg7IH1cbiAgICAvLyAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCB7XG4gICAgLy8gICAgICAgcGFkZGluZy1yaWdodDogNjBweDsgfVxuICAgIC8vICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcbiAgICAvLyAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgLy8gICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLnVzZXItaW1nIHtcbiAgICAvLyAgICAgICByaWdodDogMDsgfVxuICAgIC8vICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IGlvbi1zcGlubmVyIHtcbiAgICAvLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgLy8gICAgICAgdG9wOiA1MHB4OyB9XG4gICAgLy8gICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAvLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xuICAgIC8vICAgICAgIGZsb2F0OiByaWdodDsgfVxuICAgIC8vICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHNwYW4udHJpYW5nbGUge1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgICAvLyAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgLy8gICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICAvLyAgICAgICAgIHJpZ2h0OiAtNXB4OyB9XG5cblxuICAgICAvKiBDaGF0IGNvbnRhaW5lcnMgKi9cbiAuY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLyogRGFya2VyIGNoYXQgY29udGFpbmVyICovXG4uZGFya2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiBTdHlsZSBpbWFnZXMgKi9cbi5jb250YWluZXIgaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1heC13aWR0aDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBTdHlsZSB0aGUgcmlnaHQgaW1hZ2UgKi9cbi5jb250YWluZXIgaW1nLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OjA7XG59XG5cbi8qIFN0eWxlIHRpbWUgdGV4dCAqL1xuLnRpbWUtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4vKiBTdHlsZSB0aW1lIHRleHQgKi9cbi50aW1lLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICM5OTk7XG59XG59XG4uaW9uaWMtY29udGVudCB7XG4gIC0tb2Zmc2V0LWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ 58166:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/capacitacion/capacitacion.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the CapacitacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border slot=\"fixed\">\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Capacitaciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\"  >\n\n\n  <!-- [class.left]=\" msg.userId === toUser.id \"\n    [class.right]=\" msg.userId === user.id \" -->\n\n<!-- \n  <div class=\"message-wrap\">\n\n    <div *ngFor=\"let msg of listCapacitados\" class=\"message\">\n\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n\n            <img class=\"user-img\" src=\"assets/imgs/chat_local.png\" alt=\"\">\n\n          </ion-col>\n          <ion-col col-9>\n            <div class=\"msg-info\">\n              <p>\n                {{msg?.user_created}}&nbsp;&nbsp;&nbsp;{{msg?.created_at}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <br />\n      <div class=\"msg-detail\">\n\n        <div class=\"msg-content\">\n    \n\n          <p style=\"color:gray\">{{msg?.message}}</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n -->\n\n<!-- nuevo chat mensajes style -->\n \n\n<div *ngFor=\"let capacitado of listCapacitados\" id=\"chatRoom\">\n  <div *ngIf=\"capacitado?.recipient!=userData?.email\"  class=\"container\">\n      <div class=\"right\">\n          <strong><p>{{capacitado?.user_created}}</p></strong>\n      </div>\n      <p>{{capacitado?.message}}</p>\n      <span class=\"time-right\">{{capacitado?.created_at}}</span>\n    </div>\n    <div  *ngIf=\"capacitado?.recipient===userData?.email\"  class=\"container darker \">\n        <div>\n            <strong><p>{{capacitado?.user_created}}</p></strong>\n        </div>\n      <p>{{capacitado?.message}}</p>\n      <span class=\"time-right\">{{ changeDate(capacitado?.created_at)}}</span>\n    </div>\n</div>\n\n\n\n\n\n\n</ion-content>\n<ion-footer no-border  style=\"background: white;\">\n  \n  <div class=\"input-wrap\">\n    <!-- <button ion-button clear icon-only item-right (click)=\"switchEmojiPicker()\">\n        <ion-icon name=\"md-happy\"></ion-icon>\n      </button> -->\n      <ion-grid>\n        <ion-row>\n          <ion-col col-11>\n            <form [formGroup]=\"messageForm\">\n                <ion-textarea formControlName=\"message\" placeholder=\"Registre su mensaje\"></ion-textarea>\n              <!-- <textarea formControlName=\"message\">\n              </textarea> -->\n        \n            </form>\n\n          </ion-col>\n          <ion-col col-1 class=\"ion-text-end\">\n              <!-- <button ion-button clear icon-only item-right  (click)=\"cargarPhoto()\">\n                  <ion-icon *ngIf=\"photo==null\" name=\"camera\"></ion-icon>\n                  <ion-icon *ngIf=\"photo!=null\" style=\"color:#18FFFF\" name=\"camera\"></ion-icon>\n                </button> -->\n            \n            <ion-button fill=\"clear\"  [disabled]=\"!messageForm?.valid\" (click)=\"enviarMensaje()\">\n              \n            \n              <ion-icon name=\"send\" slot=\"icon-only\" color=\"violet\"></ion-icon>\n            </ion-button>\n          \n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </div>\n  <!-- <emoji-picker [(ngModel)]=\"editorMsg\"></emoji-picker> -->\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_capacitacion_capacitacion_module_ts-es2015.js.map