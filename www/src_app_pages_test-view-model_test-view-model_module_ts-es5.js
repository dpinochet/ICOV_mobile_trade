(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_test-view-model_test-view-model_module_ts"], {
    /***/
    304:
    /*!******************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/groupBy.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "groupBy": function groupBy() {
          return (
            /* binding */
            _groupBy
          );
        },

        /* harmony export */
        "GroupedObservable": function GroupedObservable() {
          return (
            /* binding */
            _GroupedObservable
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      77393);
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Subscription */
      10826);
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Observable */
      69165);
      /* harmony import */


      var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subject */
      79765);

      function _groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
        return function (source) {
          return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
        };
      }

      var GroupByOperator = /*#__PURE__*/function () {
        function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
          _classCallCheck(this, GroupByOperator);

          this.keySelector = keySelector;
          this.elementSelector = elementSelector;
          this.durationSelector = durationSelector;
          this.subjectSelector = subjectSelector;
        }

        _createClass(GroupByOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
          }
        }]);

        return GroupByOperator;
      }();

      var GroupBySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(GroupBySubscriber, _Subscriber__WEBPACK_);

        var _super = _createSuper(GroupBySubscriber);

        function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
          var _this;

          _classCallCheck(this, GroupBySubscriber);

          _this = _super.call(this, destination);
          _this.keySelector = keySelector;
          _this.elementSelector = elementSelector;
          _this.durationSelector = durationSelector;
          _this.subjectSelector = subjectSelector;
          _this.groups = null;
          _this.attemptedToUnsubscribe = false;
          _this.count = 0;
          return _this;
        }

        _createClass(GroupBySubscriber, [{
          key: "_next",
          value: function _next(value) {
            var key;

            try {
              key = this.keySelector(value);
            } catch (err) {
              this.error(err);
              return;
            }

            this._group(value, key);
          }
        }, {
          key: "_group",
          value: function _group(value, key) {
            var groups = this.groups;

            if (!groups) {
              groups = this.groups = new Map();
            }

            var group = groups.get(key);
            var element;

            if (this.elementSelector) {
              try {
                element = this.elementSelector(value);
              } catch (err) {
                this.error(err);
              }
            } else {
              element = value;
            }

            if (!group) {
              group = this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_1__.Subject();
              groups.set(key, group);
              var groupedObservable = new _GroupedObservable(key, group, this);
              this.destination.next(groupedObservable);

              if (this.durationSelector) {
                var duration;

                try {
                  duration = this.durationSelector(new _GroupedObservable(key, group));
                } catch (err) {
                  this.error(err);
                  return;
                }

                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
              }
            }

            if (!group.closed) {
              group.next(element);
            }
          }
        }, {
          key: "_error",
          value: function _error(err) {
            var groups = this.groups;

            if (groups) {
              groups.forEach(function (group, key) {
                group.error(err);
              });
              groups.clear();
            }

            this.destination.error(err);
          }
        }, {
          key: "_complete",
          value: function _complete() {
            var groups = this.groups;

            if (groups) {
              groups.forEach(function (group, key) {
                group.complete();
              });
              groups.clear();
            }

            this.destination.complete();
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(key) {
            this.groups["delete"](key);
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe() {
            if (!this.closed) {
              this.attemptedToUnsubscribe = true;

              if (this.count === 0) {
                _get(_getPrototypeOf(GroupBySubscriber.prototype), "unsubscribe", this).call(this);
              }
            }
          }
        }]);

        return GroupBySubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber);

      var GroupDurationSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_2) {
        _inherits(GroupDurationSubscriber, _Subscriber__WEBPACK_2);

        var _super2 = _createSuper(GroupDurationSubscriber);

        function GroupDurationSubscriber(key, group, parent) {
          var _this2;

          _classCallCheck(this, GroupDurationSubscriber);

          _this2 = _super2.call(this, group);
          _this2.key = key;
          _this2.group = group;
          _this2.parent = parent;
          return _this2;
        }

        _createClass(GroupDurationSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.complete();
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var parent = this.parent,
                key = this.key;
            this.key = this.parent = null;

            if (parent) {
              parent.removeGroup(key);
            }
          }
        }]);

        return GroupDurationSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber);

      var _GroupedObservable = /*#__PURE__*/function (_Observable__WEBPACK_) {
        _inherits(_GroupedObservable, _Observable__WEBPACK_);

        var _super3 = _createSuper(_GroupedObservable);

        function _GroupedObservable(key, groupSubject, refCountSubscription) {
          var _this3;

          _classCallCheck(this, _GroupedObservable);

          _this3 = _super3.call(this);
          _this3.key = key;
          _this3.groupSubject = groupSubject;
          _this3.refCountSubscription = refCountSubscription;
          return _this3;
        }

        _createClass(_GroupedObservable, [{
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription();
            var refCountSubscription = this.refCountSubscription,
                groupSubject = this.groupSubject;

            if (refCountSubscription && !refCountSubscription.closed) {
              subscription.add(new InnerRefCountSubscription(refCountSubscription));
            }

            subscription.add(groupSubject.subscribe(subscriber));
            return subscription;
          }
        }]);

        return _GroupedObservable;
      }(_Observable__WEBPACK_IMPORTED_MODULE_2__.Observable);

      var InnerRefCountSubscription = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(InnerRefCountSubscription, _Subscription__WEBPAC);

        var _super4 = _createSuper(InnerRefCountSubscription);

        function InnerRefCountSubscription(parent) {
          var _this4;

          _classCallCheck(this, InnerRefCountSubscription);

          _this4 = _super4.call(this);
          _this4.parent = parent;
          parent.count++;
          return _this4;
        }

        _createClass(InnerRefCountSubscription, [{
          key: "unsubscribe",
          value: function unsubscribe() {
            var parent = this.parent;

            if (!parent.closed && !this.closed) {
              _get(_getPrototypeOf(InnerRefCountSubscription.prototype), "unsubscribe", this).call(this);

              parent.count -= 1;

              if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
              }
            }
          }
        }]);

        return InnerRefCountSubscription;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription); //# sourceMappingURL=groupBy.js.map

      /***/

    },

    /***/
    67130:
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/reduce.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "reduce": function reduce() {
          return (
            /* binding */
            _reduce
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _scan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./scan */
      42145);
      /* harmony import */


      var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./takeLast */
      548);
      /* harmony import */


      var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./defaultIfEmpty */
      95242);
      /* harmony import */


      var _util_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/pipe */
      34022);

      function _reduce(accumulator, seed) {
        if (arguments.length >= 2) {
          return function reduceOperatorFunctionWithSeed(source) {
            return (0, _util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0, _scan__WEBPACK_IMPORTED_MODULE_1__.scan)(accumulator, seed), (0, _takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1), (0, _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__.defaultIfEmpty)(seed))(source);
          };
        }

        return function reduceOperatorFunction(source) {
          return (0, _util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0, _scan__WEBPACK_IMPORTED_MODULE_1__.scan)(function (acc, value, index) {
            return accumulator(acc, value, index + 1);
          }), (0, _takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1))(source);
        };
      } //# sourceMappingURL=reduce.js.map

      /***/

    },

    /***/
    2590:
    /*!******************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/toArray.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "toArray": function toArray() {
          return (
            /* binding */
            _toArray
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reduce */
      67130);

      function toArrayReducer(arr, item, index) {
        if (index === 0) {
          return [item];
        }

        arr.push(item);
        return arr;
      }

      function _toArray() {
        return (0, _reduce__WEBPACK_IMPORTED_MODULE_0__.reduce)(toArrayReducer, []);
      } //# sourceMappingURL=toArray.js.map

      /***/

    },

    /***/
    4999:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/test-view-model/test-view-model-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestViewModelPageRoutingModule": function TestViewModelPageRoutingModule() {
          return (
            /* binding */
            _TestViewModelPageRoutingModule
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


      var _test_view_model_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./test-view-model.page */
      64428);

      var routes = [{
        path: '',
        component: _test_view_model_page__WEBPACK_IMPORTED_MODULE_0__.TestViewModelPage
      }];

      var _TestViewModelPageRoutingModule = /*#__PURE__*/_createClass(function TestViewModelPageRoutingModule() {
        _classCallCheck(this, TestViewModelPageRoutingModule);
      });

      _TestViewModelPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TestViewModelPageRoutingModule);
      /***/
    },

    /***/
    32938:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/test-view-model/test-view-model.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestViewModelPageModule": function TestViewModelPageModule() {
          return (
            /* binding */
            _TestViewModelPageModule
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


      var _test_view_model_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./test-view-model-routing.module */
      4999);
      /* harmony import */


      var _test_view_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./test-view-model.page */
      64428);

      var _TestViewModelPageModule = /*#__PURE__*/_createClass(function TestViewModelPageModule() {
        _classCallCheck(this, TestViewModelPageModule);
      });

      _TestViewModelPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _test_view_model_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestViewModelPageRoutingModule],
        declarations: [_test_view_model_page__WEBPACK_IMPORTED_MODULE_1__.TestViewModelPage]
      })], _TestViewModelPageModule);
      /***/
    },

    /***/
    64428:
    /*!***************************************************************!*\
      !*** ./src/app/pages/test-view-model/test-view-model.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestViewModelPage": function TestViewModelPage() {
          return (
            /* binding */
            _TestViewModelPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_test_view_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./test-view-model.page.html */
      47873);
      /* harmony import */


      var _test_view_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./test-view-model.page.scss */
      78992);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      69412);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      19773);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      2590);
      /* harmony import */


      var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/delivery-services.service */
      68407);
      /* harmony import */


      var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user-services.service */
      24107);

      var _TestViewModelPage = /*#__PURE__*/function () {
        function TestViewModelPage(navCtrl, userSrvc, delivery) {
          _classCallCheck(this, TestViewModelPage);

          this.navCtrl = navCtrl;
          this.userSrvc = userSrvc;
          this.delivery = delivery;
          this.testArray = [];
          this.date_start = '';
          this.allStores = [];
          this.arrayGrouped = [];
        } // End constructor


        _createClass(TestViewModelPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "callSubmit",
          value: function callSubmit() {
            this.obtainTrades();
          }
        }, {
          key: "obtainTrades",
          value: function obtainTrades() {
            var _this5 = this;

            var date = this.date_start;
            var arraySubsidiaries = [];
            this.arrayGrouped = [];
            this.delivery.getStoresCatalog().subscribe(function (data) {
              var distinct = function distinct(value, index, self) {
                return self.indexOf(value) === index;
              };

              _this5.allStores = data;

              _this5.delivery.getVisitsByUserDay(date).subscribe(function (data) {
                var trade = data;
                var source = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(trade);
                var for_group = source.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.groupBy)(function (trade) {
                  return trade.id_multistore;
                }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(function (group) {
                  return group.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.toArray)());
                }));
                var subscribe = for_group.subscribe(function (val) {
                  arraySubsidiaries[val[0].id_multistore] = val;
                });

                var _loop = function _loop(key) {
                  var store_tmp = _this5.allStores.find(function (x) {
                    return x.id == key;
                  });

                  var unique = _toConsumableArray(Array.from(arraySubsidiaries[key].map(function (item) {
                    return item.name_business;
                  })));

                  unique = unique.filter(distinct);
                  var subsidiary_cont = [];

                  for (var item in unique) {
                    subsidiary_cont.push(unique[item]);

                    var _iterator = _createForOfIteratorHelper(arraySubsidiaries[key]),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var subsidiary = _step.value;

                        if (subsidiary.name_business == unique[item]) {
                          subsidiary_cont[item] = +1;
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }

                  _this5.arrayGrouped[parseInt(key) - 1] = arraySubsidiaries[key];
                  _this5.arrayGrouped[parseInt(key) - 1]['img'] = store_tmp.photo;
                  _this5.arrayGrouped[parseInt(key) - 1]['name'] = store_tmp.name;
                  _this5.arrayGrouped[parseInt(key) - 1]['trade_number'] = subsidiary_cont;
                };

                for (var key in arraySubsidiaries) {
                  _loop(key);
                }
              }, function (_err) {
                console.error(_err);
              });
            }, function (_err) {});
          }
        }, {
          key: "pushArray",
          value: function pushArray() {
            this.testArray.push('dasdasda');
            console.log(this.testArray);
          }
        }]);

        return TestViewModelPage;
      }();

      _TestViewModelPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__.UserServicesService
        }, {
          type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_2__.DeliveryServicesService
        }];
      };

      _TestViewModelPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-test-view-model',
        template: _raw_loader_test_view_model_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_test_view_model_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TestViewModelPage);
      /***/
    },

    /***/
    78992:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/test-view-model/test-view-model.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LXZpZXctbW9kZWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    47873:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test-view-model/test-view-model.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-navbar color='primary'>\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Visitas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <!-- <form (ngSubmit)=\"callSubmit()\" [FormGroup]=\"form\"> -->\n    <form (ngSubmit)=\"callSubmit()\" >\n      <ion-item>\n        <ion-label>Fecha inicio</ion-label>\n        <ion-datetime displayFormat=\"DD-MM-YYYY\" cancelText=\"Cancelar\" [(ngModel)]=\"date_start\"\n        doneText=\"Seleccionar\" min=\"2018\" name=\"date_start\">\n        </ion-datetime>\n      </ion-item>\n\n      <div padding-horizontal>\n        <!-- <div class=\"form-error\">{{form.errors}}</div> -->\n        <button ion-button full type=\"submit\" [disabled]=\"date_start == ''\">Obtener Reporte</button>\n      </div>\n\n    </form>\n    <!-- {{ arrayGrouped | json }} -->\n    <div *ngFor=\"let item of arrayGrouped\" >\n      <ul> <b>{{ item.name }} </b></ul>\n      <ul> <b>{{ item.img }} </b></ul>\n      <div *ngFor=\"let trade of item\" >\n        <ul> {{ item.length }} </ul>\n        <ul> {{ trade.name_business }} </ul>\n        <ul> {{ trade.subsidiary_publish__created_at }}</ul>\n      </div>\n    </div>\n  </ion-list>\n\n{{ testArray | json}}\n<button type=\"button\" name=\"button\" (click)=\"pushArray()\">Push Array</button>\n\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_test-view-model_test-view-model_module_ts-es5.js.map