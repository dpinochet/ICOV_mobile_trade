(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["default-src_app_pages_b2b-view-product_b2b-view-product_page_ts"],{

/***/ 64021:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": function() { return /* binding */ CameraSource; },
/* harmony export */   "CameraDirection": function() { return /* binding */ CameraDirection; },
/* harmony export */   "CameraResultType": function() { return /* binding */ CameraResultType; }
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 37673:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection; },
/* harmony export */   "CameraResultType": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType; },
/* harmony export */   "CameraSource": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource; },
/* harmony export */   "Camera": function() { return /* binding */ Camera; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 64021);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 14028)).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 75278:
/*!*****************************************************************!*\
  !*** ./src/app/pages/b2b-view-product/b2b-view-product.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bViewProductPage": function() { return /* binding */ B2bViewProductPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_b2b_view_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./b2b-view-product.page.html */ 42673);
/* harmony import */ var _b2b_view_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b2b-view-product.page.scss */ 47713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_b2b_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/b2b.service */ 36167);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);
/* harmony import */ var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/delivery-services.service */ 68407);
/* harmony import */ var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/comunicacion-component.service */ 8077);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/camera */ 37673);




//import { Storage } from '@ionic/storage';










let B2bViewProductPage = class B2bViewProductPage {
    constructor(navCtrl, b2b, barcodeScanner, modalCtrl, _auth, deliveryPublish, alertCtrl, _comunc) {
        this.navCtrl = navCtrl;
        this.b2b = b2b;
        this.barcodeScanner = barcodeScanner;
        this.modalCtrl = modalCtrl;
        this._auth = _auth;
        this.deliveryPublish = deliveryPublish;
        this.alertCtrl = alertCtrl;
        this._comunc = _comunc;
        this.loading = true;
        this.subsidiary = null;
        this.direccion_subsidiary_arr = new Array();
        this.subsidiary_b2_mobile_data_product_list = new Array();
        this.formGroupSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null)
        });
        this.categorias_productos = new Array();
        this.subsidiary_last_b2b = null;
        this.data_modal_marca = null;
        this.baja_stock_info_count = 0;
        this.allProductList = new Array();
        this.temporal_product_item = null;
        let user_data = this._auth.getUser();
        this.user = user_data[0];
        //this.data_modal_marca = this.navParams.get('data');
        //console.log('data_learning: ', this.data_modal_marca);
        //console.log('data_learning: ', this.card_item);
        // this.formGroupSearch.controls.search.valueChanges.subscribe(async (search: any) => {
        //   if (search === '') {
        //     console.log('search-items-updates');
        //     // this.getListProductSubsidiaryB2BMobile();
        //     this.temporal_product_item = null;
        //     this.categorias_productos = null;
        //     this.categorias_productos = new Array();
        //     await this.getCategoriaProductos();
        //   }
        // })
    }
    ngOnInit() {
        this.data_modal_marca = this.card_item;
        console.log('data_learning: ', this.card_item);
        setTimeout(() => {
            this.initt();
            //})
        }, 2000);
    }
    parse_fecha_b2b(fecha) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(fecha).format('YYYY-MM-DD');
    }
    registrarImagenLowStock(producto, cat_pro, prod) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('producto-low: ', producto);
            /*this.camera.getPicture(
              {
              saveToPhotoAlbum: false,
              targetWidth: 300,
              targetHeight: 300,
              quality: 100,
              allowEdit: false,
              encodingType: this.camera.EncodingType.PNG,
              sourceType: this.camera.PictureSourceType.CAMERA,
              destinationType: this.camera.DestinationType.DATA_URL,
            }
            
            
            ).then(async (imageData) => {*/
            this.base64Image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.Camera.getPhoto({
                saveToGallery: false,
                width: 300,
                height: 300,
                quality: 100,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.CameraResultType.DataUrl,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.CameraSource.Camera,
                correctOrientation: true
            });
            let img = this.base64Image.dataUrl;
            let model_lowstockproduc = {
                id_subsidiary: this.subsidiary.id,
                id_product: producto.id,
                product_photo: img,
                user_created: this.user.email
            };
            try {
                let rest_aviso = yield this.deliveryPublish.lowstockproduct(model_lowstockproduc);
                console.log('rest_aviso_low_product:', rest_aviso);
                if (rest_aviso != null) {
                    // let find_error_key = Object.keys(rest_aviso).indexOf('non_field_errors');
                    // if (find_error_key > -1) {
                    // } else {
                    this.categorias_productos[cat_pro].product[prod].color = '#CCFF90';
                    this.baja_stock_info_count = this.baja_stock_info_count + 1;
                    // }
                    //marcar el producto como registrado
                }
            }
            catch (e) {
                this.showAlert('Error bajo stock', 'este producto ya se encuentra informado con bajo stock', ['OK']);
            }
            //this.modelPos.controls.picture_business.setValue(this.base64Image);
            //}, error => {
            //});
        });
    }
    registrarImagenLowStockFilter(producto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('producto-low: ', producto);
            /* this.camera.getPicture({
                saveToPhotoAlbum: false,
                targetWidth: 300,
                targetHeight: 300,
                quality: 100,
                allowEdit: false,
                encodingType: this.camera.EncodingType.PNG,
                sourceType: this.camera.PictureSourceType.CAMERA,
                destinationType: this.camera.DestinationType.DATA_URL,
              }).then(async (imageData) => {*/
            this.base64Image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.Camera.getPhoto({
                saveToGallery: false,
                width: 300,
                height: 300,
                quality: 100,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.CameraResultType.DataUrl,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.CameraSource.Camera,
                correctOrientation: true
            });
            let img = this.base64Image.dataUrl;
            let model_lowstockproduc = {
                id_subsidiary: this.subsidiary.id,
                id_product: producto.id,
                product_photo: img,
                user_created: this.user.email
            };
            try {
                let rest_aviso = yield this.deliveryPublish.lowstockproduct(model_lowstockproduc);
                console.log('rest_aviso_low_product:', rest_aviso);
                if (rest_aviso != null) {
                    // let find_error_key = Object.keys(rest_aviso).indexOf('non_field_errors');
                    // if (find_error_key > -1) {
                    // } else {
                    this.getCategoriaProductos();
                    this.baja_stock_info_count = this.baja_stock_info_count + 1;
                    // }
                    //marcar el producto como registrado
                }
            }
            catch (e) {
                this.showAlert('Error bajo stock', 'este producto ya se encuentra informado con bajo stock', ['OK']);
            }
            //this.modelPos.controls.picture_business.setValue(this.base64Image);
            //}, error => {
            //});
        });
    }
    showAlert(title, subTitle, buttons) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                //title: title,
                //subTitle: subTitle,
                header: title,
                subHeader: subTitle,
                buttons: buttons
            });
            yield alert.present();
        });
    }
    getCategoriaProductos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            /**
             * obtiene los productos del subisidiary por categoria
             */
            //this.subsidiary.id
            this.categorias_productos = null;
            this.categorias_productos = new Array();
            this.temporal_product_item = null;
            this.allProductList = new Array();
            this.formGroupSearch.reset();
            try {
                this.loading = true;
                console.log('product-valid: ', this.subsidiary.id, ' modal');
                // console.log('dataCategoriaProductos:',{subisidiary_id:this.subsidiary.id,marca:this.data_modal_marca.card_item.id});
                let product_category = yield this.b2b.getCategoriaProductos(this.subsidiary.id, this.data_modal_marca.id);
                let product_valid = yield this.deliveryPublish.subsidiaryb2bmobileproducts(this.subsidiary.id, this.data_modal_marca.id);
                console.log('product-valid: ', product_valid);
                this.categorias_productos = product_category;
                console.log('categorias productos: ', this.categorias_productos);
                this.setColorCalifProduct(this.categorias_productos, product_valid);
                this.loading = false;
            }
            catch (e) {
                console.log('error:', e);
            }
        });
    }
    setColorCalifProduct(category_arr, validArr) {
        try {
            if (validArr.length > 0) {
                category_arr.forEach((category, idx_category) => {
                    category.product.forEach((product, idx_product) => {
                        let find_valid_product = _.findIndex(validArr, (o) => {
                            return o.id_product == product.id;
                        });
                        if (find_valid_product > -1) {
                            this.categorias_productos[idx_category].product[idx_product].color = '#CCFF90';
                        }
                        else {
                            this.categorias_productos[idx_category].product[idx_product].color = '#FCE4EC';
                        }
                    });
                });
            }
            else {
                category_arr.forEach((category, idx_category) => {
                    category.product.forEach((product, idx_product) => {
                        if (product.stock <= 5) {
                            this.categorias_productos[idx_category].product[idx_product].color = '#FCE4EC';
                        }
                    });
                });
            }
        }
        catch (e) {
            console.log('error setColorCalifProduct: ', e);
        }
    }
    ionViewDidLoad() {
        setTimeout(() => {
            this.initt();
            //})
        }, 2000);
    }
    initt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('ionViewDidLoad BeToBePage');
            this.loading = true;
            const value = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'subsidiary' });
            // this.storage.get('subsidiary').then(async (subsidiary: any) => {
            this.subsidiary = JSON.parse(value.value);
            // await this.getListProductSubsidiaryB2BMobile();
            yield this.getCategoriaProductos();
            yield this.getLastB2bSubsiduary();
            console.log('getSubsidiary: ', this.subsidiary);
            this.loading = false;
        });
    }
    getLastB2bSubsiduary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.subsidiary_last_b2b = yield this.b2b.getLastB2bSubsidiary(this.subsidiary.id);
            }
            catch (e) {
            }
        });
    }
    buscarProducto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // this.temporal_product_item = null;
            // this.allProductList = new Array();
            // await this.getCategoriaProductos();
            this.barcodeScanner.scan().then((barcodeData) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                if (barcodeData.text === "") {
                    this.temporal_product_item = null;
                    this.allProductList = new Array();
                    yield this.getCategoriaProductos();
                }
                else {
                    yield this.setProductListAll();
                    console.log('temporal_product_item: ', this.temporal_product_item);
                    this.formGroupSearch.controls.search.setValue(barcodeData.text);
                    this.temporal_product_item = this.filterItems(barcodeData.text);
                    // this.categorias_productos=null;
                    // this.categorias_productos=new Array();
                }
                console.log('Barcode data', barcodeData);
            })).catch(err => {
                console.log('Error', err);
            });
        });
    }
    setProductListAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.categorias_productos.forEach((category) => {
                category.product.forEach(producto => {
                    this.allProductList.push(producto);
                    console.log('producto_item: ', producto);
                });
            });
            return true;
        });
    }
    filterItems(searchTerm) {
        return this.allProductList.filter((item) => {
            return item.idsku.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    getListProductSubsidiaryB2BMobile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            /**
             * Obtiene la lista de productos en b2b
             */
            let subsidiary_b2_mobile_data_product = yield this.b2b.getsubsidiaryB2bMobile(this.subsidiary.id);
            this.subsidiary_b2_mobile_data_product_list = subsidiary_b2_mobile_data_product;
            this.cortar_string(this.subsidiary.all.address);
            console.log('b2b_product: ', subsidiary_b2_mobile_data_product);
        });
    }
    cortar_string(value) {
        try {
            console.log('corta_string: ', value.split(','));
            this.direccion_subsidiary_arr = value.split(',');
        }
        catch (e) { }
    }
    goBack() {
        //this.navCtrl.pop();
        this.modalCtrl.dismiss({
            'dismissed': true
        });
        this._comunc.addItem({ name: 'low-stock-count', itemAdd: { count: this.baja_stock_info_count } });
    }
};
B2bViewProductPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: src_app_services_b2b_service__WEBPACK_IMPORTED_MODULE_5__.B2bService },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_6__.UserServicesService },
    { type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_7__.DeliveryServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_8__.ComunicacionComponentService }
];
B2bViewProductPage.propDecorators = {
    card_item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
B2bViewProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-b2b-view-product',
        template: _raw_loader_b2b_view_product_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_b2b_view_product_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], B2bViewProductPage);



/***/ }),

/***/ 36167:
/*!*****************************************!*\
  !*** ./src/app/services/b2b.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B2bService": function() { return /* binding */ B2bService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-services.service */ 94000);




let B2bService = class B2bService {
    // public url: string = 'http://192.168.100.9:8001/api/v1/';
    constructor(http, base) {
        this.http = http;
        this.base = base;
        this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
        console.log('Hello B2bProvider Provider');
    }
    getsubsidiaryB2bMobile(subsidiary_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'reports/subsidiary-b2b-mobile/?id_subsidiary=' + subsidiary_id, { headers: headers }).toPromise();
    }
    getCategoriaProductos(subsidiary_id, id_brand) {
        /**
         *  @param subsidiary_id
         *
         *
         */
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let productos_marcas = new Array();
            try {
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
                //     /**obteniendo las categorias de productos */
                productos_marcas = yield this.http.get(this.url + 'reports/subsidiary-b2b-mobile/?id_subsidiary=' + subsidiary_id + '&id_brand=' + id_brand + '', { headers: headers }).toPromise();
                resolve(productos_marcas);
            }
            catch (e) { }
        }));
    }
    getMarcaAndAgency() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        /**obteniendo las categorias de productos */
        return this.http.get(this.url + 'brands/', { headers: headers }).toPromise();
    }
    getLastB2bSubsidiary(subsidiary_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        /**obteniendo las categorias de productos */
        return this.http.get(this.url + 'reports/subsidiary-last-b2b/?id_subsidiary=' + subsidiary_id, { headers: headers }).toPromise();
    }
    getValidaMarcas(brand, multistore_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        /**obteniendo las categorias de productos */
        return this.http.get(this.url + 'multistore-product-check/?brand=' + brand + '&multistore_id=' + multistore_id, { headers: headers }).toPromise();
    }
};
B2bService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService }
];
B2bService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], B2bService);



/***/ }),

/***/ 47713:
/*!*******************************************************************!*\
  !*** ./src/app/pages/b2b-view-product/b2b-view-product.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiMmItdmlldy1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 42673:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/b2b-view-product/b2b-view-product.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the B2bViewProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\" >\n      <ion-button  (click)=\"goBack()\" >\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{subsidiary?.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"background:#F5F5F5\" class=\"ion-padding\">\n\n\n  <div *ngIf=\"loading\" style=\"text-align:center\">\n\n    <h3 style=\"margin-block-start: 10em;text-align: center;color:#757575\">\n      Cargando productos...\n    </h3>\n\n    <ion-spinner name=\"bubbles\"></ion-spinner>\n\n  </div>\n\n  <div *ngIf=\"!loading\">\n\n\n\n\n\n    <div *ngIf=\"categorias_productos?.length==0\">\n      <h3 style=\"margin-block-start: 10em;text-align: center;color:#616161\">Sin productos para esta marca</h3>\n    </div>\n\n\n    <div *ngIf=\"categorias_productos?.length>0\">\n\n      <form [formGroup]=\"formGroupSearch\">\n        <ion-searchbar formControlName=\"search\" (click)=\"buscarProducto()\"></ion-searchbar>\n      </form>\n\n      <ion-list>\n        <ion-scroll scrollY=\"true\" style=\"height:100vh;\">\n\n          <div *ngIf=\"temporal_product_item!=null\">\n\n            <div *ngFor=\"let producto of temporal_product_item;let pro=index\">\n              <ion-item-sliding #item>\n                <ion-item [ngStyle]=\"{'background-color': producto?.color}\">\n                  <ion-avatar item-start style=\"margin-left:1em !important; margin-right:1em !important;\">\n                    <img [src]=\"producto?.product_photo\">\n                  </ion-avatar>\n                  <h3 style=\"color:#37474F\">{{producto?.product_description}}</h3>\n                  <p>SKU: {{producto?.idsku}}</p>\n                  <p>Codigo de barra: {{producto?.bar_code}}</p>\n                  <p>fecha ultimo b2b: {{parse_fecha_b2b(producto?.last_b2b)}} </p>\n                  <p>Ventas: {{producto?.sales}}</p>\n                  <p>Stock: {{producto?.stock}}</p>\n                  <p>Precio: {{producto?.value}}</p>\n                </ion-item>\n                <!-- <ion-item-options side=\"left\">\n                      <button ion-button (click)=\"favorite(item)\">Favorite</button>\n                      <button ion-button color=\"danger\" (click)=\"share(item)\">Share</button>\n                    </ion-item-options> -->\n\n                <!--<ion-item-options side=\"start\">\n                  <ion-button *ngIf=\"producto?.color==='#FCE4EC'\" ion-button\n                    (click)=\"registrarImagenLowStockFilter(producto)\">\n                    <ion-icon name=\"camera\"></ion-icon>\n                  </ion-button>\n                  <ion-button *ngIf=\"producto?.color==='#CCFF90'\" ion-button>\n                    <ion-icon name=\"checkmark\"></ion-icon>\n                  </ion-button>\n                </ion-item-options>-->\n              </ion-item-sliding>\n            </div>\n            <br />\n            <button ion-button block clear (click)=\"getCategoriaProductos()\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </button>\n \n\n          </div>\n\n          <div *ngIf=\"temporal_product_item==null\">\n\n            <div *ngFor=\"let categoria of categorias_productos;let cat_pro=index\">\n\n              <accordion>\n                <accordion-group [heading]=\"categoria?.category\" [isOpened]=\"false\">\n               \n                  <div *ngIf=\"categoria?.product?.length>0\">\n                    <div *ngFor=\"let producto of categoria.product;let pro=index\">\n  \n                      <ion-item-sliding #item>\n                        <ion-item [ngStyle]=\"{'background-color': producto?.color}\">\n                          <ion-avatar item-start style=\"margin-left:1em !important; margin-right:1em !important;\">\n                            <img [src]=\"producto?.product_photo\">\n                          </ion-avatar>\n                          <ion-label>\n                          <h3 style=\"color:#37474F\">{{producto?.product_description}}</h3>\n                          <p>SKU: {{producto?.idsku}}</p>\n                          <p>Codigo de barra: {{producto?.bar_code}}</p>\n                          <p>fecha ultimo b2b: {{parse_fecha_b2b(producto?.last_b2b)}}</p>\n                          <p>Ventas: {{producto?.sales}}</p>\n                          <p>Stock: {{producto?.stock}}</p>\n                          <p>Precio: {{producto?.value}}</p>\n                           </ion-label>\n                        </ion-item> \n                        <!-- <ion-item-options side=\"left\">\n                                        <button ion-button (click)=\"favorite(item)\">Favorite</button>\n                                        <button ion-button color=\"danger\" (click)=\"share(item)\">Share</button>\n                                      </ion-item-options> -->\n  \n                        <!--<ion-item-options side=\"start\">\n                          <ion-button *ngIf=\"producto?.color==='#FCE4EC'\" ion-button\n                            (click)=\"registrarImagenLowStock(producto,cat_pro,pro)\">\n                            <ion-icon name=\"camera\"></ion-icon>\n                          </ion-button>\n                          <ion-button *ngIf=\"producto?.color==='#CCFF90'\" ion-button>\n                            <ion-icon name=\"checkmark\"></ion-icon>\n                          </ion-button>\n                        </ion-item-options>-->\n                      </ion-item-sliding>\n  \n                      <!-- <ion-item>\n                                  <ion-avatar item-start style=\"margin-left:1em !important; margin-right:1em !important;\">\n                                    <img [src]=\"producto?.product_photo\">\n                                  </ion-avatar>\n                                  <!-- <h2>title</h2> -->\n                      <!-- <h3>{{producto?.product_description}}</h3>\n                                  <p>SKU: {{producto?.idsku}}</p>\n                                  <p>Codigo de barra: {{producto?.bar_code}}</p> -->\n                      <!-- <p>fecha ultimo b2b</p> -->\n                      <!-- <p>Ventas: {{producto?.sales}}</p>\n                                  <p>Stock: {{producto?.stock}}</p>\n                                  <p>Precio: {{producto?.value}}</p>\n                                </ion-item> -->\n                    </div>\n  \n                  </div>\n                  <div style=\"margin-left:auto !important; margin-right:auto !important\"\n                    *ngIf=\"categoria?.productos?.length==0\">\n                    <!-- <i class=\"material-icons\">\n                                remove_shopping_cart\n                              </i>\n                              <p>Sin productos para esta categoria</p> -->\n                  </div>\n                  <!-- <ion-item>\n                            <ion-avatar item-start>\n                              <img [src]=\"subsidiary?.all.picture_business\">\n                            </ion-avatar>\n                            <h2 style=\"color:#757575\">{{product?.sales}}</h2>\n                            <h3 style=\"color:#757575\">{{product?.stock}}</h3>\n                            <p style=\"color:#757575\">{{product?.idsku}}.</p>\n                      \n                          </ion-item> -->\n\n                </accordion-group>  \n\n\n\n              </accordion>\n\n\n\n\n            </div>\n\n\n\n\n\n\n\n\n\n          </div>\n\n        </ion-scroll>\n      </ion-list>\n\n    </div>\n\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_b2b-view-product_b2b-view-product_page_ts-es2015.js.map