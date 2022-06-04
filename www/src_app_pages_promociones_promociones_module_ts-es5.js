(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_promociones_promociones_module_ts"], {
    /***/
    96983:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/promociones/promociones-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PromocionesPageRoutingModule": function PromocionesPageRoutingModule() {
          return (
            /* binding */
            _PromocionesPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _promociones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./promociones.page */
      17585);

      var routes = [{
        path: '',
        component: _promociones_page__WEBPACK_IMPORTED_MODULE_0__.PromocionesPage
      }];

      var _PromocionesPageRoutingModule = /*#__PURE__*/_createClass(function PromocionesPageRoutingModule() {
        _classCallCheck(this, PromocionesPageRoutingModule);
      });

      _PromocionesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PromocionesPageRoutingModule);
      /***/
    },

    /***/
    62788:
    /*!*********************************************************!*\
      !*** ./src/app/pages/promociones/promociones.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PromocionesPageModule": function PromocionesPageModule() {
          return (
            /* binding */
            _PromocionesPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _promociones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./promociones-routing.module */
      96983);
      /* harmony import */


      var _promociones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./promociones.page */
      17585);

      var _PromocionesPageModule = /*#__PURE__*/_createClass(function PromocionesPageModule() {
        _classCallCheck(this, PromocionesPageModule);
      });

      _PromocionesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _promociones_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromocionesPageRoutingModule],
        declarations: [_promociones_page__WEBPACK_IMPORTED_MODULE_1__.PromocionesPage]
      })], _PromocionesPageModule);
      /***/
    },

    /***/
    17585:
    /*!*******************************************************!*\
      !*** ./src/app/pages/promociones/promociones.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PromocionesPage": function PromocionesPage() {
          return (
            /* binding */
            _PromocionesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_promociones_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./promociones.page.html */
      73720);
      /* harmony import */


      var _promociones_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./promociones.page.scss */
      83927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _PromocionesPage = /*#__PURE__*/function () {
        function PromocionesPage(navCtrl, router) {
          _classCallCheck(this, PromocionesPage);

          this.navCtrl = navCtrl;
          this.router = router;
          console.log(this.router.getCurrentNavigation().extras.state);
        }

        _createClass(PromocionesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            console.log('ionViewDidLoad PromocionesPage');
          }
        }]);

        return PromocionesPage;
      }();

      _PromocionesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _PromocionesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-promociones',
        template: _raw_loader_promociones_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_promociones_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PromocionesPage);
      /***/
    },

    /***/
    83927:
    /*!*********************************************************!*\
      !*** ./src/app/pages/promociones/promociones.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tb2Npb25lcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    73720:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/promociones/promociones.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the PromocionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>promociones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_promociones_promociones_module_ts-es5.js.map