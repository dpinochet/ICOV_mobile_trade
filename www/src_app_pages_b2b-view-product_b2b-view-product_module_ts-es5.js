(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_b2b-view-product_b2b-view-product_module_ts"], {
    /***/
    93041:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/b2b-view-product/b2b-view-product-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "B2bViewProductPageRoutingModule": function B2bViewProductPageRoutingModule() {
          return (
            /* binding */
            _B2bViewProductPageRoutingModule
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


      var _b2b_view_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./b2b-view-product.page */
      75278);

      var routes = [{
        path: '',
        component: _b2b_view_product_page__WEBPACK_IMPORTED_MODULE_0__.B2bViewProductPage
      }];

      var _B2bViewProductPageRoutingModule = /*#__PURE__*/_createClass(function B2bViewProductPageRoutingModule() {
        _classCallCheck(this, B2bViewProductPageRoutingModule);
      });

      _B2bViewProductPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _B2bViewProductPageRoutingModule);
      /***/
    },

    /***/
    12930:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/b2b-view-product/b2b-view-product.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "B2bViewProductPageModule": function B2bViewProductPageModule() {
          return (
            /* binding */
            _B2bViewProductPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _b2b_view_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./b2b-view-product-routing.module */
      93041);
      /* harmony import */


      var _b2b_view_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./b2b-view-product.page */
      75278);
      /* harmony import */


      var ngx_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-accordion */
      28362);
      /* harmony import */


      var ngx_accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_2__);

      var _B2bViewProductPageModule = /*#__PURE__*/_createClass(function B2bViewProductPageModule() {
        _classCallCheck(this, B2bViewProductPageModule);
      });

      _B2bViewProductPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _b2b_view_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.B2bViewProductPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionModule],
        declarations: [_b2b_view_product_page__WEBPACK_IMPORTED_MODULE_1__.B2bViewProductPage]
      })], _B2bViewProductPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_b2b-view-product_b2b-view-product_module_ts-es5.js.map