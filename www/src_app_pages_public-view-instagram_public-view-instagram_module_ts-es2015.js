(self["webpackChunkmobile_trade"] = self["webpackChunkmobile_trade"] || []).push([["src_app_pages_public-view-instagram_public-view-instagram_module_ts"],{

/***/ 65433:
/*!****************************************************!*\
  !*** ./node_modules/@ionic-native/camera/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DestinationType": function() { return /* binding */ DestinationType; },
/* harmony export */   "EncodingType": function() { return /* binding */ EncodingType; },
/* harmony export */   "MediaType": function() { return /* binding */ MediaType; },
/* harmony export */   "PictureSourceType": function() { return /* binding */ PictureSourceType; },
/* harmony export */   "PopoverArrowDirection": function() { return /* binding */ PopoverArrowDirection; },
/* harmony export */   "Direction": function() { return /* binding */ Direction; },
/* harmony export */   "Camera": function() { return /* binding */ Camera; }
/* harmony export */ });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 60399);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var CameraOriginal = /** @class */ (function (_super) {
    __extends(CameraOriginal, _super);
    function CameraOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    CameraOriginal.prototype.getPicture = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    CameraOriginal.prototype.cleanup = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    CameraOriginal.pluginName = "Camera";
    CameraOriginal.plugin = "cordova-plugin-camera";
    CameraOriginal.pluginRef = "navigator.camera";
    CameraOriginal.repo = "https://github.com/apache/cordova-plugin-camera";
    CameraOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return CameraOriginal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));
var Camera = new CameraOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFzRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7aUJBdlFUO0VBK0s0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXG4gICAqL1xuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXG4gICAqICAgICAgQ0FNRVJBIDogMSxcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXG4gICAqL1xuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcbiAgICovXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcbiAgICovXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXG4gICAqICAgICAgQkFDSzogMFxuICAgKiAgICAgIEZST05UOiAxXG4gICAqL1xuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XG59XG5cbi8qKlxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxuICAgKi9cbiAgYXJyb3dEaXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcbiAgREFUQV9VUkwgPSAwLFxuICBGSUxFX1VSTCxcbiAgTkFUSVZFX1VSSSxcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcbiAgSlBFRyA9IDAsXG4gIFBORyxcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQSxcbn1cblxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xuICBQSE9UT0xJQlJBUlkgPSAwLFxuICBDQU1FUkEsXG4gIFNBVkVEUEhPVE9BTEJVTSxcbn1cblxuZXhwb3J0IGVudW0gUG9wb3ZlckFycm93RGlyZWN0aW9uIHtcbiAgQVJST1dfVVAgPSAxLFxuICBBUlJPV19ET1dOLFxuICBBUlJPV19MRUZULFxuICBBUlJPV19SSUdIVCxcbiAgQVJST1dfQU5ZLFxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlQsXG59XG5cbi8qKlxuICogQG5hbWUgQ2FtZXJhXG4gKiBAcHJlbWllciBjYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIGRlc3RpbmF0aW9uIHR5cGVzXG4gICAqL1xuICBEZXN0aW5hdGlvblR5cGUgPSB7XG4gICAgLyoqIFJldHVybiBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSAqL1xuICAgIERBVEFfVVJMOiAwLFxuICAgIC8qKiBSZXR1cm4gZmlsZSB1cmkgKGNvbnRlbnQ6Ly9tZWRpYS9leHRlcm5hbC9pbWFnZXMvbWVkaWEvMiBmb3IgQW5kcm9pZCkgKi9cbiAgICBGSUxFX1VSSTogMSxcbiAgICAvKiogUmV0dXJuIG5hdGl2ZSB1cmkgKGVnLiBhc3NldC1saWJyYXJ5Oi8vLi4uIGZvciBpT1MpICovXG4gICAgTkFUSVZFX1VSSTogMixcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIEVuY29kaW5nVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIEpQRUc6IDAsXG4gICAgLyoqIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIFBORzogMSxcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUGljdHVyZVNvdXJjZVR5cGUgPSB7XG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBQSE9UT0xJQlJBUlkgZm9yIEFuZHJvaWQpICovXG4gICAgUEhPVE9MSUJSQVJZOiAwLFxuICAgIC8qKiBUYWtlIHBpY3R1cmUgZnJvbSBjYW1lcmEgKi9cbiAgICBDQU1FUkE6IDEsXG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBTQVZFRFBIT1RPQUxCVU0gZm9yIEFuZHJvaWQpICovXG4gICAgU0FWRURQSE9UT0FMQlVNOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUG9wb3ZlckFycm93RGlyZWN0aW9uID0ge1xuICAgIEFSUk9XX1VQOiAxLFxuICAgIEFSUk9XX0RPV046IDIsXG4gICAgQVJST1dfTEVGVDogNCxcbiAgICBBUlJPV19SSUdIVDogOCxcbiAgICBBUlJPV19BTlk6IDE1LFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxLFxuICB9O1xuXG4gIC8qKlxuICAgKiBUYWtlIGEgcGljdHVyZSBvciB2aWRlbywgb3IgbG9hZCBvbmUgZnJvbSB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtDYW1lcmFPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyB0aGF0IHlvdSB3YW50IHRvIHBhc3MgdG8gdGhlIGNhbWVyYS4gRW5jb2RpbmcgdHlwZSwgcXVhbGl0eSwgZXRjLiBQbGF0Zm9ybS1zcGVjaWZpYyBxdWlya3MgYXJlIGRlc2NyaWJlZCBpbiB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhI2NhbWVyYW9wdGlvbnMtZXJyYXRhLSkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEsIG9yIHRoZSBpbWFnZSBmaWxlIFVSSSwgZGVwZW5kaW5nIG9uIGNhbWVyYU9wdGlvbnMsIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRQaWN0dXJlKG9wdGlvbnM/OiBDYW1lcmFPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGludGVybWVkaWF0ZSBpbWFnZSBmaWxlcyB0aGF0IGFyZSBrZXB0IGluIHRlbXBvcmFyeSBzdG9yYWdlIGFmdGVyIGNhbGxpbmcgY2FtZXJhLmdldFBpY3R1cmUuXG4gICAqIEFwcGxpZXMgb25seSB3aGVuIHRoZSB2YWx1ZSBvZiBDYW1lcmEuc291cmNlVHlwZSBlcXVhbHMgQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLkNBTUVSQSBhbmQgdGhlIENhbWVyYS5kZXN0aW5hdGlvblR5cGUgZXF1YWxzIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 11089:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/public-view-instagram/public-view-instagram-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicViewInstagramPageRoutingModule": function() { return /* binding */ PublicViewInstagramPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _public_view_instagram_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-view-instagram.page */ 61654);




const routes = [
    {
        path: '',
        component: _public_view_instagram_page__WEBPACK_IMPORTED_MODULE_0__.PublicViewInstagramPage
    }
];
let PublicViewInstagramPageRoutingModule = class PublicViewInstagramPageRoutingModule {
};
PublicViewInstagramPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PublicViewInstagramPageRoutingModule);



/***/ }),

/***/ 58771:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/public-view-instagram/public-view-instagram.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicViewInstagramPageModule": function() { return /* binding */ PublicViewInstagramPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _public_view_instagram_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-view-instagram-routing.module */ 11089);
/* harmony import */ var _public_view_instagram_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-view-instagram.page */ 61654);







let PublicViewInstagramPageModule = class PublicViewInstagramPageModule {
};
PublicViewInstagramPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _public_view_instagram_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicViewInstagramPageRoutingModule
        ],
        declarations: [_public_view_instagram_page__WEBPACK_IMPORTED_MODULE_1__.PublicViewInstagramPage]
    })
], PublicViewInstagramPageModule);



/***/ }),

/***/ 61654:
/*!***************************************************************************!*\
  !*** ./src/app/pages/public-view-instagram/public-view-instagram.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicViewInstagramPage": function() { return /* binding */ PublicViewInstagramPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_public_view_instagram_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./public-view-instagram.page.html */ 96916);
/* harmony import */ var _public_view_instagram_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-view-instagram.page.scss */ 58388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera */ 65433);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_instagram_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/instagram-service.service */ 93355);
/* harmony import */ var _ionic_native_instagram_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/instagram/ngx */ 78658);










let PublicViewInstagramPage = class PublicViewInstagramPage {
    constructor(navCtrl, camera, instagram, _social_sharing, _instagramService) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.instagram = instagram;
        this._social_sharing = _social_sharing;
        this._instagramService = _instagramService;
        this.publicacionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
        });
        this.img = null;
        this._instagramService.getToken();
    }
    ngOnInit() {
    }
    publicarInstagram() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this._social_sharing.shareViaInstagram(this.publicacionForm.value.caption,this.img).then((data)=>{
            //   console.log('social_sharing_instagram: ',data);
            // }).catch((error: any) => console.error('social_sharing_inatagram error', error));
            let share_instagram = yield this.instagram.share(this.img, this.publicacionForm.value.caption);
            console.log('sharing_instagram: ', share_instagram);
            //  .then(() => console.log('instagram shares') )
            //  .catch((error: any) => console.error('instagram error', error));
        });
    }
    subirImagen() {
        this.camera.getPicture({
            saveToPhotoAlbum: false,
            targetWidth: 300,
            targetHeight: 300,
            quality: 100,
            allowEdit: false,
            encodingType: this.camera.EncodingType.PNG,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
        }).then((imageData) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.img = 'data:image/png;base64,' + imageData;
            // this.instagram.share('data:image/png;base64,' + imageData, 'Caption')
            //   .then(() => console.log('Shared Instagram!'))
            //   .catch((error: any) => console.error('instagram error', error));
        }));
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PublicViewInstagramPage');
    }
};
PublicViewInstagramPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_native_camera__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_native_instagram_ngx__WEBPACK_IMPORTED_MODULE_5__.Instagram },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing },
    { type: src_app_services_instagram_service_service__WEBPACK_IMPORTED_MODULE_4__.InstagramServiceService }
];
PublicViewInstagramPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-public-view-instagram',
        template: _raw_loader_public_view_instagram_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_public_view_instagram_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PublicViewInstagramPage);



/***/ }),

/***/ 93355:
/*!*******************************************************!*\
  !*** ./src/app/services/instagram-service.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstagramServiceService": function() { return /* binding */ InstagramServiceService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);



let InstagramServiceService = class InstagramServiceService {
    constructor(http) {
        this.http = http;
        console.log('Hello InstagramServiceProvider Provider');
    }
    getToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let token_instagram_data = yield this.http.get('https://www.instagram.com/oauth/authorize/?client_id=c9b2eab155f74c498e713ac033c2f929&redirect_uri=https://www.icov.cl/&response_type=code').toPromise();
                console.log('token_instagram_data: ', token_instagram_data);
            }
            catch (e) {
                console.log('error-get-token-instagram: ', e);
            }
        });
    }
};
InstagramServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
InstagramServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], InstagramServiceService);



/***/ }),

/***/ 58388:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/public-view-instagram/public-view-instagram.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWMtdmlldy1pbnN0YWdyYW0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 96916:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/public-view-instagram/public-view-instagram.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the PublicViewInstagramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color='primary' no-border>\n\n  <ion-navbar color='primary'>\n    <ion-title>Publicar En Instagram</ion-title>\n\n    <!-- <button ion-button item-end outline  (click)=\"publicarInstagram()\">\n     Publicar\n   </button> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card>\n        <img *ngIf=\"img!=null\" [src]=\"img\"/>\n        <ion-card-content>\n          <ion-card-title>\n            {{publicacionForm.value.caption}}\n            </ion-card-title>\n            <ion-list>\n\n                <!-- <img *ngIf=\"img!=null\" [src]=\"img\"> -->\n            \n                <form [formGroup]=\"publicacionForm\">\n                  <ion-item>\n                    <ion-label fixed>Titulo Imagen</ion-label>\n                    <ion-textarea formControlName=\"caption\"></ion-textarea>\n                  </ion-item>\n            \n                </form>\n              </ion-list>\n        </ion-card-content>\n        <ion-row>\n            <ion-col>\n                <button (click)=\"subirImagen()\" ion-button icon-start clear small>\n                    <ion-icon name=\"camera\"></ion-icon>\n                    <!-- <div>12 Likes</kdiv> -->\n                  </button>\n            </ion-col>\n            <ion-col>\n              <!-- <button ion-button icon-start clear small>\n                <ion-icon name=\"text\"></ion-icon>\n                <div>4 Comments</div>\n              </button> -->\n            </ion-col>\n            <ion-col align-self-center text-center>\n              <!-- <ion-note>\n                11h ago\n              </ion-note> -->\n              <button (click)=\"publicarInstagram()\" ion-button icon-start clear small>\n                  <!-- <ion-icon name=\"camera\"></ion-icon> -->\n                  <ion-icon name=\"done-all\"></ion-icon>\n                  <!-- <div>12 Likes</kdiv> -->\n                </button>\n            </ion-col>\n          </ion-row>\n      </ion-card>\n<!-- \n  <ion-list>\n\n    <img *ngIf=\"img!=null\" [src]=\"img\">\n\n    <form [formGroup]=\"publicacionForm\">\n      <ion-item>\n        <ion-label fixed>Titulo Imagen</ion-label>\n        <ion-textarea formControName=\"caption\"></ion-textarea>\n      </ion-item>\n\n    </form>\n  </ion-list>\n\n  <ion-row>\n    <ion-col>\n      <button  (click)=\"subirImagen()\" ion-button block>Subir imagen</button>\n      \n    </ion-col>\n  </ion-row> -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_public-view-instagram_public-view-instagram_module_ts-es2015.js.map