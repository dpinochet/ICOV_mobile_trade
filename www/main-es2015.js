(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'b2b-view-product',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_b2b-view-product_b2b-view-product_page_ts"), __webpack_require__.e("src_app_pages_b2b-view-product_b2b-view-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/b2b-view-product/b2b-view-product.module */ 12930)).then(m => m.B2bViewProductPageModule)
    },
    {
        path: 'background-consumer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_background-consumer_background-consumer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/background-consumer/background-consumer.module */ 15696)).then(m => m.BackgroundConsumerPageModule)
    },
    {
        path: 'be-to-be',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_b2b-view-product_b2b-view-product_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_be-to-be_be-to-be_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/be-to-be/be-to-be.module */ 93575)).then(m => m.BeToBePageModule)
    },
    {
        path: 'capacitacion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_capacitacion_capacitacion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/capacitacion/capacitacion.module */ 7409)).then(m => m.CapacitacionPageModule)
    },
    {
        path: 'compose-tweet',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_compose-tweet_compose-tweet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/compose-tweet/compose-tweet.module */ 75550)).then(m => m.ComposeTweetPageModule)
    },
    {
        path: 'concessions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_concessions_concessions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/concessions/concessions.module */ 94241)).then(m => m.ConcessionsPageModule)
    },
    {
        path: 'connect-socket',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_connect-socket_connect-socket_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/connect-socket/connect-socket.module */ 16282)).then(m => m.ConnectSocketPageModule)
    },
    {
        path: 'delivery-chip',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_delivery-chip_delivery-chip_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/delivery-chip/delivery-chip.module */ 27363)).then(m => m.DeliveryChipPageModule)
    },
    {
        path: 'delivery-publish',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_delivery-publish_delivery-publish_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/delivery-publish/delivery-publish.module */ 82602)).then(m => m.DeliveryPublishPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994)).then(m => m.HomePageModule)
    },
    {
        path: 'img-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_img-modal_img-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/img-modal/img-modal.module */ 93322)).then(m => m.ImgModalPageModule)
    },
    {
        path: 'incidencias',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_incidencias_incidencias_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/incidencias/incidencias.module */ 44679)).then(m => m.IncidenciasPageModule)
    },
    {
        path: 'incidents',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_incidents_incidents_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/incidents/incidents.module */ 2315)).then(m => m.IncidentsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'manage-document',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_manage-document_manage-document_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/manage-document/manage-document.module */ 57537)).then(m => m.ManageDocumentPageModule)
    },
    {
        path: 'metas',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_metas_metas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/metas/metas.module */ 14669)).then(m => m.MetasPageModule)
    },
    {
        path: 'modal-img-preview',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_modal-img-preview_modal-img-preview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modal-img-preview/modal-img-preview.module */ 57029)).then(m => m.ModalImgPreviewPageModule)
    },
    {
        path: 'play-list-youtube',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_play-list-youtube_play-list-youtube_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/play-list-youtube/play-list-youtube.module */ 1632)).then(m => m.PlayListYoutubePageModule)
    },
    {
        path: 'polls',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_polls_polls_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/polls/polls.module */ 29033)).then(m => m.PollsPageModule)
    },
    {
        path: 'pop-over-menu-be2-be',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pop-over-menu-be2-be_pop-over-menu-be2-be_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pop-over-menu-be2-be/pop-over-menu-be2-be.module */ 82301)).then(m => m.PopOverMenuBe2BePageModule)
    },
    {
        path: 'pop-over-notificaciones',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pop-over-notificaciones_pop-over-notificaciones_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pop-over-notificaciones/pop-over-notificaciones.module */ 96553)).then(m => m.PopOverNotificacionesPageModule)
    },
    {
        path: 'promociones',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_promociones_promociones_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/promociones/promociones.module */ 62788)).then(m => m.PromocionesPageModule)
    },
    {
        path: 'public-view-facebook',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_public-view-facebook_public-view-facebook_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public-view-facebook/public-view-facebook.module */ 43089)).then(m => m.PublicViewFacebookPageModule)
    },
    {
        path: 'public-view-instagram',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_public-view-instagram_public-view-instagram_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/public-view-instagram/public-view-instagram.module */ 58771)).then(m => m.PublicViewInstagramPageModule)
    },
    {
        path: 'report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/report/report.module */ 81725)).then(m => m.ReportPageModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reset-password/reset-password.module */ 38573)).then(m => m.ResetPasswordPageModule)
    },
    {
        path: 'stores',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_stores_stores_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/stores/stores.module */ 57957)).then(m => m.StoresPageModule)
    },
    {
        path: 'test-view-model',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_test-view-model_test-view-model_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/test-view-model/test-view-model.module */ 32938)).then(m => m.TestViewModelPageModule)
    },
    {
        path: 'timeline',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/timeline/timeline.module */ 74447)).then(m => m.TimelinePageModule)
    },
    {
        path: 'trainings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_trainings_trainings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/trainings/trainings.module */ 37064)).then(m => m.TrainingsPageModule)
    },
    {
        path: 'upload-youtube',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_upload-youtube_upload-youtube_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/upload-youtube/upload-youtube.module */ 8677)).then(m => m.UploadYoutubePageModule)
    },
    {
        path: 'visits',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_visits_visits_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/visits/visits.module */ 65392)).then(m => m.VisitsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/base-services.service */ 94000);
/* harmony import */ var _services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/comunicacion-component.service */ 8077);
/* harmony import */ var _services_user_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user-services.service */ 24107);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.page */ 10678);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.page */ 3058);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/geolocation */ 61091);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/storage */ 96628);














let AppComponent = class AppComponent {
    constructor(platform, statusBar, auth, menu, _auth, _comun, router) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.auth = auth;
        this._auth = _auth;
        this._comun = _comun;
        this.router = router;
        this.Geolocation1 = null;
        this.menutwo = false;
        this.user = null;
        // this.storage.set('base_url', 'https://redamigos.herokuapp.com/');
        //this.storage.set('base_url', 'https://vm-icov-003.riosoft.cl/');
        this.setStorage('base_url', 'https://vm-icov-003.riosoft.cl/');
        // this.storage.set('base_url', 'http://192.168.100.9:8001/');
        // this.storage.set('base_url', 'http://192.168.100.7:8000/');
        // this.storage.set('base_url', 'http://192.168.100.13:8000/');
        //this.storage.set('subsidiary', 'null');
        this.setStorage('subsidiary', 'null');
        // this.storage.set('idSubsidiary', 'null');
        this.setStorage('idSubsidiary', 'null');
        this.get();
        //this.ready();
        this.pages = [
            { title: 'Ventas o rutas', icon: "map", component: 'home' },
            // { title: 'Punto de Venta', icon: 'locate', component: StoresPage },
            { title: 'Capacitación', icon: 'chatbubbles', component: 'capacitacion' },
            // { title: 'Incidencias', icon: 'chatbubbles', component: IncidentsPage },
            //{ title: 'Metas',icon:'locate', component: StoresPage},
            // { title: 'Reportes', icon: 'list-box', component: ReportPage },
            { title: 'Incidencias', icon: "alert-circle", component: 'incidencias' },
            { title: 'Metas', icon: 'medal', component: 'metas' }
            // { title: 'Reposiciones', icon: 'chatbubbles', component: VisitsPage }//,
            // { title: 'Visitas', icon: 'list-box', component: TestViewModelPage },
            // { title: 'BG socket', icon: 'locate', component: BackgroundConsumerPage },
        ];
        this.menu = menu;
        // firebase.initializeApp(ENV.firebase);
        _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_8__.Geolocation.getCurrentPosition().then((geo) => {
            this.Geolocation1 = { lat: geo.coords.latitude, lng: geo.coords.longitude };
        }, error => {
            console.log('error-ubicacion: ', error);
        });
        /**
         * get-data-user
         *
         */
        this._comun.itemComunicacion.subscribe((comunic) => {
            if (comunic.name === 'update-data-user') {
                this.getDataUser();
            }
        });
        if (this.auth.isLoggingIn()) {
            this.router.navigateByUrl('home');
        }
    }
    ready() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.platform.ready().then(() => {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                this.statusBar.styleDefault();
                // splashScreen.hide();
                this.rootPage = this.auth.isLoggingIn() ? _pages_home_home_page__WEBPACK_IMPORTED_MODULE_6__.HomePage : _pages_login_login_page__WEBPACK_IMPORTED_MODULE_7__.LoginPage;
            });
            console.log("hermosa");
            // this.backgroundMode.enable();
            // this.backgroundMode.excludeFromTaskList();
            // this.backgroundMode.on('enable').subscribe(event=>{
            //     console.log('backgroundmode enable: ',event);
            // })
            // this.backgroundMode.on('disable').subscribe(event=>{
            //   console.log('backgroundmode disable: ',event);
            // })
            // this.backgroundMode.on('activate').subscribe(event=>{
            //   console.log('backgroundmode activate: ',event);
            //   this._comun.addItem({name:'notificacioneEnable',state:true});
            // })
            // this.backgroundMode.on('deactivate').subscribe(event=>{
            //   console.log('backgroundmode deactivate: ',event);
            //   this._comun.addItem({name:'notificacioneEnable',state:false});
            // })
            // this.backgroundMode.on('failure').subscribe(event=>{
            //   console.log('backgroundmode failure: ',event);
            // })
        });
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.get({ key: 'base_url' });
            console.log("url ", value);
        });
    }
    setStorage(k, v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.set({
                key: k,
                value: v,
            });
        });
    }
    logout() {
        this.menu.close();
        this.auth.logout();
        //this.nav.push(LoginPage);
        this.router.navigateByUrl('login');
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.clear();
        localStorage.clear();
    }
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component);
        this.router.navigateByUrl(page.component);
    }
    getDataUser() {
        setTimeout(() => {
            let user_data = this._auth.getUser();
            this.user = user_data[0];
            console.log('user-data: ', user_data);
        }, 2000);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar },
    { type: _services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController },
    { type: _services_user_services_service__WEBPACK_IMPORTED_MODULE_4__.UserServicesService },
    { type: _services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_3__.ComunicacionComponentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router }
];
AppComponent.propDecorators = {
    nav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonNav,] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ 78744);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17324);
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/push/ngx */ 27774);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/base64/ngx */ 31531);
/* harmony import */ var _ionic_native_instagram_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/instagram/ngx */ 78658);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ 15971);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/components.module */ 45642);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-accordion */ 28362);
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _hackages_ngxerrors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @hackages/ngxerrors */ 54616);
/* harmony import */ var _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @agm/markerclusterer */ 3445);












//import ReconnectingWebSocket from 'reconnecting-websocket';



//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';




//import { SplashScreen } from '@ionic-native/splash-screen/ngx';









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_fire__WEBPACK_IMPORTED_MODULE_20__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            _agm_core__WEBPACK_IMPORTED_MODULE_21__.AgmCoreModule.forRoot({
                apiKey: "AIzaSyBV_r5mWF8CnKWGmQAtnCgj0-zko1Mgjlc",
                libraries: ["places"]
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_13__.ComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
            ngx_accordion__WEBPACK_IMPORTED_MODULE_14__.AccordionModule,
            _hackages_ngxerrors__WEBPACK_IMPORTED_MODULE_15__.NgxErrorsModule,
            _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_25__.AgmMarkerClustererModule
        ],
        providers: [
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera,
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__.BarcodeScanner,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicRouteStrategy },
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__.LocalNotifications,
            _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_4__.Push,
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__.SocialSharing,
            //  ReconnectingWebSocket,
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__.SQLite,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__.InAppBrowser,
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__.Base64,
            _ionic_native_instagram_ngx__WEBPACK_IMPORTED_MODULE_11__.Instagram,
            _agm_core__WEBPACK_IMPORTED_MODULE_21__.AgmCoreModule,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__.StatusBar,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": function() { return /* binding */ ComponentsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/map.component */ 51006);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ 15971);





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_4__.AgmCoreModule
        ],
        exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent]
    })
], ComponentsModule);



/***/ }),

/***/ 51006:
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": function() { return /* binding */ MapComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map.component.html */ 37645);
/* harmony import */ var _map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss */ 62845);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pos-services.service */ 73052);
/* harmony import */ var src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/twitter-conection-service.service */ 54793);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/geolocation */ 61091);














let MapComponent = class MapComponent {
    constructor(navCtrl, pos, 
    //private storage: Storage,
    toastCtrl, 
    // private app: App,
    // public dataService: DatabaseService,
    base, auth, 
    //private twitter: TwitterConnect,
    _twtitterConectionService, loadingCtrl, route) {
        this.navCtrl = navCtrl;
        this.pos = pos;
        this.toastCtrl = toastCtrl;
        this.base = base;
        this.auth = auth;
        this._twtitterConectionService = _twtitterConectionService;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.display_map = false;
        this.name = '';
        this.searchTerm = '';
        this.searching = false;
        this.dataDelivery = {};
        this.icon = {
            url: '../../../assets/imgs/store.png',
            scaledSize: {
                height: 80,
                width: 80
            }
        };
        this.iconMe = {
            url: '../../../assets/imgs/15-512.png',
            scaledSize: {
                height: 80,
                width: 80
            }
        };
        console.log("entrooo");
        this.setCurrentPosition();
        // this.name = this.navParams.get('name');
        //this.storage.set('subsidiary', 'null');
        this.setStorage('subsidiary', 'null');
        //this.storage.set('idSubsidiary', 'null');
        this.setStorage('idSubsidiary', 'null');
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
    }
    setStorage(k, v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
                key: k,
                value: v,
            });
        });
    }
    setStorageObjet(k, v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
                key: k,
                value: JSON.stringify(v),
            });
        });
    }
    ngOnInit() {
    }
    showLoading() {
        this.loadinger = this.loadingCtrl.create({
            message: 'Please wait...'
        });
        this.loadinger.present();
    }
    // public loginWithTwitter() {
    //    this.showLoading();
    //   this.twitter.login().then((data:TwitterConnectResponse) => {
    //     console.log('twitterLoginData: ',data);
    //     this._twtitterConectionService.setTokens(data.token, data.secret);
    //      this.loadinger.dismiss().then(() => {
    //        this.navCtrl.setRoot('TimelinePage');
    //      });
    //   }, error => {
    //     console.log('twitter-error: ',error);
    //     // this.showError(error);
    //   });
    // }
    doRefresh(refresher) {
        //console.log('Begin async operation', refresher);
        this.setCurrentPosition();
        /* setTimeout(() => {
           console.log('Async operation has ended');
           refresher.target.complete();
         }, 2000);*/
    }
    ionViewWillEnter() {
        console.log("holaaaa");
    }
    ionViewDidLoad() {
        this.setCurrentPosition();
        // this.name = this.navParams.get('name');
        this.searching = false;
    }
    loadGoogleMaps() {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
    setCurrentPosition() {
        console.log("actualizando");
        /*if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 15;
            this.dataDelivery.user = this.base.getDataUser();
            this.Me = this.base.getDataUser();
            this.onData();
          });
    
        }*/
        _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.getCurrentPosition().then((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 15;
            this.dataDelivery.user = this.base.getDataUser();
            this.Me = this.base.getDataUser();
            this.onData();
        }, error => {
            console.log('error-ubicacion: ', error);
        });
    }
    onData() {
        this.markers = [];
        // let load = this.loadcrtl.create({ content: 'Recolectando información...' });
        // load.present();
        //this.pos.getNearPos(this.latitude, this.longitude).subscribe(
        this.pos.getNearPos(-33.618509, -70.705837).subscribe(
        //this.pos.getNearPos(-33.418531, -70.606429).subscribe(
        data => {
            let data_array = Object.keys(data);
            let data_length = data_array.length;
            console.log('get-subsidiary: ', data);
            if (data_length >= 15) {
                console.log('ddddd');
                this.display_map = false;
                //create list to diplay
                this.subsidiary_list = [];
                this.filtered_items = [];
                for (const item of data) {
                    this.subsidiary_object = {
                        lat: item.latitude,
                        lng: item.longitude,
                        title: item.name_business,
                        id: item.id,
                        stock356: item.stock356,
                        stock374: item.stock374,
                        tasa356: item.tasa356,
                        tasa374: item.tasa374,
                        creacion: item.created_at,
                        all: item,
                        photo: item.multistore_photo.photo
                    };
                    this.subsidiary_list.push(this.subsidiary_object);
                    this.filtered_items.push(this.subsidiary_object);
                }
                // Sort alphabetically the array of objects
                this.subsidiary_list.sort(function (a, b) {
                    var nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            else {
                console.log('entre');
                this.display_map = true;
                //create markers above map
                for (const item of data) {
                    this.icon_dinamyc = {
                        url: '../../../assets/imgs/' + item.tasa356 + '.png',
                        scaledSize: {
                            height: 50,
                            width: 30
                        }
                    };
                    console.log('map-subsiduary: ', item);
                    console.log('item_idmultistore:', item.id_multistore);
                    let pine_multistore = null;
                    if (item.id_multistore == 5) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/ripleyverde.png';
                    }
                    if (item.id_multistore == 2) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/santaisabelrojo.png';
                    }
                    if (item.id_multistore == 3) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/jumboverde.png';
                    }
                    if (item.id_multistore == 9) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/easyrojo.png';
                    }
                    if (item.id_multistore == 7) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/liderverde.png';
                    }
                    if (item.id_multistore == 6) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/tottusverde.png';
                    }
                    if (item.id_multistore == 10) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/unimarcrojo.png';
                    }
                    if (item.id_multistore == 12) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/sodimacrojo.png';
                    }
                    if (item.id_multistore == 11) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/fallabellaverde.png';
                    }
                    console.log('pine_multistore_photo: ', pine_multistore);
                    this.markers.push({
                        lat: item.latitude,
                        lng: item.longitude,
                        title: item.name_business,
                        id: item.id,
                        tasa356: item.tasa356,
                        creacion: item.created_at,
                        icon: this.icon_dinamyc,
                        all: item,
                        photo: pine_multistore
                    });
                    pine_multistore = null;
                }
            }
        }, error => {
            if (error == "Signature has expired.") {
                alert('Tu sesión ha expirado');
                // this.app.getRootNav().setRoot(LoginPage, {}, { animate: true, direction: 'forward' });
                this.route.navigateByUrl('login');
            }
            else {
                if (error == 'Las credenciales de autenticación no se proveyeron.') {
                    this.refreshToken();
                }
            }
        });
    }
    markerClick(marker) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('subsidiary', marker);
            this.dataDelivery.subsidiary = marker.title;
            //this.storage.set('subsidiary', marker.title);
            // this.storage.set('idSubsidiary', marker.id);
            // this.storage.set('subsidiary', marker);
            //this.setStorage('subsidiary',marker.title);
            this.setStorage('idSubsidiary', marker.id);
            this.setStorageObjet('subsidiary', marker);
            const value = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.get({ key: 'subsidiary' });
            console.log('objeto', JSON.parse(value.value));
            /*
                let toast = this.toastCtrl.create({
                  message: 'Se ha seleccionado: ' + marker.title,
                  duration: 1300
                });
                toast.present();*/
            //this.navCtrl.push(BeToBePage);
            this.route.navigateByUrl('be-to-be');
        });
    }
    subsidiarySelected(subsidiaryId, subsidiaryTitle) {
        //this.storage.set('subsidiary', subsidiaryTitle);
        //this.storage.set('idSubsidiary', subsidiaryId);
        this.setStorage('subsidiary', subsidiaryTitle);
        this.setStorage('idSubsidiary', subsidiaryId);
        /*
            let toast = this.toastCtrl.create({
              message: 'Se ha seleccionado: ' + subsidiaryTitle,
              duration: 1300
            });
            toast.present();*/
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
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams();
        params = params.append('grant_type', oauthCredentials.grant_type);
        params = params.append('client_id', oauthCredentials.client_id);
        params = params.append('client_secret', oauthCredentials.client_secret);
        params = params.append('refresh_token', oauthCredentials.refresh_token);
        this.auth.obtainToken(params).subscribe(data => {
            // console.log('se obtuvo refresh token');
            console.log(data);
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
        }, _err => { console.error('no refresh'); }, () => { this.onData(); });
    }
};
MapComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_3__.PosServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_5__.UserServicesService },
    { type: src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_4__.TwitterConectionServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router }
];
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-map',
        template: _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapComponent);



/***/ }),

/***/ 99770:
/*!*******************************************************!*\
  !*** ./src/app/pages/concessions/concessions.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConcessionsPage": function() { return /* binding */ ConcessionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_concessions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./concessions.page.html */ 93629);
/* harmony import */ var _concessions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concessions.page.scss */ 11386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/pos-services.service */ 73052);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/storage */ 96628);









let ConcessionsPage = class ConcessionsPage {
    constructor(navCtrl, 
    //private storage: Storage,
    pos, base, fb) {
        this.navCtrl = navCtrl;
        this.pos = pos;
        this.base = base;
        this.form = fb.group({
            discount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
                ])],
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        /*this.storage.get('idSubsidiary').then((val) => {
          this.id_subsidiary = val;
          // console.log(val);
          if (this.id_subsidiary != 'null') {
            this.getConcessions();
          }
        });*/
        // console.log('tab');
        this.getidSub();
    }
    getidSub() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.get({ key: 'idSubsidiary' }).then((val) => {
                this.id_subsidiary = val.value;
            }).then(() => {
                if (this.id_subsidiary != 'null') {
                    this.getConcessions();
                }
            });
        });
    }
    getConcessions() {
        if (this.id_subsidiary != 'null') {
            this.pos.obtainConcessionsBackend(this.id_subsidiary).subscribe(data => {
                if (JSON.stringify(data).includes('{}')) {
                    this.total_concessions = '0';
                }
                else {
                    this.total_concessions = JSON.stringify(data);
                }
                // console.log('concesiones: ' + JSON.stringify(data));
                // console.log('conc'+Object.keys(data));
                // if  (Object.keys(data).length == 0) {
                // } else {
                // }
            }, error => { alert(error); }, () => { });
        }
        else {
            alert('No ha seleccionado una sucursal válida');
        }
    }
    charge_concession() {
        let data = this.form.value;
        if (data.discount > this.total_concessions) {
            alert('Debe cobrar un máximo de: ' + this.total_concessions + ' concesiones.');
        }
        else {
            this.pos.updateConcessionsBackend(this.id_subsidiary, parseInt(data.discount)).subscribe(data => {
                // console.log('concesiones: ' + JSON.stringify(data));
                this.total_concessions = JSON.stringify(data);
                alert('Se ha cobrado la concesión');
                //this.navCtrl.parent.select(0);
            }, error => { alert(error); }, () => { });
        }
    }
};
ConcessionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_3__.PosServicesService },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
ConcessionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-concessions',
        template: _raw_loader_concessions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_concessions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConcessionsPage);



/***/ }),

/***/ 26386:
/*!***********************************************************!*\
  !*** ./src/app/pages/delivery-chip/delivery-chip.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryChipPage": function() { return /* binding */ DeliveryChipPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_delivery_chip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./delivery-chip.page.html */ 43289);
/* harmony import */ var _delivery_chip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-chip.page.scss */ 39578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 92760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/delivery-services.service */ 68407);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);










let DeliveryChipPage = class DeliveryChipPage {
    constructor(navCtrl, loadcrtl, barcodeScanner, deliveryServices, base, route, 
    // private app: App,
    toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.loadcrtl = loadcrtl;
        this.barcodeScanner = barcodeScanner;
        this.deliveryServices = deliveryServices;
        this.base = base;
        this.route = route;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.name = '';
        this.title_subsidiary = '';
        this.id = '';
        this.consecion = false;
        this.modal = false;
        this.load = this.loadcrtl.create({ message: 'Buscando GPS Espere un Momento...' });
        this.chip = {
            lccid: 0,
            idType: 1,
            text: 'Chip NO encontrado',
            user_created: this.base.getDataUser(),
        };
        this.allBarcode = [];
        this.front_chips_array = [];
        this.chipStateObj = {};
        this.scanned_chip = {};
        this.cont = 0;
        this.id_subsidiary = this.base.getDataSubsidiary();
        //this.id = this.navParams.get('id');
        // this.name = this.navParams.get('name');
        this.id = this.data.id;
        this.name = this.data.name;
        if (this.name == undefined) {
        }
        else {
            this.modal = true;
        }
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        /* this.storage.get('idSubsidiary').then((val) => {
           this.id_subsidiary = val;
           // console.log(val);
         });
         this.storage.get('subsidiary').then((val) => {
           this.title_subsidiary = val;
         });*/
        this.getidSubsidiary();
        this.getsubsidiary();
    }
    getidSubsidiary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__.Storage.get({ key: 'idSubsidiary' });
            this.id_subsidiary = value;
        });
    }
    getsubsidiary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__.Storage.get({ key: 'subsidiary' });
            this.title_subsidiary = value;
        });
    }
    scanChips() {
        this.barcodeScanner.scan({ torchOn: true }).then(barcodeData => {
            if (barcodeData.cancelled) {
                return false;
            }
            else {
                if (this.allBarcode.indexOf(barcodeData.text) === -1) {
                    this.allBarcode.push(barcodeData.text);
                    this.deliveryServices.getDeliveryChips(barcodeData.text).subscribe(data => {
                        if (data == '' || data == ' ') {
                            this.notFound(barcodeData.text);
                        }
                        else {
                            this.saveDelivery(data[0].id, barcodeData.text);
                        }
                    }, err => {
                        this.notFound(barcodeData.text);
                    });
                }
                else if (this.allBarcode.indexOf(barcodeData.text) > -1) {
                    this.tostScan(barcodeData);
                }
            }
        }).catch(err => { alert(err); });
    }
    tostScan(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: e.text + ' ya existe en Listado.',
                duration: 2500
            });
            yield toast.present();
        });
    }
    tostSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: 'El chip fue ingresado anteriormente',
                duration: 2500
            });
            yield toast.present();
        });
    }
    saveDelivery(idChip, barcodeTxt) {
        this.chipStateObj.user_created = this.base.getDataUser();
        this.chipStateObj.idChip = idChip;
        this.chipStateObj.consecion = this.consecion;
        if (this.id == undefined) {
            // this.chipStateObj.idSubsidiary = this.base.getDataSubsidiary(); Se modifica por SQLite Storage
            this.chipStateObj.idSubsidiary = this.id_subsidiary;
        }
        else {
            this.chipStateObj.idSubsidiary = this.id;
        }
        this.deliveryServices.postChipDelivery(this.chipStateObj).subscribe(rs => {
            this.scanned_chip = {
                code: barcodeTxt,
                icon: 'thumbs-up'
            };
            this.front_chips_array.push(this.scanned_chip);
            this.cont++;
        }, err => {
            console.error(err);
            /*let toast = this.toastCtrl.create({
              message: 'El chip fue ingresado anteriormente',
              duration: 2500
            });
            toast.present();*/
            this.tostSave();
            this.scanned_chip = {
                code: barcodeTxt,
                icon: 'thumbs-down'
            };
            this.front_chips_array.push(this.scanned_chip);
        });
    }
    tostFound(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    notFound(barcodeTxt) {
        this.chip.lccid = barcodeTxt;
        this.deliveryServices.postChip(this.chip).subscribe(res => {
            //no se puede llamar a this.saveDelivery() desde esta profundidad
            this.chipStateObj.user_created = this.base.getDataUser();
            this.chipStateObj.idChip = res.id;
            this.chipStateObj.consecion = this.consecion;
            if (this.id == undefined) {
                // this.chipStateObj.idSubsidiary = this.base.getDataSubsidiary(); Se modifica por SQLite Storage
                this.chipStateObj.idSubsidiary = this.id_subsidiary;
            }
            else {
                this.chipStateObj.idSubsidiary = this.id;
            }
            this.deliveryServices.postChipDelivery(this.chipStateObj).subscribe(rs => {
                /* let toast = this.toastCtrl.create({
                   message: 'Chip No encontrado, se guardará en la base de datos informando el estado',
                   showCloseButton: true,
                   closeButtonText: 'Ok'
                 });
                 toast.present();*/
                this.tostFound('Chip No encontrado, se guardará en la base de datos informando el estado');
                this.scanned_chip = {
                    code: barcodeTxt,
                    icon: 'thumbs-up'
                };
                this.front_chips_array.push(this.scanned_chip);
                this.cont++;
            }, err => {
                console.error(err);
                /*let toast = this.toastCtrl.create({
                  message: 'El chip fue ingresado anteriormente',
                  showCloseButton: true,
                  closeButtonText: 'Ok'
                });
                toast.present();*/
                this.tostFound('El chip fue ingresado anteriormente');
                this.scanned_chip = {
                    code: barcodeTxt,
                    icon: 'thumbs-down'
                };
                this.front_chips_array.push(this.scanned_chip);
            });
        }, er => {
            console.error(er);
            /* let toast = this.toastCtrl.create({
               message: 'chip inválido',
               showCloseButton: true,
               closeButtonText: 'Ok'
             });
             toast.present();*/
            this.tostFound('chip inválido');
            this.scanned_chip = {
                code: barcodeTxt,
                icon: 'thumbs-down'
            };
            this.front_chips_array.push(this.scanned_chip);
        });
    }
    go_home() {
        this.navCtrl.pop();
        //this.app.getRootNavById().setRoot(HomePage);
        //this.navCtrl.navigateRoot(HomePage)
        this.route.navigateByUrl('home');
    }
};
DeliveryChipPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_4__.DeliveryServicesService },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__.BaseServicesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__.Storage }
];
DeliveryChipPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
DeliveryChipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-delivery-chip',
        template: _raw_loader_delivery_chip_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_delivery_chip_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DeliveryChipPage);



/***/ }),

/***/ 93055:
/*!*****************************************************************!*\
  !*** ./src/app/pages/delivery-publish/delivery-publish.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryPublishPage": function() { return /* binding */ DeliveryPublishPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_delivery_publish_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./delivery-publish.page.html */ 626);
/* harmony import */ var _delivery_publish_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-publish.page.scss */ 2089);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/delivery-services.service */ 68407);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/storage */ 96628);











let DeliveryPublishPage = class DeliveryPublishPage {
    constructor(navCtrl, camera, loadcrtl, base, deliveryPublish, 
    // private storage:          Storage,
    toastCtrl, auth) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.loadcrtl = loadcrtl;
        this.base = base;
        this.deliveryPublish = deliveryPublish;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.allImages = [];
        this.modelDelivery = {};
        this.modelDelivery.photo = '';
        this.base64Image = '../../../assets/imgs/gondola.png';
        /*this.storage.get('idSubsidiary').then((val) => {
          this.id_subsidiary = val;
        });*/
        this.getidSub();
    }
    getidSub() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.get({ key: 'idSubsidiary' }).then((val) => {
                this.id_subsidiary = val.value;
            });
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        /*this.storage.get('idSubsidiary').then((val) => {
          this.id_subsidiary = val;
        });*/
        this.getidSub();
    }
    openCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('abriendo la camara');
            if (this.modelDelivery.nameDeliveryPublish == undefined ||
                this.modelDelivery.nameDeliveryPublish.replace(/\s/g, '') == '') {
                alert("Debe ingresar un nombre");
            }
            else {
                let load = this.loadcrtl.create({ message: 'Validando Espere un Momento...' });
                let fotoCamara = yield this.camera.getPicture({
                    // quality:            75,
                    // destinationType:    this.camera.DestinationType.DATA_URL,
                    // sourceType:         this.camera.PictureSourceType.CAMERA,
                    // allowEdit:          false,
                    // encodingType:       this.camera.EncodingType.JPEG,
                    // targetWidth:        300,
                    // targetHeight:       300,
                    // saveToPhotoAlbum:   false
                    quality: 100,
                    sourceType: this.camera.PictureSourceType.CAMERA,
                    saveToPhotoAlbum: false,
                    correctOrientation: true,
                    targetWidth: 200,
                    targetHeight: 200
                });
                console.log('fotoCamaraObtenida: ', fotoCamara);
                // .then(imageData => {
                //   load.present();
                //   this.base64Image          = "data:image/jpeg;base64," + imageData;
                //   this.modelDelivery.photo  = this.base64Image;
                //   let objTrade = {
                //     img:  this.modelDelivery.photo,
                //     name: this.modelDelivery.nameDeliveryPublish,
                //   }
                //   this.allImages.push(objTrade)
                //   load.dismiss();
                //   this.modelDelivery.nameDeliveryPublish = '';
                // }, error => {
                //   alert(error);
                // });
            }
        });
    }
    tostPublish(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    sendDeliveryPublish() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let load = yield this.loadcrtl.create({ message: 'Validando Espere un Momento...' });
            load.present();
            this.modelDelivery.user_created = this.base.getDataUser();
            this.modelDelivery.subsidiary = this.id_subsidiary;
            this.modelDelivery.quantity = 1;
            if (this.allImages.length == 0) {
                load.dismiss();
                /*let toast = this.toastCtrl.create({
                  message:          'Debe tomar una foto para poder continuar',
                  showCloseButton:  true,
                  closeButtonText:  'Ok'
                });
                toast.present();*/
                this.tostPublish('Debe tomar una foto para poder continuar');
            }
            for (let key in this.allImages) {
                this.modelDelivery.photo = this.allImages[key].img;
                this.modelDelivery.description = this.allImages[key].name;
                this.deliveryPublish.postDelivery(this.modelDelivery).subscribe(rs => {
                    if (this.allImages.length - 1 == parseInt(key)) {
                        /*let toast = this.toastCtrl.create({
                          message:          'Los datos fueron ingresados correctamente',
                          showCloseButton:  true,
                          closeButtonText:  'Ok'
                        });
                        toast.present();*/
                        this.tostPublish('Los datos fueron ingresados correctamente');
                    }
                    this.modelDelivery = {
                        nameDeliveryPublish: '',
                        quantity: 1,
                    };
                    load.dismiss();
                    //this.navCtrl.parent.select(0);
                }, er => {
                    load.dismiss();
                    if (er == 'Las credenciales de autenticación no se proveyeron.') {
                        this.refreshToken();
                    }
                }); // End subscribe
            } // End For
        });
    }
    refreshToken() {
        let oauthCredentials = {
            //Production
            client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
            client_id: 'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',
            // Testing
            // client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
            // client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
            grant_type: 'refresh_token',
            refresh_token: this.base.getDataRefreshToken()
        };
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams();
        params = params.append('grant_type', oauthCredentials.grant_type);
        params = params.append('client_id', oauthCredentials.client_id);
        params = params.append('client_secret', oauthCredentials.client_secret);
        params = params.append('refresh_token', oauthCredentials.refresh_token);
        this.auth.obtainToken(params).subscribe(data => {
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
        }, _err => { }, () => { this.sendDeliveryPublish(); });
    }
};
DeliveryPublishPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__.BaseServicesService },
    { type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_4__.DeliveryServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_5__.UserServicesService }
];
DeliveryPublishPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-delivery-publish',
        template: _raw_loader_delivery_publish_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_delivery_publish_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DeliveryPublishPage);



/***/ }),

/***/ 10678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 78102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 17603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/base-services.service */ 94000);
/* harmony import */ var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comunicacion-component.service */ 8077);
/* harmony import */ var src_app_services_local_notification_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-notification-service.service */ 42134);
/* harmony import */ var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notificaciones.service */ 91319);
/* harmony import */ var src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pos-services.service */ 73052);
/* harmony import */ var src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/socket-service.service */ 20905);
/* harmony import */ var src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sqlite-service.service */ 61412);
/* harmony import */ var src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/twitter-conection-service.service */ 54793);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);
/* harmony import */ var _concessions_concessions_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../concessions/concessions.page */ 99770);
/* harmony import */ var _delivery_chip_delivery_chip_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../delivery-chip/delivery-chip.page */ 26386);
/* harmony import */ var _delivery_publish_delivery_publish_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../delivery-publish/delivery-publish.page */ 93055);
/* harmony import */ var _polls_polls_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../polls/polls.page */ 59682);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @capacitor/geolocation */ 61091);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 91841);























let HomePage = class HomePage {
    constructor(navCtrl, alertController, _notificaciones, _user, _comun, _socket, _sqlite, popoverCtrl, _localNotification, route, menu, pos, 
    //private storage: Storage,
    toastCtrl, 
    // private app: App,
    // public dataService: DatabaseService,
    base, auth, 
    //private twitter: TwitterConnect,
    _twtitterConectionService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this._notificaciones = _notificaciones;
        this._user = _user;
        this._comun = _comun;
        this._socket = _socket;
        this._sqlite = _sqlite;
        this.popoverCtrl = popoverCtrl;
        this._localNotification = _localNotification;
        this.route = route;
        this.menu = menu;
        this.pos = pos;
        this.toastCtrl = toastCtrl;
        this.base = base;
        this.auth = auth;
        this._twtitterConectionService = _twtitterConectionService;
        this.loadingCtrl = loadingCtrl;
        this.tabChip = _delivery_chip_delivery_chip_page__WEBPACK_IMPORTED_MODULE_12__.DeliveryChipPage;
        this.tabPublish = _delivery_publish_delivery_publish_page__WEBPACK_IMPORTED_MODULE_13__.DeliveryPublishPage;
        this.tabConcession = _concessions_concessions_page__WEBPACK_IMPORTED_MODULE_11__.ConcessionsPage;
        this.tabPoll = _polls_polls_page__WEBPACK_IMPORTED_MODULE_14__.PollsPage;
        //name: string = '';
        this.param_from_home = { param: 'parametro' };
        //dataDelivery: any;
        this.promocionArray = new Array();
        this.incidenciaArray = new Array();
        this.user = this._user.getUser();
        this.notificaciones = new Array();
        this.notificationOpenPageCount = 0;
        this.notificacionState = true;
        this.userData = null;
        this.displaymap = false;
        this.name = '';
        this.searchTerm = '';
        this.searching = false;
        try {
            let user_data_parse_json = localStorage.getItem('userData');
            let user_data_json_parse = JSON.parse(user_data_parse_json);
            this.userData = user_data_json_parse[0];
            console.log('userData-capacitación: ', this.userData);
        }
        catch (e) { }
        this._comun.itemComunicacion.subscribe((data) => {
            this.notificationOpenPageCount = this.notificationOpenPageCount + 1;
            if (this.notificationOpenPageCount == 1) {
                if (data.name === 'openPage') {
                    if (data.namePage === "capacitacion") {
                        // this.navCtrl.push(CapacitacionPage);
                        this.route.navigateByUrl('capacitacion');
                    }
                    if (data.namePage === "incidencias") {
                        // this.navCtrl.push(IncidenciasPage);
                        this.route.navigateByUrl('incidencias');
                    }
                    if (data.namePage === "promocion") {
                        // this.navCtrl.push(MetasPage);
                        this.route.navigateByUrl('promociones');
                    }
                }
            }
            if (this.notificationOpenPageCount == 2) {
                this.notificationOpenPageCount = 0;
            }
            if (this.notificationOpenPageCount == 3) {
                this.notificationOpenPageCount = 0;
            }
            if (this.notificationOpenPageCount == 4) {
                this.notificationOpenPageCount = 0;
            }
            if (this.notificationOpenPageCount == 5) {
                this.notificationOpenPageCount = 0;
            }
            if (this.notificationOpenPageCount == 6) {
                this.notificationOpenPageCount = 0;
            }
            if (this.notificationOpenPageCount == 7) {
                this.notificationOpenPageCount = 0;
            }
        });
        // this.getNotificaciones();
        // this.getPromocionesNoVisto();
        // this._comun.addItem({name:'update-data-user'});
        /* this._sqlite.initDB().then((db) => {
           this._sqlite.createTables(db);
         });*/
        //  this._socket.getNotificaciones().subscribe((notificacion) => {
        //    console.log('notificación-socket: ',notificacion);
        //     this.notificaciones.push(notificacion);
        //  })
        /*this._sqlite.getAllNotificacionesNoLeidos_PROMISE().then((todasNotificaciones: any) => {
          todasNotificaciones.forEach((notificacion) => {
            console.log('notificación-sqlite: ', notificacion);
            this.notificaciones.push(notificacion);
          });
        })*/
        this._comun.itemComunicacion.subscribe(event => {
            if (event.name === 'notificacioneEnable') {
                this.notificacionState = event.state;
            }
        });
        this._socket.getNotificaciones().subscribe((notificacion) => {
            if (notificacion.event != undefined) {
                if (this.notificacionState == true) {
                    if (this.userData.email === notificacion.recipient) {
                        this._localNotification.addNotification(notificacion);
                    }
                }
                console.log('nueva-notificación-socket: ', notificacion.event);
                console.log('notificacion-recibida-reciente: ', notificacion);
                console.log('notificación-socket type of:', typeof notificacion);
                if (this.userData.email === notificacion.recipient) {
                    this.notificaciones.push(notificacion);
                    this._comun.addItem({ name: 'new-notification', item: notificacion });
                }
            }
        }, error => {
            console.log('error-socket-nueva-notificacion: ', error);
        });
        // this.getNotificaciones();
        // this.getPromocionesNoVisto();
        this._comun.addItem({ name: 'update-data-user' });
        this.dataDelivery = {};
        this.icon = {
            url: '../../../assets/imgs/store.png',
            scaledSize: {
                height: 80,
                width: 80
            }
        };
        this.iconMe = {
            url: '../../../assets/imgs/15-512.png',
            scaledSize: {
                height: 80,
                width: 80
            }
        };
        console.log("entrooo");
        this.setCurrentPosition();
        // this.name = this.navParams.get('name');
        //this.storage.set('subsidiary', 'null');
        this.setStorage('subsidiary', 'null');
        //this.storage.set('idSubsidiary', 'null');
        this.setStorage('idSubsidiary', 'null');
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl();
    }
    openCustom() {
        this.menu.enable(true, 'content');
        this.menu.open('content');
    }
    ngOnInit() {
    }
    presentPopoverNotificacion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            // const popover = this.popoverCtrl.create(PopOverNotificacionesPage);
            // await popover.present();
            // setTimeout(() => {
            //   this._comun.addItem({ name: 'lista-notificaciones', item: this.notificaciones });
            // }, 1000);
            //await this.navCtrl.push(PopOverNotificacionesPage);
            this.route.navigateByUrl('pop-over-notificaciones');
            setTimeout(() => {
                this._comun.addItem({ name: 'lista-notificaciones', item: this.notificaciones });
            }, 1000);
            //   this._comun.addItem({ name: 'lista-notificaciones', item: this.notificaciones });
            // }, 1000);
        });
    }
    getPromocionesNoVisto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let noVisto = yield this._notificaciones.getPromocionesUserNoVisto(this.user[0].email);
                this.promocionArray = this.promocionArray.concat(noVisto);
            }
            catch (e) { }
        });
    }
    getNotificaciones() {
        //this._notificaciones.getNotificacion() 
        this._notificaciones.promocionesComunicacion.subscribe(data => {
            if (data.event === 'promotion') {
                this.promocionArray.push(data);
            }
            else if (data.event === 'incidencia') {
                this.incidenciaArray.push(data);
            }
        });
    }
    openPromociones() {
        // this.navCtrl.push(PromocionesPage, { notificationArray: this.promocionArray });
        //this.route.navigateByUrl('pop-over-notificaciones',{ notificationArray: this.promocionArray })
        this.route.navigateByUrl('promociones', { state: this.promocionArray });
    }
    ionViewWillEnter() {
        console.log('home ionViewWillEnter');
    }
    ionViewDidEnter() {
        console.log('home ionViewDidEnter');
    }
    ionViewWillLeave() {
        console.log('home ionViewWillLeave');
    }
    ionViewDidLeave() {
        console.log('home ionViewDidLeave');
    }
    ionViewWillUnload() {
        console.log('home ionViewWillUnload');
    }
    ionViewCanEnter() {
        console.log('home ionViewCanEnter');
    }
    ionViewCanLeave() {
        console.log('home ionViewCanLeave');
    }
    //metodos del mapa
    setStorage(k, v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_15__.Storage.set({
                key: k,
                value: v,
            });
        });
    }
    setStorageObjet(k, v) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_15__.Storage.set({
                key: k,
                value: JSON.stringify(v),
            });
        });
    }
    showLoading() {
        this.loadinger = this.loadingCtrl.create({
            message: 'Please wait...'
        });
        this.loadinger.present();
    }
    doRefresh(refresher) {
        this.setCurrentPosition();
    }
    ionViewDidLoad() {
        this.setCurrentPosition();
        this.searching = false;
    }
    loadGoogleMaps() {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Cargando...',
            });
            yield this.loading.present();
            //const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    setCurrentPosition() {
        this.presentLoading();
        console.log("actualizando");
        /*if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 15;
            this.dataDelivery.user = this.base.getDataUser();
            this.Me = this.base.getDataUser();
            this.onData();
          });
    
        }*/
        _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_16__.Geolocation.getCurrentPosition().then((position) => {
            console.log(position);
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            // DPW
            this.latitude = -33.4403959;
            this.longitude = -70.6340178;
            this.zoom = 15;
            this.dataDelivery.user = this.base.getDataUser();
            this.Me = this.base.getDataUser();
            this.onData();
        }, error => {
            console.log('error-ubicacion: ', error);
            setTimeout(function () {
                this.loading.dismiss();
                this.presentAlertError('No se puede acceder a tu ubicación');
            }.bind(this), 4000);
        });
    }
    presentAlertError(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: msg,
                buttons: ['Aceptar']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    onData() {
        this.markers = [];
        // let load = this.loadcrtl.create({ content: 'Recolectando información...' });
        // load.present();
        this.pos.getNearPos(this.latitude, this.longitude).subscribe(
        //this.pos.getNearPos(-33.618509, -70.705837).subscribe(
        //this.pos.getNearPos(-33.418531, -70.606429).subscribe(
        data => {
            let data_array = Object.keys(data);
            console.log("data_array: " + data_array);
            let data_length = data_array.length;
            console.log('get-subsidiary: ', data);
            if (data_length >= 15) {
                console.log('ddddd');
                this.displaymap = false;
                //create list to diplay
                this.subsidiary_list = [];
                this.filtered_items = [];
                for (const item of data) {
                    this.subsidiary_object = {
                        lat: item.latitude,
                        lng: item.longitude,
                        title: item.name_business,
                        id: item.id,
                        stock356: item.stock356,
                        stock374: item.stock374,
                        tasa356: item.tasa356,
                        tasa374: item.tasa374,
                        creacion: item.created_at,
                        all: item,
                        photo: item.multistore_photo.photo
                    };
                    this.subsidiary_list.push(this.subsidiary_object);
                    this.filtered_items.push(this.subsidiary_object);
                }
                // Sort alphabetically the array of objects
                this.subsidiary_list.sort(function (a, b) {
                    var nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
            }
            else {
                console.log('entre');
                this.displaymap = true;
                //create markers above map
                for (const item of data) {
                    this.icon_dinamyc = {
                        url: '../../../assets/imgs/' + item.tasa356 + '.png',
                        scaledSize: {
                            height: 50,
                            width: 30
                        }
                    };
                    console.log('map-subsiduary: ', item);
                    console.log('item_idmultistore:', item.id_multistore);
                    let pine_multistore = null;
                    if (item.id_multistore == 5) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/ripleyverde.png';
                    }
                    if (item.id_multistore == 2) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/santaisabelrojo.png';
                    }
                    if (item.id_multistore == 3) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/jumboverde.png';
                    }
                    if (item.id_multistore == 9) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/easyrojo.png';
                    }
                    if (item.id_multistore == 7) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/liderverde.png';
                    }
                    if (item.id_multistore == 6) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/tottusverde.png';
                    }
                    if (item.id_multistore == 10) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/unimarcrojo.png';
                    }
                    if (item.id_multistore == 12) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/sodimacrojo.png';
                    }
                    if (item.id_multistore == 11) {
                        pine_multistore = {
                            url: null,
                            scaledSize: {
                                height: 55,
                                width: 55
                            }
                        };
                        pine_multistore.url = '../../../assets/imgs/pines/fallabellaverde.png';
                    }
                    console.log('pine_multistore_photo: ', pine_multistore);
                    this.markers.push({
                        lat: item.latitude,
                        lng: item.longitude,
                        title: item.name_business,
                        id: item.id,
                        tasa356: item.tasa356,
                        creacion: item.created_at,
                        icon: this.icon_dinamyc,
                        all: item,
                        photo: pine_multistore
                    });
                    pine_multistore = null;
                }
            }
            setTimeout(function () {
                this.loading.dismiss();
            }.bind(this), 4000);
        }, error => {
            console.log(error);
            setTimeout(function () {
                this.loading.dismiss();
            }.bind(this), 4000);
            if (error == "Signature has expired.") {
                alert('Tu sesión ha expirado');
                // this.app.getRootNav().setRoot(LoginPage, {}, { animate: true, direction: 'forward' });
                this.route.navigateByUrl('login');
            }
            else {
                if (error == 'Las credenciales de autenticación no se proveyeron.') {
                    this.refreshToken();
                }
            }
        });
    }
    markerClick(marker) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            console.log('subsidiary marker', marker);
            this.dataDelivery.subsidiary = marker.title;
            //this.storage.set('subsidiary', marker.title);
            // this.storage.set('idSubsidiary', marker.id);
            // this.storage.set('subsidiary', marker);
            //this.setStorage('subsidiary',marker.title);
            this.setStorage('idSubsidiary', marker.id);
            this.setStorageObjet('subsidiary', marker);
            const value = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_15__.Storage.get({ key: 'subsidiary' });
            console.log('objeto click', JSON.parse(value.value));
            /*
                let toast = this.toastCtrl.create({
                  message: 'Se ha seleccionado: ' + marker.title,
                  duration: 1300
                });
                toast.present();*/
            //this.navCtrl.push(BeToBePage);
            this.route.navigateByUrl('be-to-be');
        });
    }
    subsidiarySelected(subsidiaryId, subsidiaryTitle) {
        //this.storage.set('subsidiary', subsidiaryTitle);
        //this.storage.set('idSubsidiary', subsidiaryId);
        this.setStorage('subsidiary', subsidiaryTitle);
        this.setStorage('idSubsidiary', subsidiaryId);
        /*
            let toast = this.toastCtrl.create({
              message: 'Se ha seleccionado: ' + subsidiaryTitle,
              duration: 1300
            });
            toast.present();*/
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
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpParams();
        params = params.append('grant_type', oauthCredentials.grant_type);
        params = params.append('client_id', oauthCredentials.client_id);
        params = params.append('client_secret', oauthCredentials.client_secret);
        params = params.append('refresh_token', oauthCredentials.refresh_token);
        this.auth.obtainToken(params).subscribe(data => {
            // console.log('se obtuvo refresh token');
            console.log(data);
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
        }, _err => { console.error('no refresh'); }, () => { this.onData(); });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController },
    { type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__.NotificacionesService },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_10__.UserServicesService },
    { type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_3__.ComunicacionComponentService },
    { type: src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_7__.SocketServiceService },
    { type: src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_8__.SqliteServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.PopoverController },
    { type: src_app_services_local_notification_service_service__WEBPACK_IMPORTED_MODULE_4__.LocalNotificationServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.MenuController },
    { type: src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_6__.PosServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ToastController },
    { type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_10__.UserServicesService },
    { type: src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_9__.TwitterConectionServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.LoadingController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comunicacion-component.service */ 8077);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);









let LoginPage = class LoginPage {
    constructor(navCtrl, auth, menu, _comunic, route, alertController) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.menu = menu;
        this._comunic = _comunic;
        this.route = route;
        this.alertController = alertController;
        this.modelAuth = {};
        this.islogged = false;
    } // End constructor
    ngOnInit() {
    }
    singUp() { this.obtain(); }
    obtain() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let oauthCredentials = {
                //Production
                client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
                client_id: 'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',
                // Testing
                // client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
                // client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
                username: this.modelAuth.email,
                grant_type: 'password',
                password: this.modelAuth.password
            };
            /* let oauthCredentials = {
               //Production
               client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
               client_id:      'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',
       
               // Testing
               // client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
               // client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
               username: 'contacto@icov.cl',
               grant_type: 'password',
               password: 'F6a1p3c4'
             }*/
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
            params = params.append('grant_type', oauthCredentials.grant_type);
            params = params.append('client_id', oauthCredentials.client_id);
            params = params.append('client_secret', oauthCredentials.client_secret);
            params = params.append('username', oauthCredentials.username);
            params = params.append('password', oauthCredentials.password);
            this.auth.obtainToken(params).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                localStorage.setItem('user', oauthCredentials.username);
                // Obtain latitude and longitude to user position
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        localStorage.setItem('longitude', position.coords.latitude.toString());
                        localStorage.setItem('latitude', position.coords.longitude.toString());
                    });
                    this.auth.getDataUser(oauthCredentials.username).then((getUser) => {
                        localStorage.setItem('userData', JSON.stringify(getUser));
                    });
                    this.islogged = true;
                    //this.navCtrl.setRoot(HomePage);
                    this.route.navigateByUrl('home');
                    this.menu.enable(true);
                    this._comunic.addItem({ name: 'update-data-user' });
                }
            }), _err => { this.islogged = false; this.presentAlert(); });
            // console.log(this.modelAuth);
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: 'Credenciales inválidas',
                buttons: ['Aceptar']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    ionViewDidLoad() {
        this.menu.enable(false);
    }
    recoverPassword() {
        // this.navCtrl.push(ResetPasswordPage);
        this.route.navigateByUrl('reset-password');
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__.UserServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__.ComunicacionComponentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 59682:
/*!*******************************************!*\
  !*** ./src/app/pages/polls/polls.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollsPage": function() { return /* binding */ PollsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_polls_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./polls.page.html */ 53005);
/* harmony import */ var _polls_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polls.page.scss */ 2843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_poll_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/poll-services.service */ 10799);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 96628);







let PollsPage = class PollsPage {
    constructor(navCtrl, 
    // private storage:      Storage,
    pollService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.pollService = pollService;
        this.toastCtrl = toastCtrl;
        this.id_subsidiary = 'null';
        this.items = [];
        this.checkbox_array = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // console.log('entré');
        this.polls_list = [];
        /*this.storage.get('idSubsidiary').then((val) => {
          this.id_subsidiary = val;
        }).then(() => {
          if (this.id_subsidiary != 'null') {
            this.getPolls();
          }
        });*/
        this.getidSub();
    }
    getidSub() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'idSubsidiary' }).then((val) => {
                this.id_subsidiary = val.value;
            }).then(() => {
                if (this.id_subsidiary != 'null') {
                    this.getPolls();
                }
            });
        });
    }
    getPolls() {
        // console.log('get polls load');
        this.polls_list = [];
        this.items = [];
        this.pollService.getCurrentPolls().subscribe(rs => {
            this.polls_list = rs;
            for (let i = 0; i < this.polls_list.length; i++) {
                let checked = false;
                this.items.push({
                    question: this.polls_list[i].description,
                    ischecked: checked,
                    question_id: this.polls_list[i].id
                });
            }
        }, er => {
            alert(er);
        });
    }
    answerPolls() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            for (let answer of this.items) {
                let responseObject = {
                    "poll_id": answer.question_id,
                    "subsidiary_id": this.id_subsidiary,
                    "answer": answer.ischecked,
                    "is_answer": true
                };
                this.pollService.responsePoll(responseObject).subscribe(rs => {
                    console.log('pregunta respondida');
                    console.log(rs);
                }, er => {
                    alert(er);
                });
            }
            let toast = yield this.toastCtrl.create({
                message: 'La encuesta ha sido respondida con éxito',
                duration: 2500
            });
            toast.present();
            //this.navCtrl.parent.select(0);
        });
    }
};
PollsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_poll_services_service__WEBPACK_IMPORTED_MODULE_2__.PollServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
PollsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-polls',
        template: _raw_loader_polls_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_polls_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PollsPage);



/***/ }),

/***/ 94000:
/*!***************************************************!*\
  !*** ./src/app/services/base-services.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseServicesService": function() { return /* binding */ BaseServicesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 40205);





//import 'rxjs/add/operator/catch'
let BaseServicesService = class BaseServicesService {
    constructor(http) {
        this.http = http;
        this.url = '';
        this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
        // this.url = 'http://192.168.100.9:8001/api/v1/';
    }
    /** procesamos la respuesta del api
      * @param {Response} response data from http request.
      */
    extractData(res) {
        let body = res;
        return body || {};
    }
    /** procesamos la respuesta de Error
    * @param {any} Object data return.
    */
    handleError(error) {
        console.log(error);
        let errMsg = (error.message) ? error.error.detail :
            error.status ? `${error.status} - non_field_errors` : 'Server error';
        //return Observable.throw(errMsg);
        //return Observable.throw(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(errMsg);
    }
    /** procesamos el logout de la app
    * @param {} delete all storage.
    */
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('subsidiary');
    }
    /** Validamos si el Usuario está logueado
    * @param {} true logged,  false not logeed.
    */
    isLoggingIn() {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') === null) {
            return false;
        }
        else {
            return true;
        }
    }
    getDataToken() {
        return localStorage.getItem('token');
    }
    getDataRefreshToken() {
        return localStorage.getItem('refresh_token');
    }
    getDataSubsidiary() {
        return localStorage.getItem('idSubsidiary');
    }
    getDataUser() {
        return localStorage.getItem('user').toString();
    }
    getDataPositionLong() {
        return localStorage.getItem('longitude');
    }
    getDataPositionLat() {
        return localStorage.getItem('latitude');
    }
    getOldMessages() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.getDataToken());
        return this.http.get(this.url + 'messages/', { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => this.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
};
BaseServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
BaseServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], BaseServicesService);



/***/ }),

/***/ 8077:
/*!************************************************************!*\
  !*** ./src/app/services/comunicacion-component.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicacionComponentService": function() { return /* binding */ ComunicacionComponentService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);




let ComunicacionComponentService = class ComunicacionComponentService {
    constructor(http) {
        this.http = http;
        this.comunicacion = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.itemComunicacion = this.comunicacion.asObservable();
        console.log('Hello ComunicacionComponentProvider Provider');
    }
    addItem(item) {
        this.comunicacion.next(item);
    }
};
ComunicacionComponentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ComunicacionComponentService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ComunicacionComponentService);



/***/ }),

/***/ 68407:
/*!*******************************************************!*\
  !*** ./src/app/services/delivery-services.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryServicesService": function() { return /* binding */ DeliveryServicesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-services.service */ 94000);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);



//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import { Storage } from '@ionic/storage';



let DeliveryServicesService = class DeliveryServicesService {
    // public url: string = 'http://192.168.100.9:8001/api/v1/';
    // public url: string = '';
    constructor(http, base) {
        /*Storage.get('base_url').then((val) => {
          this.url = val+'api/v1/';
        });*/
        this.http = http;
        this.base = base;
        // public url: string = 'https://vm-icov-001.riosoft.cl/api/v1/';
        this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
        this.geturl();
    }
    geturl() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({ key: 'base_url' });
            console.log("url", value);
            this.url = value + 'api/v1/';
        });
    }
    postDelivery(dataDelivery) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'publish/', dataDelivery, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    publishv2(dataDelivery) {
        console.log('data-delivery: ', dataDelivery);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        console.log(this.url + 'publishv2/', dataDelivery);
        return this.http.post(this.url + 'publishv2/', dataDelivery, { headers: headers }).toPromise();
    }
    actualizaDatos(dataDelivery) {
        /*
        actualiza datos en backend
        DPW
        */
        let url1 = "https://vm-icov-003.riosoft.cl/api/v1/subsidiary-stock/";
        console.log('envio-datos-dpw: ', dataDelivery);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        console.log(url1, dataDelivery);
        return this.http.post(url1, dataDelivery, { headers: headers }).toPromise();
    }
    publishPhoto(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'publish-photo/', data, { headers: headers }).toPromise();
    }
    subsidiaryb2bmobileproducts(id_subsidiary, brand_id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'reports/subsidiary-b2b-mobile-products/?brand_id=' + brand_id + '&id_subsidiary=' + id_subsidiary + '', { headers: headers }).toPromise();
    }
    lowstockproduct(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'low-stock-product/', data, { headers: headers }).toPromise();
    }
    getDeliveryChips(barCode) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'chip/?lccid=' + barCode, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    getStoresCatalog() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'stores', { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    getVisitsByUserDay(date) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'reports/visit-subsidiaryv5/?user_email=' + this.base.getDataUser() + '&day=' + date, { headers: headers }).pipe(
        // return this.http.get(this.url + 'reports/visit-subsidiaryv5/?user_email=contacto@icov.cl&day=2018-12-19', { headers: headers })
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    postChipDelivery(chipStateObj) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'chipDelivery/', chipStateObj, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    postChip(objChip) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'chip/', objChip, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    registerVisitSubsidiary(objVisited) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'visit/', objVisited, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
};
DeliveryServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService }
];
DeliveryServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], DeliveryServicesService);



/***/ }),

/***/ 42134:
/*!****************************************************************!*\
  !*** ./src/app/services/local-notification-service.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotificationServiceService": function() { return /* binding */ LocalNotificationServiceService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17324);
/* harmony import */ var _comunicacion_component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comunicacion-component.service */ 8077);



//import { LocalNotifications } from '@ionic-native/local-notifications';

//import { NavController } from 'ionic-angular';
//import { CapacitacionPage } from '../../pages/capacitacion/capacitacion';
//import { IncidenciasPage } from '../../pages/incidencias/incidencias';
//import { MetasPage } from '../../pages/metas/metas';
//import { ComuniComponentProvider } from '../comuni-component/comuni-component';

let LocalNotificationServiceService = class LocalNotificationServiceService {
    constructor(http, localNotifications, _comunic) {
        this.http = http;
        this.localNotifications = localNotifications;
        this._comunic = _comunic;
        this.userData = null;
        console.log('Hello LocalNotificationServiceProvider Provider');
    }
    addNotification(notificacion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log('notificacion-push: ', notificacion);
            let user_data_parse_json = localStorage.getItem('userData');
            let user_data_json_parse = JSON.parse(user_data_parse_json);
            this.userData = user_data_json_parse[0];
            if (this.userData.email === notificacion.user_created) { }
            else {
                let all_notification = yield this.localNotifications.getAll();
                console.log('get-all-notification: ', all_notification);
                let title = '';
                if (notificacion.title != undefined) {
                    title = notificacion.title + ' ';
                }
                this.localNotifications.schedule({
                    id: all_notification.length,
                    title: title + '(' + notificacion.event + ')',
                    text: notificacion.message,
                    icon: 'https://firebasestorage.googleapis.com/v0/b/windweather-21549.appspot.com/o/trade-logo.png?alt=media&token=42a3c792-1884-4c4b-bb98-5385c0613437',
                    smallIcon: 'res://drawable/ic_launcher',
                    attachments: [notificacion.image],
                    actions: [],
                    data: notificacion
                    // // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
                    // data: data
                });
                this.localNotifications.on('click').subscribe((notificacion_suscribe) => {
                    if (notificacion_suscribe.data.event === 'capacitacion') {
                        this._comunic.addItem({ name: 'openPage', namePage: 'capacitacion' });
                    }
                    if (notificacion_suscribe.data.event === 'incidencias') {
                        this._comunic.addItem({ name: 'openPage', namePage: 'incidencias' });
                    }
                    if (notificacion_suscribe.data.event === 'promocion') {
                        this._comunic.addItem({ name: 'openPage', namePage: 'promocion' });
                    }
                    console.log('notificacion_suscribe: ', notificacion_suscribe);
                });
            }
        });
    }
};
LocalNotificationServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_0__.LocalNotifications },
    { type: _comunicacion_component_service__WEBPACK_IMPORTED_MODULE_1__.ComunicacionComponentService }
];
LocalNotificationServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LocalNotificationServiceService);



/***/ }),

/***/ 91319:
/*!****************************************************!*\
  !*** ./src/app/services/notificaciones.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacionesService": function() { return /* binding */ NotificacionesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-services.service */ 94000);





let NotificacionesService = class NotificacionesService {
    constructor(http, base) {
        this.http = http;
        this.base = base;
        this.comunicacion = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.promocionesComunicacion = this.comunicacion.asObservable();
        this.incidenciasComunicacion = this.comunicacion.asObservable();
        // private receiver:  WebSocket = new WebSocket('ws://' + '192.168.100.9:8001' + '/promotions/');
        //  public url: string = 'http://192.168.100.9:8001/api/v1/';
        this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
        console.log('Hello NotificacionesProvider Provider');
        // this.getNotificacion();
    }
    //  getNotificacion(){
    //     this.receiver.onmessage = (event) =>{ 
    //       console.log('event_socket: ',JSON.parse(event.data));
    //       this.addItem(JSON.parse(event.data));
    //     };
    //   }
    addItem(data) {
        this.comunicacion.next(data);
    }
    getPromocionesUserNoVisto(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            /**
             * promociones no leidas
             */
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'promotions-to-see/?id_user=' + user, { headers: headers }).toPromise();
        });
    }
    getPromocionesUserVisto(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            /**
             * promociones leidas
             */
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'promotions-seen/?id_user=' + user, { headers: headers }).toPromise();
        });
    }
    getPromocionesUserAll(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'promotions-users/?id_user=' + user, { headers: headers }).toPromise();
        });
    }
    getPromociones() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            /**
             * obtiene todas las promociones
             */
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'promotions/', { headers: headers }).toPromise();
        });
    }
    setMarcarComoLeidaPromociones(data) {
        /**
         *  para marcar las promociones leidas
         */
        console.log('marcar-como-leido: ', data);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'promotions-users/', data, { headers: headers }).toPromise();
    }
    setRegistrarPhoto(data, id) {
        /**
         *  para marcar las promociones leidas
         */
        console.log('marcar-como-leido-data: ', data);
        console.log('marcar-como-leido-id', id);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.patch(this.url + 'promotions-users/' + id + "/", data, { headers: headers }).toPromise();
    }
    //notificaciones
    //historial
    getHistorialCapacitation() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'capacitation/', { headers: headers }).toPromise();
    }
    getHistorialIncidencias() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'incidencias/', { headers: headers }).toPromise();
    }
    getHistorialPromotion() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'promotions/', { headers: headers }).toPromise();
    }
    getPromotionRead(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'promotions-seen/?user=' + user, { headers: headers }).toPromise();
    }
    //post
    addCapacitation(capacitationChat) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'capacitation/', capacitationChat, { headers: headers }).toPromise();
    }
    addIncidencias(incidenciaChat) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'incidencias/', incidenciaChat, { headers: headers }).toPromise();
    }
    //  addPromotion(){
    //   let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
    //   return this.http.post(this.url+'promotions-users/',data, { headers: headers }).toPromise();
    //  }
    postMarcarComoLeidaMeta(pathData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'promotions-users/', pathData, { headers: headers }).toPromise();
    }
};
NotificacionesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService }
];
NotificacionesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], NotificacionesService);



/***/ }),

/***/ 10799:
/*!***************************************************!*\
  !*** ./src/app/services/poll-services.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollServicesService": function() { return /* binding */ PollServicesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _base_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-services.service */ 94000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);



//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import { Storage } from '@ionic/storage';



let PollServicesService = class PollServicesService {
    // public url: string = 'http://192.168.100.9:8001/api/v1/';
    constructor(http, base, storage) {
        this.http = http;
        this.base = base;
        this.storage = storage;
        // public url: string = '';
        // public url: string = 'https://vm-icov-001.riosoft.cl/api/v1/';
        this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
        this.storage.get('base_url').then((val) => {
            this.url = val + 'api/v1/';
        });
    }
    geturl() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: 'base_url' });
            this.url = value + 'api/v1/';
        });
    }
    getCurrentPolls() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'currentpolls/', { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
    responsePoll(responseObject) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'pollresponse/', responseObject, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
    }
};
PollServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _base_services_service__WEBPACK_IMPORTED_MODULE_1__.BaseServicesService },
    { type: _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
PollServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], PollServicesService);



/***/ }),

/***/ 73052:
/*!**************************************************!*\
  !*** ./src/app/services/pos-services.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosServicesService": function() { return /* binding */ PosServicesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-services.service */ 94000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);



//import { Storage } from '@ionic/storage';


let PosServicesService = class PosServicesService {
    // public url: string = 'http://192.168.100.9:8001/api/v1/';
    // public url: string = 'http://192.168.100.7:8000/api/v1/';
    constructor(http, base) {
        // this.storage.get('base_url').then((val) => {
        //   this.url = val + "api/v1/";
        // });
        this.http = http;
        this.base = base;
        // public url: string = '';
        this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
    }
    /** procesamos la respuesta de Error
    * @param {dataPos} <any> Save one Point of Sales.
    * Note: Subsidiary = POS
    */
    postPos(dataPos) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'subsidiary/?', dataPos, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
    }
    /** llamamos todas los puntos de venta que esten en un radio de 500 mts
    * @param {lat lng} <float> Lat = Latitude - Lng = Longitude .
    * Note: Subsidiary = POS
    */
    getNearPos(lat, lng) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        console.log("URL1 = " + this.url + 'subsidiary/?lat=' + lat + '&lng=' + lng);
        return this.http.get(this.url + 'subsidiary/?lat=' + lat + '&lng=' + lng, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
    }
    obtainConcessionsBackend(id_subsidiary) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'subsidiaryConsecion/' + id_subsidiary, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
    }
    get_categories() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'categories/', { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
    }
    updateConcessionsBackend(id_subsidiary, quantity_update) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        let form_data = {
            subsidiary_id: id_subsidiary,
            consecion_quantity_to_update: quantity_update
        };
        return this.http.post(this.url + 'subsidiaryConsecionUpdate/?', form_data, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
    }
};
PosServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService }
];
PosServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PosServicesService);



/***/ }),

/***/ 20905:
/*!****************************************************!*\
  !*** ./src/app/services/socket-service.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketServiceService": function() { return /* binding */ SocketServiceService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reconnecting-websocket */ 63323);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _sqlite_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sqlite-service.service */ 61412);






let SocketServiceService = class SocketServiceService {
    constructor(http, _sqlite) {
        this.http = http;
        this._sqlite = _sqlite;
        this.notificacion = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        console.log('Hello SocketServiceProvider Provider');
        const options = {
            maxReconnectionDelay: 10000,
            minReconnectionDelay: 1000,
            reconnectionDelayGrowFactor: 1.3,
            connectionTimeout: 4000,
            maxRetries: 10,
            debug: false,
            transports: 'websocket'
        };
        this.connection = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__.default("wss:vm-icov-003.riosoft.cl/ws/chat/notifications/", [], options);
        this.connection.addEventListener('message', (event) => {
            let eventResive_parse = JSON.parse(event.data);
            console.log('notificación socket: ', eventResive_parse);
            this.notificacion.next(eventResive_parse);
            let data = {
                created_at: null,
                event: null,
                image: null,
                message: null,
                type: null,
                user_created: null,
                read: null,
                capacitation_id: null,
                incidencia_id: null,
                promotion_id: null,
                title: null
            };
            data = Object.assign(eventResive_parse);
            try {
                this._sqlite.addNotificacion(data).then((notificacion_insert) => {
                    console.log('notificacion_insert:', notificacion_insert);
                }, (err) => {
                    console.log('notificacion_insert_error: ', err);
                });
            }
            catch (e) {
                console.log('addNotificacionCatch: ', e);
            }
        });
    }
    addNotificacionCapacitacion(notificacion_capacitation) {
        const options = {
            maxReconnectionDelay: 10000,
            minReconnectionDelay: 1000,
            reconnectionDelayGrowFactor: 1.3,
            connectionTimeout: 4000,
            maxRetries: 10,
            debug: false
        };
        this.capacitacionSend = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__.default("wss:vm-icov-003.riosoft.cl/ws/chat/capacitaciones_trade/", [], options);
        console.log('notificacion_capacitacion: ', notificacion_capacitation);
        this.capacitacionSend.send(JSON.stringify(notificacion_capacitation));
    }
    addNotificacionIncidencia(notificacion_incidencia) {
        const options = {
            maxReconnectionDelay: 10000,
            minReconnectionDelay: 1000,
            reconnectionDelayGrowFactor: 1.3,
            connectionTimeout: 4000,
            maxRetries: 10,
            debug: false
        };
        this.incidenciasSend = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__.default("wss:vm-icov-003.riosoft.cl/ws/chat/incidencias_trade/", [], options);
        this.incidenciasSend.send(JSON.stringify(notificacion_incidencia));
    }
    getNotificaciones() {
        return this.notificacion.asObservable();
    }
};
SocketServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _sqlite_service_service__WEBPACK_IMPORTED_MODULE_1__.SqliteServiceService }
];
SocketServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], SocketServiceService);



/***/ }),

/***/ 61412:
/*!****************************************************!*\
  !*** ./src/app/services/sqlite-service.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqliteServiceService": function() { return /* binding */ SqliteServiceService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);




let SqliteServiceService = class SqliteServiceService {
    constructor(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello SqliteServiceProvider Provider');
    }
    get Database() {
        return this.database;
    }
    initDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let init_db = yield this.sqlite.create({
                name: 'FdGhtXfGdf_gfd_DFddfDF.db',
                location: 'default'
            });
            return init_db;
            // .then(async (db: SQLiteObject) => {
            //   this.database = db;
            //   await this.createTables();
            //   // console.log('createTable:',createTable);
            // })
        });
    }
    createTables(db) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.database = db;
            try {
                yield this.database.executeSql(`CREATE TABLE IF NOT EXISTS notificaciones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          created_at TEXT,
          event TEXT,
          image TEXT,
          message TEXT,
          type TEXT,
          user_created TEXT,
          read INTEGER,
          capacitation_id INTEGER,
          incidencia_id INTEGER,
          promotion_id INTEGER,
          title TEXT
        );`, []);
            }
            catch (e) {
                console.log('sqlite-createTable_error: ', e);
            }
        });
    }
    addNotificacion(dat_insert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            /**
             *
             *   `CREATE TABLE IF NOT EXISTS notificaciones (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  created_at TEXT,
                  event TEXT,
                  image TEXT,
                  message TEXT,
                  type TEXT,
                  user_created TEXT,
                  read INTEGER
                );`
             *
             */
            console.log('addNotificacion: ', dat_insert);
            let data = [
                dat_insert.created_at,
                dat_insert.event,
                dat_insert.image,
                dat_insert.message,
                dat_insert.type,
                dat_insert.user_created,
                dat_insert.read,
                dat_insert.capacitation_id,
                dat_insert.incidencia_id,
                dat_insert.promotion_id
            ];
            return this.database.executeSql('INSERT INTO notificaciones (created_at, event, image, message, type, user_created, read, capacitation_id, incidencia_id, promotion_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', data);
        });
    }
    getAllNotificacionesNoLeidos_PROMISE() {
        let query = 'SELECT * FROM notificaciones';
        return new Promise((resolve, reject) => {
            this.database.executeSql(query, []).then(data => {
                let notificaciones = [];
                let contador = 0;
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).read == 0) {
                            notificaciones.push({
                                id: data.rows.item(i).id,
                                created_at: data.rows.item(i).created_at,
                                event: data.rows.item(i).event,
                                image: data.rows.item(i).image,
                                message: data.rows.item(i).message,
                                type: data.rows.item(i).type,
                                user_created: data.rows.item(i).user_created,
                                read: data.rows.item(i).read,
                                capacitation_id: data.rows.item(i).capacitation_id,
                                incidencia_id: data.rows.item(i).incidencia_id,
                                promotion_id: data.rows.item(i).promotion_id
                            });
                        }
                        contador = contador + 1;
                        if (contador == data.rows.length) {
                            resolve(notificaciones);
                        }
                    }
                }
                else {
                    resolve(notificaciones);
                }
            });
        });
    }
    buscarNotificacionCapacitationIdNoLeidos(capacitado_id) {
        return new Promise((resolve, reject) => {
            this.database.executeSql('SELECT * FROM notificaciones WHERE capacitation_id = ?', [capacitado_id]).then((data) => {
                let notificaciones = [];
                let contador = 0;
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).read == 0) {
                            notificaciones.push({
                                id: data.rows.item(i).id,
                                created_at: data.rows.item(i).created_at,
                                event: data.rows.item(i).event,
                                image: data.rows.item(i).image,
                                message: data.rows.item(i).message,
                                type: data.rows.item(i).type,
                                user_created: data.rows.item(i).user_created,
                                read: data.rows.item(i).read,
                                capacitation_id: data.rows.item(i).capacitation_id,
                                incidencia_id: data.rows.item(i).incidencia_id,
                                promotion_id: data.rows.item(i).promotion_id
                            });
                        }
                        contador = contador + 1;
                        if (contador == data.rows.length) {
                            resolve(notificaciones);
                        }
                    }
                }
                else {
                    resolve(notificaciones);
                }
            });
        });
    }
    buscarNotificacionIncidenciaIdNoLeidos(incidencias_id) {
        return new Promise((resolve, reject) => {
            this.database.executeSql('SELECT * FROM notificaciones WHERE incidencia_id = ?', [incidencias_id]).then((data) => {
                let notificaciones = [];
                let contador = 0;
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).read == 0) {
                            notificaciones.push({
                                id: data.rows.item(i).id,
                                created_at: data.rows.item(i).created_at,
                                event: data.rows.item(i).event,
                                image: data.rows.item(i).image,
                                message: data.rows.item(i).message,
                                type: data.rows.item(i).type,
                                user_created: data.rows.item(i).user_created,
                                read: data.rows.item(i).read,
                                capacitation_id: data.rows.item(i).capacitation_id,
                                incidencia_id: data.rows.item(i).incidencia_id,
                                promotion_id: data.rows.item(i).promotion_id
                            });
                        }
                        contador = contador + 1;
                        if (contador == data.rows.length) {
                            resolve(notificaciones);
                        }
                    }
                }
                else {
                    resolve(notificaciones);
                }
            });
        });
    }
    buscarPromocionIdNoLeidos(promotion_id) {
        return new Promise((resolve, reject) => {
            this.database.executeSql('SELECT * FROM notificaciones WHERE promotion_id = ?', [promotion_id]).then((data) => {
                let notificaciones = [];
                let contador = 0;
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        if (data.rows.item(i).read == 0) {
                            notificaciones.push({
                                id: data.rows.item(i).id,
                                created_at: data.rows.item(i).created_at,
                                event: data.rows.item(i).event,
                                image: data.rows.item(i).image,
                                message: data.rows.item(i).message,
                                type: data.rows.item(i).type,
                                user_created: data.rows.item(i).user_created,
                                read: data.rows.item(i).read,
                                capacitation_id: data.rows.item(i).capacitation_id,
                                incidencia_id: data.rows.item(i).incidencia_id,
                                promotion_id: data.rows.item(i).promotion_id
                            });
                        }
                        contador = contador + 1;
                        if (contador == data.rows.length) {
                            resolve(notificaciones);
                        }
                    }
                }
                else {
                    resolve(notificaciones);
                }
            });
        });
    }
};
SqliteServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
SqliteServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SqliteServiceService);



/***/ }),

/***/ 54793:
/*!***************************************************************!*\
  !*** ./src/app/services/twitter-conection-service.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwitterConectionServiceService": function() { return /* binding */ TwitterConectionServiceService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



// import { TwitterService } from 'ng2-twitter';
//import 'rxjs/add/operator/map';
let TwitterConectionServiceService = class TwitterConectionServiceService {
    constructor(http) {
        this.http = http;
        this.token = null;
        this.tokenSecret = null;
        this.consumerKey = 'rJqsJUOZVwIEis57X1ruErwBT';
        this.consumerSecret = 'BWcYCYNP2NMuDiUSz8apqr2dNxA7FSKQy8SNGANiSWF2S6OaKc';
        console.log('Hello TwitterConectionServiceProvider Provider');
    }
};
TwitterConectionServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
TwitterConectionServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], TwitterConectionServiceService);



/***/ }),

/***/ 24107:
/*!***************************************************!*\
  !*** ./src/app/services/user-services.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserServicesService": function() { return /* binding */ UserServicesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-services.service */ 94000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);






let UserServicesService = class UserServicesService {
    constructor(http, base) {
        this.http = http;
        this.base = base;
        this.url = '';
        this.loggedIn = false;
        // this.storage.get('base_url').then((val) => {
        //   this.url = val;
        // });
        this.url = 'https://vm-icov-003.riosoft.cl/';
        // this.url = 'http://192.168.100.9:8001/';
        // this.url = 'http://192.168.100.7:8000/';
        // this.url = 'http://192.168.100.13:8000/';
        //this.form = fb.group({
        //  email: ['', Validators.compose([Validators.required, Validators.email])],
        // }, );
    }
    login(userInfo) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify(userInfo);
        return this.http.post(this.url + 'api-token-auth/', body, { headers: headers }).pipe(
        // aqui estraemos lod datos para procesarlos despues con angular
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
            if (res == "error" || res == "nofound") {
                this.loggedIn = false;
            }
            else {
                localStorage.setItem('token', res['token']);
                localStorage.setItem('user', userInfo.email);
                // Obtain latitude and longitude to user position
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        localStorage.setItem('longitude', position.coords.latitude.toString());
                        localStorage.setItem('latitude', position.coords.longitude.toString());
                        // console.log('latitud: '+ position.coords.longitude);
                    });
                }
                this.loggedIn = true;
            }
            return this.loggedIn;
        }));
        // en caso de algun problema aqui se extrael el mensaje
    }
    reset_password(email) {
        let url_reset = this.url;
        let body = email;
        return this.http.post(url_reset + 'password/reset/', body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(errorResponse => {
            let errMsg;
            if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                // const err = errorResponse.message || JSON.stringify(errorResponse.error);
                errMsg = errorResponse.error;
                // errMsg = `${errorResponse.status} - ${errorResponse.statusText || ''} Details: ${err}`;
                // console.log('A',errorResponse.message);
                // console.log('B',errorResponse.error);
                // console.log('C',errorResponse.statusText);
            }
            else {
                errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errMsg);
        }));
    }
    confirm_password(form, uid, token) {
        let url_reset = this.url;
        return this.http.post(url_reset + 'password/reset/confirm/' + uid + '/' + token + '/', form).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(errorResponse => {
            let errMsg;
            if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                errMsg = errorResponse.error;
            }
            else {
                errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errMsg);
        }));
    }
    obtainToken(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.post(this.url + 'o/token/', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
    }
    getDataUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
        return this.http.get(this.url + 'api/v1/users/?email=' + user, { headers: headers }).toPromise();
    }
    getUser() {
        let user = localStorage.getItem('userData');
        let parseUser = JSON.parse(user);
        return parseUser;
    }
};
UserServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService }
];
UserServicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], UserServicesService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    // export const ENV = {
    //   production: false,
    //   firebase: {
    //     apiKey: "AIzaSyCWmZSKBJlWWAm0Mo0TQatmwyIlGq968T0",
    //     authDomain: "reparto-9bb51.firebaseapp.com",
    //     databaseURL: "https://reparto-9bb51.firebaseio.com",
    //     projectId: "reparto-9bb51",
    //     storageBucket: "",
    //     messagingSenderId: "717489812128"
    //   }
    // }
    production: false,
    firebase: {
        apiKey: "AIzaSyALT1Q9KuooFol_FgOKgxq89gzEfKog9Sw",
        authDomain: "arrobaredamigos.firebaseapp.com",
        databaseURL: "https://arrobaredamigos.firebaseio.com",
        projectId: "arrobaredamigos",
        storageBucket: "arrobaredamigos.appspot.com",
        messagingSenderId: "1051206126026"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent !important;\n}\n\nion-content {\n  --background: #fff url('173SugarLollipop.png') no-repeat center center / cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLG9DQUFBO0FBRVg7O0FBREE7RUFDSSw4RUFBQTtBQUlKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHsgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCcuLi9hc3NldHMvaW1ncy8xNzNTdWdhckxvbGxpcG9wLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ 62845:
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n\nagm-map {\n  height: 100%;\n}\n\n* {\n  font-family: Lato;\n}\n\n#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFEUjs7QUFPSTtFQUNFLFlBQUE7QUFKTjs7QUFRSTtFQUNFLGlCQUFBO0FBTE47O0FBUUk7RUFDRSxZQUFBO0FBTE4iLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICAuc3Bpbm5lci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gIFxuICAgIC8vIC5zZWFyY2hiYXIge1xuICAgIC8vICAgd2lkdGg6IDkwJVxuICAgIC8vIH1cbiAgICBhZ20tbWFwIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgIFxuICAgICoge1xuICAgICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgfVxuICBcbiAgICAjbWFwIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9ICBcbiBcbiAgIl19 */");

/***/ }),

/***/ 11386:
/*!*********************************************************!*\
  !*** ./src/app/pages/concessions/concessions.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-concessions ion-card {\n  position: relative;\n  text-align: center;\n  margin-bottom: 3px;\n}\npage-concessions .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\npage-concessions .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n  margin-bottom: 3px;\n}\npage-concessions #homeContent {\n  text-align: center;\n}\npage-concessions #homeContent h1 {\n  font-size: 1.5em;\n  color: #337ab7;\n}\npage-concessions #homeContent p {\n  color: #FF6702;\n  font-size: 1.5em;\n}\npage-concessions .alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\npage-concessions .alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmNlc3Npb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZOO0FBS0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhOO0FBT0k7RUFDQSxrQkFBQTtBQUxKO0FBTUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFKUjtBQU1JO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBSlI7QUFTSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVVJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFSTiIsImZpbGUiOiJjb25jZXNzaW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWNvbmNlc3Npb25zIHtcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG4gIFxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMzYlO1xuICAgICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIFxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUyJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIFxuICAgIH1cbiAgXG4gICAgI2hvbWVDb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogIzMzN2FiNztcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjRkY2NzAyO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAuYWxlcnQge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIFxuICAgIC5hbGVydC1kYW5nZXIge1xuICAgICAgY29sb3I6ICNhOTQ0NDI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZWJjY2QxO1xuICB9XG4gIFxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ 39578:
/*!*************************************************************!*\
  !*** ./src/app/pages/delivery-chip/delivery-chip.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-delivery-chip .information {\n  color: orange;\n}\npage-delivery-chip .subsidiaryToolbar {\n  color: #32db64;\n  text-align: center;\n  font-size: 4.5em;\n}\npage-delivery-chip #subsidiaryToolbarIcon {\n  font-size: 0.5em;\n}\npage-delivery-chip h2 {\n  color: orange;\n}\npage-delivery-chip .validate_subsidiary {\n  font-size: 0.5em;\n}\npage-delivery-chip .label {\n  margin: 0;\n}\npage-delivery-chip .item-inner {\n  padding-right: 0px !important;\n}\npage-delivery-chip .alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\npage-delivery-chip .alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.label {\n  margin: 0;\n}\nion-item.item.item-block.item-md {\n  padding-left: 1px !important;\n}\nion-item.item.item-block.item-ios {\n  padding-left: 1px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LWNoaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNFLGdCQUFBO0FBQU47QUFFSTtFQUNHLFNBQUE7QUFBUDtBQUdJO0VBQ0csNkJBQUE7QUFEUDtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUhOO0FBT0E7RUFDRyxTQUFBO0FBSkg7QUFPQTtFQUNHLDRCQUFBO0FBSkg7QUFNQTtFQUNHLDRCQUFBO0FBSEgiLCJmaWxlIjoiZGVsaXZlcnktY2hpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWRlbGl2ZXJ5LWNoaXAge1xuICAgIC5pbmZvcm1hdGlvbntcbiAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgIH1cbiAgICAuc3Vic2lkaWFyeVRvb2xiYXIge1xuICAgICAgICBjb2xvcjogIzMyZGI2NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIH1cbiAgICAjc3Vic2lkaWFyeVRvb2xiYXJJY29ue1xuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIH1cbiAgICBoMntcbiAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgIH1cbiAgICAudmFsaWRhdGVfc3Vic2lkaWFyeXtcbiAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgfVxuICAgIC5sYWJlbCB7XG4gICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hbGVydCB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgIC5hbGVydC1kYW5nZXIge1xuICAgICAgY29sb3I6ICNhOTQ0NDI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZWJjY2QxO1xuICB9XG4gIFxufVxuLmxhYmVsIHtcbiAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWl0ZW0uaXRlbS5pdGVtLWJsb2NrLml0ZW0tbWQge1xuICAgcGFkZGluZy1sZWZ0OiAxcHghaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0uaXRlbS5pdGVtLWJsb2NrLml0ZW0taW9zIHtcbiAgIHBhZGRpbmctbGVmdDogMXB4IWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 2089:
/*!*******************************************************************!*\
  !*** ./src/app/pages/delivery-publish/delivery-publish.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-delivery-publish .subsidiaryToolbar {\n  color: #32db64;\n  text-align: center;\n  font-size: 4.5em;\n}\npage-delivery-publish #subsidiaryToolbarIcon {\n  font-size: 0.5em;\n}\npage-delivery-publish .round {\n  border-radius: 50%;\n  width: 60% !important;\n}\npage-delivery-publish .photoImgCont {\n  margin: 0 0 0 25%;\n}\npage-delivery-publish .validate_subsidiary {\n  font-size: 0.5em;\n}\npage-delivery-publish .alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\npage-delivery-publish .alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\npage-delivery-publish .center-container {\n  width: 100%;\n  text-align: center;\n}\npage-delivery-publish .card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\npage-delivery-publish .card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\npage-delivery-publish .card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LXB1Ymxpc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUFSO0FBRUk7RUFFQSxpQkFBQTtBQURKO0FBSUk7RUFDRSxnQkFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBSE47QUFNSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBSk47QUFPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUxKO0FBVUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBVE47QUFZSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVZOIiwiZmlsZSI6ImRlbGl2ZXJ5LXB1Ymxpc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1kZWxpdmVyeS1wdWJsaXNoIHtcbiAgICAuc3Vic2lkaWFyeVRvb2xiYXIge1xuICAgICAgICBjb2xvcjogIzMyZGI2NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIH1cbiAgICAjc3Vic2lkaWFyeVRvb2xiYXJJY29ue1xuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIH1cbiAgICAucm91bmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6NjAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAucGhvdG9JbWdDb250e1xuXG4gICAgbWFyZ2luOiAwIDAgMCAyNSUgO1xuICAgIH1cblxuICAgIC52YWxpZGF0ZV9zdWJzaWRpYXJ5e1xuICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICB9XG5cbiAgICAuYWxlcnQge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAuYWxlcnQtZGFuZ2VyIHtcbiAgICAgIGNvbG9yOiAjYTk0NDQyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcbiAgfVxuXG4gIC5jZW50ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgfVxuXG4gIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNiU7XG4gICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUyJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gIH1cblxufSJdfQ== */");

/***/ }),

/***/ 17603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-home agm-map {\n  height: 100%;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n\nagm-map {\n  height: 100%;\n}\n\n* {\n  font-family: Lato;\n}\n\n#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQUFSOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURGOztBQU9BO0VBQ0EsWUFBQTtBQUpBOztBQVFBO0VBQ0EsaUJBQUE7QUFMQTs7QUFRQTtFQUNBLFlBQUE7QUFMQSIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtaG9tZSB7XG4gICAgYWdtLW1hcCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbn1cblxuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4vLyAuc2VhcmNoYmFyIHtcbi8vICAgd2lkdGg6IDkwJVxuLy8gfVxuYWdtLW1hcCB7XG5oZWlnaHQ6IDEwMCU7XG59XG5cblxuKiB7XG5mb250LWZhbWlseTogTGF0bztcbn1cblxuI21hcCB7XG5oZWlnaHQ6IDEwMCU7XG59ICBcblxuIl19 */");

/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loginCont {\n  text-align: center;\n}\n#loginCont img {\n  height: 170px;\n  width: 170px;\n}\n#loginCont button {\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\n#loginCont a {\n  margin: 8px;\n  text-decoration: none;\n}\n#loginCont p {\n  color: #337ab7;\n  margin: 8px;\n}\n#loginCont label {\n  display: block;\n}\n#loginCont #hereSpan {\n  color: #FF6702;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLGtCQUFBO0FBSEo7QUFJSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQVNJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBUFI7QUFTSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBUFI7QUFVSTtFQUNJLGNBQUE7QUFSUjtBQVVJO0VBQ0ksY0FBQTtBQVJSIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtbG9naW4ge1xuXG59XG4jbG9naW5Db250IHtcbiAgICAvLyBiYWNrZ3JvdW5kOiBjb2xvcigkY29sb3JzLCBwcmltYXJ5KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgLy8gZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICMzMzdhYjc7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuXG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgICNoZXJlU3BhbiB7XG4gICAgICAgIGNvbG9yOiAjRkY2NzAyO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 2843:
/*!*********************************************!*\
  !*** ./src/app/pages/polls/polls.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-polls .alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\npage-polls .alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUlJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFGTiIsImZpbGUiOiJwb2xscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXBvbGxzIHtcblxuICAgIC5hbGVydCB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgXG4gICAgLmFsZXJ0LWRhbmdlciB7XG4gICAgICBjb2xvcjogI2E5NDQ0MjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XG4gICAgICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG4gICAgfVxuICBcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n<ion-menu no-border  menuId=\"custom\" contentId=\"main\" swipeGesture=\"false\"\n  style=\"background: #4e7a89;\nbackground: linear-gradient(to bottom right, #2e3441 30%, #4e7a89 100%);overflow-x:hidden; overflow-y:hidden; overflow-x: hidden\">\n <ion-content>\n  <ion-list style=\"background:transparent !important\" >\n    <ion-item  style=\"color:rgb(255, 255, 255);margin-bottom: 2em;\" lines=\"none\">\n      <ion-avatar item-start style=\"margin-right: 1em;\">\n        <img [src]=\"user?.photo\">\n      </ion-avatar>\n      <ion-label>\n        <h2 style=\"color:rgb(255, 255, 255) !important\">{{user?.first_name }} {{user?.last_name}}</h2>\n        <p style=\"color:rgb(255, 255, 255)\">{{user?.email}}</p>\n        <p style=\"color:rgb(255, 255, 255)\">{{user?.phone}}</p>\n      </ion-label>      \n    </ion-item>\n    \n   <!-- <ion-item style=\"background:transparent !important\">\n      <button  style=\"background:transparent !important;color:rgb(255, 255, 255)\" *ngIf=\"!menutwo\" (click)=\"menutwo=true\" ion-button clear icon-only item-end\n        icon-end>\n        \n\n      </button>\n      <button  style=\"background:transparent !important;color:rgb(255, 255, 255)\" *ngIf=\"menutwo\" (click)=\"menutwo=false\" ion-button clear icon-only item-end\n        icon-end>\n        <ion-icon name=\"arrow-dropup\"></ion-icon>\n\n      </button>\n    </ion-item>-->\n    <ion-menu-toggle auto-hide=\"true\" *ngFor=\"let p of pages\" >\n    <ion-item  >\n      <ion-avatar slot=\"start\" style=\"margin: 8px 16px 0px 0px;\">\n        <ion-icon style=\"color:rgb(255, 255, 255);font-size: 140%;\n        height: 80%;\" [name]=\"p.icon\" ></ion-icon>\n      </ion-avatar>\n      <button style=\"background:transparent !important\" menuClose ion-item (click)=\"openPage(p)\" >\n        <p style=\"color:rgb(255, 255, 255)\"> {{p.title}} </p>\n      </button>\n    </ion-item>\n    </ion-menu-toggle>\n\n    <ion-item style=\"margin-top: 30px;\">\n      <ion-avatar slot=\"start\" style=\"margin: 8px 16px 0px 0px;\">\n        <ion-icon style=\"color:rgb(255, 255, 255);font-size: 140%;\n        height: 80%;\" name=\"log-out\" ></ion-icon>\n      </ion-avatar>\n      <button  style=\"background:transparent !important\" menuClose ion-item (click)=\"logout()\">\n        <p style=\"color:rgb(255, 255, 255)\">Cerrar sesión</p>\n    \n      </button>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n  \n</ion-menu>\n\n<ion-nav [root]=\"rootPage\" #content swipeBackEnabled=\"false\"></ion-nav>\n\n\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n\n\n");

/***/ }),

/***/ 37645:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <!-- <button ion-button clear item-end icon-start small (click)=\"loginWithTwitter()\">\n    <ion-icon name=\"logo-twitter\"></ion-icon>\n</button> -->\n\n    <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" pullMin=\"100\" pullMax=\"200\">\n        <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refrescando...\">\n    </ion-refresher-content>\n      </ion-refresher>-->\n     \n      <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button (click)=\"doRefresh($event)\" color='violet'>\n          <ion-icon name=\"reload-outline\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n\n  <agm-map *ngIf=\"display_map\" [latitude]=\"latitude\" [longitude]=\"longitude\" [mapDraggable]=\"true\" [scrollwheel]=\"true\" [zoom]=\"zoom\" >\n   <!-- <agm-map *ngIf=\"display_map\" [latitude]=\"51.678418\" [longitude]=\"7.809007\" [mapDraggable]=\"true\" [scrollwheel]=\"true\" [zoom]=\"zoom\" >-->\n    <agm-marker-cluster *ngFor=\"let marker of markers\" imagePath=\"../../../assets/imgs/storea.png\">\n      <!-- <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconMe\"> -->\n      <agm-marker>\n          <agm-info-window>\n            <!-- <strong>{{ Me }}</strong> -->\n          </agm-info-window>\n        </agm-marker>\n      <!-- <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"icon\" (markerClick)=\"markerClick(marker)\"> -->\n      <!-- <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"'assets/imgs/'+marker.tasa356+'.png'\" (markerClick)=\"markerClick(marker)\"> -->\n      <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"marker.photo\" (markerClick)=\"markerClick(marker)\">\n        <agm-info-window>\n          <strong>{{marker.title }}</strong>\n        </agm-info-window>\n      </agm-marker>\n    </agm-marker-cluster>\n  </agm-map>\n\n\n \n\n  <!-- <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"Buscar\" [formControl]=\"searchControl\" class=\"searchbar\"></ion-searchbar> -->\n\n  <!-- <div class=\"row\">\n    <ion-input type=\"text\" [(ngModel)]=\"searchTerm\" placeholder=\"Buscar\" [formControl]=\"searchControl\" class=\"searchbar\"></ion-input>\n    <button ion-button round style=\"top: 7px;\">X</button>\n  </div> -->\n\n\n    <!-- aqui va el mapa -->\n\n   \n\n\n    <ion-list *ngIf=\"subsidiary_list\">\n      <!-- <ion-list-header>\n        Puntos de venta cercanos:\n      </ion-list-header> -->\n\n        <button ion-item *ngFor=\"let item of filtered_items\" (click)=\"subsidiarySelected(item.id, item.title)\">\n          <!-- {{ item.title }}  <span item-end>{{item.tasa356}}</span> -->\n          {{ item.title }}  <span item-end> <img src=\"../../../assets/imgs/{{item.tasa356}}.png\" alt=\"\" width=\"20px\"> </span>\n        </button>\n    </ion-list>\n\n\n</ion-content>\n\n");

/***/ }),

/***/ 93629:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/concessions/concessions.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\n\n  <ng-template\n    *ngIf=\"id_subsidiary == 'null' || id_subsidiary == undefined ;then showBlock; else notShowBlock\">\n  </ng-template>\n\n  <ng-template #showBlock>\n    <!-- <p class=\"validate_subsidiary\">No ha seleccionado una sucursal</p> -->\n    <div class=\"alert alert-danger\">\n      <strong>Precaución!</strong> No ha seleccionado una sucursal.\n    </div>\n  </ng-template>\n<div class=\"\">\n  <!-- {{total_concessions}} -->\n</div>\n  <ng-template #notShowBlock>\n    <!-- <p>concesiones: {{total_concessions}}</p> -->\n    <!-- <ion-card> -->\n    <div *ngIf=\"total_concessions > 0 && total_concessions != {}\">\n\n        <ion-item>\n            <h1>Concesiones</h1>\n            <p>{{total_concessions}}</p>\n        </ion-item>\n    <!-- </ion-card> -->\n\n\n      <form (ngSubmit)=\"charge_concession()\" [formGroup]=\"form\">\n\n  \t\t      <ion-list>\n  \t\t\t\t\t\t<ion-item>\n  \t\t\t\t \t\t <ion-label floating color=\"primary\">\n  \t\t\t\t \t\t\t<ion-icon name=\"person\"></ion-icon>     Concesiones a cobrar</ion-label>\n  \t\t\t\t \t\t <ion-input type=\"number\" max=\"2\" formControlName=\"discount\"></ion-input>\n  \t\t\t\t \t </ion-item>\n\n  \t\t\t\t\t</ion-list>\n\n\n  \t\t\t\t\t<div padding-horizontal>\n  \t\t\t\t\t\t<div class=\"form-error\">{{form.errors}}</div>\n  \t\t\t\t\t\t<button ion-button full type=\"submit\" [disabled]=\"!form.valid\">Cobrar</button>\n  \t\t\t\t\t</div>\n\n  \t\t</form>\n    </div>\n\n<div *ngIf=\"total_concessions == 0 || total_concessions == {}\">\n  <div class=\"alert alert-danger\">\n    <strong>Precaución!</strong> No hay concesiones para este punto de venta.\n  </div>\n</div>\n  </ng-template>\n\n\n</ion-content>\n\n");

/***/ }),

/***/ 43289:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-chip/delivery-chip.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div  *ngIf=\"modal == true\">\n  \n    <ion-navbar color=\"primary\">\n        <ion-buttons left>\n          <button ion-button icon-only (click)=\"go_home()\">\n            <ion-icon color=\"light\" name=\"arrow-back\"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title (click)=\"go_home()\">Volver</ion-title>\n      </ion-navbar>\n  \n    </div>\n  \n    <div *ngIf=\"id_subsidiary == 'null'\">\n      <div class=\"alert alert-danger\">\n        <strong>Precaución!</strong> No ha seleccionado una sucursal.\n      </div>\n    </div>\n  \n  \n  <div *ngIf=\"id_subsidiary != 'null'\">\n  \n    <ion-row>\n      <ion-col >\n        <ion-item>\n            <!-- <ion-label><p>Entregas para: {{title_subsidiary}}</p></ion-label> -->\n            <ion-label><p>Entregas para: {{title_subsidiary}}</p></ion-label>\n  \n          </ion-item>\n      </ion-col>\n      </ion-row>\n  \n  \n      <ion-row>\n        <ion-col >\n          <ion-item>\n              <ion-label><h2>Concesión</h2></ion-label><ion-toggle [(ngModel)]=\"consecion\"></ion-toggle>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n  </div>\n  \n      <!-- Tabla de Chip's-->\n  <ion-row>\n    <ion-col>\n        <ion-card no-padding>\n            <ion-item-divider *ngIf=\"front_chips_array.length > 0\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col>\n                      <b>{{cont}}</b>\n                      </ion-col>\n                      <ion-col>\n                        <b>N° código de barra</b>\n                      </ion-col>\n                      <ion-col>\n                        <b>Estado</b>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n            </ion-item-divider>\n  \n          <ion-item *ngFor=\"let chip of front_chips_array\" class=\"\">\n              <ion-item >\n                <ion-avatar item-start>\n                  <img src=\"../../../assets/images/barcode.png\" class=\"round\" width=\"25px\" />\n                </ion-avatar>\n                <h2>{{ chip.code }}</h2>\n                <ion-icon [name]=\"chip.icon\" [style]=\"color\" item-end></ion-icon>\n              </ion-item>\n          </ion-item>\n  \n  \n        </ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-content>\n  \n  <!-- Footer with scanchip button -->\n  <ion-footer no-border>\n    <ion-toolbar class=\"subsidiaryToolbar\">\n  \n      <ng-template\n        *ngIf=\"id_subsidiary == 'null';then showBlock; else notShowBlock\">\n      </ng-template>\n  \n      <ng-template #showBlock>\n        <!-- <p class=\"validate_subsidiary\">No ha seleccionado una sucursal</p> -->\n      </ng-template>\n  \n      <ng-template #notShowBlock>\n        <ion-icon name=\"barcode\" (click)=\"scanChips()\"></ion-icon>\n      </ng-template>\n  \n    </ion-toolbar>\n  </ion-footer>\n  \n");

/***/ }),

/***/ 626:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-publish/delivery-publish.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <ion-content padding class=\"card-background-page\">\n\n\n  <div *ngIf=\"id_subsidiary == 'null'\">\n    <div class=\"alert alert-danger\">\n      <strong>Precaución!</strong> No ha seleccionado una sucursal.\n    </div>\n  </div>\n\n  <div *ngIf=\"id_subsidiary != 'null'\">\n    <!-- <button ion-button full (click)=\"registerVisit()\">Registrar Visita</button> -->\n\n    <ion-item *ngFor=\"let image of allImages\" >\n        <!-- <ion-card>\n          <ion-row no-padding>\n            <ion-col text-center>\n              <div class=\"photoImgCont\">\n                <img src=\"{{ image }}\" class=\"round\" width=\"50px\"/>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card> -->\n\n        <ion-card >\n          <img src=\"{{ image.img }}\"/>\n          <div class=\"card-title\"> {{ image.name }} </div>\n          <!-- <div class=\"card-subtitle\">41 Listings</div> -->\n        </ion-card>\n    </ion-item>\n<!--\n    <ion-card>\n      <img src=\"img/card-saopaolo.png\"/>\n      <div class=\"card-title\">São Paulo</div>\n      <div class=\"card-subtitle\">41 Listings</div>\n    </ion-card> -->\n\n  <div class=\"center-container\">\n    <button ion-button color=\"primary\" icon-left (click)=\"openCamera()\">\n      <ion-icon name=\"camera\"></ion-icon> Trade\n    </button>\n  </div>\n\n  <ion-item>\n    <ion-label floating color=\"primary\"><ion-icon name=\"calendar\"></ion-icon> Nombre </ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"modelDelivery.nameDeliveryPublish\" name=\"nameDeliveryPublish\" #nameDeliveryPublish=\"ngModel\" [maxlength]=\"50\"></ion-input>\n  </ion-item>\n  <br>\n</div>\n\n</ion-content>\n\n<!-- Footer with submit form trade button -->\n<ion-footer no-border>\n<ion-toolbar class=\"subsidiaryToolbar\">\n\n  <ng-template\n    *ngIf=\"id_subsidiary == 'null';then showBlock; else notShowBlock\">\n  </ng-template>\n\n  <ng-template #showBlock>\n  </ng-template>\n\n  <ng-template #notShowBlock>\n    <ion-icon name=\"checkmark-circle\" color=\"primary\" (click)=\"sendDeliveryPublish()\"></ion-icon>\n\n  </ng-template>\n\n</ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 78102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\" (click)=\"openCustom()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" >\n      <ion-button  (click)=\"presentPopoverNotificacion()\" >\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge item-end color=\"violet\">{{notificaciones?.length}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Góndola</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n <!--<app-map></app-map>\n  <page-maps></page-maps>-->\n  <!--<app-maps></app-maps>-->\n  <!-- <ion-tabs tabsPlacement=\"bottom\">\n      <!-- <ion-tab [root]=\"tabHome\" tabTitle=\"Home\" tabIcon=\"home\" [rootParams]=\"param_from_home\"></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabHome\" tabTitle=\"Inicio\" tabIcon=\"home\" [rootParams]=\"dataDelivery\"></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabChip\"  tabTitle=\"Chips\"  tabIcon=\"barcode\" [rootParams]=\"dataDelivery\"></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabPublish\" tabTitle=\"Trade\"  tabIcon=\"apps\" [rootParams]=\"dataDelivery\" ></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabConcession\" tabTitle=\"Concesión\"  tabIcon=\"logo-usd\" [rootParams]=\"dataDelivery\" ></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabPoll\" tabTitle=\"Encuesta\"  tabIcon=\"list-box\" [rootParams]=\"dataDelivery\" ></ion-tab> -->\n  <!-- </ion-tabs> -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"doRefresh($event)\" color='violet'>\n      <ion-icon name=\"reload-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n<agm-map *ngIf=\"displaymap\" [latitude]=\"latitude\" [longitude]=\"longitude\" [mapDraggable]=\"true\" [scrollwheel]=\"true\" [zoom]=\"zoom\" >\n<!-- <agm-map *ngIf=\"display_map\" [latitude]=\"51.678418\" [longitude]=\"7.809007\" [mapDraggable]=\"true\" [scrollwheel]=\"true\" [zoom]=\"zoom\" >-->\n<agm-marker-cluster  >\n  <!-- <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconMe\"> -->\n  <agm-marker>\n      <agm-info-window>\n        <!-- <strong>{{ Me }}</strong> -->\n      </agm-info-window>\n    </agm-marker>\n  <!-- <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"icon\" (markerClick)=\"markerClick(marker)\"> -->\n  <!-- <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"'assets/imgs/'+marker.tasa356+'.png'\" (markerClick)=\"markerClick(marker)\"> -->\n  <agm-marker *ngFor=\"let marker of markers\" [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"marker.photo\" (markerClick)=\"markerClick(marker)\">\n    <agm-info-window>\n      <strong>{{marker.title }}</strong>\n    </agm-info-window>\n  </agm-marker>\n</agm-marker-cluster>\n</agm-map>\n\n\n\n\n<!-- <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"Buscar\" [formControl]=\"searchControl\" class=\"searchbar\"></ion-searchbar> -->\n\n<!-- <div class=\"row\">\n<ion-input type=\"text\" [(ngModel)]=\"searchTerm\" placeholder=\"Buscar\" [formControl]=\"searchControl\" class=\"searchbar\"></ion-input>\n<button ion-button round style=\"top: 7px;\">X</button>\n</div> -->\n\n\n<!-- aqui va el mapa -->\n\n\n\n\n<ion-list *ngIf=\"subsidiary_list\">\n  <!-- <ion-list-header>\n    Puntos de venta cercanos:\n  </ion-list-header> -->\n\n    <button ion-item *ngFor=\"let item of filtered_items\" (click)=\"subsidiarySelected(item.id, item.title)\">\n      <!-- {{ item.title }}  <span item-end>{{item.tasa356}}</span> -->\n      {{ item.title }}  <span item-end> <img src=\"../../../assets/imgs/{{item.tasa356}}.png\" alt=\"\" width=\"20px\"> </span>\n    </button>\n</ion-list>\n\n</ion-content>\n \n");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" id=\"loginCont\">\n  <img src=\"../../../assets/imgs/trade.png\" alt=\"\">\n\n\n  <div center style=\"border:none !important;margin:none !important;margin-block-start: 7em;\">\n    <ion-list>\n      <ion-item style=\"margin-bottom: 1em;\">\n        <ion-label position=\"floating\" color=\"violet\">\n          <ion-icon name=\"mail\"></ion-icon> Correo\n        </ion-label>\n        <!--  <ion-input type=\"email\" maxLength=\"30\" [(ngModel)]=\"user\" name=\"user\" #field=\"ngModel\" required></ion-input> -->\n        <ion-input type=\"email\" [(ngModel)]=\"modelAuth.email\" name=\"email\" #email=\"ngModel\"  required maxlength=\"50\">\n        </ion-input>\n       <!-- <p ion-text style=\"color: red;\" *ngIf=\"email.errors\">Ingrese un email</p>-->\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"violet\">\n          <ion-icon name=\"finger-print\"></ion-icon> Contraseña\n        </ion-label>\n        <!-- <ion-input type=\"password\" maxLength=\"10\" [(ngModel)]=\"pass\" name=\"pass\" #pass=\"ngModel\" required></ion-input> -->\n          <ion-input type=\"password\" [(ngModel)]=\"modelAuth.password\" name=\"password\" #password=\"ngModel\" required\n          maxlength=\"10\"></ion-input>\n       <!-- <p ion-text style=\"color: red;\" *ngIf=\"password.errors\">Ingrese una password</p>-->\n       \n      </ion-item>\n    </ion-list>\n    <div padding>\n      <ion-button color=\"violet\" expand=\"block\" (click)=\"singUp()\">Aceptar</ion-button>\n    </div>\n  </div>\n\n  <a (click)=\"recoverPassword()\">\n    <p>¿Olvidaste la contraseña?</p>\n  </a>\n  <br/>\n  <ion-note >Versión 0.0.18</ion-note>\n</ion-content>");

/***/ }),

/***/ 53005:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/polls/polls.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\n\n  <ng-template *ngIf=\"id_subsidiary == 'null' || id_subsidiary == undefined ;then notShowBlock; else ShowBlock\">\n  </ng-template>\n\n  <ng-template #notShowBlock>\n    <div class=\"alert alert-danger\">\n      <strong>Precaución!</strong> No ha seleccionado una sucursal.\n    </div>\n\n  </ng-template>\n\n  <ng-template #ShowBlock>\n\n    <div *ngIf=\"this.polls_list.length > 0\">\n\n    <ion-item *ngFor=\"let item of items; let i = index\">\n       <ion-label>{{item.question}}</ion-label>\n       <ion-checkbox [(ngModel)]='item.ischecked'></ion-checkbox>\n     </ion-item>\n    <!-- <button ion-button color=\"secondary\"  (click)=\"answerPolls()\"> -->\n    <button ion-button (click)=\"answerPolls()\" >Responder encuesta</button>\n  </div>\n  <div *ngIf=\"this.polls_list.length == 0\">\n    <div class=\"alert alert-danger\">\n      <strong>Precaución!</strong> No existe encuesta vigente.\n    </div>\n  </div>\n\n  </ng-template>\n  <!-- <button ion-button color=\"secondary\"  (click)=\"answerPolls()\"> -->\n\n\n</ion-content>\n\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map