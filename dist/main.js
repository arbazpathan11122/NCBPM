(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./form/form.module": [
		"./src/app/pages/admin/form/form.module.ts",
		"default~form-form-module~pages-admin-formview-formview-module",
		"form-form-module"
	],
	"./pages/admin/admin.module": [
		"./src/app/pages/admin/admin.module.ts",
		"pages-admin-admin-module"
	],
	"./pages/admin/formview/formview.module": [
		"./src/app/pages/admin/formview/formview.module.ts",
		"default~form-form-module~pages-admin-formview-formview-module",
		"pages-admin-formview-formview-module"
	],
	"./process/process.module": [
		"./src/app/pages/admin/process/process.module.ts",
		"process-process-module"
	],
	"./publish/publish.module": [
		"./src/app/pages/admin/publish/publish.module.ts",
		"publish-publish-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_404_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/404/error-page.component */ "./src/app/pages/404/error-page.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/auth.guard */ "./src/app/service/auth.guard.ts");







const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], },
    { path: 'signUp', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], },
    {
        path: 'home', loadChildren: './pages/admin/admin.module#AdminModule', canActivate: ['HomeAuthGuard']
    },
    { path: 'formView', loadChildren: './pages/admin/formview/formview.module#FormViewModule' },
    { path: '**', redirectTo: '/page404' },
    { path: 'page404', component: _pages_404_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_6__["HomeAuthGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'formeditor';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_404_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/404/error-page.component */ "./src/app/pages/404/error-page.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _service_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/form.service */ "./src/app/service/form.service.ts");
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/alert.service */ "./src/app/service/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/ngx-drag-drop.js");
/* harmony import */ var _service_Auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/Auth.service */ "./src/app/service/Auth.service.ts");
/* harmony import */ var firebaseui_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! firebaseui-angular */ "./node_modules/firebaseui-angular/fesm2015/firebaseui-angular.js");


















// import {  HomeAuthGuard } from './service/auth.guard';
// import { FirebaseUIModule } from 'firebaseui-angular';
// import * as firebase from 'firebase/app';
// import * as firebaseui from 'firebaseui';
// // currently there is a bug while building the app with --prod
// // - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// // the plugin exposes the two libraries as well. You can use those:

const firebaseUiAuthConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: 'https://ncbpm-1.firebaseapp.com/login',
    signInOptions: [
        firebaseui_angular__WEBPACK_IMPORTED_MODULE_18__["firebase"].auth.GoogleAuthProvider.PROVIDER_ID,
        // {
        //   scopes: [
        //     'public_profile',
        //     'email',
        //     'user_likes',
        //     'user_friends'
        //   ],
        //   customParameters: {
        //     'auth_type': 'reauthenticate'
        //   },
        //   provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
        // },
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
            requireDisplayName: false,
            provider: firebaseui_angular__WEBPACK_IMPORTED_MODULE_18__["firebase"].auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebaseui_angular__WEBPACK_IMPORTED_MODULE_18__["firebase"].auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        },
        firebaseui_angular__WEBPACK_IMPORTED_MODULE_18__["firebase"].auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    tosUrl: 'https://ncbpm-1.firebaseapp.com/page404',
    privacyPolicyUrl: 'https://ncbpm-1.firebaseapp.com/page404',
    credentialHelper: firebaseui_angular__WEBPACK_IMPORTED_MODULE_18__["firebaseui"].auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_404_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            firebaseui_angular__WEBPACK_IMPORTED_MODULE_18__["FirebaseUIModule"].forRoot(firebaseUiAuthConfig),
            // SweetAlert2Module.forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ngx_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DndModule"],
        ],
        providers: [_service_form_service__WEBPACK_IMPORTED_MODULE_9__["FormService"], {
                provide: 'HomeAuthGuard',
                useValue: (route, state) => true
            }, _service_Auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _service_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/404/error-page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/404/error-page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <firebase-ui></firebase-ui> -->\n<div class=\"m-5 p-5\">\n\n  <h2>Error404 <br>page Not found</h2>\n</div>"

/***/ }),

/***/ "./src/app/pages/404/error-page.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/404/error-page.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLzQwNC9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/404/error-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/404/error-page.component.ts ***!
  \***************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorPageComponent = class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-page',
        template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/pages/404/error-page.component.html"),
        styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/pages/404/error-page.component.scss")]
    })
], ErrorPageComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-bg d-flex align-items-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"m-auto form-horizontal\">\n        <p class=\"hint-text text-center mb-4\">Sign in Using</p>\n        <!-- <div class=\"form-group social-btn clearfix\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <a class=\"btn btn-social\"><i class=\"fa fa-google\"></i> &nbsp;\n                Google</a>\n            </div>\n            <div class=\"col-md-6\">\n              <a class=\"btn btn-social\"><i class=\"fa fa-facebook\"></i> &nbsp;\n                Facebook</a>\n            </div>\n          </div>\n        </div> -->\n\n        <firebase-ui></firebase-ui>\n        <div class=\"or-seperator mb-2\"><b>or</b></div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <a [class]=\"((emailTabActive)?'text-primary btn btn-social':'btn btn-social')\" (click)=\"changeTabe(true)\"><i\n                class=\"fa fa-email\"></i>\n              &nbsp;\n              Email</a>\n          </div>\n          <div class=\"col-md-6\">\n            <a [class]=\" ((!emailTabActive)?'text-primary btn btn-social':'btn btn-social')\"\n              (click)=\"changeTabe(false)\"><i class=\"fa fa-phone\"></i>\n              &nbsp;\n              phone</a>\n          </div>\n        </div>\n\n\n        <div *ngIf=\"emailTabActive\">\n\n          <form #emailLoginForm=\"ngForm\">\n            <div class=\"form-group mt-3 mb-4\">\n              <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n                [(ngModel)]=\"user.userName\" name=\"email\" placeholder=\"Email Id\" [required]=\"true\" #email=\"ngModel\">\n            </div>\n            <div [hidden]=\"email.valid || email.pristine \" class=\"alert alert-danger\">\n              Please Enter Valid Email Address\n            </div>\n            <div class=\"form-group mb-4\">\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\"\n                placeholder=\"Password\" required=\"required\">\n            </div>\n            <button type=\"submit\" (click)=\"LoginwithEmail()\" [disabled]=\"emailLoginForm.invalid\"\n              class=\"btn btn-primary w-100 mb-4\"> login</button>\n            <!-- routerLink=\"/home\" -->\n            <div class=\"form-footer\">\n              <span class=\"text-primary\" routerLink=\"/signUp\">Sign Up</span>\n            </div>\n          </form>\n        </div>\n\n\n        <div *ngIf=\"!emailTabActive\">\n\n          <form>\n\n            <div class=\"form-group mt-3 mb-4\">\n              <input type=\"text\" class=\"form-control\" pattern=\"^[0-9]{10,10}$\" [(ngModel)]=\"userPhone.phone\"\n                name=\"phone\" placeholder=\"Mobile No\" [required]=\"true\" #phone=\"ngModel\">\n              <button (click)=\"generateOTP()\" style=\"margin-top: -37px\" [disabled]=\" !phone.valid \"\n                class=\"btn btn-primary pull-right\">Send OTP</button>\n            </div>\n\n            <div [hidden]=\"phone.valid || phone.pristine \" class=\"alert alert-danger\">\n              Please Enter Valid Phone Number </div>\n            <div class=\"form-group mb-4\" *ngIf=\"sendOtpClick\">\n              <input type=\"text\" [ngModelOptions]=\"{standalone: true}\" pattern=\"^[0-9]{4,4}$\"\n                class=\"form-control otp-input\" [(ngModel)]=\"userPhone.otp\" name=\"otp\" placeholder=\"Enter OTP\"\n                [required]=\"true\" #otp=\"ngModel\">\n            </div>\n            <input (click)=\"LoginwithPhoneNo()\" routerLink=\"/home\" type=\"submit\" class=\"btn btn-primary w-100 mb-4\"\n              [disabled]=\"userPhone.otp !=otp\" value=\"Login\">\n            <!-- <input type=\"submit\" routerLink=\"/process\" class=\"btn btn-primary w-100 mb-4\" value=\"Login\"> -->\n            <div class=\"form-footer\">\n              <span class=\"text-primary\" routerLink=\"/signUp\">Sign Up</span>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-bg {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #f8f8f8; }\n\n.form-horizontal {\n  background-color: #fff;\n  text-align: center;\n  padding: 50px 50px 50px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); }\n\n.otp-input {\n  border: none;\n  border-bottom: 2px dashed #cccccc; }\n\n.or-seperator {\n  margin-top: 32px;\n  text-align: center;\n  border-top: 1px solid #e0e0e0; }\n\n.or-seperator b {\n  color: #666;\n  padding: 0 8px;\n  width: 30px;\n  height: 30px;\n  font-size: 13px;\n  text-align: center;\n  line-height: 26px;\n  background: #fff;\n  display: inline-block;\n  border: 1px solid #e0e0e0;\n  border-radius: 50%;\n  position: relative;\n  top: -15px;\n  z-index: 1; }\n\n.btn-social {\n  width: 150px !important;\n  font-size: .875rem;\n  font-weight: 400;\n  line-height: 1.7rem;\n  color: #6c757d;\n  background-clip: padding-box;\n  border: 1px solid #cccccc;\n  border-radius: .2rem; }\n\n.hint-text {\n  font-size: 20px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255YXovbmNicG0vbmNicG0wMWZpcmViYXNlL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFFckI7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3Q0FBdUMsRUFBQTs7QUFHM0M7RUFDSSxZQUFXO0VBQ1gsaUNBQWdDLEVBQUE7O0FBRXBDO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVSxFQUFBOztBQUVkO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLmZvcm0taG9yaXpvbnRhbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggNTBweDtcbiAgICBib3gtc2hhZG93OjAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksO1xufVxuXG4ub3RwLWlucHV0e1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1ib3R0b206MnB4IGRhc2hlZCAjY2NjY2NjO1xufVxuLm9yLXNlcGVyYXRvciB7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG4ub3Itc2VwZXJhdG9yIGIge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG4uYnRuLXNvY2lhbCB7XG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XG59XG4uaGludC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alert.service */ "./src/app/service/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_Auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/Auth.service */ "./src/app/service/Auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, alertService, authService) {
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.user = {
            userName: '',
            password: '',
        };
        this.userPhone = {
            phone: '',
            otp: null,
        };
        this.actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be whitelisted in the Firebase Console.
            url: 'https://www.example.com/finishSignUp?cartId=1234',
            // This must be true.
            handleCodeInApp: true,
            iOS: {
                bundleId: 'com.example.ios'
            },
            android: {
                packageName: 'com.example.android',
                installApp: true,
                minimumVersion: '12'
            },
            dynamicLinkDomain: 'example.page.link'
        };
        this.emailTabActive = true;
        this.sendOtpClick = false;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user !== null) {
            this.router.navigate(['/home']);
        }
        console.log(this.authService.isLoggedIn());
    }
    ngOnInit() {
        // this.afAuth.auth.onAuthStateChanged((user) => {
        //   if (user) {
        //     // User is signed in.
        //     const userdetails = {
        //       name: user.displayName,
        //       email: user.email,
        //       phone: user.phoneNumber,
        //       photoUrl: user.photoURL,
        //       uid: user.uid
        //     };
        //     console.log(user);
        //     localStorage.setItem('User', JSON.stringify(userdetails));
        //     // this.router.navigate(['/home']);
        //   } else {
        //     // this.router.navigate(['/signUp']);
        //   }
        // });
    }
    changeTabe(val) {
        this.emailTabActive = val;
    }
    generateOTP() {
        this.sendOtpClick = true;
        this.otp = Math.floor(1000 + Math.random() * 9000);
        this.alertService.showInfoAlert('your OTP is  ' + this.otp);
        // swal('your OTP is  ' + this.otp);
    }
    LoginwithEmail() {
        this.authService.SignIn(this.user.userName, this.user.password);
    }
    LoginwithPhoneNo() {
    }
    ForgotPassword(passwordResetEmail) {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_service_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]))
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-bg d-flex align-items-center\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngIf=\"!showPasswdTab\" class=\"m-auto\">\n                <form class=\"form-horizontal\" #logingForm=\"ngForm\">\n                    <p class=\"hint-text text-center mb-4\">Sign Up</p>\n                    <div class=\"form-group social-btn clearfix\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <a href=\"#\" class=\"btn btn-social\"><i class=\"fa fa-google\"></i> &nbsp;\n                                    Google</a>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <a href=\"#\" class=\"btn btn-social\"><i class=\"fa fa-facebook\"></i> &nbsp;\n                                    Facebook</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"or-seperator mb-2\"><b>or</b></div>\n\n                    <div class=\"form-group mb-4\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.name\" name=\"name\" placeholder=\"Name\"\n                            [required]=\"true\" #name=\"ngModel\">\n                    </div>\n                    <div [hidden]=\"name.valid || name.pristine \" class=\"alert alert-danger\">\n                        Please Enter Your Name\n                    </div>\n                    <div class=\"form-group mb-4\">\n                        <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n                            [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email Id\" [required]=\"true\"\n                            #email=\"ngModel\">\n                    </div>\n                    <div [hidden]=\"email.valid || email.pristine \" class=\"alert alert-danger\">\n                        Please Enter Valid Email Address\n                    </div>\n                    <div class=\"form-group mb-4\">\n                        <input type=\"text\" class=\"form-control\" pattern=\"^[0-9]{10,10}$\" [(ngModel)]=\"user.phone\"\n                            name=\"phone\" placeholder=\"Mobile No\" [required]=\"true\" #phone=\"ngModel\">\n                        <button [disabled]=\"!logingForm.valid || sendOtpClick\" (click)=\"generateOTP()\"\n                            style=\"margin-top: -37px\" class=\"btn btn-primary pull-right\">Send OTP</button>\n                    </div>\n                    <div [hidden]=\"phone.valid || phone.pristine \" class=\"alert alert-danger\">\n                        Please Enter Valid Phone Number </div>\n                    <div class=\"form-group mb-4\" *ngIf=\"sendOtpClick\">\n                        <input type=\"text\" [ngModelOptions]=\"{standalone: true}\" pattern=\"^[0-9]{4,4}$\"\n                            class=\"form-control otp-input\" [(ngModel)]=\"user.otp\" name=\"otp\" placeholder=\"Enter OTP\"\n                            [required]=\"true\" #otp=\"ngModel\">\n                    </div>\n                    <input type=\"submit\" class=\"btn btn-primary w-100 mb-4\" [disabled]=\"user.otp !=otp\"\n                        (click)=\"submitSingUpForm()\" value=\"Submit\">\n                    <div class=\"form-footer text-right\">\n                        <a href=\"#\" class=\"btn btn-light btn-social\" routerLink=\"/login\">Log in</a>\n                    </div>\n                </form>\n            </div>\n            <div *ngIf=\"showPasswdTab\" class=\"m-auto\">\n                <form class=\"form-horizontal\" #PasswordForm=\"ngForm\">\n                    <p class=\"hint-text text-center mb-4\">Cretae Password</p>\n                    <div class=\"form-group mb-4\">\n                        <input type=\"password\"\n                            pattern=\"(?=^.{8,20}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\\s).*$\"\n                            class=\"form-control\" [required]=\"true\" #paswd=\"ngModel\" name=\"paswd\"\n                            [(ngModel)]=\"password.paswd\" placeholder=\"Type Password\">\n                    </div>\n\n                    <div [hidden]=\"paswd.valid || paswd.pristine \" class=\"alert alert-danger\">\n                        Please Enter Valid password</div>\n\n                    <div class=\"form-group mb-3\">\n                        <input type=\"password\" class=\"form-control\" name=\"confirmPaswd\"\n                            [(ngModel)]=\"password.confirmPaswd\" placeholder=\"Confirm Password\" [required]=\"true\"\n                            #confirmPaswd=\"ngModel\">\n                    </div>\n\n                    <div [hidden]=\"(password.paswd === password.confirmPaswd) || confirmPaswd.pristine \"\n                        class=\"alert alert-danger\">\n                        Password Dosn't Match</div>\n                    <div class=\"sign-up-validation mb-3\">\n                        <li> &nbsp; 8 Character</li>\n                        <li> &nbsp; 1 Uppercase</li>\n                        <li> &nbsp; 1 Lowercase</li>\n                        <li> &nbsp; 1 Number</li>\n                        <li> &nbsp; 1 Special Character</li>\n                    </div>\n\n\n                    <input type=\"submit\" class=\"btn btn-primary w-100 mb-4\" (click)=\"submitPassword()\"\n                        [disabled]=\"(password.paswd !== password.confirmPaswd) || !PasswordForm.valid \" value=\"Submit\">\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n<!-- <firebase-ui></firebase-ui> -->"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-bg {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #f8f8f8; }\n\n.form-horizontal {\n  background-color: #fff;\n  text-align: center;\n  padding: 50px 50px 50px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); }\n\n.otp-input {\n  border: none;\n  border-bottom: 2px dashed #cccccc; }\n\n.or-seperator {\n  margin-top: 32px;\n  text-align: center;\n  border-top: 1px solid #e0e0e0; }\n\n.or-seperator b {\n  color: #666;\n  padding: 0 8px;\n  width: 30px;\n  height: 30px;\n  font-size: 13px;\n  text-align: center;\n  line-height: 26px;\n  background: #fff;\n  display: inline-block;\n  border: 1px solid #e0e0e0;\n  border-radius: 50%;\n  position: relative;\n  top: -15px;\n  z-index: 1; }\n\n.btn-social {\n  width: 150px !important;\n  font-size: .875rem;\n  font-weight: 400;\n  line-height: 1.7rem;\n  color: #6c757d;\n  background-clip: padding-box;\n  border: 1px solid #cccccc;\n  border-radius: .2rem; }\n\n.hint-text {\n  font-size: 20px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255YXovbmNicG0vbmNicG0wMWZpcmViYXNlL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUVyQjtFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdDQUF1QyxFQUFBOztBQUUzQztFQUNJLFlBQVc7RUFDWCxpQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVLEVBQUE7O0FBRWQ7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWJnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cbi5mb3JtLWhvcml6b250YWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweCA1MHB4IDUwcHg7XG4gICAgYm94LXNoYWRvdzowIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLDtcbn1cbi5vdHAtaW5wdXR7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkICNjY2NjY2M7XG59XG4ub3Itc2VwZXJhdG9yIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbn1cbi5vci1zZXBlcmF0b3IgYiB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE1cHg7XG4gICAgei1pbmRleDogMTtcbn1cbi5idG4tc29jaWFsIHtcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS43cmVtO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbTtcbn1cbi5oaW50LXRleHR7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/alert.service */ "./src/app/service/alert.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_Auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/Auth.service */ "./src/app/service/Auth.service.ts");






let SignupComponent = class SignupComponent {
    constructor(router, alertService, authService, afAuth) {
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.afAuth = afAuth;
        this.user = {
            name: '',
            email: '',
            phone: '',
            otp: null
        };
        this.sendOtpClick = false;
        this.showPasswdTab = false;
        this.password = {
            paswd: '',
            confirmPaswd: ''
        };
    }
    ngOnInit() {
    }
    generateOTP() {
        this.sendOtpClick = true;
        this.otp = Math.floor(1000 + Math.random() * 9000);
        this.alertService.showInfoAlert('your OTP is  ' + this.otp);
        // swal('your OTP is  ' + this.otp);
    }
    submitSingUpForm() {
        this.showPasswdTab = true;
    }
    submitPassword() {
        this.authService.SignUp(this.user, this.password.paswd);
        // this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.password.paswd).then((userCredential) => {
        //   userCredential.useir.updateProfile({
        //     displayName: ths.user.name,
        //     // phoneNumber: this.user.phone
        //   });
        //   // this.insertUserData(userCredential).then(() => {
        //   //   this.router.navigate(['/home']);
        //   // });
        // }).catch((error) => {
        //   this.showPasswdTab = false;
        //   this.alertService.showErrorAlert(error.message);
        // });
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/signup/signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_service_Auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]))
], SignupComponent);



/***/ }),

/***/ "./src/app/service/Auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/Auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert.service */ "./src/app/service/alert.service.ts");







let AuthService = class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, alertService, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.alertService = alertService;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['home']);
            });
            console.log(result.user);
        }).catch((error) => {
            this.alertService.showErrorAlert(error.message);
        });
    }
    // Sign up with email/password
    SignUp(user, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, password)
            .then((result) => {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            result.user.updateProfile({
                displayName: user.name,
            });
            this.SendVerificationMail();
            this.SetUserData(result.user, user.phone);
        }).catch((error) => {
            this.alertService.showErrorAlert(error.message);
        });
    }
    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(() => {
            this.router.navigate(['/home']);
            const win = window.open('https://gmail.com/mail', '_blank');
            win.focus();
        });
    }
    // Reset Forggot password
    ForgotPassword(passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
            this.alertService.showInfoAlert('Password reset email sent, check your inbox.');
        }).catch((error) => {
            this.alertService.showErrorAlert(error);
        });
    }
    // Returns true when user is looged in and email is verified
    isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }
    // Sign in with Google
    GoogleAuth() {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    }
    // Auth logic to run auth providers
    AuthLogin(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .then((result) => {
            this.ngZone.run(() => {
                this.router.navigate(['home']);
            });
            this.SetUserData(result.user);
        }).catch((error) => {
            this.alertService.showErrorAlert(error);
        });
    }
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    SetUserData(user, phoneNo) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            phone: phoneNo
        };
        return userRef.set(userData, {
            merge: true
        });
    }
    // Sign out
    SignOut() {
        return this.afAuth.auth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]))
], AuthService);



/***/ }),

/***/ "./src/app/service/alert.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/alert.service.ts ***!
  \******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);

/**
 * @description
 * This service contains different useful methods to show
 * different types of alerts and confirmations
 */


/**
 * @description
 * This service contains different useful methods to show
 * different types of alerts and confirmations
 * All the methods have self explainotory names. Hence separate description is not provided for each method
 */
let AlertService = class AlertService {
    constructor() { }
    showInfoAlert(mesg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()(mesg);
    }
    showSuccessAlert(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            type: 'success',
            title: 'Success',
            text: msg,
        });
    }
    showErrorAlert(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            text: msg,
        });
    }
    /**used to show a btn(not 'OK') with alert to execute some task */
    showErrorAlertWithBtn(msg, btnText, clbk) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            text: msg,
            confirmButtonText: btnText,
            preConfirm: () => clbk(),
            allowOutsideClick: false
        });
    }
    /**used to show a btn(not 'OK') and cancel with alert to execute some task */
    showErrorAlertWithTwoBtn(msg, btnText) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            text: msg,
            confirmButtonText: btnText,
            showCancelButton: true,
        });
    }
    showSuccessToast(msg, type) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            type: type || 'success',
            title: msg,
            position: 'top',
            showConfirmButton: false,
            timer: 1500
        });
    }
    /**
     * Prompts user a confirmation pop-up. Sends some request on confirm button and returns its response to
     * asynchronously
     */
    // tslint:disable-next-line:max-line-length
    confirmWithLoader(request, Type, msg, text, cnfrmBtnText = 'Yes, Delete !', cnfrmBtnColor = '#d33') {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: msg,
            type: Type,
            text: text || '',
            showCancelButton: true,
            confirmButtonText: cnfrmBtnText,
            confirmButtonColor: cnfrmBtnColor,
            cancelButtonColor: '#3085d6',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return new Promise((resolve, reject) => {
                    request.subscribe((res) => resolve(res), (err) => reject(err));
                });
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.isLoading()
        });
    }
    showLoader(msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Please wait...',
            html: msg,
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.isLoading(),
            onOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading();
            },
        });
    }
    closeLoader() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.close();
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/app/service/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/service/auth.guard.ts ***!
  \***************************************/
/*! exports provided: HomeAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAuthGuard", function() { return HomeAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth.service */ "./src/app/service/Auth.service.ts");



let HomeAuthGuard = class HomeAuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        console.log('its work');
        return this.authService.isLoggedIn();
    }
};
HomeAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]))
], HomeAuthGuard);



/***/ }),

/***/ "./src/app/service/form.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/form.service.ts ***!
  \*****************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



const formList = {
    count: 2,
    page: 0,
    total_pages: 0,
    items_per_page: 0,
    items: [
        {
            id: 0,
            created_at: '2019-09-12T08:55:39.214Z',
            create_user_id: 0,
            create_user: {
                id: 1,
                name: 'John Snow'
            },
            updated_at: '2019-09-12T08:55:39.214Z',
            update_user_id: 0,
            update_user: {
                id: 1,
                name: 'John Snow'
            },
            form_type: 'form_regular',
            status: 'draft',
            name: 'Form No 1',
            instructions: 'How to sale the product',
            category_id: 0,
            category_name: 'sales',
            language_code: 'string',
            restrict_submit_to: [
                0
            ],
            restrict_view_to: [
                0
            ],
            pre_populate: true,
            approve_automatically: true,
            admin_eyes_only: true,
            notify_alert_queue: true,
            fields: [
                {
                    id: 0,
                    parent_id: 0,
                    rank: 0,
                    field_type: 'autocomplete',
                    label: 'string',
                    instructions: 'string',
                    required: true,
                    task_field: true,
                    json_logic: {},
                    settings: {}
                }
            ],
            schema_id: 'string',
            schema_version: 0,
            is_read_only: true
        },
        {
            id: 0,
            created_at: '2019-09-12T08:55:39.214Z',
            create_user_id: 0,
            create_user: {
                id: 1,
                name: 'John Snow'
            },
            updated_at: '2019-09-12T08:55:39.214Z',
            update_user_id: 0,
            update_user: {
                id: 1,
                name: 'John Snow'
            },
            form_type: 'form_regular',
            status: 'draft',
            name: 'Form No 2',
            instructions: 'How to purchase the product',
            category_id: 0,
            category_name: 'Purchase',
            language_code: 'string',
            restrict_submit_to: [
                0
            ],
            restrict_view_to: [
                0
            ],
            pre_populate: true,
            approve_automatically: true,
            admin_eyes_only: true,
            notify_alert_queue: true,
            fields: [
                {
                    id: 0,
                    parent_id: 0,
                    rank: 0,
                    field_type: 'autocomplete',
                    label: 'string',
                    instructions: 'string',
                    required: true,
                    task_field: true,
                    json_logic: {},
                    settings: {}
                }
            ],
            schema_id: 'string',
            schema_version: 0,
            is_read_only: true
        },
        {
            id: 2,
            created_at: '2019-09-12T08:55:39.214Z',
            create_user_id: 0,
            create_user: {
                id: 1,
                name: 'John Snow'
            },
            updated_at: '2019-09-12T08:55:39.214Z',
            update_user_id: 0,
            update_user: {
                id: 1,
                name: 'John Snow'
            },
            form_type: 'form_regular',
            status: 'draft',
            name: 'Form No 3',
            instructions: 'IT Department Product testing review',
            category_id: 0,
            category_name: 'IT',
            language_code: 'string',
            restrict_submit_to: [
                0
            ],
            restrict_view_to: [
                0
            ],
            pre_populate: true,
            approve_automatically: true,
            admin_eyes_only: true,
            notify_alert_queue: true,
            fields: [
                {
                    id: 0,
                    parent_id: 0,
                    rank: 0,
                    field_type: 'autocomplete',
                    label: 'string',
                    instructions: 'string',
                    required: true,
                    task_field: true,
                    json_logic: {},
                    settings: {}
                }
            ],
            schema_id: 'string',
            schema_version: 0,
            is_read_only: true
        },
        {
            id: 3,
            created_at: '2019-09-12T08:55:39.214Z',
            create_user_id: 0,
            create_user: {
                id: 1,
                name: 'John Snow'
            },
            updated_at: '2019-09-12T08:55:39.214Z',
            update_user_id: 0,
            update_user: {
                id: 1,
                name: 'John Snow'
            },
            form_type: 'form_regular',
            status: 'draft',
            name: 'Form No 4',
            instructions: 'HR Deparment Hiring student for sales team',
            category_id: 0,
            category_name: 'HR',
            language_code: 'string',
            restrict_submit_to: [
                0
            ],
            restrict_view_to: [
                0
            ],
            pre_populate: true,
            approve_automatically: true,
            admin_eyes_only: true,
            notify_alert_queue: true,
            fields: [
                {
                    id: 0,
                    parent_id: 0,
                    rank: 0,
                    field_type: 'autocomplete',
                    label: 'string',
                    instructions: 'string',
                    required: true,
                    task_field: true,
                    json_logic: {},
                    settings: {}
                }
            ],
            schema_id: 'string',
            schema_version: 0,
            is_read_only: true
        }
    ]
};
const formById = {
    id: 0,
    created_at: '2019-09-12T08:55:39.214Z',
    create_user_id: 0,
    create_user: {
        id: 1,
        name: 'John Snow'
    },
    updated_at: '2019-09-12T08:55:39.214Z',
    update_user_id: 0,
    update_user: {
        id: 1,
        name: 'John Snow'
    },
    form_type: 'form_regular',
    status: 'draft',
    name: 'Form No 1',
    instructions: 'How to sale the product',
    category_id: 0,
    category_name: 'sales',
    language_code: 'string',
    restrict_submit_to: [
        0
    ],
    restrict_view_to: [
        0
    ],
    pre_populate: true,
    approve_automatically: true,
    admin_eyes_only: true,
    notify_alert_queue: true,
    fields: [
        {
            id: 0,
            parent_id: 0,
            rank: 0,
            field_type: 'autocomplete',
            label: 'string',
            instructions: 'string',
            required: true,
            task_field: true,
            json_logic: {},
            settings: {}
        }
    ],
    schema_id: 'string',
    schema_version: 0,
    is_read_only: true
};
let FormService = class FormService {
    constructor() {
        if (!JSON.parse(localStorage.getItem('formList'))) {
            localStorage.setItem('formList', JSON.stringify(formList));
        }
    }
    // get all form
    getFormList() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(localStorage.getItem('formList')));
    }
    // get form By id
    getFormById(id) {
        console.log(id);
        let form = {};
        const forms = JSON.parse(localStorage.getItem('formList'));
        forms.items.forEach(element => {
            console.log(element.id);
            if (element.id == id) {
                console.log('its Match');
                form = element;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(element);
            }
        });
        // console.log(forms);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(form);
    }
    // delete form by id
    deleteFormById(id) {
        const forms = JSON.parse(localStorage.getItem('formList'));
        const updatedForm = forms.items.filter(element => element.id === id);
        forms.items = updatedForm;
        localStorage.setItem('formList', JSON.stringify(forms));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Deleted Successfuly ');
    }
    // add new form
    addNewForm(formData) {
        const formlist = JSON.parse(localStorage.getItem('formList'));
        formData.id = formlist.length;
        console.log(formData);
        formlist.items.push(formData);
        localStorage.setItem('formList', JSON.stringify(formlist));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(formData.id);
    }
};
FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBfWXAmnr4IQ_6WEV1gTB2o5GVQeXwqkpU',
        authDomain: 'ncbpm-1.firebaseapp.com',
        databaseURL: 'https://ncbpm-1.firebaseio.com',
        projectId: 'ncbpm-1',
        storageBucket: '',
        messagingSenderId: '916649128524',
        appId: '1:916649128524:web:5ea24d25d6bdafb97ebae9'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nyaz/ncbpm/ncbpm01firebase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map