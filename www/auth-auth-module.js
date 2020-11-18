(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/bn-ng-idle/fesm5/bn-ng-idle.js":
/*!*****************************************************!*\
  !*** ./node_modules/bn-ng-idle/fesm5/bn-ng-idle.js ***!
  \*****************************************************/
/*! exports provided: BnNgIdleService, BnNgIdleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BnNgIdleService", function() { return BnNgIdleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BnNgIdleModule", function() { return BnNgIdleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BnNgIdleService = /** @class */ (function () {
    function BnNgIdleService() {
        this.expired$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * @param {?} timeOutSeconds
     * @return {?}
     */
    BnNgIdleService.prototype.startWatching = /**
     * @param {?} timeOutSeconds
     * @return {?}
     */
    function (timeOutSeconds) {
        var _this = this;
        this.idle$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mosuemove'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousedown'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'keypress'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'DOMMouseScroll'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousewheel'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'touchmove'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'MSPointerMove'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'mousemove'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize'));
        this.timeOutMilliSeconds = timeOutSeconds * 1000;
        this.idleSubscription = this.idle$.subscribe(function (res) {
            _this.resetTimer();
        });
        this.startTimer();
        return this.expired$;
    };
    /**
     * @return {?}
     */
    BnNgIdleService.prototype.startTimer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(this.timeOutMilliSeconds, this.timeOutMilliSeconds).subscribe(function (res) {
            _this.expired$.next(true);
        });
    };
    /**
     * @return {?}
     */
    BnNgIdleService.prototype.resetTimer = /**
     * @return {?}
     */
    function () {
        this.timer$.unsubscribe();
        this.startTimer();
    };
    /**
     * @return {?}
     */
    BnNgIdleService.prototype.stopTimer = /**
     * @return {?}
     */
    function () {
        this.timer$.unsubscribe();
        this.idleSubscription.unsubscribe();
    };
    BnNgIdleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    BnNgIdleService.ctorParameters = function () { return []; };
    /** @nocollapse */ BnNgIdleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function BnNgIdleService_Factory() { return new BnNgIdleService(); }, token: BnNgIdleService, providedIn: "root" });
    return BnNgIdleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BnNgIdleModule = /** @class */ (function () {
    function BnNgIdleModule() {
    }
    BnNgIdleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [],
                    providers: [BnNgIdleService],
                    exports: []
                },] },
    ];
    return BnNgIdleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm4tbmctaWRsZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYm4tbmctaWRsZS9saWIvYm4tbmctaWRsZS5zZXJ2aWNlLnRzIiwibmc6Ly9ibi1uZy1pZGxlL2xpYi9ibi1uZy1pZGxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0LCB0aW1lciB9IGZyb20gJ3J4anMnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJuTmdJZGxlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBpZGxlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICBwcml2YXRlIHRpbWVyJDtcbiAgcHJpdmF0ZSB0aW1lT3V0TWlsbGlTZWNvbmRzOiBudW1iZXI7XG4gIHByaXZhdGUgaWRsZVN1YnNjcmlwdGlvbjtcblxuICBwdWJsaWMgZXhwaXJlZCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBwdWJsaWMgc3RhcnRXYXRjaGluZyh0aW1lT3V0U2Vjb25kcyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5pZGxlJCA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnbW9zdWVtb3ZlJyksXG4gICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpLFxuICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vkb3duJyksXG4gICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXlwcmVzcycpLFxuICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnRE9NTW91c2VTY3JvbGwnKSxcbiAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNld2hlZWwnKSxcbiAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ3RvdWNobW92ZScpLFxuICAgICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnTVNQb2ludGVyTW92ZScpLFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ21vdXNlbW92ZScpLFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLFxuICAgICk7XG5cbiAgICB0aGlzLnRpbWVPdXRNaWxsaVNlY29uZHMgPSB0aW1lT3V0U2Vjb25kcyAqIDEwMDA7XG5cbiAgICB0aGlzLmlkbGVTdWJzY3JpcHRpb24gPSB0aGlzLmlkbGUkLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhwaXJlZCQ7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0VGltZXIoKSB7XG4gICB0aGlzLnRpbWVyJCA9IHRpbWVyKHRoaXMudGltZU91dE1pbGxpU2Vjb25kcyx0aGlzLnRpbWVPdXRNaWxsaVNlY29uZHMpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICB0aGlzLmV4cGlyZWQkLm5leHQodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRUaW1lcigpIHtcbiAgICB0aGlzLnRpbWVyJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgcHVibGljIHN0b3BUaW1lcigpIHtcbiAgICB0aGlzLnRpbWVyJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaWRsZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm5OZ0lkbGVTZXJ2aWNlIH0gZnJvbSAnLi9ibi1uZy1pZGxlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIHByb3ZpZGVyczogW0JuTmdJZGxlU2VydmljZV0sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJuTmdJZGxlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQWdCRTt3QkFGb0MsSUFBSSxPQUFPLEVBQVc7S0FJekQ7Ozs7O0lBRU0sdUNBQWE7Ozs7Y0FBQyxjQUFjOztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FDaEIsU0FBUyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFDaEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFDNUIsU0FBUyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFDaEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsRUFDL0IsU0FBUyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxFQUNyQyxTQUFTLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUNqQyxTQUFTLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxFQUNoQyxTQUFTLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxFQUNwQyxTQUFTLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUM5QixTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUM1QixDQUFDO1FBRUYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFFakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUMvQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Ozs7SUFHZixvQ0FBVTs7Ozs7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDbEYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUIsQ0FBQyxDQUFDOzs7OztJQUdFLG9DQUFVOzs7O1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Ozs7O0lBR2IsbUNBQVM7Ozs7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7O2dCQXREdkMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7MEJBTkQ7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDNUIsT0FBTyxFQUFFLEVBQUU7aUJBQ1o7O3lCQVREOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/home-dashboard/home-dashboard.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/home-dashboard/home-dashboard.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-card\" [ngStyle]=\"{'min-height.px':appHeight}\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title user-name\">Hi, User12345</h5>\n    <p class=\"card-text\">What would you like to do today?</p>\n\n    <div class=\"row\">\n      <div class=\"card dashboard-card card-apply\">\n        <div class=\"card-body dashboard-card-body\">\n          <div class=\"sub-card-img card-apply-img\"></div>\n          <!-- <img class=\"sub-card-apply\" src=\"{{imgBasePath}}apply_icon.png\" alt=\"Apply Finance Image\"> -->\n          <h5 class=\"sub-card-title _mt-10\">Apply</h5>\n          <p class=\"sub-card-text\">Submit Application</p>\n        </div>\n      </div>\n\n      <div class=\"card dashboard-card card-track\">\n        <div class=\"card-body dashboard-card-body\">\n          <div class=\"sub-card-img card-track-img\"></div>\n          <!-- <img class=\"sub-card-track\" src=\"{{imgBasePath}}track_icon.png\" alt=\"Track Application Image\"> -->\n          <h5 class=\"sub-card-title _mt-10\">Track</h5>\n          <p class=\"sub-card-text\">Edit / Track Application</p>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"card dashboard-card card-video\" (click)=\"tutorials()\">\n      <div class=\"card-body dashboard-card-body\">\n        <div class=\"sub-card-img card-video-img\"></div>\n        <!-- <img class=\"sub-card-setting\" src=\"{{imgBasePath}}settings_icon.png\" alt=\"Settings Image\"> -->\n        <h5 class=\"sub-card-title _mt-10\">Tutorials</h5>\n        <p class=\"sub-card-text\">Watch Video Tutorials</p>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backgroundImage\">\n\n\n  <div>\n    <img src=\"{{imgBasePath}}settlement.png\" alt=\"\" class=\"login-logo\">\n  </div>\n  <div class=\"login-container\">\n    <div class=\"login-form _ml-30 _mr-30\">\n      <div *ngIf='SessionExpired' class=\"red-alert\"> Your session has expired. </div>\n      <!-- <div class=\"login-header _mt-10\"> CIMB </div>\n    <div class=\"login-subheader _mt-10\"> Auto Finance Solution </div> -->\n\n      <form class=\"login-container-form _mt-20\" [formGroup]=\"loginForm\">\n        <div class=\"form-group input-group _mt-10\">\n          <input type=\"text\" placeholder=\"User ID\" formControlName=\"userName\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && formData.userName.errors }\" maxlength=\"32\" />\n          <div *ngIf=\"submitted && formData.userName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"formData.userName.errors.required\">Enter User ID.</div>\n          </div>\n        </div>\n        <div class=\"form-group input-group _mt-10\">\n          <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && formData.password.errors }\" maxlength=\"20\" />\n\n          <img *ngIf=\"touchId\" id=\"finger-img\" src=\"{{imgBasePath}}fingerprint.svg\" alt=\"finger Image\"\n            (click)=\"allowFingerFaceprint()\">\n\n          <img *ngIf=\"faceId\" id=\"face-img\" src=\"{{imgBasePath}}face_id.svg\" alt=\"face Image\"\n            (click)=\"allowFingerFaceprint()\">\n\n          <div *ngIf=\"submitted && formData.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"formData.password.errors.required\">Enter Password.</div>\n          </div>\n        </div>\n        <div class=\"_mt-10 clearfix\">\n          <a routerLink=\"\" (click)=\"forgotPassword()\" class=\"forgot-link\">Forgot Password?</a>\n        </div>\n\n        <div class=\"_mt-10 _mb-20\">\n          <button class=\"btn-login _mb-0\" (click)=\"onSubmit(loginForm.value)\">Login</button>\n          <button class=\"btn-secondary\" (click)=\"redirectToRegister()\">Register</button>\n        </div>\n      </form>\n      <footer>Version 1.0.0</footer>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _components_home_dashboard_home_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-dashboard/home-dashboard.component */ "./src/app/auth/components/home-dashboard/home-dashboard.component.ts");





var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], data: { title: 'Login' }, },
    { path: 'home', component: _components_home_dashboard_home_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["HomeDashboardComponent"], data: { title: 'Home' } }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: COMPONENTS, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/components/common-data/common-data.component */ "./src/shared/components/common-data/common-data.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_home_dashboard_home_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-dashboard/home-dashboard.component */ "./src/app/auth/components/home-dashboard/home-dashboard.component.ts");










var COMPONENTS = [
    _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    _components_home_dashboard_home_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["HomeDashboardComponent"]
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: COMPONENTS,
            providers: [
                src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_6__["CommonDataComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
            ],
            exports: COMPONENTS
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/home-dashboard/home-dashboard.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/auth/components/home-dashboard/home-dashboard.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header-text {\n  font-size: 19px;\n  color: #FFFFFF;\n  text-align: center;\n  margin-top: 5px;\n}\n\n.card-title {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.card-title.user-name {\n  font-size: 16px;\n}\n\n.card-text {\n  font-size: 16px;\n}\n\n.home-image {\n  height: 50vh;\n  background-image: url('home_bg.png');\n  background-repeat: no-repeat;\n  background-size: 100% 55%;\n  position: relative;\n  top: -10px;\n}\n\n.header-img {\n  height: 47px;\n  width: 53px;\n  background: #cf1d21;\n  position: fixed;\n  top: 10px;\n}\n\n#notification {\n  right: 50px;\n}\n\n#logout {\n  right: 3px;\n}\n\n.ml {\n  margin-left: auto;\n}\n\n.sub-card-title {\n  font-size: 15px;\n  color: #000000;\n  font-weight: bold;\n  line-height: 17px;\n}\n\n.sub-card-text {\n  font-size: 10px;\n  line-height: 13px;\n  color: gray;\n  text-align: left;\n}\n\n.card {\n  border: none;\n  border-radius: 0;\n  width: 43%;\n  margin: 3%;\n  display: inline-block;\n}\n\n.sales-img {\n  width: 60%;\n  margin-left: 0px;\n  margin-top: 15px;\n  margin-bottom: 12px;\n}\n\n.dashboard-card:hover {\n  box-shadow: 2px 2px 5px #999999;\n  background-color: #ec1d23;\n  height: 165px;\n  border-radius: 5px;\n}\n\n.dashboard-card:hover .sub-card-text {\n  font-size: 11px;\n  line-height: 13px;\n  color: #fff;\n  text-align: left;\n}\n\n.dashboard-card:hover .sub-card-title {\n  font-size: 17px;\n  color: #fff;\n  font-weight: bold;\n  line-height: 14px;\n}\n\n.dashboard-card {\n  box-shadow: 2px 2px 5px #999999;\n  background: #FFFFFF;\n  height: 165px;\n  border-radius: 5px;\n}\n\n.dashboard-card-body {\n  padding: 0.5rem 1.25rem;\n}\n\n.sub-card-img {\n  height: 40px;\n  margin-top: 40px;\n  background-repeat: no-repeat;\n  background-size: 40px;\n}\n\n.card-apply-img {\n  background-image: url('apply_icon.png');\n}\n\n.card-track-img {\n  background-image: url('track_icon.png');\n}\n\n.card-manage-img {\n  background-image: url('sales_icon.png');\n}\n\n.card-settings-img {\n  background-image: url('settings_icon.png');\n}\n\n.card-video-img {\n  background-image: url('Tutorials2.png');\n}\n\n.card-apply:hover .card-apply-img, .card-apply:focus .card-apply-img {\n  background-image: url('apply_icon_white.png');\n}\n\n.card-track:hover .card-track-img, .card-track:focus .card-track-img {\n  background-image: url('track_icon_white.png');\n}\n\n.card-manage:hover .card-manage-img, .card-manage:focus .card-manage-img {\n  background-image: url('sales_icon_white.png');\n}\n\n.card-settings:hover .card-settings-img, .card-settings:focus .card-settings-img {\n  background-image: url('settings_icon_white.png');\n}\n\n.card-video:hover .card-video-img, .card-video:focus .card-video-img {\n  background-image: url('TutorialsNEW.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL2hvbWUtZGFzaGJvYXJkL2hvbWUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvaG9tZS1kYXNoYm9hcmQvaG9tZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxlQUFBO0VBQ0EsY0FOWTtFQU9aLGtCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FESUU7RUFDRSxlQUFBO0FDRko7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7QUNIRjs7QURXQTtFQUNFLGlCQUFBO0FDUkY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsY0F4RFk7RUF5RFosaUJBQUE7RUFDQSxpQkFBQTtBQ1BGOztBRFVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDUEY7O0FEVUE7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDUkY7O0FEV0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUkY7O0FEV0E7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDUkY7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURXQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1JGOztBRFdBO0VBQ0UsK0JBQUE7RUFDQSxtQkE3R1k7RUE4R1osYUFBQTtFQUNBLGtCQUFBO0FDUkY7O0FEV0E7RUFDRSx1QkFBQTtBQ1JGOztBRCtCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUM1QkY7O0FEOEJBO0VBQ0UsdUNBQUE7QUMzQkY7O0FENkJBO0VBQ0UsdUNBQUE7QUMxQkY7O0FENEJBO0VBQ0UsdUNBQUE7QUN6QkY7O0FEMkJBO0VBQ0UsMENBQUE7QUN4QkY7O0FEMEJBO0VBQ0UsdUNBQUE7QUN2QkY7O0FEMkJFO0VBQ0UsNkNBQUE7QUN4Qko7O0FENEJFO0VBQ0UsNkNBQUE7QUN6Qko7O0FENkJFO0VBQ0UsNkNBQUE7QUMxQko7O0FEOEJFO0VBQ0UsZ0RBQUE7QUMzQko7O0FEK0JFO0VBQ0UseUNBQUE7QUM1QkoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvaG9tZS1kYXNoYm9hcmQvaG9tZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGUtY29sb3I6ICNGRkZGRkY7XG4kc3ViLWNhcmQtdGl0bGU6ICMzODc5Qzc7XG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XG5cbiNoZWFkZXItdGV4dHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjokd2hpdGUtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDo1cHhcbn1cblxuLmNhcmQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICYudXNlci1uYW1le1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4uY2FyZC10ZXh0e1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ob21lLWltYWdlIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVfYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG59XG5cbi5oZWFkZXItaW1ne1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiA1M3B4O1xuICBiYWNrZ3JvdW5kOiAjY2YxZDIxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbn1cblxuI25vdGlmaWNhdGlvbntcbiAgcmlnaHQ6IDUwcHg7XG59XG5cbiNsb2dvdXQge1xuICByaWdodDogM3B4O1xufVxuXG4vLyAuc3ViLWNhcmQtaW1ne1xuLy8gICBoZWlnaHQ6IDQ4JTtcbi8vICAgd2lkdGg6IDUyJTtcbi8vICAgLyogbWFyZ2luLWJvdHRvbTogNXB4OyAqL1xuLy8gfVxuLm1se1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5zdWItY2FyZC10aXRsZXtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjokYmxhY2stY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLnN1Yi1jYXJkLXRleHR7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2FyZHtcbiAgLy8gYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2RhZGFkYTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogNDMlO1xuICBtYXJnaW46IDMlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zYWxlcy1pbWd7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICM5OTk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDI5LCAzNSk7XG4gIGhlaWdodDogMTY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkOmhvdmVyIC5zdWItY2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kYXNoYm9hcmQtY2FyZDpob3ZlciAuc3ViLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICM5OTk5OTk7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcbiAgaGVpZ2h0OiAxNjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xufVxuXG4vLyAuc3ViLWNhcmQtYXBwbHkge1xuLy8gICBoZWlnaHQ6IDMwJTtcbi8vICAgd2lkdGg6IDMwJTtcbi8vICAgbWFyZ2luLXRvcDogNTVweDtcbi8vIH1cbi8vIC5zdWItY2FyZC10cmFjayB7XG4vLyAgIGhlaWdodDogMzAlO1xuLy8gICB3aWR0aDogMzAlO1xuLy8gICBtYXJnaW4tdG9wOiA0MnB4O1xuLy8gfVxuLy8gLnN1Yi1jYXJkLW1hbmFnZSB7XG4vLyAgIGhlaWdodDogMzglO1xuLy8gICB3aWR0aDogMzglO1xuLy8gICBtYXJnaW4tdG9wOiA0N3B4O1xuLy8gfVxuLy8gLnN1Yi1jYXJkLXNldHRpbmcge1xuLy8gICBoZWlnaHQ6IDMwJTtcbi8vICAgd2lkdGg6IDMwJTtcbi8vICAgbWFyZ2luLXRvcDogNTVweDtcbi8vIH1cbi5zdWItY2FyZC1pbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDBweDtcbn1cbi5jYXJkLWFwcGx5LWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYXBwbHlfaWNvbi5wbmdcIik7XG59XG4uY2FyZC10cmFjay1pbWd7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJhY2tfaWNvbi5wbmdcIik7XG59XG4uY2FyZC1tYW5hZ2UtaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zYWxlc19pY29uLnBuZ1wiKTtcbn1cbi5jYXJkLXNldHRpbmdzLWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2V0dGluZ3NfaWNvbi5wbmdcIik7XG59XG4uY2FyZC12aWRlby1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1R1dG9yaWFsczIucG5nXCIpO1xufVxuXG4uY2FyZC1hcHBseTpob3ZlciwgLmNhcmQtYXBwbHk6Zm9jdXN7XG4gIC5jYXJkLWFwcGx5LWltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hcHBseV9pY29uX3doaXRlLnBuZ1wiKTtcbiAgfVxufVxuLmNhcmQtdHJhY2s6aG92ZXIsIC5jYXJkLXRyYWNrOmZvY3VzIHtcbiAgLmNhcmQtdHJhY2staW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyYWNrX2ljb25fd2hpdGUucG5nXCIpO1xuICB9XG59XG4uY2FyZC1tYW5hZ2U6aG92ZXIsIC5jYXJkLW1hbmFnZTpmb2N1c3tcbiAgLmNhcmQtbWFuYWdlLWltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zYWxlc19pY29uX3doaXRlLnBuZ1wiKTtcbiAgfVxufVxuLmNhcmQtc2V0dGluZ3M6aG92ZXIsIC5jYXJkLXNldHRpbmdzOmZvY3VzIHtcbiAgLmNhcmQtc2V0dGluZ3MtaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NldHRpbmdzX2ljb25fd2hpdGUucG5nXCIpO1xuICB9XG59XG4uY2FyZC12aWRlbzpob3ZlciwgLmNhcmQtdmlkZW86Zm9jdXMge1xuICAuY2FyZC12aWRlby1pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvVHV0b3JpYWxzTkVXLnBuZ1wiKTtcbiAgfVxufVxuIiwiI2hlYWRlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJkLXRpdGxlLnVzZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmhvbWUtaW1hZ2Uge1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZV9iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbn1cblxuLmhlYWRlci1pbWcge1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiA1M3B4O1xuICBiYWNrZ3JvdW5kOiAjY2YxZDIxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbn1cblxuI25vdGlmaWNhdGlvbiB7XG4gIHJpZ2h0OiA1MHB4O1xufVxuXG4jbG9nb3V0IHtcbiAgcmlnaHQ6IDNweDtcbn1cblxuLm1sIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdWItY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLnN1Yi1jYXJkLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHdpZHRoOiA0MyU7XG4gIG1hcmdpbjogMyU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNhbGVzLWltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICM5OTk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzFkMjM7XG4gIGhlaWdodDogMTY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkOmhvdmVyIC5zdWItY2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kYXNoYm9hcmQtY2FyZDpob3ZlciAuc3ViLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICM5OTk5OTk7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGhlaWdodDogMTY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcbn1cblxuLnN1Yi1jYXJkLWltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xufVxuXG4uY2FyZC1hcHBseS1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FwcGx5X2ljb24ucG5nXCIpO1xufVxuXG4uY2FyZC10cmFjay1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyYWNrX2ljb24ucG5nXCIpO1xufVxuXG4uY2FyZC1tYW5hZ2UtaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zYWxlc19pY29uLnBuZ1wiKTtcbn1cblxuLmNhcmQtc2V0dGluZ3MtaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZXR0aW5nc19pY29uLnBuZ1wiKTtcbn1cblxuLmNhcmQtdmlkZW8taW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9UdXRvcmlhbHMyLnBuZ1wiKTtcbn1cblxuLmNhcmQtYXBwbHk6aG92ZXIgLmNhcmQtYXBwbHktaW1nLCAuY2FyZC1hcHBseTpmb2N1cyAuY2FyZC1hcHBseS1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FwcGx5X2ljb25fd2hpdGUucG5nXCIpO1xufVxuXG4uY2FyZC10cmFjazpob3ZlciAuY2FyZC10cmFjay1pbWcsIC5jYXJkLXRyYWNrOmZvY3VzIC5jYXJkLXRyYWNrLWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJhY2tfaWNvbl93aGl0ZS5wbmdcIik7XG59XG5cbi5jYXJkLW1hbmFnZTpob3ZlciAuY2FyZC1tYW5hZ2UtaW1nLCAuY2FyZC1tYW5hZ2U6Zm9jdXMgLmNhcmQtbWFuYWdlLWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2FsZXNfaWNvbl93aGl0ZS5wbmdcIik7XG59XG5cbi5jYXJkLXNldHRpbmdzOmhvdmVyIC5jYXJkLXNldHRpbmdzLWltZywgLmNhcmQtc2V0dGluZ3M6Zm9jdXMgLmNhcmQtc2V0dGluZ3MtaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZXR0aW5nc19pY29uX3doaXRlLnBuZ1wiKTtcbn1cblxuLmNhcmQtdmlkZW86aG92ZXIgLmNhcmQtdmlkZW8taW1nLCAuY2FyZC12aWRlbzpmb2N1cyAuY2FyZC12aWRlby1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1R1dG9yaWFsc05FVy5wbmdcIik7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/components/home-dashboard/home-dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/auth/components/home-dashboard/home-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: HomeDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDashboardComponent", function() { return HomeDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/components/common-data/common-data.component */ "./src/shared/components/common-data/common-data.component.ts");
/* harmony import */ var src_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.service */ "./src/shared/shared.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var bn_ng_idle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn-ng-idle */ "./node_modules/bn-ng-idle/fesm5/bn-ng-idle.js");
/* harmony import */ var src_shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/error-handler.service */ "./src/shared/services/error-handler.service.ts");








var HomeDashboardComponent = /** @class */ (function () {
    function HomeDashboardComponent(router, commonData, sharedService, bnIdle, errorHandler) {
        this.router = router;
        this.commonData = commonData;
        this.sharedService = sharedService;
        this.bnIdle = bnIdle;
        this.errorHandler = errorHandler;
        this.username = this.commonData.STRING_VALUES.USER_NAME;
        this.imgBasePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].images;
        this.countryCode = this.commonData.countrycode;
    }
    HomeDashboardComponent.prototype.ngOnInit = function () {
        this.sharedService.setTitle('Home');
        this.sharedService.setHeaderOption('Header_Option');
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.dealerInfo = JSON.parse(localStorage.getItem('dealerInfo'));
        if (this.user !== undefined && this.user !== null) {
            this.jwtToken = this.user.jwtToken;
        }
        else if (this.dealerInfo !== undefined && this.dealerInfo !== null) {
            this.jwtToken = this.dealerInfo.jwtToken;
        }
        if (this.user !== undefined && this.user !== null) {
            this.userRole = this.user.role;
            this.username = this.user.dealerShipName ? this.user.dealerShipName : this.user.salesPersonName;
        }
        else if (this.dealerInfo !== undefined && this.dealerInfo !== null) {
            this.userRole = this.dealerInfo.role;
            this.username = this.dealerInfo.dealershipName;
        }
        this.appHeight = window.innerHeight - 80;
        // Function for getting dealer vehicle type
        var dealerType = {
            mobileNumber: null
        };
        if (this.user) {
            dealerType.mobileNumber = this.user.mobileNumber;
        }
        else if (this.dealerInfo) {
            // tslint:disable-next-line: radix
            dealerType.mobileNumber = parseInt((this.countryCode + this.dealerInfo.mobileNumber).replace(/^\++/, ''));
        }
        localStorage.removeItem('customerFiles');
        localStorage.removeItem('guarantorFiles');
        localStorage.removeItem('dealerPrefDetails');
        localStorage.removeItem('trackAppDetails');
    };
    // Apply finance redirection
    HomeDashboardComponent.prototype.applyFinance = function () {
        this.sharedService.startLoading();
        this.router.navigate(['/finance']);
    };
    // Track finance application
    HomeDashboardComponent.prototype.trackApplication = function () {
        this.router.navigate(['/finance-tracker/']);
    };
    // Manage salesperson
    HomeDashboardComponent.prototype.manageSalesPerson = function () {
        this.router.navigate(['manage-sales-person']);
    };
    // Navigate to profile maintenance page
    HomeDashboardComponent.prototype.changeSettings = function () {
        this.router.navigate(['settings']);
    };
    // Apply Disbursement redirection
    HomeDashboardComponent.prototype.disbursment = function () {
        this.router.navigate(['/disbursment']);
    };
    // Navigate to settlement page
    HomeDashboardComponent.prototype.settlement = function () {
        this.router.navigate(['/settlement']);
    };
    HomeDashboardComponent.prototype.tutorials = function () {
        this.router.navigate(['/video-tutorials']);
    };
    HomeDashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_3__["CommonDataComponent"] },
        { type: src_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
        { type: bn_ng_idle__WEBPACK_IMPORTED_MODULE_6__["BnNgIdleService"] },
        { type: src_shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerService"] }
    ]; };
    HomeDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/home-dashboard/home-dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-dashboard.component.scss */ "./src/app/auth/components/home-dashboard/home-dashboard.component.scss")).default]
        })
    ], HomeDashboardComponent);
    return HomeDashboardComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".forgot-link {\n  float: right;\n  text-align: right;\n  cursor: pointer;\n  color: #EC1D25;\n  font-size: 12px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.login-header {\n  font-size: 22px;\n  font-weight: 500;\n  color: #000000;\n}\n\n.login-subheader {\n  font-size: 15px;\n  color: #000000;\n}\n\n.login-bg {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.login-logo {\n  z-index: 1;\n  position: relative;\n  left: 30px;\n  top: 200px;\n  height: 70px;\n  width: 150px;\n}\n\n.login-container {\n  width: 100%;\n  margin-top: 110vw;\n  bottom: 0;\n  z-index: 1;\n  position: relative;\n  background-color: transparent;\n}\n\n.login-container-form {\n  background-color: transparent;\n}\n\n.form-control:focus {\n  border-color: #EC1D23;\n  box-shadow: none !important;\n}\n\ninput[type=text],\ninput[type=number],\ninput[type=tel],\ninput[type=password],\nselect.form-control {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 1.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #000000;\n  background-color: #FFFFFF;\n  background-clip: padding-box;\n  border: 1px solid #bab8b8;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\ninput[type=text]:focus,\ninput[type=number]:focus,\ninput[type=tel]:focus,\ninput[type=password]:focus,\nselect.form-control:focus {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 1.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #FFFFFF;\n  background-clip: padding-box;\n  border: 1px solid #EC1D23;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\ninput::-webkit-input-placeholder {\n  color: #707070 !important;\n  font-size: 13px;\n}\n\n#finger-img {\n  height: 28px;\n  position: absolute;\n  right: 11px;\n  top: 9px;\n  background: white;\n}\n\n#face-img {\n  height: 38px;\n  position: absolute;\n  right: 5px;\n  top: 3px;\n  background: white;\n}\n\nfooter {\n  text-align: center;\n}\n\n.red-alert {\n  color: #EC1D25;\n}\n\n.backgroundImage {\n  background-image: url('Login_bg.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  position: absolute;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL215Y3YyMDdpL0Rlc2t0b3AvQW5ndWxhclByb2plY3QvaGFjay1hcHAvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0NHa0I7RURGbEIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUVERjs7QUZJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDZlk7QUNjZDs7QUZJQTtFQUNFLGVBQUE7RUFDQSxjQ3BCWTtBQ21CZDs7QUZJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUVERjs7QUZJQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUVERjs7QUZJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBRURGOztBRklBO0VBQ0UsNkJBQUE7QUVERjs7QUZJQTtFQUNFLHFCQ2xEVTtFRG1EViwyQkFBQTtBRURGOztBRklBOzs7OztFQUtFLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbEVZO0VEbUVaLHlCQ2hFWTtFRGlFWiw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtBRURGOztBRklBOzs7OztFQUtFLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkNsRlk7RURtRlosNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7QUVERjs7QUZHQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBRUFGOztBRkVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBRUNGOztBRkNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBRUVGOztBRkFBO0VBQ0Usa0JBQUE7QUVHRjs7QUZEQTtFQUNFLGNDeEdrQjtBQzRHcEI7O0FGRkE7RUFDRSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FFS0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVcIjtcblxuLmZvcmdvdC1saW5rIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogJGZvcmdvdC1saW5rLWNvbG9yO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ2luLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICRibGFjay1jb2xvcjtcbn1cblxuLmxvZ2luLXN1YmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICRibGFjay1jb2xvcjtcbn1cblxuLmxvZ2luLWJnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubG9naW4tbG9nbyB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzBweDtcbiAgdG9wOiAyMDBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTEwdnc7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lci1mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICRyZWQtY29sb3I7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxuaW5wdXRbdHlwZT1cInRlbFwiXSxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcbnNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMS4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogJGJsYWNrLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYWI4Yjg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOmZvY3VzLFxuaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1cyxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cyxcbnNlbGVjdC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMS4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAkcmVkLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAkaW5wdXQtcGxhY2Vob2xkZXItY29sb3IgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuI2Zpbmdlci1pbWcge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDExcHg7XG4gIHRvcDogOXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiNmYWNlLWltZyB7XG4gIGhlaWdodDogMzhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5mb290ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWQtYWxlcnR7XG4gIGNvbG9yOiAkZm9yZ290LWxpbmstY29sb3I7XG59XG4uYmFja2dyb3VuZEltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Mb2dpbl9iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59IiwiJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xuJGdyZXktY29sb3I6ICM5QjlCOUI7XG4kcmVkLWNvbG9yOiAjRUMxRDIzO1xuJHdoaXRlLWNvbG9yOiAjRkZGRkZGO1xuJG9mZldoaXRlLWNvbG9yOiAjRjRGNEY0O1xuJGJ0blNlY29uZGFyeS1iYWNrZ3JvdW5kY29sb3I6ICNEN0Q3RDc7XG4kYnRuUHJpbWFyeS1ib3hzaGFkb3ctY29sb3I6ICM5RjlGOUY7XG4kYXBwQ2FyZC1ib3hzaGFkb3ctY29sb3I6ICNCRkJGQkY7XG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM3MDcwNzA7XG4kZm9yZ290LWxpbmstY29sb3I6ICNFQzFEMjU7XG4kZ3JlZW4tY29sb3I6ICMyN0FFNjA7XG4kYXBwbGljYXRpb24taG92ZXItY29sb3I6ICNDRjFEMjI7XG4kc3ViLWNhcmQtdGl0bGU6ICMzODc5Qzc7XG4iLCIuZm9yZ290LWxpbmsge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjRUMxRDI1O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ2luLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5sb2dpbi1zdWJoZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubG9naW4tYmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IDIwMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMTB2dztcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubG9naW4tY29udGFpbmVyLWZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI0VDMUQyMztcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDEuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYWI4Yjg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbmlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyxcbmlucHV0W3R5cGU9dGVsXTpmb2N1cyxcbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLFxuc2VsZWN0LmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAxLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUMxRDIzO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jZmluZ2VyLWltZyB7XG4gIGhlaWdodDogMjhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTFweDtcbiAgdG9wOiA5cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4jZmFjZS1pbWcge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWQtYWxlcnQge1xuICBjb2xvcjogI0VDMUQyNTtcbn1cblxuLmJhY2tncm91bmRJbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvTG9naW5fYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/components/common-data/common-data.component */ "./src/shared/components/common-data/common-data.component.ts");
/* harmony import */ var src_shared_services_encrypt_decrypt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/encrypt-decrypt.service */ "./src/shared/services/encrypt-decrypt.service.ts");
/* harmony import */ var src_shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/error-handler.service */ "./src/shared/services/error-handler.service.ts");
/* harmony import */ var src_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/shared.service */ "./src/shared/shared.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-idle/core */ "./node_modules/@ng-idle/core/fesm5/ng-idle-core.js");










var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, commonData, sharedService, EncrDecr, zone, idle, errorHandler) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonData = commonData;
        this.sharedService = sharedService;
        this.EncrDecr = EncrDecr;
        this.zone = zone;
        this.idle = idle;
        this.errorHandler = errorHandler;
        this.SessionExpired = false;
        this.submitted = this.commonData.BOOLEAN_VALUES.BOOLEAN_FALSE;
        this.imgBasePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].images;
        this.passwordPattern = this.commonData.passwordPattern;
        this.userIdPattern = this.commonData.userIdPattern;
        this.faceId = false;
        this.touchId = false;
        if (sessionStorage.getItem('SessionExpired') !== undefined) {
            if (sessionStorage.getItem('SessionExpired') === 'true') {
                this.SessionExpired = true;
            }
            else if (sessionStorage.getItem('SessionExpired') === 'false') {
                this.sharedService.stopLogin();
                this.stopIdleTimer();
            }
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        localStorage.clear();
        this.isFaceFingerAvailableCheck();
        this.mobileOS = this.sharedService.getMobileOperatingSystem();
    };
    // stop idle timer
    LoginComponent.prototype.stopIdleTimer = function () {
        this.idle.stop();
        this.idle.clearInterrupts();
        this.idle.ngOnDestroy();
    };
    Object.defineProperty(LoginComponent.prototype, "formData", {
        /*
         *convenience getter for easy access to form fields
         */
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Validates user credentials and displays message accordingly
     * @param value user credentials
     */
    LoginComponent.prototype.onSubmit = function (value) {
        if (value === void 0) { value = null; }
        this.submitted = this.commonData.BOOLEAN_VALUES.BOOLEAN_TRUE;
        if (this.loginForm.invalid) {
            return;
        }
        var self = this;
        this.zone.run(function () {
            self.router.navigate(['home']);
        });
    };
    /**
     * redirects to register page
     */
    LoginComponent.prototype.redirectToRegister = function () {
        // this.router.navigate(['register']);
    };
    /**
     * redirects to profile maintenance page
     */
    LoginComponent.prototype.forgotPassword = function () {
        // this.router.navigate(['forgot-password-main']);
    };
    // Function for allowing fingerprint
    LoginComponent.prototype.allowFingerFaceprint = function () {
        var _this = this;
        if (Fingerprint !== undefined || Fingerprint !== null) {
            Fingerprint.isAvailable(function (isAvailableSuccess) {
                var self = _this;
                _this.zone.run(function () {
                    self.allowFaceFingerRecognition(self.mobileOS);
                });
            }, function (isAvailableError) {
                var self = _this;
                _this.zone.run(function () {
                    self.sharedService.showError('Please enable Biometric, TouchID or FaceID on device.');
                });
            });
        }
    };
    // Allow fingerPrint to Login
    LoginComponent.prototype.allowFingerFace = function (bioType) {
        var loginData = {
            loginType: '',
            loginToken: ''
        };
        loginData.loginType = bioType;
        var encryptedFingerPrint = this.EncrDecr.set(this.commonData.ENCRYPTKEY, (this.sharedService.UUID || device.uuid));
        loginData.loginToken = encryptedFingerPrint;
        var self = this;
        this.zone.run(function () {
            self.router.navigate(['home']);
        });
    };
    /**
     * If Fingerprint is Available or Not
     */
    LoginComponent.prototype.allowFaceFingerRecognition = function (platformType) {
        var self = this;
        Fingerprint.show({
            clientId: 'Fingerprint-Demo',
            clientSecret: 'o7aoOMYUbyxaD23oFAnJ',
            disableBackup: true,
            localizedReason: 'Please Authenticate'
        }, function (successCallback) {
            if (self.touchId === true) {
                self.allowFingerFace('fingerPrint');
            }
            else if (self.faceId === true) {
                self.allowFingerFace('faceId');
            }
        }, function (errorCallback) {
        });
    };
    // Function for allowing fingerprint
    LoginComponent.prototype.isFaceFingerAvailableCheck = function () {
        var _this = this;
        if (Fingerprint !== undefined || Fingerprint !== null) {
            Fingerprint.isAvailable(function (isAvailableSuccess) {
                var self = _this;
                _this.zone.run(function () {
                    if (isAvailableSuccess === 'finger') {
                        self.touchId = true;
                    }
                    else if (isAvailableSuccess === 'face') {
                        self.faceId = true;
                    }
                });
            }, function (isAvailableError) {
                var self = _this;
                _this.zone.run(function () {
                    if (device.model === 'iPhone10,3' || device.model === 'iPhone10,6' || device.model === 'iPhone11,2'
                        || device.model === 'iPhone11,4' || device.model === 'iPhone11,6' || device.model === 'iPhone11,8'
                        || device.model === 'iPhone12,1' || device.model === 'iPhone12,3' || device.model === 'iPhone12,5'
                        || device.model === 'iPad8,1' || device.model === 'iPad8,2' || device.model === 'iPad8,3' || device.model === 'iPad8,4'
                        || device.model === 'iPad8,5' || device.model === 'iPad8,6' || device.model === 'iPad8,7' || device.model === 'iPad8,8') {
                        self.faceId = true;
                    }
                    else {
                        self.touchId = true;
                    }
                });
            });
        }
    };
    // Fucntion for sending device ID
    LoginComponent.prototype.onDeviceReady = function () {
        var self = this;
        if (device !== undefined && device !== null) {
            self.sharedService.UUID = device.uuid;
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_shared_components_common_data_common_data_component__WEBPACK_IMPORTED_MODULE_4__["CommonDataComponent"] },
        { type: src_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: src_shared_services_encrypt_decrypt_service__WEBPACK_IMPORTED_MODULE_5__["EncryptDecryptService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_9__["Idle"] },
        { type: src_shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/shared/services/error-handler.service.ts":
/*!******************************************************!*\
  !*** ./src/shared/services/error-handler.service.ts ***!
  \******************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ "./src/shared/shared.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _http_response_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-response-handler.service */ "./src/shared/services/http-response-handler.service.ts");





var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(sharedService, toastr, httpResponseHandler, zone) {
        this.sharedService = sharedService;
        this.toastr = toastr;
        this.httpResponseHandler = httpResponseHandler;
        this.zone = zone;
    }
    ErrorHandlerService.prototype.serverError = function (error) {
        var _this = this;
        this.sharedService.stopLoading();
        if (error !== undefined && error !== null) {
            var self_1 = this;
            this.zone.run(function () {
                error.message ? _this.showError(error.message) : self_1.httpResponseHandler.onCatch(error.status);
            });
        }
    };
    /*
    * Toast message
    */
    ErrorHandlerService.prototype.showError = function (msg) {
        this.toastr.error(msg);
    };
    ErrorHandlerService.ctorParameters = function () { return [
        { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _http_response_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpResponseHandlerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ErrorHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map