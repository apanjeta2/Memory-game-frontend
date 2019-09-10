(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["join-key-join-key-module"],{

/***/ "./src/app/join-key/join-key.module.ts":
/*!*********************************************!*\
  !*** ./src/app/join-key/join-key.module.ts ***!
  \*********************************************/
/*! exports provided: JoinKeyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinKeyPageModule", function() { return JoinKeyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _join_key_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join-key.page */ "./src/app/join-key/join-key.page.ts");
/* harmony import */ var _shared_material_design_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material-design.module */ "./src/app/shared/material-design.module.ts");








var routes = [
    {
        path: '',
        component: _join_key_page__WEBPACK_IMPORTED_MODULE_6__["JoinKeyPage"]
    }
];
var JoinKeyPageModule = /** @class */ (function () {
    function JoinKeyPageModule() {
    }
    JoinKeyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_material_design_module__WEBPACK_IMPORTED_MODULE_7__["MaterialDesignModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_join_key_page__WEBPACK_IMPORTED_MODULE_6__["JoinKeyPage"]]
        })
    ], JoinKeyPageModule);
    return JoinKeyPageModule;
}());



/***/ }),

/***/ "./src/app/join-key/join-key.page.html":
/*!*********************************************!*\
  !*** ./src/app/join-key/join-key.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title class=\"header-title\">Join game</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"margin-top:10%\">\r\n  <ion-label class=\"username-label\" >Enter the code:</ion-label>\r\n <form [formGroup]=\"joinKeyForm\" (ngSubmit)=\"joinGame()\">\r\n   <ion-item class=\"item\">\r\n      <ion-input formControlName=\"code\" required type=\"text\"  placeholder=\"Enter the code\" ></ion-input>\r\n\r\n   </ion-item>\r\n  <ion-button expand=\"block\" type=\"submit\" class=\"login-btn\" color=\"primary\">\r\n    <p>Join Game</p>\r\n  </ion-button>\r\n </form>\r\n  \r\n    </div>\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/join-key/join-key.page.scss":
/*!*********************************************!*\
  !*** ./src/app/join-key/join-key.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  color: #3498db;\n  font-weight: bold;\n  size: large; }\n\n.username-label {\n  margin-left: 7%;\n  margin-top: 10%;\n  color: #3498db;\n  font-weight: bold; }\n\n.item {\n  margin-top: 10%;\n  margin-left: 7%;\n  margin-right: 7%; }\n\n.login-btn {\n  margin-left: 15%;\n  margin-top: 15%;\n  height: 15%;\n  width: 70%;\n  border-radius: 25px;\n  size: large;\n  display: inline-block;\n  background-color: #3498db;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi1rZXkvQzpcXFVzZXJzXFxEVCBVc2VyXFxEZXNrdG9wXFxFRElUXFxNRU1PUlktZ2l0aHViXFxNZW1vcnktZ2FtZS1mcm9udGVuZC9zcmNcXGFwcFxcam9pbi1rZXlcXGpvaW4ta2V5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdaO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBS3JCO0VBQ0MsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2pvaW4ta2V5L2pvaW4ta2V5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGl0bGUge1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzM0OThkYjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgc2l6ZTogbGFyZ2U7XHJcbn1cclxuICAgXHJcbiAgIC51c2VybmFtZS1sYWJlbCB7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICBjb2xvcjogIzM0OThkYjtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB9XHJcbiAgXHJcbiAgIFxyXG5cclxuICAgLml0ZW17XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xyXG4gICB9XHJcblxyXG4gICAubG9naW4tYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBzaXplOiBsYXJnZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/join-key/join-key.page.ts":
/*!*******************************************!*\
  !*** ./src/app/join-key/join-key.page.ts ***!
  \*******************************************/
/*! exports provided: JoinKeyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinKeyPage", function() { return JoinKeyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var JoinKeyPage = /** @class */ (function () {
    function JoinKeyPage(router, _gameService, snackBar) {
        this.router = router;
        this._gameService = _gameService;
        this.snackBar = snackBar;
        this.joinKeyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    JoinKeyPage.prototype.ngOnInit = function () {
    };
    JoinKeyPage.prototype.joinGame = function () {
        var _this = this;
        if (this.joinKeyForm.invalid) {
            return;
        }
        var e = false;
        var err = this._gameService.joinPlayer(this.joinKeyForm.get("code").value, _shared_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"].username).then(function (val) {
            e = val;
            _this.openSnackBar("Success!", "Join game!");
            _this.router.navigate(['/game']);
        }).catch(function (err) {
            console.log(err);
            _this.openSnackBar("Error!", "User code is incorrect!");
        });
        if (e === false) {
            this.openSnackBar("Error!", "User code is incorrect!");
        }
    };
    JoinKeyPage.prototype.openSnackBar = function (message, description) {
        this.snackBar.open(message, description, {
            duration: 5000
        });
    };
    JoinKeyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-join-key',
            template: __webpack_require__(/*! ./join-key.page.html */ "./src/app/join-key/join-key.page.html"),
            styles: [__webpack_require__(/*! ./join-key.page.scss */ "./src/app/join-key/join-key.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], JoinKeyPage);
    return JoinKeyPage;
}());



/***/ })

}]);
//# sourceMappingURL=join-key-join-key-module.js.map