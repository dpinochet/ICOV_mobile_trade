(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_compose-tweet_compose-tweet_module_ts"], {
    /***/
    34177:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/compose-tweet/compose-tweet-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComposeTweetPageRoutingModule": function ComposeTweetPageRoutingModule() {
          return (
            /* binding */
            _ComposeTweetPageRoutingModule
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


      var _compose_tweet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./compose-tweet.page */
      95134);

      var routes = [{
        path: '',
        component: _compose_tweet_page__WEBPACK_IMPORTED_MODULE_0__.ComposeTweetPage
      }];

      var _ComposeTweetPageRoutingModule = /*#__PURE__*/_createClass(function ComposeTweetPageRoutingModule() {
        _classCallCheck(this, ComposeTweetPageRoutingModule);
      });

      _ComposeTweetPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ComposeTweetPageRoutingModule);
      /***/
    },

    /***/
    75550:
    /*!*************************************************************!*\
      !*** ./src/app/pages/compose-tweet/compose-tweet.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComposeTweetPageModule": function ComposeTweetPageModule() {
          return (
            /* binding */
            _ComposeTweetPageModule
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


      var _compose_tweet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./compose-tweet-routing.module */
      34177);
      /* harmony import */


      var _compose_tweet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./compose-tweet.page */
      95134);

      var _ComposeTweetPageModule = /*#__PURE__*/_createClass(function ComposeTweetPageModule() {
        _classCallCheck(this, ComposeTweetPageModule);
      });

      _ComposeTweetPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _compose_tweet_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComposeTweetPageRoutingModule],
        declarations: [_compose_tweet_page__WEBPACK_IMPORTED_MODULE_1__.ComposeTweetPage]
      })], _ComposeTweetPageModule);
      /***/
    },

    /***/
    95134:
    /*!***********************************************************!*\
      !*** ./src/app/pages/compose-tweet/compose-tweet.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComposeTweetPage": function ComposeTweetPage() {
          return (
            /* binding */
            _ComposeTweetPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_compose_tweet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./compose-tweet.page.html */
      28815);
      /* harmony import */


      var _compose_tweet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./compose-tweet.page.scss */
      66568);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/base64/ngx */
      31531);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/twitter-conection-service.service */
      54793); //import { TwitterConectionServiceProvider } from '../../providers/twitter-conection-service/twitter-conection-service';
      //import { Base64 } from '@ionic-native/base64';


      var _ComposeTweetPage = /*#__PURE__*/function () {
        function ComposeTweetPage(navCtrl, twitterProvider, loadingCtrl, toastCtrl, alertCtrl, camera, _base64, _domSanitizer) {
          _classCallCheck(this, ComposeTweetPage);

          this.navCtrl = navCtrl;
          this.twitterProvider = twitterProvider;
          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.alertCtrl = alertCtrl;
          this.camera = camera;
          this._base64 = _base64;
          this._domSanitizer = _domSanitizer;
          this.imagen = null;
          this.composeTweetFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            media: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null)
          });
        }

        _createClass(ComposeTweetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            console.log('ionViewDidLoad ComposeTweetPage');
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            this.loading = this.loadingCtrl.create({
              // content: 'Please wait...'
              message: 'Please wait...'
            });
            this.loading.present();
          }
        }, {
          key: "registrarImagen",
          value: function registrarImagen() {
            var _this = this;

            this.camera.getPicture({
              saveToPhotoAlbum: false,
              targetWidth: 800,
              targetHeight: 320,
              quality: 100,
              allowEdit: false,
              encodingType: this.camera.EncodingType.PNG,
              sourceType: this.camera.PictureSourceType.CAMERA,
              destinationType: this.camera.DestinationType.DATA_URL,
              correctOrientation: true
            }).then(function (imageData) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var img;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        img = imageData;
                        this.imagen = "data:image/jpg;base64," + imageData;
                        console.log('image.obtenida-no-sanitizada: ', img);
                        console.log('image.obtenida-sanitizada:', this._domSanitizer.bypassSecurityTrustUrl(img));
                        this.composeTweetFormGroup.controls.media.setValue(img); // this._base64.encodeFile(img).then((base64File: string) => {
                        //   this.composeTweetFormGroup.controls.media.setValue(base64File);
                        //   console.log('base64file: ',base64File);
                        // }, (err) => {
                        //   console.log(err);
                        // });
                        // this.composeTweetFormGroup.controls.media.setValue(img);

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          } // public postTweet() {
          //   this.showLoading();
          //   this.twitterProvider.postTweet(this.composeTweetFormGroup.value.text,this.composeTweetFormGroup.value.media).then(async(res:any) => {
          //     console.log('postTweet_chuerning: ',res.json());
          //     console.log('postTweet_muerning: ',res);
          //     let respuesta =res.json();
          //     let respuesta__ = JSON.parse(res._body);
          //     let media_id_parse = parseInt(respuesta__.media_id_string);
          //     console.log('media_id_parse: ',media_id_parse);
          //     console.log('postTwwet_respuesta__',respuesta__);
          //     this.twitterProvider.postUmagen(this.composeTweetFormGroup.value.text,respuesta__.media_id_string).then(async(restwo)=>{
          //       console.log('response_post_tweet1: ',res.json());
          //       console.log('response_post_tweet2: ',restwo);
          //       this.loading.dismiss();
          //       let toast = this.toastCtrl.create({
          //         message: 'Tweet posted!',
          //         duration: 3000
          //       });
          //       await toast.present();
          //       this.close();
          //     }, err => {
          //       this.showError(err);
          //     });
          //     })
          // }

        }, {
          key: "showError",
          value: function showError(text) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loading.dismiss();
                      _context2.next = 3;
                      return this.alertCtrl.create({
                        header: 'Error',
                        message: text,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "close",
          value: function close() {
            this.navCtrl.pop();
          }
        }]);

        return ComposeTweetPage;
      }();

      _ComposeTweetPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_4__.TwitterConectionServiceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__.Base64
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
        }];
      };

      _ComposeTweetPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-compose-tweet',
        template: _raw_loader_compose_tweet_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_compose_tweet_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ComposeTweetPage);
      /***/
    },

    /***/
    66568:
    /*!*************************************************************!*\
      !*** ./src/app/pages/compose-tweet/compose-tweet.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wb3NlLXR3ZWV0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    28815:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compose-tweet/compose-tweet.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the ComposeTweetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color='primary' no-border>\n\n  <ion-navbar color='primary'>\n    <ion-title>Registrar Tweet</ion-title>\n\n  </ion-navbar>\n  <!-- <button ion-button item-end outline (click)=\"postTweet()\">\n    Registrar\n  </button> -->\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <!-- <ion-item>\n          <ion-avatar item-left>\n            <img src=\"{{tweet.user.profile_image_url}}\">\n          </ion-avatar>\n          <h2>{{tweet.user.name}}</h2>\n          <p>{{dateForTweet(tweet.created_at)}}</p>\n        </ion-item> -->\n\n    <img src=\"{{imagen}}\" *ngIf=\"imagen!=null\">\n\n    <ion-card-content>\n      <form [formGroup]=\"composeTweetFormGroup\">\n        <ion-item>\n          <ion-label floating>Tweet</ion-label>\n          <ion-textarea formControlName=\"text\" type=\"text\"></ion-textarea>\n        </ion-item>\n\n        <!-- <ion-item>\n                  <ion-label floating>Imagen</ion-label>\n                  <ion-input type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label floating>Url</ion-label>\n                    <ion-input type=\"text\"></ion-input>\n                  </ion-item> -->\n        <!-- <p>{{tweet.text}}</p> -->\n      </form>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col col-9>\n        <button ion-button clear small (click)=\"postTweet()\">\n          <!-- <ion-icon name=\"open\"></ion-icon> -->\n          <div>Registrar Tweet</div>\n        </button>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear item-end icon-start (click)=\"registrarImagen()\">\n          <ion-icon name=\"camera\"></ion-icon>\n\n        </button>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_compose-tweet_compose-tweet_module_ts-es5.js.map