(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_stores_stores_module_ts"],{

/***/ 99768:
/*!*******************************************************!*\
  !*** ./src/app/pages/stores/stores-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoresPageRoutingModule": function() { return /* binding */ StoresPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _stores_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stores.page */ 89018);




const routes = [
    {
        path: '',
        component: _stores_page__WEBPACK_IMPORTED_MODULE_0__.StoresPage
    }
];
let StoresPageRoutingModule = class StoresPageRoutingModule {
};
StoresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoresPageRoutingModule);



/***/ }),

/***/ 57957:
/*!***********************************************!*\
  !*** ./src/app/pages/stores/stores.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoresPageModule": function() { return /* binding */ StoresPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _stores_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stores-routing.module */ 99768);
/* harmony import */ var _stores_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores.page */ 89018);







let StoresPageModule = class StoresPageModule {
};
StoresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stores_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoresPageRoutingModule
        ],
        declarations: [_stores_page__WEBPACK_IMPORTED_MODULE_1__.StoresPage]
    })
], StoresPageModule);



/***/ }),

/***/ 89018:
/*!*********************************************!*\
  !*** ./src/app/pages/stores/stores.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoresPage": function() { return /* binding */ StoresPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_stores_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stores.page.html */ 57903);
/* harmony import */ var _stores_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores.page.scss */ 48992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pos-services.service */ 73052);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ 15971);
/* harmony import */ var _delivery_chip_delivery_chip_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delivery-chip/delivery-chip.page */ 26386);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/storage */ 96628);











let StoresPage = class StoresPage {
    constructor(navCtrl, mapsAPILoader, ngZone, camera, loadcrtl, pos, base, modalCtrl) {
        this.navCtrl = navCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.camera = camera;
        this.loadcrtl = loadcrtl;
        this.pos = pos;
        this.base = base;
        this.modalCtrl = modalCtrl;
        this.categories = [];
        this.setCurrentPosition();
        this.modelPos = {};
        this.icon = {
            url: '../../../assets/imgs/store.png',
            scaledSize: {
                height: 80,
                width: 80
            }
        };
        //Image Default
        this.base64Image = '../../../assets/imgs/course_no_image.png';
        this.modelPos.picture_business = this.base64Image;
        this.obtainsCategories();
    }
    ngOnInit() {
    }
    setStorage(k, v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
                key: k,
                value: v,
            });
        });
    }
    ionViewDidLoad() {
        // let dataUrl:string=
        // this.modelPos.picture_business = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==";
        this.mapsAPILoader.load().then(() => {
            let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
            let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    this.zoom = 18;
                    this.modelPos.latitude = this.latitude;
                    this.modelPos.longitude = this.longitude;
                });
            });
        });
    }
    openCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let load = yield this.loadcrtl.create({ message: 'Validando Espere un Momento...' });
            this.camera.getPicture({
                saveToPhotoAlbum: false,
                targetWidth: 300,
                targetHeight: 300,
                quality: 65,
                allowEdit: true,
                encodingType: this.camera.EncodingType.JPEG,
                sourceType: this.camera.PictureSourceType.CAMERA,
                destinationType: this.camera.DestinationType.DATA_URL,
            }).then(imageData => {
                load.present();
                this.base64Image = "data:image/jpg;base64," + imageData;
                this.modelPos.picture_business = this.base64Image;
                load.dismiss();
            }, error => {
                alert(error);
            });
        });
    }
    setCurrentPosition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let load = yield this.loadcrtl.create({ message: 'Buscando GPS Espere un Momento...' });
            load.present();
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.zoom = 18;
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    this.modelPos.latitude = this.latitude;
                    this.modelPos.longitude = this.longitude;
                    // this.modelPos.longitude = -70.12879040000001;
                });
            }
            load.dismiss();
        });
    }
    createPOS() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let load = yield this.loadcrtl.create({ message: 'Creando punto de venta' });
            load.present();
            this.modelPos.is_activate = true;
            this.modelPos.user_created = this.base.getDataUser();
            this.pos.postPos(this.modelPos).subscribe(rs => {
                load.dismiss();
                alert('Los datos fueron ingresados correctamente.');
                let data = { id: rs.id, name: rs.name_business };
                // this.storage.set('subsidiary', rs.name_business);
                //this.storage.set('idSubsidiary', rs.id);
                this.setStorage('subsidiary', rs.name_business);
                this.setStorage('idSubsidiary', rs.id);
                //let contactModal = this.modalCtrl.create(DeliveryChipPage, data);
                //contactModal.present();
                this.presentModal(data);
            }, error => {
                load.dismiss();
                alert(error);
            });
        });
    }
    presentModal(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _delivery_chip_delivery_chip_page__WEBPACK_IMPORTED_MODULE_5__.DeliveryChipPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    'data': data,
                }
            });
            return yield modal.present();
        });
    }
    obtainsCategories() {
        console.log('obtener categorias');
        this.pos.get_categories().subscribe(rs => {
            this.subsidiary_categories = rs;
            console.log(rs);
        }, error => {
            alert(error);
        });
    }
    selectCategory(e, item) {
        console.log(e);
        this.modelPos.idCategory = item.id;
    }
};
StoresPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_9__.MapsAPILoader },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_4__.PosServicesService },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__.BaseServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
StoresPage.propDecorators = {
    searchElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ["search",] }]
};
StoresPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-stores',
        template: _raw_loader_stores_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stores_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoresPage);



/***/ }),

/***/ 48992:
/*!***********************************************!*\
  !*** ./src/app/pages/stores/stores.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-stores agm-map {\n  height: 230px;\n  position: relative;\n  top: 5px;\n  left: 5px;\n}\npage-stores .subsidiaryToolbar {\n  color: #32db64;\n  text-align: center;\n  font-size: 4.5em;\n}\npage-stores #subsidiaryToolbarIcon {\n  font-size: 0.5em;\n}\npage-stores .round {\n  border-radius: 50%;\n  width: 60% !important;\n}\npage-stores .photoImgCont {\n  margin: 0 0 0 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBQVI7QUFFSTtFQUVBLGlCQUFBO0FBREoiLCJmaWxlIjoic3RvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2Utc3RvcmVzIHtcbiAgICBhZ20tbWFwIHtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgIH1cbiAgICAuc3Vic2lkaWFyeVRvb2xiYXIge1xuICAgICAgICBjb2xvcjogIzMyZGI2NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIH1cbiAgICAjc3Vic2lkaWFyeVRvb2xiYXJJY29ue1xuICAgICAgICBmb250LXNpemU6IDAuNWVtOyAgIFxuICAgIH1cbiAgICAucm91bmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6NjAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAucGhvdG9JbWdDb250e1xuICAgIFxuICAgIG1hcmdpbjogMCAwIDAgMjUlIDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 57903:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stores/stores.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the StoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Puntos de Venta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-card>\n          <ion-row no-padding>\n            <ion-col text-center>\n              <div class=\"photoImgCont\">\n                <img src=\"{{ base64Image }}\" class=\"round\" width=\"50px\"/>\n              </div>\n              <button ion-button color=\"secondary\" icon-left (click)=\"openCamera()\">\n                <ion-icon name=\"camera\"></ion-icon> Punto de Venta\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-item>\n  <form>\n    <ion-item>\n\n      <ion-label floating color=\"primary\"><ion-icon name=\"card\"></ion-icon> Rut</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"modelPos.identification_business\" name=\"identification_business\" #identification_business=\"ngModel\" [maxlength]=\"9\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color=\"primary\"><ion-icon name=\"home\"></ion-icon> Razón Social - (Nombre)</ion-label>\n      <ion-input type=\"text\" maxLength=\"70\" [(ngModel)]=\"modelPos.name_business\" name=\"name_business\" #name_business=\"ngModel\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color=\"primary\"><ion-icon name=\"cog\"></ion-icon> Giro</ion-label>\n      <ion-input type=\"text\" maxLength=\"100\" [(ngModel)]=\"modelPos.commercial_business\" name=\"commercial_business\" #commercial_business=\"ngModel\"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating color=\"primary\" > <ion-icon name=\"cog\"></ion-icon> Categoría</ion-label>\n      <!-- <ion-select  [(ngModel)]=\"category_select\" multiple=\"false\" okText=\"Seleccionar\" cancelText=\"Cancelar\"> -->\n      <ion-select  multiple=\"false\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n        <div *ngFor=\"let item of subsidiary_categories\">\n          <ion-option  *ngIf=\"item.id != 1\" value=\"{{item.id}}\" (ionSelect)=\"selectCategory($event, item)\">{{item.description}}</ion-option>\n          <!-- <ion-option  value=\"{{item.id}}\">{{item.description}}</ion-option> -->\n        </div>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating color=\"primary\"><ion-icon name=\"pin\"></ion-icon> Dirección</ion-label>\n      <ion-input id=\"txtHome\" type=\"text\" required [(ngModel)]=\"modelPos.address\" name=\"address\" #address=\"ngModel\"></ion-input>\n    </ion-item>\n\n    <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [mapDraggable]=\"false\"   [scrollwheel]=\"false\" [zoom]=\"zoom\">\n      <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"icon\"></agm-marker>\n    </agm-map>\n\n    <p ion-text color=\"danger\" *ngIf=\"modelPos.errors\">ERRORES: {{ campo.errors | json}}</p>\n  </form>\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar class=\"subsidiaryToolbar\">\n      <ion-icon name=\"checkmark-circle\" (click)=\"createPOS()\"></ion-icon>\n      <!-- <ion-icon name=\"checkmark-circle\" (click)=\"test()\">test</ion-icon> -->\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stores_stores_module_ts-es2015.js.map