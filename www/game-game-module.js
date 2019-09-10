(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-game-module"],{

/***/ "./src/app/game/game.module.ts":
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/*! exports provided: GamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageModule", function() { return GamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.page */ "./src/app/game/game.page.ts");
/* harmony import */ var _shared_material_design_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material-design.module */ "./src/app/shared/material-design.module.ts");








var routes = [
    {
        path: '',
        component: _game_page__WEBPACK_IMPORTED_MODULE_6__["GamePage"]
    }
];
var GamePageModule = /** @class */ (function () {
    function GamePageModule() {
    }
    GamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_material_design_module__WEBPACK_IMPORTED_MODULE_7__["MaterialDesignModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_game_page__WEBPACK_IMPORTED_MODULE_6__["GamePage"]]
        })
    ], GamePageModule);
    return GamePageModule;
}());



/***/ }),

/***/ "./src/app/game/game.page.html":
/*!*************************************!*\
  !*** ./src/app/game/game.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content>\r\n    <ion-header translucent>\r\n        <ion-toolbar>\r\n          <span class=\"header-title\">Memory Game</span> \r\n        </ion-toolbar>\r\n      </ion-header>\r\n    <div *ngIf=\"show\" style=\"margin-top:1%;\" >\r\n        <mat-grid-list cols=\"{{rows}}\" rowHeight=\"1:1\">\r\n        <mat-grid-tile *ngFor=\"let c of _gameService.getCards()\" (click)='flipCard(c)'><ion-icon *ngIf=\"!c.hidden\" name={{c.icon}}></ion-icon></mat-grid-tile>\r\n         \r\n          \r\n        \r\n      \r\n        </mat-grid-list>\r\n       \r\n\r\n      </div>\r\n      <div *ngIf=\"show\" style=\"display: inline-block; width:100%\">\r\n          <div class=\"players\">Players:\r\n              <div class=\"pl\" *ngFor=\"let pl of _gameService.getGame().users\"> {{pl.username}}  | {{pl.points}} pts.  </div>\r\n              \r\n             </div>  \r\n              \r\n      </div>\r\n   \r\n</ion-content>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/game/game.page.scss":
/*!*************************************!*\
  !*** ./src/app/game/game.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue;\n  font-size: 3rem; }\n\nmat-grid-list {\n  width: 400px;\n  height: 400px;\n  margin: auto;\n  padding: 0px !important; }\n\n.header-title {\n  color: #3498db;\n  font-weight: bolder;\n  margin-left: 35%; }\n\n.players {\n  color: #3498db;\n  font-weight: bolder;\n  margin-top: 12%;\n  margin-left: 5%;\n  float: left; }\n\n.players2 {\n  color: #3498db;\n  font-weight: bolder;\n  margin-top: 12%;\n  margin-left: 9%;\n  float: left; }\n\n.pl {\n  color: black;\n  font-weight: initial;\n  margin-top: 10%; }\n\n@media only screen and (max-width: 420px) {\n  mat-grid-list {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9DOlxcVXNlcnNcXERUIFVzZXJcXERlc2t0b3BcXEVESVRcXE1FTU9SWS1naXRodWJcXE1lbW9yeS1nYW1lLWZyb250ZW5kL3NyY1xcYXBwXFxnYW1lXFxnYW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0ksY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFO0lBQ0UsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5tYXQtZ3JpZC1saXN0IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBjb2xvcjogIzM0OThkYjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICBcclxufVxyXG5cclxuLnBsYXllcnN7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBtYXJnaW4tdG9wOiAxMiU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5wbGF5ZXJzMntcclxuICBjb2xvcjogIzM0OThkYjtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIG1hcmdpbi10b3A6IDEyJTtcclxuICBtYXJnaW4tbGVmdDogOSU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5wbHtcclxuICBjb2xvcjogYmxhY2s7IFxyXG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsOyBcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICBtYXQtZ3JpZC1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game/game.page.ts":
/*!***********************************!*\
  !*** ./src/app/game/game.page.ts ***!
  \***********************************/
/*! exports provided: GamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePage", function() { return GamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/game.service */ "./src/app/shared/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var GamePage = /** @class */ (function () {
    function GamePage(_gameService, router, storage, snackBar) {
        this._gameService = _gameService;
        this.router = router;
        this.storage = storage;
        this.snackBar = snackBar;
        this.show = false;
        this.hidden = false;
        this.numberList = [];
        this.open1 = false;
        this.open2 = false;
        this.iconMap = {
            "1": "basket", "2": "contract", "3": "expand", "4": "flashlight", "5": "happy", "6": "jet", "7": "planet", "8": "rose",
            "9": "pulse", "10": "rocket", "11": "heart", "12": "flash", "13": "add-circle", "14": "add-circle-outline", "15": "cafe", "16": "basketball",
            "17": "car", "18": "bus", "19": "hand", "20": "clock", "21": "heart-half", "22": "moon", "23": "paw", "24": "sad",
            "25": "school", "26": "star", "27": "logo-instagram", "28": "logo-youtube", "29": "logo-android", "30": "logo-apple", "31": "logo-facebook", "32": "logo-freebsd-devil",
        };
    }
    GamePage.prototype.ngOnInit = function () {
    };
    GamePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.checkGameAsync().then(function (val) {
                var valJson = JSON.parse(val);
                _this.game = valJson;
                _this.rows = valJson.rows;
                _this.show = true;
                _this._gameService.generateGrid();
            });
        });
    };
    GamePage.prototype.checkGameAsync = function () {
        var _this = this;
        return this.storage.get('game').then(function (val) {
            if (val) {
                return val;
            }
            else {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        _this.checkGameAsync().then(function (val) {
                            resolve(val);
                        }).catch(function () {
                            reject();
                        });
                    }, 1000);
                });
            }
        });
    };
    GamePage.prototype.flipCard = function (card) {
        var _this = this;
        if (!card.hidden) {
            return;
        }
        else if (!_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"].isCurrentPlayer) {
            this.openSnackBar("Error!", "Not your turn!");
            return;
        }
        if (_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"].isSending) {
            return;
        }
        else {
            _shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"].isSending = true;
        }
        var allConnected = true;
        var users = _shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"].game.users;
        users.forEach(function (user) {
            if (user.username == null) {
                allConnected = false;
                _this.openSnackBar("Error!", "Wait for other players!");
                return;
            }
        });
        if (allConnected) {
            var val = this._gameService.getCurrentValue(card.index).then(function (num) {
                card.icon = _this.iconMap['' + num];
            }).catch(function (err) {
                console.log(err);
            });
            ;
        }
        //card.hidden = false;
        // ...
    };
    GamePage.prototype.openSnackBar = function (message, description) {
        this.snackBar.open(message, description, {
            duration: 2000
        });
    };
    GamePage.prototype.openSnackBar2 = function (message, description) {
        this.snackBar.open(message, description, {
            duration: 20000
        });
    };
    GamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.page.html */ "./src/app/game/game.page.html"),
            styles: [__webpack_require__(/*! ./game.page.scss */ "./src/app/game/game.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], GamePage);
    return GamePage;
}());



/***/ })

}]);
//# sourceMappingURL=game-game-module.js.map