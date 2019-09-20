(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-module"],{

/***/ "./src/app/pages/admin/admin-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/admin/admin-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/pages/admin/admin.component.ts");




const routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            { path: '', redirectTo: 'process', pathMatch: 'full' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'process', loadChildren: './process/process.module#ProcessModule' },
            { path: 'publish', loadChildren: './publish/publish.module#PublishModule' },
        ],
    },
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<div style=\"margin-top: 100px\">\n\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! ./admin.component.html */ "./src/app/pages/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/pages/admin/admin.component.scss")]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/pages/admin/admin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.module.ts ***!
  \*********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/pages/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/pages/components/components.module.ts");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/ngx-drag-drop.js");







let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
            ngx_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DndModule"],
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/pages/components/components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/components.module.ts ***!
  \*******************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/pages/components/side-bar/side-bar.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/pages/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/pages/components/footer/footer.component.ts");






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/pages/components/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/components/footer/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/footer/footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/components/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/components/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/pages/components/nav-bar/nav-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/nav-bar/nav-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top p-0\">\n    <!-- <a class=\"navbar-brand\" >Navbar</a> -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav left-menu mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link lh-49\" (click)=\"goToProcess()\"><i class=\"fa fa-home\"></i>&nbsp;\n                    Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <!-- <li class=\"nav-item\">\n              <div class=\"input-group p-4\">\n                  <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-search\"></i></span>\n                  </div>\n                  <input style=\"border:none\" type=\"text\" class=\"form-control\"\n                      placeholder=\"Search any workflow by category or name from here\" aria-label=\"Username\"\n                      aria-describedby=\"basic-addon1\">\n              </div>\n\n          </li> -->\n        </ul>\n\n        <div class=\"navbar-nav abs-center-x\">\n            <div class=\"process-part row\">\n                <div class=\"col-4\">\n                    <div class=\"bd-highlight btn-primary  pro-button mx-auto\">\n                    </div>\n                    <div class=\"text-center mt-1\">Form</div>\n                </div>\n                <div class=\"col-4\">\n                    <div class=\"bd-highlight   pro-button mx-auto\">\n                    </div>\n                    <div class=\"text-center mt-1\">Process</div>\n                </div>\n                <div class=\"col-4\">\n                    <div class=\"bd-highlight pro-button mx-auto\">\n                    </div>\n                    <div class=\"text-center mt-1\">Publish</div>\n                </div>\n            </div>\n        </div>\n\n        <ul class=\"right-menu navbar-nav\">\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link lh-49\"><i style=\"font-size: 18px;\" class=\"fa fa-bell\"></i></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link \" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\"><img class=\"profile-img mr-2\" src=\"assets/img/user.jpg\" alt=\"Avatar\">\n                    <div class=\"right-menu float-right\">\n                        <span>Abhinav</span>\n                        <br>\n                        <span style=\"font-size: 14px\">Super-admin</span>\n                    </div>\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\">Profile</a>\n                    <a class=\"dropdown-item\" routerLink=\"/login\">Log out</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/pages/components/nav-bar/nav-bar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/nav-bar/nav-bar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/components/nav-bar/nav-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/nav-bar/nav-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavBarComponent = class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToProcess() {
        this.router.navigate(['/home']);
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/pages/components/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/pages/components/nav-bar/nav-bar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]))
], NavBarComponent);



/***/ }),

/***/ "./src/app/pages/components/side-bar/side-bar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/side-bar/side-bar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  side-bar works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/components/side-bar/side-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/side-bar/side-bar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/components/side-bar/side-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/side-bar/side-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SideBarComponent = class SideBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-bar',
        template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/pages/components/side-bar/side-bar.component.html"),
        styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/pages/components/side-bar/side-bar.component.scss")]
    })
], SideBarComponent);



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-module.js.map