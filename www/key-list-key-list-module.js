(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["key-list-key-list-module"],{

/***/ "./src/app/key-list/key-list.module.ts":
/*!*********************************************!*\
  !*** ./src/app/key-list/key-list.module.ts ***!
  \*********************************************/
/*! exports provided: KeyListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyListPageModule", function() { return KeyListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _key_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-list.page */ "./src/app/key-list/key-list.page.ts");
/* harmony import */ var _shared_material_design_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material-design.module */ "./src/app/shared/material-design.module.ts");








var routes = [
    {
        path: '',
        component: _key_list_page__WEBPACK_IMPORTED_MODULE_6__["KeyListPage"]
    }
];
var KeyListPageModule = /** @class */ (function () {
    function KeyListPageModule() {
    }
    KeyListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_material_design_module__WEBPACK_IMPORTED_MODULE_7__["MaterialDesignModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_key_list_page__WEBPACK_IMPORTED_MODULE_6__["KeyListPage"]]
        })
    ], KeyListPageModule);
    return KeyListPageModule;
}());



/***/ }),

/***/ "./src/app/key-list/key-list.page.html":
/*!*********************************************!*\
  !*** ./src/app/key-list/key-list.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title class=\"header-title\">Memory Game</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"!showKeys\"  style=\"height: 100%\" >\r\n    <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\r\n      <ion-spinner name=\"circles\"></ion-spinner>\r\n      Generating codes...\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid  >\r\n    <div style=\"margin-top:10%\">\r\n      <ion-label class=\"username-label1\">My key:</ion-label>\r\n      <div  (click)=\"copyToClipboard(code1)\">\r\n        <p class=\"label-1\">{{code1}}</p>\r\n      </div>\r\n      <div class=\"label-separator \">\r\n      </div>\r\n      <ion-label class=\"username-label2\" style=\"margin-top:10%\">Players key:</ion-label>\r\n  \r\n    </div>\r\n    <div *ngFor=\"let k of code2\">\r\n      <p (click)=\"copyToClipboard(k)\" class=\"label-1\">{{k}}</p>\r\n    </div>\r\n    <div class=\"ion-padding\">\r\n      <ion-button expand=\"block\" (click)=\"nextPage()\" class=\"login-btn\" color=\"primary\">\r\n        <p>NEXT</p>\r\n      </ion-button>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/key-list/key-list.page.scss":
/*!*********************************************!*\
  !*** ./src/app/key-list/key-list.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  color: #3498db;\n  font-weight: bolder; }\n\n.username-label1 {\n  margin-left: 5%;\n  color: #3498db;\n  font-weight: bold; }\n\n.label-separator {\n  height: 0.8rem; }\n\n.label-1 {\n  margin-left: 8%; }\n\n.username-label2 {\n  margin-left: 5%;\n  color: #3498db;\n  font-weight: bold; }\n\n.login-btn {\n  height: 15%;\n  width: 99%;\n  border-radius: 30px;\n  size: large;\n  display: inline-block;\n  background-color: #3498db;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5LWxpc3QvQzpcXFVzZXJzXFxEVCBVc2VyXFxEZXNrdG9wXFxFRElUXFxNRU1PUlktZ2l0aHViXFxNZW1vcnktZ2FtZS1mcm9udGVuZC9zcmNcXGFwcFxca2V5LWxpc3RcXGtleS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFJdkI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFLbkI7RUFFRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9rZXktbGlzdC9rZXktbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuXHJcbi51c2VybmFtZS1sYWJlbDEge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBjb2xvcjogIzM0OThkYjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuIFxyXG59XHJcblxyXG4ubGFiZWwtc2VwYXJhdG9ye1xyXG4gIGhlaWdodDogMC44cmVtOyBcclxufVxyXG4ubGFiZWwtMXtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbn1cclxuXHJcbi51c2VybmFtZS1sYWJlbDIge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBjb2xvcjogIzM0OThkYjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvL21hcmdpbi10b3A6MTAlO1xyXG5cclxufVxyXG5cclxuLmxvZ2luLWJ0bntcclxuIC8vIG1hcmdpbi10b3A6IDQwJTtcclxuICBoZWlnaHQ6IDE1JTtcclxuICB3aWR0aDogOTklO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgc2l6ZTogbGFyZ2U7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/key-list/key-list.page.ts":
/*!*******************************************!*\
  !*** ./src/app/key-list/key-list.page.ts ***!
  \*******************************************/
/*! exports provided: KeyListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyListPage", function() { return KeyListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var KeyListPage = /** @class */ (function () {
    function KeyListPage(platform, router, _gameService, snackBar, clipboard, toastController) {
        this.platform = platform;
        this.router = router;
        this._gameService = _gameService;
        this.snackBar = snackBar;
        this.clipboard = clipboard;
        this.toastController = toastController;
        this.code1 = null;
        this.code2 = [null, null, null, null];
        this.showKeys = false;
    }
    KeyListPage.prototype.copyToClipboard = function (code) {
        var _this = this;
        if (this.platform.is("cordova")) {
            this.clipboard.copy(code).then(function (resolve) {
                _this.toastController.create({
                    message: 'Copied to clipboard',
                    duration: 3000
                }).then(function (toast) {
                    toast.present();
                });
            });
        }
        else {
            window.navigator.clipboard.writeText(code).then(function () {
                _this.toastController.create({
                    message: 'Copied to clipboard',
                    duration: 3000
                }).then(function (toast) {
                    toast.present();
                });
            });
        }
    };
    KeyListPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        var number = _shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"].gameStarter.playerNumber;
        console.log('Game starter u keylist:', _shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"].gameStarter);
        setTimeout(function () {
            _this.code1 = _shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"].gameStarter.users[0].code;
            for (var index = 1; index < number; index++) {
                _this.code2.push(_shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"].gameStarter.users[index].code);
            }
            _this.showKeys = true;
        }, 2000);
    };
    KeyListPage.prototype.nextPage = function () {
        var _this = this;
        console.log(_shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"].gameStarter);
        if (_shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"].gameStarter.username !== '') {
            var err = this._gameService.getGameCode(_shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"].gameStarter.users[0].code).then(function () {
                _this.router.navigate(['/game']);
            }).catch(function (err) {
                console.log(err);
                _this.openSnackBar("Error!", "User code is incorrect!");
            });
        }
        else {
            this.router.navigate(['/enter-code']);
        }
    };
    KeyListPage.prototype.openSnackBar = function (message, description) {
        this.snackBar.open(message, description, {
            duration: 10000
        });
    };
    KeyListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-key-list',
            template: __webpack_require__(/*! ./key-list.page.html */ "./src/app/key-list/key-list.page.html"),
            styles: [__webpack_require__(/*! ./key-list.page.scss */ "./src/app/key-list/key-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], KeyListPage);
    return KeyListPage;
}());



/***/ })

}]);
//# sourceMappingURL=key-list-key-list-module.js.map