(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_metas_metas_module_ts"], {
    /***/
    41801:
    /*!*****************************************************!*\
      !*** ./src/app/pages/metas/metas-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MetasPageRoutingModule": function MetasPageRoutingModule() {
          return (
            /* binding */
            _MetasPageRoutingModule
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


      var _metas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./metas.page */
      71102);

      var routes = [{
        path: '',
        component: _metas_page__WEBPACK_IMPORTED_MODULE_0__.MetasPage
      }];

      var _MetasPageRoutingModule = /*#__PURE__*/_createClass(function MetasPageRoutingModule() {
        _classCallCheck(this, MetasPageRoutingModule);
      });

      _MetasPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MetasPageRoutingModule);
      /***/
    },

    /***/
    14669:
    /*!*********************************************!*\
      !*** ./src/app/pages/metas/metas.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MetasPageModule": function MetasPageModule() {
          return (
            /* binding */
            _MetasPageModule
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


      var _metas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./metas-routing.module */
      41801);
      /* harmony import */


      var _metas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./metas.page */
      71102);

      var _MetasPageModule = /*#__PURE__*/_createClass(function MetasPageModule() {
        _classCallCheck(this, MetasPageModule);
      });

      _MetasPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _metas_routing_module__WEBPACK_IMPORTED_MODULE_0__.MetasPageRoutingModule],
        declarations: [_metas_page__WEBPACK_IMPORTED_MODULE_1__.MetasPage]
      })], _MetasPageModule);
      /***/
    },

    /***/
    71102:
    /*!*******************************************!*\
      !*** ./src/app/pages/metas/metas.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MetasPage": function MetasPage() {
          return (
            /* binding */
            _MetasPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_metas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./metas.page.html */
      25321);
      /* harmony import */


      var _metas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./metas.page.scss */
      35894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/comunicacion-component.service */
      8077);
      /* harmony import */


      var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/notificaciones.service */
      91319);
      /* harmony import */


      var src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/socket-service.service */
      20905);
      /* harmony import */


      var src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sqlite-service.service */
      61412);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

      var _MetasPage = /*#__PURE__*/function () {
        function MetasPage(navCtrl, _comunic, _sqlite, _notification, _socket) {
          _classCallCheck(this, MetasPage);

          this.navCtrl = navCtrl;
          this._comunic = _comunic;
          this._sqlite = _sqlite;
          this._notification = _notification;
          this._socket = _socket;
          this.listMetas = new Array();
          this.userData = null;

          try {
            var userDataJson = localStorage.getItem('userData');
            this.userData = JSON.parse(userDataJson);
            console.log('userDataMetas: ', this.userData);
          } catch (e) {}

          this.getMetas();
          this.updateArray();
        }

        _createClass(MetasPage, [{
          key: "changeDate",
          value: function changeDate(fecha) {
            return moment__WEBPACK_IMPORTED_MODULE_6__(fecha).format('YYYY-MM-DD HH:mm:ss');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            console.log('ionViewDidLoad MetasPage');
          }
        }, {
          key: "getMetas",
          value: function getMetas() {
            var _this = this;

            this._notification.getHistorialPromotion().then(function (metas) {
              console.log('capacitasion: ', metas);
              metas.forEach(function (element) {
                _this.listMetas.push(element);
              }); // this.evaluaYMarcaComoLeido(metas);

              console.log('getHistorialMessageMetas ', metas);
            }, function (err) {//historial desde sqlite
            });
          }
        }, {
          key: "updateArray",
          value: function updateArray() {
            var _this2 = this;

            this._comunic.itemComunicacion.subscribe(function (notificaciones) {
              if (notificaciones.name === 'new-notification') {
                if (notificaciones.item.event === 'promocion') {
                  _this2.marcarComoLeida(notificaciones.item);

                  _this2.listMetas.push(notificaciones.item);
                }
              }
            });
          }
        }, {
          key: "evaluaYMarcaComoLeido",
          value: function evaluaYMarcaComoLeido(metas) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this3 = this;

              var funciones, promociones, promociones_no_leidas, registra_promociones_no_leidas;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      funciones = {
                        obtenerPromocionesPorUsuario: function obtenerPromocionesPorUsuario() {
                          return new Promise(function (resolve, reject) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                              var promociones_user;
                              return _regeneratorRuntime().wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return this._notification.getPromotionRead(this.userData[0].email);

                                    case 2:
                                      promociones_user = _context.sent;
                                      resolve(promociones_user);

                                    case 4:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee, this);
                            }));
                          });
                        },
                        obtienePromocionesNoLeidas: function obtienePromocionesNoLeidas(promocionesUsuario, promociones) {
                          return new Promise(function (resolve, reject) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                              var promocionesNoLeidas, contador, _loop, i;

                              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      promocionesNoLeidas = new Array();
                                      contador = 0;

                                      _loop = function _loop(i) {
                                        var findPromocion = promocionesUsuario.findIndex(function (o) {
                                          return o.promotion_id == promociones[i].promotion_id;
                                        });

                                        if (findPromocion == -1) {
                                          promocionesNoLeidas.push(promociones[i]);
                                        }

                                        contador = contador + 1;

                                        if (contador == promociones.length) {
                                          resolve(promocionesNoLeidas);
                                        }
                                      };

                                      for (i = 0; i < promociones.length; i++) {
                                        _loop(i);
                                      }

                                    case 4:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee2);
                            }));
                          });
                        },
                        registraPromocionesNoLeidas: function registraPromocionesNoLeidas(promociones) {
                          return new Promise(function (resolve, reject) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                              var contador, i, modelMeta, promocion_registrada;
                              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      console.log('promociones-no-leidas: ', promociones);
                                      contador = 0;
                                      i = 0;

                                    case 3:
                                      if (!(i < promociones.length)) {
                                        _context3.next = 13;
                                        break;
                                      }

                                      modelMeta = {
                                        promotion_id: promociones[i].promotion_id,
                                        id_user: this.userData[0].id,
                                        photo: null,
                                        date_photo: null,
                                        seen: true,
                                        date_seen: null,
                                        created_at: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm')
                                      };
                                      _context3.next = 7;
                                      return this._notification.postMarcarComoLeidaMeta(modelMeta);

                                    case 7:
                                      promocion_registrada = _context3.sent;
                                      contador = contador + 1;

                                      if (contador == promociones.length) {
                                        resolve(true);
                                      }

                                    case 10:
                                      i++;
                                      _context3.next = 3;
                                      break;

                                    case 13:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, this);
                            }));
                          });
                        }
                      };
                      _context4.next = 3;
                      return funciones.obtenerPromocionesPorUsuario();

                    case 3:
                      promociones = _context4.sent;
                      _context4.next = 6;
                      return funciones.obtienePromocionesNoLeidas(promociones, metas);

                    case 6:
                      promociones_no_leidas = _context4.sent;
                      _context4.next = 9;
                      return funciones.registraPromocionesNoLeidas(promociones_no_leidas);

                    case 9:
                      registra_promociones_no_leidas = _context4.sent;

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "marcarComoLeida",
          value: function marcarComoLeida(meta) {
            console.log('meta_marca_como_leido: ', meta);
            var modelMeta = {
              promotion_id: meta.promotion_id,
              id_user: this.userData[0].id,
              photo: null,
              date_photo: null,
              seen: true,
              date_seen: null,
              created_at: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm')
            };

            this._notification.postMarcarComoLeidaMeta(modelMeta);
          }
        }]);

        return MetasPage;
      }();

      _MetasPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__.ComunicacionComponentService
        }, {
          type: src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_5__.SqliteServiceService
        }, {
          type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_3__.NotificacionesService
        }, {
          type: src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_4__.SocketServiceService
        }];
      };

      _MetasPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-metas',
        template: _raw_loader_metas_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_metas_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MetasPage);
      /***/
    },

    /***/
    35894:
    /*!*********************************************!*\
      !*** ./src/app/pages/metas/metas.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRhcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    25321:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/metas/metas.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the MetasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\" ></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Metas</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\n\n\n  <ion-list *ngFor=\"let promocion of listMetas\">\n\n      <ion-grid>\n          <ion-row>\n        \n            <ion-col col-12>\n  \n              <h4 style=\"color:#455A64\">\n                {{promocion?.title}}<br/>\n  \n              </h4>\n              <ion-note>\n                  {{changeDate(promocion?.created_at)}}<br/>\n                  {{promocion?.user_created}}\n                </ion-note>\n              <p>{{promocion?.message}}</p><br/>\n  \n            \n            </ion-col>\n    \n          </ion-row>\n        </ion-grid>\n\n\n\n  </ion-list>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_metas_metas_module_ts-es5.js.map