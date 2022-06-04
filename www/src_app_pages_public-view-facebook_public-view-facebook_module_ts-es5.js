(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_public-view-facebook_public-view-facebook_module_ts"], {
    /***/
    45843:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/public-view-facebook/public-view-facebook-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PublicViewFacebookPageRoutingModule": function PublicViewFacebookPageRoutingModule() {
          return (
            /* binding */
            _PublicViewFacebookPageRoutingModule
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


      var _public_view_facebook_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public-view-facebook.page */
      25841);

      var routes = [{
        path: '',
        component: _public_view_facebook_page__WEBPACK_IMPORTED_MODULE_0__.PublicViewFacebookPage
      }];

      var _PublicViewFacebookPageRoutingModule = /*#__PURE__*/_createClass(function PublicViewFacebookPageRoutingModule() {
        _classCallCheck(this, PublicViewFacebookPageRoutingModule);
      });

      _PublicViewFacebookPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PublicViewFacebookPageRoutingModule);
      /***/
    },

    /***/
    43089:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/public-view-facebook/public-view-facebook.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PublicViewFacebookPageModule": function PublicViewFacebookPageModule() {
          return (
            /* binding */
            _PublicViewFacebookPageModule
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


      var _public_view_facebook_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./public-view-facebook-routing.module */
      45843);
      /* harmony import */


      var _public_view_facebook_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./public-view-facebook.page */
      25841);

      var _PublicViewFacebookPageModule = /*#__PURE__*/_createClass(function PublicViewFacebookPageModule() {
        _classCallCheck(this, PublicViewFacebookPageModule);
      });

      _PublicViewFacebookPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _public_view_facebook_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicViewFacebookPageRoutingModule],
        declarations: [_public_view_facebook_page__WEBPACK_IMPORTED_MODULE_1__.PublicViewFacebookPage]
      })], _PublicViewFacebookPageModule);
      /***/
    },

    /***/
    25841:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/public-view-facebook/public-view-facebook.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PublicViewFacebookPage": function PublicViewFacebookPage() {
          return (
            /* binding */
            _PublicViewFacebookPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_public_view_facebook_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./public-view-facebook.page.html */
      81022);
      /* harmony import */


      var _public_view_facebook_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./public-view-facebook.page.scss */
      68898);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _PublicViewFacebookPage = /*#__PURE__*/function () {
        function PublicViewFacebookPage(navCtrl) {
          _classCallCheck(this, PublicViewFacebookPage);

          this.navCtrl = navCtrl;
        }

        _createClass(PublicViewFacebookPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            console.log('ionViewDidLoad PublicViewFacebookPage');
          }
        }]);

        return PublicViewFacebookPage;
      }();

      _PublicViewFacebookPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
        }];
      };

      _PublicViewFacebookPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-public-view-facebook',
        template: _raw_loader_public_view_facebook_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_public_view_facebook_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PublicViewFacebookPage);
      /***/
    },

    /***/
    68898:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/public-view-facebook/public-view-facebook.page.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWMtdmlldy1mYWNlYm9vay5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    81022:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/public-view-facebook/public-view-facebook.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the PublicViewFacebookPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color='primary' no-border>\n\n  <ion-navbar color='primary'>\n    <ion-title>Publicar En Facebook</ion-title>\n\n  </ion-navbar>\n  <!-- <button ion-button item-end outline (click)=\"postTweet()\">\n    Registrar\n  </button> -->\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <img *ngIf=\"img!=null\" [src]=\"img\"/>\n        <ion-card-content>\n          <ion-card-title>\n            {{publicacionForm.value.caption}}\n            </ion-card-title>\n            <ion-list>\n\n                <!-- <img *ngIf=\"img!=null\" [src]=\"img\"> -->\n            \n                <form [formGroup]=\"publicacionForm\">\n                  <ion-item>\n                    <ion-label fixed>Titulo Imagen</ion-label>\n                    <ion-textarea formControlName=\"caption\"></ion-textarea>\n                  </ion-item>\n            \n                </form>\n              </ion-list>\n        </ion-card-content>\n        <ion-row>\n            <ion-col>\n                <button (click)=\"subirImagen()\" ion-button icon-start clear small>\n                    <ion-icon name=\"camera\"></ion-icon>\n                    <!-- <div>12 Likes</kdiv> -->\n                  </button>\n            </ion-col>\n            <ion-col>\n              <!-- <button ion-button icon-start clear small>\n                <ion-icon name=\"text\"></ion-icon>\n                <div>4 Comments</div>\n              </button> -->\n            </ion-col>\n            <ion-col align-self-center text-center>\n              <!-- <ion-note>\n                11h ago\n              </ion-note> -->\n              <button (click)=\"publicarInstagram()\" ion-button icon-start clear small>\n                  <!-- <ion-icon name=\"camera\"></ion-icon> -->\n                  <ion-icon name=\"done-all\"></ion-icon>\n                  <!-- <div>12 Likes</kdiv> -->\n                </button>\n            </ion-col>\n          </ion-row>\n      </ion-card>\n\n\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_public-view-facebook_public-view-facebook_module_ts-es5.js.map