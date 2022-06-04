(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_timeline_timeline_module_ts"], {
    /***/
    37684:
    /*!***********************************************************!*\
      !*** ./src/app/pages/timeline/timeline-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimelinePageRoutingModule": function TimelinePageRoutingModule() {
          return (
            /* binding */
            _TimelinePageRoutingModule
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


      var _timeline_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./timeline.page */
      23240);

      var routes = [{
        path: '',
        component: _timeline_page__WEBPACK_IMPORTED_MODULE_0__.TimelinePage
      }];

      var _TimelinePageRoutingModule = /*#__PURE__*/_createClass(function TimelinePageRoutingModule() {
        _classCallCheck(this, TimelinePageRoutingModule);
      });

      _TimelinePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TimelinePageRoutingModule);
      /***/
    },

    /***/
    74447:
    /*!***************************************************!*\
      !*** ./src/app/pages/timeline/timeline.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimelinePageModule": function TimelinePageModule() {
          return (
            /* binding */
            _TimelinePageModule
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


      var _timeline_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./timeline-routing.module */
      37684);
      /* harmony import */


      var _timeline_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timeline.page */
      23240);

      var _TimelinePageModule = /*#__PURE__*/_createClass(function TimelinePageModule() {
        _classCallCheck(this, TimelinePageModule);
      });

      _TimelinePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _timeline_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimelinePageRoutingModule],
        declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_1__.TimelinePage]
      })], _TimelinePageModule);
      /***/
    },

    /***/
    23240:
    /*!*************************************************!*\
      !*** ./src/app/pages/timeline/timeline.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimelinePage": function TimelinePage() {
          return (
            /* binding */
            _TimelinePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_timeline_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./timeline.page.html */
      56115);
      /* harmony import */


      var _timeline_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timeline.page.scss */
      69245);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TimelinePage = /*#__PURE__*/function () {
        function TimelinePage() {
          _classCallCheck(this, TimelinePage);
        }

        _createClass(TimelinePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.loadTimeline();
          }
        }]);

        return TimelinePage;
      }();

      _TimelinePage.ctorParameters = function () {
        return [];
      };

      _TimelinePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timeline',
        template: _raw_loader_timeline_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_timeline_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TimelinePage);
      /***/
    },

    /***/
    69245:
    /*!***************************************************!*\
      !*** ./src/app/pages/timeline/timeline.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lbGluZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    56115:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timeline/timeline.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-navbar color=\"primary\">\n    <!-- <ion-buttons start>\n      <button ion-button icon-only (click)=\"goBack()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </button>\n    </ion-buttons>\n     -->\n    <ion-title>\n      My Feed\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)=\"composeTweet()\">\n        <ion-icon name=\"create\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadTimeline($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor=\"let tweet of tweets | async\">\n\n    <ion-item>\n      <ion-avatar item-left>\n        <img src=\"{{tweet.user.profile_image_url}}\">\n      </ion-avatar>\n      <h2>{{tweet.user.name}}</h2>\n      <p>{{dateForTweet(tweet.created_at)}}</p>\n    </ion-item>\n\n    <img src=\"{{tweet.extended_entities.media[0].media_url}}\" *ngIf=\"tweet.extended_entities\">\n\n    <ion-card-content>\n      <p>{{tweet.text}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col *ngIf=\"tweet.entities.urls.length > 0\">\n        <button ion-button clear small (click)=\"openLinkUrl(tweet.entities.urls[0].url)\">\n          <ion-icon name=\"open\"></ion-icon>\n          <div>Open Link</div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_timeline_timeline_module_ts-es5.js.map