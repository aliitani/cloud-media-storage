webpackJsonp([6],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMediaPage = /** @class */ (function () {
    function AddMediaPage(toastCtrl, alertCtrl, viewCtrl, navCtrl, navParams, fDB) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fDB = fDB;
        this.setThumbnail = '';
    }
    AddMediaPage.prototype.ngOnInit = function () {
        this.userUID = this.navParams.get('uid');
        this.userEmail = this.navParams.get('email');
    };
    AddMediaPage.prototype.ionViewDidLoad = function () {
    };
    // function that gets media records from user and addes them to a list
    AddMediaPage.prototype.getMedia = function (id) {
        this.mediaList = this.fDB.list('/users/' + id + '/posts/');
        return this.mediaList;
    };
    // function that allows user to add a new media record to firebase 
    AddMediaPage.prototype.addNewMedia = function () {
        if (this.setTitle !== undefined && this.setDescription !== undefined && this.setMedia !== undefined) {
            if (this.setThumbnail === '') {
                this.setThumbnail = '../assets/imgs/default.jpg';
                var newKey = this.fDB.list('/users/' + this.userUID + '/posts/').push({});
                newKey.set({
                    'id': newKey.key,
                    'title': this.setTitle,
                    'description': this.setDescription,
                    'link': this.setMedia,
                    'thumbnail': this.setThumbnail
                });
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                this.showToast('Media Added');
            }
            else {
                var newKey = this.fDB.list('/users/' + this.userUID + '/posts/').push({});
                newKey.set({
                    'id': newKey.key,
                    'title': this.setTitle,
                    'description': this.setDescription,
                    'link': this.setMedia,
                    'thumbnail': this.setThumbnail
                });
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                this.showToast('Media Added');
            }
        }
        else {
            this.showAlert('Input field is missing');
        }
    };
    // function shows a toast to user with an assigned message 
    AddMediaPage.prototype.showToast = function (s) {
        var toast = this.toastCtrl.create({
            message: s,
            position: 'bottom',
            duration: 1500
        });
        toast.present();
    };
    // function that shows an alert to the user with an assigned message
    AddMediaPage.prototype.showAlert = function (s) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: s,
            buttons: ['OK']
        });
        alert.present();
    };
    // function that allows users to cancel adding a media, and nothing gets pushed to the DB
    AddMediaPage.prototype.cancelNewMedia = function () {
        var _this = this;
        if (this.setTitle !== null
            && this.setDescription !== null
            && this.setMedia !== null
            && this.setThumbnail !== null) {
            var confirmAlert = this.alertCtrl.create({
                title: 'Form is not saved',
                message: 'Are you sure you want to cancel?',
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Yes',
                        role: 'cancel',
                        handler: function () {
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            confirmAlert.present();
        }
        else {
            this.viewCtrl.dismiss();
        }
    };
    AddMediaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-media',template:/*ion-inline-start:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/add-media/add-media.html"*/'<!--\n  Generated template for the AddMediaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      Local Media Collection: Add Media\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <p>Preview Thumbnail: </p>\n    </ion-row>\n    <ion-row>\n      <img class="imagePreview" [src]="setThumbnail"/>\n    </ion-row>\n  </ion-grid>\n  <ion-item>\n    <ion-label floating>Title</ion-label>\n    <ion-input type="text" [(ngModel)]="setTitle"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Description</ion-label>\n    <ion-input type="text" [(ngModel)]="setDescription"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Link (URL)</ion-label>\n    <ion-input type="text" [(ngModel)]="setMedia"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Thumbnail (URL)</ion-label>\n    <ion-input type="text" [(ngModel)]="setThumbnail"></ion-input>\n  </ion-item>\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-item>\n        <button ion-button color="primary" block large full (click)="addNewMedia()">Done</button>\n      </ion-item>\n    </ion-item-divider>\n    <ion-item-divider>\n      <ion-item>\n        <button ion-button color="danger" block large full (click)="cancelNewMedia()">Cancel</button>\n      </ion-item>\n    </ion-item-divider>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/add-media/add-media.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AddMediaPage);
    return AddMediaPage;
}());

//# sourceMappingURL=add-media.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(toastCtrl, viewCtrl, alertCtrl, AFauth, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    // function to register with with firebase
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                if (user.email !== undefined && user.password !== undefined) {
                    result = this.AFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
                    result.then(function () {
                        _this.showAlert('Done Registration');
                        _this.navCtrl.popToRoot();
                    }, function () {
                        _this.showAlert('Something went wront in your registration.');
                        _this.navCtrl.popToRoot();
                    });
                }
                else {
                    this.showAlert('Input fields are required');
                }
                return [2 /*return*/];
            });
        });
    };
    // function that alerts the user with an assigned message.
    RegisterPage.prototype.showAlert = function (s) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: s,
            buttons: ['OK']
        });
        alert.present();
    };
    // function to show a toast to a user with an assigned message
    RegisterPage.prototype.showToast = function (s) {
        var toast = this.toastCtrl.create({
            message: s,
            position: 'bottom',
            duration: 1500
        });
        toast.present();
    };
    // function allows user to cancel the registration process, goes back to the prev view
    RegisterPage.prototype.cancelRegisteration = function () {
        this.viewCtrl.dismiss();
        this.showToast('Registration canceled.');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Local Media Collection: Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row style="margin-top: 2em;">\n      <button ion-button color="primary" large full (click)="register(user)">Done!?</button>\n    </ion-row>\n    <ion-row>\n      <button ion-button color="danger" large full (click)="cancelRegisteration()">Cancel</button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_media_edit_media__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ViewMediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewMediaPage = /** @class */ (function () {
    function ViewMediaPage(fDB, sanitizer, iAB, modalCtrl, navCtrl, navParams) {
        this.fDB = fDB;
        this.sanitizer = sanitizer;
        this.iAB = iAB;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.userEmail = this.navParams.get('email');
        this.userUID = this.navParams.get('uid');
        this.userPID = this.navParams.get('pid');
        this.medias = [];
        this.mediaURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.navParams.get('media').link);
    }
    ViewMediaPage.prototype.ngOnInit = function () {
    };
    ViewMediaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataMedia = this.getMedia(this.userUID, this.userPID);
        this.dataMedia.snapshotChanges().subscribe(function (item) {
            _this.medias = [];
            item.forEach(function (element) {
                var id = element.key;
                var val = element.payload.val();
                _this.medias[id] = val;
            });
            _this.mediaURL = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.medias['link']);
            console.log(_this.mediaURL);
        });
    };
    // function that gets media from FDB, using uid, and pid
    ViewMediaPage.prototype.getMedia = function (uid, pid) {
        this.mediaList = this.fDB.list('/users/' + uid + '/posts/' + pid);
        return this.mediaList;
    };
    // function to edit media record 
    ViewMediaPage.prototype.editMedia = function (media) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__edit_media_edit_media__["a" /* EditMediaPage */], { 'email': this.userEmail, 'uid': this.userUID, 'media': media });
        modal.present();
    };
    // function that views url with InAppBrowser native feature
    ViewMediaPage.prototype.viewExternal = function (link) {
        var target = "_blank";
        this.iAB.create(link, target, this.options);
    };
    ViewMediaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-media',template:/*ion-inline-start:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/view-media/view-media.html"*/'<!--\n  Generated template for the ViewMediaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ medias[\'title\'] }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <ion-thumbnail><img [src]="medias[\'thumbnail\']"/></ion-thumbnail>\n      </ion-col>\n      <ion-col col-8>\n        <ion-title> {{ medias[\'title\'] }}</ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-title>Media: </ion-title>\n    </ion-row>\n    <ion-row>\n      <ion-col col-10 pull-1 push-1>\n        <embed [src]="mediaURL" class="embeded-media">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-title>External Link: </ion-title>\n    </ion-row>\n    <ion-row>\n      <button full block large ion-button color="secondary" (click)="viewExternal(medias[\'link\'])">View External</button>\n    </ion-row>\n    <ion-row>\n      <ion-title>Description: </ion-title>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <p>{{ medias[\'description\'] }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <button ion-button full large block color="primary" (click)="editMedia(medias)" style="margin-top: 2em;"><ion-icon name="brush"></ion-icon> Edit</button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/view-media/view-media.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ViewMediaPage);
    return ViewMediaPage;
}());

//# sourceMappingURL=view-media.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopOverDisplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PopOverDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopOverDisplayPage = /** @class */ (function () {
    function PopOverDisplayPage(viewCtrl, AFauth, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopOverDisplayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopOverDisplayPage');
    };
    // log out from firebase user auth
    PopOverDisplayPage.prototype.logOut = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        this.AFauth.auth.signOut().then(function () {
            _this.showSuccess();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }).catch(function () {
            _this.showAlert();
        });
    };
    // alert user that sign out didnt go correctly
    PopOverDisplayPage.prototype.showAlert = function () {
        //  toast
    };
    // show user that sign out went successfully
    PopOverDisplayPage.prototype.showSuccess = function () {
        //  toast
    };
    PopOverDisplayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pop-over-display',template:/*ion-inline-start:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/pop-over-display/pop-over-display.html"*/'<ion-item icon-only (click)="logOut()"><ion-icon name="exit"></ion-icon>Log Out</ion-item>\n\n'/*ion-inline-end:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/pop-over-display/pop-over-display.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PopOverDisplayPage);
    return PopOverDisplayPage;
}());

//# sourceMappingURL=pop-over-display.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-media/add-media.module": [
		353,
		5
	],
	"../pages/edit-media/edit-media.module": [
		354,
		4
	],
	"../pages/login/login.module": [
		355,
		3
	],
	"../pages/pop-over-display/pop-over-display.module": [
		356,
		2
	],
	"../pages/register/register.module": [
		357,
		1
	],
	"../pages/view-media/view-media.module": [
		358,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_firebaseConfig__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_add_media_add_media__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_view_media_view_media__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pop_over_display_pop_over_display__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_media_edit_media__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_media_add_media__["a" /* AddMediaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_view_media_view_media__["a" /* ViewMediaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pop_over_display_pop_over_display__["a" /* PopOverDisplayPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_media_edit_media__["a" /* EditMediaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-media/add-media.module#AddMediaPageModule', name: 'AddMediaPage', segment: 'add-media', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-media/edit-media.module#EditMediaPageModule', name: 'EditMediaPage', segment: 'edit-media', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pop-over-display/pop-over-display.module#PopOverDisplayPageModule', name: 'PopOverDisplayPage', segment: 'pop-over-display', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-media/view-media.module#ViewMediaPageModule', name: 'ViewMediaPage', segment: 'view-media', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__app_firebaseConfig__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_media_add_media__["a" /* AddMediaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_view_media_view_media__["a" /* ViewMediaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pop_over_display_pop_over_display__["a" /* PopOverDisplayPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_media_edit_media__["a" /* EditMediaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyA2aRp9MuRxVd-jVwzsxi_KP3fV2HggI2w",
        authDomain: "media-collection-2a5be.firebaseapp.com",
        databaseURL: "https://media-collection-2a5be.firebaseio.com",
        projectId: "media-collection-2a5be",
        storageBucket: "media-collection-2a5be.appspot.com",
        messagingSenderId: "839472622194"
    }
};
//# sourceMappingURL=app.firebaseConfig.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, AFauth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    // function to login with firebase
    LoginPage.prototype.logIn = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                if (user.email !== null && user.password != null) {
                    result = this.AFauth.auth.signInWithEmailAndPassword(user.email, user.password);
                    result.then(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }, function () {
                        _this.showAlert('Incorrect input fields entered.');
                        _this.navCtrl.setRoot(LoginPage_1);
                    });
                }
                else {
                    this.showAlert('Input fields are required to log in.');
                }
                return [2 /*return*/];
            });
        });
    };
    // function to show an alert to the user
    LoginPage.prototype.showAlert = function (s) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: s,
            buttons: ['OK']
        });
        alert.present();
    };
    // function to register with firebase
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title >Local Media Collection: Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-title>\n      Your go to for your local media collection!\n      </ion-title>\n    </ion-row>\n    <form ngForm="loginForm" novalidate (ngSubmit)="logIn(user)">\n      <ion-row>\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="text" [(ngModel)]="user.email" name="email" required></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="user.password" minlength="6" name="password" required></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row style="margin-top: 2em;">\n        <button ion-button block large  type="submit">Log In</button>\n      </ion-row>\n    </form>\n    <ion-row>\n      <button ion-button color="light" large full (click)="register()">Register</button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditMediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditMediaPage = /** @class */ (function () {
    function EditMediaPage(toastCtrl, alertCtrl, fDB, viewCtrl, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.fDB = fDB;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.media = this.navParams.get('media');
        this.setTitle = this.media.title;
        this.setDescription = this.media.description;
        this.setLink = this.media.link;
        this.setThumbnail = this.media.thumbnail;
        this.setID = this.media.id;
        this.userUID = this.navParams.get('uid');
    }
    EditMediaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditMediaPage');
    };
    // function that updates media
    EditMediaPage.prototype.updateMedia = function () {
        var _this = this;
        var media = this.fDB.list('/users/' + this.userUID + '/posts');
        var checkUpdate = this.alertCtrl.create({
            title: 'Update Media',
            message: 'Are you sure you want to update?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        _this.viewCtrl.dismiss();
                        _this.showAlert('Nothing was updated');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log(_this.setID, _this.setTitle, _this.setThumbnail, _this.setLink, _this.setDescription);
                        media.update(_this.setID, {
                            'id': _this.setID,
                            'title': _this.setTitle,
                            'description': _this.setDescription,
                            'link': _this.setLink,
                            'thumbnail': _this.setThumbnail
                        }).then(function () {
                            _this.showAlert('Done Updating');
                            _this.viewCtrl.dismiss();
                        }).catch(function () {
                            _this.showAlert('Something went wrong');
                            _this.viewCtrl.dismiss();
                        });
                    }
                }
            ]
        });
        checkUpdate.present();
    };
    // function that alerts the user with an assigned message 
    EditMediaPage.prototype.showAlert = function (s) {
        var toast = this.toastCtrl.create({
            message: s,
            position: 'bottom',
            duration: 1500
        });
        toast.present();
    };
    // function that cancels update if users decides to not update media
    EditMediaPage.prototype.cancelUpdate = function () {
        this.viewCtrl.dismiss();
        this.showAlert('Nothing was updated');
    };
    EditMediaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-media',template:/*ion-inline-start:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/edit-media/edit-media.html"*/'<!--\n  Generated template for the EditMediaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit: {{ media.title }} </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <p>Preview Thumbnail: </p>\n    </ion-row>\n    <ion-row>\n      <img class="imagePreview" [src]="setThumbnail"/>\n    </ion-row>\n  </ion-grid>\n  <ion-item>\n    <ion-label floating>Title</ion-label>\n    <ion-input type="text" [(ngModel)]="setTitle"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Description</ion-label>\n    <ion-input type="text" [(ngModel)]="setDescription"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Link (URL)</ion-label>\n    <ion-input type="text" [(ngModel)]="setLink"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Thumbnail (URL)</ion-label>\n    <ion-input type="text" [(ngModel)]="setThumbnail"></ion-input>\n  </ion-item>\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-item>\n        <button ion-button color="primary" block large full (click)="updateMedia()">Done</button>\n      </ion-item>\n    </ion-item-divider>\n    <ion-item-divider>\n      <ion-item>\n        <button ion-button color="danger" block large full (click)="cancelUpdate()">Cancel</button>\n      </ion-item>\n    </ion-item-divider>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/edit-media/edit-media.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EditMediaPage);
    return EditMediaPage;
}());

//# sourceMappingURL=edit-media.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_media_add_media__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_media_view_media__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pop_over_display_pop_over_display__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_media_edit_media__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, toastCtrl, popoverCtrl, fDB, modalCtrl, AFauth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.fDB = fDB;
        this.modalCtrl = modalCtrl;
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medias = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.listView = true;
        this.gridView = false;
        this.viewMode = (this.listView) ? "<ion-icon name='grid'></ion-icon>Grid Mode" : "<ion-icon name='list'></ion-icon>List Mode";
        if (this.navParams.get('list') || this.navParams.get('grid')) {
            this.listView = this.navParams.get('list');
            this.gridView = this.navParams.get('grid');
            this.viewMode = (this.listView) ? "<ion-icon name='grid'></ion-icon>Grid Mode" : "<ion-icon name='list'></ion-icon>List Mode";
        }
    };
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.AFauth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.userEmail = data.email;
                _this.userUID = data.uid;
                _this.dataMedia = _this.getMedia(_this.userUID);
                _this.dataMedia.snapshotChanges().subscribe(function (item) {
                    _this.medias = [];
                    item.forEach(function (element) {
                        _this.medias.push(element.payload.val());
                    });
                    console.log(_this.medias);
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
    };
    // function to switch between list or grid
    HomePage.prototype.switch = function () {
        this.gridView = !this.gridView;
        this.listView = !this.listView;
        this.viewMode = (this.listView) ? "<ion-icon name='grid'></ion-icon>Grid Mode" : "<ion-icon name='list'></ion-icon>List Mode";
    };
    // view a specific media in detail
    HomePage.prototype.viewMedia = function (media) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__view_media_view_media__["a" /* ViewMediaPage */], { 'media': media, 'email': this.userEmail, 'uid': this.userUID, 'pid': media.id });
    };
    // function to add new media using Ionic Modal
    HomePage.prototype.addMedia = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_media_add_media__["a" /* AddMediaPage */], { 'email': this.userEmail, 'uid': this.userUID });
        modal.present();
    };
    // function that fetches media from firebase DB
    HomePage.prototype.getMedia = function (uid) {
        this.mediaList = this.fDB.list('/users/' + uid + '/posts/');
        return this.mediaList;
    };
    // popover for several options
    HomePage.prototype.presentPopover = function (myEvent) {
        var popOver = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pop_over_display_pop_over_display__["a" /* PopOverDisplayPage */]);
        popOver.present({
            ev: myEvent
        });
    };
    // function allows user to delete a certain media record 
    HomePage.prototype.deleteMedia = function (media) {
        var _this = this;
        var posts = this.fDB.list('/users/' + this.userUID + '/posts');
        var confirmation = this.alertCtrl.create({
            title: 'Conform Delete!',
            message: 'Are you sure you want to delete ' + media.title,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        _this.showToast('Media was not deleted');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        posts.remove(media.id).then(function () {
                            _this.showToast('Deleted media: ' + media.title);
                        }).catch(function () {
                            _this.showToast('Deletion went wrong?!');
                        });
                    }
                }
            ]
        });
        confirmation.present();
    };
    // function that allows the user to edit a media record, uses a Modal
    HomePage.prototype.editMedia = function (media) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__edit_media_edit_media__["a" /* EditMediaPage */], { 'email': this.userEmail, 'uid': this.userUID, 'media': media });
        modal.present();
    };
    // function that shows a toast to the user with an assigned message
    HomePage.prototype.showToast = function (s) {
        var toast = this.toastCtrl.create({
            message: s,
            position: 'bottom',
            duration: 1500
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-row>\n      <ion-title>\n        Local Media Collection: Home\n      </ion-title>\n      <button ion-button color="light" clear (click)="presentPopover($event)">\n        <ion-icon name="more" clear></ion-icon>\n      </button>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-title>Hello, {{ userEmail }}</ion-title>\n  <ion-item-divider>\n    <ion-row>\n      <button ion-button color="secondary" full (click)="switch()" [(innerHTML)]="viewMode"></button>\n    </ion-row>\n    <p>While in List Mode: Swipe left or right on media for more options.</p>\n  </ion-item-divider>\n  <div *ngIf="medias.length === 0" class="empty-media">\n    <ion-title>No media added yet</ion-title>\n  </div>\n  <div *ngIf="gridView; else list">\n    <div *ngFor="let media of medias">\n      <ion-card>\n        <img [src]="media.thumbnail" [alt]="media.title"/>\n        <ion-card-content>\n          <ion-card-title>\n            {{ media.title }}\n          </ion-card-title>\n          <p>\n            {{ media.description }}\n          </p>\n          <ion-row>\n            <button ion-button color="primary" col-3 item-start (click)="viewMedia(media)">\n              <ion-icon name="open"> </ion-icon>\n              View\n            </button>\n            <button ion-button color="secondary" col-3 (click)="editMedia(media)">\n              <ion-icon name="brush"> </ion-icon>\n              Edit\n            </button>\n            <button ion-button color="danger" item-end col-3 (click)="deleteMedia(media)">\n              <ion-icon name="trash"> </ion-icon>\n              Delete\n            </button>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n  <ng-template #list>\n    <ion-list *ngFor="let media of medias">\n      <ion-item-sliding>\n\n        <ion-item (click)="viewMedia(media)">\n          <ion-thumbnail item-start>\n            <img [src]="media.thumbnail" [alt]="media.title"/>\n          </ion-thumbnail>\n          <h2>{{ media.title }}</h2>\n          <p>{{ media.description }}</p>\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button color="danger" (click)="deleteMedia(media)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n\n        <ion-item-options side="left">\n          <button ion-button color="secondary" (click)="editMedia(media)">\n            <ion-icon name="create"></ion-icon>\n            Edit\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ng-template>\n\n  <ion-fab right bottom>\n      <button ion-fab color="primary" (click)="addMedia()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/aliitani/Desktop/hiring-challenge/hiring-challenge/media-collection/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.js.map