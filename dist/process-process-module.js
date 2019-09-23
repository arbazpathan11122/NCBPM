(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["process-process-module"],{

/***/ "./src/app/pages/admin/process/process-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/process/process-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProcessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessRoutingModule", function() { return ProcessRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process.component */ "./src/app/pages/admin/process/process.component.ts");




const routes = [
    {
        path: '',
        component: _process_component__WEBPACK_IMPORTED_MODULE_3__["ProcessComponent"],
    }
];
let ProcessRoutingModule = class ProcessRoutingModule {
};
ProcessRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProcessRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/process/process.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/process/process.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row mr-2 ml-2\" style=\"margin-top: 110px\">\n    <div class=\"col-md-12\">\n      <h5 class=\"voiletColor mt-2 mb-1\">Your WorkFlow</h5>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-3 mt-3 mb-3\">\n          <div class=\"uploadimage-dragndrop create-box\" data-toggle=\"modal\" data-target=\"#ProcessDetailsModel\">\n            <h4 class=\"voiletColor text-center fw-normal\">\n\n              + Create New </h4>\n          </div>\n        </div>\n        <div class=\"col-md-3 mt-3 mb-3\" *ngFor=\"let form of formStorge; let i = index\">\n          <div class=\"uploadimage-dragndrop\">\n            <div class=\"drop-menu text-right\">\n              <!-- <i class=\"fa fa-ellipsis-v dropdown-toggle\" aria-hidden=\"true\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\"></i> -->\n              <span class=\"glyphicon glyphicon-option-vertical dropdown-toggle\" aria-hidden=\"true\"\n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></span>\n              <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\" (click)=\"editProcess (form.id) \">Edit</a>\n                <a class=\"dropdown-item\" (click)=\"deleteProcess (form.id , i) \">Delete</a>\n              </div>\n            </div>\n            <div class=\"p-2\">\n              <h4 class=\"text-center mb-4 fw-normal\">\n                {{form.name.substring(0, 10)}} </h4>\n              <h5 class=\"mb-2 fw-normal\"> {{form.category.substring(0, 20)}}</h5>\n              <p class=\"text-description\" style=\"color: var(--lightgray-color)\"> {{form.description.substring(0, 10)}}\n              </p>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 mt-2\">\n      <h5 class=\"voiletColor mt-4 mb-3\">Pre-Define WorkFlow</h5>\n\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"uploadimage-dragndrop\">\n            <div>\n              Comming Soon </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"ProcessDetailsModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\" p-5\">\n        <form #modelForm=\"ngForm\">\n\n          <div class=\" maker-input\">\n            <label class=\"name-input\">Workflow Name: <span class=\"red\">*</span>\n            </label>\n          </div>\n          <div class=\"user-input\">\n            <input class=\"name-input\" required [(ngModel)]=\"model.name\" placeholder=\"Purchase Requisition\" type=\"text\"\n              name=\"Workflow\">\n          </div>\n\n          <div class=\" mt-5 maker-input\">\n            <label class=\"name-input\">Category: <span class=\"red\">*</span>\n            </label>\n          </div>\n          <div class=\"user-input\">\n            <input class=\"name-input\" required type=\"text\" [(ngModel)]=\"model.category\" placeholder=\"Purchase\"\n              name=\"category\">\n          </div>\n\n          <div class=\"mt-5 maker-input\">\n            <label class=\"name-input\">Description\n            </label>\n          </div>\n          <div class=\"user-input\">\n            <textarea class=\"name-input\" [(ngModel)]=\"model.description\" id=\"message-text\"\n              placeholder=\"enter description here\" type=\"text\" name=\"description\"></textarea>\n          </div>\n\n\n        </form>\n      </div>\n\n\n      <div class=\"modal-footer border-top-none  p-5\">\n        <button class=\"btn btn-purple-light\" data-dismiss=\"modal\" type=\"button\">Cancel</button>\n        <button class=\"btn btn-purple btn-purple-2\" [disabled]=\"modelForm.invalid\" (click)=\"goToFoermEditor()\"\n          type=\"button\">Create</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/process/process.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/process/process.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-box {\n  position: relative;\n  overflow: hidden; }\n\n.create-box h3 {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 44%; }\n\n.uploadimage-dragndrop {\n  min-height: 200px;\n  padding: 15px;\n  text-align: center;\n  border: solid 1.2px #f8f8f8;\n  box-shadow: 0 0px 3px 0px rgba(162, 140, 140, 0.1);\n  transition: .4s; }\n\n.uploadimage-dragndrop:hover {\n  box-shadow: 0 0px 20px 0px rgba(162, 140, 140, 0.1);\n  transition: .4s; }\n\n.upload-image-box {\n  width: 100%;\n  overflow: hidden;\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 3px;\n  background-size: cover; }\n\n.maker-input {\n  display: flex; }\n\n.maker-input .name-input {\n  order: 2;\n  display: block;\n  margin-top: 0;\n  background: none;\n  padding: 2px 2px 1px;\n  line-height: 22px;\n  height: 30px;\n  border: none;\n  width: 100%;\n  box-sizing: border-box;\n  color: #7b6ffb;\n  font-size: 14px; }\n\n.maker-input .name-input:focus {\n  outline: none; }\n\n.user-input .name-input {\n  order: 2;\n  margin-top: 0;\n  border-width: 0 0 1px;\n  background: none;\n  padding: 2px 2px 1px;\n  line-height: 26px;\n  height: 30px;\n  border-style: groove;\n  width: 100%;\n  color: #151948; }\n\n.user-input .name-input:focus {\n  outline: none; }\n\n.user-answer {\n  border-bottom: 2px dashed #b8b8b8;\n  color: #b8b8b8; }\n\n.voiletBG {\n  background-color: #7b6ffb !important;\n  color: #ffffff; }\n\n.voiletColor {\n  color: #7b6ffb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255YXovbmNicG0vbmNicG0wMWZpcmViYXNlL3NyYy9hcHAvcGFnZXMvYWRtaW4vcHJvY2Vzcy9wcm9jZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsUUFBUSxFQUFBOztBQUdaO0VBQ0ksaUJBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGtEQUFrRDtFQUNsRCxlQUFlLEVBQUE7O0FBRWY7RUFDSSxtREFBbUQ7RUFDbkQsZUFBZSxFQUFBOztBQUluQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQ0EsRUFBQTs7QUFJQTtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxRQUFRO0VBQ1IsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsY0FBd0I7RUFDeEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxRQUFRO0VBQ1IsYUFBYTtFQUNiLHFCQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osb0JBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLGlDQUFnQztFQUNoQyxjQUFhLEVBQUE7O0FBSWxCO0VBQ0Msb0NBQW1DO0VBRW5DLGNBQWMsRUFBQTs7QUFFZDtFQUdJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3Byb2Nlc3MvcHJvY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNyZWF0ZS1ib3h7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY3JlYXRlLWJveCBoM3tcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNDQlO1xufVxuXG4udXBsb2FkaW1hZ2UtZHJhZ25kcm9wIHtcbiAgICBtaW4taGVpZ2h0OjIwMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMS4ycHggI2Y4ZjhmODtcbiAgICBib3gtc2hhZG93OiAwIDBweCAzcHggMHB4IHJnYmEoMTYyLCAxNDAsIDE0MCwgMC4xKTtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgfVxuICAgIC51cGxvYWRpbWFnZS1kcmFnbmRyb3A6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDBweCAyMHB4IDBweCByZ2JhKDE2MiwgMTQwLCAxNDAsIDAuMSk7XG4gICAgICAgIHRyYW5zaXRpb246IC40cztcbiAgICAgICAgfVxuXG5cbiAgICAudXBsb2FkLWltYWdlLWJveHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLm1ha2VyLWlucHV0e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgIC5tYWtlci1pbnB1dCAubmFtZS1pbnB1dHtcbiAgICAgICAgICAgIG9yZGVyOiAyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAycHggMXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGNvbG9yOnJnYigxMjMsIDExMSwgMjUxKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAubWFrZXItaW5wdXQgLm5hbWUtaW5wdXQ6Zm9jdXN7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLWlucHV0IC5uYW1lLWlucHV0e1xuICAgICAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOjAgMCAxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDJweCAxcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTpncm9vdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjMTUxOTQ4O1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLWlucHV0IC5uYW1lLWlucHV0OmZvY3Vze1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1hbnN3ZXJ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBkYXNoZWQgI2I4YjhiODtcbiAgICAgICAgICAgIGNvbG9yOiNiOGI4Yjg7XG4gICAgICAgIH1cblxuXG4gICAgICAgLnZvaWxldEJHe1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I2ZmZiIWltcG9ydGFudDsgICAgXG4gICAgICAgIFxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICAudm9pbGV0Q29sb3J7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjN2I2ZmZiIWltcG9ydGFudDsgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbG9yOiAjN2I2ZmZiO1xuICAgICAgICAgICAgfVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/process/process.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/process/process.component.ts ***!
  \**********************************************************/
/*! exports provided: ProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessComponent", function() { return ProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/alert.service */ "./src/app/service/alert.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_service_Auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/Auth.service */ "./src/app/service/Auth.service.ts");






let ProcessComponent = class ProcessComponent {
    constructor(router, alertService, authService, firestore) {
        this.router = router;
        this.alertService = alertService;
        this.authService = authService;
        this.firestore = firestore;
        this.modelFields = [];
        this.model = {
            name: '',
            description: '',
            category: '',
            folder: {
                FolderName: '',
                FileName: '',
                pages: []
            },
            theme: {
                fontFamily: 'Poppins',
                qestColor: 'var(--black-color)',
                ansColor: 'var(--black-color)',
                bgColor: '000000',
                textColor: '000000',
                bannerImage: ''
            },
            attributes: [
                {
                    name: 'Page 1',
                    field: this.modelFields
                }
            ]
        };
        this.formStorge = [];
        this.checkValidUser();
    }
    ngOnInit() {
    }
    checkValidUser() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user !== null) {
            // if (user.emailVerified !== true) {
            //   this.alertService.showErrorAlertWithTwoBtn('Please Verify your Email. The verification mail sent to your email id '
            //     + user.email, 'Resend Link').then((res) => {
            //       console.log(res);
            //       if (res.value) {
            //         this.authService.SendVerificationMail();
            //       }
            //       this.router.navigate(['/login']);
            //     });
            // } else {
            //   this.alertService.showLoader('Loading....');
            // }
            this.getFormFromFirebase();
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    getFormFromFirebase() {
        this.firestore.collection('formList').get().subscribe(doc => {
            doc.forEach((elem) => {
                const id = elem.id;
                const form = elem.data();
                form.id = id;
                this.formStorge.push(form);
                this.alertService.closeLoader();
            });
        });
    }
    goToFoermEditor() {
        this.formStorge.push(this.model);
        this.firestore.collection('formList').add(this.model).then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
            this.router.navigate(['/home/form'], { queryParams: { formId: docRef.id } });
            $('#ProcessDetailsModel').modal('hide');
        }).catch((error) => {
            this.alertService.showInfoAlert('Error adding document: ');
        });
    }
    editProcess(i) {
        this.alertService.showLoader('Loading....');
        this.router.navigate(['/home/form'], { queryParams: { formId: i } });
    }
    deleteProcess(id, index) {
        this.firestore.collection('formList').doc(id).delete().then(() => {
            this.alertService.showInfoAlert('Document successfully deleted!');
        }).catch((error) => {
            this.alertService.showInfoAlert('Error removing document: ');
        });
        this.formStorge.splice(index, 1);
    }
};
ProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-process',
        template: __webpack_require__(/*! ./process.component.html */ "./src/app/pages/admin/process/process.component.html"),
        styles: [__webpack_require__(/*! ./process.component.scss */ "./src/app/pages/admin/process/process.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_service_Auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]))
], ProcessComponent);



/***/ }),

/***/ "./src/app/pages/admin/process/process.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin/process/process.module.ts ***!
  \*******************************************************/
/*! exports provided: ProcessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessModule", function() { return ProcessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _process_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-routing.module */ "./src/app/pages/admin/process/process-routing.module.ts");
/* harmony import */ var _process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process.component */ "./src/app/pages/admin/process/process.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/ngx-drag-drop.js");








let ProcessModule = class ProcessModule {
};
ProcessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_process_component__WEBPACK_IMPORTED_MODULE_4__["ProcessComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _process_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProcessRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            ngx_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DndModule"],
        ],
    })
], ProcessModule);



/***/ })

}]);
//# sourceMappingURL=process-process-module.js.map