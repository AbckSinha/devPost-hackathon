(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-tutorials-video-tutorials-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-tutorials/components/tutorials/tutorials.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-tutorials/components/tutorials/tutorials.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"{{imgBasePath}}back_arrow.png\" alt=\"back_arrow\" class=\"back-arrow float-left\" (click)=\"goBack()\">\n<div class=\"app-card\" style=\"overflow-y: scroll;\" [ngStyle]=\"{'min-height.px':appHeight}\">\n\n  <div *ngIf=\"userRole === 'SALESPERSON'\">\n    <div class=\"video-list\" *ngFor=\"let salesVideo of salespersonVideoLists; index as i\">  \n      <!-- [ngClass]=\"{'selected-option' : selectFlag == i}\" -->\n      <div class=\"video-details row\">\n        <div class=\"video-label col-sm-9 col-md-9 col-9\">{{salesVideo.label}}</div>\n        <div class=\"video-button col-sm-3 col-md-3 col-3\">\n          <button id=\"play\" class=\" play-button\" (click)=\"viewVideo(salesVideo)\">\n            <img src=\"{{imgBasePath}}Play2.png\" alt=\"play-icon\" class=\"play-icon\">\n            Play</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./src/app/video-tutorials/components/tutorials/tutorials.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/video-tutorials/components/tutorials/tutorials.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".video-list {\n  padding: 0px;\n  width: 96%;\n  box-shadow: 3px 3px 4px #BFBFBF;\n  position: relative;\n  margin: 17px 2%;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n}\n\n.video-list h5 {\n  font-weight: 900;\n}\n\n.video-list p {\n  font-size: 16px;\n}\n\n.video-details {\n  width: 100%;\n  padding: 10px;\n  border-radius: 2px;\n  word-wrap: break-word;\n  margin: 0px !important;\n}\n\n.video-button {\n  padding: 2px 0px;\n  font-size: 14px;\n}\n\n.play-button {\n  height: 32px;\n  font-size: 13px;\n  display: flex;\n  margin: 0px;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.selected-option {\n  background: #CF1D22;\n  color: #FFFFFF;\n}\n\n.video-label {\n  align-items: center;\n  display: flex;\n  padding: 0px;\n  font-size: 12px;\n}\n\n.play-icon {\n  margin-left: 15px;\n  margin-right: 5px;\n  height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9hcHAvdmlkZW8tdHV0b3JpYWxzL2NvbXBvbmVudHMvdHV0b3JpYWxzL3R1dG9yaWFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8tdHV0b3JpYWxzL2NvbXBvbmVudHMvdHV0b3JpYWxzL3R1dG9yaWFscy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9teWN2MjA3aS9EZXNrdG9wL0FuZ3VsYXJQcm9qZWN0L2hhY2stYXBwL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNJLG1CRTNCc0I7RUY0QnRCLGNFcENVO0FEd0NkOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC92aWRlby10dXRvcmlhbHMvY29tcG9uZW50cy90dXRvcmlhbHMvdHV0b3JpYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlXCI7XG5cblxuLnZpZGVvLWxpc3Qge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogOTYlO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4ICRhcHBDYXJkLWJveHNoYWRvdy1jb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxN3B4IDIlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnZpZGVvLWxpc3QgaDUge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4udmlkZW8tbGlzdCBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4udmlkZW8tZGV0YWlscyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4udmlkZW8tYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAycHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wbGF5LWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlbGVjdGVkLW9wdGlvbiB7XG4gICAgYmFja2dyb3VuZDogJGFwcGxpY2F0aW9uLWhvdmVyLWNvbG9yO1xuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XG59XG4udmlkZW8tbGFiZWwge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnBsYXktaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgICBcbiAgfSIsIi52aWRlby1saXN0IHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogOTYlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAjQkZCRkJGO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTdweCAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udmlkZW8tbGlzdCBoNSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi52aWRlby1saXN0IHAge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi52aWRlby1kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4udmlkZW8tYnV0dG9uIHtcbiAgcGFkZGluZzogMnB4IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGxheS1idXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdGVkLW9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNDRjFEMjI7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udmlkZW8tbGFiZWwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBsYXktaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgaGVpZ2h0OiAxNnB4O1xufSIsIiRibGFjay1jb2xvcjogIzAwMDAwMDtcbiRncmV5LWNvbG9yOiAjOUI5QjlCO1xuJHJlZC1jb2xvcjogI0VDMUQyMztcbiR3aGl0ZS1jb2xvcjogI0ZGRkZGRjtcbiRvZmZXaGl0ZS1jb2xvcjogI0Y0RjRGNDtcbiRidG5TZWNvbmRhcnktYmFja2dyb3VuZGNvbG9yOiAjRDdEN0Q3O1xuJGJ0blByaW1hcnktYm94c2hhZG93LWNvbG9yOiAjOUY5RjlGO1xuJGFwcENhcmQtYm94c2hhZG93LWNvbG9yOiAjQkZCRkJGO1xuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAjNzA3MDcwO1xuJGZvcmdvdC1saW5rLWNvbG9yOiAjRUMxRDI1O1xuJGdyZWVuLWNvbG9yOiAjMjdBRTYwO1xuJGFwcGxpY2F0aW9uLWhvdmVyLWNvbG9yOiAjQ0YxRDIyO1xuJHN1Yi1jYXJkLXRpdGxlOiAjMzg3OUM3O1xuIl19 */");

/***/ }),

/***/ "./src/app/video-tutorials/components/tutorials/tutorials.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/video-tutorials/components/tutorials/tutorials.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TutorialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsComponent", function() { return TutorialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.service */ "./src/shared/shared.service.ts");





var TutorialsComponent = /** @class */ (function () {
    function TutorialsComponent(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
        this.imgBasePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].images;
    }
    TutorialsComponent.prototype.scrollHandler = function (event) {
        // TODO : handle scroll
    };
    TutorialsComponent.prototype.ngOnInit = function () {
        this.appHeight = window.innerHeight - 80;
        this.sharedService.setTitle('Tutorials');
        this.sharedService.setHeaderOption('Header_Option');
        this.userRole = "SALESPERSON";
        this.salespersonVideoLists = [
            {
                'label': 'Build better website',
                'link': 'https://www.youtube.com/watch?v=lODdNoLpBSg'
            },
            {
                'label': 'react for begginners',
                'link': 'https://www.youtube.com/watch?v=Ke90Tje7VS0'
            },
            {
                'label': 'React in 5 hours',
                'link': 'https://www.youtube.com/watch?v=DLX62G4lc44'
            },
            {
                'label': 'Build better website',
                'link': 'https://www.youtube.com/watch?v=lODdNoLpBSg'
            },
            {
                'label': 'react for begginners',
                'link': 'https://www.youtube.com/watch?v=Ke90Tje7VS0'
            },
            {
                'label': 'React in 5 hours',
                'link': 'https://www.youtube.com/watch?v=DLX62G4lc44'
            }
        ];
    };
    // Function for back navigation
    TutorialsComponent.prototype.goBack = function () {
        this.router.navigate(['home']);
    };
    TutorialsComponent.prototype.viewVideo = function (videoLink) {
        // this.selectFlag = index;
        var target = "_system";
        cordova.InAppBrowser.open(videoLink.link, target, 'location=yes');
    };
    TutorialsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', [])
    ], TutorialsComponent.prototype, "scrollHandler", null);
    TutorialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorials',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tutorials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-tutorials/components/tutorials/tutorials.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tutorials.component.scss */ "./src/app/video-tutorials/components/tutorials/tutorials.component.scss")).default]
        })
    ], TutorialsComponent);
    return TutorialsComponent;
}());



/***/ }),

/***/ "./src/app/video-tutorials/video-tutorials-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/video-tutorials/video-tutorials-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: VideoTutorialsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTutorialsRoutingModule", function() { return VideoTutorialsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tutorials/tutorials.component */ "./src/app/video-tutorials/components/tutorials/tutorials.component.ts");




var routes = [
    { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
    { path: 'tutorials', component: _components_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_3__["TutorialsComponent"], data: { title: 'Tutorials' } }
];
var VideoTutorialsRoutingModule = /** @class */ (function () {
    function VideoTutorialsRoutingModule() {
    }
    VideoTutorialsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VideoTutorialsRoutingModule);
    return VideoTutorialsRoutingModule;
}());



/***/ }),

/***/ "./src/app/video-tutorials/video-tutorials.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/video-tutorials/video-tutorials.module.ts ***!
  \***********************************************************/
/*! exports provided: COMPONENTS, VideoTutorialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTutorialsModule", function() { return VideoTutorialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tutorials/tutorials.component */ "./src/app/video-tutorials/components/tutorials/tutorials.component.ts");
/* harmony import */ var _video_tutorials_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video-tutorials-routing.module */ "./src/app/video-tutorials/video-tutorials-routing.module.ts");








var COMPONENTS = [
    _components_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_6__["TutorialsComponent"]
];
var VideoTutorialsModule = /** @class */ (function () {
    function VideoTutorialsModule() {
    }
    VideoTutorialsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _video_tutorials_routing_module__WEBPACK_IMPORTED_MODULE_7__["VideoTutorialsRoutingModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: COMPONENTS,
            providers: [],
            exports: COMPONENTS
        })
    ], VideoTutorialsModule);
    return VideoTutorialsModule;
}());



/***/ })

}]);
//# sourceMappingURL=video-tutorials-video-tutorials-module.js.map