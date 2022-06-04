(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["default-src_app_pages_b2b-view-product_b2b-view-product_page_ts"], {
    /***/
    64021:
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraSource": function CameraSource() {
          return (
            /* binding */
            _CameraSource
          );
        },

        /* harmony export */
        "CameraDirection": function CameraDirection() {
          return (
            /* binding */
            _CameraDirection
          );
        },

        /* harmony export */
        "CameraResultType": function CameraResultType() {
          return (
            /* binding */
            _CameraResultType
          );
        }
        /* harmony export */

      });

      var _CameraSource;

      (function (CameraSource) {
        /**
         * Prompts the user to select either the photo album or take a photo.
         */
        CameraSource["Prompt"] = "PROMPT";
        /**
         * Take a new photo using the camera.
         */

        CameraSource["Camera"] = "CAMERA";
        /**
         * Pick an existing photo fron the gallery or photo album.
         */

        CameraSource["Photos"] = "PHOTOS";
      })(_CameraSource || (_CameraSource = {}));

      var _CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(_CameraDirection || (_CameraDirection = {}));

      var _CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(_CameraResultType || (_CameraResultType = {})); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    37673:
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CameraDirection": function CameraDirection() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection
          );
        },

        /* harmony export */
        "CameraResultType": function CameraResultType() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType
          );
        },

        /* harmony export */
        "CameraSource": function CameraSource() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource
          );
        },

        /* harmony export */
        "Camera": function Camera() {
          return (
            /* binding */
            _Camera
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      64021);

      var _Camera = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          14028)).then(function (m) {
            return new m.CameraWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    75278:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/b2b-view-product/b2b-view-product.page.ts ***!
      \*****************************************************************/

    /***/
    function (_2) {
      function _(_x, _x2, _x3) {
        return _2.apply(this, arguments);
      }

      _.toString = function () {
        return _2.toString();
      };

      return _;
    }(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "B2bViewProductPage": function B2bViewProductPage() {
          return (
            /* binding */
            _B2bViewProductPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_b2b_view_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./b2b-view-product.page.html */
      42673);
      /* harmony import */


      var _b2b_view_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./b2b-view-product.page.scss */
      47713);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      92760);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_b2b_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/b2b.service */
      36167);
      /* harmony import */


      var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user-services.service */
      24107);
      /* harmony import */


      var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/delivery-services.service */
      68407);
      /* harmony import */


      var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/comunicacion-component.service */
      8077);
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/camera */
      37673); //import { Storage } from '@ionic/storage';


      var _B2bViewProductPage = /*#__PURE__*/function () {
        function B2bViewProductPage(navCtrl, b2b, barcodeScanner, modalCtrl, _auth, deliveryPublish, alertCtrl, _comunc) {
          _classCallCheck(this, B2bViewProductPage);

          this.navCtrl = navCtrl;
          this.b2b = b2b;
          this.barcodeScanner = barcodeScanner;
          this.modalCtrl = modalCtrl;
          this._auth = _auth;
          this.deliveryPublish = deliveryPublish;
          this.alertCtrl = alertCtrl;
          this._comunc = _comunc;
          this.loading = true;
          this.subsidiary = null;
          this.direccion_subsidiary_arr = new Array();
          this.subsidiary_b2_mobile_data_product_list = new Array();
          this.formGroupSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null)
          });
          this.categorias_productos = new Array();
          this.subsidiary_last_b2b = null;
          this.data_modal_marca = null;
          this.baja_stock_info_count = 0;
          this.allProductList = new Array();
          this.temporal_product_item = null;

          var user_data = this._auth.getUser();

          this.user = user_data[0]; //this.data_modal_marca = this.navParams.get('data');
          //console.log('data_learning: ', this.data_modal_marca);
          //console.log('data_learning: ', this.card_item);
          // this.formGroupSearch.controls.search.valueChanges.subscribe(async (search: any) => {
          //   if (search === '') {
          //     console.log('search-items-updates');
          //     // this.getListProductSubsidiaryB2BMobile();
          //     this.temporal_product_item = null;
          //     this.categorias_productos = null;
          //     this.categorias_productos = new Array();
          //     await this.getCategoriaProductos();
          //   }
          // })
        }

        _createClass(B2bViewProductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.data_modal_marca = this.card_item;
            console.log('data_learning: ', this.card_item);
            setTimeout(function () {
              _this.initt(); //})

            }, 2000);
          }
        }, {
          key: "parse_fecha_b2b",
          value: function parse_fecha_b2b(fecha) {
            return moment__WEBPACK_IMPORTED_MODULE_4__(fecha).format('YYYY-MM-DD');
          }
        }, {
          key: "registrarImagenLowStock",
          value: function registrarImagenLowStock(producto, cat_pro, prod) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var img, model_lowstockproduc, rest_aviso;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('producto-low: ', producto);
                      /*this.camera.getPicture(
                        {
                        saveToPhotoAlbum: false,
                        targetWidth: 300,
                        targetHeight: 300,
                        quality: 100,
                        allowEdit: false,
                        encodingType: this.camera.EncodingType.PNG,
                        sourceType: this.camera.PictureSourceType.CAMERA,
                        destinationType: this.camera.DestinationType.DATA_URL,
                      }
                      
                      
                      ).then(async (imageData) => {*/

                      _context.next = 3;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.Camera.getPhoto({
                        saveToGallery: false,
                        width: 300,
                        height: 300,
                        quality: 100,
                        allowEditing: false,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.CameraResultType.DataUrl,
                        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.CameraSource.Camera,
                        correctOrientation: true
                      });

                    case 3:
                      this.base64Image = _context.sent;
                      img = this.base64Image.dataUrl;
                      model_lowstockproduc = {
                        id_subsidiary: this.subsidiary.id,
                        id_product: producto.id,
                        product_photo: img,
                        user_created: this.user.email
                      };
                      _context.prev = 6;
                      _context.next = 9;
                      return this.deliveryPublish.lowstockproduct(model_lowstockproduc);

                    case 9:
                      rest_aviso = _context.sent;
                      console.log('rest_aviso_low_product:', rest_aviso);

                      if (rest_aviso != null) {
                        // let find_error_key = Object.keys(rest_aviso).indexOf('non_field_errors');
                        // if (find_error_key > -1) {
                        // } else {
                        this.categorias_productos[cat_pro].product[prod].color = '#CCFF90';
                        this.baja_stock_info_count = this.baja_stock_info_count + 1; // }
                        //marcar el producto como registrado
                      }

                      _context.next = 17;
                      break;

                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](6);
                      this.showAlert('Error bajo stock', 'este producto ya se encuentra informado con bajo stock', ['OK']);

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[6, 14]]);
            }));
          }
        }, {
          key: "registrarImagenLowStockFilter",
          value: function registrarImagenLowStockFilter(producto) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var img, model_lowstockproduc, rest_aviso;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('producto-low: ', producto);
                      /* this.camera.getPicture({
                          saveToPhotoAlbum: false,
                          targetWidth: 300,
                          targetHeight: 300,
                          quality: 100,
                          allowEdit: false,
                          encodingType: this.camera.EncodingType.PNG,
                          sourceType: this.camera.PictureSourceType.CAMERA,
                          destinationType: this.camera.DestinationType.DATA_URL,
                        }).then(async (imageData) => {*/

                      _context2.next = 3;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.Camera.getPhoto({
                        saveToGallery: false,
                        width: 300,
                        height: 300,
                        quality: 100,
                        allowEditing: false,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.CameraResultType.DataUrl,
                        source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_9__.CameraSource.Camera,
                        correctOrientation: true
                      });

                    case 3:
                      this.base64Image = _context2.sent;
                      img = this.base64Image.dataUrl;
                      model_lowstockproduc = {
                        id_subsidiary: this.subsidiary.id,
                        id_product: producto.id,
                        product_photo: img,
                        user_created: this.user.email
                      };
                      _context2.prev = 6;
                      _context2.next = 9;
                      return this.deliveryPublish.lowstockproduct(model_lowstockproduc);

                    case 9:
                      rest_aviso = _context2.sent;
                      console.log('rest_aviso_low_product:', rest_aviso);

                      if (rest_aviso != null) {
                        // let find_error_key = Object.keys(rest_aviso).indexOf('non_field_errors');
                        // if (find_error_key > -1) {
                        // } else {
                        this.getCategoriaProductos();
                        this.baja_stock_info_count = this.baja_stock_info_count + 1; // }
                        //marcar el producto como registrado
                      }

                      _context2.next = 17;
                      break;

                    case 14:
                      _context2.prev = 14;
                      _context2.t0 = _context2["catch"](6);
                      this.showAlert('Error bajo stock', 'este producto ya se encuentra informado con bajo stock', ['OK']);

                    case 17:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[6, 14]]);
            }));
          }
        }, {
          key: "showAlert",
          value: function showAlert(title, subTitle, buttons) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        //title: title,
                        //subTitle: subTitle,
                        header: title,
                        subHeader: subTitle,
                        buttons: buttons
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getCategoriaProductos",
          value: function getCategoriaProductos() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var product_category, product_valid;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      /**
                       * obtiene los productos del subisidiary por categoria
                       */
                      //this.subsidiary.id
                      this.categorias_productos = null;
                      this.categorias_productos = new Array();
                      this.temporal_product_item = null;
                      this.allProductList = new Array();
                      this.formGroupSearch.reset();
                      _context4.prev = 5;
                      this.loading = true;
                      console.log('product-valid: ', this.subsidiary.id, ' modal'); // console.log('dataCategoriaProductos:',{subisidiary_id:this.subsidiary.id,marca:this.data_modal_marca.card_item.id});

                      _context4.next = 10;
                      return this.b2b.getCategoriaProductos(this.subsidiary.id, this.data_modal_marca.id);

                    case 10:
                      product_category = _context4.sent;
                      _context4.next = 13;
                      return this.deliveryPublish.subsidiaryb2bmobileproducts(this.subsidiary.id, this.data_modal_marca.id);

                    case 13:
                      product_valid = _context4.sent;
                      console.log('product-valid: ', product_valid);
                      this.categorias_productos = product_category;
                      console.log('categorias productos: ', this.categorias_productos);
                      this.setColorCalifProduct(this.categorias_productos, product_valid);
                      this.loading = false;
                      _context4.next = 24;
                      break;

                    case 21:
                      _context4.prev = 21;
                      _context4.t0 = _context4["catch"](5);
                      console.log('error:', _context4.t0);

                    case 24:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[5, 21]]);
            }));
          }
        }, {
          key: "setColorCalifProduct",
          value: function setColorCalifProduct(category_arr, validArr) {
            var _this2 = this;

            try {
              if (validArr.length > 0) {
                category_arr.forEach(function (category, idx_category) {
                  category.product.forEach(function (product, idx_product) {
                    var find_valid_product = _.findIndex(validArr, function (o) {
                      return o.id_product == product.id;
                    });

                    if (find_valid_product > -1) {
                      _this2.categorias_productos[idx_category].product[idx_product].color = '#CCFF90';
                    } else {
                      _this2.categorias_productos[idx_category].product[idx_product].color = '#FCE4EC';
                    }
                  });
                });
              } else {
                category_arr.forEach(function (category, idx_category) {
                  category.product.forEach(function (product, idx_product) {
                    if (product.stock <= 5) {
                      _this2.categorias_productos[idx_category].product[idx_product].color = '#FCE4EC';
                    }
                  });
                });
              }
            } catch (e) {
              console.log('error setColorCalifProduct: ', e);
            }
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            var _this3 = this;

            setTimeout(function () {
              _this3.initt(); //})

            }, 2000);
          }
        }, {
          key: "initt",
          value: function initt() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var value;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('ionViewDidLoad BeToBePage');
                      this.loading = true;
                      _context5.next = 4;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({
                        key: 'subsidiary'
                      });

                    case 4:
                      value = _context5.sent;
                      // this.storage.get('subsidiary').then(async (subsidiary: any) => {
                      this.subsidiary = JSON.parse(value.value); // await this.getListProductSubsidiaryB2BMobile();

                      _context5.next = 8;
                      return this.getCategoriaProductos();

                    case 8:
                      _context5.next = 10;
                      return this.getLastB2bSubsiduary();

                    case 10:
                      console.log('getSubsidiary: ', this.subsidiary);
                      this.loading = false;

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getLastB2bSubsiduary",
          value: function getLastB2bSubsiduary() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.b2b.getLastB2bSubsidiary(this.subsidiary.id);

                    case 3:
                      this.subsidiary_last_b2b = _context6.sent;
                      _context6.next = 8;
                      break;

                    case 6:
                      _context6.prev = 6;
                      _context6.t0 = _context6["catch"](0);

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 6]]);
            }));
          }
        }, {
          key: "buscarProducto",
          value: function buscarProducto() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this4 = this;

              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      // this.temporal_product_item = null;
                      // this.allProductList = new Array();
                      // await this.getCategoriaProductos();
                      this.barcodeScanner.scan().then(function (barcodeData) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  if (!(barcodeData.text === "")) {
                                    _context7.next = 7;
                                    break;
                                  }

                                  this.temporal_product_item = null;
                                  this.allProductList = new Array();
                                  _context7.next = 5;
                                  return this.getCategoriaProductos();

                                case 5:
                                  _context7.next = 12;
                                  break;

                                case 7:
                                  _context7.next = 9;
                                  return this.setProductListAll();

                                case 9:
                                  console.log('temporal_product_item: ', this.temporal_product_item);
                                  this.formGroupSearch.controls.search.setValue(barcodeData.text);
                                  this.temporal_product_item = this.filterItems(barcodeData.text); // this.categorias_productos=null;
                                  // this.categorias_productos=new Array();

                                case 12:
                                  console.log('Barcode data', barcodeData);

                                case 13:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      })["catch"](function (err) {
                        console.log('Error', err);
                      });

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "setProductListAll",
          value: function setProductListAll() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this5 = this;

              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.categorias_productos.forEach(function (category) {
                        category.product.forEach(function (producto) {
                          _this5.allProductList.push(producto);

                          console.log('producto_item: ', producto);
                        });
                      });
                      return _context9.abrupt("return", true);

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "filterItems",
          value: function filterItems(searchTerm) {
            return this.allProductList.filter(function (item) {
              return item.idsku.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
          }
        }, {
          key: "getListProductSubsidiaryB2BMobile",
          value: function getListProductSubsidiaryB2BMobile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var subsidiary_b2_mobile_data_product;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.b2b.getsubsidiaryB2bMobile(this.subsidiary.id);

                    case 2:
                      subsidiary_b2_mobile_data_product = _context10.sent;
                      this.subsidiary_b2_mobile_data_product_list = subsidiary_b2_mobile_data_product;
                      this.cortar_string(this.subsidiary.all.address);
                      console.log('b2b_product: ', subsidiary_b2_mobile_data_product);

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
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
          key: "goBack",
          value: function goBack() {
            //this.navCtrl.pop();
            this.modalCtrl.dismiss({
              'dismissed': true
            });

            this._comunc.addItem({
              name: 'low-stock-count',
              itemAdd: {
                count: this.baja_stock_info_count
              }
            });
          }
        }]);

        return B2bViewProductPage;
      }();

      _B2bViewProductPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController
        }, {
          type: src_app_services_b2b_service__WEBPACK_IMPORTED_MODULE_5__.B2bService
        }, {
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
        }, {
          type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_6__.UserServicesService
        }, {
          type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_7__.DeliveryServicesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_8__.ComunicacionComponentService
        }];
      };

      _B2bViewProductPage.propDecorators = {
        card_item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
        }]
      };
      _B2bViewProductPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-b2b-view-product',
        template: _raw_loader_b2b_view_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_b2b_view_product_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _B2bViewProductPage);
      /***/
    }),

    /***/
    36167:
    /*!*****************************************!*\
      !*** ./src/app/services/b2b.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "B2bService": function B2bService() {
          return (
            /* binding */
            _B2bService
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


      var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-services.service */
      94000);

      var _B2bService = /*#__PURE__*/function () {
        // public url: string = 'http://192.168.100.9:8001/api/v1/';
        function B2bService(http, base) {
          _classCallCheck(this, B2bService);

          this.http = http;
          this.base = base;
          this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
          console.log('Hello B2bProvider Provider');
        }

        _createClass(B2bService, [{
          key: "getsubsidiaryB2bMobile",
          value: function getsubsidiaryB2bMobile(subsidiary_id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'reports/subsidiary-b2b-mobile/?id_subsidiary=' + subsidiary_id, {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "getCategoriaProductos",
          value: function getCategoriaProductos(subsidiary_id, id_brand) {
            var _this6 = this;

            /**
             *  @param subsidiary_id
             *
             *
             */
            return new Promise(function (resolve, reject) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                var productos_marcas, headers;
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        productos_marcas = new Array();
                        _context11.prev = 1;
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken()); //     /**obteniendo las categorias de productos */

                        _context11.next = 5;
                        return this.http.get(this.url + 'reports/subsidiary-b2b-mobile/?id_subsidiary=' + subsidiary_id + '&id_brand=' + id_brand + '', {
                          headers: headers
                        }).toPromise();

                      case 5:
                        productos_marcas = _context11.sent;
                        resolve(productos_marcas);
                        _context11.next = 11;
                        break;

                      case 9:
                        _context11.prev = 9;
                        _context11.t0 = _context11["catch"](1);

                      case 11:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this, [[1, 9]]);
              }));
            });
          }
        }, {
          key: "getMarcaAndAgency",
          value: function getMarcaAndAgency() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            /**obteniendo las categorias de productos */

            return this.http.get(this.url + 'brands/', {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "getLastB2bSubsidiary",
          value: function getLastB2bSubsidiary(subsidiary_id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            /**obteniendo las categorias de productos */

            return this.http.get(this.url + 'reports/subsidiary-last-b2b/?id_subsidiary=' + subsidiary_id, {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "getValidaMarcas",
          value: function getValidaMarcas(brand, multistore_id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            /**obteniendo las categorias de productos */

            return this.http.get(this.url + 'multistore-product-check/?brand=' + brand + '&multistore_id=' + multistore_id, {
              headers: headers
            }).toPromise();
          }
        }]);

        return B2bService;
      }();

      _B2bService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService
        }];
      };

      _B2bService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _B2bService);
      /***/
    },

    /***/
    47713:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/b2b-view-product/b2b-view-product.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiMmItdmlldy1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    42673:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/b2b-view-product/b2b-view-product.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n  Generated template for the B2bViewProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\" >\n      <ion-button  (click)=\"goBack()\" >\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{subsidiary?.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"background:#F5F5F5\" class=\"ion-padding\">\n\n\n  <div *ngIf=\"loading\" style=\"text-align:center\">\n\n    <h3 style=\"margin-block-start: 10em;text-align: center;color:#757575\">\n      Cargando productos...\n    </h3>\n\n    <ion-spinner name=\"bubbles\"></ion-spinner>\n\n  </div>\n\n  <div *ngIf=\"!loading\">\n\n\n\n\n\n    <div *ngIf=\"categorias_productos?.length==0\">\n      <h3 style=\"margin-block-start: 10em;text-align: center;color:#616161\">Sin productos para esta marca</h3>\n    </div>\n\n\n    <div *ngIf=\"categorias_productos?.length>0\">\n\n      <form [formGroup]=\"formGroupSearch\">\n        <ion-searchbar formControlName=\"search\" (click)=\"buscarProducto()\"></ion-searchbar>\n      </form>\n\n      <ion-list>\n        <ion-scroll scrollY=\"true\" style=\"height:100vh;\">\n\n          <div *ngIf=\"temporal_product_item!=null\">\n\n            <div *ngFor=\"let producto of temporal_product_item;let pro=index\">\n              <ion-item-sliding #item>\n                <ion-item [ngStyle]=\"{'background-color': producto?.color}\">\n                  <ion-avatar item-start style=\"margin-left:1em !important; margin-right:1em !important;\">\n                    <img [src]=\"producto?.product_photo\">\n                  </ion-avatar>\n                  <h3 style=\"color:#37474F\">{{producto?.product_description}}</h3>\n                  <p>SKU: {{producto?.idsku}}</p>\n                  <p>Codigo de barra: {{producto?.bar_code}}</p>\n                  <p>fecha ultimo b2b: {{parse_fecha_b2b(producto?.last_b2b)}} </p>\n                  <p>Ventas: {{producto?.sales}}</p>\n                  <p>Stock: {{producto?.stock}}</p>\n                  <p>Precio: {{producto?.value}}</p>\n                </ion-item>\n                <!-- <ion-item-options side=\"left\">\n                      <button ion-button (click)=\"favorite(item)\">Favorite</button>\n                      <button ion-button color=\"danger\" (click)=\"share(item)\">Share</button>\n                    </ion-item-options> -->\n\n                <!--<ion-item-options side=\"start\">\n                  <ion-button *ngIf=\"producto?.color==='#FCE4EC'\" ion-button\n                    (click)=\"registrarImagenLowStockFilter(producto)\">\n                    <ion-icon name=\"camera\"></ion-icon>\n                  </ion-button>\n                  <ion-button *ngIf=\"producto?.color==='#CCFF90'\" ion-button>\n                    <ion-icon name=\"checkmark\"></ion-icon>\n                  </ion-button>\n                </ion-item-options>-->\n              </ion-item-sliding>\n            </div>\n            <br />\n            <button ion-button block clear (click)=\"getCategoriaProductos()\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </button>\n \n\n          </div>\n\n          <div *ngIf=\"temporal_product_item==null\">\n\n            <div *ngFor=\"let categoria of categorias_productos;let cat_pro=index\">\n\n              <accordion>\n                <accordion-group [heading]=\"categoria?.category\" [isOpened]=\"false\">\n               \n                  <div *ngIf=\"categoria?.product?.length>0\">\n                    <div *ngFor=\"let producto of categoria.product;let pro=index\">\n  \n                      <ion-item-sliding #item>\n                        <ion-item [ngStyle]=\"{'background-color': producto?.color}\">\n                          <ion-avatar item-start style=\"margin-left:1em !important; margin-right:1em !important;\">\n                            <img [src]=\"producto?.product_photo\">\n                          </ion-avatar>\n                          <ion-label>\n                          <h3 style=\"color:#37474F\">{{producto?.product_description}}</h3>\n                          <p>SKU: {{producto?.idsku}}</p>\n                          <p>Codigo de barra: {{producto?.bar_code}}</p>\n                          <p>fecha ultimo b2b: {{parse_fecha_b2b(producto?.last_b2b)}}</p>\n                          <p>Ventas: {{producto?.sales}}</p>\n                          <p>Stock: {{producto?.stock}}</p>\n                          <p>Precio: {{producto?.value}}</p>\n                           </ion-label>\n                        </ion-item> \n                        <!-- <ion-item-options side=\"left\">\n                                        <button ion-button (click)=\"favorite(item)\">Favorite</button>\n                                        <button ion-button color=\"danger\" (click)=\"share(item)\">Share</button>\n                                      </ion-item-options> -->\n  \n                        <!--<ion-item-options side=\"start\">\n                          <ion-button *ngIf=\"producto?.color==='#FCE4EC'\" ion-button\n                            (click)=\"registrarImagenLowStock(producto,cat_pro,pro)\">\n                            <ion-icon name=\"camera\"></ion-icon>\n                          </ion-button>\n                          <ion-button *ngIf=\"producto?.color==='#CCFF90'\" ion-button>\n                            <ion-icon name=\"checkmark\"></ion-icon>\n                          </ion-button>\n                        </ion-item-options>-->\n                      </ion-item-sliding>\n  \n                      <!-- <ion-item>\n                                  <ion-avatar item-start style=\"margin-left:1em !important; margin-right:1em !important;\">\n                                    <img [src]=\"producto?.product_photo\">\n                                  </ion-avatar>\n                                  <!-- <h2>title</h2> -->\n                      <!-- <h3>{{producto?.product_description}}</h3>\n                                  <p>SKU: {{producto?.idsku}}</p>\n                                  <p>Codigo de barra: {{producto?.bar_code}}</p> -->\n                      <!-- <p>fecha ultimo b2b</p> -->\n                      <!-- <p>Ventas: {{producto?.sales}}</p>\n                                  <p>Stock: {{producto?.stock}}</p>\n                                  <p>Precio: {{producto?.value}}</p>\n                                </ion-item> -->\n                    </div>\n  \n                  </div>\n                  <div style=\"margin-left:auto !important; margin-right:auto !important\"\n                    *ngIf=\"categoria?.productos?.length==0\">\n                    <!-- <i class=\"material-icons\">\n                                remove_shopping_cart\n                              </i>\n                              <p>Sin productos para esta categoria</p> -->\n                  </div>\n                  <!-- <ion-item>\n                            <ion-avatar item-start>\n                              <img [src]=\"subsidiary?.all.picture_business\">\n                            </ion-avatar>\n                            <h2 style=\"color:#757575\">{{product?.sales}}</h2>\n                            <h3 style=\"color:#757575\">{{product?.stock}}</h3>\n                            <p style=\"color:#757575\">{{product?.idsku}}.</p>\n                      \n                          </ion-item> -->\n\n                </accordion-group>  \n\n\n\n              </accordion>\n\n\n\n\n            </div>\n\n\n\n\n\n\n\n\n\n          </div>\n\n        </ion-scroll>\n      </ion-list>\n\n    </div>\n\n  </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_b2b-view-product_b2b-view-product_page_ts-es5.js.map