(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_reset-password_reset-password_module_ts"], {
    /***/
    60794:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/reset-password/reset-password-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordPageRoutingModule": function ResetPasswordPageRoutingModule() {
          return (
            /* binding */
            _ResetPasswordPageRoutingModule
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


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reset-password.page */
      6604);

      var routes = [{
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
      }];

      var _ResetPasswordPageRoutingModule = /*#__PURE__*/_createClass(function ResetPasswordPageRoutingModule() {
        _classCallCheck(this, ResetPasswordPageRoutingModule);
      });

      _ResetPasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ResetPasswordPageRoutingModule);
      /***/
    },

    /***/
    38573:
    /*!***************************************************************!*\
      !*** ./src/app/pages/reset-password/reset-password.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordPageModule": function ResetPasswordPageModule() {
          return (
            /* binding */
            _ResetPasswordPageModule
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


      var _hackages_ngxerrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @hackages/ngxerrors */
      54616);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reset-password-routing.module */
      60794);
      /* harmony import */


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset-password.page */
      6604);

      var _ResetPasswordPageModule = /*#__PURE__*/_createClass(function ResetPasswordPageModule() {
        _classCallCheck(this, ResetPasswordPageModule);
      });

      _ResetPasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _hackages_ngxerrors__WEBPACK_IMPORTED_MODULE_0__.NgxErrorsModule],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordPage]
      })], _ResetPasswordPageModule);
      /***/
    },

    /***/
    6604:
    /*!*************************************************************!*\
      !*** ./src/app/pages/reset-password/reset-password.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordPage": function ResetPasswordPage() {
          return (
            /* binding */
            _ResetPasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./reset-password.page.html */
      30986);
      /* harmony import */


      var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reset-password.page.scss */
      26812);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user-services.service */
      24107);

      var _ResetPasswordPage = /*#__PURE__*/function () {
        function ResetPasswordPage(navCtrl, userService, fb, toastCtrl, route) {
          _classCallCheck(this, ResetPasswordPage);

          this.navCtrl = navCtrl;
          this.userService = userService;
          this.toastCtrl = toastCtrl;
          this.route = route;
          this.user_token = 'null';
          this.user_uid = 'null';
          this.form_password = fb.group({
            // email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)])],
            confirmPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)])]
          }, {
            validator: this.checkIfMatchingPasswords('password', 'confirmPass')
          });
          this.form = fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email])]
          });
        }

        _createClass(ResetPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "checkIfMatchingPasswords",
          value: function checkIfMatchingPasswords(passwordKey, passwordConfirmationKey) {
            return function (group) {
              var passwordInput = group.controls[passwordKey],
                  passwordConfirmationInput = group.controls[passwordConfirmationKey];

              if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({
                  notEquivalent: true
                });
              } else {
                return passwordConfirmationInput.setErrors(null);
              }
            };
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            console.log('ionViewDidLoad ResetPasswordPage');
          }
        }, {
          key: "resetPassword",
          value: function resetPassword() {
            var _this = this;

            var form = this.form.value;
            var form_data = new FormData();
            form_data.append('email', form.email);
            this.userService.reset_password(form_data).subscribe(function (data) {
              /*let toast = this.toastCtrl.create({
                message: 'Tu email es válido, cambia tu contraseña',
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();*/
              _this.tostFound('Tu correo es válido, cambia tu contraseña');

              _this.user_token = data.token;
              _this.user_uid = data.uid;
            }, function (error) {
              /* let toast = this.toastCtrl.create({
                 message: 'Tu email es no se encuentra registrado',
                 showCloseButton: true,
                 closeButtonText: 'Ok'
               });
               toast.present();*/
              _this.tostFound('Tu correo es no se encuentra registrado');

              console.log(error);
            });
          }
        }, {
          key: "confirmPassword",
          value: function confirmPassword() {
            var _this2 = this;

            var uid = this.user_uid;
            var token = this.user_token;
            var form = this.form_password.value;
            var form_data = new FormData();
            form_data.append('new_password1', form.password);
            form_data.append('new_password2', form.confirmPass);
            form_data.append('token', token);
            form_data.append('uid', uid); // form_data.append('email', form.email);

            this.userService.confirm_password(form_data, uid, token).subscribe(function (data) {
              /*let toast = this.toastCtrl.create({
                message: 'Has cambiado correctamente tu contraseña!',
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();*/
              _this2.tostFound('¡Has cambiado correctamente tu contraseña!'); //this.navCtrl.push(LoginPage);


              _this2.route.navigateByUrl('login');
            }, function (error) {
              /*let toast = this.toastCtrl.create({
                message: error.new_password2,
                showCloseButton: true,
                closeButtonText: 'Ok'
              });
              toast.present();*/
              _this2.tostFound(error.new_password2);

              console.log(JSON.stringify(error));
            });
          }
        }, {
          key: "tostFound",
          value: function tostFound(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: msg,
                        buttons: [{
                          text: 'OK',
                          role: 'OK',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      toast = _context.sent;
                      _context.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ResetPasswordPage;
      }();

      _ResetPasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_2__.UserServicesService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _ResetPasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ResetPasswordPage);
      /***/
    },

    /***/
    26812:
    /*!***************************************************************!*\
      !*** ./src/app/pages/reset-password/reset-password.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-reset-password .reset_pass_img {\n  position: relative;\n  left: 29%;\n}\npage-reset-password img {\n  height: 170px;\n  width: 170px;\n}\npage-reset-password button {\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\npage-reset-password a {\n  margin: 8px;\n  text-decoration: none;\n}\npage-reset-password p {\n  color: #337ab7;\n  margin: 8px;\n}\npage-reset-password label {\n  display: block;\n}\npage-reset-password #hereSpan {\n  color: #FF6702;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUROO0FBS0k7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUhSO0FBS0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFVSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQVJSO0FBVUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQVJSO0FBV0k7RUFDSSxjQUFBO0FBVFI7QUFXSTtFQUNJLGNBQUE7QUFUUiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXJlc2V0LXBhc3N3b3JkIHtcblxuICAgIC5yZXNldF9wYXNzX2ltZ3tcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6MjklXG4gICAgfVxuICBcbiAgXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgLy8gZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICMzMzdhYjc7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICBcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgI2hlcmVTcGFuIHtcbiAgICAgICAgY29sb3I6ICNGRjY3MDI7XG4gICAgfVxuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    30986:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-password/reset-password.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the ResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Recuperar contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n\n  \n  <!-- <ion-content padding id=\"loginCont\"> -->\n  <!-- <img src=\"assets/imgs/RedReparto512.png\" alt=\"\" class=\"reset_pass_img\"> -->\n\n  <!-- <ion-card-header color=\"primary\">Trade App</ion-card-header/> -->\n  <!-- <p>TOKEN: {{user_token}}</p> -->\n  <div *ngIf=\"user_token == 'null'\">\n    <div style=\"text-align: center;\">\n        <img  src=\"../../../assets/imgs/trade.png\" alt=\"\" >\n        <br/><br/><br/><br/><br/>\n      <form (ngSubmit)=\"resetPassword()\" [formGroup]=\"form\">\n        <ion-list>\n          <ion-item>\n            <ion-label floating color=\"primary\">\n              <ion-icon color=\"violet\" name=\"mail\"></ion-icon> Correo\n            </ion-label>\n            <ion-input type=\"email\" name=\"email\" required maxlength=\"50\" formControlName=\"email\"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div style=\"text-align: center;\">\n          <ion-button color=\"violet\" full type=\"submit\" [disabled]=\"!form.valid\">Comprobar Correo</ion-button>\n        </div>\n      </form>\n      \n    </div>\n \n  </div>\n\n  <div *ngIf=\"user_token != 'null'\">\n    <div center>\n      <form (ngSubmit)=\"confirmPassword()\" [formGroup]=\"form_password\">\n        <ion-list>\n  \n          <!-- Pass input -->\n          <ion-item [ngClass]=\"{ invalid: passwordErrors.hasError('*', ['touched']) }\">\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n            <ion-label floating color=\"primary\" style=\"font-size: 14px;\">\n              <ion-icon color=\"violet\" name=\"finger-print\"></ion-icon> Contraseña\n            </ion-label>\n          </ion-item>\n          <div ngxErrors=\"password\" #passwordErrors=\"ngxErrors\">\n            <div [ngxError]=\"['minlength', 'required']\" [when]=\"['touched']\">Debe contener mínimo 6 carácteres</div>\n          </div>\n  \n          <!-- Pass confirm input -->\n          <ion-item [ngClass]=\"{ invalid: confirmPassErrors.hasError('*', ['touched']) }\">\n            <ion-input type=\"password\" formControlName=\"confirmPass\"></ion-input>\n            <ion-label floating color=\"primary\" style=\"font-size: 14px;\">\n              <ion-icon color=\"violet\" name=\"finger-print\"></ion-icon> Confirmación Contraseña\n            </ion-label>\n          </ion-item>\n          <div ngxErrors=\"confirmPass\" #confirmPassErrors=\"ngxErrors\">\n            <div [ngxError]=\"['notEquivalent']\" [when]=\"['touched']\">Las contraseñas deben coincidir</div>\n          </div>\n  \n        </ion-list>\n        <div style=\"text-align: center;\">\n          <ion-button color=\"violet\" full type=\"submit\" [disabled]=\"!form_password.valid\">Restablecer contraseña</ion-button>\n        </div>\n      </form>\n\n    </div>\n\n  </div>\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_reset-password_reset-password_module_ts-es5.js.map