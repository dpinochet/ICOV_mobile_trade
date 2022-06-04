(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_stores_stores_module_ts"], {
    /***/
    99768:
    /*!*******************************************************!*\
      !*** ./src/app/pages/stores/stores-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StoresPageRoutingModule": function StoresPageRoutingModule() {
          return (
            /* binding */
            _StoresPageRoutingModule
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


      var _stores_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stores.page */
      89018);

      var routes = [{
        path: '',
        component: _stores_page__WEBPACK_IMPORTED_MODULE_0__.StoresPage
      }];

      var _StoresPageRoutingModule = /*#__PURE__*/_createClass(function StoresPageRoutingModule() {
        _classCallCheck(this, StoresPageRoutingModule);
      });

      _StoresPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StoresPageRoutingModule);
      /***/
    },

    /***/
    57957:
    /*!***********************************************!*\
      !*** ./src/app/pages/stores/stores.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StoresPageModule": function StoresPageModule() {
          return (
            /* binding */
            _StoresPageModule
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


      var _stores_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stores-routing.module */
      99768);
      /* harmony import */


      var _stores_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stores.page */
      89018);

      var _StoresPageModule = /*#__PURE__*/_createClass(function StoresPageModule() {
        _classCallCheck(this, StoresPageModule);
      });

      _StoresPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _stores_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoresPageRoutingModule],
        declarations: [_stores_page__WEBPACK_IMPORTED_MODULE_1__.StoresPage]
      })], _StoresPageModule);
      /***/
    },

    /***/
    89018:
    /*!*********************************************!*\
      !*** ./src/app/pages/stores/stores.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StoresPage": function StoresPage() {
          return (
            /* binding */
            _StoresPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_stores_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./stores.page.html */
      57903);
      /* harmony import */


      var _stores_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stores.page.scss */
      48992);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/base-services.service */
      94000);
      /* harmony import */


      var src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/pos-services.service */
      73052);
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @agm/core */
      15971);
      /* harmony import */


      var _delivery_chip_delivery_chip_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../delivery-chip/delivery-chip.page */
      26386);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);

      var _StoresPage = /*#__PURE__*/function () {
        function StoresPage(navCtrl, mapsAPILoader, ngZone, camera, loadcrtl, pos, base, modalCtrl) {
          _classCallCheck(this, StoresPage);

          this.navCtrl = navCtrl;
          this.mapsAPILoader = mapsAPILoader;
          this.ngZone = ngZone;
          this.camera = camera;
          this.loadcrtl = loadcrtl;
          this.pos = pos;
          this.base = base;
          this.modalCtrl = modalCtrl;
          this.categories = [];
          this.setCurrentPosition();
          this.modelPos = {};
          this.icon = {
            url: '../../../assets/imgs/store.png',
            scaledSize: {
              height: 80,
              width: 80
            }
          }; //Image Default

          this.base64Image = '../../../assets/imgs/course_no_image.png';
          this.modelPos.picture_business = this.base64Image;
          this.obtainsCategories();
        }

        _createClass(StoresPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setStorage",
          value: function setStorage(k, v) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
                        key: k,
                        value: v
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            var _this = this;

            // let dataUrl:string=
            // this.modelPos.picture_business = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==";
            this.mapsAPILoader.load().then(function () {
              var nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
              var autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
                types: ["address"]
              });
              autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                  //get the place result
                  var place = autocomplete.getPlace();

                  if (place.geometry === undefined || place.geometry === null) {
                    return;
                  }

                  _this.zoom = 18;
                  _this.modelPos.latitude = _this.latitude;
                  _this.modelPos.longitude = _this.longitude;
                });
              });
            });
          }
        }, {
          key: "openCamera",
          value: function openCamera() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var load;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadcrtl.create({
                        message: 'Validando Espere un Momento...'
                      });

                    case 2:
                      load = _context2.sent;
                      this.camera.getPicture({
                        saveToPhotoAlbum: false,
                        targetWidth: 300,
                        targetHeight: 300,
                        quality: 65,
                        allowEdit: true,
                        encodingType: this.camera.EncodingType.JPEG,
                        sourceType: this.camera.PictureSourceType.CAMERA,
                        destinationType: this.camera.DestinationType.DATA_URL
                      }).then(function (imageData) {
                        load.present();
                        _this2.base64Image = "data:image/jpg;base64," + imageData;
                        _this2.modelPos.picture_business = _this2.base64Image;
                        load.dismiss();
                      }, function (error) {
                        alert(error);
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "setCurrentPosition",
          value: function setCurrentPosition() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this3 = this;

              var load;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadcrtl.create({
                        message: 'Buscando GPS Espere un Momento...'
                      });

                    case 2:
                      load = _context3.sent;
                      load.present();

                      if ("geolocation" in navigator) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                          _this3.zoom = 18;
                          _this3.latitude = position.coords.latitude;
                          _this3.longitude = position.coords.longitude;
                          _this3.modelPos.latitude = _this3.latitude;
                          _this3.modelPos.longitude = _this3.longitude; // this.modelPos.longitude = -70.12879040000001;
                        });
                      }

                      load.dismiss();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "createPOS",
          value: function createPOS() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this4 = this;

              var load;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadcrtl.create({
                        message: 'Creando punto de venta'
                      });

                    case 2:
                      load = _context4.sent;
                      load.present();
                      this.modelPos.is_activate = true;
                      this.modelPos.user_created = this.base.getDataUser();
                      this.pos.postPos(this.modelPos).subscribe(function (rs) {
                        load.dismiss();
                        alert('Los datos fueron ingresados correctamente.');
                        var data = {
                          id: rs.id,
                          name: rs.name_business
                        }; // this.storage.set('subsidiary', rs.name_business);
                        //this.storage.set('idSubsidiary', rs.id);

                        _this4.setStorage('subsidiary', rs.name_business);

                        _this4.setStorage('idSubsidiary', rs.id); //let contactModal = this.modalCtrl.create(DeliveryChipPage, data);
                        //contactModal.present();


                        _this4.presentModal(data);
                      }, function (error) {
                        load.dismiss();
                        alert(error);
                      });

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentModal",
          value: function presentModal(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalCtrl.create({
                        component: _delivery_chip_delivery_chip_page__WEBPACK_IMPORTED_MODULE_5__.DeliveryChipPage,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          'data': data
                        }
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present();

                    case 5:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "obtainsCategories",
          value: function obtainsCategories() {
            var _this5 = this;

            console.log('obtener categorias');
            this.pos.get_categories().subscribe(function (rs) {
              _this5.subsidiary_categories = rs;
              console.log(rs);
            }, function (error) {
              alert(error);
            });
          }
        }, {
          key: "selectCategory",
          value: function selectCategory(e, item) {
            console.log(e);
            this.modelPos.idCategory = item.id;
          }
        }]);

        return StoresPage;
      }();

      _StoresPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: _agm_core__WEBPACK_IMPORTED_MODULE_9__.MapsAPILoader
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }, {
          type: src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_4__.PosServicesService
        }, {
          type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__.BaseServicesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }];
      };

      _StoresPage.propDecorators = {
        searchElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: ["search"]
        }]
      };
      _StoresPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-stores',
        template: _raw_loader_stores_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stores_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StoresPage);
      /***/
    },

    /***/
    48992:
    /*!***********************************************!*\
      !*** ./src/app/pages/stores/stores.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-stores agm-map {\n  height: 230px;\n  position: relative;\n  top: 5px;\n  left: 5px;\n}\npage-stores .subsidiaryToolbar {\n  color: #32db64;\n  text-align: center;\n  font-size: 4.5em;\n}\npage-stores #subsidiaryToolbarIcon {\n  font-size: 0.5em;\n}\npage-stores .round {\n  border-radius: 50%;\n  width: 60% !important;\n}\npage-stores .photoImgCont {\n  margin: 0 0 0 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBQVI7QUFFSTtFQUVBLGlCQUFBO0FBREoiLCJmaWxlIjoic3RvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2Utc3RvcmVzIHtcbiAgICBhZ20tbWFwIHtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgIH1cbiAgICAuc3Vic2lkaWFyeVRvb2xiYXIge1xuICAgICAgICBjb2xvcjogIzMyZGI2NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIH1cbiAgICAjc3Vic2lkaWFyeVRvb2xiYXJJY29ue1xuICAgICAgICBmb250LXNpemU6IDAuNWVtOyAgIFxuICAgIH1cbiAgICAucm91bmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6NjAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAucGhvdG9JbWdDb250e1xuICAgIFxuICAgIG1hcmdpbjogMCAwIDAgMjUlIDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    57903:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stores/stores.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the StoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Puntos de Venta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-card>\n          <ion-row no-padding>\n            <ion-col text-center>\n              <div class=\"photoImgCont\">\n                <img src=\"{{ base64Image }}\" class=\"round\" width=\"50px\"/>\n              </div>\n              <button ion-button color=\"secondary\" icon-left (click)=\"openCamera()\">\n                <ion-icon name=\"camera\"></ion-icon> Punto de Venta\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-item>\n  <form>\n    <ion-item>\n\n      <ion-label floating color=\"primary\"><ion-icon name=\"card\"></ion-icon> Rut</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"modelPos.identification_business\" name=\"identification_business\" #identification_business=\"ngModel\" [maxlength]=\"9\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color=\"primary\"><ion-icon name=\"home\"></ion-icon> Razón Social - (Nombre)</ion-label>\n      <ion-input type=\"text\" maxLength=\"70\" [(ngModel)]=\"modelPos.name_business\" name=\"name_business\" #name_business=\"ngModel\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color=\"primary\"><ion-icon name=\"cog\"></ion-icon> Giro</ion-label>\n      <ion-input type=\"text\" maxLength=\"100\" [(ngModel)]=\"modelPos.commercial_business\" name=\"commercial_business\" #commercial_business=\"ngModel\"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating color=\"primary\" > <ion-icon name=\"cog\"></ion-icon> Categoría</ion-label>\n      <!-- <ion-select  [(ngModel)]=\"category_select\" multiple=\"false\" okText=\"Seleccionar\" cancelText=\"Cancelar\"> -->\n      <ion-select  multiple=\"false\" okText=\"Seleccionar\" cancelText=\"Cancelar\">\n        <div *ngFor=\"let item of subsidiary_categories\">\n          <ion-option  *ngIf=\"item.id != 1\" value=\"{{item.id}}\" (ionSelect)=\"selectCategory($event, item)\">{{item.description}}</ion-option>\n          <!-- <ion-option  value=\"{{item.id}}\">{{item.description}}</ion-option> -->\n        </div>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating color=\"primary\"><ion-icon name=\"pin\"></ion-icon> Dirección</ion-label>\n      <ion-input id=\"txtHome\" type=\"text\" required [(ngModel)]=\"modelPos.address\" name=\"address\" #address=\"ngModel\"></ion-input>\n    </ion-item>\n\n    <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [mapDraggable]=\"false\"   [scrollwheel]=\"false\" [zoom]=\"zoom\">\n      <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"icon\"></agm-marker>\n    </agm-map>\n\n    <p ion-text color=\"danger\" *ngIf=\"modelPos.errors\">ERRORES: {{ campo.errors | json}}</p>\n  </form>\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar class=\"subsidiaryToolbar\">\n      <ion-icon name=\"checkmark-circle\" (click)=\"createPOS()\"></ion-icon>\n      <!-- <ion-icon name=\"checkmark-circle\" (click)=\"test()\">test</ion-icon> -->\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stores_stores_module_ts-es5.js.map