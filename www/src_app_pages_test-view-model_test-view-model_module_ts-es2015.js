(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_test-view-model_test-view-model_module_ts"],{

/***/ 304:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/groupBy.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupBy": function() { return /* binding */ groupBy; },
/* harmony export */   "GroupedObservable": function() { return /* binding */ GroupedObservable; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 77393);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscription */ 10826);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 69165);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ 79765);




function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return (source) => source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
}
class GroupByOperator {
    constructor(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    }
}
class GroupBySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        super(destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    _next(value) {
        let key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    }
    _group(value, key) {
        let groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        let group = groups.get(key);
        let element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_1__.Subject());
            groups.set(key, group);
            const groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                let duration;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
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
    _error(err) {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    }
    _complete() {
        const groups = this.groups;
        if (groups) {
            groups.forEach((group, key) => {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    }
    removeGroup(key) {
        this.groups.delete(key);
    }
    unsubscribe() {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                super.unsubscribe();
            }
        }
    }
}
class GroupDurationSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(key, group, parent) {
        super(group);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    _next(value) {
        this.complete();
    }
    _unsubscribe() {
        const { parent, key } = this;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    }
}
class GroupedObservable extends _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable {
    constructor(key, groupSubject, refCountSubscription) {
        super();
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    _subscribe(subscriber) {
        const subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription();
        const { refCountSubscription, groupSubject } = this;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    }
}
class InnerRefCountSubscription extends _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription {
    constructor(parent) {
        super();
        this.parent = parent;
        parent.count++;
    }
    unsubscribe() {
        const parent = this.parent;
        if (!parent.closed && !this.closed) {
            super.unsubscribe();
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    }
}
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ 67130:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/reduce.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduce": function() { return /* binding */ reduce; }
/* harmony export */ });
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan */ 42145);
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takeLast */ 548);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultIfEmpty */ 95242);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/pipe */ 34022);




function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_scan__WEBPACK_IMPORTED_MODULE_1__.scan)(accumulator, seed), (0,_takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1), (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__.defaultIfEmpty)(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_scan__WEBPACK_IMPORTED_MODULE_1__.scan)((acc, value, index) => accumulator(acc, value, index + 1)), (0,_takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1))(source);
    };
}
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ 2590:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/toArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toArray": function() { return /* binding */ toArray; }
/* harmony export */ });
/* harmony import */ var _reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reduce */ 67130);

function toArrayReducer(arr, item, index) {
    if (index === 0) {
        return [item];
    }
    arr.push(item);
    return arr;
}
function toArray() {
    return (0,_reduce__WEBPACK_IMPORTED_MODULE_0__.reduce)(toArrayReducer, []);
}
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ 4999:
/*!*************************************************************************!*\
  !*** ./src/app/pages/test-view-model/test-view-model-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestViewModelPageRoutingModule": function() { return /* binding */ TestViewModelPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _test_view_model_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-view-model.page */ 64428);




const routes = [
    {
        path: '',
        component: _test_view_model_page__WEBPACK_IMPORTED_MODULE_0__.TestViewModelPage
    }
];
let TestViewModelPageRoutingModule = class TestViewModelPageRoutingModule {
};
TestViewModelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestViewModelPageRoutingModule);



/***/ }),

/***/ 32938:
/*!*****************************************************************!*\
  !*** ./src/app/pages/test-view-model/test-view-model.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestViewModelPageModule": function() { return /* binding */ TestViewModelPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _test_view_model_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-view-model-routing.module */ 4999);
/* harmony import */ var _test_view_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-view-model.page */ 64428);







let TestViewModelPageModule = class TestViewModelPageModule {
};
TestViewModelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _test_view_model_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestViewModelPageRoutingModule,
        ],
        declarations: [_test_view_model_page__WEBPACK_IMPORTED_MODULE_1__.TestViewModelPage]
    })
], TestViewModelPageModule);



/***/ }),

/***/ 64428:
/*!***************************************************************!*\
  !*** ./src/app/pages/test-view-model/test-view-model.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestViewModelPage": function() { return /* binding */ TestViewModelPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_test_view_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./test-view-model.page.html */ 47873);
/* harmony import */ var _test_view_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-view-model.page.scss */ 78992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2590);
/* harmony import */ var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/delivery-services.service */ 68407);
/* harmony import */ var src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-services.service */ 24107);









let TestViewModelPage = class TestViewModelPage {
    constructor(navCtrl, userSrvc, delivery) {
        this.navCtrl = navCtrl;
        this.userSrvc = userSrvc;
        this.delivery = delivery;
        this.testArray = [];
        this.date_start = '';
        this.allStores = [];
        this.arrayGrouped = [];
    } // End constructor
    ngOnInit() {
    }
    callSubmit() { this.obtainTrades(); }
    obtainTrades() {
        let date = this.date_start;
        let arraySubsidiaries = [];
        this.arrayGrouped = [];
        this.delivery.getStoresCatalog().subscribe(data => {
            const distinct = (value, index, self) => { return self.indexOf(value) === index; };
            this.allStores = data;
            this.delivery.getVisitsByUserDay(date).subscribe(data => {
                let trade = data;
                const source = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(trade);
                const for_group = source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.groupBy)((trade) => trade.id_multistore), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(group => group.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.toArray)())));
                const subscribe = for_group.subscribe(val => {
                    arraySubsidiaries[val[0].id_multistore] = val;
                });
                for (let key in arraySubsidiaries) {
                    let store_tmp = this.allStores.find(x => x.id == key);
                    let unique = [...Array.from(arraySubsidiaries[key].map(item => item.name_business))];
                    unique = unique.filter(distinct);
                    let subsidiary_cont = [];
                    for (let item in unique) {
                        subsidiary_cont.push(unique[item]);
                        for (let subsidiary of arraySubsidiaries[key]) {
                            if (subsidiary.name_business == unique[item]) {
                                subsidiary_cont[item] = +1;
                            }
                        }
                    }
                    this.arrayGrouped[parseInt(key) - 1] = arraySubsidiaries[key];
                    this.arrayGrouped[parseInt(key) - 1]['img'] = store_tmp.photo;
                    this.arrayGrouped[parseInt(key) - 1]['name'] = store_tmp.name;
                    this.arrayGrouped[parseInt(key) - 1]['trade_number'] = subsidiary_cont;
                }
            }, _err => { console.error(_err); });
        }, _err => { });
    }
    pushArray() {
        this.testArray.push('dasdasda');
        console.log(this.testArray);
    }
};
TestViewModelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: src_app_services_user_services_service__WEBPACK_IMPORTED_MODULE_3__.UserServicesService },
    { type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_2__.DeliveryServicesService }
];
TestViewModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-test-view-model',
        template: _raw_loader_test_view_model_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_test_view_model_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TestViewModelPage);



/***/ }),

/***/ 78992:
/*!*****************************************************************!*\
  !*** ./src/app/pages/test-view-model/test-view-model.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LXZpZXctbW9kZWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 47873:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test-view-model/test-view-model.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-navbar color='primary'>\n    <button ion-button menuToggle>\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title>Visitas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <!-- <form (ngSubmit)=\"callSubmit()\" [FormGroup]=\"form\"> -->\n    <form (ngSubmit)=\"callSubmit()\" >\n      <ion-item>\n        <ion-label>Fecha inicio</ion-label>\n        <ion-datetime displayFormat=\"DD-MM-YYYY\" cancelText=\"Cancelar\" [(ngModel)]=\"date_start\"\n        doneText=\"Seleccionar\" min=\"2018\" name=\"date_start\">\n        </ion-datetime>\n      </ion-item>\n\n      <div padding-horizontal>\n        <!-- <div class=\"form-error\">{{form.errors}}</div> -->\n        <button ion-button full type=\"submit\" [disabled]=\"date_start == ''\">Obtener Reporte</button>\n      </div>\n\n    </form>\n    <!-- {{ arrayGrouped | json }} -->\n    <div *ngFor=\"let item of arrayGrouped\" >\n      <ul> <b>{{ item.name }} </b></ul>\n      <ul> <b>{{ item.img }} </b></ul>\n      <div *ngFor=\"let trade of item\" >\n        <ul> {{ item.length }} </ul>\n        <ul> {{ trade.name_business }} </ul>\n        <ul> {{ trade.subsidiary_publish__created_at }}</ul>\n      </div>\n    </div>\n  </ion-list>\n\n{{ testArray | json}}\n<button type=\"button\" name=\"button\" (click)=\"pushArray()\">Push Array</button>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test-view-model_test-view-model_module_ts-es2015.js.map