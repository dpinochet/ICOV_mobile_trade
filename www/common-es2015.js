(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["common"],{

/***/ 68225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createButtonActiveGesture; }
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 39461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 27069:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ attachComponent; },
/* harmony export */   "d": function() { return /* binding */ detachComponent; }
/* harmony export */ });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ 71567);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ hapticSelectionStart; },
/* harmony export */   "b": function() { return /* binding */ hapticSelectionChanged; },
/* harmony export */   "c": function() { return /* binding */ hapticSelection; },
/* harmony export */   "d": function() { return /* binding */ hapticImpact; },
/* harmony export */   "h": function() { return /* binding */ hapticSelectionEnd; }
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ SPINNERS; }
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createColorClasses; },
/* harmony export */   "g": function() { return /* binding */ getClassMap; },
/* harmony export */   "h": function() { return /* binding */ hostContext; },
/* harmony export */   "o": function() { return /* binding */ openURL; }
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 72475:
/*!*******************************************************************!*\
  !*** ./src/app/pages/modal-img-preview/modal-img-preview.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalImgPreviewPage": function() { return /* binding */ ModalImgPreviewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modal_img_preview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-img-preview.page.html */ 46590);
/* harmony import */ var _modal_img_preview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-img-preview.page.scss */ 21481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ModalImgPreviewPage = class ModalImgPreviewPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.dataImg = null;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalImgPreviewPage');
    }
    ngOnInit() {
        this.dataImg = this.imagenes;
        console.log('parametros: ', this.imagenes);
    }
    close() {
        this.navCtrl.pop();
    }
    next() {
        this.slides.slideNext();
    }
    prev() {
        this.slides.slidePrev();
    }
};
ModalImgPreviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
ModalImgPreviewPage.propDecorators = {
    imagenes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slides',] }]
};
ModalImgPreviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modal-img-preview',
        template: _raw_loader_modal_img_preview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_img_preview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalImgPreviewPage);



/***/ }),

/***/ 44068:
/*!*************************************************************************!*\
  !*** ./src/app/pages/pop-over-menu-be2-be/pop-over-menu-be2-be.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverMenuBe2BePage": function() { return /* binding */ PopOverMenuBe2BePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pop_over_menu_be2_be_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pop-over-menu-be2-be.page.html */ 38359);
/* harmony import */ var _pop_over_menu_be2_be_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-over-menu-be2-be.page.scss */ 26246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comunicacion-component.service */ 8077);
/* harmony import */ var src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/delivery-services.service */ 68407);








//import * as v from 'voca';
let PopOverMenuBe2BePage = class PopOverMenuBe2BePage {
    constructor(navCtrl, _comunc, popoverCtrl, deliveryPublish, alertController) {
        this.navCtrl = navCtrl;
        this._comunc = _comunc;
        this.popoverCtrl = popoverCtrl;
        this.deliveryPublish = deliveryPublish;
        this.alertController = alertController;
        this.formLeyend = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            leyend: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
        this.imagenes = new Array();
        this.user = null;
        this.subsidiary = null;
        this.idx_card = null;
        this.comentario_card_arr = new Array();
        this.card_data = null;
        this._comunc.itemComunicacion.subscribe((item) => {
            // console.log('item-data-popover');
            if (item.name === 'data-pop-over') {
                this.user = item.itemAdd.user;
                this.subsidiary = item.itemAdd.subsidiary;
                this.imagenes = item.itemAdd.imagenes;
                this.formLeyend.controls.leyend.setValue(item.itemAdd.leyend);
                this.optener_hashtag(item.itemAdd.leyend);
                this.idx_card = item.itemAdd.idx_card;
                this.card_data = item.itemAdd.card;
                console.log('card_selected:', item.itemAdd.card);
            }
            setTimeout(() => {
                console.log('pop-over-data: ', item);
            }, 10);
        });
    }
    ngOnInit() {
    }
    optener_hashtag(comentario) {
        let arr_hashtag = comentario == null ? [] : comentario.split(' ');
        console.log('divider_hashtag: ', arr_hashtag);
        let hashtag_arr = new Array();
        arr_hashtag.forEach((item_comment) => {
            //let find_hashtag:number = v.lastIndexOf(item_comment,'#');
            let find_hashtag = item_comment.lastIndexOf('#');
            if (find_hashtag > -1) {
                hashtag_arr.push(item_comment);
            }
        });
        setTimeout(() => {
            console.log('hash_tag_find: ', hashtag_arr);
        }, 1000);
        console.log('comentario: ', comentario);
    }
    delay() {
        return new Promise(resolve => setTimeout(resolve, 300));
    }
    publishv2_method() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // notice that we can await a function
            // that returns a promise
            try {
                this.modelDeliveryPublish = {
                    user_created: this.user.email,
                    subsidiary: this.subsidiary.id,
                    description: this.formLeyend.value.leyend,
                    brand_id: this.card_data.id
                };
                console.log("pot", this.modelDeliveryPublish);
                let publishv2;
                let error;
                error = yield this.deliveryPublish.publishv2(this.modelDeliveryPublish).then(function (data) {
                    publishv2 = data;
                    return false;
                })
                    .catch(function (err) {
                    // Tratar el error
                    return true;
                });
                console.log("potee", error);
                console.log("publis", publishv2);
                if (publishv2 != null && error == false) {
                    this.imagenes.forEach((img, idx) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        let model_publish_photo = {
                            photo: img.url,
                            publish_id: publishv2.id
                        };
                        error = yield this.deliveryPublish.publishPhoto(model_publish_photo).then(function (data) {
                            console.log("imagenes agregadas");
                        })
                            .catch(function (err) {
                            // Tratar el error
                            return true;
                        });
                        this.imagenes.splice(idx, 10);
                    }));
                    if (error == false) {
                        this.presentAlert("Aviso", "Operación exitosa");
                        // console.log('postDelevery-response-check-out: ', publishv2);
                        // this.imagenes.splice(idx, 1);
                        this.close();
                    }
                    else {
                        this.presentAlert("Algunas Imagenes no se agregaron", "por favor revise su conexión a internet o inténtelo mas tarde");
                        this.close();
                    }
                }
                else {
                    this.presentAlert("Error en la operación", "por favor revise su conexión a internet o inténtelo mas tarde");
                    this.close();
                }
                // console.log('item-register', { item: { img: img, idx: idx } });
            }
            catch (e) { }
        });
    }
    // async registrarCheckOut() {
    //   await this.publishv2_method(img, idx);
    //   if (this.imagenes.length > 0) {
    //     this.imagenes.forEach(async (img, idx) => {
    //     })
    //   } if (this.imagenes.length == 0) {
    //     this.modelDeliveryPublish = {
    //       user_created: this.user.email,
    //       subsidiary: this.subsidiary.id,
    //       quantity: 1,
    //       photo: null,
    //       description: null
    //     }
    //     try{
    //       let rs = await this.deliveryPublish.publishv2(this.modelDeliveryPublish);
    //       if(rs!=null){
    //         this._comunc.addItem({name:'b2b-finish',itemAdd:{
    //           b2bfinish:true,idx_card:this.idx_card
    //         }});
    //       }
    //     }catch(e){}
    //   }
    //   console.log('done!');
    //   this.close();
    // }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PopOverMenuBe2BePage');
    }
    close() {
        // this.viewCtrl.dismiss();
        this.popoverCtrl.dismiss();
    }
    presentAlert(type, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: type,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
PopOverMenuBe2BePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_app_services_comunicacion_component_service__WEBPACK_IMPORTED_MODULE_2__.ComunicacionComponentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: src_app_services_delivery_services_service__WEBPACK_IMPORTED_MODULE_3__.DeliveryServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
PopOverMenuBe2BePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-pop-over-menu-be2-be',
        template: _raw_loader_pop_over_menu_be2_be_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pop_over_menu_be2_be_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PopOverMenuBe2BePage);



/***/ }),

/***/ 21481:
/*!*********************************************************************!*\
  !*** ./src/app/pages/modal-img-preview/modal-img-preview.page.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-modal-img-preview .img-style {\n  -webkit-margin-before: 50%;\n          margin-block-start: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWltZy1wcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBCQUFBO1VBQUEsdUJBQUE7QUFBUiIsImZpbGUiOiJtb2RhbC1pbWctcHJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLW1vZGFsLWltZy1wcmV2aWV3IHtcbiAgICAuaW1nLXN0eWxle1xuICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDUwJTtcbiAgICB9XG5cbiAgICBcbiAgICAgIFxufSJdfQ== */");

/***/ }),

/***/ 26246:
/*!***************************************************************************!*\
  !*** ./src/app/pages/pop-over-menu-be2-be/pop-over-menu-be2-be.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3Atb3Zlci1tZW51LWJlMi1iZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 46590:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-img-preview/modal-img-preview.page.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the ModalImgPreviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <button ion-button clear (click)=\"close()\">\n      <ion-icon name=\"close\"></ion-icon>\n  </button>\n\n</ion-header>\n\n<ion-content style=\"background:rgba(0, 0, 0, .9) !important\">\n\n  <ion-slides  *ngFor=\"let img of dataImg?.imagenes\" #slides>\n      <ion-slide>\n\n          <img class=\"ui fluid image\" [src]=\"img?.url\">\n\n      </ion-slide>\n  </ion-slides>\n\n\n</ion-content>\n<ion-footer>\n\n  <button ion-button color=\"primary\" block clear large (click)=\"next()\">\n      <ion-icon name=\"arrow-down\"></ion-icon>\n  </button>\n</ion-footer>\n");

/***/ }),

/***/ 38359:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pop-over-menu-be2-be/pop-over-menu-be2-be.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the PopOverMenuBe2BePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class=\"ion-padding\">\n  <ion-button  (click)=\"publishv2_method()\" color=\"violet\">\n    <ion-icon  name=\"exit\"></ion-icon> \n    check-out</ion-button>\n  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map