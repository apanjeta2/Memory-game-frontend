(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n <div class=\"title\">\r\n  <h1>Memory</h1>\r\n  <h1> Game</h1>\r\n </div>\r\n   \r\n<div class=\"login\">\r\n  <form [formGroup]=\"loginForm\"  (ngSubmit)=\"toStartPage()\">\r\n      <ion-label class=\"username-label\" >Username</ion-label>\r\n      <ion-item  class=\"username-input\"> \r\n        \r\n        <ion-input formControlName=\"username\" placeholder=\"Enter the username\" required type=\"text\" color=\"white\" ></ion-input>\r\n  \r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"!loginForm.controls.username.valid  && (loginForm.controls.username.dirty || submitAttempt)\">\r\n          <p>Please enter a valid username.</p>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"f.username.errors?.required && (loginForm.controls.username.dirty || submitAttempt)\">\r\n          <p>Username is required!</p>\r\n      </ion-item>\r\n\r\n  \r\n    <div class=\"ion-padding\">\r\n     \r\n      <ion-button expand=\"block\" type=submit class=\"login-btn\" color=\"light\"><p>Login</p></ion-button>\r\n   \r\n    </div>\r\n   \r\n    \r\n    \r\n  </form>\r\n     \r\n  </div>\r\n     \r\n   \r\n   \r\n  \r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 3%; }\n\nion-content {\n  --ion-background-color: #5aace2; }\n\n.title {\n  align-items: center;\n  display: inline-block;\n  padding: 10%; }\n\n.title h1 {\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 3em;\n  align-self: center;\n  margin: 0%; }\n\n.username-input {\n  margin-right: 10%;\n  margin-left: 10%; }\n\n.username-label {\n  margin-left: 15%;\n  color: white; }\n\n.login {\n  margin-top: 60px; }\n\n.login-btn {\n  color: #3498db;\n  font-weight: bolder;\n  margin-right: 10%;\n  margin-left: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXERUIFVzZXJcXERlc2t0b3BcXEVESVRcXE1FTU9SWS1naXRodWJcXE1lbW9yeS1nYW1lLWZyb250ZW5kL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUVJLCtCQUF1QixFQUFBOztBQUUzQjtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUVkO0VBQ0ksWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUVsQixVQUFVLEVBQUE7O0FBR2Q7RUFFQyxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBSWpCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0VBRXBCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgIFxyXG59XHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1YWFjZTI7XHJcbn1cclxuLnRpdGxlIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMCU7XHJcbn1cclxuLnRpdGxlIGgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICBcclxuICAgIG1hcmdpbjogMCU7XHJcbn1cclxuXHJcbi51c2VybmFtZS1pbnB1dCB7XHJcblxyXG4gbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICBcclxufVxyXG5cclxuLnVzZXJuYW1lLWxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmxvZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1idG57XHJcbiBcclxuICBjb2xvcjogIzM0OThkYjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIFxyXG4gbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/game.service */ "./src/app/shared/game.service.ts");





var HomePage = /** @class */ (function () {
    function HomePage(router, formBuilder, _gameService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this._gameService = _gameService;
    }
    HomePage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(HomePage.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.toStartPage = function () {
        if (this.loginForm.invalid) {
            return;
        }
        this._gameService.setUsername(this.loginForm.get("username").value);
        this.router.navigate(["/start"]);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map