(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-formview-formview-module"],{

/***/ "./src/app/pages/admin/formview/formview-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/formview/formview-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FormViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormViewRoutingModule", function() { return FormViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _formview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formview.component */ "./src/app/pages/admin/formview/formview.component.ts");




const routes = [
    {
        path: '',
        component: _formview_component__WEBPACK_IMPORTED_MODULE_3__["FormViewComponent"],
    }
];
let FormViewRoutingModule = class FormViewRoutingModule {
};
FormViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormViewRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/formview/formview.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/formview/formview.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!showTable\" class=\"form-page\">\n  <div class=\"row\" *ngIf=\"formCurrentPage\">\n    <div class=\"col-md-6 col-xs-10 working-part mx-auto\">\n      <!-- <div class=\"process-part\">\n        <div class=\"d-flex justify-content-center\">\n          <div\n            [class]=\"(i == currentPageIndex)? 'bd-highlight btn-warning pro-button ml-4 mr-4' : 'bd-highlight pro-button ml-4 mr-4 btn-primary'\"\n            *ngFor=\"let page of form.attributes; let i = index;\" (click)=\"goToPage(i)\">{{i+1}}</div>\n          <div class=\"bd-highlight btn-primary pro-button ml-4 mr-4\">2</div>\n        </div>\n      </div> -->\n      <div class=\"text-center mt-2\">\n        <h4>{{formCurrentPage.name}}</h4>\n      </div>\n      <form #userForm=\"ngForm\">\n        <div *ngFor=\"let item of formCurrentPage.field; let inVal = index;\">\n          <div class=\"formtitle\" *ngIf=\"item.fielType==='header'\">\n            <div class=\"mb-3 maker-input \">\n              <label class=\"form-header\">{{item.label}}</label>\n\n            </div>\n          </div>\n          <div class=\"p-4\" *ngIf=\"item.fielType==='statement'\">\n            <div class=\"mb-3 maker-input \">\n              <label class=\"name-input\">{{item.label}}</label>\n\n            </div>\n          </div>\n          <div class=\"p-4\" *ngIf=\"item.fielType==='footer'\">\n            <div class=\"mb-3 maker-input \">\n              <p class=\"name-input\">{{item.label}}</p>\n\n            </div>\n          </div>\n          <div class=\"p-4\" *ngIf=\"item.fielType==='text'\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div class=\"user-input\">\n              <textarea class=\"name-input\" name=\"{{item.name}}\" id=\"{{item.name}}\" minlength=\"{{item.validOption?.min}}\"\n                maxlength=\"{{item.validOption?.max}}\" (keyup)=\"countWord(item.value, $event)\"\n                required=\"{{item.required}}\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\"\n                #text=\"ngModel\"></textarea>\n            </div>\n            <div [hidden]=\"text.valid || text.pristine\" class=\"alert alert-danger\">\n\n              minimum {{item.validOption?.min}} characters Requierd\n            </div>\n          </div>\n\n          <div class=\"p-4\" *ngIf=\"item.fielType==='number'\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}\n              </label>\n            </div>\n            <div class=\"user-input\">\n              <input class=\"name-input\" type=\"number\" name=\"{{item.name}}\" id=\"{{item.name}}\"\n                min=\"{{item.validOption?.min}}\" max=\"{{item.validOption?.max}}\" required=\"{{item.required}}\"\n                placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.value\" aria-invalid=\"false\" #number=\"ngModel\">\n              <ng-container *ngIf=\"item.validOption?.max\">\n                <div class=\"alert alert-danger\" [hidden]=\"((item.validOption?.max>item.value)||(number.pristine)) \">\n                  please enter a value less then {{item.validOption?.max}}\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"(item.validOption?.min)\">\n                <div [hidden]=\"((item.validOption?.min<item.value)||(number.pristine))\" class=\"alert alert-danger\">\n                  please enter a value greater then {{item.validOption?.min}}\n                </div>\n              </ng-container>\n\n            </div>\n            <!-- <span class=\"mt-3 float-right\" style=\"color:#b8b8b8\">256 maximum characters</span> -->\n          </div>\n\n          <div class=\"p-4\" *ngIf=\"item.fielType==='email'\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div class=\"user-input\">\n\n              <div class=\"row\">\n                <div class=\"col-8\">\n                  <input class=\"name-input\" name=\"{{item.name}}\" pattern=\"^[a-zA-Z0-9_.#&-]{1,20}$\" id=\"{{item.name}}\"\n                    required=\"{{item.required}}\" placeholder=\"{{item.placeholder}}\" [disabled]=\"item.mailType ==''\"\n                    [(ngModel)]=\"item.value\" aria-invalid=\"false\" #email=\"ngModel\">\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"nice-select\" tabindex=\"0\">\n                    <span class=\"current\">Select Validation </span>\n                    <ul class=\"list\">\n                      <li (click)=\"item.mailType = mail.pattern\" *ngFor=\"let mail of item?.emailList; let i = index\"\n                        class=\"option focus\">\n                        {{mail.pattern}}\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <span class=\"red\" *ngIf=\"item.mailType ==''\">Please Select Email Type First</span>\n              <div [hidden]=\"email.valid || email.pristine \" class=\"alert alert-danger\">\n                {{item.errorText}}\n              </div>\n            </div>\n          </div>\n\n          <div class=\"p-4\" *ngIf=\"item.fielType==='phone'\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div class=\"user-input\">\n\n              <div class=\"row\">\n\n\n                <div class=\"col-md-4 col-xs-12 mb-2\">\n                  <div class=\"nice-select\" tabindex=\"0\">\n                    <span class=\"current\">Select Validation </span>\n                    <ul class=\"list\">\n                      <li (click)=\"item.phoneType = mail.pattern\" *ngFor=\"let mail of item?.phoneList; let i = index\"\n                        class=\"option focus\">\n                        {{mail.pattern}}\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n                <div class=\"col-md-8 col-xs-12 mb-2\">\n                  <input class=\"name-input\" name=\"{{item.name}}\" pattern=\"^[0-9]{7,20}$\" id=\"{{item.name}}\"\n                    required=\"{{item.required}}\" placeholder=\"{{item.placeholder}}\" [disabled]=\"item.phoneType ==''\"\n                    [(ngModel)]=\"item.value\" aria-invalid=\"false\" #phone=\"ngModel\">\n                </div>\n              </div>\n              <span class=\"red\" *ngIf=\"item.phoneType ==''\">Please Select contary code</span>\n              <div [hidden]=\"phone.valid || phone.pristine \" class=\"alert alert-danger\">\n                {{item.errorText}}\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"p-4\" *ngIf=\"item.fielType=='file'\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col\">\n                <div (click)=\"uploadFileClick(item.name)\" class=\"uploadimage-dragndrop\">\n                  <input type=\"file\" [required]=\"item.required\" (change)=\"onSelectFile($event ,item )\"\n                    id=\"{{item.name}}\" hidden=\"hidden\" />\n                  <img class=\"upload-img mb-3\" src=\"assets/img/icn-upload.png\">\n                  <p> Upload image</p>\n                  <p *ngIf=\"isValidObject(item.validOption)\">\n                    Please select file less then {{item.validOption.size}} {{item.validOption.value}}\n                  </p>\n                </div>\n              </div>\n              <div *ngIf=\"item.uploadedFileByUser.url!=''\" class=\"col\">\n                <div class=\"upload-image-box\">\n                  <img [src]=\"item.uploadedFileByUser.url\">\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"p-4\" *ngIf=\"item.fielType==='website'\" id=\"Website-format\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div class=\"user-input\">\n              <div class=\"user-input\">\n                <div class=\"row\">\n                  <div class=\"col-md-3 col-xs-12 mb-2\">\n                    <div class=\"nice-select\" tabindex=\"0\">\n                      <span class=\"current\">Select http Or https</span>\n                      <ul class=\"list\">\n                        <li (click)=\"item.httpType = mail.label\" *ngFor=\"let mail of item?.httpList; let i = index\"\n                          class=\"option focus\">\n                          {{mail.label}}\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 col-xs-12 mb-2\">\n                    <input class=\"name-input\" [disabled]=\"item.comType =='' || item.httpType==''\" name=\"{{item.name}}\"\n                      id=\"{{item.name}}\" required=\"{{item.required}}\" placeholder=\"{{item.placeholder}}\"\n                      [(ngModel)]=\"item.value\" aria-invalid=\"false\" #website=\"ngModel\"> </div>\n                  <div class=\"col-md-3 col-xs-12 mb-2\">\n                    <div class=\"nice-select\" tabindex=\"0\">\n                      <span class=\"current\"> .com /.in</span>\n                      <ul class=\"list\">\n                        <li (click)=\"item.comType = mail.label\" *ngFor=\"let mail of item?.comList; let i = index\"\n                          class=\"option focus\">{{mail.label}}\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <span class=\"red\" *ngIf=\"item.comType =='' || item.httpType==''\">Please Select Http/https and .in/.com\n              </span>\n\n              <div [hidden]=\"website.valid || website.pristine\" class=\"alert alert-danger\">\n                {{item.errorText}}\n              </div>\n            </div>\n          </div>\n\n          <!-- <div class=\"p-4\" *ngIf=\"item.fielType==='date'\" id=\"Date-format\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div class=\"user-input\">\n              <input class=\"name-input\" type=\"date\" name=\"{{item.name}}\" id=\"{{item.name}}\" required=\"{{item.required}}\"\n                placeholder=\"{{item.placeholder}}\" min=\"{{item.validOption?.min}}\" max=\"{{item.validOption?.max}}\"\n                [(ngModel)]=\"item.value\" aria-invalid=\"false\" #date=\"ngModel\">\n              <div [hidden]=\"date.valid || date.pristine\" class=\"alert alert-danger\">\n                {{item.errorText}}\n              </div>\n            </div>\n          </div> -->\n\n          <div class=\"p-4\" *ngIf=\"item.fielType==='date'\" id=\"Date-format\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div class=\"dates user-input\">\n              <input (click)=\"setDateValidation(item)\" style=\"width:50%\" class=\"name-input \" type=\"date\"\n                name=\"{{item.name}}\" min=\"{{item.validOption?.min}}\" max=\"{{item.validOption?.max}}\"\n                required=\"{{item.required}}\" placeholder=\"{{item.placeholder}}\" autocomplete=\"of\" id=\"{{item.name}}\"\n                [(ngModel)]=\"item.value\" aria-invalid=\"false\" #date=\"ngModel\">\n              <div [hidden]=\"date.valid || date.pristine\" class=\"alert alert-danger\">\n                {{item.errorText}}\n              </div>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"p-4\" *ngIf=\"item.fielType==='yesNo'\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span><label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div class=\"user-input form-check-inline\" *ngFor=\"let opt of item.values\">\n\n              <label class=\"Custom-Radio-Buttons\">\n                <input type=\"radio\" [value]=\"opt.value\" name=\"{{item.name}}\" [(ngModel)]=\"item.inputValue\"\n                  [ngModelOptions]=\"{standalone: true}\" required=\"{{item.required}}\" #yesNo=\"ngModel\">\n                {{opt.label}} &nbsp; &nbsp; &nbsp;\n                <span class=\"checkmark-dot\"></span>\n              </label>\n\n\n            </div>\n          </div>\n\n          <div class=\"p-4\" *ngIf=\"item.fielType==='trueFalse'\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div class=\"user-input inline-form-group\" *ngFor=\"let opt of item.values\">\n\n\n              <label class=\"Custom-Radio-Buttons\">\n                {{opt.label}}\n                <input type=\"radio\" [value]=\"opt.value\" name=\"{{item.name}}\" [(ngModel)]=\"item.inputValue\"\n                  required=\"{{item.required}}\">\n                <span class=\"checkmark-dot\"></span>\n              </label>\n\n\n\n\n            </div>\n          </div>\n\n\n          <div class=\"p-4\" *ngIf=\"item.fielType==='rating'\" id=\"Rating-format\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div class=\"user-input pl-4\">\n              <div class=\"row\">\n                <div *ngFor=\"let star of item.ratingArray;let i =index\">\n                  <div class=\"mb-2 rating-ico\">\n                    <span [ngClass]=\"item?.selestedValidation \" (click)=\"ratingColor(item ,i)\" id=\"{{item.name +i}}\">\n                      <ng-container *ngIf=\"item.selestedValidation== 'btn btn-light'\">\n                        {{i+1}}\n                      </ng-container>\n                    </span>&nbsp;\n\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\" *ngIf=\"item.userComment.want\">\n                  <div class=\"form-group\">\n                    <span class=\"red\">*</span><label for=\"comment\">Comment:</label>\n                    <textarea class=\"form-control\" [(ngModel)]=\"item.userComment.comment\"\n                      placeholder=\"Enter your suggestion\" [ngModelOptions]=\"{standalone: true}\" required rows=\"2\"\n                      id=\"comment\"></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n\n          <div class=\"p-4\" *ngIf=\"item.fielType==='dropdown'\" id=\"dropdown-format\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <ng-multiselect-dropdown [data]=\"item.values\" [(ngModel)]=\"item.userResponse\"\n              [ngModelOptions]=\"{standalone: true}\" (onSelect)=\"onItemSelect($event ,item)\"\n              [settings]=\"DropDownSettings\">\n            </ng-multiselect-dropdown>\n\n            <ng-container *ngIf=\"isValidObject(item.validOption)\">\n              <p *ngIf=\"( (item.validOption.value !=='max') &&(item.userResponse.length<item.validOption.limit))\"\n                class=\"red\">\n                please {{item.validOption.label}} &nbsp; {{item.validOption.limit}}\n              </p>\n\n              <p *ngIf=\"((item.validOption.value ==='max') && (item.userResponse.length>item.validOption.limit))\"\n                class=\"red\">\n                please fds {{item.validOption.label}} &nbsp; {{item.validOption.limit}}\n              </p>\n\n            </ng-container>\n          </div>\n\n          <div class=\"p-4\" *ngIf=\"(item.fielType==='multiple')\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div id=\"picture-choice-view\" class=\"pl-4\">\n\n              <div class=\"row\">\n                <div class=\"col-12\" *ngFor=\"let val of item.values\">\n\n                  <p class=\" mt-2 \">\n\n                    <label class=\"custom-check\">\n                      <input class=\"{{item.name}}\" (change)=\"checkedState(item , val)\" id=\"{{item.name}}\"\n                        name=\"{{val.label}}\" [(ngModel)]=\"val.value\" type=\"checkbox\">\n                      {{val.label}}\n                      <span class=\"checkmark\"></span>\n                    </label>\n                  </p>\n\n                </div>\n\n                <ng-container *ngIf=\"isValidObject(item.validOption)\">\n                  <p *ngIf=\"( (item.validOption.value !=='max') &&(item.userResponse.length<item.validOption.limit))\"\n                    class=\"red\">\n                    please {{item.validOption.label}} &nbsp; {{item.validOption.limit}}\n                  </p>\n\n                  <p *ngIf=\"((item.validOption.value ==='max') && (item.userResponse.length>item.validOption.limit))\"\n                    class=\"red\">\n                    please fds {{item.validOption.label}} &nbsp; {{item.validOption.limit}}\n                  </p>\n\n                </ng-container>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"p-4\" *ngIf=\"(item.fielType==='picture')\">\n            <div class=\"mb-3 maker-input \">\n              <span *ngIf=\"item.required\" class=\"red\">*</span> <label class=\"name-input\">{{item.label}}</label>\n            </div>\n            <div id=\"picture-choice-view\">\n\n              <div class=\"row\">\n                <div class=\"col-md-4 col-xs-6  mt-3\" *ngFor=\"let val of item.values\">\n                  <div class=\"image-box\">\n                    <img *ngIf=\"val.img!==''\" [src]=\"val.img\" alt=\"Image\">\n                    <img *ngIf=\"val.img==''\" src=\"assets/img/intro.png\" class=\"img-thumbnail\">\n                  </div>\n                  <p class=\" text-center mt-2 \" (change)=\"checkedState(item , val)\">\n                    {{val.label}}\n                    <br>\n                    <label class=\"custom-check\">\n                      <input class=\"{{item.name}}\" id=\"{{item.name}}\" name=\"{{val.label}}\" [(ngModel)]=\"val.value\"\n                        type=\"checkbox\">\n                      <span class=\"checkmark\"></span>\n                    </label>\n                  </p>\n\n\n\n\n                </div>\n\n                <ng-container *ngIf=\"isValidObject(item.validOption)\">\n                  <p *ngIf=\"( (item.validOption.value !=='max') &&(item.userResponse.length<item.validOption.limit))\"\n                    class=\"red\">\n                    please {{item.validOption.label}} &nbsp; {{item.validOption.limit}}\n                  </p>\n\n                  <p *ngIf=\"((item.validOption.value ==='max') && (item.userResponse.length<item.validOption.limit))\"\n                    class=\"red\">\n                    please {{item.validOption.label}} &nbsp; {{item.validOption.limit}}\n                  </p>\n\n                </ng-container>\n              </div>\n            </div>\n\n          </div>\n\n          <!-- <div class=\"p-4\" *ngIf=\"item.fielType===''\" id=\"conditional-dropdown-format\">\n        <div class=\"mb-3 maker-input \">\n          <input class=\"name-input\" placeholder=\"This is the conditional format.*\" aria-invalid=\"false\">\n        </div>\n        <div class=\"user-input\">\n          <div class=\"row\">\n             <div class=\"col-4\">\n                <div  class=\"add-condi-dropdown\">\n                    <i aria-hidden=\"true\" class=\"fa left-ico\">1</i>\n                  <input  aria-invalid=\"false\" class=\"name-input mb-2\" placeholder=\"I am invincible.\">\n                  <i  aria-hidden=\"true\" class=\"fa fa-times right-ico\"></i>\n                </div>\n             </div>\n\n             <div class=\"col-4\">\n                <div class=\"add-condi-dropdown\">\n                    <i aria-hidden=\"true\" class=\"fa left-ico\">1. a.</i> \n                    <input aria-invalid=\"false\" class=\"name-input mb-2\" placeholder=\"I am invincible.\">\n                    <i aria-hidden=\"true\" class=\"fa fa-times right-ico\"></i>\n                  </div>\n             </div>\n\n             <div class=\"col-4\">\n                <div class=\"add-condi-dropdown\">\n                    <i aria-hidden=\"true\" class=\"fa fa-chevron-down left-ico\"></i> \n                    <input aria-invalid=\"false\" class=\"name-input mb-2\" placeholder=\"I am invincible.\">\n             </div>\n          </div>\n        </div>\n      </div>\n    </div> -->\n\n\n\n\n\n        </div>\n      </form>\n      <div class=\"text-center mt-4\">\n        <button class=\"btn btn-light\" *ngIf=\"currentPageIndex!=0\" (click)=\"navigateToPage(-1)\">Pre</button> &nbsp;\n        &nbsp;\n        <button class=\"btn btn-primary\" type=\"submit\"\n          (click)=\"submitResult(userForm.value, userForm.invalid)\">submit</button> &nbsp; &nbsp;\n        <button class=\"btn btn-primary\" (click)=\"backToForm()\">Back</button>\n        &nbsp; &nbsp;\n        <button class=\"btn btn-light\" *ngIf=\"currentPageIndex!=(form.attributes.length -1)\"\n          (click)=\"navigateToPage(1)\">Next</button>\n      </div>\n\n      <div class=\"m-4 p-4\">\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n\n\n<div *ngIf=\"showTable\" class=\"m-4\">\n  <table class=\"table\" *ngFor=\" let response of form.attributes; \">\n\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Questions</th>\n        <!-- <th> {{response.name}}</th> -->\n        <th scope=\"col\">Answer</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of response.field; let i = index;\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td>{{item.label}}</td>\n        <td *ngIf=\"item.fielType=='email'\"> {{item.value}}{{item.mailType}}</td>\n        <td *ngIf=\"item.fielType=='phone'\"> {{item.phoneType}}{{item.value}} </td>\n        <td *ngIf=\"item.fielType=='website'\">{{item.httpType}}{{item.value}}{{item.comType}}</td>\n        <td *ngIf=\"item.fielType=='file'\"> {{item.uploadedFileByUser.name}} </td>\n        <td *ngIf=\"item.fielType=='rating'\"> {{item.RatingByUser}} / {{item.ratingLimit}} </td>\n        <td *ngIf=\"item.fielType=='trueFalse'\">{{item.inputValue}}</td>\n        <td *ngIf=\"item.fielType=='yesNo'\"> {{item.inputValue}} </td>\n\n        <!-- inputValue -->\n        <td *ngIf=\"item.fielType=='dropdown'\"> <span class=\"badge m-2 p-2 badge-danger\"\n            *ngFor=\"let resp of item.userResponse\">\n            {{resp}}\n          </span>\n\n        </td>\n        <td *ngIf=\"item.fielType=='multiple'\"> <span class=\"badge m-2 p-2 badge-danger\"\n            *ngFor=\"let resp of item.userResponse\">\n            {{resp.label}}\n          </span>\n\n        </td>\n        <td *ngIf=\"item.fielType=='picture'\"> <span class=\"badge m-2 p-2 badge-danger\"\n            *ngFor=\"let resp of item.userResponse\">\n            {{resp.label}}\n          </span>\n\n        </td>\n\n\n        <td\n          *ngIf=\"!((item.fielType=='multiple')||(item.fielType=='picture')||(item.fielType=='dropdown')||(item.fielType=='rating')||(item.fielType=='file')||(item.fielType=='email')||(item.fielType=='phone')||(item.fielType=='website'))\">\n          {{item.value}}\n        </td>\n      </tr>\n\n    </tbody>\n  </table>\n\n\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/formview/formview.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/formview/formview.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-box {\n  height: 100px;\n  width: 100%;\n  overflow: hidden; }\n\n.image-box img {\n  height: 100px;\n  width: 100%;\n  overflow: hidden;\n  background-size: cover; }\n\n.process-part {\n  position: relative;\n  overflow: hidden;\n  z-index: 999; }\n\n.process-part::after {\n  content: '';\n  position: absolute;\n  top: 50%;\n  height: 1px;\n  width: 100%;\n  background-color: var(--dashborder-color);\n  z-index: -1; }\n\n.pro-button {\n  padding: 5px 13px;\n  border-radius: 50%; }\n\n.uploadimage-dragndrop {\n  min-height: auto;\n  padding: 20px 20px 20px 20px;\n  text-align: center;\n  border: dashed 2px #cccccc; }\n\n.upload-img {\n  position: relative;\n  top: 12%;\n  width: 51px;\n  height: 33px;\n  background-size: cover; }\n\n.upload-image-box {\n  width: 100%;\n  overflow: hidden;\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 3px;\n  background-size: cover; }\n\n.upload-image-box img {\n  height: 125px;\n  width: 100%;\n  overflow: hidden;\n  background-size: cover; }\n\n.custom-check {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n\n.custom-check input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 21px;\n  width: 21px;\n  background-color: var(--active-light-grey); }\n\n/* On mouse-over, add a grey background color */\n\n.custom-check:hover input ~ .checkmark {\n  background-color: var(--dashborder-color); }\n\n/* When the checkbox is checked, add a blue background */\n\n.custom-check input:checked ~ .checkmark {\n  background-color: var(--primary-color); }\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the checkmark when checked */\n\n.custom-check input:checked ~ .checkmark:after {\n  display: block; }\n\n/* Style thecustom-check checkmark/indicator */\n\n.custom-check .checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg); }\n\n.Custom-Radio-Buttons {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default radio button */\n\n.Custom-Radio-Buttons input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer; }\n\n/* Create a custom radio button */\n\n.checkmark-dot {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 21px;\n  width: 21px;\n  background-color: var(--active-light-grey);\n  border-radius: 50%; }\n\n/* On mouse-over, add a grey background color */\n\n.Custom-Radio-Buttons:hover input ~ .checkmark-dot {\n  background-color: var(--dashborder-color); }\n\n/* When the radio button is checked, add a blue background */\n\n.Custom-Radio-Buttons input:checked ~ .checkmark-dot {\n  background-color: var(--primary-color); }\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.checkmark-dot:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the indicator (dot/circle) when checked */\n\n.Custom-Radio-Buttons input:checked ~ .checkmark-dot:after {\n  display: block; }\n\n/* Style the indicator (dot/circle) */\n\n.Custom-Radio-Buttons .checkmark-dot:after {\n  top: 7px;\n  left: 7px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255YXovbmNicG0vbmNicG0wMWZpcmViYXNlL3NyYy9hcHAvcGFnZXMvYWRtaW4vZm9ybXZpZXcvZm9ybXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUVoQjtFQUNBLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUVaO0VBQ0EsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsV0FBVyxFQUFBOztBQUVYO0VBQ0EsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUkxQjtFQUNBLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUUxQjtFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0IsRUFBQTs7QUFFdEI7RUFDQSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUNBLEVBQUE7O0FBQ0E7RUFDQSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFJdEI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBRWxCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFHbkIsd0NBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUdWLDZCQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQ0FBMEMsRUFBQTs7QUFHNUMsK0NBQUE7O0FBQ0E7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0Msd0RBQUE7O0FBQ0E7RUFDRSxzQ0FBc0MsRUFBQTs7QUFHeEMsNkRBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZixvQ0FBQTs7QUFDQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEIsOENBQUE7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUd6Qix3QkFBd0IsRUFBQTs7QUFLMUI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUduQiw0Q0FBQTs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUdqQixpQ0FBQTs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLGtCQUFrQixFQUFBOztBQUdwQiwrQ0FBQTs7QUFDQTtFQUNFLHlDQUF5QyxFQUFBOztBQUczQyw0REFBQTs7QUFDQTtFQUNFLHNDQUFzQyxFQUFBOztBQUd4QyxvRUFBQTs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmLGlEQUFBOztBQUNBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQixxQ0FBQTs7QUFDQTtFQUNLLFFBQVE7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9mb3Jtdmlldy9mb3Jtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltYWdlLWJveHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5pbWFnZS1ib3ggaW1ne1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICBcbiAgICAucHJvY2Vzcy1wYXJ0e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgfVxuICAgICAgICAucHJvY2Vzcy1wYXJ0OjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFzaGJvcmRlci1jb2xvcik7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgICAgIC5wcm8tYnV0dG9ue1xuICAgICAgICBwYWRkaW5nOiA1cHggMTNweDs7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfSAgIFxuICAgICAgICBcbiAgICAgICAgXG4udXBsb2FkaW1hZ2UtZHJhZ25kcm9wIHtcbm1pbi1oZWlnaHQ6IGF1dG87XG5wYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuYm9yZGVyOiBkYXNoZWQgMnB4ICNjY2NjY2M7IFxufVxuLnVwbG9hZC1pbWcge1xucG9zaXRpb246IHJlbGF0aXZlO1xudG9wOiAxMiU7XG53aWR0aDogNTFweDtcbmhlaWdodDogMzNweDtcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udXBsb2FkLWltYWdlLWJveHtcbndpZHRoOiAxMDAlO1xub3ZlcmZsb3c6IGhpZGRlbjtcbmJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5wYWRkaW5nOiAzcHg7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyXG59XG4udXBsb2FkLWltYWdlLWJveCBpbWd7XG5oZWlnaHQ6IDEyNXB4O1xud2lkdGg6IDEwMCU7XG5vdmVyZmxvdzogaGlkZGVuO1xuYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuXG4uY3VzdG9tLWNoZWNrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4gIC5jdXN0b20tY2hlY2sgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xuICAuY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1saWdodC1ncmV5KTtcbiAgfVxuICBcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIC5jdXN0b20tY2hlY2s6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXNoYm9yZGVyLWNvbG9yKTtcbiAgfVxuICBcbiAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4gIC5jdXN0b20tY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4gIC5jdXN0b20tY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGVjdXN0b20tY2hlY2sgY2hlY2ttYXJrL2luZGljYXRvciAqL1xuICAuY3VzdG9tLWNoZWNrIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGxlZnQ6IDlweDtcbiAgICB0b3A6IDVweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cblxuXG5cbiAgLkN1c3RvbS1SYWRpby1CdXR0b25zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuICAuQ3VzdG9tLVJhZGlvLUJ1dHRvbnMgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIHJhZGlvIGJ1dHRvbiAqL1xuICAuY2hlY2ttYXJrLWRvdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMjFweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtbGlnaHQtZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbiAgLkN1c3RvbS1SYWRpby1CdXR0b25zOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyay1kb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhc2hib3JkZXItY29sb3IpO1xuICB9XG4gIFxuICAvKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4gIC5DdXN0b20tUmFkaW8tQnV0dG9ucyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyay1kb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbiAgLmNoZWNrbWFyay1kb3Q6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIFNob3cgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgd2hlbiBjaGVja2VkICovXG4gIC5DdXN0b20tUmFkaW8tQnV0dG9ucyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyay1kb3Q6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xuICAuQ3VzdG9tLVJhZGlvLUJ1dHRvbnMgLmNoZWNrbWFyay1kb3Q6YWZ0ZXIge1xuICAgICAgIHRvcDogN3B4O1xuICAgICAgbGVmdDogN3B4O1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/pages/admin/formview/formview.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/formview/formview.component.ts ***!
  \************************************************************/
/*! exports provided: FormViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormViewComponent", function() { return FormViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");





let FormViewComponent = class FormViewComponent {
    constructor(activatedRoute, firestore, router) {
        this.activatedRoute = activatedRoute;
        this.firestore = firestore;
        this.router = router;
        // item = { fileType: 'header' };
        // validation variables
        this.mailTypeSelected = '';
        this.numberError = false;
        this.currentPageIndex = 0;
        this.showTable = false;
        this.DropDownSettings = {};
        this.subscribeRouteChanges();
    }
    ngOnInit() {
        this.DropDownSettings = {
            singleSelection: false,
            idField: 'label',
            textField: 'label',
            enableCheckAll: false,
            itemsShowLimit: 3,
            // limitSelection: ,
            allowSearchFilter: true,
        };
    }
    subscribeRouteChanges() {
        this.activatedRoute.queryParams
            .subscribe((e) => {
            this.formListNo = e.formId;
            this.getFormById(this.formListNo);
            console.log(e);
        });
    }
    getFormById(id) {
        // this.firestore.collection('formList/' + id).doc(id).get();
        // console.log(this.firestore.collection('formList/' + id));
        this.firestore.collection('formList').doc(id).get().subscribe(doc => {
            this.form = doc.data();
            console.log(this.form);
            this.formCurrentPage = this.form.attributes[this.currentPageIndex];
            $('.maker-input').css('fontFamily', this.form.theme.fontFamily);
            $('.user-input').css('fontFamily', this.form.theme.fontFamily);
            $('.maker-input').css('color', this.form.theme.qestColor);
            $('.user-input').css('color', this.form.theme.ansColor);
            this.changeQuestColor();
            this.changeAnsColor();
        });
    }
    changeQuestColor() {
        const nodes = document.getElementsByClassName('maker-input');
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i].getElementsByClassName('name-input');
            for (let j = 0; j < node.length; j++) {
                node[j].style.color = this.form.theme.qestColor;
            }
        }
    }
    changeAnsColor() {
        const nodes = document.getElementsByClassName('user-input');
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i].getElementsByClassName('name-input');
            for (let j = 0; j < node.length; j++) {
                node[j].style.color = this.form.theme.ansColor;
            }
        }
    }
    countWord(str, obj) {
        // const counter = str.match(/(\w+)/g).length;
        // console.log(obj);
        // console.log(str);
        // obj.srcElement.style.minWidth = ((str.length + 1) * 9) + 'px';
        // if (obj.srcElement.style.minWidth < '320px') {
        //   obj.srcElement.style.minWidth = ((str.length + 1) * 9) + 'px';
        // }
        console.log(str.length % 60);
        if ((str.length > 0) && (str.length % 60 === 0)) {
            obj.srcElement.style.height = (str.length / 60) * 30 + 30 + 'px';
        }
        if ((str.length === 0) && (str.length % 60 === 0)) {
            obj.srcElement.style.height = 40 + 'px';
        }
        console.log(obj.srcElement.style.width);
        console.log(((str.length + 1) * 8));
        // console.log(counters);
        // if (!obj.savesize) {
        //   {
        //     obj.savesize = obj.size;
        //     // obj.size = Math.max(obj.savesize, obj.value.length);
        //   }
        // }
    }
    Expand(obj) {
        if (!obj.savesize) {
            {
                obj.savesize = obj.size;
                obj.size = Math.max(obj.savesize, obj.value.length);
            }
        }
    }
    backToForm() {
        // tslint:disable-next-line: radix
        this.router.navigate(['/home/form'], { queryParams: { formId: this.formListNo } });
    }
    // check object is not null or valid
    isValidObject(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return true;
            }
        }
        return false;
    }
    setDateValidation(val) {
    }
    onSelectFile(event, val) {
        console.log(event.target.files[0]);
        console.log(val.validOption);
        let uploadFileSize = event.target.files[0].size / 1024;
        if (this.isValidObject(val.validOption)) {
            if (val.validOption.value === 'Mb') {
                uploadFileSize /= 1024;
            }
            if (val.validOption.value === 'Gb') {
                uploadFileSize = uploadFileSize / 1024 / 1024;
            }
            if (uploadFileSize < val.validOption.size) {
                if (event.target.files && event.target.files[0]) {
                    val.uploadedFileByUser.name = event.target.files[0].name;
                    const reader = new FileReader();
                    reader.readAsDataURL(event.target.files[0]); // read file as data url
                    // tslint:disable-next-line: no-shadowed-variable
                    reader.onload = (event) => {
                        console.log(val);
                        this.url = event.target.result;
                        val.uploadedFileByUser.url = this.url;
                    };
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'File Size Exceed Limit of ' + val.validOption.size + val.validOption.value, 'error');
            }
        }
        else {
            if (event.target.files && event.target.files[0]) {
                val.uploadedFileByUser.name = event.target.files[0].name;
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]); // read file as data url
                // tslint:disable-next-line: no-shadowed-variable
                reader.onload = (event) => {
                    console.log(event);
                    this.url = event.target.result;
                    val.uploadedFileByUser.url = this.url;
                };
            }
        }
    }
    uploadFileClick(id) {
        document.getElementById(id).click();
    }
    checkedState(item, val) {
        console.log(val);
        // if (this.isValidObject(item.validOption)) {
        const selected = item.values.filter(c => c.value);
        console.log(selected);
        if ((item.validOption.value !== 'min') && (selected.length > item.validOption.limit)) {
            val.value = false;
        }
        item.userResponse = selected.filter(c => c.value);
        console.log(item.userResponse);
        // }
    }
    checkAns() {
    }
    ratingColor(item, i) {
        item.RatingByUser = i + 1;
        for (let j = 0; j < item.ratingArray.length; j++) {
            // document.getElementsByClassName(item + j);;
            if (i >= j) {
                if (item.selestedValidation == 'btn btn-light') {
                    document.getElementById(item.name + j).style.backgroundColor = '#fcf403';
                }
                else {
                    document.getElementById(item.name + j).style.color = '#fcf403';
                }
            }
            else {
                document.getElementById(item.name + j).style.color = 'black';
                if (item.selestedValidation == 'btn btn-light') {
                    document.getElementById(item.name + j).style.backgroundColor = '#f8f9fa';
                }
            }
            // console.log(nodes);
            // nodes[j].style.color = 'yellow';
        }
    }
    goToPage(index) {
        this.currentPageIndex = index;
        this.formCurrentPage = this.form.attributes[this.currentPageIndex];
    }
    mailExtention(val, index) {
        val.mailType = val.emailList[index];
    }
    // numberInputValidation(item) {
    //   if (item.value > item.validOption.max) {
    //     // item.value = item.validOption.max;
    //     this.numberError = true;
    //   } else if (item.value < item.validOption.min) {
    //     // item.value = item.validOption.min;
    //     this.numberError = true;
    //   } else {
    //     this.numberError = false;
    //   }
    //   console.log(this.numberError);
    //   console.log(item.value);
    //   console.log(item);
    // }
    navigateToPage(val) {
        this.currentPageIndex = this.currentPageIndex + val;
        this.formCurrentPage = this.form.attributes[this.currentPageIndex];
    }
    submitResult(val, bc) {
        console.log(this.form.attributes);
        console.log(val);
        let errorCount = 0;
        if (this.numberError) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', ' Please fill valid details', 'error');
            return;
        }
        if (bc) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', ' Please Fill The Mandatory Fields (*)', 'error');
            return;
        }
        this.form.attributes.forEach(element => {
            element.field.forEach(el => {
                // tslint:disable-next-line: no-debugger
                if (el.required) {
                    if ((el.fielType === 'rating')) {
                        if (el.RatingByUser === '') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', ' Please fill Rating', 'error');
                            errorCount++;
                            return;
                        }
                        if ((el.userComment.want) && (el.userComment.comment === '')) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', ' Please Comment On Your Rating', 'error');
                            errorCount++;
                            return;
                        }
                    }
                    if (el.fielType === 'number') {
                        if (this.isValidObject(el.value)) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'Please fill the mendatory field', 'error');
                            errorCount++;
                            return;
                        }
                        if (this.isValidObject(el.validOption)) {
                            if ((el.validOption.min) && (el.validOption.min > el.value)) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'Please enter grater then minimum value', 'error');
                                errorCount++;
                                return;
                            }
                            if ((el.validOption.max) && (el.validOption.max < el.value)) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'Please enter less then maximum value', 'error');
                                errorCount++;
                                return;
                            }
                        }
                    }
                    if ((el.fielType === 'file') && (el.uploadedFileByUser.url === '')) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', ' Please Upload File', 'error');
                        errorCount++;
                        return;
                    }
                    if ((el.fielType === 'dropdown') || (el.fielType === 'multiple') || (el.fielType === 'picture')) {
                        if (el.userResponse.length > 0) {
                            if ((el.validOption.value === 'max') && (el.userResponse.length < el.validOption.limit)) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'please  ' + el.validOption.label + '  ' + el.validOption.limit, 'error');
                                errorCount++;
                                return;
                            }
                            else if ((el.validOption.value === 'min') && (el.userResponse.length < el.validOption.limit)) {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'please  ' + el.validOption.label + '  ' + el.validOption.limit, 'error');
                                errorCount++;
                                return;
                            }
                            else {
                                if ((el.validOption.value === 'both') && (el.userResponse.length !== el.validOption.limit)) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'please  ' + el.validOption.label + '  ' + el.validOption.limit, 'error');
                                    errorCount++;
                                    return;
                                }
                            }
                        }
                        else {
                            // swal('Error', 'please fill  ' + el.label, 'error');
                            // errorCount++;
                            // return;
                        }
                    }
                    if ((el.fielType === 'trueFalse') && (el.inputValue === '')) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'Choose Option For' + el.label, 'error');
                        errorCount++;
                        return;
                    }
                    if ((el.fielType === 'yesNo') && (el.inputValue === '')) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Error', 'Choose Option For' + el.label, 'error');
                        errorCount++;
                        return;
                    }
                }
            });
        });
        if (errorCount == 0) {
            this.showTable = true;
        }
    }
    onItemSelect(event, item) {
        console.log(event);
        if (this.isValidObject(item.validOption)) {
            if (item.validOption.value === 'max') {
                this.DropDownSettings = Object.assign({}, this.DropDownSettings, { limitSelection: item.validOption.limit });
            }
            else if (item.validOption.value === 'min') {
                this.DropDownSettings = Object.assign({}, this.DropDownSettings, { limitSelection: item.values.length + 1 });
            }
            else {
                if (item.validOption.value === 'both') {
                    this.DropDownSettings = Object.assign({}, this.DropDownSettings, { limitSelection: item.validOption.limit });
                }
            }
        }
        // this.DropDownSettings = Object.assign({}, this.DropDownSettings, { limitSelection: 2 });
        console.log(item);
    }
};
FormViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formview',
        template: __webpack_require__(/*! ./formview.component.html */ "./src/app/pages/admin/formview/formview.component.html"),
        styles: [__webpack_require__(/*! ./formview.component.scss */ "./src/app/pages/admin/formview/formview.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]))
], FormViewComponent);



/***/ }),

/***/ "./src/app/pages/admin/formview/formview.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/formview/formview.module.ts ***!
  \*********************************************************/
/*! exports provided: FormViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormViewModule", function() { return FormViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _formview_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formview-routing.module */ "./src/app/pages/admin/formview/formview-routing.module.ts");
/* harmony import */ var _formview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formview.component */ "./src/app/pages/admin/formview/formview.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");







let FormViewModule = class FormViewModule {
};
FormViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_formview_component__WEBPACK_IMPORTED_MODULE_4__["FormViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"].forRoot(),
            _formview_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormViewRoutingModule"]
        ]
    })
], FormViewModule);



/***/ })

}]);
//# sourceMappingURL=pages-admin-formview-formview-module.js.map