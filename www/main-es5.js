(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          21053)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'b2b-view-product',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_b2b-view-product_b2b-view-product_page_ts"), __webpack_require__.e("src_app_pages_b2b-view-product_b2b-view-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/b2b-view-product/b2b-view-product.module */
          12930)).then(function (m) {
            return m.B2bViewProductPageModule;
          });
        }
      }, {
        path: 'background-consumer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_background-consumer_background-consumer_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/background-consumer/background-consumer.module */
          15696)).then(function (m) {
            return m.BackgroundConsumerPageModule;
          });
        }
      }, {
        path: 'be-to-be',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-src_app_pages_b2b-view-product_b2b-view-product_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_be-to-be_be-to-be_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/be-to-be/be-to-be.module */
          93575)).then(function (m) {
            return m.BeToBePageModule;
          });
        }
      }, {
        path: 'capacitacion',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_capacitacion_capacitacion_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/capacitacion/capacitacion.module */
          7409)).then(function (m) {
            return m.CapacitacionPageModule;
          });
        }
      }, {
        path: 'compose-tweet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_compose-tweet_compose-tweet_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/compose-tweet/compose-tweet.module */
          75550)).then(function (m) {
            return m.ComposeTweetPageModule;
          });
        }
      }, {
        path: 'concessions',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_concessions_concessions_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/concessions/concessions.module */
          94241)).then(function (m) {
            return m.ConcessionsPageModule;
          });
        }
      }, {
        path: 'connect-socket',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_connect-socket_connect-socket_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/connect-socket/connect-socket.module */
          16282)).then(function (m) {
            return m.ConnectSocketPageModule;
          });
        }
      }, {
        path: 'delivery-chip',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_delivery-chip_delivery-chip_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/delivery-chip/delivery-chip.module */
          27363)).then(function (m) {
            return m.DeliveryChipPageModule;
          });
        }
      }, {
        path: 'delivery-publish',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_delivery-publish_delivery-publish_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/delivery-publish/delivery-publish.module */
          82602)).then(function (m) {
            return m.DeliveryPublishPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/home/home.module */
          57994)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'img-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_img-modal_img-modal_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/img-modal/img-modal.module */
          93322)).then(function (m) {
            return m.ImgModalPageModule;
          });
        }
      }, {
        path: 'incidencias',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_incidencias_incidencias_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/incidencias/incidencias.module */
          44679)).then(function (m) {
            return m.IncidenciasPageModule;
          });
        }
      }, {
        path: 'incidents',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_incidents_incidents_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/incidents/incidents.module */
          2315)).then(function (m) {
            return m.IncidentsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          21053)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'manage-document',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_manage-document_manage-document_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/manage-document/manage-document.module */
          57537)).then(function (m) {
            return m.ManageDocumentPageModule;
          });
        }
      }, {
        path: 'metas',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_metas_metas_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/metas/metas.module */
          14669)).then(function (m) {
            return m.MetasPageModule;
          });
        }
      }, {
        path: 'modal-img-preview',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_modal-img-preview_modal-img-preview_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/modal-img-preview/modal-img-preview.module */
          57029)).then(function (m) {
            return m.ModalImgPreviewPageModule;
          });
        }
      }, {
        path: 'play-list-youtube',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_play-list-youtube_play-list-youtube_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/play-list-youtube/play-list-youtube.module */
          1632)).then(function (m) {
            return m.PlayListYoutubePageModule;
          });
        }
      }, {
        path: 'polls',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_polls_polls_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/polls/polls.module */
          29033)).then(function (m) {
            return m.PollsPageModule;
          });
        }
      }, {
        path: 'pop-over-menu-be2-be',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pop-over-menu-be2-be_pop-over-menu-be2-be_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/pop-over-menu-be2-be/pop-over-menu-be2-be.module */
          82301)).then(function (m) {
            return m.PopOverMenuBe2BePageModule;
          });
        }
      }, {
        path: 'pop-over-notificaciones',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_pop-over-notificaciones_pop-over-notificaciones_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/pop-over-notificaciones/pop-over-notificaciones.module */
          96553)).then(function (m) {
            return m.PopOverNotificacionesPageModule;
          });
        }
      }, {
        path: 'promociones',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_promociones_promociones_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/promociones/promociones.module */
          62788)).then(function (m) {
            return m.PromocionesPageModule;
          });
        }
      }, {
        path: 'public-view-facebook',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_public-view-facebook_public-view-facebook_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/public-view-facebook/public-view-facebook.module */
          43089)).then(function (m) {
            return m.PublicViewFacebookPageModule;
          });
        }
      }, {
        path: 'public-view-instagram',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_public-view-instagram_public-view-instagram_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/public-view-instagram/public-view-instagram.module */
          58771)).then(function (m) {
            return m.PublicViewInstagramPageModule;
          });
        }
      }, {
        path: 'report',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/report/report.module */
          81725)).then(function (m) {
            return m.ReportPageModule;
          });
        }
      }, {
        path: 'reset-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/reset-password/reset-password.module */
          38573)).then(function (m) {
            return m.ResetPasswordPageModule;
          });
        }
      }, {
        path: 'stores',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_stores_stores_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/stores/stores.module */
          57957)).then(function (m) {
            return m.StoresPageModule;
          });
        }
      }, {
        path: 'test-view-model',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_test-view-model_test-view-model_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/test-view-model/test-view-model.module */
          32938)).then(function (m) {
            return m.TestViewModelPageModule;
          });
        }
      }, {
        path: 'timeline',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/timeline/timeline.module */
          74447)).then(function (m) {
            return m.TimelinePageModule;
          });
        }
      }, {
        path: 'trainings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_trainings_trainings_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/trainings/trainings.module */
          37064)).then(function (m) {
            return m.TrainingsPageModule;
          });
        }
      }, {
        path: 'upload-youtube',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_upload-youtube_upload-youtube_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/upload-youtube/upload-youtube.module */
          8677)).then(function (m) {
            return m.UploadYoutubePageModule;
          });
        }
      }, {
        path: 'visits',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_visits_visits_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/visits/visits.module */
          65392)).then(function (m) {
            return m.VisitsPageModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/base-services.service */
      94000);
      /* harmony import */


      var _services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/comunicacion-component.service */
      8077);
      /* harmony import */


      var _services_user_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/user-services.service */
      24107);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _pages_home_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/home/home.page */
      10678);
      /* harmony import */


      var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/login/login.page */
      3058);
      /* harmony import */


      var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @capacitor/geolocation */
      61091);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, statusBar, auth, menu, _auth, _comun, router) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.statusBar = statusBar;
          this.auth = auth;
          this._auth = _auth;
          this._comun = _comun;
          this.router = router;
          this.Geolocation1 = null;
          this.menutwo = false;
          this.user = null; // this.storage.set('base_url', 'https://redamigos.herokuapp.com/');
          //this.storage.set('base_url', 'https://vm-icov-003.riosoft.cl/');

          this.setStorage('base_url', 'https://vm-icov-003.riosoft.cl/'); // this.storage.set('base_url', 'http://192.168.100.9:8001/');
          // this.storage.set('base_url', 'http://192.168.100.7:8000/');
          // this.storage.set('base_url', 'http://192.168.100.13:8000/');
          //this.storage.set('subsidiary', 'null');

          this.setStorage('subsidiary', 'null'); // this.storage.set('idSubsidiary', 'null');

          this.setStorage('idSubsidiary', 'null');
          this.get(); //this.ready();

          this.pages = [{
            title: 'Ventas o rutas',
            icon: "map",
            component: 'home'
          }, // { title: 'Punto de Venta', icon: 'locate', component: StoresPage },
          {
            title: 'Capacitación',
            icon: 'chatbubbles',
            component: 'capacitacion'
          }, // { title: 'Incidencias', icon: 'chatbubbles', component: IncidentsPage },
          //{ title: 'Metas',icon:'locate', component: StoresPage},
          // { title: 'Reportes', icon: 'list-box', component: ReportPage },
          {
            title: 'Incidencias',
            icon: "alert-circle",
            component: 'incidencias'
          }, {
            title: 'Metas',
            icon: 'medal',
            component: 'metas'
          } // { title: 'Reposiciones', icon: 'chatbubbles', component: VisitsPage }//,
          // { title: 'Visitas', icon: 'list-box', component: TestViewModelPage },
          // { title: 'BG socket', icon: 'locate', component: BackgroundConsumerPage },
          ];
          this.menu = menu; // firebase.initializeApp(ENV.firebase);

          _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_8__.Geolocation.getCurrentPosition().then(function (geo) {
            _this.Geolocation1 = {
              lat: geo.coords.latitude,
              lng: geo.coords.longitude
            };
          }, function (error) {
            console.log('error-ubicacion: ', error);
          });
          /**
           * get-data-user
           *
           */


          this._comun.itemComunicacion.subscribe(function (comunic) {
            if (comunic.name === 'update-data-user') {
              _this.getDataUser();
            }
          });

          if (this.auth.isLoggingIn()) {
            this.router.navigateByUrl('home');
          }
        }

        _createClass(AppComponent, [{
          key: "ready",
          value: function ready() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.platform.ready().then(function () {
                        // Okay, so the platform is ready and our plugins are available.
                        // Here you can do any higher level native things you might need.
                        _this2.statusBar.styleDefault(); // splashScreen.hide();


                        _this2.rootPage = _this2.auth.isLoggingIn() ? _pages_home_home_page__WEBPACK_IMPORTED_MODULE_6__.HomePage : _pages_login_login_page__WEBPACK_IMPORTED_MODULE_7__.LoginPage;
                      });

                    case 2:
                      console.log("hermosa"); // this.backgroundMode.enable();
                      // this.backgroundMode.excludeFromTaskList();
                      // this.backgroundMode.on('enable').subscribe(event=>{
                      //     console.log('backgroundmode enable: ',event);
                      // })
                      // this.backgroundMode.on('disable').subscribe(event=>{
                      //   console.log('backgroundmode disable: ',event);
                      // })
                      // this.backgroundMode.on('activate').subscribe(event=>{
                      //   console.log('backgroundmode activate: ',event);
                      //   this._comun.addItem({name:'notificacioneEnable',state:true});
                      // })
                      // this.backgroundMode.on('deactivate').subscribe(event=>{
                      //   console.log('backgroundmode deactivate: ',event);
                      //   this._comun.addItem({name:'notificacioneEnable',state:false});
                      // })
                      // this.backgroundMode.on('failure').subscribe(event=>{
                      //   console.log('backgroundmode failure: ',event);
                      // })

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "get",
          value: function get() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _yield$_capacitor_sto, value;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.get({
                        key: 'base_url'
                      });

                    case 2:
                      _yield$_capacitor_sto = _context2.sent;
                      value = _yield$_capacitor_sto.value;
                      console.log("url ", value);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "setStorage",
          value: function setStorage(k, v) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.set({
                        key: k,
                        value: v
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.menu.close();
            this.auth.logout(); //this.nav.push(LoginPage);

            this.router.navigateByUrl('login');

            _capacitor_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.clear();

            localStorage.clear();
          }
        }, {
          key: "openPage",
          value: function openPage(page) {
            // Reset the content nav to have just this page
            // we wouldn't want the back button to show in this scenario
            // this.nav.setRoot(page.component);
            this.router.navigateByUrl(page.component);
          }
        }, {
          key: "getDataUser",
          value: function getDataUser() {
            var _this3 = this;

            setTimeout(function () {
              var user_data = _this3._auth.getUser();

              _this3.user = user_data[0];
              console.log('user-data: ', user_data);
            }, 2000);
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar
        }, {
          type: _services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController
        }, {
          type: _services_user_services_service__WEBPACK_IMPORTED_MODULE_4__.UserServicesService
        }, {
          type: _services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_3__.ComunicacionComponentService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }];
      };

      _AppComponent.propDecorators = {
        nav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonNav]
        }]
      };
      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/fire */
      78744);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      17324);
      /* harmony import */


      var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/push/ngx */
      27774);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      70283);
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      92760);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/base64/ngx */
      31531);
      /* harmony import */


      var _ionic_native_instagram_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/instagram/ngx */
      78658);
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @agm/core */
      15971);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/components.module */
      45642);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-accordion */
      28362);
      /* harmony import */


      var ngx_accordion__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _hackages_ngxerrors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @hackages/ngxerrors */
      54616);
      /* harmony import */


      var _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @agm/markerclusterer */
      3445); //import ReconnectingWebSocket from 'reconnecting-websocket';
      //import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
      //import { SplashScreen } from '@ionic-native/splash-screen/ngx';


      var _AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_fire__WEBPACK_IMPORTED_MODULE_20__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase), _agm_core__WEBPACK_IMPORTED_MODULE_21__.AgmCoreModule.forRoot({
          apiKey: "AIzaSyBV_r5mWF8CnKWGmQAtnCgj0-zko1Mgjlc",
          libraries: ["places"]
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _components_components_module__WEBPACK_IMPORTED_MODULE_13__.ComponentsModule, _angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule, ngx_accordion__WEBPACK_IMPORTED_MODULE_14__.AccordionModule, _hackages_ngxerrors__WEBPACK_IMPORTED_MODULE_15__.NgxErrorsModule, _agm_markerclusterer__WEBPACK_IMPORTED_MODULE_25__.AgmMarkerClustererModule],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera, _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__.BarcodeScanner, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicRouteStrategy
        }, _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__.LocalNotifications, _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_4__.Push, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__.SocialSharing, //  ReconnectingWebSocket,
        _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__.SQLite, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__.InAppBrowser, _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_10__.Base64, _ionic_native_instagram_ngx__WEBPACK_IMPORTED_MODULE_11__.Instagram, _agm_core__WEBPACK_IMPORTED_MODULE_21__.AgmCoreModule, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__.StatusBar],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    45642:
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsModule": function ComponentsModule() {
          return (
            /* binding */
            _ComponentsModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./map/map.component */
      51006);
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @agm/core */
      15971);

      var _ComponentsModule = /*#__PURE__*/_createClass(function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      });

      _ComponentsModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _agm_core__WEBPACK_IMPORTED_MODULE_4__.AgmCoreModule],
        exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent]
      })], _ComponentsModule);
      /***/
    },

    /***/
    51006:
    /*!*************************************************!*\
      !*** ./src/app/components/map/map.component.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MapComponent": function MapComponent() {
          return (
            /* binding */
            _MapComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./map.component.html */
      37645);
      /* harmony import */


      var _map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./map.component.scss */
      62845);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/base-services.service */
      94000);
      /* harmony import */


      var src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/pos-services.service */
      73052);
      /* harmony import */


      var src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/twitter-conection-service.service */
      54793);
      /* harmony import */


      var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user-services.service */
      24107);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/geolocation */
      61091);

      var _MapComponent = /*#__PURE__*/function () {
        function MapComponent(navCtrl, pos, //private storage: Storage,
        toastCtrl, // private app: App,
        // public dataService: DatabaseService,
        base, auth, //private twitter: TwitterConnect,
        _twtitterConectionService, loadingCtrl, route) {
          _classCallCheck(this, MapComponent);

          this.navCtrl = navCtrl;
          this.pos = pos;
          this.toastCtrl = toastCtrl;
          this.base = base;
          this.auth = auth;
          this._twtitterConectionService = _twtitterConectionService;
          this.loadingCtrl = loadingCtrl;
          this.route = route;
          this.display_map = false;
          this.name = '';
          this.searchTerm = '';
          this.searching = false;
          this.dataDelivery = {};
          this.icon = {
            url: '../../../assets/imgs/store.png',
            scaledSize: {
              height: 80,
              width: 80
            }
          };
          this.iconMe = {
            url: '../../../assets/imgs/15-512.png',
            scaledSize: {
              height: 80,
              width: 80
            }
          };
          console.log("entrooo");
          this.setCurrentPosition(); // this.name = this.navParams.get('name');
          //this.storage.set('subsidiary', 'null');

          this.setStorage('subsidiary', 'null'); //this.storage.set('idSubsidiary', 'null');

          this.setStorage('idSubsidiary', 'null');
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
        }

        _createClass(MapComponent, [{
          key: "setStorage",
          value: function setStorage(k, v) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
                        key: k,
                        value: v
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "setStorageObjet",
          value: function setStorageObjet(k, v) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.set({
                        key: k,
                        value: JSON.stringify(v)
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showLoading",
          value: function showLoading() {
            this.loadinger = this.loadingCtrl.create({
              message: 'Please wait...'
            });
            this.loadinger.present();
          } // public loginWithTwitter() {
          //    this.showLoading();
          //   this.twitter.login().then((data:TwitterConnectResponse) => {
          //     console.log('twitterLoginData: ',data);
          //     this._twtitterConectionService.setTokens(data.token, data.secret);
          //      this.loadinger.dismiss().then(() => {
          //        this.navCtrl.setRoot('TimelinePage');
          //      });
          //   }, error => {
          //     console.log('twitter-error: ',error);
          //     // this.showError(error);
          //   });
          // }

        }, {
          key: "doRefresh",
          value: function doRefresh(refresher) {
            //console.log('Begin async operation', refresher);
            this.setCurrentPosition();
            /* setTimeout(() => {
               console.log('Async operation has ended');
               refresher.target.complete();
             }, 2000);*/
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log("holaaaa");
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            this.setCurrentPosition(); // this.name = this.navParams.get('name');

            this.searching = false;
          }
        }, {
          key: "loadGoogleMaps",
          value: function loadGoogleMaps() {
            var map = new google.maps.Map(document.getElementById('map'), {
              center: {
                lat: -34.397,
                lng: 150.644
              },
              zoom: 8
            });
          }
        }, {
          key: "setCurrentPosition",
          value: function setCurrentPosition() {
            var _this4 = this;

            console.log("actualizando");
            /*if ("geolocation" in navigator) {
              navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
                this.dataDelivery.user = this.base.getDataUser();
                this.Me = this.base.getDataUser();
                this.onData();
              });
                 }*/

            _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_7__.Geolocation.getCurrentPosition().then(function (position) {
              _this4.latitude = position.coords.latitude;
              _this4.longitude = position.coords.longitude;
              _this4.zoom = 15;
              _this4.dataDelivery.user = _this4.base.getDataUser();
              _this4.Me = _this4.base.getDataUser();

              _this4.onData();
            }, function (error) {
              console.log('error-ubicacion: ', error);
            });
          }
        }, {
          key: "onData",
          value: function onData() {
            var _this5 = this;

            this.markers = []; // let load = this.loadcrtl.create({ content: 'Recolectando información...' });
            // load.present();
            //this.pos.getNearPos(this.latitude, this.longitude).subscribe(

            this.pos.getNearPos(-33.618509, -70.705837).subscribe( //this.pos.getNearPos(-33.418531, -70.606429).subscribe(
            function (data) {
              var data_array = Object.keys(data);
              var data_length = data_array.length;
              console.log('get-subsidiary: ', data);

              if (data_length >= 15) {
                console.log('ddddd');
                _this5.display_map = false; //create list to diplay

                _this5.subsidiary_list = [];
                _this5.filtered_items = [];

                var _iterator = _createForOfIteratorHelper(data),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;
                    _this5.subsidiary_object = {
                      lat: item.latitude,
                      lng: item.longitude,
                      title: item.name_business,
                      id: item.id,
                      stock356: item.stock356,
                      stock374: item.stock374,
                      tasa356: item.tasa356,
                      tasa374: item.tasa374,
                      creacion: item.created_at,
                      all: item,
                      photo: item.multistore_photo.photo
                    };

                    _this5.subsidiary_list.push(_this5.subsidiary_object);

                    _this5.filtered_items.push(_this5.subsidiary_object);
                  } // Sort alphabetically the array of objects

                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this5.subsidiary_list.sort(function (a, b) {
                  var nameA = a.title.toLowerCase(),
                      nameB = b.title.toLowerCase();
                  if (nameA < nameB) //sort string ascending
                    return -1;
                  if (nameA > nameB) return 1;
                  return 0; //default return value (no sorting)
                });
              } else {
                console.log('entre');
                _this5.display_map = true; //create markers above map

                var _iterator2 = _createForOfIteratorHelper(data),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _item = _step2.value;
                    _this5.icon_dinamyc = {
                      url: '../../../assets/imgs/' + _item.tasa356 + '.png',
                      scaledSize: {
                        height: 50,
                        width: 30
                      }
                    };
                    console.log('map-subsiduary: ', _item);
                    console.log('item_idmultistore:', _item.id_multistore);
                    var pine_multistore = null;

                    if (_item.id_multistore == 5) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/ripleyverde.png';
                    }

                    if (_item.id_multistore == 2) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/santaisabelrojo.png';
                    }

                    if (_item.id_multistore == 3) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/jumboverde.png';
                    }

                    if (_item.id_multistore == 9) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/easyrojo.png';
                    }

                    if (_item.id_multistore == 7) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/liderverde.png';
                    }

                    if (_item.id_multistore == 6) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/tottusverde.png';
                    }

                    if (_item.id_multistore == 10) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/unimarcrojo.png';
                    }

                    if (_item.id_multistore == 12) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/sodimacrojo.png';
                    }

                    if (_item.id_multistore == 11) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/fallabellaverde.png';
                    }

                    console.log('pine_multistore_photo: ', pine_multistore);

                    _this5.markers.push({
                      lat: _item.latitude,
                      lng: _item.longitude,
                      title: _item.name_business,
                      id: _item.id,
                      tasa356: _item.tasa356,
                      creacion: _item.created_at,
                      icon: _this5.icon_dinamyc,
                      all: _item,
                      photo: pine_multistore
                    });

                    pine_multistore = null;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            }, function (error) {
              if (error == "Signature has expired.") {
                alert('Tu sesión ha expirado'); // this.app.getRootNav().setRoot(LoginPage, {}, { animate: true, direction: 'forward' });

                _this5.route.navigateByUrl('login');
              } else {
                if (error == 'Las credenciales de autenticación no se proveyeron.') {
                  _this5.refreshToken();
                }
              }
            });
          }
        }, {
          key: "markerClick",
          value: function markerClick(marker) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var value;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log('subsidiary', marker);
                      this.dataDelivery.subsidiary = marker.title; //this.storage.set('subsidiary', marker.title);
                      // this.storage.set('idSubsidiary', marker.id);
                      // this.storage.set('subsidiary', marker);
                      //this.setStorage('subsidiary',marker.title);

                      this.setStorage('idSubsidiary', marker.id);
                      this.setStorageObjet('subsidiary', marker);
                      _context6.next = 6;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.get({
                        key: 'subsidiary'
                      });

                    case 6:
                      value = _context6.sent;
                      console.log('objeto', JSON.parse(value.value));
                      /*
                          let toast = this.toastCtrl.create({
                            message: 'Se ha seleccionado: ' + marker.title,
                            duration: 1300
                          });
                          toast.present();*/
                      //this.navCtrl.push(BeToBePage);

                      this.route.navigateByUrl('be-to-be');

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "subsidiarySelected",
          value: function subsidiarySelected(subsidiaryId, subsidiaryTitle) {
            //this.storage.set('subsidiary', subsidiaryTitle);
            //this.storage.set('idSubsidiary', subsidiaryId);
            this.setStorage('subsidiary', subsidiaryTitle);
            this.setStorage('idSubsidiary', subsidiaryId);
            /*
                let toast = this.toastCtrl.create({
                  message: 'Se ha seleccionado: ' + subsidiaryTitle,
                  duration: 1300
                });
                toast.present();*/
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this6 = this;

            var oauthCredentials = {
              //Production
              client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
              client_id: 'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',
              // Testing
              //client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
              //client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
              grant_type: 'refresh_token',
              refresh_token: this.base.getDataRefreshToken()
            };
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams();
            params = params.append('grant_type', oauthCredentials.grant_type);
            params = params.append('client_id', oauthCredentials.client_id);
            params = params.append('client_secret', oauthCredentials.client_secret);
            params = params.append('refresh_token', oauthCredentials.refresh_token);
            this.auth.obtainToken(params).subscribe(function (data) {
              // console.log('se obtuvo refresh token');
              console.log(data);
              localStorage.setItem('token', data.access_token);
              localStorage.setItem('refresh_token', data.refresh_token);
            }, function (_err) {
              console.error('no refresh');
            }, function () {
              _this6.onData();
            });
          }
        }]);

        return MapComponent;
      }();

      _MapComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
        }, {
          type: src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_3__.PosServicesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
        }, {
          type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService
        }, {
          type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_5__.UserServicesService
        }, {
          type: src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_4__.TwitterConectionServiceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }];
      };

      _MapComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-map',
        template: _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_map_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MapComponent);
      /***/
    },

    /***/
    99770:
    /*!*******************************************************!*\
      !*** ./src/app/pages/concessions/concessions.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConcessionsPage": function ConcessionsPage() {
          return (
            /* binding */
            _ConcessionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_concessions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./concessions.page.html */
      93629);
      /* harmony import */


      var _concessions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./concessions.page.scss */
      11386);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/base-services.service */
      94000);
      /* harmony import */


      var src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/pos-services.service */
      73052);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);

      var _ConcessionsPage = /*#__PURE__*/function () {
        function ConcessionsPage(navCtrl, //private storage: Storage,
        pos, base, fb) {
          _classCallCheck(this, ConcessionsPage);

          this.navCtrl = navCtrl;
          this.pos = pos;
          this.base = base;
          this.form = fb.group({
            discount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])]
          });
        }

        _createClass(ConcessionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            /*this.storage.get('idSubsidiary').then((val) => {
              this.id_subsidiary = val;
              // console.log(val);
              if (this.id_subsidiary != 'null') {
                this.getConcessions();
              }
            });*/
            // console.log('tab');
            this.getidSub();
          }
        }, {
          key: "getidSub",
          value: function getidSub() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this7 = this;

              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.get({
                        key: 'idSubsidiary'
                      }).then(function (val) {
                        _this7.id_subsidiary = val.value;
                      }).then(function () {
                        if (_this7.id_subsidiary != 'null') {
                          _this7.getConcessions();
                        }
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "getConcessions",
          value: function getConcessions() {
            var _this8 = this;

            if (this.id_subsidiary != 'null') {
              this.pos.obtainConcessionsBackend(this.id_subsidiary).subscribe(function (data) {
                if (JSON.stringify(data).includes('{}')) {
                  _this8.total_concessions = '0';
                } else {
                  _this8.total_concessions = JSON.stringify(data);
                } // console.log('concesiones: ' + JSON.stringify(data));
                // console.log('conc'+Object.keys(data));
                // if  (Object.keys(data).length == 0) {
                // } else {
                // }

              }, function (error) {
                alert(error);
              }, function () {});
            } else {
              alert('No ha seleccionado una sucursal válida');
            }
          }
        }, {
          key: "charge_concession",
          value: function charge_concession() {
            var _this9 = this;

            var data = this.form.value;

            if (data.discount > this.total_concessions) {
              alert('Debe cobrar un máximo de: ' + this.total_concessions + ' concesiones.');
            } else {
              this.pos.updateConcessionsBackend(this.id_subsidiary, parseInt(data.discount)).subscribe(function (data) {
                // console.log('concesiones: ' + JSON.stringify(data));
                _this9.total_concessions = JSON.stringify(data);
                alert('Se ha cobrado la concesión'); //this.navCtrl.parent.select(0);
              }, function (error) {
                alert(error);
              }, function () {});
            }
          }
        }]);

        return ConcessionsPage;
      }();

      _ConcessionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_3__.PosServicesService
        }, {
          type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }];
      };

      _ConcessionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-concessions',
        template: _raw_loader_concessions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_concessions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ConcessionsPage);
      /***/
    },

    /***/
    26386:
    /*!***********************************************************!*\
      !*** ./src/app/pages/delivery-chip/delivery-chip.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryChipPage": function DeliveryChipPage() {
          return (
            /* binding */
            _DeliveryChipPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_delivery_chip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./delivery-chip.page.html */
      43289);
      /* harmony import */


      var _delivery_chip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./delivery-chip.page.scss */
      39578);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      92760);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/base-services.service */
      94000);
      /* harmony import */


      var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/delivery-services.service */
      68407);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _DeliveryChipPage = /*#__PURE__*/function () {
        function DeliveryChipPage(navCtrl, loadcrtl, barcodeScanner, deliveryServices, base, route, // private app: App,
        toastCtrl, storage) {
          _classCallCheck(this, DeliveryChipPage);

          this.navCtrl = navCtrl;
          this.loadcrtl = loadcrtl;
          this.barcodeScanner = barcodeScanner;
          this.deliveryServices = deliveryServices;
          this.base = base;
          this.route = route;
          this.toastCtrl = toastCtrl;
          this.storage = storage;
          this.name = '';
          this.title_subsidiary = '';
          this.id = '';
          this.consecion = false;
          this.modal = false;
          this.load = this.loadcrtl.create({
            message: 'Buscando GPS Espere un Momento...'
          });
          this.chip = {
            lccid: 0,
            idType: 1,
            text: 'Chip NO encontrado',
            user_created: this.base.getDataUser()
          };
          this.allBarcode = [];
          this.front_chips_array = [];
          this.chipStateObj = {};
          this.scanned_chip = {};
          this.cont = 0;
          this.id_subsidiary = this.base.getDataSubsidiary(); //this.id = this.navParams.get('id');
          // this.name = this.navParams.get('name');

          this.id = this.data.id;
          this.name = this.data.name;

          if (this.name == undefined) {} else {
            this.modal = true;
          }
        }

        _createClass(DeliveryChipPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            /* this.storage.get('idSubsidiary').then((val) => {
               this.id_subsidiary = val;
               // console.log(val);
             });
             this.storage.get('subsidiary').then((val) => {
               this.title_subsidiary = val;
             });*/
            this.getidSubsidiary();
            this.getsubsidiary();
          }
        }, {
          key: "getidSubsidiary",
          value: function getidSubsidiary() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _yield$_capacitor_sto2, value;

              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__.Storage.get({
                        key: 'idSubsidiary'
                      });

                    case 2:
                      _yield$_capacitor_sto2 = _context8.sent;
                      value = _yield$_capacitor_sto2.value;
                      this.id_subsidiary = value;

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getsubsidiary",
          value: function getsubsidiary() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _yield$_capacitor_sto3, value;

              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__.Storage.get({
                        key: 'subsidiary'
                      });

                    case 2:
                      _yield$_capacitor_sto3 = _context9.sent;
                      value = _yield$_capacitor_sto3.value;
                      this.title_subsidiary = value;

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "scanChips",
          value: function scanChips() {
            var _this10 = this;

            this.barcodeScanner.scan({
              torchOn: true
            }).then(function (barcodeData) {
              if (barcodeData.cancelled) {
                return false;
              } else {
                if (_this10.allBarcode.indexOf(barcodeData.text) === -1) {
                  _this10.allBarcode.push(barcodeData.text);

                  _this10.deliveryServices.getDeliveryChips(barcodeData.text).subscribe(function (data) {
                    if (data == '' || data == ' ') {
                      _this10.notFound(barcodeData.text);
                    } else {
                      _this10.saveDelivery(data[0].id, barcodeData.text);
                    }
                  }, function (err) {
                    _this10.notFound(barcodeData.text);
                  });
                } else if (_this10.allBarcode.indexOf(barcodeData.text) > -1) {
                  _this10.tostScan(barcodeData);
                }
              }
            })["catch"](function (err) {
              alert(err);
            });
          }
        }, {
          key: "tostScan",
          value: function tostScan(e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toastCtrl.create({
                        message: e.text + ' ya existe en Listado.',
                        duration: 2500
                      });

                    case 2:
                      toast = _context10.sent;
                      _context10.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "tostSave",
          value: function tostSave() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.toastCtrl.create({
                        message: 'El chip fue ingresado anteriormente',
                        duration: 2500
                      });

                    case 2:
                      toast = _context11.sent;
                      _context11.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "saveDelivery",
          value: function saveDelivery(idChip, barcodeTxt) {
            var _this11 = this;

            this.chipStateObj.user_created = this.base.getDataUser();
            this.chipStateObj.idChip = idChip;
            this.chipStateObj.consecion = this.consecion;

            if (this.id == undefined) {
              // this.chipStateObj.idSubsidiary = this.base.getDataSubsidiary(); Se modifica por SQLite Storage
              this.chipStateObj.idSubsidiary = this.id_subsidiary;
            } else {
              this.chipStateObj.idSubsidiary = this.id;
            }

            this.deliveryServices.postChipDelivery(this.chipStateObj).subscribe(function (rs) {
              _this11.scanned_chip = {
                code: barcodeTxt,
                icon: 'thumbs-up'
              };

              _this11.front_chips_array.push(_this11.scanned_chip);

              _this11.cont++;
            }, function (err) {
              console.error(err);
              /*let toast = this.toastCtrl.create({
                message: 'El chip fue ingresado anteriormente',
                duration: 2500
              });
              toast.present();*/

              _this11.tostSave();

              _this11.scanned_chip = {
                code: barcodeTxt,
                icon: 'thumbs-down'
              };

              _this11.front_chips_array.push(_this11.scanned_chip);
            });
          }
        }, {
          key: "tostFound",
          value: function tostFound(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
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
                      toast = _context12.sent;
                      _context12.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "notFound",
          value: function notFound(barcodeTxt) {
            var _this12 = this;

            this.chip.lccid = barcodeTxt;
            this.deliveryServices.postChip(this.chip).subscribe(function (res) {
              //no se puede llamar a this.saveDelivery() desde esta profundidad
              _this12.chipStateObj.user_created = _this12.base.getDataUser();
              _this12.chipStateObj.idChip = res.id;
              _this12.chipStateObj.consecion = _this12.consecion;

              if (_this12.id == undefined) {
                // this.chipStateObj.idSubsidiary = this.base.getDataSubsidiary(); Se modifica por SQLite Storage
                _this12.chipStateObj.idSubsidiary = _this12.id_subsidiary;
              } else {
                _this12.chipStateObj.idSubsidiary = _this12.id;
              }

              _this12.deliveryServices.postChipDelivery(_this12.chipStateObj).subscribe(function (rs) {
                /* let toast = this.toastCtrl.create({
                   message: 'Chip No encontrado, se guardará en la base de datos informando el estado',
                   showCloseButton: true,
                   closeButtonText: 'Ok'
                 });
                 toast.present();*/
                _this12.tostFound('Chip No encontrado, se guardará en la base de datos informando el estado');

                _this12.scanned_chip = {
                  code: barcodeTxt,
                  icon: 'thumbs-up'
                };

                _this12.front_chips_array.push(_this12.scanned_chip);

                _this12.cont++;
              }, function (err) {
                console.error(err);
                /*let toast = this.toastCtrl.create({
                  message: 'El chip fue ingresado anteriormente',
                  showCloseButton: true,
                  closeButtonText: 'Ok'
                });
                toast.present();*/

                _this12.tostFound('El chip fue ingresado anteriormente');

                _this12.scanned_chip = {
                  code: barcodeTxt,
                  icon: 'thumbs-down'
                };

                _this12.front_chips_array.push(_this12.scanned_chip);
              });
            }, function (er) {
              console.error(er);
              /* let toast = this.toastCtrl.create({
                 message: 'chip inválido',
                 showCloseButton: true,
                 closeButtonText: 'Ok'
               });
               toast.present();*/

              _this12.tostFound('chip inválido');

              _this12.scanned_chip = {
                code: barcodeTxt,
                icon: 'thumbs-down'
              };

              _this12.front_chips_array.push(_this12.scanned_chip);
            });
          }
        }, {
          key: "go_home",
          value: function go_home() {
            this.navCtrl.pop(); //this.app.getRootNavById().setRoot(HomePage);
            //this.navCtrl.navigateRoot(HomePage)

            this.route.navigateByUrl('home');
          }
        }]);

        return DeliveryChipPage;
      }();

      _DeliveryChipPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner
        }, {
          type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_4__.DeliveryServicesService
        }, {
          type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__.BaseServicesService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _capacitor_storage__WEBPACK_IMPORTED_MODULE_5__.Storage
        }];
      };

      _DeliveryChipPage.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
        }]
      };
      _DeliveryChipPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-delivery-chip',
        template: _raw_loader_delivery_chip_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_delivery_chip_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DeliveryChipPage);
      /***/
    },

    /***/
    93055:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/delivery-publish/delivery-publish.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryPublishPage": function DeliveryPublishPage() {
          return (
            /* binding */
            _DeliveryPublishPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_delivery_publish_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./delivery-publish.page.html */
      626);
      /* harmony import */


      var _delivery_publish_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./delivery-publish.page.scss */
      2089);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/base-services.service */
      94000);
      /* harmony import */


      var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/delivery-services.service */
      68407);
      /* harmony import */


      var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user-services.service */
      24107);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);

      var _DeliveryPublishPage = /*#__PURE__*/function () {
        function DeliveryPublishPage(navCtrl, camera, loadcrtl, base, deliveryPublish, // private storage:          Storage,
        toastCtrl, auth) {
          _classCallCheck(this, DeliveryPublishPage);

          this.navCtrl = navCtrl;
          this.camera = camera;
          this.loadcrtl = loadcrtl;
          this.base = base;
          this.deliveryPublish = deliveryPublish;
          this.toastCtrl = toastCtrl;
          this.auth = auth;
          this.allImages = [];
          this.modelDelivery = {};
          this.modelDelivery.photo = '';
          this.base64Image = '../../../assets/imgs/gondola.png';
          /*this.storage.get('idSubsidiary').then((val) => {
            this.id_subsidiary = val;
          });*/

          this.getidSub();
        }

        _createClass(DeliveryPublishPage, [{
          key: "getidSub",
          value: function getidSub() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              var _this13 = this;

              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_6__.Storage.get({
                        key: 'idSubsidiary'
                      }).then(function (val) {
                        _this13.id_subsidiary = val.value;
                      });

                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            /*this.storage.get('idSubsidiary').then((val) => {
              this.id_subsidiary = val;
            });*/
            this.getidSub();
          }
        }, {
          key: "openCamera",
          value: function openCamera() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var load, fotoCamara;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      console.log('abriendo la camara');

                      if (!(this.modelDelivery.nameDeliveryPublish == undefined || this.modelDelivery.nameDeliveryPublish.replace(/\s/g, '') == '')) {
                        _context14.next = 5;
                        break;
                      }

                      alert("Debe ingresar un nombre");
                      _context14.next = 10;
                      break;

                    case 5:
                      load = this.loadcrtl.create({
                        message: 'Validando Espere un Momento...'
                      });
                      _context14.next = 8;
                      return this.camera.getPicture({
                        // quality:            75,
                        // destinationType:    this.camera.DestinationType.DATA_URL,
                        // sourceType:         this.camera.PictureSourceType.CAMERA,
                        // allowEdit:          false,
                        // encodingType:       this.camera.EncodingType.JPEG,
                        // targetWidth:        300,
                        // targetHeight:       300,
                        // saveToPhotoAlbum:   false
                        quality: 100,
                        sourceType: this.camera.PictureSourceType.CAMERA,
                        saveToPhotoAlbum: false,
                        correctOrientation: true,
                        targetWidth: 200,
                        targetHeight: 200
                      });

                    case 8:
                      fotoCamara = _context14.sent;
                      console.log('fotoCamaraObtenida: ', fotoCamara); // .then(imageData => {
                      //   load.present();
                      //   this.base64Image          = "data:image/jpeg;base64," + imageData;
                      //   this.modelDelivery.photo  = this.base64Image;
                      //   let objTrade = {
                      //     img:  this.modelDelivery.photo,
                      //     name: this.modelDelivery.nameDeliveryPublish,
                      //   }
                      //   this.allImages.push(objTrade)
                      //   load.dismiss();
                      //   this.modelDelivery.nameDeliveryPublish = '';
                      // }, error => {
                      //   alert(error);
                      // });

                    case 10:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "tostPublish",
          value: function tostPublish(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
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
                      toast = _context15.sent;
                      _context15.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "sendDeliveryPublish",
          value: function sendDeliveryPublish() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var _this14 = this;

              var load, _loop, key;

              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.loadcrtl.create({
                        message: 'Validando Espere un Momento...'
                      });

                    case 2:
                      load = _context16.sent;
                      load.present();
                      this.modelDelivery.user_created = this.base.getDataUser();
                      this.modelDelivery.subsidiary = this.id_subsidiary;
                      this.modelDelivery.quantity = 1;

                      if (this.allImages.length == 0) {
                        load.dismiss();
                        /*let toast = this.toastCtrl.create({
                          message:          'Debe tomar una foto para poder continuar',
                          showCloseButton:  true,
                          closeButtonText:  'Ok'
                        });
                        toast.present();*/

                        this.tostPublish('Debe tomar una foto para poder continuar');
                      }

                      _loop = function _loop(key) {
                        _this14.modelDelivery.photo = _this14.allImages[key].img;
                        _this14.modelDelivery.description = _this14.allImages[key].name;

                        _this14.deliveryPublish.postDelivery(_this14.modelDelivery).subscribe(function (rs) {
                          if (_this14.allImages.length - 1 == parseInt(key)) {
                            /*let toast = this.toastCtrl.create({
                              message:          'Los datos fueron ingresados correctamente',
                              showCloseButton:  true,
                              closeButtonText:  'Ok'
                            });
                            toast.present();*/
                            _this14.tostPublish('Los datos fueron ingresados correctamente');
                          }

                          _this14.modelDelivery = {
                            nameDeliveryPublish: '',
                            quantity: 1
                          };
                          load.dismiss(); //this.navCtrl.parent.select(0);
                        }, function (er) {
                          load.dismiss();

                          if (er == 'Las credenciales de autenticación no se proveyeron.') {
                            _this14.refreshToken();
                          }
                        }); // End subscribe

                      };

                      for (key in this.allImages) {
                        _loop(key);
                      } // End For


                    case 10:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this15 = this;

            var oauthCredentials = {
              //Production
              client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
              client_id: 'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',
              // Testing
              // client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
              // client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
              grant_type: 'refresh_token',
              refresh_token: this.base.getDataRefreshToken()
            };
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams();
            params = params.append('grant_type', oauthCredentials.grant_type);
            params = params.append('client_id', oauthCredentials.client_id);
            params = params.append('client_secret', oauthCredentials.client_secret);
            params = params.append('refresh_token', oauthCredentials.refresh_token);
            this.auth.obtainToken(params).subscribe(function (data) {
              localStorage.setItem('token', data.access_token);
              localStorage.setItem('refresh_token', data.refresh_token);
            }, function (_err) {}, function () {
              _this15.sendDeliveryPublish();
            });
          }
        }]);

        return DeliveryPublishPage;
      }();

      _DeliveryPublishPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
        }, {
          type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_3__.BaseServicesService
        }, {
          type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_4__.DeliveryServicesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
        }, {
          type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_5__.UserServicesService
        }];
      };

      _DeliveryPublishPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-delivery-publish',
        template: _raw_loader_delivery_publish_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_delivery_publish_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DeliveryPublishPage);
      /***/
    },

    /***/
    10678:
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./home.page.html */
      78102);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      17603);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/base-services.service */
      94000);
      /* harmony import */


      var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/comunicacion-component.service */
      8077);
      /* harmony import */


      var src_app_services_local_notification_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local-notification-service.service */
      42134);
      /* harmony import */


      var src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/notificaciones.service */
      91319);
      /* harmony import */


      var src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/pos-services.service */
      73052);
      /* harmony import */


      var src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/socket-service.service */
      20905);
      /* harmony import */


      var src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/sqlite-service.service */
      61412);
      /* harmony import */


      var src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/twitter-conection-service.service */
      54793);
      /* harmony import */


      var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/user-services.service */
      24107);
      /* harmony import */


      var _concessions_concessions_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../concessions/concessions.page */
      99770);
      /* harmony import */


      var _delivery_chip_delivery_chip_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../delivery-chip/delivery-chip.page */
      26386);
      /* harmony import */


      var _delivery_publish_delivery_publish_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../delivery-publish/delivery-publish.page */
      93055);
      /* harmony import */


      var _polls_polls_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../polls/polls.page */
      59682);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @capacitor/geolocation */
      61091);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(navCtrl, alertController, _notificaciones, _user, _comun, _socket, _sqlite, popoverCtrl, _localNotification, route, menu, pos, //private storage: Storage,
        toastCtrl, // private app: App,
        // public dataService: DatabaseService,
        base, auth, //private twitter: TwitterConnect,
        _twtitterConectionService, loadingCtrl) {
          var _this16 = this;

          _classCallCheck(this, HomePage);

          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this._notificaciones = _notificaciones;
          this._user = _user;
          this._comun = _comun;
          this._socket = _socket;
          this._sqlite = _sqlite;
          this.popoverCtrl = popoverCtrl;
          this._localNotification = _localNotification;
          this.route = route;
          this.menu = menu;
          this.pos = pos;
          this.toastCtrl = toastCtrl;
          this.base = base;
          this.auth = auth;
          this._twtitterConectionService = _twtitterConectionService;
          this.loadingCtrl = loadingCtrl;
          this.tabChip = _delivery_chip_delivery_chip_page__WEBPACK_IMPORTED_MODULE_12__.DeliveryChipPage;
          this.tabPublish = _delivery_publish_delivery_publish_page__WEBPACK_IMPORTED_MODULE_13__.DeliveryPublishPage;
          this.tabConcession = _concessions_concessions_page__WEBPACK_IMPORTED_MODULE_11__.ConcessionsPage;
          this.tabPoll = _polls_polls_page__WEBPACK_IMPORTED_MODULE_14__.PollsPage; //name: string = '';

          this.param_from_home = {
            param: 'parametro'
          }; //dataDelivery: any;

          this.promocionArray = new Array();
          this.incidenciaArray = new Array();
          this.user = this._user.getUser();
          this.notificaciones = new Array();
          this.notificationOpenPageCount = 0;
          this.notificacionState = true;
          this.userData = null;
          this.displaymap = false;
          this.name = '';
          this.searchTerm = '';
          this.searching = false;

          try {
            var user_data_parse_json = localStorage.getItem('userData');
            var user_data_json_parse = JSON.parse(user_data_parse_json);
            this.userData = user_data_json_parse[0];
            console.log('userData-capacitación: ', this.userData);
          } catch (e) {}

          this._comun.itemComunicacion.subscribe(function (data) {
            _this16.notificationOpenPageCount = _this16.notificationOpenPageCount + 1;

            if (_this16.notificationOpenPageCount == 1) {
              if (data.name === 'openPage') {
                if (data.namePage === "capacitacion") {
                  // this.navCtrl.push(CapacitacionPage);
                  _this16.route.navigateByUrl('capacitacion');
                }

                if (data.namePage === "incidencias") {
                  // this.navCtrl.push(IncidenciasPage);
                  _this16.route.navigateByUrl('incidencias');
                }

                if (data.namePage === "promocion") {
                  // this.navCtrl.push(MetasPage);
                  _this16.route.navigateByUrl('promociones');
                }
              }
            }

            if (_this16.notificationOpenPageCount == 2) {
              _this16.notificationOpenPageCount = 0;
            }

            if (_this16.notificationOpenPageCount == 3) {
              _this16.notificationOpenPageCount = 0;
            }

            if (_this16.notificationOpenPageCount == 4) {
              _this16.notificationOpenPageCount = 0;
            }

            if (_this16.notificationOpenPageCount == 5) {
              _this16.notificationOpenPageCount = 0;
            }

            if (_this16.notificationOpenPageCount == 6) {
              _this16.notificationOpenPageCount = 0;
            }

            if (_this16.notificationOpenPageCount == 7) {
              _this16.notificationOpenPageCount = 0;
            }
          }); // this.getNotificaciones();
          // this.getPromocionesNoVisto();
          // this._comun.addItem({name:'update-data-user'});

          /* this._sqlite.initDB().then((db) => {
             this._sqlite.createTables(db);
           });*/
          //  this._socket.getNotificaciones().subscribe((notificacion) => {
          //    console.log('notificación-socket: ',notificacion);
          //     this.notificaciones.push(notificacion);
          //  })

          /*this._sqlite.getAllNotificacionesNoLeidos_PROMISE().then((todasNotificaciones: any) => {
            todasNotificaciones.forEach((notificacion) => {
              console.log('notificación-sqlite: ', notificacion);
              this.notificaciones.push(notificacion);
            });
          })*/


          this._comun.itemComunicacion.subscribe(function (event) {
            if (event.name === 'notificacioneEnable') {
              _this16.notificacionState = event.state;
            }
          });

          this._socket.getNotificaciones().subscribe(function (notificacion) {
            if (notificacion.event != undefined) {
              if (_this16.notificacionState == true) {
                if (_this16.userData.email === notificacion.recipient) {
                  _this16._localNotification.addNotification(notificacion);
                }
              }

              console.log('nueva-notificación-socket: ', notificacion.event);
              console.log('notificacion-recibida-reciente: ', notificacion);
              console.log('notificación-socket type of:', typeof notificacion);

              if (_this16.userData.email === notificacion.recipient) {
                _this16.notificaciones.push(notificacion);

                _this16._comun.addItem({
                  name: 'new-notification',
                  item: notificacion
                });
              }
            }
          }, function (error) {
            console.log('error-socket-nueva-notificacion: ', error);
          }); // this.getNotificaciones();
          // this.getPromocionesNoVisto();


          this._comun.addItem({
            name: 'update-data-user'
          });

          this.dataDelivery = {};
          this.icon = {
            url: '../../../assets/imgs/store.png',
            scaledSize: {
              height: 80,
              width: 80
            }
          };
          this.iconMe = {
            url: '../../../assets/imgs/15-512.png',
            scaledSize: {
              height: 80,
              width: 80
            }
          };
          console.log("entrooo");
          this.setCurrentPosition(); // this.name = this.navParams.get('name');
          //this.storage.set('subsidiary', 'null');

          this.setStorage('subsidiary', 'null'); //this.storage.set('idSubsidiary', 'null');

          this.setStorage('idSubsidiary', 'null');
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl();
        }

        _createClass(HomePage, [{
          key: "openCustom",
          value: function openCustom() {
            this.menu.enable(true, 'content');
            this.menu.open('content');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentPopoverNotificacion",
          value: function presentPopoverNotificacion() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var _this17 = this;

              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      // const popover = this.popoverCtrl.create(PopOverNotificacionesPage);
                      // await popover.present();
                      // setTimeout(() => {
                      //   this._comun.addItem({ name: 'lista-notificaciones', item: this.notificaciones });
                      // }, 1000);
                      //await this.navCtrl.push(PopOverNotificacionesPage);
                      this.route.navigateByUrl('pop-over-notificaciones');
                      setTimeout(function () {
                        _this17._comun.addItem({
                          name: 'lista-notificaciones',
                          item: _this17.notificaciones
                        });
                      }, 1000); //   this._comun.addItem({ name: 'lista-notificaciones', item: this.notificaciones });
                      // }, 1000);

                    case 2:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "getPromocionesNoVisto",
          value: function getPromocionesNoVisto() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var noVisto;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.prev = 0;
                      _context18.next = 3;
                      return this._notificaciones.getPromocionesUserNoVisto(this.user[0].email);

                    case 3:
                      noVisto = _context18.sent;
                      this.promocionArray = this.promocionArray.concat(noVisto);
                      _context18.next = 9;
                      break;

                    case 7:
                      _context18.prev = 7;
                      _context18.t0 = _context18["catch"](0);

                    case 9:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getNotificaciones",
          value: function getNotificaciones() {
            var _this18 = this;

            //this._notificaciones.getNotificacion() 
            this._notificaciones.promocionesComunicacion.subscribe(function (data) {
              if (data.event === 'promotion') {
                _this18.promocionArray.push(data);
              } else if (data.event === 'incidencia') {
                _this18.incidenciaArray.push(data);
              }
            });
          }
        }, {
          key: "openPromociones",
          value: function openPromociones() {
            // this.navCtrl.push(PromocionesPage, { notificationArray: this.promocionArray });
            //this.route.navigateByUrl('pop-over-notificaciones',{ notificationArray: this.promocionArray })
            this.route.navigateByUrl('promociones', {
              state: this.promocionArray
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log('home ionViewWillEnter');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            console.log('home ionViewDidEnter');
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            console.log('home ionViewWillLeave');
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            console.log('home ionViewDidLeave');
          }
        }, {
          key: "ionViewWillUnload",
          value: function ionViewWillUnload() {
            console.log('home ionViewWillUnload');
          }
        }, {
          key: "ionViewCanEnter",
          value: function ionViewCanEnter() {
            console.log('home ionViewCanEnter');
          }
        }, {
          key: "ionViewCanLeave",
          value: function ionViewCanLeave() {
            console.log('home ionViewCanLeave');
          } //metodos del mapa

        }, {
          key: "setStorage",
          value: function setStorage(k, v) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_15__.Storage.set({
                        key: k,
                        value: v
                      });

                    case 2:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            }));
          }
        }, {
          key: "setStorageObjet",
          value: function setStorageObjet(k, v) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_15__.Storage.set({
                        key: k,
                        value: JSON.stringify(v)
                      });

                    case 2:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }));
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            this.loadinger = this.loadingCtrl.create({
              message: 'Please wait...'
            });
            this.loadinger.present();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(refresher) {
            this.setCurrentPosition();
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            this.setCurrentPosition();
            this.searching = false;
          }
        }, {
          key: "loadGoogleMaps",
          value: function loadGoogleMaps() {
            var map = new google.maps.Map(document.getElementById('map'), {
              center: {
                lat: -34.397,
                lng: 150.644
              },
              zoom: 8
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        message: 'Cargando...'
                      });

                    case 2:
                      this.loading = _context21.sent;
                      _context21.next = 5;
                      return this.loading.present();

                    case 5:
                      //const { role, data } = await loading.onDidDismiss();
                      console.log('Loading dismissed!');

                    case 6:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "setCurrentPosition",
          value: function setCurrentPosition() {
            var _this19 = this;

            this.presentLoading();
            console.log("actualizando");
            /*if ("geolocation" in navigator) {
              navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
                this.dataDelivery.user = this.base.getDataUser();
                this.Me = this.base.getDataUser();
                this.onData();
              });
                 }*/

            _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_16__.Geolocation.getCurrentPosition().then(function (position) {
              console.log(position);
              _this19.latitude = position.coords.latitude;
              _this19.longitude = position.coords.longitude; // DPW

              _this19.latitude = -33.4403959;
              _this19.longitude = -70.6340178;
              _this19.zoom = 15;
              _this19.dataDelivery.user = _this19.base.getDataUser();
              _this19.Me = _this19.base.getDataUser();

              _this19.onData();
            }, function (error) {
              console.log('error-ubicacion: ', error);
              setTimeout(function () {
                this.loading.dismiss();
                this.presentAlertError('No se puede acceder a tu ubicación');
              }.bind(_this19), 4000);
            });
          }
        }, {
          key: "presentAlertError",
          value: function presentAlertError(msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              var alert, _yield$alert$onDidDis, role;

              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: msg,
                        buttons: ['Aceptar']
                      });

                    case 2:
                      alert = _context22.sent;
                      _context22.next = 5;
                      return alert.present();

                    case 5:
                      _context22.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context22.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "onData",
          value: function onData() {
            var _this20 = this;

            this.markers = []; // let load = this.loadcrtl.create({ content: 'Recolectando información...' });
            // load.present();

            this.pos.getNearPos(this.latitude, this.longitude).subscribe( //this.pos.getNearPos(-33.618509, -70.705837).subscribe(
            //this.pos.getNearPos(-33.418531, -70.606429).subscribe(
            function (data) {
              var data_array = Object.keys(data);
              console.log("data_array: " + data_array);
              var data_length = data_array.length;
              console.log('get-subsidiary: ', data);

              if (data_length >= 15) {
                console.log('ddddd');
                _this20.displaymap = false; //create list to diplay

                _this20.subsidiary_list = [];
                _this20.filtered_items = [];

                var _iterator3 = _createForOfIteratorHelper(data),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var item = _step3.value;
                    _this20.subsidiary_object = {
                      lat: item.latitude,
                      lng: item.longitude,
                      title: item.name_business,
                      id: item.id,
                      stock356: item.stock356,
                      stock374: item.stock374,
                      tasa356: item.tasa356,
                      tasa374: item.tasa374,
                      creacion: item.created_at,
                      all: item,
                      photo: item.multistore_photo.photo
                    };

                    _this20.subsidiary_list.push(_this20.subsidiary_object);

                    _this20.filtered_items.push(_this20.subsidiary_object);
                  } // Sort alphabetically the array of objects

                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                _this20.subsidiary_list.sort(function (a, b) {
                  var nameA = a.title.toLowerCase(),
                      nameB = b.title.toLowerCase();
                  if (nameA < nameB) //sort string ascending
                    return -1;
                  if (nameA > nameB) return 1;
                  return 0; //default return value (no sorting)
                });
              } else {
                console.log('entre');
                _this20.displaymap = true; //create markers above map

                var _iterator4 = _createForOfIteratorHelper(data),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _item2 = _step4.value;
                    _this20.icon_dinamyc = {
                      url: '../../../assets/imgs/' + _item2.tasa356 + '.png',
                      scaledSize: {
                        height: 50,
                        width: 30
                      }
                    };
                    console.log('map-subsiduary: ', _item2);
                    console.log('item_idmultistore:', _item2.id_multistore);
                    var pine_multistore = null;

                    if (_item2.id_multistore == 5) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/ripleyverde.png';
                    }

                    if (_item2.id_multistore == 2) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/santaisabelrojo.png';
                    }

                    if (_item2.id_multistore == 3) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/jumboverde.png';
                    }

                    if (_item2.id_multistore == 9) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/easyrojo.png';
                    }

                    if (_item2.id_multistore == 7) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/liderverde.png';
                    }

                    if (_item2.id_multistore == 6) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/tottusverde.png';
                    }

                    if (_item2.id_multistore == 10) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/unimarcrojo.png';
                    }

                    if (_item2.id_multistore == 12) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/sodimacrojo.png';
                    }

                    if (_item2.id_multistore == 11) {
                      pine_multistore = {
                        url: null,
                        scaledSize: {
                          height: 55,
                          width: 55
                        }
                      };
                      pine_multistore.url = '../../../assets/imgs/pines/fallabellaverde.png';
                    }

                    console.log('pine_multistore_photo: ', pine_multistore);

                    _this20.markers.push({
                      lat: _item2.latitude,
                      lng: _item2.longitude,
                      title: _item2.name_business,
                      id: _item2.id,
                      tasa356: _item2.tasa356,
                      creacion: _item2.created_at,
                      icon: _this20.icon_dinamyc,
                      all: _item2,
                      photo: pine_multistore
                    });

                    pine_multistore = null;
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }

              setTimeout(function () {
                this.loading.dismiss();
              }.bind(_this20), 4000);
            }, function (error) {
              console.log(error);
              setTimeout(function () {
                this.loading.dismiss();
              }.bind(_this20), 4000);

              if (error == "Signature has expired.") {
                alert('Tu sesión ha expirado'); // this.app.getRootNav().setRoot(LoginPage, {}, { animate: true, direction: 'forward' });

                _this20.route.navigateByUrl('login');
              } else {
                if (error == 'Las credenciales de autenticación no se proveyeron.') {
                  _this20.refreshToken();
                }
              }
            });
          }
        }, {
          key: "markerClick",
          value: function markerClick(marker) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              var value;
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      console.log('subsidiary marker', marker);
                      this.dataDelivery.subsidiary = marker.title; //this.storage.set('subsidiary', marker.title);
                      // this.storage.set('idSubsidiary', marker.id);
                      // this.storage.set('subsidiary', marker);
                      //this.setStorage('subsidiary',marker.title);

                      this.setStorage('idSubsidiary', marker.id);
                      this.setStorageObjet('subsidiary', marker);
                      _context23.next = 6;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_15__.Storage.get({
                        key: 'subsidiary'
                      });

                    case 6:
                      value = _context23.sent;
                      console.log('objeto click', JSON.parse(value.value));
                      /*
                          let toast = this.toastCtrl.create({
                            message: 'Se ha seleccionado: ' + marker.title,
                            duration: 1300
                          });
                          toast.present();*/
                      //this.navCtrl.push(BeToBePage);

                      this.route.navigateByUrl('be-to-be');

                    case 9:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "subsidiarySelected",
          value: function subsidiarySelected(subsidiaryId, subsidiaryTitle) {
            //this.storage.set('subsidiary', subsidiaryTitle);
            //this.storage.set('idSubsidiary', subsidiaryId);
            this.setStorage('subsidiary', subsidiaryTitle);
            this.setStorage('idSubsidiary', subsidiaryId);
            /*
                let toast = this.toastCtrl.create({
                  message: 'Se ha seleccionado: ' + subsidiaryTitle,
                  duration: 1300
                });
                toast.present();*/
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this21 = this;

            var oauthCredentials = {
              //Production
              client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
              client_id: 'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',
              // Testing
              //client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
              //client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
              grant_type: 'refresh_token',
              refresh_token: this.base.getDataRefreshToken()
            };
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpParams();
            params = params.append('grant_type', oauthCredentials.grant_type);
            params = params.append('client_id', oauthCredentials.client_id);
            params = params.append('client_secret', oauthCredentials.client_secret);
            params = params.append('refresh_token', oauthCredentials.refresh_token);
            this.auth.obtainToken(params).subscribe(function (data) {
              // console.log('se obtuvo refresh token');
              console.log(data);
              localStorage.setItem('token', data.access_token);
              localStorage.setItem('refresh_token', data.refresh_token);
            }, function (_err) {
              console.error('no refresh');
            }, function () {
              _this21.onData();
            });
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController
        }, {
          type: src_app_services_notificaciones_service__WEBPACK_IMPORTED_MODULE_5__.NotificacionesService
        }, {
          type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_10__.UserServicesService
        }, {
          type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_3__.ComunicacionComponentService
        }, {
          type: src_app_services_socket_service_service__WEBPACK_IMPORTED_MODULE_7__.SocketServiceService
        }, {
          type: src_app_services_sqlite_service_service__WEBPACK_IMPORTED_MODULE_8__.SqliteServiceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.PopoverController
        }, {
          type: src_app_services_local_notification_service_service__WEBPACK_IMPORTED_MODULE_4__.LocalNotificationServiceService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.MenuController
        }, {
          type: src_app_services_pos_services_service__WEBPACK_IMPORTED_MODULE_6__.PosServicesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ToastController
        }, {
          type: src_app_services_base_services_service__WEBPACK_IMPORTED_MODULE_2__.BaseServicesService
        }, {
          type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_10__.UserServicesService
        }, {
          type: src_app_services_twitter_conection_service_service__WEBPACK_IMPORTED_MODULE_9__.TwitterConectionServiceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.LoadingController
        }];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomePage);
      /***/
    },

    /***/
    3058:
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      31021);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      28781);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/comunicacion-component.service */
      8077);
      /* harmony import */


      var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user-services.service */
      24107);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(navCtrl, auth, menu, _comunic, route, alertController) {
          _classCallCheck(this, LoginPage);

          this.navCtrl = navCtrl;
          this.auth = auth;
          this.menu = menu;
          this._comunic = _comunic;
          this.route = route;
          this.alertController = alertController;
          this.modelAuth = {};
          this.islogged = false;
        } // End constructor


        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "singUp",
          value: function singUp() {
            this.obtain();
          }
        }, {
          key: "obtain",
          value: function obtain() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
              var _this22 = this;

              var oauthCredentials, params;
              return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      oauthCredentials = {
                        //Production
                        client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
                        client_id: 'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',
                        // Testing
                        // client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
                        // client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
                        username: this.modelAuth.email,
                        grant_type: 'password',
                        password: this.modelAuth.password
                      };
                      /* let oauthCredentials = {
                         //Production
                         client_secret: 'YBZ034UTCGYWG13s2rbPhTfLTpECejK0MLB4ktIgeQdPNAynnPGSDiO6DqxKdQRTEBefZqeJwpW5KGMjLyYSsUfQNu1viOuP82rHUYO56APL5wSGzM3tmB7E4o7eoeQS',
                         client_id:      'JLz7ABbliDYJcbvo1qep1cMw6H0EhBciV355XtHE',
                                 // Testing
                         // client_secret: 'FR2pnhtfXhJKVfKSKz4uNAC2NGKoVhUvS6liFMsT9lgMku1tQgyocVgV7uNv0AIkugaODdWFM6n32qb70ayX5Xd6lKqiJ7pP4u4pZ9PiPnjaDXqRjHPCjphi0g3i7Cpv',
                         // client_id:      'Wb2rpR9eewlcBObARcnEuTtbHdZHfsUbiCc0SWXh',
                         username: 'contacto@icov.cl',
                         grant_type: 'password',
                         password: 'F6a1p3c4'
                       }*/

                      params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams();
                      params = params.append('grant_type', oauthCredentials.grant_type);
                      params = params.append('client_id', oauthCredentials.client_id);
                      params = params.append('client_secret', oauthCredentials.client_secret);
                      params = params.append('username', oauthCredentials.username);
                      params = params.append('password', oauthCredentials.password);
                      this.auth.obtainToken(params).subscribe(function (data) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this22, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
                          return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                            while (1) {
                              switch (_context24.prev = _context24.next) {
                                case 0:
                                  localStorage.setItem('token', data.access_token);
                                  localStorage.setItem('refresh_token', data.refresh_token);
                                  localStorage.setItem('user', oauthCredentials.username); // Obtain latitude and longitude to user position

                                  if ("geolocation" in navigator) {
                                    navigator.geolocation.getCurrentPosition(function (position) {
                                      localStorage.setItem('longitude', position.coords.latitude.toString());
                                      localStorage.setItem('latitude', position.coords.longitude.toString());
                                    });
                                    this.auth.getDataUser(oauthCredentials.username).then(function (getUser) {
                                      localStorage.setItem('userData', JSON.stringify(getUser));
                                    });
                                    this.islogged = true; //this.navCtrl.setRoot(HomePage);

                                    this.route.navigateByUrl('home');
                                    this.menu.enable(true);

                                    this._comunic.addItem({
                                      name: 'update-data-user'
                                    });
                                  }

                                case 4:
                                case "end":
                                  return _context24.stop();
                              }
                            }
                          }, _callee24, this);
                        }));
                      }, function (_err) {
                        _this22.islogged = false;

                        _this22.presentAlert();
                      }); // console.log(this.modelAuth);

                    case 8:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
              var alert, _yield$alert$onDidDis2, role;

              return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        message: 'Credenciales inválidas',
                        buttons: ['Aceptar']
                      });

                    case 2:
                      alert = _context26.sent;
                      _context26.next = 5;
                      return alert.present();

                    case 5:
                      _context26.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis2 = _context26.sent;
                      role = _yield$alert$onDidDis2.role;

                    case 9:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            this.menu.enable(false);
          }
        }, {
          key: "recoverPassword",
          value: function recoverPassword() {
            // this.navCtrl.push(ResetPasswordPage);
            this.route.navigateByUrl('reset-password');
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__.UserServicesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
        }, {
          type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__.ComunicacionComponentService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    59682:
    /*!*******************************************!*\
      !*** ./src/app/pages/polls/polls.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PollsPage": function PollsPage() {
          return (
            /* binding */
            _PollsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_polls_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./polls.page.html */
      53005);
      /* harmony import */


      var _polls_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./polls.page.scss */
      2843);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_poll_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/poll-services.service */
      10799);
      /* harmony import */


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);

      var _PollsPage = /*#__PURE__*/function () {
        function PollsPage(navCtrl, // private storage:      Storage,
        pollService, toastCtrl) {
          _classCallCheck(this, PollsPage);

          this.navCtrl = navCtrl;
          this.pollService = pollService;
          this.toastCtrl = toastCtrl;
          this.id_subsidiary = 'null';
          this.items = [];
          this.checkbox_array = [];
        }

        _createClass(PollsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // console.log('entré');
            this.polls_list = [];
            /*this.storage.get('idSubsidiary').then((val) => {
              this.id_subsidiary = val;
            }).then(() => {
              if (this.id_subsidiary != 'null') {
                this.getPolls();
              }
            });*/

            this.getidSub();
          }
        }, {
          key: "getidSub",
          value: function getidSub() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
              var _this23 = this;

              return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({
                        key: 'idSubsidiary'
                      }).then(function (val) {
                        _this23.id_subsidiary = val.value;
                      }).then(function () {
                        if (_this23.id_subsidiary != 'null') {
                          _this23.getPolls();
                        }
                      });

                    case 2:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27);
            }));
          }
        }, {
          key: "getPolls",
          value: function getPolls() {
            var _this24 = this;

            // console.log('get polls load');
            this.polls_list = [];
            this.items = [];
            this.pollService.getCurrentPolls().subscribe(function (rs) {
              _this24.polls_list = rs;

              for (var i = 0; i < _this24.polls_list.length; i++) {
                var checked = false;

                _this24.items.push({
                  question: _this24.polls_list[i].description,
                  ischecked: checked,
                  question_id: _this24.polls_list[i].id
                });
              }
            }, function (er) {
              alert(er);
            });
          }
        }, {
          key: "answerPolls",
          value: function answerPolls() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
              var _iterator5, _step5, answer, responseObject, toast;

              return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _iterator5 = _createForOfIteratorHelper(this.items);

                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          answer = _step5.value;
                          responseObject = {
                            "poll_id": answer.question_id,
                            "subsidiary_id": this.id_subsidiary,
                            "answer": answer.ischecked,
                            "is_answer": true
                          };
                          this.pollService.responsePoll(responseObject).subscribe(function (rs) {
                            console.log('pregunta respondida');
                            console.log(rs);
                          }, function (er) {
                            alert(er);
                          });
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }

                      _context28.next = 4;
                      return this.toastCtrl.create({
                        message: 'La encuesta ha sido respondida con éxito',
                        duration: 2500
                      });

                    case 4:
                      toast = _context28.sent;
                      toast.present(); //this.navCtrl.parent.select(0);

                    case 6:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }]);

        return PollsPage;
      }();

      _PollsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: src_app_services_poll_services_service__WEBPACK_IMPORTED_MODULE_2__.PollServicesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }];
      };

      _PollsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-polls',
        template: _raw_loader_polls_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_polls_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PollsPage);
      /***/
    },

    /***/
    94000:
    /*!***************************************************!*\
      !*** ./src/app/services/base-services.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BaseServicesService": function BaseServicesService() {
          return (
            /* binding */
            _BaseServicesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      40205); //import 'rxjs/add/operator/catch'


      var _BaseServicesService = /*#__PURE__*/function () {
        function BaseServicesService(http) {
          _classCallCheck(this, BaseServicesService);

          this.http = http;
          this.url = '';
          this.url = 'https://vm-icov-003.riosoft.cl/api/v1/'; // this.url = 'http://192.168.100.9:8001/api/v1/';
        }
        /** procesamos la respuesta del api
          * @param {Response} response data from http request.
          */


        _createClass(BaseServicesService, [{
          key: "extractData",
          value: function extractData(res) {
            var body = res;
            return body || {};
          }
          /** procesamos la respuesta de Error
          * @param {any} Object data return.
          */

        }, {
          key: "handleError",
          value: function handleError(error) {
            console.log(error);
            var errMsg = error.message ? error.error.detail : error.status ? "".concat(error.status, " - non_field_errors") : 'Server error'; //return Observable.throw(errMsg);
            //return Observable.throw(error);

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(errMsg);
          }
          /** procesamos el logout de la app
          * @param {} delete all storage.
          */

        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('subsidiary');
          }
          /** Validamos si el Usuario está logueado
          * @param {} true logged,  false not logeed.
          */

        }, {
          key: "isLoggingIn",
          value: function isLoggingIn() {
            console.log(localStorage.getItem('token'));

            if (localStorage.getItem('token') === null) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "getDataToken",
          value: function getDataToken() {
            return localStorage.getItem('token');
          }
        }, {
          key: "getDataRefreshToken",
          value: function getDataRefreshToken() {
            return localStorage.getItem('refresh_token');
          }
        }, {
          key: "getDataSubsidiary",
          value: function getDataSubsidiary() {
            return localStorage.getItem('idSubsidiary');
          }
        }, {
          key: "getDataUser",
          value: function getDataUser() {
            return localStorage.getItem('user').toString();
          }
        }, {
          key: "getDataPositionLong",
          value: function getDataPositionLong() {
            return localStorage.getItem('longitude');
          }
        }, {
          key: "getDataPositionLat",
          value: function getDataPositionLat() {
            return localStorage.getItem('latitude');
          }
        }, {
          key: "getOldMessages",
          value: function getOldMessages() {
            var _this25 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.getDataToken());
            return this.http.get(this.url + 'messages/', {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (res) {
              return _this25.extractData;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
          }
        }]);

        return BaseServicesService;
      }();

      _BaseServicesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _BaseServicesService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _BaseServicesService);
      /***/
    },

    /***/
    8077:
    /*!************************************************************!*\
      !*** ./src/app/services/comunicacion-component.service.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComunicacionComponentService": function ComunicacionComponentService() {
          return (
            /* binding */
            _ComunicacionComponentService
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


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);

      var _ComunicacionComponentService = /*#__PURE__*/function () {
        function ComunicacionComponentService(http) {
          _classCallCheck(this, ComunicacionComponentService);

          this.http = http;
          this.comunicacion = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.itemComunicacion = this.comunicacion.asObservable();
          console.log('Hello ComunicacionComponentProvider Provider');
        }

        _createClass(ComunicacionComponentService, [{
          key: "addItem",
          value: function addItem(item) {
            this.comunicacion.next(item);
          }
        }]);

        return ComunicacionComponentService;
      }();

      _ComunicacionComponentService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _ComunicacionComponentService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _ComunicacionComponentService);
      /***/
    },

    /***/
    68407:
    /*!*******************************************************!*\
      !*** ./src/app/services/delivery-services.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeliveryServicesService": function DeliveryServicesService() {
          return (
            /* binding */
            _DeliveryServicesService
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
      5304); //import 'rxjs/add/operator/map';
      //import 'rxjs/add/operator/catch';
      //import { Storage } from '@ionic/storage';


      var _DeliveryServicesService = /*#__PURE__*/function () {
        // public url: string = 'http://192.168.100.9:8001/api/v1/';
        // public url: string = '';
        function DeliveryServicesService(http, base) {
          _classCallCheck(this, DeliveryServicesService);

          /*Storage.get('base_url').then((val) => {
            this.url = val+'api/v1/';
          });*/
          this.http = http;
          this.base = base; // public url: string = 'https://vm-icov-001.riosoft.cl/api/v1/';

          this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
          this.geturl();
        }

        _createClass(DeliveryServicesService, [{
          key: "geturl",
          value: function geturl() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
              var _yield$_capacitor_sto4, value;

              return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_1__.Storage.get({
                        key: 'base_url'
                      });

                    case 2:
                      _yield$_capacitor_sto4 = _context29.sent;
                      value = _yield$_capacitor_sto4.value;
                      console.log("url", value);
                      this.url = value + 'api/v1/';

                    case 6:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "postDelivery",
          value: function postDelivery(dataDelivery) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'publish/', dataDelivery, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "publishv2",
          value: function publishv2(dataDelivery) {
            console.log('data-delivery: ', dataDelivery);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            console.log(this.url + 'publishv2/', dataDelivery);
            return this.http.post(this.url + 'publishv2/', dataDelivery, {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "actualizaDatos",
          value: function actualizaDatos(dataDelivery) {
            /*
            actualiza datos en backend
            DPW
            */
            var url1 = "https://vm-icov-003.riosoft.cl/api/v1/subsidiary-stock/";
            console.log('envio-datos-dpw: ', dataDelivery);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            console.log(url1, dataDelivery);
            return this.http.post(url1, dataDelivery, {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "publishPhoto",
          value: function publishPhoto(data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'publish-photo/', data, {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "subsidiaryb2bmobileproducts",
          value: function subsidiaryb2bmobileproducts(id_subsidiary, brand_id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'reports/subsidiary-b2b-mobile-products/?brand_id=' + brand_id + '&id_subsidiary=' + id_subsidiary + '', {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "lowstockproduct",
          value: function lowstockproduct(data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'low-stock-product/', data, {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "getDeliveryChips",
          value: function getDeliveryChips(barCode) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'chip/?lccid=' + barCode, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "getStoresCatalog",
          value: function getStoresCatalog() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'stores', {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "getVisitsByUserDay",
          value: function getVisitsByUserDay(date) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'reports/visit-subsidiaryv5/?user_email=' + this.base.getDataUser() + '&day=' + date, {
              headers: headers
            }).pipe( // return this.http.get(this.url + 'reports/visit-subsidiaryv5/?user_email=contacto@icov.cl&day=2018-12-19', { headers: headers })
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "postChipDelivery",
          value: function postChipDelivery(chipStateObj) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'chipDelivery/', chipStateObj, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "postChip",
          value: function postChip(objChip) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'chip/', objChip, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "registerVisitSubsidiary",
          value: function registerVisitSubsidiary(objVisited) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'visit/', objVisited, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }]);

        return DeliveryServicesService;
      }();

      _DeliveryServicesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService
        }];
      };

      _DeliveryServicesService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _DeliveryServicesService);
      /***/
    },

    /***/
    42134:
    /*!****************************************************************!*\
      !*** ./src/app/services/local-notification-service.service.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocalNotificationServiceService": function LocalNotificationServiceService() {
          return (
            /* binding */
            _LocalNotificationServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      17324);
      /* harmony import */


      var _comunicacion_component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./comunicacion-component.service */
      8077); //import { LocalNotifications } from '@ionic-native/local-notifications';
      //import { NavController } from 'ionic-angular';
      //import { CapacitacionPage } from '../../pages/capacitacion/capacitacion';
      //import { IncidenciasPage } from '../../pages/incidencias/incidencias';
      //import { MetasPage } from '../../pages/metas/metas';
      //import { ComuniComponentProvider } from '../comuni-component/comuni-component';


      var _LocalNotificationServiceService = /*#__PURE__*/function () {
        function LocalNotificationServiceService(http, localNotifications, _comunic) {
          _classCallCheck(this, LocalNotificationServiceService);

          this.http = http;
          this.localNotifications = localNotifications;
          this._comunic = _comunic;
          this.userData = null;
          console.log('Hello LocalNotificationServiceProvider Provider');
        }

        _createClass(LocalNotificationServiceService, [{
          key: "addNotification",
          value: function addNotification(notificacion) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
              var _this26 = this;

              var user_data_parse_json, user_data_json_parse, all_notification, title;
              return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      console.log('notificacion-push: ', notificacion);
                      user_data_parse_json = localStorage.getItem('userData');
                      user_data_json_parse = JSON.parse(user_data_parse_json);
                      this.userData = user_data_json_parse[0];

                      if (!(this.userData.email === notificacion.user_created)) {
                        _context30.next = 7;
                        break;
                      }

                      _context30.next = 15;
                      break;

                    case 7:
                      _context30.next = 9;
                      return this.localNotifications.getAll();

                    case 9:
                      all_notification = _context30.sent;
                      console.log('get-all-notification: ', all_notification);
                      title = '';

                      if (notificacion.title != undefined) {
                        title = notificacion.title + ' ';
                      }

                      this.localNotifications.schedule({
                        id: all_notification.length,
                        title: title + '(' + notificacion.event + ')',
                        text: notificacion.message,
                        icon: 'https://firebasestorage.googleapis.com/v0/b/windweather-21549.appspot.com/o/trade-logo.png?alt=media&token=42a3c792-1884-4c4b-bb98-5385c0613437',
                        smallIcon: 'res://drawable/ic_launcher',
                        attachments: [notificacion.image],
                        actions: [],
                        data: notificacion // // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
                        // data: data

                      });
                      this.localNotifications.on('click').subscribe(function (notificacion_suscribe) {
                        if (notificacion_suscribe.data.event === 'capacitacion') {
                          _this26._comunic.addItem({
                            name: 'openPage',
                            namePage: 'capacitacion'
                          });
                        }

                        if (notificacion_suscribe.data.event === 'incidencias') {
                          _this26._comunic.addItem({
                            name: 'openPage',
                            namePage: 'incidencias'
                          });
                        }

                        if (notificacion_suscribe.data.event === 'promocion') {
                          _this26._comunic.addItem({
                            name: 'openPage',
                            namePage: 'promocion'
                          });
                        }

                        console.log('notificacion_suscribe: ', notificacion_suscribe);
                      });

                    case 15:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }]);

        return LocalNotificationServiceService;
      }();

      _LocalNotificationServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_0__.LocalNotifications
        }, {
          type: _comunicacion_component_service__WEBPACK_IMPORTED_MODULE_1__.ComunicacionComponentService
        }];
      };

      _LocalNotificationServiceService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _LocalNotificationServiceService);
      /***/
    },

    /***/
    91319:
    /*!****************************************************!*\
      !*** ./src/app/services/notificaciones.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificacionesService": function NotificacionesService() {
          return (
            /* binding */
            _NotificacionesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-services.service */
      94000);

      var _NotificacionesService = /*#__PURE__*/function () {
        function NotificacionesService(http, base) {
          _classCallCheck(this, NotificacionesService);

          this.http = http;
          this.base = base;
          this.comunicacion = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.promocionesComunicacion = this.comunicacion.asObservable();
          this.incidenciasComunicacion = this.comunicacion.asObservable(); // private receiver:  WebSocket = new WebSocket('ws://' + '192.168.100.9:8001' + '/promotions/');
          //  public url: string = 'http://192.168.100.9:8001/api/v1/';

          this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
          console.log('Hello NotificacionesProvider Provider'); // this.getNotificacion();
        } //  getNotificacion(){
        //     this.receiver.onmessage = (event) =>{ 
        //       console.log('event_socket: ',JSON.parse(event.data));
        //       this.addItem(JSON.parse(event.data));
        //     };
        //   }


        _createClass(NotificacionesService, [{
          key: "addItem",
          value: function addItem(data) {
            this.comunicacion.next(data);
          }
        }, {
          key: "getPromocionesUserNoVisto",
          value: function getPromocionesUserNoVisto(user) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
              var headers;
              return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      /**
                       * promociones no leidas
                       */
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
                      return _context31.abrupt("return", this.http.get(this.url + 'promotions-to-see/?id_user=' + user, {
                        headers: headers
                      }).toPromise());

                    case 2:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "getPromocionesUserVisto",
          value: function getPromocionesUserVisto(user) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
              var headers;
              return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      /**
                       * promociones leidas
                       */
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
                      return _context32.abrupt("return", this.http.get(this.url + 'promotions-seen/?id_user=' + user, {
                        headers: headers
                      }).toPromise());

                    case 2:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "getPromocionesUserAll",
          value: function getPromocionesUserAll(user) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
              var headers;
              return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
                      return _context33.abrupt("return", this.http.get(this.url + 'promotions-users/?id_user=' + user, {
                        headers: headers
                      }).toPromise());

                    case 2:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "getPromociones",
          value: function getPromociones() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
              var headers;
              return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      /**
                       * obtiene todas las promociones
                       */
                      headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
                      return _context34.abrupt("return", this.http.get(this.url + 'promotions/', {
                        headers: headers
                      }).toPromise());

                    case 2:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));
          }
        }, {
          key: "setMarcarComoLeidaPromociones",
          value: function setMarcarComoLeidaPromociones(data) {
            /**
             *  para marcar las promociones leidas
             */
            console.log('marcar-como-leido: ', data);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'promotions-users/', data, {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "setRegistrarPhoto",
          value: function setRegistrarPhoto(data, id) {
            /**
             *  para marcar las promociones leidas
             */
            console.log('marcar-como-leido-data: ', data);
            console.log('marcar-como-leido-id', id);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.patch(this.url + 'promotions-users/' + id + "/", data, {
              headers: headers
            }).toPromise();
          } //notificaciones
          //historial

        }, {
          key: "getHistorialCapacitation",
          value: function getHistorialCapacitation() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'capacitation/', {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "getHistorialIncidencias",
          value: function getHistorialIncidencias() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'incidencias/', {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "getHistorialPromotion",
          value: function getHistorialPromotion() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'promotions/', {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "getPromotionRead",
          value: function getPromotionRead(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'promotions-seen/?user=' + user, {
              headers: headers
            }).toPromise();
          } //post

        }, {
          key: "addCapacitation",
          value: function addCapacitation(capacitationChat) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'capacitation/', capacitationChat, {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "addIncidencias",
          value: function addIncidencias(incidenciaChat) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'incidencias/', incidenciaChat, {
              headers: headers
            }).toPromise();
          } //  addPromotion(){
          //   let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
          //   return this.http.post(this.url+'promotions-users/',data, { headers: headers }).toPromise();
          //  }

        }, {
          key: "postMarcarComoLeidaMeta",
          value: function postMarcarComoLeidaMeta(pathData) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'promotions-users/', pathData, {
              headers: headers
            }).toPromise();
          }
        }]);

        return NotificacionesService;
      }();

      _NotificacionesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService
        }];
      };

      _NotificacionesService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _NotificacionesService);
      /***/
    },

    /***/
    10799:
    /*!***************************************************!*\
      !*** ./src/app/services/poll-services.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PollServicesService": function PollServicesService() {
          return (
            /* binding */
            _PollServicesService
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


      var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/storage */
      96628);
      /* harmony import */


      var _base_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./base-services.service */
      94000);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      5304); //import 'rxjs/add/operator/map';
      //import 'rxjs/add/operator/catch';
      //import { Storage } from '@ionic/storage';


      var _PollServicesService = /*#__PURE__*/function () {
        // public url: string = 'http://192.168.100.9:8001/api/v1/';
        function PollServicesService(http, base, storage) {
          var _this27 = this;

          _classCallCheck(this, PollServicesService);

          this.http = http;
          this.base = base;
          this.storage = storage; // public url: string = '';
          // public url: string = 'https://vm-icov-001.riosoft.cl/api/v1/';

          this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
          this.storage.get('base_url').then(function (val) {
            _this27.url = val + 'api/v1/';
          });
        }

        _createClass(PollServicesService, [{
          key: "geturl",
          value: function geturl() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
              var _yield$_capacitor_sto5, value;

              return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.next = 2;
                      return _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({
                        key: 'base_url'
                      });

                    case 2:
                      _yield$_capacitor_sto5 = _context35.sent;
                      value = _yield$_capacitor_sto5.value;
                      this.url = value + 'api/v1/';

                    case 5:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
        }, {
          key: "getCurrentPolls",
          value: function getCurrentPolls() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'currentpolls/', {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }, {
          key: "responsePoll",
          value: function responsePoll(responseObject) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'pollresponse/', responseObject, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.base.handleError));
          }
        }]);

        return PollServicesService;
      }();

      _PollServicesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _base_services_service__WEBPACK_IMPORTED_MODULE_1__.BaseServicesService
        }, {
          type: _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage
        }];
      };

      _PollServicesService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _PollServicesService);
      /***/
    },

    /***/
    73052:
    /*!**************************************************!*\
      !*** ./src/app/services/pos-services.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PosServicesService": function PosServicesService() {
          return (
            /* binding */
            _PosServicesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304); //import { Storage } from '@ionic/storage';


      var _PosServicesService = /*#__PURE__*/function () {
        // public url: string = 'http://192.168.100.9:8001/api/v1/';
        // public url: string = 'http://192.168.100.7:8000/api/v1/';
        function PosServicesService(http, base) {
          _classCallCheck(this, PosServicesService);

          // this.storage.get('base_url').then((val) => {
          //   this.url = val + "api/v1/";
          // });
          this.http = http;
          this.base = base; // public url: string = '';

          this.url = 'https://vm-icov-003.riosoft.cl/api/v1/';
        }
        /** procesamos la respuesta de Error
        * @param {dataPos} <any> Save one Point of Sales.
        * Note: Subsidiary = POS
        */


        _createClass(PosServicesService, [{
          key: "postPos",
          value: function postPos(dataPos) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'subsidiary/?', dataPos, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
          }
          /** llamamos todas los puntos de venta que esten en un radio de 500 mts
          * @param {lat lng} <float> Lat = Latitude - Lng = Longitude .
          * Note: Subsidiary = POS
          */

        }, {
          key: "getNearPos",
          value: function getNearPos(lat, lng) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            console.log("URL1 = " + this.url + 'subsidiary/?lat=' + lat + '&lng=' + lng);
            return this.http.get(this.url + 'subsidiary/?lat=' + lat + '&lng=' + lng, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
          }
        }, {
          key: "obtainConcessionsBackend",
          value: function obtainConcessionsBackend(id_subsidiary) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'subsidiaryConsecion/' + id_subsidiary, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
          }
        }, {
          key: "get_categories",
          value: function get_categories() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'categories/', {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
          }
        }, {
          key: "updateConcessionsBackend",
          value: function updateConcessionsBackend(id_subsidiary, quantity_update) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            var form_data = {
              subsidiary_id: id_subsidiary,
              consecion_quantity_to_update: quantity_update
            };
            return this.http.post(this.url + 'subsidiaryConsecionUpdate/?', form_data, {
              headers: headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
          }
        }]);

        return PosServicesService;
      }();

      _PosServicesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService
        }];
      };

      _PosServicesService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _PosServicesService);
      /***/
    },

    /***/
    20905:
    /*!****************************************************!*\
      !*** ./src/app/services/socket-service.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocketServiceService": function SocketServiceService() {
          return (
            /* binding */
            _SocketServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! reconnecting-websocket */
      63323);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _sqlite_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sqlite-service.service */
      61412);

      var _SocketServiceService = /*#__PURE__*/function () {
        function SocketServiceService(http, _sqlite) {
          var _this28 = this;

          _classCallCheck(this, SocketServiceService);

          this.http = http;
          this._sqlite = _sqlite;
          this.notificacion = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          console.log('Hello SocketServiceProvider Provider');
          var options = {
            maxReconnectionDelay: 10000,
            minReconnectionDelay: 1000,
            reconnectionDelayGrowFactor: 1.3,
            connectionTimeout: 4000,
            maxRetries: 10,
            debug: false,
            transports: 'websocket'
          };
          this.connection = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__["default"]("wss:vm-icov-003.riosoft.cl/ws/chat/notifications/", [], options);
          this.connection.addEventListener('message', function (event) {
            var eventResive_parse = JSON.parse(event.data);
            console.log('notificación socket: ', eventResive_parse);

            _this28.notificacion.next(eventResive_parse);

            var data = {
              created_at: null,
              event: null,
              image: null,
              message: null,
              type: null,
              user_created: null,
              read: null,
              capacitation_id: null,
              incidencia_id: null,
              promotion_id: null,
              title: null
            };
            data = Object.assign(eventResive_parse);

            try {
              _this28._sqlite.addNotificacion(data).then(function (notificacion_insert) {
                console.log('notificacion_insert:', notificacion_insert);
              }, function (err) {
                console.log('notificacion_insert_error: ', err);
              });
            } catch (e) {
              console.log('addNotificacionCatch: ', e);
            }
          });
        }

        _createClass(SocketServiceService, [{
          key: "addNotificacionCapacitacion",
          value: function addNotificacionCapacitacion(notificacion_capacitation) {
            var options = {
              maxReconnectionDelay: 10000,
              minReconnectionDelay: 1000,
              reconnectionDelayGrowFactor: 1.3,
              connectionTimeout: 4000,
              maxRetries: 10,
              debug: false
            };
            this.capacitacionSend = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__["default"]("wss:vm-icov-003.riosoft.cl/ws/chat/capacitaciones_trade/", [], options);
            console.log('notificacion_capacitacion: ', notificacion_capacitation);
            this.capacitacionSend.send(JSON.stringify(notificacion_capacitation));
          }
        }, {
          key: "addNotificacionIncidencia",
          value: function addNotificacionIncidencia(notificacion_incidencia) {
            var options = {
              maxReconnectionDelay: 10000,
              minReconnectionDelay: 1000,
              reconnectionDelayGrowFactor: 1.3,
              connectionTimeout: 4000,
              maxRetries: 10,
              debug: false
            };
            this.incidenciasSend = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__["default"]("wss:vm-icov-003.riosoft.cl/ws/chat/incidencias_trade/", [], options);
            this.incidenciasSend.send(JSON.stringify(notificacion_incidencia));
          }
        }, {
          key: "getNotificaciones",
          value: function getNotificaciones() {
            return this.notificacion.asObservable();
          }
        }]);

        return SocketServiceService;
      }();

      _SocketServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _sqlite_service_service__WEBPACK_IMPORTED_MODULE_1__.SqliteServiceService
        }];
      };

      _SocketServiceService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _SocketServiceService);
      /***/
    },

    /***/
    61412:
    /*!****************************************************!*\
      !*** ./src/app/services/sqlite-service.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SqliteServiceService": function SqliteServiceService() {
          return (
            /* binding */
            _SqliteServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      70283);

      var _SqliteServiceService = /*#__PURE__*/function () {
        function SqliteServiceService(http, sqlite) {
          _classCallCheck(this, SqliteServiceService);

          this.http = http;
          this.sqlite = sqlite;
          console.log('Hello SqliteServiceProvider Provider');
        }

        _createClass(SqliteServiceService, [{
          key: "Database",
          get: function get() {
            return this.database;
          }
        }, {
          key: "initDB",
          value: function initDB() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
              var init_db;
              return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.next = 2;
                      return this.sqlite.create({
                        name: 'FdGhtXfGdf_gfd_DFddfDF.db',
                        location: 'default'
                      });

                    case 2:
                      init_db = _context36.sent;
                      return _context36.abrupt("return", init_db);

                    case 4:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));
          }
        }, {
          key: "createTables",
          value: function createTables(db) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
              return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      this.database = db;
                      _context37.prev = 1;
                      _context37.next = 4;
                      return this.database.executeSql("CREATE TABLE IF NOT EXISTS notificaciones (\n          id INTEGER PRIMARY KEY AUTOINCREMENT,\n          created_at TEXT,\n          event TEXT,\n          image TEXT,\n          message TEXT,\n          type TEXT,\n          user_created TEXT,\n          read INTEGER,\n          capacitation_id INTEGER,\n          incidencia_id INTEGER,\n          promotion_id INTEGER,\n          title TEXT\n        );", []);

                    case 4:
                      _context37.next = 9;
                      break;

                    case 6:
                      _context37.prev = 6;
                      _context37.t0 = _context37["catch"](1);
                      console.log('sqlite-createTable_error: ', _context37.t0);

                    case 9:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this, [[1, 6]]);
            }));
          }
        }, {
          key: "addNotificacion",
          value: function addNotificacion(dat_insert) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
              var data;
              return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      /**
                       *
                       *   `CREATE TABLE IF NOT EXISTS notificaciones (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            created_at TEXT,
                            event TEXT,
                            image TEXT,
                            message TEXT,
                            type TEXT,
                            user_created TEXT,
                            read INTEGER
                          );`
                       *
                       */
                      console.log('addNotificacion: ', dat_insert);
                      data = [dat_insert.created_at, dat_insert.event, dat_insert.image, dat_insert.message, dat_insert.type, dat_insert.user_created, dat_insert.read, dat_insert.capacitation_id, dat_insert.incidencia_id, dat_insert.promotion_id];
                      return _context38.abrupt("return", this.database.executeSql('INSERT INTO notificaciones (created_at, event, image, message, type, user_created, read, capacitation_id, incidencia_id, promotion_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', data));

                    case 3:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));
          }
        }, {
          key: "getAllNotificacionesNoLeidos_PROMISE",
          value: function getAllNotificacionesNoLeidos_PROMISE() {
            var _this29 = this;

            var query = 'SELECT * FROM notificaciones';
            return new Promise(function (resolve, reject) {
              _this29.database.executeSql(query, []).then(function (data) {
                var notificaciones = [];
                var contador = 0;

                if (data.rows.length > 0) {
                  for (var i = 0; i < data.rows.length; i++) {
                    if (data.rows.item(i).read == 0) {
                      notificaciones.push({
                        id: data.rows.item(i).id,
                        created_at: data.rows.item(i).created_at,
                        event: data.rows.item(i).event,
                        image: data.rows.item(i).image,
                        message: data.rows.item(i).message,
                        type: data.rows.item(i).type,
                        user_created: data.rows.item(i).user_created,
                        read: data.rows.item(i).read,
                        capacitation_id: data.rows.item(i).capacitation_id,
                        incidencia_id: data.rows.item(i).incidencia_id,
                        promotion_id: data.rows.item(i).promotion_id
                      });
                    }

                    contador = contador + 1;

                    if (contador == data.rows.length) {
                      resolve(notificaciones);
                    }
                  }
                } else {
                  resolve(notificaciones);
                }
              });
            });
          }
        }, {
          key: "buscarNotificacionCapacitationIdNoLeidos",
          value: function buscarNotificacionCapacitationIdNoLeidos(capacitado_id) {
            var _this30 = this;

            return new Promise(function (resolve, reject) {
              _this30.database.executeSql('SELECT * FROM notificaciones WHERE capacitation_id = ?', [capacitado_id]).then(function (data) {
                var notificaciones = [];
                var contador = 0;

                if (data.rows.length > 0) {
                  for (var i = 0; i < data.rows.length; i++) {
                    if (data.rows.item(i).read == 0) {
                      notificaciones.push({
                        id: data.rows.item(i).id,
                        created_at: data.rows.item(i).created_at,
                        event: data.rows.item(i).event,
                        image: data.rows.item(i).image,
                        message: data.rows.item(i).message,
                        type: data.rows.item(i).type,
                        user_created: data.rows.item(i).user_created,
                        read: data.rows.item(i).read,
                        capacitation_id: data.rows.item(i).capacitation_id,
                        incidencia_id: data.rows.item(i).incidencia_id,
                        promotion_id: data.rows.item(i).promotion_id
                      });
                    }

                    contador = contador + 1;

                    if (contador == data.rows.length) {
                      resolve(notificaciones);
                    }
                  }
                } else {
                  resolve(notificaciones);
                }
              });
            });
          }
        }, {
          key: "buscarNotificacionIncidenciaIdNoLeidos",
          value: function buscarNotificacionIncidenciaIdNoLeidos(incidencias_id) {
            var _this31 = this;

            return new Promise(function (resolve, reject) {
              _this31.database.executeSql('SELECT * FROM notificaciones WHERE incidencia_id = ?', [incidencias_id]).then(function (data) {
                var notificaciones = [];
                var contador = 0;

                if (data.rows.length > 0) {
                  for (var i = 0; i < data.rows.length; i++) {
                    if (data.rows.item(i).read == 0) {
                      notificaciones.push({
                        id: data.rows.item(i).id,
                        created_at: data.rows.item(i).created_at,
                        event: data.rows.item(i).event,
                        image: data.rows.item(i).image,
                        message: data.rows.item(i).message,
                        type: data.rows.item(i).type,
                        user_created: data.rows.item(i).user_created,
                        read: data.rows.item(i).read,
                        capacitation_id: data.rows.item(i).capacitation_id,
                        incidencia_id: data.rows.item(i).incidencia_id,
                        promotion_id: data.rows.item(i).promotion_id
                      });
                    }

                    contador = contador + 1;

                    if (contador == data.rows.length) {
                      resolve(notificaciones);
                    }
                  }
                } else {
                  resolve(notificaciones);
                }
              });
            });
          }
        }, {
          key: "buscarPromocionIdNoLeidos",
          value: function buscarPromocionIdNoLeidos(promotion_id) {
            var _this32 = this;

            return new Promise(function (resolve, reject) {
              _this32.database.executeSql('SELECT * FROM notificaciones WHERE promotion_id = ?', [promotion_id]).then(function (data) {
                var notificaciones = [];
                var contador = 0;

                if (data.rows.length > 0) {
                  for (var i = 0; i < data.rows.length; i++) {
                    if (data.rows.item(i).read == 0) {
                      notificaciones.push({
                        id: data.rows.item(i).id,
                        created_at: data.rows.item(i).created_at,
                        event: data.rows.item(i).event,
                        image: data.rows.item(i).image,
                        message: data.rows.item(i).message,
                        type: data.rows.item(i).type,
                        user_created: data.rows.item(i).user_created,
                        read: data.rows.item(i).read,
                        capacitation_id: data.rows.item(i).capacitation_id,
                        incidencia_id: data.rows.item(i).incidencia_id,
                        promotion_id: data.rows.item(i).promotion_id
                      });
                    }

                    contador = contador + 1;

                    if (contador == data.rows.length) {
                      resolve(notificaciones);
                    }
                  }
                } else {
                  resolve(notificaciones);
                }
              });
            });
          }
        }]);

        return SqliteServiceService;
      }();

      _SqliteServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite
        }];
      };

      _SqliteServiceService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _SqliteServiceService);
      /***/
    },

    /***/
    54793:
    /*!***************************************************************!*\
      !*** ./src/app/services/twitter-conection-service.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TwitterConectionServiceService": function TwitterConectionServiceService() {
          return (
            /* binding */
            _TwitterConectionServiceService
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
      91841); // import { TwitterService } from 'ng2-twitter';
      //import 'rxjs/add/operator/map';


      var _TwitterConectionServiceService = /*#__PURE__*/_createClass(function TwitterConectionServiceService(http) {
        _classCallCheck(this, TwitterConectionServiceService);

        this.http = http;
        this.token = null;
        this.tokenSecret = null;
        this.consumerKey = 'rJqsJUOZVwIEis57X1ruErwBT';
        this.consumerSecret = 'BWcYCYNP2NMuDiUSz8apqr2dNxA7FSKQy8SNGANiSWF2S6OaKc';
        console.log('Hello TwitterConectionServiceProvider Provider');
      });

      _TwitterConectionServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _TwitterConectionServiceService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _TwitterConectionServiceService);
      /***/
    },

    /***/
    24107:
    /*!***************************************************!*\
      !*** ./src/app/services/user-services.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserServicesService": function UserServicesService() {
          return (
            /* binding */
            _UserServicesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var _base_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base-services.service */
      94000);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);

      var _UserServicesService = /*#__PURE__*/function () {
        function UserServicesService(http, base) {
          _classCallCheck(this, UserServicesService);

          this.http = http;
          this.base = base;
          this.url = '';
          this.loggedIn = false; // this.storage.get('base_url').then((val) => {
          //   this.url = val;
          // });

          this.url = 'https://vm-icov-003.riosoft.cl/'; // this.url = 'http://192.168.100.9:8001/';
          // this.url = 'http://192.168.100.7:8000/';
          // this.url = 'http://192.168.100.13:8000/';
          //this.form = fb.group({
          //  email: ['', Validators.compose([Validators.required, Validators.email])],
          // }, );
        }

        _createClass(UserServicesService, [{
          key: "login",
          value: function login(userInfo) {
            var _this33 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json');
            var body = JSON.stringify(userInfo);
            return this.http.post(this.url + 'api-token-auth/', body, {
              headers: headers
            }).pipe( // aqui estraemos lod datos para procesarlos despues con angular
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (res) {
              if (res == "error" || res == "nofound") {
                _this33.loggedIn = false;
              } else {
                localStorage.setItem('token', res['token']);
                localStorage.setItem('user', userInfo.email); // Obtain latitude and longitude to user position

                if ("geolocation" in navigator) {
                  navigator.geolocation.getCurrentPosition(function (position) {
                    localStorage.setItem('longitude', position.coords.latitude.toString());
                    localStorage.setItem('latitude', position.coords.longitude.toString()); // console.log('latitud: '+ position.coords.longitude);
                  });
                }

                _this33.loggedIn = true;
              }

              return _this33.loggedIn;
            })); // en caso de algun problema aqui se extrael el mensaje
          }
        }, {
          key: "reset_password",
          value: function reset_password(email) {
            var url_reset = this.url;
            var body = email;
            return this.http.post(url_reset + 'password/reset/', body).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (errorResponse) {
              var errMsg;

              if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                // const err = errorResponse.message || JSON.stringify(errorResponse.error);
                errMsg = errorResponse.error; // errMsg = `${errorResponse.status} - ${errorResponse.statusText || ''} Details: ${err}`;
                // console.log('A',errorResponse.message);
                // console.log('B',errorResponse.error);
                // console.log('C',errorResponse.statusText);
              } else {
                errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
              }

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errMsg);
            }));
          }
        }, {
          key: "confirm_password",
          value: function confirm_password(form, uid, token) {
            var url_reset = this.url;
            return this.http.post(url_reset + 'password/reset/confirm/' + uid + '/' + token + '/', form).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (errorResponse) {
              var errMsg;

              if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
                errMsg = errorResponse.error;
              } else {
                errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
              }

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errMsg);
            }));
          }
        }, {
          key: "obtainToken",
          value: function obtainToken(params) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.post(this.url + 'o/token/', params).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.base.extractData), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.base.handleError));
          }
        }, {
          key: "getDataUser",
          value: function getDataUser(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.base.getDataToken());
            return this.http.get(this.url + 'api/v1/users/?email=' + user, {
              headers: headers
            }).toPromise();
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var user = localStorage.getItem('userData');
            var parseUser = JSON.parse(user);
            return parseUser;
          }
        }]);

        return UserServicesService;
      }();

      _UserServicesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _base_services_service__WEBPACK_IMPORTED_MODULE_0__.BaseServicesService
        }];
      };

      _UserServicesService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _UserServicesService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        // export const ENV = {
        //   production: false,
        //   firebase: {
        //     apiKey: "AIzaSyCWmZSKBJlWWAm0Mo0TQatmwyIlGq968T0",
        //     authDomain: "reparto-9bb51.firebaseapp.com",
        //     databaseURL: "https://reparto-9bb51.firebaseio.com",
        //     projectId: "reparto-9bb51",
        //     storageBucket: "",
        //     messagingSenderId: "717489812128"
        //   }
        // }
        production: false,
        firebase: {
          apiKey: "AIzaSyALT1Q9KuooFol_FgOKgxq89gzEfKog9Sw",
          authDomain: "arrobaredamigos.firebaseapp.com",
          databaseURL: "https://arrobaredamigos.firebaseio.com",
          projectId: "arrobaredamigos",
          storageBucket: "arrobaredamigos.appspot.com",
          messagingSenderId: "1051206126026"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [86030, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: transparent !important;\n}\n\nion-content {\n  --background: #fff url('173SugarLollipop.png') no-repeat center center / cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLG9DQUFBO0FBRVg7O0FBREE7RUFDSSw4RUFBQTtBQUlKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHsgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCcuLi9hc3NldHMvaW1ncy8xNzNTdWdhckxvbGxpcG9wLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    62845:
    /*!***************************************************!*\
      !*** ./src/app/components/map/map.component.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n\nagm-map {\n  height: 100%;\n}\n\n* {\n  font-family: Lato;\n}\n\n#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFEUjs7QUFPSTtFQUNFLFlBQUE7QUFKTjs7QUFRSTtFQUNFLGlCQUFBO0FBTE47O0FBUUk7RUFDRSxZQUFBO0FBTE4iLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICAuc3Bpbm5lci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gIFxuICAgIC8vIC5zZWFyY2hiYXIge1xuICAgIC8vICAgd2lkdGg6IDkwJVxuICAgIC8vIH1cbiAgICBhZ20tbWFwIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgIFxuICAgICoge1xuICAgICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgfVxuICBcbiAgICAjbWFwIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9ICBcbiBcbiAgIl19 */";
      /***/
    },

    /***/
    11386:
    /*!*********************************************************!*\
      !*** ./src/app/pages/concessions/concessions.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-concessions ion-card {\n  position: relative;\n  text-align: center;\n  margin-bottom: 3px;\n}\npage-concessions .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\npage-concessions .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n  margin-bottom: 3px;\n}\npage-concessions #homeContent {\n  text-align: center;\n}\npage-concessions #homeContent h1 {\n  font-size: 1.5em;\n  color: #337ab7;\n}\npage-concessions #homeContent p {\n  color: #FF6702;\n  font-size: 1.5em;\n}\npage-concessions .alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\npage-concessions .alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmNlc3Npb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZOO0FBS0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhOO0FBT0k7RUFDQSxrQkFBQTtBQUxKO0FBTUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFKUjtBQU1JO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBSlI7QUFTSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVVJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFSTiIsImZpbGUiOiJjb25jZXNzaW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWNvbmNlc3Npb25zIHtcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB9XG4gIFxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMzYlO1xuICAgICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIFxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUyJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIFxuICAgIH1cbiAgXG4gICAgI2hvbWVDb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogIzMzN2FiNztcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjRkY2NzAyO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbiAgXG4gICAgfVxuICBcbiAgICAuYWxlcnQge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIFxuICAgIC5hbGVydC1kYW5nZXIge1xuICAgICAgY29sb3I6ICNhOTQ0NDI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZWJjY2QxO1xuICB9XG4gIFxuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    39578:
    /*!*************************************************************!*\
      !*** ./src/app/pages/delivery-chip/delivery-chip.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-delivery-chip .information {\n  color: orange;\n}\npage-delivery-chip .subsidiaryToolbar {\n  color: #32db64;\n  text-align: center;\n  font-size: 4.5em;\n}\npage-delivery-chip #subsidiaryToolbarIcon {\n  font-size: 0.5em;\n}\npage-delivery-chip h2 {\n  color: orange;\n}\npage-delivery-chip .validate_subsidiary {\n  font-size: 0.5em;\n}\npage-delivery-chip .label {\n  margin: 0;\n}\npage-delivery-chip .item-inner {\n  padding-right: 0px !important;\n}\npage-delivery-chip .alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\npage-delivery-chip .alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.label {\n  margin: 0;\n}\nion-item.item.item-block.item-md {\n  padding-left: 1px !important;\n}\nion-item.item.item-block.item-ios {\n  padding-left: 1px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LWNoaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNFLGdCQUFBO0FBQU47QUFFSTtFQUNHLFNBQUE7QUFBUDtBQUdJO0VBQ0csNkJBQUE7QUFEUDtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUhOO0FBT0E7RUFDRyxTQUFBO0FBSkg7QUFPQTtFQUNHLDRCQUFBO0FBSkg7QUFNQTtFQUNHLDRCQUFBO0FBSEgiLCJmaWxlIjoiZGVsaXZlcnktY2hpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWRlbGl2ZXJ5LWNoaXAge1xuICAgIC5pbmZvcm1hdGlvbntcbiAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgIH1cbiAgICAuc3Vic2lkaWFyeVRvb2xiYXIge1xuICAgICAgICBjb2xvcjogIzMyZGI2NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIH1cbiAgICAjc3Vic2lkaWFyeVRvb2xiYXJJY29ue1xuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIH1cbiAgICBoMntcbiAgICAgICAgY29sb3I6b3JhbmdlO1xuICAgIH1cbiAgICAudmFsaWRhdGVfc3Vic2lkaWFyeXtcbiAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgfVxuICAgIC5sYWJlbCB7XG4gICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHghaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hbGVydCB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgIC5hbGVydC1kYW5nZXIge1xuICAgICAgY29sb3I6ICNhOTQ0NDI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZWJjY2QxO1xuICB9XG4gIFxufVxuLmxhYmVsIHtcbiAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWl0ZW0uaXRlbS5pdGVtLWJsb2NrLml0ZW0tbWQge1xuICAgcGFkZGluZy1sZWZ0OiAxcHghaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0uaXRlbS5pdGVtLWJsb2NrLml0ZW0taW9zIHtcbiAgIHBhZGRpbmctbGVmdDogMXB4IWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    2089:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/delivery-publish/delivery-publish.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-delivery-publish .subsidiaryToolbar {\n  color: #32db64;\n  text-align: center;\n  font-size: 4.5em;\n}\npage-delivery-publish #subsidiaryToolbarIcon {\n  font-size: 0.5em;\n}\npage-delivery-publish .round {\n  border-radius: 50%;\n  width: 60% !important;\n}\npage-delivery-publish .photoImgCont {\n  margin: 0 0 0 25%;\n}\npage-delivery-publish .validate_subsidiary {\n  font-size: 0.5em;\n}\npage-delivery-publish .alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\npage-delivery-publish .alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\npage-delivery-publish .center-container {\n  width: 100%;\n  text-align: center;\n}\npage-delivery-publish .card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\npage-delivery-publish .card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\npage-delivery-publish .card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LXB1Ymxpc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUFSO0FBRUk7RUFFQSxpQkFBQTtBQURKO0FBSUk7RUFDRSxnQkFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBSE47QUFNSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBSk47QUFPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUxKO0FBVUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBVE47QUFZSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVZOIiwiZmlsZSI6ImRlbGl2ZXJ5LXB1Ymxpc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1kZWxpdmVyeS1wdWJsaXNoIHtcbiAgICAuc3Vic2lkaWFyeVRvb2xiYXIge1xuICAgICAgICBjb2xvcjogIzMyZGI2NDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIH1cbiAgICAjc3Vic2lkaWFyeVRvb2xiYXJJY29ue1xuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgIH1cbiAgICAucm91bmR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6NjAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAucGhvdG9JbWdDb250e1xuXG4gICAgbWFyZ2luOiAwIDAgMCAyNSUgO1xuICAgIH1cblxuICAgIC52YWxpZGF0ZV9zdWJzaWRpYXJ5e1xuICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICB9XG5cbiAgICAuYWxlcnQge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAuYWxlcnQtZGFuZ2VyIHtcbiAgICAgIGNvbG9yOiAjYTk0NDQyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcbiAgfVxuXG4gIC5jZW50ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgfVxuXG4gIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNiU7XG4gICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUyJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gIH1cblxufSJdfQ== */";
      /***/
    },

    /***/
    17603:
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-home agm-map {\n  height: 100%;\n}\n\n.spinner-container {\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n}\n\nagm-map {\n  height: 100%;\n}\n\n* {\n  font-family: Lato;\n}\n\n#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQUFSOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURGOztBQU9BO0VBQ0EsWUFBQTtBQUpBOztBQVFBO0VBQ0EsaUJBQUE7QUFMQTs7QUFRQTtFQUNBLFlBQUE7QUFMQSIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtaG9tZSB7XG4gICAgYWdtLW1hcCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbn1cblxuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4vLyAuc2VhcmNoYmFyIHtcbi8vICAgd2lkdGg6IDkwJVxuLy8gfVxuYWdtLW1hcCB7XG5oZWlnaHQ6IDEwMCU7XG59XG5cblxuKiB7XG5mb250LWZhbWlseTogTGF0bztcbn1cblxuI21hcCB7XG5oZWlnaHQ6IDEwMCU7XG59ICBcblxuIl19 */";
      /***/
    },

    /***/
    28781:
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#loginCont {\n  text-align: center;\n}\n#loginCont img {\n  height: 170px;\n  width: 170px;\n}\n#loginCont button {\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\n#loginCont a {\n  margin: 8px;\n  text-decoration: none;\n}\n#loginCont p {\n  color: #337ab7;\n  margin: 8px;\n}\n#loginCont label {\n  display: block;\n}\n#loginCont #hereSpan {\n  color: #FF6702;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLGtCQUFBO0FBSEo7QUFJSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQVNJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBUFI7QUFTSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBUFI7QUFVSTtFQUNJLGNBQUE7QUFSUjtBQVVJO0VBQ0ksY0FBQTtBQVJSIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtbG9naW4ge1xuXG59XG4jbG9naW5Db250IHtcbiAgICAvLyBiYWNrZ3JvdW5kOiBjb2xvcigkY29sb3JzLCBwcmltYXJ5KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgLy8gZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICMzMzdhYjc7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuXG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgICNoZXJlU3BhbiB7XG4gICAgICAgIGNvbG9yOiAjRkY2NzAyO1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    2843:
    /*!*********************************************!*\
      !*** ./src/app/pages/polls/polls.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "page-polls .alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\npage-polls .alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUlJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFGTiIsImZpbGUiOiJwb2xscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXBvbGxzIHtcblxuICAgIC5hbGVydCB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgXG4gICAgLmFsZXJ0LWRhbmdlciB7XG4gICAgICBjb2xvcjogI2E5NDQ0MjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmRlZGU7XG4gICAgICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG4gICAgfVxuICBcbiAgfVxuICAiXX0= */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n<ion-menu no-border  menuId=\"custom\" contentId=\"main\" swipeGesture=\"false\"\n  style=\"background: #4e7a89;\nbackground: linear-gradient(to bottom right, #2e3441 30%, #4e7a89 100%);overflow-x:hidden; overflow-y:hidden; overflow-x: hidden\">\n <ion-content>\n  <ion-list style=\"background:transparent !important\" >\n    <ion-item  style=\"color:rgb(255, 255, 255);margin-bottom: 2em;\" lines=\"none\">\n      <ion-avatar item-start style=\"margin-right: 1em;\">\n        <img [src]=\"user?.photo\">\n      </ion-avatar>\n      <ion-label>\n        <h2 style=\"color:rgb(255, 255, 255) !important\">{{user?.first_name }} {{user?.last_name}}</h2>\n        <p style=\"color:rgb(255, 255, 255)\">{{user?.email}}</p>\n        <p style=\"color:rgb(255, 255, 255)\">{{user?.phone}}</p>\n      </ion-label>      \n    </ion-item>\n    \n   <!-- <ion-item style=\"background:transparent !important\">\n      <button  style=\"background:transparent !important;color:rgb(255, 255, 255)\" *ngIf=\"!menutwo\" (click)=\"menutwo=true\" ion-button clear icon-only item-end\n        icon-end>\n        \n\n      </button>\n      <button  style=\"background:transparent !important;color:rgb(255, 255, 255)\" *ngIf=\"menutwo\" (click)=\"menutwo=false\" ion-button clear icon-only item-end\n        icon-end>\n        <ion-icon name=\"arrow-dropup\"></ion-icon>\n\n      </button>\n    </ion-item>-->\n    <ion-menu-toggle auto-hide=\"true\" *ngFor=\"let p of pages\" >\n    <ion-item  >\n      <ion-avatar slot=\"start\" style=\"margin: 8px 16px 0px 0px;\">\n        <ion-icon style=\"color:rgb(255, 255, 255);font-size: 140%;\n        height: 80%;\" [name]=\"p.icon\" ></ion-icon>\n      </ion-avatar>\n      <button style=\"background:transparent !important\" menuClose ion-item (click)=\"openPage(p)\" >\n        <p style=\"color:rgb(255, 255, 255)\"> {{p.title}} </p>\n      </button>\n    </ion-item>\n    </ion-menu-toggle>\n\n    <ion-item style=\"margin-top: 30px;\">\n      <ion-avatar slot=\"start\" style=\"margin: 8px 16px 0px 0px;\">\n        <ion-icon style=\"color:rgb(255, 255, 255);font-size: 140%;\n        height: 80%;\" name=\"log-out\" ></ion-icon>\n      </ion-avatar>\n      <button  style=\"background:transparent !important\" menuClose ion-item (click)=\"logout()\">\n        <p style=\"color:rgb(255, 255, 255)\">Cerrar sesión</p>\n    \n      </button>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n  \n</ion-menu>\n\n<ion-nav [root]=\"rootPage\" #content swipeBackEnabled=\"false\"></ion-nav>\n\n\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n\n\n";
      /***/
    },

    /***/
    37645:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <!-- <button ion-button clear item-end icon-start small (click)=\"loginWithTwitter()\">\n    <ion-icon name=\"logo-twitter\"></ion-icon>\n</button> -->\n\n    <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" pullMin=\"100\" pullMax=\"200\">\n        <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refrescando...\">\n    </ion-refresher-content>\n      </ion-refresher>-->\n     \n      <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button (click)=\"doRefresh($event)\" color='violet'>\n          <ion-icon name=\"reload-outline\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n\n  <agm-map *ngIf=\"display_map\" [latitude]=\"latitude\" [longitude]=\"longitude\" [mapDraggable]=\"true\" [scrollwheel]=\"true\" [zoom]=\"zoom\" >\n   <!-- <agm-map *ngIf=\"display_map\" [latitude]=\"51.678418\" [longitude]=\"7.809007\" [mapDraggable]=\"true\" [scrollwheel]=\"true\" [zoom]=\"zoom\" >-->\n    <agm-marker-cluster *ngFor=\"let marker of markers\" imagePath=\"../../../assets/imgs/storea.png\">\n      <!-- <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconMe\"> -->\n      <agm-marker>\n          <agm-info-window>\n            <!-- <strong>{{ Me }}</strong> -->\n          </agm-info-window>\n        </agm-marker>\n      <!-- <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"icon\" (markerClick)=\"markerClick(marker)\"> -->\n      <!-- <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"'assets/imgs/'+marker.tasa356+'.png'\" (markerClick)=\"markerClick(marker)\"> -->\n      <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"marker.photo\" (markerClick)=\"markerClick(marker)\">\n        <agm-info-window>\n          <strong>{{marker.title }}</strong>\n        </agm-info-window>\n      </agm-marker>\n    </agm-marker-cluster>\n  </agm-map>\n\n\n \n\n  <!-- <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"Buscar\" [formControl]=\"searchControl\" class=\"searchbar\"></ion-searchbar> -->\n\n  <!-- <div class=\"row\">\n    <ion-input type=\"text\" [(ngModel)]=\"searchTerm\" placeholder=\"Buscar\" [formControl]=\"searchControl\" class=\"searchbar\"></ion-input>\n    <button ion-button round style=\"top: 7px;\">X</button>\n  </div> -->\n\n\n    <!-- aqui va el mapa -->\n\n   \n\n\n    <ion-list *ngIf=\"subsidiary_list\">\n      <!-- <ion-list-header>\n        Puntos de venta cercanos:\n      </ion-list-header> -->\n\n        <button ion-item *ngFor=\"let item of filtered_items\" (click)=\"subsidiarySelected(item.id, item.title)\">\n          <!-- {{ item.title }}  <span item-end>{{item.tasa356}}</span> -->\n          {{ item.title }}  <span item-end> <img src=\"../../../assets/imgs/{{item.tasa356}}.png\" alt=\"\" width=\"20px\"> </span>\n        </button>\n    </ion-list>\n\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    93629:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/concessions/concessions.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding>\n\n  <ng-template\n    *ngIf=\"id_subsidiary == 'null' || id_subsidiary == undefined ;then showBlock; else notShowBlock\">\n  </ng-template>\n\n  <ng-template #showBlock>\n    <!-- <p class=\"validate_subsidiary\">No ha seleccionado una sucursal</p> -->\n    <div class=\"alert alert-danger\">\n      <strong>Precaución!</strong> No ha seleccionado una sucursal.\n    </div>\n  </ng-template>\n<div class=\"\">\n  <!-- {{total_concessions}} -->\n</div>\n  <ng-template #notShowBlock>\n    <!-- <p>concesiones: {{total_concessions}}</p> -->\n    <!-- <ion-card> -->\n    <div *ngIf=\"total_concessions > 0 && total_concessions != {}\">\n\n        <ion-item>\n            <h1>Concesiones</h1>\n            <p>{{total_concessions}}</p>\n        </ion-item>\n    <!-- </ion-card> -->\n\n\n      <form (ngSubmit)=\"charge_concession()\" [formGroup]=\"form\">\n\n  \t\t      <ion-list>\n  \t\t\t\t\t\t<ion-item>\n  \t\t\t\t \t\t <ion-label floating color=\"primary\">\n  \t\t\t\t \t\t\t<ion-icon name=\"person\"></ion-icon>     Concesiones a cobrar</ion-label>\n  \t\t\t\t \t\t <ion-input type=\"number\" max=\"2\" formControlName=\"discount\"></ion-input>\n  \t\t\t\t \t </ion-item>\n\n  \t\t\t\t\t</ion-list>\n\n\n  \t\t\t\t\t<div padding-horizontal>\n  \t\t\t\t\t\t<div class=\"form-error\">{{form.errors}}</div>\n  \t\t\t\t\t\t<button ion-button full type=\"submit\" [disabled]=\"!form.valid\">Cobrar</button>\n  \t\t\t\t\t</div>\n\n  \t\t</form>\n    </div>\n\n<div *ngIf=\"total_concessions == 0 || total_concessions == {}\">\n  <div class=\"alert alert-danger\">\n    <strong>Precaución!</strong> No hay concesiones para este punto de venta.\n  </div>\n</div>\n  </ng-template>\n\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    43289:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-chip/delivery-chip.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div  *ngIf=\"modal == true\">\n  \n    <ion-navbar color=\"primary\">\n        <ion-buttons left>\n          <button ion-button icon-only (click)=\"go_home()\">\n            <ion-icon color=\"light\" name=\"arrow-back\"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title (click)=\"go_home()\">Volver</ion-title>\n      </ion-navbar>\n  \n    </div>\n  \n    <div *ngIf=\"id_subsidiary == 'null'\">\n      <div class=\"alert alert-danger\">\n        <strong>Precaución!</strong> No ha seleccionado una sucursal.\n      </div>\n    </div>\n  \n  \n  <div *ngIf=\"id_subsidiary != 'null'\">\n  \n    <ion-row>\n      <ion-col >\n        <ion-item>\n            <!-- <ion-label><p>Entregas para: {{title_subsidiary}}</p></ion-label> -->\n            <ion-label><p>Entregas para: {{title_subsidiary}}</p></ion-label>\n  \n          </ion-item>\n      </ion-col>\n      </ion-row>\n  \n  \n      <ion-row>\n        <ion-col >\n          <ion-item>\n              <ion-label><h2>Concesión</h2></ion-label><ion-toggle [(ngModel)]=\"consecion\"></ion-toggle>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n  </div>\n  \n      <!-- Tabla de Chip's-->\n  <ion-row>\n    <ion-col>\n        <ion-card no-padding>\n            <ion-item-divider *ngIf=\"front_chips_array.length > 0\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col>\n                      <b>{{cont}}</b>\n                      </ion-col>\n                      <ion-col>\n                        <b>N° código de barra</b>\n                      </ion-col>\n                      <ion-col>\n                        <b>Estado</b>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n            </ion-item-divider>\n  \n          <ion-item *ngFor=\"let chip of front_chips_array\" class=\"\">\n              <ion-item >\n                <ion-avatar item-start>\n                  <img src=\"../../../assets/images/barcode.png\" class=\"round\" width=\"25px\" />\n                </ion-avatar>\n                <h2>{{ chip.code }}</h2>\n                <ion-icon [name]=\"chip.icon\" [style]=\"color\" item-end></ion-icon>\n              </ion-item>\n          </ion-item>\n  \n  \n        </ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-content>\n  \n  <!-- Footer with scanchip button -->\n  <ion-footer no-border>\n    <ion-toolbar class=\"subsidiaryToolbar\">\n  \n      <ng-template\n        *ngIf=\"id_subsidiary == 'null';then showBlock; else notShowBlock\">\n      </ng-template>\n  \n      <ng-template #showBlock>\n        <!-- <p class=\"validate_subsidiary\">No ha seleccionado una sucursal</p> -->\n      </ng-template>\n  \n      <ng-template #notShowBlock>\n        <ion-icon name=\"barcode\" (click)=\"scanChips()\"></ion-icon>\n      </ng-template>\n  \n    </ion-toolbar>\n  </ion-footer>\n  \n";
      /***/
    },

    /***/
    626:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-publish/delivery-publish.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <ion-content padding class=\"card-background-page\">\n\n\n  <div *ngIf=\"id_subsidiary == 'null'\">\n    <div class=\"alert alert-danger\">\n      <strong>Precaución!</strong> No ha seleccionado una sucursal.\n    </div>\n  </div>\n\n  <div *ngIf=\"id_subsidiary != 'null'\">\n    <!-- <button ion-button full (click)=\"registerVisit()\">Registrar Visita</button> -->\n\n    <ion-item *ngFor=\"let image of allImages\" >\n        <!-- <ion-card>\n          <ion-row no-padding>\n            <ion-col text-center>\n              <div class=\"photoImgCont\">\n                <img src=\"{{ image }}\" class=\"round\" width=\"50px\"/>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card> -->\n\n        <ion-card >\n          <img src=\"{{ image.img }}\"/>\n          <div class=\"card-title\"> {{ image.name }} </div>\n          <!-- <div class=\"card-subtitle\">41 Listings</div> -->\n        </ion-card>\n    </ion-item>\n<!--\n    <ion-card>\n      <img src=\"img/card-saopaolo.png\"/>\n      <div class=\"card-title\">São Paulo</div>\n      <div class=\"card-subtitle\">41 Listings</div>\n    </ion-card> -->\n\n  <div class=\"center-container\">\n    <button ion-button color=\"primary\" icon-left (click)=\"openCamera()\">\n      <ion-icon name=\"camera\"></ion-icon> Trade\n    </button>\n  </div>\n\n  <ion-item>\n    <ion-label floating color=\"primary\"><ion-icon name=\"calendar\"></ion-icon> Nombre </ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"modelDelivery.nameDeliveryPublish\" name=\"nameDeliveryPublish\" #nameDeliveryPublish=\"ngModel\" [maxlength]=\"50\"></ion-input>\n  </ion-item>\n  <br>\n</div>\n\n</ion-content>\n\n<!-- Footer with submit form trade button -->\n<ion-footer no-border>\n<ion-toolbar class=\"subsidiaryToolbar\">\n\n  <ng-template\n    *ngIf=\"id_subsidiary == 'null';then showBlock; else notShowBlock\">\n  </ng-template>\n\n  <ng-template #showBlock>\n  </ng-template>\n\n  <ng-template #notShowBlock>\n    <ion-icon name=\"checkmark-circle\" color=\"primary\" (click)=\"sendDeliveryPublish()\"></ion-icon>\n\n  </ng-template>\n\n</ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    78102:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar color='violet'>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\" (click)=\"openCustom()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" >\n      <ion-button  (click)=\"presentPopoverNotificacion()\" >\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge item-end color=\"violet\">{{notificaciones?.length}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Góndola</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n <!--<app-map></app-map>\n  <page-maps></page-maps>-->\n  <!--<app-maps></app-maps>-->\n  <!-- <ion-tabs tabsPlacement=\"bottom\">\n      <!-- <ion-tab [root]=\"tabHome\" tabTitle=\"Home\" tabIcon=\"home\" [rootParams]=\"param_from_home\"></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabHome\" tabTitle=\"Inicio\" tabIcon=\"home\" [rootParams]=\"dataDelivery\"></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabChip\"  tabTitle=\"Chips\"  tabIcon=\"barcode\" [rootParams]=\"dataDelivery\"></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabPublish\" tabTitle=\"Trade\"  tabIcon=\"apps\" [rootParams]=\"dataDelivery\" ></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabConcession\" tabTitle=\"Concesión\"  tabIcon=\"logo-usd\" [rootParams]=\"dataDelivery\" ></ion-tab> -->\n      <!-- <ion-tab [root]=\"tabPoll\" tabTitle=\"Encuesta\"  tabIcon=\"list-box\" [rootParams]=\"dataDelivery\" ></ion-tab> -->\n  <!-- </ion-tabs> -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"doRefresh($event)\" color='violet'>\n      <ion-icon name=\"reload-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n<agm-map *ngIf=\"displaymap\" [latitude]=\"latitude\" [longitude]=\"longitude\" [mapDraggable]=\"true\" [scrollwheel]=\"true\" [zoom]=\"zoom\" >\n<!-- <agm-map *ngIf=\"display_map\" [latitude]=\"51.678418\" [longitude]=\"7.809007\" [mapDraggable]=\"true\" [scrollwheel]=\"true\" [zoom]=\"zoom\" >-->\n<agm-marker-cluster  >\n  <!-- <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [iconUrl]=\"iconMe\"> -->\n  <agm-marker>\n      <agm-info-window>\n        <!-- <strong>{{ Me }}</strong> -->\n      </agm-info-window>\n    </agm-marker>\n  <!-- <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"icon\" (markerClick)=\"markerClick(marker)\"> -->\n  <!-- <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"'assets/imgs/'+marker.tasa356+'.png'\" (markerClick)=\"markerClick(marker)\"> -->\n  <agm-marker *ngFor=\"let marker of markers\" [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"marker.photo\" (markerClick)=\"markerClick(marker)\">\n    <agm-info-window>\n      <strong>{{marker.title }}</strong>\n    </agm-info-window>\n  </agm-marker>\n</agm-marker-cluster>\n</agm-map>\n\n\n\n\n<!-- <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"Buscar\" [formControl]=\"searchControl\" class=\"searchbar\"></ion-searchbar> -->\n\n<!-- <div class=\"row\">\n<ion-input type=\"text\" [(ngModel)]=\"searchTerm\" placeholder=\"Buscar\" [formControl]=\"searchControl\" class=\"searchbar\"></ion-input>\n<button ion-button round style=\"top: 7px;\">X</button>\n</div> -->\n\n\n<!-- aqui va el mapa -->\n\n\n\n\n<ion-list *ngIf=\"subsidiary_list\">\n  <!-- <ion-list-header>\n    Puntos de venta cercanos:\n  </ion-list-header> -->\n\n    <button ion-item *ngFor=\"let item of filtered_items\" (click)=\"subsidiarySelected(item.id, item.title)\">\n      <!-- {{ item.title }}  <span item-end>{{item.tasa356}}</span> -->\n      {{ item.title }}  <span item-end> <img src=\"../../../assets/imgs/{{item.tasa356}}.png\" alt=\"\" width=\"20px\"> </span>\n    </button>\n</ion-list>\n\n</ion-content>\n \n";
      /***/
    },

    /***/
    31021:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\" id=\"loginCont\">\n  <img src=\"../../../assets/imgs/trade.png\" alt=\"\">\n\n\n  <div center style=\"border:none !important;margin:none !important;margin-block-start: 7em;\">\n    <ion-list>\n      <ion-item style=\"margin-bottom: 1em;\">\n        <ion-label position=\"floating\" color=\"violet\">\n          <ion-icon name=\"mail\"></ion-icon> Correo\n        </ion-label>\n        <!--  <ion-input type=\"email\" maxLength=\"30\" [(ngModel)]=\"user\" name=\"user\" #field=\"ngModel\" required></ion-input> -->\n        <ion-input type=\"email\" [(ngModel)]=\"modelAuth.email\" name=\"email\" #email=\"ngModel\"  required maxlength=\"50\">\n        </ion-input>\n       <!-- <p ion-text style=\"color: red;\" *ngIf=\"email.errors\">Ingrese un email</p>-->\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"violet\">\n          <ion-icon name=\"finger-print\"></ion-icon> Contraseña\n        </ion-label>\n        <!-- <ion-input type=\"password\" maxLength=\"10\" [(ngModel)]=\"pass\" name=\"pass\" #pass=\"ngModel\" required></ion-input> -->\n          <ion-input type=\"password\" [(ngModel)]=\"modelAuth.password\" name=\"password\" #password=\"ngModel\" required\n          maxlength=\"10\"></ion-input>\n       <!-- <p ion-text style=\"color: red;\" *ngIf=\"password.errors\">Ingrese una password</p>-->\n       \n      </ion-item>\n    </ion-list>\n    <div padding>\n      <ion-button color=\"violet\" expand=\"block\" (click)=\"singUp()\">Aceptar</ion-button>\n    </div>\n  </div>\n\n  <a (click)=\"recoverPassword()\">\n    <p>¿Olvidaste la contraseña?</p>\n  </a>\n  <br/>\n  <ion-note >Versión 0.0.18</ion-note>\n</ion-content>";
      /***/
    },

    /***/
    53005:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/polls/polls.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding>\n\n  <ng-template *ngIf=\"id_subsidiary == 'null' || id_subsidiary == undefined ;then notShowBlock; else ShowBlock\">\n  </ng-template>\n\n  <ng-template #notShowBlock>\n    <div class=\"alert alert-danger\">\n      <strong>Precaución!</strong> No ha seleccionado una sucursal.\n    </div>\n\n  </ng-template>\n\n  <ng-template #ShowBlock>\n\n    <div *ngIf=\"this.polls_list.length > 0\">\n\n    <ion-item *ngFor=\"let item of items; let i = index\">\n       <ion-label>{{item.question}}</ion-label>\n       <ion-checkbox [(ngModel)]='item.ischecked'></ion-checkbox>\n     </ion-item>\n    <!-- <button ion-button color=\"secondary\"  (click)=\"answerPolls()\"> -->\n    <button ion-button (click)=\"answerPolls()\" >Responder encuesta</button>\n  </div>\n  <div *ngIf=\"this.polls_list.length == 0\">\n    <div class=\"alert alert-danger\">\n      <strong>Precaución!</strong> No existe encuesta vigente.\n    </div>\n  </div>\n\n  </ng-template>\n  <!-- <button ion-button color=\"secondary\"  (click)=\"answerPolls()\"> -->\n\n\n</ion-content>\n\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map