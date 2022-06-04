(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_report_report_module_ts"], {
    /***/
    70248:
    /*!*******************************************************!*\
      !*** ./src/app/pages/report/report-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportPageRoutingModule": function ReportPageRoutingModule() {
          return (
            /* binding */
            _ReportPageRoutingModule
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


      var _report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./report.page */
      29213);

      var routes = [{
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_0__.ReportPage
      }];

      var _ReportPageRoutingModule = /*#__PURE__*/_createClass(function ReportPageRoutingModule() {
        _classCallCheck(this, ReportPageRoutingModule);
      });

      _ReportPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ReportPageRoutingModule);
      /***/
    },

    /***/
    81725:
    /*!***********************************************!*\
      !*** ./src/app/pages/report/report.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportPageModule": function ReportPageModule() {
          return (
            /* binding */
            _ReportPageModule
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


      var _report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./report-routing.module */
      70248);
      /* harmony import */


      var _report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./report.page */
      29213);

      var _ReportPageModule = /*#__PURE__*/_createClass(function ReportPageModule() {
        _classCallCheck(this, ReportPageModule);
      });

      _ReportPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportPageRoutingModule],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_1__.ReportPage]
      })], _ReportPageModule);
      /***/
    },

    /***/
    29213:
    /*!*********************************************!*\
      !*** ./src/app/pages/report/report.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportPage": function ReportPage() {
          return (
            /* binding */
            _ReportPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./report.page.html */
      4479);
      /* harmony import */


      var _report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./report.page.scss */
      24345);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/base-services.service */
      94000);
      /* harmony import */


      var src_app_services_report_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/report-services.service */
      1893);

      var _ReportPage = /*#__PURE__*/function () {
        function ReportPage(navCtrl, report, base) {
          _classCallCheck(this, ReportPage);

          this.navCtrl = navCtrl;
          this.report = report;
          this.base = base;
          this.allChipToday = 0;
          this.allPOSCreatedToday = 0;
          this.allChipMonth = 0;
          this.allPOSCreatedMonth = 0;
          this.allSalesDay356 = 0;
          this.allSalesDay374 = 0;
          this.posMonth = 0;
          this.posDay = 0;
          this.publishDay = 0;
          this.publishMonth = 0;
        }

        _createClass(ReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            // this.getPosDay();
            // this.getPosMonth();
            // this.getAllSalesMonth374();
            // this.getAllSalesMonth356();
            // this.getAllSalesDay356();
            // this.getAllSalesDay374();
            this.getPublishMonth();
            this.getPublishDay(); // this.getVisits();
          } //
          // getCreatedSubsidiary(){
          //   this.report.getAllChipDeliveryByUser(this.base.getDataUser()).subscribe(
          //     data=>{
          //       console.log('All chip delivery ' + data);
          //       let countDay = 0;
          //       let countMonth = 0;
          //       const today = new Date();
          //       let dd = today.getDate();
          //       let mm = today.getMonth() + 1; //January is 0!
          //       let yyyy = today.getFullYear();
          //       //delivery Today
          //       data.forEach(element => {
          //         let dateSale = new Date(element.created_at);
          //         let ddSale = dateSale.getDate();
          //         let mmSale = dateSale.getMonth() + 1;
          //         let yyyySale = dateSale.getFullYear();
          //         if (mm == mmSale && yyyy == yyyySale && dd == ddSale) {
          //             countDay++;
          //         }
          //         if(mm == mmSale && yyyy == yyyySale){
          //           countMonth++;
          //         }
          //       })
          //       this.allChipToday = countDay;
          //       this.allChipMonth = countMonth;
          //     },
          //     error=>{alert(error)},
          //     ()=>{});
          //     this.getAllSalesMonth356();
          // }
          // getPOSCreated() {
          //   this.report.getAllPOSCreatedByUser(this.base.getDataUser()).subscribe(
          //     data => {
          //       let countDayPOS = 0;
          //       let countMonthPOS = 0;
          //       const today = new Date();
          //       let dd = today.getDate();
          //       let mm = today.getMonth() + 1; //January is 0!
          //       let yyyy = today.getFullYear();
          //       //delivery Today
          //       data.forEach(element => {
          //         let dateSale = new Date(element.created_at);
          //         let ddSale = dateSale.getDate();
          //         let mmSale = dateSale.getMonth() + 1;
          //         let yyyySale = dateSale.getFullYear();
          //         if (mm == mmSale && yyyy == yyyySale && dd == ddSale) {
          //           countDayPOS++;
          //         }
          //         if (mm == mmSale && yyyy == yyyySale) {
          //           countMonthPOS++;
          //         }
          //       });
          //       this.allPOSCreatedToday = countDayPOS;
          //       this.allPOSCreatedMonth = countMonthPOS;
          //     },
          //     error => { alert(error) },
          //     () => { });
          // }

        }, {
          key: "getPublishDay",
          value: function getPublishDay() {
            var _this = this;

            this.report.getPublishDayReport(this.base.getDataUser()).subscribe(function (data) {
              if (JSON.stringify(data).includes('{}')) {
                _this.publishDay = 0;
              } else {
                _this.publishDay = parseInt(JSON.stringify(data));
              }
            }, function (error) {
              alert(error);
            }, function () {});
          }
        }, {
          key: "getPublishMonth",
          value: function getPublishMonth() {
            var _this2 = this;

            this.report.getPublishMonthReport(this.base.getDataUser()).subscribe(function (data) {
              if (JSON.stringify(data).includes('{}')) {
                _this2.publishMonth = 0;
              } else {
                _this2.publishMonth = parseInt(JSON.stringify(data));
              }
            }, function (error) {
              alert(error);
            }, function () {});
          }
        }, {
          key: "getAllSalesMonth374",
          value: function getAllSalesMonth374() {
            var _this3 = this;

            this.report.getAllSalesMonth374ByUser(this.base.getDataUser()).subscribe(function (data) {
              _this3.allSalesMonth374 = Object.keys(data).length;
            }, function (error) {
              alert(error);
            }, function () {});
          }
        }, {
          key: "getPosDay",
          value: function getPosDay() {
            var _this4 = this;

            this.report.getAllPOSDay(this.base.getDataUser()).subscribe(function (data) {
              // this.posDay = Object.keys(data).length
              // this.posDay = data
              if (JSON.stringify(data).includes('{}')) {
                _this4.posDay = 0;
              } else {
                _this4.posDay = parseInt(JSON.stringify(data));
              }
            }, function (error) {
              alert(error);
            }, function () {});
          }
        }, {
          key: "getPosMonth",
          value: function getPosMonth() {
            var _this5 = this;

            this.report.getAllPOSMonth(this.base.getDataUser()).subscribe(function (data) {
              if (JSON.stringify(data).includes('{}')) {
                _this5.posMonth = 0;
              } else {
                _this5.posMonth = parseInt(JSON.stringify(data));
              } // this.posMonth = Object.keys(data).length

            }, function (error) {
              alert(error);
            }, function () {});
          }
        }, {
          key: "getAllSalesMonth356",
          value: function getAllSalesMonth356() {
            var _this6 = this;

            this.report.getAllSalesMonth356ByUser(this.base.getDataUser()).subscribe(function (data) {
              _this6.allSalesMonth356 = Object.keys(data).length;
            }, function (error) {
              alert(error);
            }, function () {});
          }
        }, {
          key: "getAllSalesDay374",
          value: function getAllSalesDay374() {
            var _this7 = this;

            this.report.getAllSalesDay374ByUser(this.base.getDataUser()).subscribe(function (data) {
              _this7.allSalesDay374 = Object.keys(data).length;
            }, function (error) {
              alert(error);
            }, function () {});
          }
        }, {
          key: "getAllSalesDay356",
          value: function getAllSalesDay356() {
            var _this8 = this;

            this.report.getAllSalesDay356ByUser(this.base.getDataUser()).subscribe(function (data) {
              _this8.allSalesDay356 = Object.keys(data).length;
            }, function (error) {
              alert(error);
            }, function () {});
          }
        }, {
          key: "getVisits",
          value: function getVisits() {
            var _this9 = this;

            this.report.getAllVisits(this.base.getDataUser()).subscribe(function (data) {
              // this.allSalesDay356 = Object.keys(data).length
              _this9.visitDay = data[0].visitas_diarias;
              _this9.visitMonth = data[0].visitas_mensuales;
            }, function (error) {
              alert(error);
            }, function () {});
          }
        }]);

        return ReportPage;
      }();

      _ReportPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
        }, {
          type: src_app_services_report_services_service__WEBPACK_IMPORTED_MODULE_3__.ReportServicesService
        }, {
          type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService
        }];
      };

      _ReportPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ReportPage);
      /***/
    },

    /***/
    1893:
    /*!*****************************************************!*\
      !*** ./src/app/services/report-services.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportServicesService": function ReportServicesService() {
          return (
            /* binding */
            _ReportServicesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-services.service */
      94000);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      5304); //import { Storage } from '@ionic/storage';


      var _ReportServicesService = /*#__PURE__*/function () {
        // public url: string = 'http://192.168.100.9:8001/api/v1/';
        // public url: string = 'http://192.168.100.13:8000/api/v1/';
        // public url: string = 'https://redamigos.herokuapp.com/api/v1/';
        function ReportServicesService(http, base, storage) {
          _classCallCheck(this, ReportServicesService);

          this.http = http;
          this.base = base;
          this.storage = storage;
          this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
          /*this.storage.get('base_url').then((val) => {
            this.url = val + "api/v1/";
          });*/

          this.geturl();
        }

        _createClass(ReportServicesService, [{
          key: "geturl",
          value: function geturl() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _yield$_capacitor_sto, value;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({
                        key: 'base_url'
                      });

                    case 2:
                      _yield$_capacitor_sto = _context.sent;
                      value = _yield$_capacitor_sto.value;
                      this.url = value + 'api/v1/';

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getAllPOSMonth",
          value: function getAllPOSMonth(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'reports/subsidiaryMonthByUser/?user=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "getAllPOSDay",
          value: function getAllPOSDay(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'reports/subsidiaryDayByUser/?user=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "getAllChipDeliveryByUser",
          value: function getAllChipDeliveryByUser(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'chipDelivery/?user=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          } // Ventas Diarias por usuario

        }, {
          key: "getAllSalesDay356ByUser",
          value: function getAllSalesDay356ByUser(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'salesDay356/?user=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "getAllSalesDay374ByUser",
          value: function getAllSalesDay374ByUser(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'salesDay374/?user=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          } // Ventas Mensuales por usuario

        }, {
          key: "getAllSalesMonth356ByUser",
          value: function getAllSalesMonth356ByUser(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'salesMonth356/?user=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "getAllSalesMonth374ByUser",
          value: function getAllSalesMonth374ByUser(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'salesMonth374/?user=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "getPublishDayReport",
          value: function getPublishDayReport(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'reports/publishDayByUser/?user=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "getPublishMonthReport",
          value: function getPublishMonthReport(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'reports/publishMonthByUser/?user=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "getAllVisits",
          value: function getAllVisits(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'reports/totalColaboradoresVisitas/?user_email=' + user, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }]);

        return ReportServicesService;
      }();

      _ReportServicesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService
        }, {
          type: _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage
        }];
      };

      _ReportServicesService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _ReportServicesService);
      /***/
    },

    /***/
    24345:
    /*!***********************************************!*\
      !*** ./src/app/pages/report/report.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-report .card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  margin-bottom: 3px;\n}\npage-report .card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\npage-report .card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n  margin-bottom: 3px;\n}\npage-report #homeContent {\n  text-align: center;\n}\npage-report #homeContent h1 {\n  font-size: 1.5em;\n  color: #337ab7;\n}\npage-report #homeContent p {\n  color: #FF6702;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGVjtBQUtRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFIVjtBQU1RO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKVjtBQVNNO0VBQ0Usa0JBQUE7QUFQUjtBQVFRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBTlo7QUFRUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQU5aIiwiZmlsZSI6InJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXJlcG9ydCB7XG4gICAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcblxuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMzYlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MiU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgICNob21lQ29udGVudCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzM3YWI3O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICNGRjY3MDI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    4479:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report/report.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons ion-button menuToggle>\n          <button ion-button left menuToggle=\"menu\">\n            <ion-icon name=\"menu\"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Reportes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"homeContent\">\n  <ion-card>\n      <ion-item>\n          <h1>Trade Diario</h1>\n          <p>{{ publishDay }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Trade Mensual</h1>\n          <p>{{ publishMonth }}</p>\n      </ion-item>\n  </ion-card>\n  <!-- <ion-card>\n      <ion-item>\n          <h1>356 Diario</h1>\n          <p>{{ allSalesDay356 }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Autoplan Diario</h1>\n          <p>{{ allSalesDay374 }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>356 Mensual</h1>\n          <p>{{ allSalesMonth356 }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Autoplan Mensual</h1>\n          <p>{{ allSalesMonth374 }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Puntos de Venta Hoy</h1>\n          <p>{{ posDay }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Puntos de Venta Mes</h1>\n          <p>{{ posMonth }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Visitas Hoy</h1>\n          <p>{{ visitDay }}</p>\n      </ion-item>\n  </ion-card>\n  <ion-card>\n      <ion-item>\n          <h1>Visitas Mensual</h1>\n          <p>{{ visitMonth }}</p>\n      </ion-item>\n  </ion-card> -->\n\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_report_report_module_ts-es5.js.map