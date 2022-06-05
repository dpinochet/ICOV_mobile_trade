(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_connect-socket_connect-socket_module_ts"], {
    /***/
    889:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/connect-socket/connect-socket-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConnectSocketPageRoutingModule": function ConnectSocketPageRoutingModule() {
          return (
            /* binding */
            _ConnectSocketPageRoutingModule
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


      var _connect_socket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./connect-socket.page */
      79760);

      var routes = [{
        path: '',
        component: _connect_socket_page__WEBPACK_IMPORTED_MODULE_0__.ConnectSocketPage
      }];

      var _ConnectSocketPageRoutingModule = /*#__PURE__*/_createClass(function ConnectSocketPageRoutingModule() {
        _classCallCheck(this, ConnectSocketPageRoutingModule);
      });

      _ConnectSocketPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ConnectSocketPageRoutingModule);
      /***/
    },

    /***/
    16282:
    /*!***************************************************************!*\
      !*** ./src/app/pages/connect-socket/connect-socket.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConnectSocketPageModule": function ConnectSocketPageModule() {
          return (
            /* binding */
            _ConnectSocketPageModule
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


      var _connect_socket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./connect-socket-routing.module */
      889);
      /* harmony import */


      var _connect_socket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./connect-socket.page */
      79760);

      var _ConnectSocketPageModule = /*#__PURE__*/_createClass(function ConnectSocketPageModule() {
        _classCallCheck(this, ConnectSocketPageModule);
      });

      _ConnectSocketPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _connect_socket_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectSocketPageRoutingModule],
        declarations: [_connect_socket_page__WEBPACK_IMPORTED_MODULE_1__.ConnectSocketPage]
      })], _ConnectSocketPageModule);
      /***/
    },

    /***/
    79760:
    /*!*************************************************************!*\
      !*** ./src/app/pages/connect-socket/connect-socket.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConnectSocketPage": function ConnectSocketPage() {
          return (
            /* binding */
            _ConnectSocketPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_connect_socket_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./connect-socket.page.html */
      24063);
      /* harmony import */


      var _connect_socket_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./connect-socket.page.scss */
      80933);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ConnectSocketPage = /*#__PURE__*/function () {
        function ConnectSocketPage(navCtrl) {
          _classCallCheck(this, ConnectSocketPage);

          this.navCtrl = navCtrl;
          this.send_messages = [];
          this.received_messages = [];
          this.message = '';
          this.user = 'contacto2@icov.cl';
          this.receiver = new WebSocket('ws://' + '192.168.100.9:8001' + '/notifications/');
          this.sender = new WebSocket('ws://' + '192.168.100.9:8001' + '/ws/chat/incidencias_trade/');
        } // End Constructor


        _createClass(ConnectSocketPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            this.setSock();
          }
        }, {
          key: "setSock",
          value: function setSock() {
            var _this = this;

            // Create connections with websockets
            this.receiver.onopen = function () {
              console.info('websocket receiver open');
            };

            this.sender.onopen = function () {
              console.info('websocket sender open');
            }; // Push messages on respective's arrays


            this.receiver.onmessage = function (event) {
              _this.received_messages.push(event.data);
            };

            this.sender.onmessage = function (event) {
              _this.send_messages.push(JSON.parse(event.data));
            };

            if (this.receiver.readyState == WebSocket.OPEN) {
              this.receiver.onopen(null);
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            this.sendMessage();
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            if (this.message != '') {
              this.sender.send(JSON.stringify({
                type: "user.announcement",
                message: this.message,
                sender: this.user,
                channel: 1,
                category_sender: 'mobile',
                created_at: this.getCurrentDate()
              }));
              this.message = '';
            }
          }
        }, {
          key: "getCurrentDate",
          value: function getCurrentDate() {
            var today = new Date(),
                dd = today.getDate(),
                mm = today.getMonth() + 1;

            if (dd < 10) {
              dd = '0' + dd;
            }

            if (mm < 10) {
              mm = '0' + mm;
            }

            return dd + '/' + mm + '/' + today.getFullYear() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          }
        }]);

        return ConnectSocketPage;
      }();

      _ConnectSocketPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController
        }];
      };

      _ConnectSocketPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-connect-socket',
        template: _raw_loader_connect_socket_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_connect_socket_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ConnectSocketPage);
      /***/
    },

    /***/
    80933:
    /*!***************************************************************!*\
      !*** ./src/app/pages/connect-socket/connect-socket.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-connect-socket ion-content .scroll-content {\n  background-color: #f5f5f5;\n}\npage-connect-socket ion-footer {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.11);\n  background-color: #fff;\n  height: 255px;\n}\npage-connect-socket .line-breaker {\n  white-space: pre-line;\n}\npage-connect-socket .input-wrap {\n  padding: 5px;\n  display: flex;\n}\npage-connect-socket .input-wrap textarea {\n  flex: 1;\n  border: 0;\n  border-bottom: 1px #387ef5;\n  border-style: solid;\n}\npage-connect-socket .message-wrap {\n  padding: 0 10px;\n}\npage-connect-socket .message-wrap .message {\n  position: relative;\n  padding: 7px 0;\n}\npage-connect-socket .message-wrap .message .user-img {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\npage-connect-socket .message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block;\n}\npage-connect-socket .message-wrap .message .msg-detail p {\n  margin: 0;\n}\npage-connect-socket .message-wrap .message .msg-detail .msg-info p {\n  font-size: 0.8em;\n  color: #888;\n}\npage-connect-socket .message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  color: #fff;\n  width: auto;\n  max-width: 80%;\n}\npage-connect-socket .message-wrap .message .msg-detail .msg-content span.triangle {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  transform: rotate(45deg);\n  position: absolute;\n}\npage-connect-socket .message-wrap .message.left .msg-content {\n  background-color: #fff;\n  float: left;\n}\npage-connect-socket .message-wrap .message.left .msg-detail {\n  padding-left: 60px;\n}\npage-connect-socket .message-wrap .message.left .user-img {\n  left: 0;\n  bottom: 5px;\n}\npage-connect-socket .message-wrap .message.left .msg-detail .msg-content {\n  color: #343434;\n}\npage-connect-socket .message-wrap .message.left .msg-detail .msg-content span.triangle {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px;\n}\npage-connect-socket .message-wrap .message.right .msg-detail {\n  padding-right: 60px;\n}\npage-connect-socket .message-wrap .message.right .msg-detail .msg-info {\n  text-align: right;\n}\npage-connect-socket .message-wrap .message.right .user-img {\n  right: 0;\n  bottom: 5px;\n}\npage-connect-socket .message-wrap .message.right ion-spinner {\n  position: absolute;\n  right: 10px;\n  top: 50px;\n}\npage-connect-socket .message-wrap .message.right .msg-detail .msg-content {\n  background-color: #387ef5;\n  float: right;\n}\npage-connect-socket .message-wrap .message.right .msg-detail .msg-content span.triangle {\n  background-color: #387ef5;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px;\n}\npage-connect-socket .message {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Qtc29ja2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHlCQUFBO0FBRE47QUFHSTtFQUNFLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBRE47QUFHSTtFQUNFLHFCQUFBO0FBRE47QUFHSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRE47QUFFTTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRUk7RUFDRSxlQUFBO0FBQU47QUFDTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQVE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQUVWO0FBRFE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFHVjtBQUZVO0VBQ0UsU0FBQTtBQUlaO0FBSFU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFLWjtBQUpVO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFNWjtBQUxZO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSx3QkFBQTtFQUNBLGtCQUFBO0FBT2Q7QUFOTTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQVFSO0FBUE07RUFDRSxrQkFBQTtBQVNSO0FBUk07RUFDRSxPQUFBO0VBQVMsV0FBQTtBQVdqQjtBQVZNO0VBQ0UsY0FBQTtBQVlSO0FBWFE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQWFWO0FBWk07RUFDRSxtQkFBQTtBQWNSO0FBYlE7RUFDRSxpQkFBQTtBQWVWO0FBZE07RUFDRSxRQUFBO0VBQVUsV0FBQTtBQWlCbEI7QUFoQk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBa0JSO0FBakJNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBbUJSO0FBbEJNO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQW9CUjtBQWxCUTtFQUNFLFVBQUE7QUFvQlYiLCJmaWxlIjoiY29ubmVjdC1zb2NrZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1jb25uZWN0LXNvY2tldCB7XG5cbiAgICBpb24tY29udGVudCAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsgfVxuICBcbiAgICBpb24tZm9vdGVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBoZWlnaHQ6IDI1NXB4OyB9XG4gIFxuICAgIC5saW5lLWJyZWFrZXIge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lIH1cbiAgXG4gICAgLmlucHV0LXdyYXAge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZGlzcGxheTogZmxleDsgfVxuICAgICAgLmlucHV0LXdyYXAgdGV4dGFyZWEge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCAjMzg3ZWY1O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XG4gIFxuICAgIC5tZXNzYWdlLXdyYXAge1xuICAgICAgcGFkZGluZzogMCAxMHB4OyB9XG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA3cHggMDsgfVxuICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC51c2VyLWltZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjM2KTsgfVxuICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwOyB9XG4gICAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWluZm8gcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgICAgICBjb2xvcjogIzg4ODsgfVxuICAgICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7IH1cbiAgICAgICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHNwYW4udHJpYW5nbGUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNkZGQ7XG4gICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWNvbnRlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBmbG9hdDogbGVmdDsgfVxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4OyB9XG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLnVzZXItaW1nIHtcbiAgICAgICAgbGVmdDogMDsgYm90dG9tOiA1cHh9XG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAgICAgY29sb3I6ICMzNDM0MzQ7IH1cbiAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICAgICAgICBsZWZ0OiAtNXB4OyB9XG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNjBweDsgfVxuICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctaW5mbyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLnVzZXItaW1nIHtcbiAgICAgICAgcmlnaHQ6IDA7IGJvdHRvbTogNXB4IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgaW9uLXNwaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB0b3A6IDUwcHg7IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgfVxuICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICBcbiAgfVxuICAiXX0= */";
      /***/
    },

    /***/
    24063:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/connect-socket/connect-socket.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons ion-button menuToggle>\n          <button ion-button left menuToggle=\"menu\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title> Incidencias </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"content content-md\">\n<div class=\"fixed-content\" style=\"margin-top: 56px; margin-bottom: 55px;\"></div>\n  <div class=\"scroll-content\" >\n    <div _ngcontent-c0=\"\" class=\"message-wrap\">\n\n      <div *ngFor=\"let message of send_messages \">\n\n        <div *ngIf=\"message.channel == 1\" >\n\n          <div class=\"\" *ngIf=\"this.user != message.sender\">\n\n            <div class=\"message left\">\n              <img alt=\"\" class=\"user-img\" src=\"../../../assets/imgs/icov.png\">\n              <div class=\"msg-detail\">\n                  <div class=\"msg-info\">\n                      <p> {{ message.created_at }} </p>\n                  </div>\n                  <div class=\"msg-content\">\n                      <span  class=\"triangle\"></span>\n                      <p class=\"line-breaker \">{{message.message}}</p>\n                  </div>\n              </div>\n            </div>\n\n          </div>\n\n          <div *ngIf=\"this.user == message.sender\">\n              <div class=\"message right\">\n\n                  <img alt=\"\" class=\"user-img\" src=\"../../../assets/imgs/icov.png\">\n                  <div class=\"msg-detail\">\n                      <div class=\"msg-info\">\n                          <p > {{ message.created_at }} </p>\n                      </div>\n                      <div class=\"msg-content\">\n                          <span class=\"triangle\"></span>\n                          <p class=\"line-breaker \">{{message.message}}</p>\n                      </div>\n                  </div>\n              </div>\n\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer  style=\"height: 55px;\">\n\n  <form  (ngSubmit)='submit()'>\n      <div _ngcontent-c0=\"\" class=\"input-wrap\">\n\n          <button class=\"button button-md button-clear button-clear-md\">\n            <span class=\"button-inner\"> <ion-icon name=\"happy\"></ion-icon> </span>\n          </button>\n\n          <ion-input placeholder=\"Escriba su mensaje\" name=\"message\"\n           [(ngModel)]='message' value=\"{{message}}\">\n         </ion-input>\n\n          <button class=\"button button-md button-clear button-clear-md\">\n            <span class=\"button-inner\"> <ion-icon name=\"send\"></ion-icon> </span>\n          <div class=\"button-effect\" ></div></button>\n\n      </div>\n  </form>\n\n</ion-footer>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_connect-socket_connect-socket_module_ts-es5.js.map