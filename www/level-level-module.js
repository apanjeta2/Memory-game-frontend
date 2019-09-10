(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["level-level-module"],{

/***/ "./src/app/level/level.module.ts":
/*!***************************************!*\
  !*** ./src/app/level/level.module.ts ***!
  \***************************************/
/*! exports provided: LevelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelPageModule", function() { return LevelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _level_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./level.page */ "./src/app/level/level.page.ts");







var routes = [
    {
        path: '',
        component: _level_page__WEBPACK_IMPORTED_MODULE_6__["LevelPage"]
    }
];
var LevelPageModule = /** @class */ (function () {
    function LevelPageModule() {
    }
    LevelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_level_page__WEBPACK_IMPORTED_MODULE_6__["LevelPage"]]
        })
    ], LevelPageModule);
    return LevelPageModule;
}());



/***/ }),

/***/ "./src/app/level/level.page.html":
/*!***************************************!*\
  !*** ./src/app/level/level.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <ion-header translucent>\r\n    <ion-toolbar>\r\n      <ion-title class=\"header-title\">Choose level</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-content >\r\n  <form [(formGroup)]=\"gameForm\"  (ngSubmit)=\"onSubmit()\">\r\n      <ion-label color=\"primary\" style=\"margin-top:10px\" ><p class=\"select-label\">Difficulty</p></ion-label>\r\n      <ion-select value=\"4\" okText=\"Okay\" cancelText=\"Dismiss\" formControlName=\"selectDiff\">\r\n        <ion-select-option value=\"4\">4x4</ion-select-option>\r\n        <ion-select-option value=\"6\">6x6</ion-select-option>\r\n        <ion-select-option value=\"8\">8x8</ion-select-option>\r\n     \r\n      </ion-select>\r\n   \r\n      <ion-label color=\"primary\" style=\"margin-top:10px\"><p class=\"select-label\">Players</p></ion-label>\r\n          <ion-select value=\"2\" okText=\"Okay\" cancelText=\"Dismiss\" formControlName=\"selectPlayer\">\r\n            <ion-select-option value=\"2\">2 players</ion-select-option>\r\n            <ion-select-option value=\"3\">3 players</ion-select-option>\r\n            <ion-select-option value=\"4\">4 players</ion-select-option>\r\n            <ion-select-option value=\"5\">5 players</ion-select-option>\r\n          </ion-select>\r\n\r\n          <div class=\"ion-padding\">\r\n     \r\n              <ion-button expand=\"block\" type=submit class=\"start-game-btn\" color=\"primary\">Start game</ion-button>\r\n           \r\n            </div>\r\n  </form>   \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/level/level.page.scss":
/*!***************************************!*\
  !*** ./src/app/level/level.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  color: #3498db;\n  text-overflow: unset;\n  white-space: unset; }\n\n.toolbar-title {\n  text-overflow: unset;\n  white-space: unset; }\n\n.container {\n  padding: 3%; }\n\n.title {\n  margin-top: 10%; }\n\n.title h1 {\n  margin-left: 18%;\n  color: #3498db;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bolder;\n  font-size: 150%; }\n\n.select-label {\n  font-weight: bold;\n  font-size: 1.1em; }\n\nion-content {\n  --padding-top:10%;\n  --padding-end:5%;\n  --padding-start:5%; }\n\n.start-game-btn {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGV2ZWwvQzpcXFVzZXJzXFxEVCBVc2VyXFxEZXNrdG9wXFxFRElUXFxNRU1PUlktZ2l0aHViXFxNZW1vcnktZ2FtZS1mcm9udGVuZC9zcmNcXGFwcFxcbGV2ZWxcXGxldmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksb0JBQW9CO0VBQ3BCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSxpQkFBYztFQUNkLGdCQUFjO0VBQ2Qsa0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sZXZlbC9sZXZlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcblxyXG59XHJcblxyXG4udG9vbGJhci10aXRsZSB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICB9XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMyU7IFxyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7ICAgIFxyXG59XHJcblxyXG4udGl0bGUgaDEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4JTsgXHJcbiAgICBjb2xvcjogIzM0OThkYjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLnNlbGVjdC1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDoxMCU7XHJcbiAgICAtLXBhZGRpbmctZW5kOjUlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjUlO1xyXG59XHJcblxyXG4uc3RhcnQtZ2FtZS1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/level/level.page.ts":
/*!*************************************!*\
  !*** ./src/app/level/level.page.ts ***!
  \*************************************/
/*! exports provided: LevelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelPage", function() { return LevelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LevelPage = /** @class */ (function () {
    function LevelPage(router, _gameService, formBuilder) {
        this.router = router;
        this._gameService = _gameService;
        this.formBuilder = formBuilder;
        this.gameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            selectDiff: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](4, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            selectPlayer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](2, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    LevelPage.prototype.ngOnInit = function () {
        var _this = this;
        this.gameForm.get("selectDiff").valueChanges.subscribe(function (selectedOption) {
            _this.rowsNumber = selectedOption;
            console.log(_this.rowsNumber);
        });
        this.gameForm.get("selectPlayer").valueChanges.subscribe(function (selectedOption) {
            _this.playersNumber = selectedOption;
            console.log(_this.playersNumber);
        });
    };
    LevelPage.prototype.onSubmit = function () {
        var _this = this;
        this.rowsNumber = this.gameForm.get("selectDiff").value;
        this.playersNumber = this.gameForm.get("selectPlayer").value;
        // first version
        // this._gameService.setGameProperties(this.rowsNumber, this.playersNumber);
        // this.router.navigate(["/key-list"]);
        //new version
        var gm = this._gameService.createGame(this.rowsNumber, this.playersNumber).then(function () {
            console.log('uspjeeeh');
            _this.router.navigate(['/key-list']);
        }).catch(function (err) {
            console.log(err);
            // this.openSnackBar("Error!", "User code is incorrect!");
        });
    };
    LevelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-level",
            template: __webpack_require__(/*! ./level.page.html */ "./src/app/level/level.page.html"),
            styles: [__webpack_require__(/*! ./level.page.scss */ "./src/app/level/level.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LevelPage);
    return LevelPage;
}());



/***/ })

}]);
//# sourceMappingURL=level-level-module.js.map