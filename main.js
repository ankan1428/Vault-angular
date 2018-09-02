(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-panel\">\n  <div class=\"button_wrap\">\n    <a class=\"glass\" (click)='helpAudio()'>?</a>\n    <a class=\"glass\" (click)='closeApp()' >X</a>\n  </div>\n</div>\n<div class=\"body-panel\">\n  <div class=\"instruction-wrapper\">\n    <a class='glass' (click)='instructionAudio()'><fa-icon [icon]='faVolumeUp'></fa-icon></a>\n    <span class=\"instruction-text\">Read each sentence. Choose the vocabulary words that best completes the sentence.</span>\n  </div>\n  <app-question></app-question>\n  <app-vault></app-vault>\n  <app-option></app-option>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.service */ "./src/app/audio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(audio) {
        this.audio = audio;
        this.title = 'app';
        this.faVolumeUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolumeUp"];
    }
    AppComponent.prototype.instructionAudio = function () {
        this.audio.loadAndPlay('instruction');
    };
    AppComponent.prototype.helpAudio = function () {
        this.audio.loadAndPlay('help');
    };
    AppComponent.prototype.closeApp = function () {
        window.close();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vault_vault_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vault/vault.component */ "./src/app/vault/vault.component.ts");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security.service */ "./src/app/security.service.ts");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio.service */ "./src/app/audio.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./option/option.component */ "./src/app/option/option.component.ts");
/* harmony import */ var _random_order_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./random-order.pipe */ "./src/app/random-order.pipe.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _vault_vault_component__WEBPACK_IMPORTED_MODULE_5__["VaultComponent"],
                _option_option_component__WEBPACK_IMPORTED_MODULE_9__["OptionComponent"],
                _random_order_pipe__WEBPACK_IMPORTED_MODULE_10__["RandomOrderPipe"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_11__["QuestionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
            ],
            providers: [
                _common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
                _security_service__WEBPACK_IMPORTED_MODULE_6__["SecurityService"],
                _audio_service__WEBPACK_IMPORTED_MODULE_7__["AudioService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/audio.service.ts":
/*!**********************************!*\
  !*** ./src/app/audio.service.ts ***!
  \**********************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AudioService = /** @class */ (function () {
    function AudioService(http, common) {
        this.http = http;
        this.common = common;
        this.AudioContext = (window["AudioContext"] || window["webkitAudioContext"]);
        this.audioMap = {
            correct: ['now_you_got_it_1.mp3', 'well_done.mp3', 'wonderful.mp3'],
            inCorrect: ['lets_try_another_2.mp3', 'not_quite_keep_trying_1.mp3', 'oops_another_try_1.mp3'],
            instruction: ['dl_vocabulary_completes_sentence_2.mp3'],
            showAnswer: ['not_quite_correct_answer_1.mp3'],
            help: ['word_vault_help.mp4'],
            reward: ['reward1.mp3'],
            vaultOpen: ['vault_door_02.mp3']
        };
        try {
            this.audioLoaded = false;
            this.audioContext = new this.AudioContext();
        }
        catch (e) {
            alert('Web Audio API is not supported in this browser');
        }
    }
    AudioService.prototype.loadAudioFile = function (fileName) {
        var _this = this;
        var basePath = "assets/sfx/";
        return fetch(basePath + fileName)
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (buffer) {
            return new Promise(function (resolve, reject) {
                _this.audioContext.decodeAudioData(buffer, resolve, reject);
            });
        });
    };
    AudioService.prototype.play = function () {
        var bufferSource = this.audioContext.createBufferSource();
        bufferSource.buffer = this.audioBuffer;
        bufferSource.connect(this.audioContext.destination);
        bufferSource.start(0);
    };
    AudioService.prototype.loadAndPlay = function (type) {
        var _this = this;
        var fileName = this.common.shuffle(this.audioMap[type])[0];
        this.loadAudioFile(fileName)
            .then(function (audioBuffer) {
            _this.audioLoaded = false;
            _this.audioBuffer = audioBuffer;
            _this.play();
        })
            .catch(function (error) { throw error; });
    };
    AudioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], AudioService);
    return AudioService;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/option/option.component.css":
/*!*********************************************!*\
  !*** ./src/app/option/option.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".option-wrapper {\n  display: inline-block;\n  position: relative;\n  left: 25px;\n  top: -90px;\n}\n\n.option-wrapper li.option {\n  background: white;\n  border-radius: 54px;\n  width: 360px;\n  margin-bottom: 20px;\n  position: relative;\n  max-height: 40px;\n  border: 2px solid #656464;\n  cursor: pointer;\n}\n\n.option-wrapper li.option span {\n  font-size: 25px;\n  position: relative;\n  top: -16px;\n  padding-left: 20px;\n}\n\n.option span.red {\n  color: rgb(214, 0, 0)\n}\n\n.option span.green {\n  color: rgb(82, 218, 4)\n}\n\n.submit-panel a {\n  float: right;\n  margin: 35px 10px;\n}\n\n.submit-panel a.disabled {\n  pointer-events: none;\n  cursor: default;\n  opacity: 0.5;\n}\n\n/** play button icon */\n\n.play {\n  display: inline-block;\n  color: blue;\n  text-shadow: 0 0 2px rgba(0,0,0,.3);\n  border-radius: 45px;\n  padding: 5px 19px;\n  font-size: 45px;\n  line-height: 14px;\n  position: relative;\n  top:-10px;\n  left: -5px;\n}\n\n.play.white { \n  background: #e8e8e8;\n  box-shadow: inset 0 0 2px 0 #efebeb, \n  inset 1px 5px 2px 0px rgb(255, 254, 254), \n  inset 0px 9px 20px 0px rgba(0,0,0,.05), \n  1px 5px 4px 0 rgba(0,0,0,.25);\n}\n\n.play.yellow { \n  background: rgb(255, 230, 2); \n  box-shadow: inset 0 0 2px 0 rgb(255, 230, 2), \n  inset 1px 5px 2px 0px rgb(255, 254, 254), \n  inset 0px 9px 20px 0px rgba(0,0,0,.05), \n  1px 5px 4px 0 rgba(0,0,0,.25);\n}\n\n.play fa-icon {\n  position: relative;\n  top: 2px; \n  left: 5px;\n}\n\n.play.white:hover {\n  background: #fffefe;\n}\n\n.play.yellow:hover {\n  background: rgb(255, 242, 128);\n}\n"

/***/ }),

/***/ "./src/app/option/option.component.html":
/*!**********************************************!*\
  !*** ./src/app/option/option.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='option-wrapper'>\n  <ul>\n    <li class='option' id='question.qid' *ngFor='let option of question.options | randomOrder' (click)='setSelected(option)'>\n      <a [ngClass]=\"{'play': true, 'white': selectedOption != option, 'yellow': selectedOption == option}\"><fa-icon [icon]='faCaretRight'></fa-icon></a>\n      <span [ngClass]=\"{'red' : showAnswer == true && selectedOption == option, 'green': showAnswer == true && correctAnswer == option}\" >{{option}}</span>\n    </li>\n  </ul>\n  <div class='submit-panel'>\n    <a [ngClass]=\"{'glass': true, 'disabled': disableOK}\" (click)=\"submit()\">OK</a>\n    <a class='glass' (click)=\"reset()\">Reset</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/option/option.component.ts":
/*!********************************************!*\
  !*** ./src/app/option/option.component.ts ***!
  \********************************************/
/*! exports provided: OptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionComponent", function() { return OptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../security.service */ "./src/app/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OptionComponent = /** @class */ (function () {
    function OptionComponent(security) {
        this.security = security;
        this.faCaretRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretRight"];
        this.question = {};
        this.isDisable = true;
        this.disableOptions = false;
    }
    OptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.security.getQuestion()
            .subscribe(function (data) {
            _this.showAnswer = false;
            if (!data) {
                _this.disableOptions = true;
                return;
            }
            _this.disableOptions = false;
            _this.question = data;
            _this.selectedOption = undefined;
            _this.correctAnswer = undefined;
        });
    };
    OptionComponent.prototype.setSelected = function (opt) {
        this.isDisable = this.disableOptions;
        if (this.disableOptions)
            return;
        this.selectedOption = opt;
    };
    OptionComponent.prototype.submit = function () {
        var _this = this;
        this.isDisable = this.disableOptions = true;
        var correctOption = this.security.validate(this.selectedOption);
        if (typeof correctOption === 'string') {
            this.correctAnswer = correctOption;
            this.showAnswer = true;
        }
        else if (correctOption === false) {
            setTimeout(function () {
                _this.disableOptions = false;
                _this.correctAnswer = undefined;
                _this.selectedOption = undefined;
            }, 2000);
        }
    };
    OptionComponent.prototype.reset = function () {
        this.security.resetActivity();
    };
    OptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-option',
            template: __webpack_require__(/*! ./option.component.html */ "./src/app/option/option.component.html"),
            styles: [__webpack_require__(/*! ./option.component.css */ "./src/app/option/option.component.css")]
        }),
        __metadata("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]])
    ], OptionComponent);
    return OptionComponent;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.question{\n    height: 65px;\n    background: white;\n    width: 90%;\n    border: 5px solid #656464;\n    margin: 3px 0px 0px 29px;\n  }\n  \n.questiontext{\n    font-size: 21px;\n    padding-left: 20px;\n}"

/***/ }),

/***/ "./src/app/question/question.component.html":
/*!**************************************************!*\
  !*** ./src/app/question/question.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"question\">\n <p class =\"questiontext\">{{question.text}}</p>\n</div>"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../security.service */ "./src/app/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(security) {
        this.security = security;
        this.question = {};
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.security.getQuestion()
            .subscribe(function (data) {
            if (data) {
                _this.question = data;
            }
        });
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/random-order.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/random-order.pipe.ts ***!
  \**************************************/
/*! exports provided: RandomOrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomOrderPipe", function() { return RandomOrderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RandomOrderPipe = /** @class */ (function () {
    function RandomOrderPipe(common) {
        this.common = common;
    }
    RandomOrderPipe.prototype.transform = function (arr) {
        return this.common.shuffle(arr || []);
    };
    RandomOrderPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'randomOrder'
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], RandomOrderPipe);
    return RandomOrderPipe;
}());



/***/ }),

/***/ "./src/app/security.service.ts":
/*!*************************************!*\
  !*** ./src/app/security.service.ts ***!
  \*************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio.service */ "./src/app/audio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SecurityService = /** @class */ (function () {
    function SecurityService(http, audio) {
        var _this = this;
        this.http = http;
        this.audio = audio;
        this.qID = 0;
        this.groupIndex = 0;
        this.questionSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.unlockSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resetVault$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loadQuestions().subscribe(function (data) {
            _this.questions = data;
            _this.sendNext(true);
        }, function (error) { return console.log(error); });
    }
    SecurityService.prototype.getQuestion = function () {
        return this.questionSubject$;
    };
    SecurityService.prototype.unlockVault = function () {
        return this.unlockSubject$;
    };
    SecurityService.prototype.resetVault = function () {
        return this.resetVault$;
    };
    SecurityService.prototype.validate = function (ans) {
        var _this = this;
        var isCorrect = this.questions[this.groupIndex][this.qID].answer === ans;
        this.questions[this.groupIndex][this.qID].correctAnswered = isCorrect;
        this.questions[this.groupIndex][this.qID].try++;
        if (isCorrect) {
            setTimeout(function () {
                _this.processNextQuestion();
            }, 2000);
            this.audio.loadAndPlay('correct');
            this.unlockSubject$.next();
            return true;
        }
        else if (!isCorrect && this.questions[this.groupIndex][this.qID].try === 2) {
            setTimeout(function () {
                _this.processNextQuestion();
            }, 4000);
            this.audio.loadAndPlay('showAnswer');
            return this.questions[this.groupIndex][this.qID].answer;
        }
        this.audio.loadAndPlay('inCorrect');
        return false;
    };
    SecurityService.prototype.processNextQuestion = function () {
        if (this.groupIndex >= this.questions.length) {
            this.sendNext(false);
            return false;
        }
        else {
            var groupCleared = true;
            this.qID++;
            for (var i = 0; i < this.questions[this.groupIndex].length; i++, this.qID++) {
                this.qID = this.qID % this.questions[this.groupIndex].length;
                if (!this.questions[this.groupIndex][this.qID].correctAnswered) {
                    groupCleared = false;
                    this.sendNext(true);
                    break;
                }
            }
            if (groupCleared && this.groupIndex + 1 <= this.questions.length) {
                this.qID = -1;
                this.groupIndex++;
                this.processNextQuestion();
            }
            else {
                return false;
            }
        }
    };
    SecurityService.prototype.loadQuestions = function () {
        return this.http.get("assets/data/questions.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("Bad Promise: " + error); }));
    };
    SecurityService.prototype.sendNext = function (hasNext) {
        if (!hasNext) {
            this.questionSubject$.next(null);
            return;
        }
        this.questions[this.groupIndex][this.qID].correctAnswered = false;
        this.questions[this.groupIndex][this.qID].try = 0;
        this.questionSubject$.next({
            qid: this.questions[this.groupIndex][this.qID].qid,
            text: this.questions[this.groupIndex][this.qID].text,
            options: this.questions[this.groupIndex][this.qID].options,
        });
    };
    SecurityService.prototype.resetActivity = function () {
        var _this = this;
        this.qID = 0;
        this.groupIndex = 0;
        this.loadQuestions().subscribe(function (data) {
            _this.questions = data;
            _this.sendNext(true);
        }, function (error) { return console.log(error); });
        this.resetVault$.next();
    };
    SecurityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _audio_service__WEBPACK_IMPORTED_MODULE_4__["AudioService"]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "./src/app/vault/vault.component.css":
/*!*******************************************!*\
  !*** ./src/app/vault/vault.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vault-wrapper {\n  display: inline-block;\n  position: relative;\n  top: 15px;\n  left: 25px;\n}\n\n.vault-wrapper .treasure {\n  position: absolute;\n  left: 79px;\n  top: 28px;\n  border-radius: 231px;\n  height: 355px;\n  width: 355px;\n  background: 5f5d5d;\n  text-align: center;\n}\n\n.vault-wrapper .treasure-img {\n  position: relative;\n  width: 255px;\n  height: 255px;\n  border-radius: 125px;\n  margin: 50px;\n  transition: opacity 2s ease-in;\n}\n\n.treasure-img.show {\n  opacity: 1;\n}\n\n.treasure-img.hide {\n  opacity: 0;\n}\n"

/***/ }),

/***/ "./src/app/vault/vault.component.html":
/*!********************************************!*\
  !*** ./src/app/vault/vault.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='vault-wrapper'>\n  <img [src]='basePath + imgName' alt=\"vault\">\n  <div class='treasure'>\n    <img [ngClass]=\"['treasure-img', (groupIndex == imgGroup.length ? 'show' : 'hide')]\" src='assets/img/goldCoins.jpg' alt=\"vault\">\n  </div>\n  <div *ngFor=\"let img of imgGroup[groupIndex]\" [hidden]=\"true\">\n    <img [src]='basePath + img' alt=\"vault\" [hidden]=\"true\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/vault/vault.component.ts":
/*!******************************************!*\
  !*** ./src/app/vault/vault.component.ts ***!
  \******************************************/
/*! exports provided: VaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultComponent", function() { return VaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../security.service */ "./src/app/security.service.ts");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../audio.service */ "./src/app/audio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * image info : 45 images in each animation
 */
var VaultComponent = /** @class */ (function () {
    function VaultComponent(security, audio) {
        this.security = security;
        this.audio = audio;
    }
    VaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupIndex = 0;
        this.imgName = 'lock0001.png';
        this.basePath = "assets/img/vault/";
        this.imgGroup = [];
        this.skipAnimGroup = [1, 7];
        this.createImgGroups();
        this.security.unlockVault().subscribe(function () {
            _this.unlockNext();
        });
        this.security.resetVault().subscribe(function () {
            _this.groupIndex = 0;
            _this.imgName = 'lock0001.png';
        });
    };
    VaultComponent.prototype.createImgGroups = function () {
        var imgNames = [];
        for (var i = 1; i < 457; i++) {
            imgNames.push(this.nextImage(i - 1));
            if (i % 46 === 0) {
                this.imgGroup.push(imgNames);
                imgNames = [];
            }
        }
        this.imgGroup.push(imgNames);
    };
    VaultComponent.prototype.unlockNext = function () {
        var _this = this;
        var intv = 40;
        var index = 0;
        this.intvID = setInterval(function () {
            intv += 2;
            _this.imgName = _this.imgGroup[_this.groupIndex][index++];
            if (index >= _this.imgGroup[_this.groupIndex].length) {
                clearInterval(_this.intvID);
                _this.groupIndex = _this.findNextAnimGroup(_this.groupIndex + 1);
            }
        }, intv);
        this.audio.loadAndPlay('vaultOpen');
    };
    VaultComponent.prototype.findNextAnimGroup = function (grp) {
        if (this.skipAnimGroup.indexOf(grp) >= 0) {
            grp++;
            if (grp < this.imgGroup.length) {
                return this.findNextAnimGroup(grp);
            }
        }
        return grp;
    };
    VaultComponent.prototype.nextImage = function (imgIndex) {
        var baseName = "lock0000";
        var imgName = baseName.substring(0, baseName.length - ((++imgIndex).toString().length)) + imgIndex + ".png";
        return imgName;
    };
    VaultComponent.prototype.ngOnDestroy = function () {
        if (this.intvID) {
            clearInterval(this.intvID);
        }
    };
    VaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vault',
            template: __webpack_require__(/*! ./vault.component.html */ "./src/app/vault/vault.component.html"),
            styles: [__webpack_require__(/*! ./vault.component.css */ "./src/app/vault/vault.component.css")]
        }),
        __metadata("design:paramtypes", [_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"], _audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"]])
    ], VaultComponent);
    return VaultComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Training\Vault-Angular-develop\Vault-angular\vocab-vault\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map