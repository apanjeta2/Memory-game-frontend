(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-start-module"],{

/***/ "./src/app/start/start.module.ts":
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "./src/app/start/start.page.ts");







var routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]
    }
];
var StartPageModule = /** @class */ (function () {
    function StartPageModule() {
    }
    StartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]],
            exports: [
                _start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]
            ]
        })
    ], StartPageModule);
    return StartPageModule;
}());



/***/ }),

/***/ "./src/app/start/start.page.html":
/*!***************************************!*\
  !*** ./src/app/start/start.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n  <ion-header translucent>\r\n    <ion-toolbar>\r\n      <ion-title class=\"header-title\">Memory Game</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content class=\"container\">\r\n  <ion-button class=\"start-game-btn ion-no-margin\" (click)=\"startGame()\">Start game</ion-button>\r\n  <ion-button class=\"join-game-btn ion-no-margin\"  (click)=\"joinGame()\" >Join game</ion-button>\r\n\r\n\r\n  \r\n   \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/start/start.page.scss":
/*!***************************************!*\
  !*** ./src/app/start/start.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  color: #3498db; }\n\n.container {\n  padding: 3%;\n  display: flex;\n  align-items: center; }\n\n.title {\n  margin-top: 10%; }\n\n.title h1 {\n  margin-left: 15%;\n  color: #3498db;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 280%; }\n\n.start-game-btn {\n  margin-left: 15%;\n  margin-top: 10%;\n  height: 8%;\n  width: 70%;\n  border-radius: 25px;\n  size: large;\n  display: inline-block;\n  background-color: #3498db;\n  color: white; }\n\n.join-game-btn {\n  margin-left: 15%;\n  margin-top: 10%;\n  height: 8%;\n  width: 70%;\n  border-radius: 25px;\n  display: inline-block;\n  background-color: #3498db;\n  color: white; }\n\n.username-input {\n  margin-left: 10%;\n  margin-right: 15%; }\n\n.username-label {\n  margin-left: 5%;\n  margin-top: 10%; }\n\n.serverBtn {\n  background: #3498db;\n  padding: 3%;\n  color: white;\n  margin-left: 15%;\n  margin-bottom: 10%;\n  margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvQzpcXFVzZXJzXFxEVCBVc2VyXFxEZXNrdG9wXFxFRElUXFxNRU1PUlktZ2l0aHViXFxNZW1vcnktZ2FtZS1mcm9udGVuZC9zcmNcXGFwcFxcc3RhcnRcXHN0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2hCO0VBRUksZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBSWhCO0VBQ0QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFydC9zdGFydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7ICAgIFxyXG59XHJcblxyXG4gIC50aXRsZSBoMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlOyBcclxuICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAyODAlO1xyXG59XHJcblxyXG4uc3RhcnQtZ2FtZS1idG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgc2l6ZTogbGFyZ2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uam9pbi1nYW1lLWJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udXNlcm5hbWUtaW5wdXQge1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgfVxyXG4gICBcclxuICAgLnVzZXJuYW1lLWxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgIFxyXG4gICB9XHJcblxyXG4gICAuc2VydmVyQnRue1xyXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XHJcbiAgcGFkZGluZzogMyU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/start/start.page.ts":
/*!*************************************!*\
  !*** ./src/app/start/start.page.ts ***!
  \*************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");





var StartPage = /** @class */ (function () {
    function StartPage(router, snackBar, formBuilder) {
        this.router = router;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
    }
    StartPage.prototype.ngOnInit = function () { };
    StartPage.prototype.startGame = function () {
        this.router.navigate(["/level"]);
    };
    StartPage.prototype.joinGame = function () {
        this.router.navigate(["/join-key"]);
    };
    StartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-start",
            template: __webpack_require__(/*! ./start.page.html */ "./src/app/start/start.page.html"),
            styles: [__webpack_require__(/*! ./start.page.scss */ "./src/app/start/start.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], StartPage);
    return StartPage;
}());



/***/ })

}]);
//# sourceMappingURL=start-start-module.js.map