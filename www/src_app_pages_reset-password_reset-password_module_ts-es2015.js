(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_reset-password_reset-password_module_ts"],{

/***/ 60794:
/*!***********************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageRoutingModule": function() { return /* binding */ ResetPasswordPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page */ 6604);




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ 38573:
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageModule": function() { return /* binding */ ResetPasswordPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _hackages_ngxerrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hackages/ngxerrors */ 54616);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password-routing.module */ 60794);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password.page */ 6604);








let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _hackages_ngxerrors__WEBPACK_IMPORTED_MODULE_0__.NgxErrorsModule
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordPage]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ 6604:
/*!*************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": function() { return /* binding */ ResetPasswordPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reset-password.page.html */ 30986);
/* harmony import */ var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss */ 26812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);








let ResetPasswordPage = class ResetPasswordPage {
    constructor(navCtrl, userService, fb, toastCtrl, route) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.user_token = 'null';
        this.user_uid = 'null';
        this.form_password = fb.group({
            // email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)])],
            confirmPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)])]
        }, { validator: this.checkIfMatchingPasswords('password', 'confirmPass') });
        this.form = fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email])],
        });
    }
    ngOnInit() {
    }
    checkIfMatchingPasswords(passwordKey, passwordConfirmationKey) {
        return (group) => {
            let passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ResetPasswordPage');
    }
    resetPassword() {
        let form = this.form.value;
        let form_data = new FormData;
        form_data.append('email', form.email);
        this.userService.reset_password(form_data).subscribe(data => {
            /*let toast = this.toastCtrl.create({
              message: 'Tu email es válido, cambia tu contraseña',
              showCloseButton: true,
              closeButtonText: 'Ok'
            });
            toast.present();*/
            this.tostFound('Tu correo es válido, cambia tu contraseña');
            this.user_token = data.token;
            this.user_uid = data.uid;
        }, error => {
            /* let toast = this.toastCtrl.create({
               message: 'Tu email es no se encuentra registrado',
               showCloseButton: true,
               closeButtonText: 'Ok'
             });
             toast.present();*/
            this.tostFound('Tu correo es no se encuentra registrado');
            console.log(error);
        });
    }
    confirmPassword() {
        let uid = this.user_uid;
        let token = this.user_token;
        let form = this.form_password.value;
        let form_data = new FormData;
        form_data.append('new_password1', form.password);
        form_data.append('new_password2', form.confirmPass);
        form_data.append('token', token);
        form_data.append('uid', uid);
        // form_data.append('email', form.email);
        this.userService.confirm_password(form_data, uid, token).subscribe(data => {
            /*let toast = this.toastCtrl.create({
              message: 'Has cambiado correctamente tu contraseña!',
              showCloseButton: true,
              closeButtonText: 'Ok'
            });
            toast.present();*/
            this.tostFound('¡Has cambiado correctamente tu contraseña!');
            //this.navCtrl.push(LoginPage);
            this.route.navigateByUrl('login');
        }, error => {
            /*let toast = this.toastCtrl.create({
              message: error.new_password2,
              showCloseButton: true,
              closeButtonText: 'Ok'
            });
            toast.present();*/
            this.tostFound(error.new_password2);
            console.log(JSON.stringify(error));
        });
    }
    tostFound(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
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
            yield toast.present();
        });
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_2__.UserServicesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetPasswordPage);



/***/ }),

/***/ 26812:
/*!***************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-reset-password .reset_pass_img {\n  position: relative;\n  left: 29%;\n}\npage-reset-password img {\n  height: 170px;\n  width: 170px;\n}\npage-reset-password button {\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\npage-reset-password a {\n  margin: 8px;\n  text-decoration: none;\n}\npage-reset-password p {\n  color: #337ab7;\n  margin: 8px;\n}\npage-reset-password label {\n  display: block;\n}\npage-reset-password #hereSpan {\n  color: #FF6702;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUROO0FBS0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUhSO0FBS0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFVSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQVJSO0FBVUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQVJSO0FBV0k7RUFDSSxjQUFBO0FBVFI7QUFXSTtFQUNJLGNBQUE7QUFUUiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXJlc2V0LXBhc3N3b3JkIHtcblxuICAgIC5yZXNldF9wYXNzX2ltZ3tcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6MjklXG4gICAgfVxuICBcbiAgXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgLy8gZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICMzMzdhYjc7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICBcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgI2hlcmVTcGFuIHtcbiAgICAgICAgY29sb3I6ICNGRjY3MDI7XG4gICAgfVxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ 30986:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-password/reset-password.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the ResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Recuperar contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n\n  \n  <!-- <ion-content padding id=\"loginCont\"> -->\n  <!-- <img src=\"assets/imgs/RedReparto512.png\" alt=\"\" class=\"reset_pass_img\"> -->\n\n  <!-- <ion-card-header color=\"primary\">Trade App</ion-card-header/> -->\n  <!-- <p>TOKEN: {{user_token}}</p> -->\n  <div *ngIf=\"user_token == 'null'\">\n    <div style=\"text-align: center;\">\n        <img  src=\"../../../assets/imgs/trade.png\" alt=\"\" >\n        <br/><br/><br/><br/><br/>\n      <form (ngSubmit)=\"resetPassword()\" [formGroup]=\"form\">\n        <ion-list>\n          <ion-item>\n            <ion-label floating color=\"primary\">\n              <ion-icon color=\"violet\" name=\"mail\"></ion-icon> Correo\n            </ion-label>\n            <ion-input type=\"email\" name=\"email\" required maxlength=\"50\" formControlName=\"email\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div style=\"text-align: center;\">\n          <ion-button color=\"violet\" full type=\"submit\" [disabled]=\"!form.valid\">Comprobar Correo</ion-button>\n        </div>\n      </form>\n      \n    </div>\n \n  </div>\n\n  <div *ngIf=\"user_token != 'null'\">\n    <div center>\n      <form (ngSubmit)=\"confirmPassword()\" [formGroup]=\"form_password\">\n        <ion-list>\n  \n          <!-- Pass input -->\n          <ion-item [ngClass]=\"{ invalid: passwordErrors.hasError('*', ['touched']) }\">\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n            <ion-label floating color=\"primary\" style=\"font-size: 14px;\">\n              <ion-icon color=\"violet\" name=\"finger-print\"></ion-icon> Contraseña\n            </ion-label>\n          </ion-item>\n          <div ngxErrors=\"password\" #passwordErrors=\"ngxErrors\">\n            <div [ngxError]=\"['minlength', 'required']\" [when]=\"['touched']\">Debe contener mínimo 6 carácteres</div>\n          </div>\n  \n          <!-- Pass confirm input -->\n          <ion-item [ngClass]=\"{ invalid: confirmPassErrors.hasError('*', ['touched']) }\">\n            <ion-input type=\"password\" formControlName=\"confirmPass\"></ion-input>\n            <ion-label floating color=\"primary\" style=\"font-size: 14px;\">\n              <ion-icon color=\"violet\" name=\"finger-print\"></ion-icon> Confirmación Contraseña\n            </ion-label>\n          </ion-item>\n          <div ngxErrors=\"confirmPass\" #confirmPassErrors=\"ngxErrors\">\n            <div [ngxError]=\"['notEquivalent']\" [when]=\"['touched']\">Las contraseñas deben coincidir</div>\n          </div>\n  \n        </ion-list>\n        <div style=\"text-align: center;\">\n          <ion-button color=\"violet\" full type=\"submit\" [disabled]=\"!form_password.valid\">Restablecer contraseña</ion-button>\n        </div>\n      </form>\n\n    </div>\n\n  </div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reset-password_reset-password_module_ts-es2015.js.map