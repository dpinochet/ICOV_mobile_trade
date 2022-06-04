(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_pop-over-menu-be2-be_pop-over-menu-be2-be_module_ts"], {
    /***/
    86654:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/pop-over-menu-be2-be/pop-over-menu-be2-be-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopOverMenuBe2BePageRoutingModule": function PopOverMenuBe2BePageRoutingModule() {
          return (
            /* binding */
            _PopOverMenuBe2BePageRoutingModule
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


      var _pop_over_menu_be2_be_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pop-over-menu-be2-be.page */
      44068);

      var routes = [{
        path: '',
        component: _pop_over_menu_be2_be_page__WEBPACK_IMPORTED_MODULE_0__.PopOverMenuBe2BePage
      }];

      var _PopOverMenuBe2BePageRoutingModule = /*#__PURE__*/_createClass(function PopOverMenuBe2BePageRoutingModule() {
        _classCallCheck(this, PopOverMenuBe2BePageRoutingModule);
      });

      _PopOverMenuBe2BePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PopOverMenuBe2BePageRoutingModule);
      /***/
    },

    /***/
    82301:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/pop-over-menu-be2-be/pop-over-menu-be2-be.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopOverMenuBe2BePageModule": function PopOverMenuBe2BePageModule() {
          return (
            /* binding */
            _PopOverMenuBe2BePageModule
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


      var _pop_over_menu_be2_be_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pop-over-menu-be2-be-routing.module */
      86654);
      /* harmony import */


      var _pop_over_menu_be2_be_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pop-over-menu-be2-be.page */
      44068);

      var _PopOverMenuBe2BePageModule = /*#__PURE__*/_createClass(function PopOverMenuBe2BePageModule() {
        _classCallCheck(this, PopOverMenuBe2BePageModule);
      });

      _PopOverMenuBe2BePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _pop_over_menu_be2_be_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopOverMenuBe2BePageRoutingModule],
        declarations: [_pop_over_menu_be2_be_page__WEBPACK_IMPORTED_MODULE_1__.PopOverMenuBe2BePage]
      })], _PopOverMenuBe2BePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pop-over-menu-be2-be_pop-over-menu-be2-be_module_ts-es5.js.map