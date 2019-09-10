(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enter-code-enter-code-module"],{

/***/ "./src/app/enter-code/enter-code.module.ts":
/*!*************************************************!*\
  !*** ./src/app/enter-code/enter-code.module.ts ***!
  \*************************************************/
/*! exports provided: EnterCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterCodePageModule", function() { return EnterCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _enter_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter-code.page */ "./src/app/enter-code/enter-code.page.ts");







var routes = [
    {
        path: '',
        component: _enter_code_page__WEBPACK_IMPORTED_MODULE_6__["EnterCodePage"]
    }
];
var EnterCodePageModule = /** @class */ (function () {
    function EnterCodePageModule() {
    }
    EnterCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_enter_code_page__WEBPACK_IMPORTED_MODULE_6__["EnterCodePage"]]
        })
    ], EnterCodePageModule);
    return EnterCodePageModule;
}());



/***/ }),

/***/ "./src/app/enter-code/enter-code.page.html":
/*!*************************************************!*\
  !*** ./src/app/enter-code/enter-code.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title class=\"header-title\">Memory Game</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<div style=\"margin-top:10%\">\r\n    <ion-label class=\"username-label\" >Enter the code</ion-label>\r\n    <ion-item class=\"username-input\">\r\n  \r\n      <ion-input required type=\"text\" color=\"white\"></ion-input>\r\n  \r\n    </ion-item>\r\n</div>\r\n  \r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <ion-button expand=\"block\" type=submit class=\"login-btn\" color=\"primary\">\r\n      <p>JOIN</p>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/enter-code/enter-code.page.scss":
/*!*************************************************!*\
  !*** ./src/app/enter-code/enter-code.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  color: #3498db; }\n\n.username-input {\n  margin-right: 5%; }\n\n.username-label {\n  margin-left: 5%;\n  margin-top: 10%;\n  color: #3498db; }\n\n.login-btn {\n  color: #3498db;\n  font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50ZXItY29kZS9DOlxcVXNlcnNcXERUIFVzZXJcXERlc2t0b3BcXEVESVRcXE1FTU9SWS1naXRodWJcXE1lbW9yeS1nYW1lLWZyb250ZW5kL3NyY1xcYXBwXFxlbnRlci1jb2RlXFxlbnRlci1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFFSSxnQkFFRCxFQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBSWxCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50ZXItY29kZS9lbnRlci1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGl0bGUge1xyXG4gICAgY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi51c2VybmFtZS1pbnB1dCB7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JVxyXG4gICAgICBcclxuICAgfVxyXG4gICBcclxuICAgLnVzZXJuYW1lLWxhYmVsIHtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gICB9XHJcbiAgXHJcbiAgIFxyXG4gICAubG9naW4tYnRue1xyXG4gICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/enter-code/enter-code.page.ts":
/*!***********************************************!*\
  !*** ./src/app/enter-code/enter-code.page.ts ***!
  \***********************************************/
/*! exports provided: EnterCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterCodePage", function() { return EnterCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnterCodePage = /** @class */ (function () {
    function EnterCodePage() {
    }
    EnterCodePage.prototype.ngOnInit = function () {
    };
    EnterCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enter-code',
            template: __webpack_require__(/*! ./enter-code.page.html */ "./src/app/enter-code/enter-code.page.html"),
            styles: [__webpack_require__(/*! ./enter-code.page.scss */ "./src/app/enter-code/enter-code.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EnterCodePage);
    return EnterCodePage;
}());



/***/ })

}]);
//# sourceMappingURL=enter-code-enter-code-module.js.map