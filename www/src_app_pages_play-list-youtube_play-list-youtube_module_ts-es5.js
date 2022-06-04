(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_play-list-youtube_play-list-youtube_module_ts"], {
    /***/
    83958:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/play-list-youtube/play-list-youtube-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlayListYoutubePageRoutingModule": function PlayListYoutubePageRoutingModule() {
          return (
            /* binding */
            _PlayListYoutubePageRoutingModule
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


      var _play_list_youtube_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./play-list-youtube.page */
      29302);

      var routes = [{
        path: '',
        component: _play_list_youtube_page__WEBPACK_IMPORTED_MODULE_0__.PlayListYoutubePage
      }];

      var _PlayListYoutubePageRoutingModule = /*#__PURE__*/_createClass(function PlayListYoutubePageRoutingModule() {
        _classCallCheck(this, PlayListYoutubePageRoutingModule);
      });

      _PlayListYoutubePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PlayListYoutubePageRoutingModule);
      /***/
    },

    /***/
    1632:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/play-list-youtube/play-list-youtube.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlayListYoutubePageModule": function PlayListYoutubePageModule() {
          return (
            /* binding */
            _PlayListYoutubePageModule
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


      var _play_list_youtube_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./play-list-youtube-routing.module */
      83958);
      /* harmony import */


      var _play_list_youtube_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./play-list-youtube.page */
      29302);

      var _PlayListYoutubePageModule = /*#__PURE__*/_createClass(function PlayListYoutubePageModule() {
        _classCallCheck(this, PlayListYoutubePageModule);
      });

      _PlayListYoutubePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _play_list_youtube_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlayListYoutubePageRoutingModule],
        declarations: [_play_list_youtube_page__WEBPACK_IMPORTED_MODULE_1__.PlayListYoutubePage]
      })], _PlayListYoutubePageModule);
      /***/
    },

    /***/
    29302:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/play-list-youtube/play-list-youtube.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlayListYoutubePage": function PlayListYoutubePage() {
          return (
            /* binding */
            _PlayListYoutubePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_play_list_youtube_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./play-list-youtube.page.html */
      60778);
      /* harmony import */


      var _play_list_youtube_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./play-list-youtube.page.scss */
      22879);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _PlayListYoutubePage = /*#__PURE__*/function () {
        function PlayListYoutubePage(navCtrl) {
          _classCallCheck(this, PlayListYoutubePage);

          this.navCtrl = navCtrl;
        }

        _createClass(PlayListYoutubePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            console.log('ionViewDidLoad PlayListYoutubePage');
          }
        }]);

        return PlayListYoutubePage;
      }();

      _PlayListYoutubePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
        }];
      };

      _PlayListYoutubePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-play-list-youtube',
        template: _raw_loader_play_list_youtube_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_play_list_youtube_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PlayListYoutubePage);
      /***/
    },

    /***/
    22879:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/play-list-youtube/play-list-youtube.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGF5LWxpc3QteW91dHViZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    60778:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/play-list-youtube/play-list-youtube.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the PlayListYoutubePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>playListYoutube</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_play-list-youtube_play-list-youtube_module_ts-es5.js.map