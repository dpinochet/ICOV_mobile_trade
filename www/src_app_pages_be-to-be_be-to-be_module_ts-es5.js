(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_be-to-be_be-to-be_module_ts"], {
    /***/
    86908:
    /*!***********************************************************!*\
      !*** ./src/app/pages/be-to-be/be-to-be-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BeToBePageRoutingModule": function BeToBePageRoutingModule() {
          return (
            /* binding */
            _BeToBePageRoutingModule
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


      var _be_to_be_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./be-to-be.page */
      96516);

      var routes = [{
        path: '',
        component: _be_to_be_page__WEBPACK_IMPORTED_MODULE_0__.BeToBePage
      }];

      var _BeToBePageRoutingModule = /*#__PURE__*/_createClass(function BeToBePageRoutingModule() {
        _classCallCheck(this, BeToBePageRoutingModule);
      });

      _BeToBePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BeToBePageRoutingModule);
      /***/
    },

    /***/
    93575:
    /*!***************************************************!*\
      !*** ./src/app/pages/be-to-be/be-to-be.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BeToBePageModule": function BeToBePageModule() {
          return (
            /* binding */
            _BeToBePageModule
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


      var _be_to_be_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./be-to-be-routing.module */
      86908);
      /* harmony import */


      var _be_to_be_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./be-to-be.page */
      96516);

      var _BeToBePageModule = /*#__PURE__*/_createClass(function BeToBePageModule() {
        _classCallCheck(this, BeToBePageModule);
      });

      _BeToBePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _be_to_be_routing_module__WEBPACK_IMPORTED_MODULE_0__.BeToBePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_be_to_be_page__WEBPACK_IMPORTED_MODULE_1__.BeToBePage]
      })], _BeToBePageModule);
      /***/
    },

    /***/
    96516:
    /*!*************************************************!*\
      !*** ./src/app/pages/be-to-be/be-to-be.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BeToBePage": function BeToBePage() {
          return (
            /* binding */
            _BeToBePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_be_to_be_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./be-to-be.page.html */
      49121);
      /* harmony import */


      var _be_to_be_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./be-to-be.page.scss */
      72325);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      92760);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_b2b_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/b2b.service */
      36167);
      /* harmony import */


      var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/comunicacion-component.service */
      8077);
      /* harmony import */


      var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/delivery-services.service */
      68407);
      /* harmony import */


      var src_app_services_facebook_conection_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/facebook-conection-service.service */
      16834);
      /* harmony import */


      var src_app_services_social_sharing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/social-sharing.service */
      37393);
      /* harmony import */


      var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/user-services.service */
      24107);
      /* harmony import */


      var src_app_services_youtube_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/youtube-service.service */
      25943);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _b2b_view_product_b2b_view_product_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../b2b-view-product/b2b-view-product.page */
      75278);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _modal_img_preview_modal_img_preview_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../modal-img-preview/modal-img-preview.page */
      72475);
      /* harmony import */


      var _pop_over_menu_be2_be_pop_over_menu_be2_be_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../pop-over-menu-be2-be/pop-over-menu-be2-be.page */
      44068);
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @capacitor/camera */
      37673); //import { Camera } from '@ionic-native/camera/ngx';


      var _BeToBePage = /*#__PURE__*/function () {
        function BeToBePage(navCtrl, modalCtrl, deliveryPublish, _auth, actionSheetCtrl, toastCtrl, b2b, barcodeScanner, popoverCtrl, _comunc, loadingCtrl, alertCtrl, _facebookIntegracion, _socialSharing, _youtubeService, iab) {
          var _this = this;

          _classCallCheck(this, BeToBePage);

          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.deliveryPublish = deliveryPublish;
          this._auth = _auth;
          this.actionSheetCtrl = actionSheetCtrl;
          this.toastCtrl = toastCtrl;
          this.b2b = b2b;
          this.barcodeScanner = barcodeScanner;
          this.popoverCtrl = popoverCtrl;
          this._comunc = _comunc;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this._facebookIntegracion = _facebookIntegracion;
          this._socialSharing = _socialSharing;
          this._youtubeService = _youtubeService;
          this.iab = iab;
          this.formLeyend = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
            leyend: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])
          });
          this.formGroupSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null)
          });
          this.subsidiary = null;
          this.subsidiary_last_b2b = null;
          this.loading = true;
          this.imagenes = new Array();
          this.end_check_out = 0;
          this.subsidiary_b2_mobile_data_product_list = new Array();
          this.direccion_subsidiary_arr = new Array();
          this.card_select_b2b_array = new Array();
          this.card_select_b2b_array_reverse = new Array();
          this.baja_stock_info_count = 0;
          this.auth_youtbe_token_code = null;
          this.marcas_agencias = new Array();

          var user_data = this._auth.getUser();

          this.user = user_data[0];

          this._comunc.itemComunicacion.subscribe(function (item) {
            if (item.name === 'b2b-finish') {
              console.log('item-subsidiary-reciber: ', item);
              _this.user = item.itemAdd.user;
              _this.subsidiary = item.itemAdd.subsidiary;
              _this.imagenes = item.itemAdd.imagenes;

              _this.formLeyend.controls.leyend.setValue(item.itemAdd.leyend);

              if (item.itemAdd.b2bfinish) {
                _this.card_select_b2b_array_reverse[item.itemAdd.idx_card].active = false; // this.idx_card=item.itemAdd.idx_card;
              }
            } else if (item.name === 'low-stock-count') {
              _this.baja_stock_info_count = item.itemAdd.count;
            }
          });

          console.log("holaa"); // this.instagramLoad();
        }

        _createClass(BeToBePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('ionViewDidLoad BeToBePage');
            this.loading = true;
            /*this.storage.get('subsidiary').then(async (subsidiary: any) => {
              this.subsidiary = subsidiary;
                   await this.getListProductSubsidiaryB2BMobile();
              console.log('getSubsidiary: ', subsidiary);
              await this.getLastB2bSubsiduary(subsidiary.id);
              this.cortar_string(subsidiary.all.address);
              this.loading = false;
            })*/

            this.getsub();
          } // instagramLoad(){
          //   var feed = new Instafeed({
          //     get: 'user',
          //     userId: 'c9b2eab155f74c498e713ac033c2f929',
          //     filter: function(image) {
          //         return image.tags.indexOf('TAG_NAME') >= 0;
          //     }
          // });
          // feed.run();
          // }

          /**
           * twitter integración
           */

        }, {
          key: "youtubeLogin",
          value: function youtubeLogin() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._youtubeService.auth();

                    case 2:
                      this.auth_youtbe_token_code = _context.sent;
                      _context.next = 5;
                      return this.alertCtrl.create({
                        header: 'Codigo Verificación',
                        message: 'Anota este codigo en un papel  ' + this.auth_youtbe_token_code.user_code + ' y luego registralo en la plataforma de google y proporciona los permisos necesarios, una vez realices esta acción cierra la ventana en la X',
                        buttons: ['OK']
                      });

                    case 5:
                      alert = _context.sent;
                      _context.next = 8;
                      return alert.present();

                    case 8:
                      _context.next = 10;
                      return alert.onDidDismiss().then(function (e) {
                        var browser = _this2.iab.create(_this2.auth_youtbe_token_code.verification_url);

                        browser.show();
                        browser.on('exit').subscribe(function (close_browser) {
                          console.log('el browser se ha cerrado');

                          _this2.youtubeToken();
                        });
                      });

                    case 10:
                      console.log('auth_youtube_token_code: ', this.auth_youtbe_token_code);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "youtubeToken",
          value: function youtubeToken() {
            this._youtubeService.token(this.auth_youtbe_token_code);
          }
        }, {
          key: "instagramLogin",
          value: function instagramLogin() {
            var options = {
              location: 'yes',
              hidden: 'no',
              clearcache: 'yes',
              clearsessioncache: 'yes',
              zoom: 'yes',
              hardwareback: 'yes',
              mediaPlaybackRequiresUserAction: 'no',
              shouldPauseOnSuspend: 'no',
              closebuttoncaption: 'Close',
              disallowoverscroll: 'no',
              toolbar: 'yes',
              enableViewportScale: 'no',
              allowInlineMediaPlayback: 'no',
              presentationstyle: 'pagesheet',
              fullscreen: 'yes' //Windows only    

            };
            var browser = this.iab.create('https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&platform_app_id=&next=/oauth/authorize/%3Fclient_id%3Dc9b2eab155f74c498e713ac033c2f929%26redirect_uri%3Dhttps%3A//www.icov.cl/%26response_type%3Dtoken', "_self", options);
            browser.show();
            browser.on("loadstop").subscribe(function (value) {
              console.log('close_value_instagram: ', value);
            }); // this.navCtrl.push(PublicViewInstagramPage);
            // this.camera.getPicture({
            //   saveToPhotoAlbum: false,
            //   targetWidth: 300,
            //   targetHeight: 300,
            //   quality: 100,
            //   allowEdit: false,
            //   encodingType: this.camera.EncodingType.PNG,
            //   sourceType: this.camera.PictureSourceType.CAMERA,
            //   destinationType: this.camera.DestinationType.DATA_URL,
            // }).then(async (imageData) => {
            //   this.instagram.share('data:image/png;base64,' + imageData, 'Caption')
            //     .then(() => console.log('Shared Instagram!'))
            //     .catch((error: any) => console.error('instagram error', error));
            // })
          } // async instagramLoginWindowsOpen(){
          //   // const popup = window.open('https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&platform_app_id=&next=/oauth/authorize/%3Fclient_id%3Dc9b2eab155f74c498e713ac033c2f929%26redirect_uri%3Dhttps%3A//www.icov.cl/%26response_type%3Dcode','_self');
          //   // console.log('instagram_hash_data: ',popup.location.hash); 
          //   const cliente = new instagram_api('rpemcampos@gmail.com','konfortowego1');
          //   cliente .login()
          //   .then(() => {
          //     cliente
          //       .getProfile()
          //       .then(console.log)
          //   })
          // }
          //timeline twitter
          // public async loadTimeline(refresher?) {
          //   // await this.showLoading();
          //   this.tweets = this.twitterProvider.getHomeTimeline();
          //   this.tweets.subscribe(async(data) => {
          //    await this.loadinginger.dismiss();
          //    try{
          //      refresher.complete();
          //    }catch(e){}
          //   }, err => {
          //     try{
          //       refresher.complete();
          //       this.showError(err);
          //     }catch(e){}
          //   });
          //   refresher.complete();
          // }
          // public composeTweet() {
          //   // let prompt = this.alertCtrl.create({
          //   //   title: 'New Tweet',
          //   //   message: "Write your Tweet message below",
          //   //   inputs: [
          //   //     {
          //   //       name: 'text'
          //   //     },
          //   //   ],
          //   //   buttons: [
          //   //     {
          //   //       text: 'Cancel'
          //   //     },
          //   //     {
          //   //       text: 'Tweet',
          //   //       handler: data => {
          //   //         this.postTweet(data.text);
          //   //       }
          //   //     }
          //   //   ]
          //   // });
          //   // prompt.present();
          //   this.navCtrl.push(ComposeTweetPage);
          // }

        }, {
          key: "dateForTweet",
          value: function dateForTweet(dateString) {
            var d = new Date(Date.parse(dateString)); // http://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date

            var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
            return datestring;
          }
        }, {
          key: "openLinkUrl",
          value: function openLinkUrl(url) {
            var browser = this.iab.create(url, 'blank'); // this.browserTab.isAvailable()
            // .then(isAvailable => {
            //   if (isAvailable) {
            //     this.browserTab.openUrl(url);
            //   } else {
            //     // open URL with InAppBrowser instead or SafariViewController
            //   }
            // });
          } // public postTweet(text) {
          //   this.showLoading();
          //   this.twitterProvider.postTweet(text).subscribe(res => {
          //     this.loading.dismiss();
          //     let toast = this.toastCtrl.create({
          //       message: 'Tweet posted!',
          //       duration: 3000
          //     });
          //     toast.present();
          //   }, err => {
          //     this.showError(err);
          //   });
          // }
          // private showLoading() {
          //   this.loadinginger = this.loadingCtrl.create({
          //     content: 'Please wait...'
          //   });
          //   return this.loadinginger.present();
          // }
          // private showError(text) {
          //   this.loading.dismiss();
          //   let alert = this.alertCtrl.create({
          //     title: 'Error',
          //     message: text,
          //     buttons: ['OK']
          //   });
          //   alert.present();
          // }
          //end timeline twitter

        }, {
          key: "loginFacebook",
          value: function loginFacebook() {
            /* this._facebookIntegracion.facebookLogin().then((dialogResponse) => {
                     console.log('dialog_response:', dialogResponse);
                     this._facebookIntegracion.facebookSharing();
                   });*/
          }
        }, {
          key: "facebookShare",
          value: function facebookShare() {
            // this._facebookIntegracion.share('https://www.google.cl');
            this._socialSharing.facebookSharing('la chapema de la emma', 'learning', 'chuerning');
          } // public loginWithTwitter() {
          //   this.showLoading();
          //   this.twitter.login().then((data: TwitterConnectResponse) => {
          //     console.log('twitterLoginData: ', data);
          //     this._twtitterConectionService.setTokens(data.token, data.secret);
          //     this.loadinger.dismiss().then(() => {
          //       this.navCtrl.push(ComposeTweetPage);
          //     });
          //   }, error => {
          //     console.log('twitter-error: ', error);
          //     this.loadinger.dismiss();
          //     this.showAlert('Error inicio de sesión','No pudimos iniciar sesión con twitter, intenta despues',['OK']);
          //     // this.showError(error);
          //   });
          // }

        }, {
          key: "showLoading",
          value: function showLoading() {
            this.loadinger = this.loadingCtrl.create({
              message: 'Please wait...'
            });
            this.loadinger.present();
          }
        }, {
          key: "showError",
          value: function showError(text) {
            var _this3 = this;

            this.loadinger.dismiss().then(function () {
              /* let alert = this.alertCtrl.create({
                 header: 'Fail',
                 message: text + '\nMake sure to setup Twitter account on your device.',
                 buttons: ['OK']
               });
               alert.present();*/
              _this3.presentAlertMultipleButtons(text);
            });
          }
        }, {
          key: "presentAlertMultipleButtons",
          value: function presentAlertMultipleButtons(text) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: 'Fail',
                        message: text + '\nMake sure to setup Twitter account on your device.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           *
           * card dinamic init
           */

        }, {
          key: "addCardDinamic",
          value: function addCardDinamic(model_card) {
            this.card_select_b2b_array.push(model_card); //this.card_select_b2b_array_reverse = _.reverse(this.card_select_b2b_array);

            this.card_select_b2b_array_reverse = this.card_select_b2b_array.reverse();
            console.log('array', this.card_select_b2b_array);
          }
          /**
           *
           * end card dinamic
           */

        }, {
          key: "presetenModal",
          value: function presetenModal(title, card_item) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('modal_data_send:', {
                        title: title,
                        card_item: card_item
                      });

                      if (!('b2v-view-product' === title)) {
                        _context3.next = 8;
                        break;
                      }

                      _context3.next = 4;
                      return this.modalCtrl.create({
                        component: _b2b_view_product_b2b_view_product_page__WEBPACK_IMPORTED_MODULE_11__.B2bViewProductPage,
                        cssClass: 'my-custom-class',
                        componentProps: {
                          card_item: card_item
                        }
                      });

                    case 4:
                      modal = _context3.sent;
                      _context3.next = 7;
                      return modal.present();

                    case 7:
                      return _context3.abrupt("return", _context3.sent);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showAlert",
          value: function showAlert(title, subtitle, buttons) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'my-custom-class',
                        header: title,
                        message: subtitle,
                        buttons: buttons
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Cargando...'
                      });

                    case 2:
                      this.loading1 = _context5.sent;
                      _context5.next = 5;
                      return this.loading1.present();

                    case 5:
                      //const { role, data } = await loading.onDidDismiss();
                      console.log('Loading dismissed!');

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "selectMarcaEmpresaAlert",
          value: function selectMarcaEmpresaAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this4 = this;

              var alert, marcas_agencias, input;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.presentLoading();
                      /**
                       *  ::::::::: FALTA OBTENER  this.b2b.getMarcaAndAgency()
                       */

                      _context6.next = 3;
                      return this.alertCtrl.create();

                    case 3:
                      alert = _context6.sent;
                      //alert.setTitle('Agencias y marcas');
                      alert.header = 'Agencias y marcas'; //let marcas_agencias: any = await this.b2b.getMarcaAndAgency();

                      marcas_agencias = [];
                      _context6.next = 8;
                      return this.b2b.getMarcaAndAgency().then(function (response) {
                        console.log('Agencias: ', response);
                        marcas_agencias = response;
                      }, function (error) {
                        setTimeout(function () {
                          this.loading1.dismiss();
                          this.presentAlertError();
                          console.log(error);
                        }.bind(_this4), 4000);
                      });

                    case 8:
                      // let opciones_en_duro = [
                      //   {
                      //     nombre: "tecnoimport",
                      //     id: 1
                      //   },
                      //   {
                      //     nombre: "entel",
                      //     id: 2
                      //   },
                      //   {
                      //     nombre: "el grillo",
                      //     id: 3
                      //   },
                      //   {
                      //     nombre: "don guso",
                      //     id: 4
                      //   }
                      // ]
                      input = {
                        data: []
                      };
                      marcas_agencias.forEach(function (key, idx) {
                        input.data.push({
                          type: 'radio',
                          label: key.name,
                          value: key,
                          checked: false
                        });
                        /* alert.addInput({
                           type: 'radio',
                           label: key.name,
                           value: key,
                           checked: false
                         });*/

                        console.log("carga", marcas_agencias[0].name);
                        /* alert.inputs=[{
                           type: 'radio',
                           label: key.name,
                           value: key,
                           checked: false
                         }]*/
                      });
                      alert.inputs = input.data; // alert.addButton('Cancel');

                      alert.buttons = [{
                        text: 'Cancelar'
                      }]; // alert.addButton({

                      alert.buttons = [{
                        text: 'Aceptar',
                        handler: function handler(data) {
                          // this.testRadioOpen = false;
                          // this.testRadioResult = data;
                          console.log('data-input-select: ', data);
                          /**
                           * setea en model_card los datos de la marca o la agencia
                           */

                          try {
                            var model_card = {
                              photoCard: data.photo,
                              titleCard: data.name,
                              subTitleCard: data.created_at,
                              comentarioGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
                                comentario: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required])
                              }),
                              imagenes: new Array(),
                              id: data.id,
                              active: true
                            };
                            /**
                             * busca si esta la marca o la agencia registrada en card_select_b2b_array_reverse
                             */

                            _this4.validaMarca(data.id, _this4.subsidiary.all.id_multistore).then(function (valida_marca) {
                              console.log('valida_marca: ', valida_marca);

                              if (valida_marca == true) {
                                /*let find = _.findIndex(this.card_select_b2b_array_reverse, (o) => {
                                  return o.id == data.id;
                                })*/
                                var find = _this4.card_select_b2b_array_reverse.findIndex(function (o) {
                                  return o.id == data.id;
                                });
                                /**
                                 * aña model_card si no está añadido en  card_select_b2b_array_reverse
                                 */


                                console.log('find_card_select_index: ', find);

                                if (find == -1) {
                                  console.log('model_card: ', model_card);

                                  _this4.addCardDinamic(model_card);
                                }
                              } else {
                                _this4.showAlert('', 'Esta marca no esta presente en este punto de venta', ['OK']);
                              }
                            });
                          } catch (e) {}
                        }
                      }, {
                        text: "cancelar"
                      }]; // });

                      setTimeout(function () {
                        this.loading1.dismiss();
                        alert.present();
                      }.bind(this), 2000);

                    case 14:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "validaMarca",
          value: function validaMarca(brand_id, id_multistore) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                var response_valida_marca;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return this.b2b.getValidaMarcas(brand_id, id_multistore);

                      case 2:
                        response_valida_marca = _context7.sent;
                        resolve(response_valida_marca);
                        console.log('validamarcaExistentt,response: ', response_valida_marca);

                      case 5:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            });
          }
        }, {
          key: "format_fecha",
          value: function format_fecha(fecha) {
            if (fecha != null) {
              try {
                return moment__WEBPACK_IMPORTED_MODULE_12__(fecha).format('YYYY-MM-DD HH:mm:ss');
              } catch (e) {
                return moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD HH:mm:ss');
              }
            } else {
              return 'Sin b2b';
            } // console.log('FECHA RECIBIDA: ',fecha);

          }
        }, {
          key: "presentPopover",
          value: function presentPopover(c, event, card) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this6 = this;

              var popover;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.popoverCtrl.create({
                        component: _pop_over_menu_be2_be_pop_over_menu_be2_be_page__WEBPACK_IMPORTED_MODULE_15__.PopOverMenuBe2BePage,
                        event: event
                      });

                    case 2:
                      popover = _context8.sent;
                      _context8.next = 5;
                      return popover.present();

                    case 5:
                      setTimeout(function () {
                        _this6._comunc.addItem({
                          name: 'data-pop-over',
                          itemAdd: {
                            user: _this6.user,
                            subsidiary: _this6.subsidiary,
                            imagenes: _this6.card_select_b2b_array_reverse[c].imagenes,
                            leyend: _this6.card_select_b2b_array_reverse[c].comentarioGroup.value.comentario,
                            idx_card: c,
                            card: card
                          }
                        });
                      }, 100);
                      /*
                      if (this.card_select_b2b_array_reverse[c].imagenes.length == 0) {
                        this.showAlert('Sin imagenes', 'Debes tener como minimo una imagen para marcar check-out');
                      } else if (this.card_select_b2b_array_reverse[c].comentarioGroup.valid == false) {
                        this.showAlert('Sin registro comentario', 'Debes registrar un comentario para marcar check-out');
                      } else {
                        console.log('pase al else');
                                 let popover = this.popoverCtrl.create(PopOverMenuBe2BePage);
                        popover.present({
                          ev: event
                        });
                        setTimeout(() => {
                                   this._comunc.addItem({
                            name: 'data-pop-over', itemAdd: {
                              user: this.user, subsidiary: this.subsidiary, imagenes: this.card_select_b2b_array_reverse[c].imagenes,
                              leyend: this.card_select_b2b_array_reverse[c].comentarioGroup.value.comentario
                            }
                          });
                                 }, 100);
                      }*/

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getLastB2bSubsiduary",
          value: function getLastB2bSubsiduary(subsidiary_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var subsidiary_last_b2b_one;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return this.b2b.getLastB2bSubsidiary(subsidiary_id);

                    case 3:
                      subsidiary_last_b2b_one = _context9.sent;
                      this.subsidiary_last_b2b = this.format_fecha(subsidiary_last_b2b_one);
                      _context9.next = 9;
                      break;

                    case 7:
                      _context9.prev = 7;
                      _context9.t0 = _context9["catch"](0);

                    case 9:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 7]]);
            }));
          }
        }, {
          key: "cortar_string",
          value: function cortar_string(value) {
            try {
              console.log('corta_string: ', value.split(','));
              this.direccion_subsidiary_arr = value.split(',');
            } catch (e) {}
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            console.log('ionViewDidLoad BeToBePage');
            this.loading = true;
            /*this.storage.get('subsidiary').then(async (subsidiary: any) => {
              this.subsidiary = subsidiary;
                   await this.getListProductSubsidiaryB2BMobile();
              console.log('getSubsidiary: ', subsidiary);
              await this.getLastB2bSubsiduary(subsidiary.id);
              this.cortar_string(subsidiary.all.address);
              this.loading = false;
            })*/

            this.getsub();
          }
        }, {
          key: "getsub",
          value: function getsub() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var _this7 = this;

              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      console.log('ffff');
                      _context11.next = 3;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_13__.Storage.get({
                        key: 'subsidiary'
                      }).then(function (subsidiary) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  this.subsidiary = JSON.parse(subsidiary.value); // console.log('getSubsidiary 1: ', this.subsidiary);

                                  _context10.next = 3;
                                  return this.getListProductSubsidiaryB2BMobile();

                                case 3:
                                  _context10.next = 5;
                                  return this.getLastB2bSubsiduary(this.subsidiary.id);

                                case 5:
                                  this.cortar_string(this.subsidiary.all.address);
                                  console.log("cod_local", this.subsidiary.all.cod_local);
                                  this.loading = false;

                                case 8:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10, this);
                        }));
                      });

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
          }
        }, {
          key: "getListProductSubsidiaryB2BMobile",
          value: function getListProductSubsidiaryB2BMobile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var subsidiary_b2_mobile_data_product;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.b2b.getsubsidiaryB2bMobile(this.subsidiary.id);

                    case 2:
                      subsidiary_b2_mobile_data_product = _context12.sent;
                      this.subsidiary_b2_mobile_data_product_list = subsidiary_b2_mobile_data_product;
                      this.cortar_string(this.subsidiary.all.address);
                      console.log('b2b_product: ', subsidiary_b2_mobile_data_product);

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "buscarProducto",
          value: function buscarProducto() {
            var _this8 = this;

            this.barcodeScanner.scan().then(function (barcodeData) {
              console.log('Barcode data', barcodeData);

              _this8.formGroupSearch.controls.search.setValue(barcodeData.text);

              _this8.subsidiary_b2_mobile_data_product_list = _this8.filterItems(barcodeData.text);
            })["catch"](function (err) {
              console.log('Error', err);
            });
          }
        }, {
          key: "filterItems",
          value: function filterItems(searchTerm) {
            return this.subsidiary_b2_mobile_data_product_list.filter(function (item) {
              return item.idsku.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
          }
        }, {
          key: "menuOption",
          value: function menuOption() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var _this9 = this;

              var actionSheet;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.actionSheetCtrl.create({
                        //title: 'Opciones',
                        header: 'Opciones',
                        buttons: [{
                          text: 'Check-out',
                          role: 'check-out',
                          handler: function handler() {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                                while (1) {
                                  switch (_context13.prev = _context13.next) {
                                    case 0:
                                      if (!this.formLeyend.valid) {
                                        _context13.next = 5;
                                        break;
                                      }

                                      _context13.next = 3;
                                      return this.registrarCheckOut();

                                    case 3:
                                      _context13.next = 6;
                                      break;

                                    case 5:
                                      this.presentToast('Debes registrar una leyenda', 'middle');

                                    case 6:
                                    case "end":
                                      return _context13.stop();
                                  }
                                }
                              }, _callee13, this);
                            }));
                          }
                        }, {
                          text: 'Salir',
                          role: 'salir',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context14.sent;
                      _context14.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "previewImg",
          value: function previewImg(c) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.modalCtrl.create({
                        component: _modal_img_preview_modal_img_preview_page__WEBPACK_IMPORTED_MODULE_14__.ModalImgPreviewPage,
                        //parametros: {
                        // imagenes: this.card_select_b2b_array_reverse[c].imagenes
                        // }
                        componentProps: {
                          'imagenes': this.card_select_b2b_array_reverse[c].imagenes
                        }
                      });

                    case 2:
                      modal = _context15.sent;
                      _context15.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "registrarCheckOut",
          value: function registrarCheckOut() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var _iterator, _step, _step$value, item, index, rs;

              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _iterator = _createForOfIteratorHelper(this.imagenes.map(function (item, index) {
                        return {
                          item: item,
                          index: index
                        };
                      }));
                      _context16.prev = 1;

                      _iterator.s();

                    case 3:
                      if ((_step = _iterator.n()).done) {
                        _context16.next = 14;
                        break;
                      }

                      _step$value = _step.value, item = _step$value.item, index = _step$value.index;
                      console.log(item); // 9, 2, 5

                      console.log(index); // 0, 1, 2

                      this.modelDeliveryPublish = {
                        user_created: this.user.email,
                        subsidiary: this.subsidiary.id,
                        quantity: 1,
                        photo: item.url,
                        description: this.formLeyend.value.leyend
                      };
                      _context16.next = 10;
                      return this.deliveryPublish.publishv2(this.modelDeliveryPublish);

                    case 10:
                      rs = _context16.sent;

                      if (rs != null) {
                        console.log('postDelevery-response-check-out: ', rs);
                        this.imagenes.splice(index, 1);
                      }

                    case 12:
                      _context16.next = 3;
                      break;

                    case 14:
                      _context16.next = 19;
                      break;

                    case 16:
                      _context16.prev = 16;
                      _context16.t0 = _context16["catch"](1);

                      _iterator.e(_context16.t0);

                    case 19:
                      _context16.prev = 19;

                      _iterator.f();

                      return _context16.finish(19);

                    case 22:
                      return _context16.abrupt("return", true);

                    case 23:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this, [[1, 16, 19, 22]]);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(message, position) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 3000,
                        position: position
                      });

                    case 2:
                      toast = _context17.sent;
                      _context17.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "registrarImagen",
          value: function registrarImagen(idx_card) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      console.log('la camara es lerning: ');

                      if (!(this.card_select_b2b_array[idx_card].imagenes.length <= 5)) {
                        _context18.next = 6;
                        break;
                      }

                      _context18.next = 4;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__.Camera.getPhoto({
                        saveToGallery: false,
                        width: 300,
                        height: 300,
                        quality: 100,
                        allowEditing: false,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__.CameraResultType.DataUrl,
                        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_16__.CameraSource.Camera,
                        correctOrientation: true
                      });

                    case 4:
                      this.base64Image = _context18.sent;
                      this.addImagen(idx_card, {
                        url: this.base64Image.dataUrl
                      });

                    case 6:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "addImagen",
          value: function addImagen(c, imagen) {
            this.card_select_b2b_array[c].imagenes.push(imagen);
          }
        }, {
          key: "deleteImagen",
          value: function deleteImagen(c, p) {
            console.log("indice c", c);
            console.log("indice p", p);
            console.log("imagenes", this.card_select_b2b_array_reverse[c].imagenes);
            this.card_select_b2b_array_reverse[c].imagenes.splice(p, 1); // this.imagenes.splice(imagen, 1);

            console.log("imagenes borrada", this.card_select_b2b_array_reverse[c].imagenes);
          }
        }]);

        return BeToBePage;
      }();

      _BeToBePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController
        }, {
          type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_5__.DeliveryServicesService
        }, {
          type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_8__.UserServicesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ActionSheetController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ToastController
        }, {
          type: src_app_services_b2b_service__WEBPACK_IMPORTED_MODULE_3__.B2bService
        }, {
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.PopoverController
        }, {
          type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_4__.ComunicacionComponentService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.AlertController
        }, {
          type: src_app_services_facebook_conection_service_service__WEBPACK_IMPORTED_MODULE_6__.FacebookConectionServiceService
        }, {
          type: src_app_services_social_sharing_service__WEBPACK_IMPORTED_MODULE_7__.SocialSharingService
        }, {
          type: src_app_services_youtube_service_service__WEBPACK_IMPORTED_MODULE_9__.YoutubeServiceService
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__.InAppBrowser
        }];
      };

      _BeToBePage = (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-be-to-be',
        template: _raw_loader_be_to_be_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_be_to_be_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BeToBePage);
      /***/
    },

    /***/
    16834:
    /*!****************************************************************!*\
      !*** ./src/app/services/facebook-conection-service.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FacebookConectionServiceService": function FacebookConectionServiceService() {
          return (
            /* binding */
            _FacebookConectionServiceService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841); // import { FacebookService, InitParams, LoginResponse, UIParams } from 'ngx-facebook';


      var _FacebookConectionServiceService = /*#__PURE__*/function () {
        function FacebookConectionServiceService(http) {
          _classCallCheck(this, FacebookConectionServiceService);

          // let initParams: InitParams = {
          //   appId: '2376775872560317',
          //   xfbml: true,
          //   version: 'v3.3'
          // };
          this.http = http; // fb.init(initParams);
        }

        _createClass(FacebookConectionServiceService, [{
          key: "facebookLogin",
          value: function facebookLogin() {
            return 3;
            /*  return new Promise((resolve,reject)=>{
                this.fb.login(['public_profile', 'user_friends', 'email'])
              .then((res: FacebookLoginResponse) => {
                 resolve(this.facebookSharing());
              })
              .catch(e => console.log('Error logging into Facebook', e));
                     })*/
          }
        }, {
          key: "facebookSharing",
          value: function facebookSharing() {
            var configFacebook = {
              method: 'share',
              href: 'http://example.com',
              caption: 'Such caption, very feed.',
              description: 'Much description',
              picture: 'http://example.com/image.png'
            }; // return this.fb.showDialog(configFacebook);

            return 3;
          }
        }]);

        return FacebookConectionServiceService;
      }();

      _FacebookConectionServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _FacebookConectionServiceService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _FacebookConectionServiceService);
      /***/
    },

    /***/
    37393:
    /*!****************************************************!*\
      !*** ./src/app/services/social-sharing.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialSharingService": function SocialSharingService() {
          return (
            /* binding */
            _SocialSharingService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);

      var _SocialSharingService = /*#__PURE__*/function () {
        function SocialSharingService(http, socialSharing) {
          _classCallCheck(this, SocialSharingService);

          this.http = http;
          this.socialSharing = socialSharing;
          console.log('Hello SocialSharingProvider Provider');
        }

        _createClass(SocialSharingService, [{
          key: "facebookSharing",
          value: function facebookSharing(message, image, url) {
            this.socialSharing.shareViaFacebook(message, image, url);
          }
        }]);

        return SocialSharingService;
      }();

      _SocialSharingService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_0__.SocialSharing
        }];
      };

      _SocialSharingService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _SocialSharingService);
      /***/
    },

    /***/
    25943:
    /*!*****************************************************!*\
      !*** ./src/app/services/youtube-service.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "YoutubeServiceService": function YoutubeServiceService() {
          return (
            /* binding */
            _YoutubeServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _YoutubeServiceService = /*#__PURE__*/function () {
        // playlistId 
        // nextPageToken 
        // prevPageToken;
        function YoutubeServiceService(http) {
          _classCallCheck(this, YoutubeServiceService);

          this.http = http;
          this.OAUTH2_CLIENT_ID = '97244969057-5vgal1prd287aq7v5v1dqnjkaoni1i26.apps.googleusercontent.com';
          this.OAUTH2_SCOPES = ['https://www.googleapis.com/auth/youtube'];
          console.log('Hello YoutubeServiceProvider Provider');
        }

        _createClass(YoutubeServiceService, [{
          key: "auth",
          value: function auth() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var data, header;
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      data = {
                        client_id: '97244969057-e20um7a1dkkmlrggmmtjagvom9gr43f8.apps.googleusercontent.com',
                        scope: 'https://www.googleapis.com/auth/youtube'
                      };
                      header = {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      };
                      return _context19.abrupt("return", this.http.post('https://accounts.google.com/o/oauth2/device/code', data).toPromise());

                    case 3:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "token",
          value: function token(authData) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
              var auth, data, token_result;
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      console.log('code_value: ', authData);
                      auth = authData;
                      data = {
                        client_id: '97244969057-e20um7a1dkkmlrggmmtjagvom9gr43f8.apps.googleusercontent.com',
                        client_secret: 's4B4hsBD-2xyRn5jVvlCsM3O',
                        code: auth.device_code,
                        grant_type: 'http://oauth.net/grant_type/device/1.0'
                      };
                      _context20.next = 5;
                      return this.http.post('https://accounts.google.com/o/oauth2/token', data).toPromise();

                    case 5:
                      token_result = _context20.sent;
                      console.log('token_result: ', token_result); // .then((authResponse_token)=>{
                      //   this.token(authResponse_token);
                      //    console.log('authResponse_token:',authResponse_token);
                      // });

                    case 7:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }]);

        return YoutubeServiceService;
      }();

      _YoutubeServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _YoutubeServiceService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _YoutubeServiceService);
      /***/
    },

    /***/
    72325:
    /*!***************************************************!*\
      !*** ./src/app/pages/be-to-be/be-to-be.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-be-to-be {\n  background: #E0E0E0;\n}\npage-be-to-be ion-content {\n  background: #E0E0E0;\n}\npage-be-to-be .image-container {\n  min-height: 200px;\n  background-size: cover;\n}\n@media (min-width: 0px) {\n  page-be-to-be .images {\n    -moz-column-count: 2;\n         column-count: 2;\n  }\n}\n@media (min-width: 420px) {\n  page-be-to-be .images {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n}\n@media (min-width: 720px) {\n  page-be-to-be .images {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n}\npage-be-to-be .one-image {\n  margin: 2px;\n}\npage-be-to-be ion-scroll {\n  height: 100px;\n}\nion-scroll {\n  height: 100px;\n}\n.gallery-modal {\n  background: rgba(0, 0, 0, 0.7) !important;\n}\n.info-punto-venta-style {\n  position: relative !important;\n  top: 10px !important;\n}\nbody > ion-app > ng-component > ion-nav > page-be-to-be > ion-content > div.scroll-content > ion-slides > div > div.swiper-wrapper > ion-slide.info-punto-venta-style.swiper-slide.swiper-slide-active > div > ion-card {\n  position: absolute !important;\n  top: 0px !important;\n}\nbody > ion-app > ng-component > ion-nav > page-be-to-be > ion-content > div.scroll-content > ion-slides > div > div.swiper-wrapper > ion-slide.swiper-slide.swiper-slide-active > div > ion-card {\n  position: absolute !important;\n  top: 0px !important;\n}\n.no-product-style {\n  margin-right: auto;\n  margin-left: auto;\n  color: #BDBDBD;\n}\n.icon-button-style {\n  -webkit-margin-end: 1em;\n          margin-inline-end: 1em;\n}\n.scroll-content {\n  touch-action: pan-x pan-y !important;\n}\n.scroll-content * {\n  touch-action: pan-x pan-y !important;\n}\n.loading-style {\n  margin-right: auto;\n  margin-left: auto;\n  right: auto;\n  left: auto;\n  -webkit-margin-before: 50%;\n          margin-block-start: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlLXRvLWJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLG1CQUFBO0FBRVI7QUFDSTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUVJO0VBQ0k7SUFDSSxvQkFBQTtTQUFBLGVBQUE7RUFBVjtBQUNGO0FBR0k7RUFDSTtJQUNJLG9CQUFBO1NBQUEsZUFBQTtFQURWO0FBQ0Y7QUFJSTtFQUNJO0lBQ0ksb0JBQUE7U0FBQSxlQUFBO0VBRlY7QUFDRjtBQUtJO0VBQ0ksV0FBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0FBSlI7QUFnQkE7RUFDSSxhQUFBO0FBYko7QUFnQkE7RUFDSSx5Q0FBQTtBQWJKO0FBZ0JBO0VBQ0ksNkJBQUE7RUFDQSxvQkFBQTtBQWJKO0FBZ0JBO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtBQWJKO0FBZ0JBO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtBQWJKO0FBaUJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFkSjtBQWlCQTtFQUNJLHVCQUFBO1VBQUEsc0JBQUE7QUFkSjtBQWlCQTtFQUNJLG9DQUFBO0FBZEo7QUFlSTtFQUNJLG9DQUFBO0FBYlI7QUFtQkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0FBaEJKIiwiZmlsZSI6ImJlLXRvLWJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtYmUtdG8tYmUge1xuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XG4gICAgaW9uLWNvbnRlbnR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XG4gICAgfVxuXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMHB4KSB7XG4gICAgICAgIC5pbWFnZXMge1xuICAgICAgICAgICAgY29sdW1uLWNvdW50OiAyO1xuICAgICAgICB9XG4gICAgfVxuIFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MjBweCkge1xuICAgICAgICAuaW1hZ2VzIHtcbiAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAgICAgfVxuICAgIH1cbiBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgLmltYWdlcyB7XG4gICAgICAgICAgICBjb2x1bW4tY291bnQ6IDQ7XG4gICAgICAgIH1cbiAgICB9XG4gXG4gICAgLm9uZS1pbWFnZSB7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgIH1cblxuICAgIGlvbi1zY3JvbGwgeyBcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuXG5cbiAgICBcbn1cblxuYm9keSA+IGlvbi1hcHAgPiBuZy1jb21wb25lbnQgPiBpb24tbmF2ID4gcGFnZS1iZS10by1iZSA+IGlvbi1jb250ZW50ID4gZGl2LnNjcm9sbC1jb250ZW50ID4gaW9uLWNhcmQ6bnRoLWNoaWxkKDEpID4gaW9uLWNhcmQtZm9vdGVyID4gZm9ybSA+IGlvbi1pdGVtID4gZGl2Lml0ZW0taW5uZXJ7XG4gICBcblxuXG59XG5pb24tc2Nyb2xsIHsgXG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbi5nYWxsZXJ5LW1vZGFse1xuICAgIGJhY2tncm91bmQ6ICByZ2JhKDAsIDAsIDAsIDAuNykgIWltcG9ydGFudDtcbn1cblxuLmluZm8tcHVudG8tdmVudGEtc3R5bGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdG9wOjEwcHggIWltcG9ydGFudDtcbn1cblxuYm9keSA+IGlvbi1hcHAgPiBuZy1jb21wb25lbnQgPiBpb24tbmF2ID4gcGFnZS1iZS10by1iZSA+IGlvbi1jb250ZW50ID4gZGl2LnNjcm9sbC1jb250ZW50ID4gaW9uLXNsaWRlcyA+IGRpdiA+IGRpdi5zd2lwZXItd3JhcHBlciA+IGlvbi1zbGlkZS5pbmZvLXB1bnRvLXZlbnRhLXN0eWxlLnN3aXBlci1zbGlkZS5zd2lwZXItc2xpZGUtYWN0aXZlID4gZGl2ID4gaW9uLWNhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgdG9wOjBweCAhaW1wb3J0YW50O1xufVxuXG5ib2R5ID4gaW9uLWFwcCA+IG5nLWNvbXBvbmVudCA+IGlvbi1uYXYgPiBwYWdlLWJlLXRvLWJlID4gaW9uLWNvbnRlbnQgPiBkaXYuc2Nyb2xsLWNvbnRlbnQgPiBpb24tc2xpZGVzID4gZGl2ID4gZGl2LnN3aXBlci13cmFwcGVyID4gaW9uLXNsaWRlLnN3aXBlci1zbGlkZS5zd2lwZXItc2xpZGUtYWN0aXZlID4gZGl2ID4gaW9uLWNhcmR7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgdG9wOjBweCAhaW1wb3J0YW50O1xufVxuXG5cbi5uby1wcm9kdWN0LXN0eWxle1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBjb2xvcjojQkRCREJEO1xufVxuXG4uaWNvbi1idXR0b24tc3R5bGV7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDFlbTtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14IHBhbi15ICFpbXBvcnRhbnQ7XG4gICAgKiB7XG4gICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXkgIWltcG9ydGFudDtcbiAgICB9XG59XG5cblxuXG4ubG9hZGluZy1zdHlsZXtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDUwJTtcbn0iXX0= */";
      /***/
    },

    /***/
    49121:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/be-to-be/be-to-be.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the BeToBePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>B2B</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"background:#F5F5F5\" class=\"ion-padding\">\n\n\n\n  <div *ngIf=\"loading==true\"\n    style=\"margin-left:auto; margin-right:auto;align-items: center;justify-content: center;margin-block-start: 50%\">\n\n    <ion-spinner style=\"margin-left:auto; margin-right:auto;width: 100%;\" name=\"bubbles\"></ion-spinner>\n    <br />\n    <ion-label style=\"margin-left:42% !important;color: #9E9E9E\">Cargando...</ion-label>\n\n\n  </div>\n\n  <div *ngIf=\"loading==false\">\n\n    <div *ngIf=\"card_select_b2b_array_reverse?.length==0\" padding>\n      <h3 style=\"margin-block-start: 10em;text-align: center;color:#757575;margin-bottom: 0px;\">\n        No has seleccionado ninguna marca, para trabajar presiona el botón\n      </h3><br />\n      <div  style=\"text-align:center\">\n        <ion-button fill=\"clear\"  >\n          \n          <ion-icon slot=\"icon-only\" name=\"cart\" color=\"violet\"></ion-icon>\n        </ion-button>\n       \n        \n      </div>\n    </div>\n\n\n    <!-- init cards array -->\n\n    <div *ngFor=\"let card_reverse of card_select_b2b_array_reverse;let c=index\">\n\n\n      <ion-card\n        style=\"margin-bottom: 0px !important;border-top:none !important; border-top: 3px solid colorofyourchosing;\">\n\n        <ion-card-header>\n          <ion-item>\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"3\" size-sm=\"3\" size-md=\"3\" size-lg=\"3\" size-xl=\"3\">\n                  <ion-avatar item-start>\n                    <img [src]=\"subsidiary?.all?.picture_business\">\n                  </ion-avatar>\n                </ion-col>\n                <ion-col size=\"7\" size-sm=\"7\" size-md=\"7\" size-lg=\"7\" size-xl=\"7\" style=\"padding-left: 14px;padding-right: 0px;\">\n                  <ion-card-title style=\"color:#424242\">\n                  </ion-card-title>\n                  <ion-card-subtitle>\n                    {{subsidiary?.all?.name_business}}<br />\n                    <p style=\"color:#9E9E9E\">{{card_reverse?.titleCard}}</p>\n                    <p style=\"color:#9E9E9E\">{{subsidiary_last_b2b}}</p>\n                  </ion-card-subtitle>\n                </ion-col>\n                <ion-col size=\"2\" size-sm=\"2\" size-md=\"2\" size-lg=\"2\" size-xl=\"2\">\n                  <ion-buttons >\n                    <ion-button fill=\"clear\"  (click)=\"presentPopover(c,$event,card_reverse)\" color=\"violet\">\n                      <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n\n          </ion-item>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n         <form [formGroup]=\"card_reverse?.comentarioGroup\"\n            style=\"margin-left:9px;margin-right:9px;margin-bottom: 0px!important\">\n            <ion-item style=\"background:#FAFAFA !important\">\n              <ion-textarea clearOnEdit=\"true\" style=\"background:#FAFAFA!important;color:#9E9E9E!important;\"\n                formControlName=\"comentario\" placeholder=\"Escribe un comentario\"></ion-textarea>\n            </ion-item>\n          </form>\n        </ion-card-content>\n\n      </ion-card>\n      <!--<ion-card *ngIf=\"card_reverse?.imagenes?.length>0\"\n        style=\"margin-top: 0px;margin-bottom: 0px !important;background:#9C27B0\">\n        <ion-card-content>\n          \n            <div class=\"images\" (click)=\"previewImg(c)\">\n              <div class=\"one-image\" *ngFor=\"let imagen of card_reverse?.imagenes, let p=index\">\n                <img (press)=\"deleteImagen(c,p)\" [src]=\"imagen?.url\">\n              </div>\n            </div>\n         \n        </ion-card-content>\n      </ion-card>-->\n      <ion-card *ngIf=\"card_reverse?.imagenes?.length>0\"\n        style=\"margin-top: 0px;margin-bottom: 0px !important;background:#9C27B0\">\n        <ion-card-content>\n         \n          <ion-slides pager=\"true\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let imagen of card_reverse?.imagenes, let p=index\">\n              <ion-button (click)=\"deleteImagen(c,p)\" icon-start fill=\"clear\"   size=\"small\" color=\"light\" style=\"z-index: 2;\n              position: absolute;\n              left: 1%;\n              top: 1%;\n              margin: auto;\">\n                 <ion-icon name=\"close-circle-outline\"></ion-icon>\n              </ion-button>\n              <img [src]=\"imagen?.url\">\n            </ion-slide>\n          </ion-slides>\n         \n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-row>\n          <ion-col style=\"text-align: center;\">\n            <ion-button (click)=\"registrarImagen(c)\"  icon-start fill=\"clear\"   size=\"small\" color=\"violet\">\n              <ion-icon name=\"camera\" style=\"font-size: 25px;\"></ion-icon>\n            </ion-button>\n            <!-- <button ion-fab (click)=\"registrarImagen()\">\n              <ion-icon name=\"camera\"></ion-icon>\n            </button> -->\n\n          </ion-col>\n          <ion-col style=\"text-align: center;\">\n            <ion-button (click)=\"presetenModal('b2v-view-product',card_reverse)\" fill=\"clear\"   size=\"small\" color=\"violet\" icon-start>\n              <ion-icon name=\"reader-outline\" style=\"font-size: 25px;\"></ion-icon>\n              <!--<span class=\"material-icons\"> remove_shopping_cart</span>-->\n            </ion-button>\n          </ion-col>\n          <ion-col style=\"text-align: center;\">\n            <!--<ion-button fill=\"clear\" icon-start  size=\"small\" color=\"violet\">\n              <ion-icon style=\"font-size: 25px;\" name=\"cart-outline\"></ion-icon>-->\n              <!--<span class=\"material-icons-outlined\">\n                shopping_cart\n              </span>-->\n              <!--<ion-badge item-end color=\"violet\">{{baja_stock_info_count}}</ion-badge>\n            </ion-button>--> \n          </ion-col>\n          <!-- <ion-col>\n\n          </ion-col>\n          <ion-col>\n\n          </ion-col>\n      \n          <ion-col>\n            <button ion-button clear item-end icon-start small (click)=\"instagramLogin()\">\n              <ion-icon name=\"logo-instagram\"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear item-end icon-start small (click)=\"loginFacebook()\">\n\n              (click)=\"loginFacebook()\" -->\n              <!-- <ion-icon name=\"logo-facebook\"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button clear item-end icon-start small (click)=\"loginWithTwitter()\">\n              <ion-icon name=\"logo-twitter\"></ion-icon>\n            </button>\n          </ion-col> --> \n        </ion-row>\n      </ion-card>\n\n    </div>\n\n    <!-- end cards arrs -->\n\n\n    <!-- <div padding>\n      <ion-segment [(ngModel)]=\"pet\">\n        <ion-segment-button value=\"Instagram\">\n          Instagram\n        </ion-segment-button>\n        <ion-segment-button value=\"Facebook\">\n          Facebook\n        </ion-segment-button>\n        <ion-segment-button value=\"Twitter\">\n          Twitter\n        </ion-segment-button>\n      </ion-segment>\n    </div> -->\n\n    <!-- <div [ngSwitch]=\"pet\">\n      <ion-list *ngSwitchCase=\"'Instagram'\">\n       \n\n        <div id=\"instafeed\"></div>\n      \n      </ion-list>\n\n      <ion-list *ngSwitchCase=\"'Facebook'\">\n\n      </ion-list>\n      <ion-list *ngSwitchCase=\"'Twitter'\">\n\n        <div>\n          <ion-refresher (ionRefresh)=\"loadTimeline($event)\">\n              <ion-refresher-content></ion-refresher-content>\n          </ion-refresher>\n  \n          <ion-card *ngFor=\"let tweet of tweets | async\">\n  \n              <ion-item>\n                <ion-avatar item-left>\n                  <img src=\"{{tweet.user.profile_image_url}}\">\n                </ion-avatar>\n                <h2>{{tweet.user.name}}</h2>\n                <p>{{dateForTweet(tweet.created_at)}}</p>\n              </ion-item>\n          \n              <img src=\"{{tweet.extended_entities.media[0].media_url}}\" *ngIf=\"tweet.extended_entities\">\n          \n              <ion-card-content>\n                <p>{{tweet.text}}</p>\n              </ion-card-content>\n          \n              <ion-row>\n                <ion-col *ngIf=\"tweet.entities.urls.length > 0\">\n                  <button ion-button clear small (click)=\"openLinkUrl(tweet.entities.urls[0].url)\">\n                    <ion-icon name=\"open\"></ion-icon>\n                    <div>Open Link</div>\n                  </button>\n                </ion-col>\n              </ion-row>\n          \n            </ion-card>\n        </div>\n          \n\n\n      </ion-list>\n    </div> -->\n\n\n\n  </div>\n\n \n  <ion-fab vertical=\"bottom\" horizontal=\"end\"  slot=\"fixed\">\n    <ion-fab-button color=\"violet\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button color=\"violet\" (click)=\"selectMarcaEmpresaAlert()\"><ion-icon name=\"swap-horizontal\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_be-to-be_be-to-be_module_ts-es5.js.map