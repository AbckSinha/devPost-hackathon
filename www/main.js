(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./video-tutorials/video-tutorials.module": [
		"./src/app/video-tutorials/video-tutorials.module.ts",
		"video-tutorials-video-tutorials-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\n     <app-header *ngIf=\"!headerOption\"></app-header>\n     <app-header-options *ngIf=\"headerOption\"></app-header-options>\n     <app-loading *ngIf=\"loading\"></app-loading>\n</router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-component/modal-component.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-component/modal-component.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"{{imgBasePath}}back_arrow.png\" alt=\"back_arrow\" class=\"back-arrow float-left\" (click)=\"goBack()\">\n<div class=\"head\">\n  <div class=\"header-bg\">\n    <div class=\"col-sm-12 col-md-12\">\n      <div class=\" _mt-20\">\n        <p id=\"header-text\" class=\"text-center\">{{title}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"app-card tnc-text\" [ngStyle]=\"{'position':appPosition}\">\n  <div class=\"container _mt-20\">\n    <h5>{{title}}</h5>\n    <ng-container>\n     <div>Need to fill</div>\n    </ng-container>\n    <!-- <div [innerHtml]=\"content\"></div> -->\n  </div>\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"activeModal.close('Close click')\">OK</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-tutorials/video-tutorials.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-tutorials/video-tutorials.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  video-tutorials works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/broken-page/broken-page.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/components/broken-page/broken-page.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"app-card\" [ngStyle]=\"{'min-height.px':appHeight}\">\n  <div class=\"card-body\">\n    <div class=\"col-sm-12 col-md-12\">\n      <img class=\"confirmation-img\" src=\"{{imgBasePath}}octo_01.png\" alt=\"\">\n    </div>  \n    <div class=\"broken\">\n      The device is jail broken!\n    </div>\n    \n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/common-data/common-data.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/components/common-data/common-data.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/confirmation-dialog/confirmation-dialog.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/components/confirmation-dialog/confirmation-dialog.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ title }}</h4>\n  <span class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </span>\n</div>\n<div class=\"modal-body\">\n  {{ message }}\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"decline()\">{{ btnCancelText }}</button>\n  <button type=\"button\" (click)=\"accept()\">{{ btnOkText }}</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/header-options/header-options.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/components/header-options/header-options.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-bg\">\n  <div class=\"row\">\n    <div class=\"header-img col-12\">\n      <ng-sidebar-container>\n\n        <!-- A sidebar -->\n        <ng-sidebar [opened]=\"opened\">\n          <p>Sidebar contents</p>\n          <button (click)=\"toggleSidebar()\">Toggle sidebar</button>\n        </ng-sidebar>\n\n        <!-- Page content -->\n        <div ng-sidebar-content style=\"padding-left: 10px;display: flex;\" class=\"row\">\n          <div class=\"col-2\">\n            <img src=\"{{imgBasePath}}notification.svg\" (click)=\"toggleSidebar()\" id=\"Menu\"\n              alt=\"Menu Image\">\n            </div>\n          <div class=\"col-7\"  id=\"header-text\">\n            {{title}}\n          </div>\n          <div class=\" col-1\" style=\"text-align: center;\">\n            <img src=\"{{imgBasePath}}notification.svg\" id=\"notification\" alt=\"Notification Image\">\n          </div>\n          <div class=\" col-2\" style=\"text-align: center;\">\n            <img src=\"{{imgBasePath}}Logout.svg\" (click)=\"logout()\" alt=\"Logout Image\" />\n          </div>\n        </div>\n\n      </ng-sidebar-container>\n    </div>\n    <!-- <div class=\" _mt-20 col-6\">\n      <p id=\"header-text\" class=\"text-center\">{{title}}</p>\n    </div>\n    <div class=\"header-img col-3\">\n      <img src=\"{{imgBasePath}}notification.svg\"  id=\"notification\" alt=\"Notification Image\">\n      <img src=\"{{imgBasePath}}Logout.svg\" (click)=\"logout()\" alt=\"Logout Image\" />\n\n    </div> -->\n\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/header/header.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/components/header/header.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-bg\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\" _mt-20\">\n      <p id=\"header-text\" class=\"text-center\">{{title}}</p>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/loading/loading.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/shared/components/loading/loading.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading-container\">\n    <div class=\"loader\">\n      <img src=\"{{imgBasePath}}loader.gif\" alt=\"\">\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-config.service.ts":
/*!***************************************!*\
  !*** ./src/app/app-config.service.ts ***!
  \***************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
    }
    /**
     * Loads the environment config file first. Reads the environment variable from the file
     * and based on that loads the appropriate configuration file - development or production
     */
    ConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line: deprecation
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                Accept: 'application/json', 'Content-Type': 'application/json', DataType: 'application/json'
            });
            // tslint:disable-next-line: deprecation
            // const options = new RequestOptions({ headers });
            _this.http.get('/config/env.json')
                .subscribe(function (envData) {
                _this.env = envData;
                _this.http.get('/config/' + envData.env + '.json')
                    .subscribe(function (data) {
                    _this.config = data;
                    resolve(true);
                }, function (error) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.json().error || 'Server error');
                });
            });
        });
    };
    /*
     * Returns environment variable based on given key
     *
     * @param key
     */
    ConfigService.prototype.getEnv = function (key) {
        return this.env[key];
    };
    /*
     * Returns configuration value based on given key
     *
     * @param key
     */
    ConfigService.prototype.get = function (key) {
        this.config = {
            localization: {
                defaultLanguage: 'en',
                languages: [
                    { code: 'en', name: 'EN', culture: 'en-EN' },
                    { code: 'fr', name: 'FR', culture: 'fr-FR' }
                ]
            }
        };
        return this.config[key];
    };
    ConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var appRoutes = [
    {
        path: '',
        loadChildren: './auth/auth.module#AuthModule',
        data: { allowUnAuthAccess: true }
    },
    {
        path: 'video-tutorials',
        loadChildren: './video-tutorials/video-tutorials.module#VideoTutorialsModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/shared.service */ "./src/shared/shared.service.ts");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-idle/core */ "./node_modules/@ng-idle/core/fesm5/ng-idle-core.js");
/* harmony import */ var src_shared_services_encrypt_decrypt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/encrypt-decrypt.service */ "./src/shared/services/encrypt-decrypt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/components/common-data/common-data.component */ "./src/shared/components/common-data/common-data.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var AppComponent = /** @class */ (function () {
    function AppComponent(router, sharedService, idle, changeDetection, commonData, zone, toastr, EncrDecr) {
        this.router = router;
        this.sharedService = sharedService;
        this.idle = idle;
        this.changeDetection = changeDetection;
        this.commonData = commonData;
        this.zone = zone;
        this.toastr = toastr;
        this.EncrDecr = EncrDecr;
        this.title = ' Video Tutorial';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.connection.type === 'none') {
            this.toastr.error('Please check your Internet Connection');
        }
        this.mobileOS = this.sharedService.getMobileOperatingSystem();
        if (this.mobileOS === 'Android' || this.mobileOS === 'iOS') {
            document.addEventListener('deviceready', function () {
                IRoot.isRooted(function (data) {
                    if (data === true) {
                        if (_this.mobileOS === 'Android') {
                            navigator.app.exitApp();
                        }
                        else {
                            _this.zone.run(function () {
                                _this.router.navigateByUrl('finance/broken-page');
                            });
                        }
                    }
                });
            }, false);
        }
        document.addEventListener('deviceready', function () {
            if (_this.mobileOS === 'iOS') {
                StatusBar.styleDefault();
            }
        }, false);
        this.sharedService.loginCheckFlag.subscribe(function (flag) {
            if (flag === 'true') {
                _this.idelTimeOut();
            }
            _this.changeDetection.detectChanges();
        });
        this.sharedService.headerCheckFlag.subscribe(function (flag) {
            if (flag === 'Header_Option') {
                _this.headerOption = true;
            }
            else {
                _this.headerOption = false;
            }
            _this.changeDetection.detectChanges();
        });
        this.sharedService.loadingCheckFlag.subscribe(function (flag) {
            if (flag === 'true') {
                _this.loading = true;
            }
            else {
                _this.loading = false;
            }
        });
        this.backButtonPress();
        localStorage.setItem('windowHeight', window.innerHeight.toString());
    };
    AppComponent.prototype.backButtonPress = function () {
        // backbutton event handler -- only for login page
        document.addEventListener('backbutton', function () {
            if (window.location.href === 'file:///android_asset/www/#/login') {
                navigator.app.exitApp();
            }
        }, false);
    };
    // Function call on time out
    AppComponent.prototype.idelTimeOut = function () {
        var _this = this;
        this.idle.setIdle(10);
        this.idle.setTimeout(this.commonData.SESSIONIDLETIME);
        this.idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_INTERRUPTSOURCES"]);
        this.idle.onTimeoutWarning.subscribe(function (countdown) {
        });
        this.idle.onTimeout.subscribe(function () {
            _this.performTimeOut();
        });
        this.idle.watch();
    };
    // function to call logout to backend
    AppComponent.prototype.sessionLogout = function (isIdle) {
        var _this = this;
        this.sharedService.stopLogin();
        this.sharedService.closePopupOnTimeOut();
        sessionStorage.setItem('SessionExpired', 'true');
        this.zone.run(function () {
            _this.router.navigate(['login']);
        });
        localStorage.clear();
        // this.headerOptionsComponent.logout();
    };
    // stop idle timer
    AppComponent.prototype.stopIdleTimer = function () {
        this.idle.stop();
        this.idle.clearInterrupts();
        this.idle.ngOnDestroy();
    };
    // Function for perform logout action
    AppComponent.prototype.performTimeOut = function () {
        this.stopIdleTimer();
        this.sessionLogout();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
        { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_3__["Idle"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_6__["CommonDataComponent"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: src_shared_services_encrypt_decrypt_service__WEBPACK_IMPORTED_MODULE_4__["EncryptDecryptService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/components/header/header.component */ "./src/shared/components/header/header.component.ts");
/* harmony import */ var src_shared_components_header_options_header_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/components/header-options/header-options.component */ "./src/shared/components/header-options/header-options.component.ts");
/* harmony import */ var src_shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/components/loading/loading.component */ "./src/shared/components/loading/loading.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-config.service */ "./src/app/app-config.service.ts");
/* harmony import */ var _shared_services_http_response_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/http-response-handler.service */ "./src/shared/services/http-response-handler.service.ts");
/* harmony import */ var _shared_utility_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/utility/http.service */ "./src/shared/utility/http.service.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal-component/modal-component.component */ "./src/app/modal-component/modal-component.component.ts");
/* harmony import */ var src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/shared/components/common-data/common-data.component */ "./src/shared/components/common-data/common-data.component.ts");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/fesm5/ng-idle-keepalive.js");
/* harmony import */ var src_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/shared/components/confirmation-dialog/confirmation-dialog.component */ "./src/shared/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _video_tutorials_video_tutorials_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./video-tutorials/video-tutorials.component */ "./src/app/video-tutorials/video-tutorials.component.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib_esmodule/index.js");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                src_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                src_shared_components_header_options_header_options_component__WEBPACK_IMPORTED_MODULE_4__["HeaderOptionsComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
                _modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
                src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_19__["CommonDataComponent"],
                src_shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"],
                _video_tutorials_video_tutorials_component__WEBPACK_IMPORTED_MODULE_24__["VideoTutorialsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_22__["NgIdleKeepaliveModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_20__["NgDatepickerModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_25__["SidebarModule"].forRoot()
            ],
            exports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]
            ],
            providers: [
                _app_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"],
                _shared_services_http_response_handler_service__WEBPACK_IMPORTED_MODULE_12__["HttpResponseHandlerService"],
                _shared_utility_http_service__WEBPACK_IMPORTED_MODULE_13__["HttpService"],
                src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_19__["CommonDataComponent"],
                src_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmationDialogComponent"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbActiveModal"]
            ],
            entryComponents: [
                _modal_component_modal_component_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
                src_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ConfirmationDialogComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthComponent = /** @class */ (function () {
    function AuthComponent(route) {
        this.route = route;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")).default]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/modal-component/modal-component.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modal-component/modal-component.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  height: 50vh;\n  background-image: url('home_bg.png');\n  background-repeat: no-repeat;\n  background-size: 100% 55%;\n  position: absolute;\n  width: 100%;\n  top: 0;\n}\n\n#header-text {\n  font-size: 19px;\n  color: #fff;\n}\n\n.back-arrow {\n  z-index: 1;\n}\n\n.modal-header {\n  padding: 0;\n}\n\n.modal-content {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border: none;\n  border-radius: 0;\n  overflow: hidden;\n  background-color: #fff;\n}\n\n.head {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100vh;\n}\n\n.modal-dialog {\n  height: 100%;\n}\n\n.tnc-text {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9hcHAvbW9kYWwtY29tcG9uZW50L21vZGFsLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWwtY29tcG9uZW50L21vZGFsLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtBQ09KOztBREpBO0VBQ0ksbUJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWNvbXBvbmVudC9tb2RhbC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJnIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lX2JnLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1NSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbn1cbiNoZWFkZXItdGV4dHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uYmFjay1hcnJvdyB7XG4gICAgei1pbmRleDogMTtcbn1cbi5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6MDtcbn1cbi5tb2RhbC1jb250ZW50e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmhlYWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7IFxufVxuLm1vZGFsLWRpYWxvZ3tcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50bmMtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iLCIuaGVhZGVyLWJnIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVfYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG59XG5cbiNoZWFkZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5iYWNrLWFycm93IHtcbiAgei1pbmRleDogMTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmhlYWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRuYy10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modal-component/modal-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modal-component/modal-component.component.ts ***!
  \**************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ModalComponent = /** @class */ (function () {
    function ModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.imgBasePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].images;
        this.appPosition = 'fixed';
        this.title = '';
        this.content = '';
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.goBack = function () {
        this.activeModal.close();
    };
    ModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ModalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ModalComponent.prototype, "content", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-component',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-component/modal-component.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-component.component.scss */ "./src/app/modal-component/modal-component.component.scss")).default]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/video-tutorials/video-tutorials.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/video-tutorials/video-tutorials.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXR1dG9yaWFscy92aWRlby10dXRvcmlhbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/video-tutorials/video-tutorials.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/video-tutorials/video-tutorials.component.ts ***!
  \**************************************************************/
/*! exports provided: VideoTutorialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTutorialsComponent", function() { return VideoTutorialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoTutorialsComponent = /** @class */ (function () {
    function VideoTutorialsComponent() {
    }
    VideoTutorialsComponent.prototype.ngOnInit = function () {
    };
    VideoTutorialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-tutorials',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-tutorials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-tutorials/video-tutorials.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-tutorials.component.scss */ "./src/app/video-tutorials/video-tutorials.component.scss")).default]
        })
    ], VideoTutorialsComponent);
    return VideoTutorialsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    baseURL: '',
    images: './assets/images/',
    data: './assets/data/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('deviceready', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(function (err) { return console.error(err); });
}, false);


/***/ }),

/***/ "./src/shared/components/broken-page/broken-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/shared/components/broken-page/broken-page.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".broken {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.confirmation-container {\n  margin: 50px;\n}\n\n.confirmation-container .confirmation-img {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9zaGFyZWQvY29tcG9uZW50cy9icm9rZW4tcGFnZS9icm9rZW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvY29tcG9uZW50cy9icm9rZW4tcGFnZS9icm9rZW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURBSTtFQUNJLGFBQUE7QUNFUiIsImZpbGUiOiJzcmMvc2hhcmVkL2NvbXBvbmVudHMvYnJva2VuLXBhZ2UvYnJva2VuLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJva2VuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG59XG4uY29uZmlybWF0aW9uLWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgLmNvbmZpcm1hdGlvbi1pbWcge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbn0iLCIuYnJva2VuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb25maXJtYXRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1MHB4O1xufVxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIgLmNvbmZpcm1hdGlvbi1pbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/shared/components/broken-page/broken-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/shared/components/broken-page/broken-page.component.ts ***!
  \********************************************************************/
/*! exports provided: BrokenPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokenPageComponent", function() { return BrokenPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/shared.service */ "./src/shared/shared.service.ts");




var BrokenPageComponent = /** @class */ (function () {
    function BrokenPageComponent(sharedService) {
        this.sharedService = sharedService;
        this.imgBasePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].images;
    }
    BrokenPageComponent.prototype.ngOnInit = function () {
        this.sharedService.setTitle('Broken');
        this.sharedService.setHeaderOption('Header_No_Option');
        this.appHeight = window.innerHeight - 80;
    };
    BrokenPageComponent.ctorParameters = function () { return [
        { type: src_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
    ]; };
    BrokenPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-broken-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./broken-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/broken-page/broken-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./broken-page.component.scss */ "./src/shared/components/broken-page/broken-page.component.scss")).default]
        })
    ], BrokenPageComponent);
    return BrokenPageComponent;
}());



/***/ }),

/***/ "./src/shared/components/common-data/common-data.component.scss":
/*!**********************************************************************!*\
  !*** ./src/shared/components/common-data/common-data.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2hhcmVkL2NvbXBvbmVudHMvY29tbW9uLWRhdGEvY29tbW9uLWRhdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/shared/components/common-data/common-data.component.ts":
/*!********************************************************************!*\
  !*** ./src/shared/components/common-data/common-data.component.ts ***!
  \********************************************************************/
/*! exports provided: CommonDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDataComponent", function() { return CommonDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonDataComponent = /** @class */ (function () {
    function CommonDataComponent() {
        this.BOOLEAN_VALUES = {
            BOOLEAN_TRUE: true,
            BOOLEAN_FALSE: false
        };
        this.STRING_VALUES = {
            STRING_TRUE: 'true',
            STRING_FALSE: 'false',
            NULL: null,
            USER_NAME: ''
        };
        this.yesNo = ['Yes', 'No'];
        this.countrycode = '+60';
        this.passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#]).{8,20}$';
        this.userIdPattern = '^(?![0-9]*$)[a-zA-Z0-9]+$';
        this.userNamePattern = '^[A-Za-z0-9 _@\'\‘\’./]*[A-Za-z@\'\‘\’./]+[A-Za-z0-9 _@\'\‘\’./]*$';
        this.mobileNumberPattern = '^[0-9]+$';
        this.nricNumberPattern = '^([0-9]{2}((?!00)(((0)[0-9])|((1)[0-2])))((?!00)([0-2][0-9]|3[0-1]))[-]?[0-9]{2}[-]?[0-9]{4})$';
        this.guarantorResponseArray = ['Yes', 'No'];
        this.financingTenureRange = ['6', '12', '18', '24', '30', '36', '42', '48', '54', '60', '66', '72', '78', '84', '90', '96', '102', '108'];
        this.rateTypeList = ['Fixed rate', 'Variable rate'];
        this.productTypeList = ['Conventional', 'Islamic'];
        this.vehicleTypeList = ['New', 'Unregistered Recon', 'Used'];
        this.staticCountry = '+6';
        this.emailIdPattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
        this.engineChasisPattern = '^[A-Za-z0-9_*-@/.\'\‘\’]*$';
        this.registrationNoPattern = '^[A-Za-z0-9 -]*$';
        this.addressPattern = '^[A-Za-z0-9 _(),\./\'\‘\’@*#+-]*$';
        this.employerNamePattern = '^[A-Za-z0-9 -_@\'\‘\’./^*,\&]*[A-Za-z@\'\‘\’./^*-,\&]+[A-Za-z0-9 _(),\&.^*-@\'\‘\’./\]*$';
        this.decimalPattern = '[0-9]+(\.[0-9][0-9]?)?';
        this.createAccountForm = {
            title: 'CIMB Dealers Account',
            subTitle: 'Fill in your details.',
            dealerNumber: {
                label: 'Dealer Code',
                requiredMsg: 'Dealer Code is required',
                minLengthMsg: 'Dealer Code must be 10 characters long',
                maxLengthMsg: 'Dealer Code must be 10 characters long',
                patternMsg: 'Dealer Number must be alphanumeric'
            },
            dealershipName: {
                label: 'Name of the Dealership',
                requiredMsg: 'Dealership Name is required'
            },
            mobileNumber: {
                label: 'Mobile Number',
                requiredMsg: 'Mobile Number is required',
                minLengthMsg: 'Mobile Number must be atleast 10 characters long',
                maxLengthMsg: 'Mobile Number must be atleast 10 characters long',
                patternMsg: 'Mobile Number must be numeric'
            },
            userId: {
                label: 'Enter user ID',
            }
        };
        this.otpForm = {
            // tslint:disable-next-line: max-line-length
            lastAttemptMsg: 'If you still do not receive your OTP after 60 seconds, please try again later. The SMS network may be experiencing heavy traffic',
            attemptsFinishedMsg: 'Your 3 attempts are finished.If you still do not receive your OTP after 60 seconds, ',
            registerAgainMsg: 'go back and please register again.',
            tryAgainMsg: 'go back and please try again'
        };
        this.currency = 'RM';
        this.STRING_YES_NO = {
            YES: 'Yes',
            NO: 'No'
        };
        this.STRING_OWNER_TYPE = {
            guarantor: 'Guarantor',
            customer: 'Customer'
        };
        this.searchCategory = 'spname';
        this.otpTimer = 60;
        this.makeOfVehicleList = ['audi', 'bmw', 'chevrolet', 'ford', 'honda',
            'hyundai', 'infiniti', 'jaguar', 'kia', 'land rover', 'lexus', 'mazda',
            'mercedes benz', 'mini', 'mitsubishi', 'nissan', 'perodua', 'peugeot',
            'porsche', 'proton', 'subaru', 'suzuki', 'toyota', 'volkswagen', 'volvo'];
        this.SESSIONIDLETIME = 300;
        this.EMPLOYMENTCODE = {
            CODEU001: 'U001',
            CODEU002: 'U002',
            CODEU003: 'U003',
            CODEU00X: 'U00X',
            CODE88888: '88888',
            CODE01: '01',
            CODE112: '112',
            CODE114: '114',
            CODE03: '03',
            CODE120: '120',
            CODE200: '200'
        };
        this.SOURCEOFINCOME = {
            CODEOTHER: '099'
        };
        this.PREPENDZERO = '0';
        this.ENCRYPTKEY = '123456$#@$^@1ERF';
    }
    CommonDataComponent.prototype.ngOnInit = function () { };
    CommonDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-common-data',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./common-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/common-data/common-data.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./common-data.component.scss */ "./src/shared/components/common-data/common-data.component.scss")).default]
        })
    ], CommonDataComponent);
    return CommonDataComponent;
}());



/***/ }),

/***/ "./src/shared/components/confirmation-dialog/confirmation-dialog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/shared/components/confirmation-dialog/confirmation-dialog.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-dialog {\n  margin-top: calc(100% - 20vh);\n}\n.modal-dialog .modal-header {\n  padding: 12px;\n  background-color: #ec1d23;\n  color: #fff;\n}\n.modal-dialog .modal-header .close {\n  color: #fff;\n}\n.modal-dialog .modal-body {\n  font-size: 16px;\n}\n.modal-dialog .modal-footer button {\n  margin: 5px 5px;\n}\n.modal-header .close {\n  width: auto;\n  box-shadow: none;\n}\n.btn-secondary, .btn-secondary:focus {\n  background-color: #D7D7D7;\n  color: #000000;\n  box-shadow: none;\n}\nbutton:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksNkJBQUE7QUNGSjtBREdJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0RSO0FERVE7RUFDSSxXQUFBO0FDQVo7QURHSTtFQUNJLGVBQUE7QUNEUjtBRElRO0VBQ0ksZUFBQTtBQ0ZaO0FETUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNISjtBREtBO0VBQ0kseUJBM0IyQjtFQTRCM0IsY0EzQlU7RUE0QlYsZ0JBQUE7QUNGSjtBRElBO0VBQ0ksYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuU2Vjb25kYXJ5LWJhY2tncm91bmRjb2xvcjogI0Q3RDdENztcbiRibGFjay1jb2xvcjogIzAwMDAwMDtcblxuLm1vZGFsLWRpYWxvZyB7XG4gICAgbWFyZ2luLXRvcDogY2FsYygxMDAlIC0gMjB2aCk7XG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzFkMjM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5tb2RhbC1mb290ZXIge1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiA1cHggNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuLXNlY29uZGFyeSwgLmJ0bi1zZWNvbmRhcnk6Zm9jdXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJ0blNlY29uZGFyeS1iYWNrZ3JvdW5kY29sb3I7XG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuIiwiLm1vZGFsLWRpYWxvZyB7XG4gIG1hcmdpbi10b3A6IGNhbGMoMTAwJSAtIDIwdmgpO1xufVxuLm1vZGFsLWRpYWxvZyAubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjMWQyMztcbiAgY29sb3I6ICNmZmY7XG59XG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ubW9kYWwtZGlhbG9nIC5tb2RhbC1ib2R5IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZm9vdGVyIGJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4IDVweDtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICB3aWR0aDogYXV0bztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1zZWNvbmRhcnksIC5idG4tc2Vjb25kYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q3RDdENztcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/shared/components/confirmation-dialog/confirmation-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/shared/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    ConfirmationDialogComponent_1 = ConfirmationDialogComponent;
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.decline = function () {
        this.activeModal.close(false);
    };
    ConfirmationDialogComponent.prototype.accept = function () {
        this.activeModal.close(true);
    };
    ConfirmationDialogComponent.prototype.dismiss = function () {
        this.activeModal.dismiss();
    };
    ConfirmationDialogComponent.prototype.confirm = function (title, message, btnOkText, btnCancelText, dialogSize) {
        if (btnOkText === void 0) { btnOkText = 'OK'; }
        if (btnCancelText === void 0) { btnCancelText = 'Cancel'; }
        if (dialogSize === void 0) { dialogSize = 'sm'; }
        var modalRef = this.modalService.open(ConfirmationDialogComponent_1, { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    };
    var ConfirmationDialogComponent_1;
    ConfirmationDialogComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ConfirmationDialogComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ConfirmationDialogComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ConfirmationDialogComponent.prototype, "btnOkText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ConfirmationDialogComponent.prototype, "btnCancelText", void 0);
    ConfirmationDialogComponent = ConfirmationDialogComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/confirmation-dialog/confirmation-dialog.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmation-dialog.component.scss */ "./src/shared/components/confirmation-dialog/confirmation-dialog.component.scss")).default]
        })
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/shared/components/header-options/header-options.component.scss":
/*!****************************************************************************!*\
  !*** ./src/shared/components/header-options/header-options.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  height: 50vh;\n  background-image: url('home_bg.png');\n  background-repeat: no-repeat;\n  background-size: 100% 55%;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  min-height: 400px;\n}\n\n#header-text {\n  font-size: 19px;\n  color: #fff;\n  margin-bottom: 0px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-img {\n  top: 20px;\n}\n\nimg {\n  height: 35px;\n}\n\n.col-3, .col-2, .col-5, .col-1, .col-8 {\n  padding: 0 !important;\n}\n\n::ng-deep .ng-sidebar {\n  background-color: #f4f4f4;\n  width: 300px;\n  padding: 2em 3em;\n}\n\nng-sidebar-container {\n  height: 100vh;\n  position: initial;\n}\n\n.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXItb3B0aW9ucy9oZWFkZXItb3B0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXItb3B0aW9ucy9oZWFkZXItb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKOztBREFFO0VBQ0UsU0FBQTtBQ0dKOztBRERFO0VBQ0ksWUFBQTtBQ0lOOztBREZFO0VBQ0UscUJBQUE7QUNLSjs7QURIRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESEU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNPSiIsImZpbGUiOiJzcmMvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyLW9wdGlvbnMvaGVhZGVyLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJnIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lX2JnLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1NSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgfVxuICAjaGVhZGVyLXRleHR7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyLWltZ3tcbiAgICB0b3A6IDIwcHg7XG4gIH1cbiAgaW1ne1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICB9XG4gIC5jb2wtMywgLmNvbC0yLCAuY29sLTUsIC5jb2wtMSwgLmNvbC04IHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5uZy1zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiAyZW0gM2VtO1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMCAyLjVlbSByZ2JhKDg1LCA4NSwgODUsIDAuNSk7XG4gIH1cbiAgbmctc2lkZWJhci1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gIH1cbiAgLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfSIsIi5oZWFkZXItYmcge1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZV9iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbiNoZWFkZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pbWcge1xuICB0b3A6IDIwcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLmNvbC0zLCAuY29sLTIsIC5jb2wtNSwgLmNvbC0xLCAuY29sLTgge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmctc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMmVtIDNlbTtcbn1cblxubmctc2lkZWJhci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/shared/components/header-options/header-options.component.ts":
/*!**************************************************************************!*\
  !*** ./src/shared/components/header-options/header-options.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderOptionsComponent", function() { return HeaderOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/shared.service */ "./src/shared/shared.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-idle/core */ "./node_modules/@ng-idle/core/fesm5/ng-idle-core.js");






var HeaderOptionsComponent = /** @class */ (function () {
    function HeaderOptionsComponent(router, sharedService, idle) {
        this.router = router;
        this.sharedService = sharedService;
        this.idle = idle;
        this.imgBasePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].images;
        this.opened = false;
    }
    HeaderOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.title.subscribe(function (title) {
            _this.title = title;
        });
    };
    /*
      Logout functionality
    */
    HeaderOptionsComponent.prototype.logout = function () {
        this.router.navigate(['login']);
    };
    HeaderOptionsComponent.prototype.toggleSidebar = function () {
        this.opened = !this.opened;
    };
    HeaderOptionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
        { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__["Idle"] }
    ]; };
    HeaderOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-options',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-options.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/header-options/header-options.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-options.component.scss */ "./src/shared/components/header-options/header-options.component.scss")).default]
        })
    ], HeaderOptionsComponent);
    return HeaderOptionsComponent;
}());



/***/ }),

/***/ "./src/shared/components/header/header.component.scss":
/*!************************************************************!*\
  !*** ./src/shared/components/header/header.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  height: 50vh;\n  background-image: url('home_bg.png');\n  background-repeat: no-repeat;\n  background-size: 100% 55%;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  min-height: 400px;\n}\n\n#header-text {\n  font-size: 19px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZyB7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZV9iZy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gIH1cbiAgI2hlYWRlci10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfSIsIi5oZWFkZXItYmcge1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZV9iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbiNoZWFkZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/shared/components/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/shared/components/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.service */ "./src/shared/shared.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, sharedService, location) {
        this.router = router;
        this.sharedService = sharedService;
        this.location = location;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.title.subscribe(function (title) {
            _this.title = title;
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/shared/components/header/header.component.scss")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/shared/components/loading/loading.component.scss":
/*!**************************************************************!*\
  !*** ./src/shared/components/loading/loading.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-container {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n.loading-container .loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.loading-container .loader img {\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9zaGFyZWQvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0FDR1oiLCJmaWxlIjoic3JjL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjIwKTsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTAwJTsgXG4gICAgei1pbmRleDogMTAwO1xuICAgIC5sb2FkZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogNTAlOyBcbiAgICAgICAgbGVmdDogNTAlOyBcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubG9hZGluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufVxuLmxvYWRpbmctY29udGFpbmVyIC5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmxvYWRpbmctY29udGFpbmVyIC5sb2FkZXIgaW1nIHtcbiAgaGVpZ2h0OiA0NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/shared/components/loading/loading.component.ts":
/*!************************************************************!*\
  !*** ./src/shared/components/loading/loading.component.ts ***!
  \************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.imgBasePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].images;
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/shared/components/loading/loading.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.component.scss */ "./src/shared/components/loading/loading.component.scss")).default]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/shared/services/encrypt-decrypt.service.ts":
/*!********************************************************!*\
  !*** ./src/shared/services/encrypt-decrypt.service.ts ***!
  \********************************************************/
/*! exports provided: EncryptDecryptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptDecryptService", function() { return EncryptDecryptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);



var EncryptDecryptService = /** @class */ (function () {
    function EncryptDecryptService() {
        this.keySize = 128 / 32;
        this.iterationCount = 1000;
    }
    // The set method is use for encrypt the value.
    EncryptDecryptService.prototype.set = function (keys, value) {
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(keys);
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(keys);
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(value.toString()), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_2__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_2__["pad"].Pkcs7
        });
        return encrypted.toString();
    };
    // The get method is use for decrypt the value.
    EncryptDecryptService.prototype.get = function (keys, value) {
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(keys);
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8.parse(keys);
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_2__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_2__["pad"].Pkcs7
        });
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
    };
    // Generate key for encryption
    EncryptDecryptService.prototype.generateKey = function (salt, passPhrase) {
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["PBKDF2"](passPhrase, crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Hex.parse(salt), { keySize: this.keySize, iterations: this.iterationCount });
        return key;
    };
    // Encryption logic
    EncryptDecryptService.prototype.encrypt = function (salt, iv, passPhrase, plainText) {
        var key = this.generateKey(salt, passPhrase);
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(plainText, key, { iv: crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Hex.parse(iv) });
        return crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Base64.stringify(encrypted.ciphertext);
    };
    // Decryption logic
    EncryptDecryptService.prototype.decrypt = function (salt, iv, passPhrase, cipherText) {
        var key = this.generateKey(salt, passPhrase);
        var ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Base64.parse(cipherText);
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(ciphertext, key, { iv: crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Hex.parse(iv) });
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
    };
    EncryptDecryptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EncryptDecryptService);
    return EncryptDecryptService;
}());



/***/ }),

/***/ "./src/shared/services/http-response-handler.service.ts":
/*!**************************************************************!*\
  !*** ./src/shared/services/http-response-handler.service.ts ***!
  \**************************************************************/
/*! exports provided: HttpResponseHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseHandlerService", function() { return HttpResponseHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var HttpResponseHandlerService = /** @class */ (function () {
    function HttpResponseHandlerService(toastr) {
        this.toastr = toastr;
    }
    /*
    * Global http error handler.
    *
    * @param error
    * @param source
    * @returns {ErrorObservable}
    */
    HttpResponseHandlerService.prototype.onCatch = function (response) {
        switch (response) {
            case 400:
                this.handleBadRequest(response);
                break;
            case 401:
                this.handleUnauthorized(response);
                break;
            case 403:
                this.handleForbidden();
                break;
            case 404:
                this.handleNotFound(response);
                break;
            case 500:
                this.handleServerError();
                break;
            case 0:
                this.handleServerError();
                break;
            default:
                break;
        }
    };
    /*
     * Shows errors when server response status is 400
     *
     * @param error
     */
    HttpResponseHandlerService.prototype.handleBadRequest = function (responseBody) {
        if (responseBody._body) {
            try {
                var bodyParsed = responseBody.json();
                this.handleErrorMessages(bodyParsed);
            }
            catch (error) {
                this.handleServerError();
            }
        }
        else {
            this.handleServerError();
        }
    };
    /*
     * Shows console logs when server response status is 401
     *
     * @param responseBody
     */
    HttpResponseHandlerService.prototype.handleUnauthorized = function (responseBody) {
        this.toastr.error('Server is not Available!');
    };
    /**
     * Shows console logs when server response status is 403
     */
    HttpResponseHandlerService.prototype.handleForbidden = function () {
        this.toastr.error('Server is not Available!');
    };
    /*
     * Shows console logs when server response status is 404
     *
     * @param responseBody
     */
    HttpResponseHandlerService.prototype.handleNotFound = function (responseBody) {
        this.toastr.error('Server is not Available!');
    };
    /**
     * Shows console logs when server response status is 500
     */
    HttpResponseHandlerService.prototype.handleServerError = function () {
        this.toastr.error('Server is not Available!');
    };
    /*
     * Parses server response and shows notification errors with translated messages
     *
     * @param response
     */
    HttpResponseHandlerService.prototype.handleErrorMessages = function (response) {
        var e_1, _a;
        if (!response) {
            return;
        }
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(response)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (Array.isArray(response[key])) {
                    response[key].forEach(function (value) { return console.log(value); });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    HttpResponseHandlerService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    HttpResponseHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpResponseHandlerService);
    return HttpResponseHandlerService;
}());



/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/confirmation-dialog/confirmation-dialog.component */ "./src/shared/components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _utility_dateformat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility/dateformat */ "./src/shared/utility/dateformat.ts");
/* harmony import */ var _utility_dobFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utility/dobFormat */ "./src/shared/utility/dobFormat.ts");
/* harmony import */ var _components_broken_page_broken_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/broken-page/broken-page.component */ "./src/shared/components/broken-page/broken-page.component.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: [
                _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"],
                _utility_dateformat__WEBPACK_IMPORTED_MODULE_6__["DateformatPipe"],
                _utility_dobFormat__WEBPACK_IMPORTED_MODULE_7__["DobformatPipe"],
                _components_broken_page_broken_page_component__WEBPACK_IMPORTED_MODULE_8__["BrokenPageComponent"]
            ],
            exports: [_utility_dateformat__WEBPACK_IMPORTED_MODULE_6__["DateformatPipe"], _utility_dobFormat__WEBPACK_IMPORTED_MODULE_7__["DobformatPipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/shared/shared.service.ts":
/*!**************************************!*\
  !*** ./src/shared/shared.service.ts ***!
  \**************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var SharedService = /** @class */ (function () {
    function SharedService(toastr) {
        this.toastr = toastr;
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.headerFlag = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.headerCheckFlag = this.headerFlag.asObservable();
        this.loadingFlag = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.loadingCheckFlag = this.loadingFlag.asObservable();
        this.loginFlag = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.loginCheckFlag = this.loginFlag.asObservable();
    }
    // Function for setting up a title
    SharedService.prototype.setTitle = function (title) {
        this.title.next(title);
    };
    // function to publish flag n successful login
    SharedService.prototype.startLogin = function () {
        this.loginFlag.next('true');
    };
    // function to publish flag n successful login
    SharedService.prototype.stopLogin = function () {
        this.loginFlag.next('false');
    };
    // Function for setting up a header
    SharedService.prototype.setHeaderOption = function (type) {
        this.headerFlag.next(type);
    };
    // Function for showing loader
    SharedService.prototype.startLoading = function () {
        this.loadingFlag.next('true');
    };
    // Function for hide loader
    SharedService.prototype.stopLoading = function () {
        this.loadingFlag.next('false');
    };
    // Toast message
    SharedService.prototype.showError = function (msg) {
        this.toastr.error(msg);
    };
    // Function for detecting device OS
    SharedService.prototype.getMobileOperatingSystem = function () {
        var userAgent = navigator.userAgent || navigator.vendor;
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return 'Windows Phone';
        }
        if (/android/i.test(userAgent)) {
            return 'Android';
        }
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent)) {
            return 'iOS';
        }
        return 'unknown';
    };
    SharedService.prototype.closePopupOnTimeOut = function () {
        var clearDateOverlay = document.getElementsByClassName('modal')[0];
        if (clearDateOverlay !== undefined || clearDateOverlay != null) {
            var pickerEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: false
            });
            clearDateOverlay.dispatchEvent(pickerEvent);
        }
    };
    SharedService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/shared/utility/dateformat.ts":
/*!******************************************!*\
  !*** ./src/shared/utility/dateformat.ts ***!
  \******************************************/
/*! exports provided: DateformatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateformatPipe", function() { return DateformatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateformatPipe = /** @class */ (function () {
    function DateformatPipe() {
    }
    DateformatPipe.prototype.transform = function (value) {
        var dd = value.substr(3, 2);
        var MM = value.substr(0, 2);
        var yyyy = value.substr(6, 4);
        var date = dd + "/" + MM + "/" + yyyy;
        return "" + date;
    };
    DateformatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateformatPipe',
        })
    ], DateformatPipe);
    return DateformatPipe;
}());



/***/ }),

/***/ "./src/shared/utility/dobFormat.ts":
/*!*****************************************!*\
  !*** ./src/shared/utility/dobFormat.ts ***!
  \*****************************************/
/*! exports provided: DobformatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DobformatPipe", function() { return DobformatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DobformatPipe = /** @class */ (function () {
    function DobformatPipe() {
    }
    DobformatPipe.prototype.transform = function (value) {
        if (value && value !== null && value !== undefined) {
            var dd = value.substr(8, 2);
            var MM = value.substr(5, 2);
            var yyyy = value.substr(0, 4);
            var date = dd + "/" + MM + "/" + yyyy;
            return "" + date;
        }
        else {
            return '';
        }
    };
    DobformatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dobFormatPipe',
        })
    ], DobformatPipe);
    return DobformatPipe;
}());



/***/ }),

/***/ "./src/shared/utility/http.adapter.ts":
/*!********************************************!*\
  !*** ./src/shared/utility/http.adapter.ts ***!
  \********************************************/
/*! exports provided: HttpAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpAdapter", function() { return HttpAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var HttpAdapter = /** @class */ (function () {
    function HttpAdapter() {
    }
    HttpAdapter.baseAdapter = function (res, adapterFn) {
        if (res.status === 200) {
            try {
                // const jsonRes = res.json();
                return adapterFn ? adapterFn.call(undefined, res) : res;
            }
            catch (e) {
                return res;
            }
        }
    };
    return HttpAdapter;
}());



/***/ }),

/***/ "./src/shared/utility/http.service.ts":
/*!********************************************!*\
  !*** ./src/shared/utility/http.service.ts ***!
  \********************************************/
/*! exports provided: MediaType, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.adapter */ "./src/shared/utility/http.adapter.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-config.service */ "./src/app/app-config.service.ts");
/* harmony import */ var src_shared_services_http_response_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/http-response-handler.service */ "./src/shared/services/http-response-handler.service.ts");






/**
 * Supported @Produces media types
 */
var MediaType;
(function (MediaType) {
    MediaType[MediaType["JSON"] = 0] = "JSON";
    MediaType[MediaType["FORM_DATA"] = 1] = "FORM_DATA";
})(MediaType || (MediaType = {}));
var HttpService = /** @class */ (function () {
    function HttpService(http, configService, responseHandler) {
        this.http = http;
        this.configService = configService;
        this.responseHandler = responseHandler;
    }
    HttpService.prototype.getBaseUrl = function () {
        return this.configService.get('api').baseUrl;
    };
    HttpService.prototype.getEnvUrl = function () {
        return this.configService.get('api').envUrl;
    };
    HttpService.prototype.getDownloadUrl = function () {
        return this.configService.get('api').downloadUrl;
    };
    // tslint:disable-next-line: ban-types
    HttpService.prototype.getDefaultHeaders = function () {
        return null;
    };
    /*
    * Request Interceptor
    *
    * @method requestInterceptor
    * @param {Request} req - request object
    */
    // tslint:disable-next-line: deprecation
    HttpService.prototype.requestInterceptor = function (req) { };
    /*
    * Response Interceptor
    *
    * @method responseInterceptor
    * @param {Response} observableRes - response object
    * @returns {Response} res - transformed response object
    */
    // tslint:disable-next-line: ban-types
    HttpService.prototype.responseInterceptor = function (observableRes, adapterFn) {
        var _this = this;
        return observableRes
            .subscribe(function (res) { return _http_adapter__WEBPACK_IMPORTED_MODULE_2__["HttpAdapter"].baseAdapter(res, adapterFn); }, function (error) { return _this.responseHandler.onCatch(error); });
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_app_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: src_shared_services_http_response_handler_service__WEBPACK_IMPORTED_MODULE_5__["HttpResponseHandlerService"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mycv207i/Desktop/AngularProject/hack-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map