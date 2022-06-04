(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_img-modal_img-modal_module_ts"], {
    /***/
    60020:
    /*!*************************************************************!*\
      !*** ./src/app/pages/img-modal/img-modal-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImgModalPageRoutingModule": function ImgModalPageRoutingModule() {
          return (
            /* binding */
            _ImgModalPageRoutingModule
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


      var _img_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./img-modal.page */
      2650);

      var routes = [{
        path: '',
        component: _img_modal_page__WEBPACK_IMPORTED_MODULE_0__.ImgModalPage
      }];

      var _ImgModalPageRoutingModule = /*#__PURE__*/_createClass(function ImgModalPageRoutingModule() {
        _classCallCheck(this, ImgModalPageRoutingModule);
      });

      _ImgModalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ImgModalPageRoutingModule);
      /***/
    },

    /***/
    93322:
    /*!*****************************************************!*\
      !*** ./src/app/pages/img-modal/img-modal.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImgModalPageModule": function ImgModalPageModule() {
          return (
            /* binding */
            _ImgModalPageModule
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


      var _img_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./img-modal-routing.module */
      60020);
      /* harmony import */


      var _img_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./img-modal.page */
      2650);

      var _ImgModalPageModule = /*#__PURE__*/_createClass(function ImgModalPageModule() {
        _classCallCheck(this, ImgModalPageModule);
      });

      _ImgModalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _img_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImgModalPageRoutingModule],
        declarations: [_img_modal_page__WEBPACK_IMPORTED_MODULE_1__.ImgModalPage]
      })], _ImgModalPageModule);
      /***/
    },

    /***/
    2650:
    /*!***************************************************!*\
      !*** ./src/app/pages/img-modal/img-modal.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImgModalPage": function ImgModalPage() {
          return (
            /* binding */
            _ImgModalPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_img_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./img-modal.page.html */
      68730);
      /* harmony import */


      var _img_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./img-modal.page.scss */
      29272);
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

      var _ImgModalPage = /*#__PURE__*/function () {
        function ImgModalPage(navCtrl, router) {
          _classCallCheck(this, ImgModalPage);

          this.navCtrl = navCtrl;
          this.router = router;
        }

        _createClass(ImgModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            //this.img1 = this.navParams.data.img;
            this.img = this.router.getCurrentNavigation().extras.state;
            console.log('ionViewDidLoad ImgModalPage');
          }
        }]);

        return ImgModalPage;
      }();

      _ImgModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _ImgModalPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-img-modal',
        template: _raw_loader_img_modal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_img_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ImgModalPage);
      /***/
    },

    /***/
    29272:
    /*!*****************************************************!*\
      !*** ./src/app/pages/img-modal/img-modal.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWctbW9kYWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    68730:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/img-modal/img-modal.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-navbar color='primary'>\n    <ion-title>Reposición</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n  <img src=\"{{img}}\" alt=\"\">\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_img-modal_img-modal_module_ts-es5.js.map