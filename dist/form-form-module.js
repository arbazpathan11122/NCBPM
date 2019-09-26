(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "./src/app/class/data.ts":
/*!*******************************!*\
  !*** ./src/app/class/data.ts ***!
  \*******************************/
/*! exports provided: icons_and_fields, Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons_and_fields", function() { return icons_and_fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
// tslint:disable-next-line:variable-name
const icons_and_fields = [
    // {
    //     id: 1,
    //     uniqName: 'Header',
    //     name: 'Header',
    //     subName: 'Format',
    //     icon: 'header.png',
    //     fielType: 'header',
    // ConditionalQuest: {},
    //     tooltip: 'The first thing your users will see.',
    //     label: 'Enter Your Heading',
    //     type: 'text',
    //     handle: true
    // },
    // {
    //     id: 17,
    //     uniqName: 'Footer',
    //     name: 'Footer',
    //     subName: 'Format',
    //     icon: 'footer.png',
    //     fielType: 'footer',
    // ConditionalQuest: {},
    //     tooltip: 'The last thing your users will see.',
    //     type: 'text',
    //     label: 'footer content',
    //     handle: true
    // },
    {
        id: 2,
        uniqName: 'Text',
        name: 'Text',
        subName: 'Format',
        icon: 'short_text.png',
        fielType: 'text',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        tooltip: 'Good for short answers, like names.',
        label: 'Enter your Question here',
        placeholder: ' Answer Text',
        userAns: null,
        errorText: 'maximum 256 charector are allowed',
        min: 0,
        max: 256,
        handle: true,
        userResponse: [],
        validOption: {},
        formValidations: [
            {
                label: ' Greater Then',
                value: 'min'
            },
            {
                label: ' Less Then',
                value: 'max'
            },
            {
                label: 'Between',
                value: 'both'
            }
        ]
    },
    {
        id: 14,
        uniqName: 'Number',
        name: 'Number',
        subName: 'Format',
        icon: 'Number.png',
        fielType: 'number',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        tooltip: 'Good for long answers, like the meaning of life',
        errorText: 'Custom Error Field',
        label: 'Enter your amount in number here',
        placeholder: 'Enter Amount',
        min: 0,
        max: 256,
        userResponse: [],
        validOption: {},
        formValidations: [
            {
                label: ' Greater Then',
                value: 'min'
            },
            {
                label: ' Less Then',
                value: 'max'
            },
            {
                label: 'Between',
                value: 'both'
            }
        ],
        handle: true
    },
    {
        id: 3,
        uniqName: 'Statement',
        name: 'Statement',
        subName: 'Format',
        icon: 'statement.png',
        fielType: 'statement',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        tooltip: 'say to your users without asking for a response.',
        label: 'Enter your Statement here',
        type: 'text',
        handle: true
    },
    {
        id: 6,
        uniqName: 'Email',
        name: 'Email',
        subName: 'Format',
        icon: 'mail.png',
        fielType: 'email',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        tooltip: 'Ask for a email address.',
        type: 'email',
        label: 'Email',
        inputValue: '',
        placeholder: 'Enter your email',
        errorText: 'Please enter a valid email',
        handle: true,
        mailType: '',
        emailList: []
    },
    {
        id: 16,
        uniqName: 'Date',
        name: 'Date',
        subName: 'Format',
        type: 'date',
        icon: 'date.png',
        fielType: 'date',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        label: 'How old are you ?',
        tooltip: 'Only accepts answers as calendar dates.',
        errorText: 'Custom Error Field',
        placeholder: 'Date',
        minDate: '',
        maxDate: '',
        userResponse: [],
        validOption: {},
        formValidations: [
            {
                label: 'After',
                value: 'min'
            },
            {
                label: ' Before',
                value: 'max'
            },
            {
                label: 'Between',
                value: 'both'
            }
        ],
    },
    {
        id: 15,
        uniqName: 'Website',
        name: 'Website',
        subName: 'Format',
        icon: 'website.png',
        fielType: 'website',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        tooltip: 'Ask your audience to share a link.',
        errorText: 'Custom Error Field',
        type: 'url',
        label: 'Enter your website Link here',
        inputValue: '',
        placeholder: 'Enter your website link',
        // regex: '^[\da-fA-F]{2}([-:])([\da-fA-F]{2}\1){4}[\da-fA-F]{2}',
        handle: true,
        httpType: '',
        httpList: [],
        comType: '',
        comList: []
    },
    {
        id: 4,
        uniqName: 'Phone',
        name: 'Phone',
        subName: 'Number',
        icon: 'mobile_no.png',
        fielType: 'phone',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        tooltip: 'Ask for a phone number with a right format.',
        errorText: 'Custom Error Field',
        type: 'text',
        label: 'Enter Your Phone',
        placeholder: 'Enter your phone number',
        inputValue: '',
        regex: '[789][0-9]{9}',
        phoneType: '',
        phoneList: [],
        handle: true
    },
    {
        id: 8,
        uniqName: 'File Upload',
        name: 'File Upload',
        subName: 'Format',
        icon: 'file_upload.png',
        fielType: 'file',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        label: 'uploud your resume',
        required: true,
        tooltip: 'Ask for any type of file.',
        errorText: 'Custom Error Field',
        uploadedFileByUser: {
            name: '',
            url: '',
        },
        userResponse: [],
        validOption: {},
        formValidations: [
            {
                label: 'Kb',
                value: 'Kb',
                size: 100
            },
            {
                label: ' Mb',
                value: 'Mb',
                size: 10
            },
            {
                label: 'Gb',
                value: 'Gb',
                size: 1
            }
        ]
    },
    {
        id: 12,
        uniqName: 'Multiple',
        name: 'Multiple',
        subName: 'Choice',
        icon: 'multiple_choice.png',
        fielType: 'multiple',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        label: 'Enter question for multiselection',
        tooltip: 'Give your audience options to choose from.',
        errorText: 'Custom Error Field',
        values: [
            {
                label: 'Enter Your Option Here',
                value: false
            },
            {
                label: 'Enter Your Option Here',
                value: false
            }
        ],
        userResponse: [],
        validOption: {},
        formValidations: [
            {
                label: 'Select atleast',
                value: 'min',
                limit: 1
            },
            {
                label: 'Select exectly',
                value: 'both',
                limit: 1
            },
            {
                label: 'Select atmost',
                value: 'max',
                limit: 1
            }
        ]
    },
    {
        id: 5,
        uniqName: 'Picture',
        name: 'Picture',
        subName: 'Choice',
        icon: 'picture_format.png',
        fielType: 'picture',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        label: 'Select the picture',
        tooltip: 'Give your users image option to choose from.',
        errorText: 'Custom Error Field',
        values: [
            {
                label: 'Enter Your Option1 Here',
                value: false,
                img: '',
                name: '',
            },
            {
                label: 'Enter Your Option Here',
                value: false,
                img: '',
                name: '',
            }
        ],
        userResponse: [],
        validOption: {},
        formValidations: [
            {
                label: 'Select atleast',
                value: 'min',
                limit: 1
            },
            {
                label: 'Select exectly',
                value: 'both',
                limit: 1
            },
            {
                label: 'Select atmost',
                value: 'max',
                limit: 1
            }
        ],
    },
    {
        id: 7,
        uniqName: 'Dropdown',
        name: 'Dropdown',
        subName: 'Format',
        icon: 'dropdown.png',
        fielType: 'dropdown',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        label: ' enter quetion for  selection',
        tooltip: 'Provide a list of options to choose from.',
        errorText: 'Custom Error Field',
        values: [
            {
                label: 'Enter Your Option Here',
                value: false
            },
            {
                label: 'Enter Your Option Here',
                value: false
            }
        ],
        userResponse: [],
        validOption: {},
        formValidations: [
            {
                label: 'Select atleast',
                value: 'min',
                limit: 1
            },
            {
                label: 'Select exectly',
                value: 'both',
                limit: 1
            },
            {
                label: 'Select atmost',
                value: 'max',
                limit: 1
            }
        ]
    },
    // {
    //     id: 18,
    //     uniqName: 'Conditional Dropdown',
    //     name: 'Conditional',
    //     subName: 'Dropdown',
    //     icon: 'conditional_dropdown.png',
    //     fielType: 'conditional',
    // ConditionalQuest: {},
    //     required: true,
    //     tooltip: 'Ask your users the question depending on other answers.',
    //     label: 'Ask your users the question depending on other answers.',
    // },
    {
        id: 9,
        uniqName: 'Yes/No',
        name: 'Yes/No',
        subName: 'Format',
        icon: 'yes_no.png',
        fielType: 'yesNo',
        ConditionalQuest: {
            makeItCondsnl: false,
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        tooltip: 'Give your users just three options.',
        errorText: 'Custom Error Field',
        label: 'Are you married ?',
        inputValue: '',
        values: [
            {
                label: 'Yes',
                value: true
            },
            {
                label: 'No',
                value: false
            },
            {
                label: 'May Be',
                value: 'both'
            },
        ],
    },
    // {
    //     id: 10,
    //     uniqName: 'Payment',
    //     name: 'Payment',
    //     subName: 'Format',
    //     icon: 'payment.png',
    //     fielType: '',
    // ConditionalQuest: {},
    //     required: true,
    //     tooltip: '',
    //     errorText: 'Custom Error Field',
    // },
    {
        id: 11,
        uniqName: 'True/False',
        name: 'True/False',
        subName: 'Format',
        icon: 'true_false.png',
        fielType: 'trueFalse',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        tooltip: 'Ask your users is it true or not.',
        errorText: 'Custom Error Field',
        label: 'Are you married ?',
        inputValue: '',
        values: [
            {
                label: 'True',
                value: true
            },
            {
                label: 'False',
                value: false
            },
        ],
    },
    {
        id: 13,
        uniqName: 'Rating',
        name: 'Rating',
        subName: 'Scale',
        icon: 'rating.png',
        fielType: 'rating',
        makeItCondsnl: false,
        ConditionalQuest: {
            showIf: true,
            question: {},
            answers: {}
        },
        required: true,
        label: 'Rate our product',
        tooltip: 'Ask them to rate something.',
        errorText: 'Custom Error Field',
        selestedValidation: 'fa fa-star-o',
        ratingLimit: 5,
        RatingByUser: '',
        ratingArray: [1, 2, 3, 4, 5],
        userComment: {
            want: false,
            comment: '',
        },
        formRating: [
            // 'fa fa-star-o', 'fa fa-smile-o', 'fa fa-sun-o', 'fa fa-heart-o', 'btn btn-light',
            {
                label: 'Star',
                value: 'fa fa-star-o'
            },
            {
                label: 'Smiley',
                value: 'fa fa-smile-o'
            },
            {
                label: 'Sun',
                value: 'fa fa-sun-o'
            },
            {
                label: 'Heart',
                value: 'fa fa-heart-o'
            },
            {
                label: 'Number',
                value: 'btn btn-light'
            }
        ],
    },
];
class Customer {
    constructor() {
        this.active = true;
    }
}


/***/ }),

/***/ "./src/app/pages/admin/form/form-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/form/form-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutingModule", function() { return FormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component */ "./src/app/pages/admin/form/form.component.ts");




const routes = [
    {
        path: '',
        component: _form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"],
    }
];
let FormRoutingModule = class FormRoutingModule {
};
FormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/form/form.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/admin/form/form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-auto\" *ngIf=\"model\">\n  <div class=\"col-lg-3 col-sm-3 menu-sidebar\">\n\n\n    <p class=\"menu-title text-center mt-2\">Drag or Double click to add section</p>\n    <div class=\"row m-auto \" *ngIf=\"iconField\">\n      <div class=\"menu-item col-lg-6 col-sm-12\" *ngFor=\" let item of iconField \">\n        <div data-toggle=\"tooltip\" title=\"{{item.tooltip}}\" class=\"row m-auto\" [dndDraggable]=\"item\"\n          [dndEffectAllowed]=\"'copy'\" (dndEnd)=\"onDragEnd($event)\"\n          (dblclick)=\"dblclickMove($event ,formCurrentPage.field, item)\">\n          <div class=\"col-4\">\n            <img src=\"assets/img/icons/{{item.icon}}\"><br>\n          </div>\n          <div class=\"col-8 pl-2 pr-0 mt-2\">\n            <span> {{item.uniqName}}\n              <br> {{item.subName}}\n            </span>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md-12 coming-soon-part mt-3 mb-4\">\n            <p class=\"m-auto center justify-content-center\"> Coming Soon</p>\n            <div class=\"title-with-ico mt-3 mb-4\"><img src=\"assets/img/icons/table.png\"> &nbsp; Table\n              Format</div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col-lg-6 col-sm-6  mx-auto  working-part\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\">\n    <div class=\"text-center p-4\">\n      <span class=\"text-primary form-page-name\">{{formCurrentPage.name}}</span>\n    </div>\n\n\n\n\n    <div class=\"form-group\" style=\"margin-bottom: 0px !important;\" [style.backgroundColor]=\"model.theme.bgColor\"\n      [style.color]=\"model.theme.textColor\">\n    </div>\n\n    <section dndDropzone (dndDragover)=\"onDragover($event)\" (dndDrop)=\"onDrop($event,formCurrentPage.field)\"\n      class=\"dndDropArea\" [ngClass]=\"{'empty':formCurrentPage.field.length == 0}\"\n      [style.backgroundColor]=\"model.theme.bgColor\" [style.color]=\"model.theme.textColor\">\n\n      <div [class]=\"((i == currentFieldIndex)? 'active field':'field')\"\n        *ngFor=\"let item of formCurrentPage?.field;let i= index;\" (dndStart)=\"onDragStart($event)\"\n        (dndCanceled)=\"onDragCanceled($event)\" (dndMoved)=\"onDragged(item, formCurrentPage.field, 'move')\"\n        [dndEffectAllowed]=\"'all'\" [dndDraggable]=\"item\">\n\n        <div class=\"row form-group\" (click)=\" currentValidation(item, i)\">\n          <div style=\"cursor: all-scroll;\" class=\"col-md-12 text-center m-0 mb-2 pt-3\" dndHandle>\n            <span class=\"glyphicon glyphicon-menu-hamburger dndHandle part-hover-ico\"></span>\n            <div class=\"float-right mr-4\">\n              <span style=\"cursor: pointer\" (click)=\"removeField(i)\"\n                class=\"glyphicon glyphicon-trash pull-right part-hover-ico\"></span>\n            </div>\n          </div>\n\n          <div class=\"col-md-12  \">\n            <div *ngIf=\"(item.fielType ==='header')||(item.fielType === 'statement')|| (item.fielType ==='footer')\"\n              class=\"pl-3 pr-3\">\n              <div class=\"maker-input\">\n                <input class=\"name-input \" type=\"text\" [(ngModel)]=\"item.label\" aria-invalid=\"false\">\n              </div>\n            </div>\n\n            <div *ngIf=\"(item.fielType ==='email')||(item.fielType ==='website')|| (item.fielType ==='phone')\"\n              class=\"pl-3 pr-3\">\n              <div class=\"mb-3 maker-input\">\n                <span *ngIf=\"item.required\" class=\"red\">*</span> <input class=\"name-input \" type=\"{{item.type}}\"\n                  [(ngModel)]=\"item.label\" aria-invalid=\"false\">\n              </div>\n              <div class=\"user-input\">\n                <input class=\"name-input\" placeholder=\"{{item.placeholder}}\" [(ngModel)]=\"item.placeholder\"\n                  [pattern]=\"item.regex\" aria-invalid=\"false\">\n              </div>\n            </div>\n            <div *ngIf=\"(item.fielType=='yesNo')|| item.fielType=='trueFalse'\" class=\"pl-3 pr-3\">\n              <div class=\"mb-3 maker-input\">\n                <span *ngIf=\"item.required\" class=\"red\">*</span> <input class=\"name-input\" [(ngModel)]=\"item.label\"\n                  aria-invalid=\"false\">\n              </div>\n              <div class=\"user-input disabled\">\n                <label class=\"checkbox-inline mr-4\" *ngFor=\"let val of item.values\">\n                  <input type=\"radio\" name=\"{{item.name}}\" disabled>&nbsp; {{val.label}}\n                </label>\n              </div>\n            </div>\n\n            <div *ngIf=\"(item.fielType=='text')|| (item.fielType=='number')\" class=\"pl-3 pr-3\">\n              <div class=\"mb-3 maker-input\">\n                <span *ngIf=\"item.required\" class=\"red\">*</span> <input class=\"name-input\" [(ngModel)]=\"item.label\"\n                  aria-invalid=\"false\">\n              </div>\n              <div class=\"user-input\">\n                <input class=\"name-input\" type=\"\" [(ngModel)]=\"item.placeholder\" aria-invalid=\"false\">\n              </div>\n            </div>\n\n\n            <div *ngIf=\"item.fielType=='file'\" class=\"pl-3 pr-3\">\n              <div class=\"mb-3 maker-input\">\n                <span *ngIf=\"item.required\" class=\"red\">*</span> <input class=\"name-input\" [(ngModel)]=\"item.label\"\n                  aria-invalid=\"false\">\n              </div>\n              <div class=\"right-ico mr-5\">\n                <div class=\"uploadimage-dragndrop\" id=\"dragndropimage\">\n                  <input type=\"file\" #file hidden=\"hidden\" />\n\n                  <img class=\"upload-img mb-3\" src=\"assets/img/icn-upload.png\">\n                  <p> Upload image</p>\n                </div>\n              </div>\n\n\n            </div>\n            <div *ngIf=\"item.fielType=='date'\" class=\"pl-3 pr-3\">\n              <div class=\"mb-3 maker-input\">\n                <span *ngIf=\"item.required\" class=\"red\">*</span> <input class=\"name-input\" [(ngModel)]=\"item.label\"\n                  aria-invalid=\"false\">\n              </div>\n              <div class=\"user-input\">\n                <input style=\"width:75%\" class=\"name-input\" max=\"2050-12-31\" disabled placeholder=\"12 / DD / YYYY\"\n                  aria-invalid=\"false\" id=\"datepicker\">\n              </div>\n            </div>\n\n\n\n\n\n\n            <div *ngIf=\"item.fielType=='rating'\" class=\"pl-3 pr-3\">\n              <div class=\"mb-3 maker-input\">\n                <span *ngIf=\"item.required\" class=\"red\">*</span> <input name=\"{{item.name}}\" class=\"name-input\"\n                  [(ngModel)]=\"item.label\" aria-invalid=\"false\">\n              </div>\n              <div class=\"user-input\">\n                <div class=\"row\">\n                  <div class=\"col-5\">\n                    <div class=\"mb-2 rating-ico\">\n\n                      <span style=\"opacity: 1\" *ngFor=\"let star of item.ratingArray; let i=index\"\n                        [ngClass]=\"item.selestedValidation\">\n                        <ng-container *ngIf=\"item.selestedValidation== 'btn btn-light'\">\n                          {{i+1}}\n                        </ng-container>&nbsp;&nbsp;\n                      </span>\n                    </div>\n\n\n                  </div>\n                  <div class=\"col-5\">\n                    <select [(ngModel)]=\"item.selestedValidation\" name=\"{{item.name }}\" class=\"name-input\">\n                      <option *ngFor=\"let c of item.formRating\" [value]=\"c.value\">\n                        {{c.label}}</option>\n\n                    </select>\n\n                  </div>\n                  <div class=\"col-2\">\n                    <div class=\"user-input\">\n                      <input class=\"name-input\" name=\"{{item.name }}\" type=\"number\" min=\"2\" max=20\n                        (change)=\"generateDynamicArray(item, item.ratingLimit)\" [(ngModel)]=\"item.ratingLimit\"\n                        aria-invalid=\"false\"\n                        (keyup)=\"((item.ratingLimit >20)? item.ratingLimit = 20 : ((item.ratingLimit <2)? item.ratingLimit = 2 :item.ratingLimit  =item.ratingLimit))\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"pl-3 pr-3\"\n              *ngIf=\"((item.fielType=='dropdown') || (item.fielType=='picture')||(item.fielType =='multiple'))\">\n              <div class=\"mb-3 maker-input\">\n                <span *ngIf=\"item.required\" class=\"red\">*</span> <input class=\"name-input\" [(ngModel)]=\"item.label\"\n                  aria-invalid=\"false\">\n              </div>\n              <ol class=\"user-input pl-4\">\n                <li class=\"add-dropdown \" *ngFor=\"let val of item.values; let valueIndex=index;\">\n\n\n\n                  <input style=\"width: 50%\" class=\"name-input mb-4\" name=\"val.uniqName{{valueIndex}}\"\n                    [(ngModel)]=\"val.label\" aria-invalid=\"false\">\n\n                  <ng-container *ngIf=\"item.fielType=='picture'\">\n\n                    <div class=\"right-ico mr-5\">\n                      <input type=\"file\" accept=\"image/*\" (change)=\"onSelectFile($event ,val )\"\n                        id=\"{{item.name }}{{valueIndex}}\" hidden=\"hidden\" />\n                      <button type=\"button\" (click)=\"uploadFileClick(item.name + valueIndex)\"\n                        class=\"btn btn-sm btn-primary btn-style mr-2\" id=\"custom-button\">Upload</button>\n                      <span id=\"custom-text\" *ngIf=\"val.name ==''\">Select file</span>\n                      <span id=\"custom-text\" *ngIf=\"val.name !==''\">{{val.name.substring(0, 10) }}..</span>\n\n                    </div>\n\n                  </ng-container>\n\n                  <i class=\"fa fa-times right-ico\" (click)=\"item.values.splice(valueIndex,1)\" aria-hidden=\"true\"></i>\n                </li>\n              </ol>\n              <ng-container *ngIf=\"item.fielType=='picture'\">\n\n\n                <button class=\"btn btn-primary btn-style\" (click)=\"addPicture( item.values)\"> add\n                  Option</button>\n              </ng-container>\n              <ng-container *ngIf=\"item.fielType !=='picture'\">\n\n                <button class=\"btn btn-primary btn-style\" (click)=\"addValue( item.values)\"> add\n                  Option</button>\n\n              </ng-container>\n            </div>\n\n\n            <div *ngIf=\"item.fielType=='conditional'\" class=\"pl-3 pr-3\">\n              <div class=\"mb-3 maker-input\">\n                <span *ngIf=\"item.required\" class=\"red\">*</span> <input class=\"name-input\" [(ngModel)]=\"item.label\"\n                  aria-invalid=\"false\">\n              </div>\n              <ol class=\"user-input \">\n                <li *ngFor=\"let i of item.values; let valueIndex=index;\">\n\n\n                  <ng-container class=\"add-dropdown \">\n\n                    <input class=\"name-input mb-2\" [(ngModel)]=\"i.label\" aria-invalid=\"false\">\n                    <input type='file'>\n                    <i class=\"fa fa-times right-ico\" (click)=\"item.values.splice(valueIndex,1)\" aria-hidden=\"true\"></i>\n                  </ng-container>\n                </li>\n              </ol>\n\n              <button class=\"btn\" (click)=\"addValue(item.values)\"> add Option</button>\n\n            </div>\n\n\n          </div>\n\n\n\n\n\n\n\n\n        </div>\n\n      </div>\n      <div class=\"dndPlaceholder\" dndPlaceholderRef>\n      </div>\n    </section>\n    <div class=\"m-4 text-center\">\n      <br>\n      <a *ngIf=\"currentPageIndex!=0\" (click)=\"navigateToPage(-1)\" class=\"float-left\">Prev</a>\n      <button class=\"btn btn-primary mr-3\" (click)=\"submitbtn()\">Save</button>\n      <button class=\"btn btn-success mr-3\" (click)=\"submitbtn(true)\">Save & Assing</button>\n      <button class=\"btn btn-custom\" (click)=\"addPages()\">\n        <span class=\"glyphicon glyphicon-plus\"></span> &nbsp; Add Page</button>\n      <a *ngIf=\"currentPageIndex!=(model.attributes.length -1)\" (click)=\"navigateToPage(1)\" class=\"float-right\">Next</a>\n\n\n    </div>\n  </div>\n\n\n  <div class=\"col-lg-3 col-sm-3 property-part\">\n    <div class=\"property-tab\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <button (click)=\"showGenSetting = true\" [class]=\"(showGenSetting) ? 'btn btn-primary': 'btn'\">\n            General\n          </button>\n        </div>\n        <div class=\"col-md-6\">\n          <button (click)=\"showGenSetting = false\" [class]=\"(!showGenSetting) ? 'btn btn-primary': 'btn'\">\n            Individual\n          </button>\n\n        </div>\n      </div>\n\n\n      <div class=\"tab-content mt-3\">\n        <div *ngIf=\"!showGenSetting\">\n          <div *ngIf=\"isValidObject(selectedItem)\">\n            <div class=\"title-with-ico mt-3 mb-4\"><img src=\"assets/img/icons/{{selectedItem.icon}}\">\n              &nbsp; {{selectedItem.uniqName}}</div>\n\n            <div\n              *ngIf=\"!((selectedItem.uniqName =='Statement')||(selectedItem.uniqName =='Footer')||(selectedItem.uniqName =='Header'))\"\n              class=\"required-part mt-4 mb-4 pt-2 pb-2\">\n              <!-- <i *ngIf=\"selectedItem.required\" (click)=\"selectedItem.required=false\"\n                                  class=\"fa fa-toggle-on red\"></i> -->\n              <img class=\"toggle-imag\" *ngIf=\"!selectedItem.required\" (click)=\"selectedItem.required = true\"\n                src=\"assets/img/toggle-button-inactive.png\">\n\n              <!-- <i *ngIf=\"!selectedItem.required\" (click)=\"selectedItem.required=true\"\n                                  class=\"fa fa-toggle-off\"></i> &nbsp; -->\n              <img class=\"toggle-imag\" *ngIf=\"selectedItem.required\" (click)=\"selectedItem.required = false\"\n                src=\"assets/img/toggle-button-active.png\">&nbsp;\n              <!-- <label class=\"switch\">\n                                  <input type=\"checkbox\">\n                                  <span class=\"toogle-slide round\"></span>\n                              </label> &nbsp; -->\n\n              <label data-toggle=\"tooltip\" data-placement=\"top\" title=\"You Want to \"\n                data-original-title=\"Tooltip on top\"><span style=\"font-weight: 500;\">Mandatory Or\n                  Not?</span></label>\n\n\n              <!-- <div class=\"response-validation mt-4 mb-3\">\n                <label> Response Validation</label>\n              </div> -->\n            </div>\n\n\n\n\n\n            <div class=\"required-part mt-4 mb-4\" *ngIf=\"selectedItem.fielType=='rating'\">\n\n              <!-- <i *ngIf=\"selectedItem.userComment.want\" (click)=\"selectedItem.userComment.want=false\"\n                                  class=\"fa fa-toggle-on red\"></i> -->\n              <img class=\"toggle-imag\" *ngIf=\"selectedItem.userComment.want\"\n                (click)=\"selectedItem.userComment.want=false\" src=\"assets/img/toggle-button-active.png\">\n              <img class=\"toggle-imag\" *ngIf=\"!selectedItem.userComment.want\"\n                (click)=\"selectedItem.userComment.want=true\" src=\"assets/img/toggle-button-inactive.png\">\n              &nbsp;\n              <!-- <i *ngIf=\"!selectedItem.userComment.want\" (click)=\"selectedItem.userComment.want=true\"\n                                  class=\"fa fa-toggle-off\"></i> &nbsp; -->\n              <!-- <label class=\"switch\">\n                                  <input type=\"checkbox\">\n                                  <span class=\"toogle-slide round\"></span>\n                              </label> &nbsp; -->\n\n              <label><span> Comment is Required</span></label>\n\n\n            </div>\n\n\n            <div class=\"row\" *ngIf=\"selectedItem.fielType=='email'\">\n              <div class=\"col-md-12 user-input mb-4\">\n                <ng-multiselect-dropdown [placeholder]=\"'Select Mail '\" [data]=\"emailDropdownList\"\n                  [(ngModel)]=\"selectedItem.emailList\" [settings]=\"emailSettings\">\n                </ng-multiselect-dropdown>\n\n              </div>\n            </div>\n\n\n            <div class=\"row\" *ngIf=\"selectedItem.fielType=='phone'\">\n              <div class=\"col-md-12 user-input mb-4\">\n\n\n                <ng-multiselect-dropdown [placeholder]=\"'Select country phone  '\" [data]=\"phoneDropdownList\"\n                  [(ngModel)]=\"selectedItem.phoneList\" [settings]=\"phoneSettings\">\n                </ng-multiselect-dropdown>\n\n              </div>\n            </div>\n\n            <div class=\"row\" *ngIf=\"selectedItem.fielType=='website'\">\n              <div class=\"col-md-12 user-input mb-4 mt-2\">\n\n\n                <ng-multiselect-dropdown [placeholder]=\"'Select Http Or Https  '\" [data]=\"httpDropdownList\"\n                  [(ngModel)]=\"selectedItem.httpList\" [settings]=\"httpSettings\">\n                </ng-multiselect-dropdown>\n\n                <br>\n                <ng-multiselect-dropdown [placeholder]=\"'Select .com  Or .in etc...  '\" [data]=\"comDropdownList\"\n                  [(ngModel)]=\"selectedItem.comList\" [settings]=\"comSettings\">\n                </ng-multiselect-dropdown>\n\n              </div>\n            </div>\n\n            <div class=\"row\" *ngIf=\"selectedItem?.formValidations\">\n              <div class=\"col-md-12 user-input mb-4\">\n                <label *ngIf=\"!selectedItem.validOption\">Select Validation</label>\n                <select type='text' style=\"border-style: inset !important;\" [(ngModel)]=\"selectedItem.validOption\"\n                  (change)=\"changeSelectValidation($event)\" class=\"name-input\">\n                  <!-- value=\"\" disabled selected -->\n                  <option [ngValue]=\"{}\">No Validation</option>\n                  <option *ngFor=\"let c of selectedItem?.formValidations\" [ngValue]=\"c\">\n                    {{c.label}}</option>\n\n                </select>\n              </div>\n\n              <!-- start multiple dropdown picture  -->\n              <div class=\"col-md-12\"\n                *ngIf=\"((selectedItem.fielType=='multiple')|| (selectedItem.fielType=='dropdown')|| (selectedItem.fielType=='picture')|| (selectedItem.fielType=='file'))\">\n                <div class=\"user-input mb-4\"\n                  *ngIf=\"(isValidObject(selectedItem.validOption)&&  (selectedItem.fielType !=='file'))\">\n                  <label class=\"mb-2\"> Number </label>\n\n                  <input style=\"border-style: inset !important;\" class=\"name-input\" min=\"0\" type=\"number\"\n                    [(ngModel)]=\"selectedItem.validOption.limit\" aria-invalid=\"false\">\n                </div>\n\n                <div class=\"user-input mb-4\"\n                  *ngIf=\"(isValidObject(selectedItem.validOption) &&  (selectedItem.fielType =='file'))\">\n                  <label class=\"mb-2\"> Custom Error Message </label>\n\n                  <input style=\"border-style: inset !important;\" class=\"name-input\" min=\"0\" type=\"number\"\n                    [(ngModel)]=\"selectedItem.validOption.size\" aria-invalid=\"false\">\n                </div>\n              </div>\n\n\n              <!-- end multiple dropdown picture  -->\n\n              <!-- Start Date -->\n\n              <div class=\"col-md-12\" *ngIf=\"selectedItem.fielType=='date'\">\n                <div class=\"user-input mb-4\"\n                  *ngIf=\"((isValidObject(selectedItem.validOption) )&&( (selectedItem.validOption.value =='min') || (selectedItem.validOption.value =='both')))\">\n\n                  <p>Start Date</p>\n                  <input class=\"datepicker name-input\" type=\"date\" [(ngModel)]=\"selectedItem.validOption['min']\"\n                    aria-invalid=\"false\">\n                </div>\n              </div>\n\n              <div class=\"col-md-12\" *ngIf=\"selectedItem.fielType=='date'\">\n                <div class=\"user-input mb-4\"\n                  *ngIf=\"((isValidObject(selectedItem.validOption) )&&( (selectedItem.validOption.value =='max') || (selectedItem.validOption.value =='both')))\">\n\n                  <p>End Date</p>\n                  <input class=\"datepicker name-input\" [min]=\"selectedItem.validOption.min\" type=\"date\"\n                    [(ngModel)]=\"selectedItem.validOption['max']\" aria-invalid=\"false\">\n                </div>\n              </div>\n              <!-- End Date -->\n\n              <!-- Start text and number -->\n\n              <div class=\"col-md-12\" *ngIf=\"((selectedItem.fielType =='text') || (selectedItem.fielType =='number'))\">\n                <div class=\"user-input mb-4\"\n                  *ngIf=\"((isValidObject(selectedItem.validOption) )&&( (selectedItem.validOption.value =='min') || (selectedItem.validOption.value =='both')))\">\n                  <label class=\"mb-2\">\n                    Min {{selectedItem.uniqName}}</label>\n\n                  <input class=\"name-input\" type=\"number\" min=\"0\" maxlength=\"15\"\n                    (change)=\"((selectedItem.validOption['min'] == null)? selectedItem.validOption['min'] = 0 : selectedItem.validOption['min'] =selectedItem.validOption['min'])\"\n                    [(ngModel)]=\"selectedItem.validOption['min']\"\n                    placeholder=\"Enter Your  Min {{selectedItem.uniqName}} limit\" aria-invalid=\"false\"\n                    style=\"border-style: inset !important\">\n                </div>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"((selectedItem.fielType =='text') || (selectedItem.fielType =='number'))\">\n                <div class=\"user-input mb-4\"\n                  *ngIf=\"((isValidObject(selectedItem.validOption) )&&( (selectedItem.validOption.value =='max') || (selectedItem.validOption.value =='both')))\">\n                  <label class=\"mb-2\">\n                    Max {{selectedItem.uniqName}}</label>\n\n                  <input class=\"name-input\" type=\"number\" [min]=\"selectedItem.validOption['min']\" maxlength=\"15\"\n                    (change)=\"((selectedItem.validOption['max'] <selectedItem.validOption['min'])? selectedItem.validOption['max']= selectedItem.validOption['min'] : selectedItem.validOption['max'] =selectedItem.validOption['max'])\"\n                    [(ngModel)]=\"selectedItem.validOption['max']\" aria-invalid=\"false\"\n                    placeholder=\"Enter Your  Max {{selectedItem.uniqName}} limit\"\n                    style=\"border-style: inset !important\">\n                </div>\n              </div>\n              <!-- End text and number -->\n\n            </div>\n            <div class=\"row required-inputs\">\n\n              <div class=\"col-md-12\"\n                *ngIf=\"!((selectedItem.fielType =='statement')||(selectedItem.fielType =='footer')||(selectedItem.fielType =='header'))\">\n                <div class=\"user-input mb-4\">\n                  <label class=\"mb-2\">\n                    Custom Error Message\n                  </label>\n\n                  <input style=\"border-style: inset !important\" class=\"name-input\" [(ngModel)]=\"selectedItem.errorText\"\n                    aria-invalid=\"false\">\n                </div>\n              </div>\n\n\n\n            </div>\n          </div>\n          <!-- \n          <div class=\"row\" *ngIf=\"false\">\n            <label class=\"nice-lable\">Mapping</label>\n            <div class=\"col-md-12\">\n              <div class=\"nice-select box-nice-select wide mb-3\" tabindex=\"0\">\n                <span class=\"current\"> File Name</span>\n                <ul class=\"list\">\n                  <li data-value=\"2\" class=\"option\">Another option</li>\n                  <li data-value=\"3\" class=\"option\">A disabled option</li>\n                  <li data-value=\"4\" class=\"option\">Potato</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <div class=\"nice-select box-nice-select wide mb-3\" tabindex=\"0\">\n                <span class=\"current\"> Page Name</span>\n                <ul class=\"list\">\n                  <li data-value=\"2\" class=\"option\">Another option</li>\n                  <li data-value=\"3\" class=\"option\">A disabled option</li>\n                  <li data-value=\"4\" class=\"option\">Potato</li>\n                </ul>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <div class=\"nice-select box-nice-select wide mb-3\" tabindex=\"0\">\n                <span class=\"current\">Element Name</span>\n                <ul class=\"list\">\n                  <li data-value=\"2\" class=\"option\">Another option</li>\n                  <li data-value=\"3\" class=\"option\">A disabled option</li>\n                  <li data-value=\"4\" class=\"option\">Potato</li>\n                </ul>\n              </div>\n            </div>\n          </div> -->\n\n\n\n\n          <div *ngIf=\"conditionalQuesList.length>0\" class=\"conditional-validation mt-3\">\n            <div class=\"required-part mt-4 mb-4\">\n              <!-- <i *ngIf=\"conditionRequired\" (click)=\"conditionRequired = false\"\n                                  class=\"fa fa-toggle-on red\"></i>\n                              <i *ngIf=\"!conditionRequired\" (click)=\"conditionRequired = true\"\n                                  class=\"fa fa-toggle-off\"></i> &nbsp; -->\n              <img class=\"toggle-imag\" *ngIf=\"selectedItem.makeItCondsnl\"\n                (click)=\"makeItConditional(selectedItem ,false) \" src=\"assets/img/toggle-button-active.png\">\n              <img class=\"toggle-imag\" *ngIf=\"!selectedItem.makeItCondsnl\"\n                (click)=\"makeItConditional( selectedItem , true)\" src=\"assets/img/toggle-button-inactive.png\">\n              <!-- <label class=\"switch\">\n                                  <input type=\"checkbox\">\n                                  <span class=\"toogle-slide round\"></span>\n                              </label> &nbsp; -->\n              &nbsp; <label data-original-title=\"Tooltip on top\" data-placement=\"top\" data-toggle=\"tooltip\"\n                title=\"You Want to \"><span style=\"font-weight: 500;\">Make it a\n                  conditional question</span></label>\n            </div>\n\n            <div class=\"row\">\n              <div *ngIf=\"selectedItem.makeItCondsnl\" class=\"col-12 pl-3\">\n                <div class=\"nice-select box-nice-select wide mb-1\" tabindex=\"0\">\n                  <span *ngIf=\"selectedItem.ConditionalQuest.showIf\" class=\"current\">Show If</span>\n                  <!-- <span *ngIf=\"!selectedItem.ConditionalQuest.showIf\" class=\"current\">Hide If</span> -->\n                  <ul class=\"list\">\n                    <li (click)=\"selectedItem.ConditionalQuest.showIf= true\" class=\"option\">Show If</li>\n                    <!-- <li (click)=\"selectedItem.ConditionalQuest.showIf= false\" class=\"option\">Hide If</li> -->\n                  </ul>\n                </div>\n              </div>\n              <div *ngIf=\"selectedItem.makeItCondsnl\" class=\"col-12 pl-3\">\n                <label class=\"nice-lable\">Question</label>\n                <div class=\"nice-select box-nice-select wide mb-1\" tabindex=\"0\">\n                  <!-- <span (click)=\"!isValidObject(selectedItem.ConditionalQuest.question)\" class=\"current\">Question</span> -->\n                  <span (click)=\"isValidObject(selectedItem.ConditionalQuest.question)\"\n                    class=\"current\">{{selectedItem.ConditionalQuest.question.label}}</span>\n                  <ul class=\"list\">\n                    <li *ngFor=\"let ques of conditionalQuesList; let indx = index;\"\n                      (click)=\"selectedItem.ConditionalQuest.question = ques\" class=\"option\">{{ques.label}}</li>\n\n                  </ul>\n                </div>\n              </div>\n              <div *ngIf=\"selectedItem.makeItCondsnl\" class=\"col-12 pl-3\">\n                <label class=\"nice-lable\">Answer</label>\n                <div class=\"nice-select box-nice-select wide mb-1\" tabindex=\"0\">\n                  <!-- <span (click)=\"!isValidObject(selectedItem.ConditionalQuest.answers)\" class=\"current\">Answer</span> -->\n                  <span (click)=\"isValidObject(selectedItem.ConditionalQuest.answers)\"\n                    class=\"current\">{{selectedItem.ConditionalQuest.answers.label}}</span>\n                  <ul class=\"list\">\n                    <li *ngFor=\"let ans of selectedItem.ConditionalQuest.question.values; let indx = index;\"\n                      (click)=\"selectedItem.ConditionalQuest.answers = ans\" class=\"option\">{{ans.label}}\n                    </li>\n\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <!-- <div *ngIf=\"conditionalAnsList.length>0\" class=\"text-center mt-3\">\n              <button class=\"btn btn-primary\">submit</button>\n            </div> -->\n          </div>\n\n\n\n\n\n        </div>\n\n\n        <div *ngIf=\"showGenSetting\">\n\n\n          <label class=\"nice-lable\">Font Style</label>\n          <div class=\"nice-select box-nice-select wide mb-3\" tabindex=\"0\">\n            <span class=\"current\">{{model.theme.fontFamily}}</span>\n            <ul class=\"list\">\n              <li *ngFor=\"let font of FontStyleArray\" [ngStyle]=\"font.fontStyle\" (click)=\"changeFontStyle(font.name)\"\n                class=\"option\">{{font.name}}</li>\n\n            </ul>\n          </div>\n\n          <div class=\"theme-setting-color mt-4 pb-2\">\n            <div class=\"que-color mb-3\">\n              <p>Question color</p>\n              <input type=\"color\" class=\"input-lg\" [(ngModel)]=\"model.theme.qestColor\"\n                (ngModelChange)=\"changeQuestColor()\">\n            </div>\n\n            <div class=\"que-color mb-3\">\n              <p>Answer color</p>\n              <input type=\"color\" class=\"input-lg\" [(ngModel)]=\"model.theme.ansColor\"\n                (ngModelChange)=\"changeAnsColor()\">\n\n            </div>\n\n\n          </div>\n\n          <div class=\"form-pages mt-4\">\n            <!-- <p class=\"text-center mb-3\">Form pages</p> -->\n\n            <div class=\"maker-input mb-2\">\n              <label>Form Name</label>\n            </div>\n            <div class=\"user-input\">\n              <input style=\"border-style: inset !important\" class=\"name-input\" type=\"text\" [(ngModel)]=\"model.name\"\n                placeholder=\"Purchase\" name=\"category\">\n            </div>\n            <div class=\"maker-input mt-4 mb-3\">\n              <label> Pages</label>\n            </div>\n            <p class=\"mb-2 mt-2\" *ngFor=\" let page of model.attributes; let pageNo = index\">\n              <a (click)=\"goToPage(pageNo)\" [class]=\"((pageNo == currentPageIndex)?'text-primary':'')\">{{pageNo +1}}\n                &nbsp;\n                {{page.name}} </a>\n\n\n              <span (click)=\"removePage(pageNo, page.name)\" class=\"glyphicon glyphicon-trash  mr-2 pull-right\"></span>\n\n              <span data-toggle=\"modal\" data-target=\"#editPageNameModel\" (click)=\"editPageName(page)\"\n                class=\"glyphicon glyphicon-edit mr-4 pull-right\"></span>\n              &nbsp; &nbsp; &nbsp;\n            </p>\n\n          </div>\n\n\n\n          <!--\n                      <label class=\"nice-lable\">Inbox</label>\n\n                      <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"nice-select box-nice-select wide mb-3\" tabindex=\"0\">\n                                  <span class=\"current\"> Folder Name</span>\n                                  <ul class=\"list\">\n                                      <li data-value=\"2\" class=\"option\">Another option</li>\n                                      <li data-value=\"3\" class=\"option\">A disabled option</li>\n                                      <li data-value=\"4\" class=\"option\">Potato</li>\n                                  </ul>\n                              </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                              <div class=\"nice-select box-nice-select wide mb-3\" tabindex=\"0\">\n                                  <span class=\"current\">Form Name</span>\n                                  <ul class=\"list\">\n                                      <li data-value=\"2\" class=\"option\">Another option</li>\n                                      <li data-value=\"3\" class=\"option\">A disabled option</li>\n                                      <li data-value=\"4\" class=\"option\">Potato</li>\n                                  </ul>\n                              </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                              <div class=\"nice-select box-nice-select wide mb-3\" tabindex=\"0\">\n                                  <span class=\"current\"> Page Name</span>\n                                  <ul class=\"list\">\n                                      <li data-value=\"2\" class=\"option\">Another option</li>\n                                      <li data-value=\"3\" class=\"option\">A disabled option</li>\n                                      <li data-value=\"4\" class=\"option\">Potato</li>\n                                  </ul>\n                              </div>\n                          </div>\n                          <a style=\"    margin-left: 36%\">\n\n                              <button class=\"btn btn-primary\" (click)=\"submitbtn()\">submit</button>\n                          </a>\n\n                      </div> -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"editPageNameModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\" p-5\">\n\n        <div class=\" maker-input\">\n          <label class=\"name-input\">Page Name: <span class=\"red\">*</span>\n          </label>\n        </div>\n        <div class=\"user-input\" *ngIf=\"formCurrentPage\">\n          <input class=\"name-input\" [(ngModel)]=\"formCurrentPage.name\" placeholder=\"Purchase Requisition\" type=\"text\"\n            name=\"Workflow\">\n\n        </div>\n\n\n\n      </div>\n\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn bg-light\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn voiletBG\" data-dismiss=\"modal\">Create</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"assingModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\" pt-5 pr-5 pl-5 pb-1\">\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <a [class]=\"((selfAssing)?'text-primary btn btn-social':'btn btn-social')\" (click)=\"selfAssing = true\"><i\n                class=\"fa fa-email\"></i>\n              &nbsp;\n              Assing To User</a>\n          </div>\n          <div class=\"col-md-6\">\n            <a [class]=\" ((!selfAssing)?'text-primary btn btn-social':'btn btn-social')\" (click)=\"selfAssing = false\">\n              <!-- <i class=\"fa fa-phone\"></i> -->\n              &nbsp;\n              Self Assing</a>\n          </div>\n        </div>\n\n        <div *ngIf=\"selfAssing\">\n\n          <form #assingForm=\"ngForm\">\n            <div class=\"form-group mt-3 mb-4\">\n              <input type=\"email\" class=\"form-control\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n                [(ngModel)]=\"assingToUser.email\" name=\"email\" placeholder=\"Email Id\" [required]=\"true\" #email=\"ngModel\">\n            </div>\n            <div [hidden]=\"email.valid || email.pristine \" class=\"alert alert-danger\">\n              Please Enter Valid Email Address\n            </div>\n            <div class=\"form-group mt-3 mb-4\">\n              <input type=\"text\" class=\"form-control\" pattern=\"^[0-9]{10,10}$\" [(ngModel)]=\"assingToUser.phone\"\n                name=\"phone\" placeholder=\"Mobile No\" [required]=\"true\" #phone=\"ngModel\">\n\n            </div>\n            <div [hidden]=\"phone.valid || phone.pristine \" class=\"alert alert-danger\">\n              Please Enter Valid Phone No\n            </div>\n\n          </form>\n\n          <!-- <span class=\"m-auto p-auto\">\n                      <a class=\"link\">\n                          https://form-ab97d.firebaseapp.com/formView\n                      </a>\n                  </span> -->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn bg-light\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn voiletBG\" data-dismiss=\"modal\" [disabled]=\"assingForm.invalid\">Assing To\n              User</button>\n          </div>\n        </div>\n\n\n        <div *ngIf=\"!selfAssing\">\n          <!-- <span class=\"m-auto p-auto\">\n                      <a class=\"link\">\n                          https://form-ab97d.firebaseapp.com/formView\n                      </a>\n                  </span> -->\n          <div class=\"modal-footer\">\n\n            <button type=\"button\" class=\"btn bg-light\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn voiletBG\" (click)=\"goToForm()\"> Self\n              Assing</button> </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/form/form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/admin/form/form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#file-upload-format {\n  padding: 40px; }\n\n#file-upload-format .filestyle {\n  padding-bottom: 10px; }\n\n.btn-style {\n  -box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;\n  padding: 5px 16px;\n  border: 0;\n  border-radius: .125rem;\n  white-space: normal;\n  word-wrap: break-word; }\n\n.image-box {\n  height: 100px;\n  width: 100%;\n  overflow: hidden; }\n\n.image-box img {\n  height: 100px;\n  width: 100%;\n  overflow: hidden;\n  background-size: cover; }\n\n.uploadimage-dragndrop {\n  min-height: auto;\n  padding: 20px 20px 20px 20px;\n  text-align: center;\n  border: dashed 2px var(--dashborder-color); }\n\n.upload-img {\n  position: relative;\n  top: 12%;\n  width: 51px;\n  height: 33px;\n  background-size: cover; }\n\n.upload-image-box {\n  width: 100%;\n  overflow: hidden;\n  border: 1px solid var(--dashborder-color);\n  border-radius: 5px;\n  padding: 3px;\n  background-size: cover; }\n\n.upload-image-box img {\n  height: 125px;\n  width: 100%;\n  overflow: hidden;\n  background-size: cover; }\n\n.title-with-ico {\n  padding: 8px 15px;\n  border-radius: 5px;\n  box-shadow: inset 0px 0px 5px 0px #d8d2d2;\n  font-size: 15px; }\n\n.title-with-ico img {\n  width: 19px;\n  height: auto; }\n\n.uploadimage-dragndrop {\n  min-height: auto;\n  padding: 20px 20px 20px 20px;\n  text-align: center;\n  border: dashed 2px var(--dashborder-color); }\n\n.voiletBG {\n  background-color: var(--main-purple-color) !important;\n  color: var(--white-color); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255YXovbmNicG0vbmNicG0wMWZpcmViYXNlL3NyYy9hcHAvcGFnZXMvYWRtaW4vZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0Usb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UseUZBQWlGO0VBQ2pGLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGdCQUFnQjtFQUNmLDRCQUE0QjtFQUMzQixrQkFBa0I7RUFDbEIsMENBQTBDLEVBQUE7O0FBRTdDO0VBQ0csa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQixFQUFBOztBQUUxQjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQ0YsRUFBQTs7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFHbEIseUNBQW9EO0VBQ3BELGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsMENBQTBDLEVBQUE7O0FBc0Q1QztFQUNFLHFEQUFvRDtFQUNwRCx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2ZpbGUtdXBsb2FkLWZvcm1hdHtcbiAgcGFkZGluZzogNDBweDtcbn1cbiNmaWxlLXVwbG9hZC1mb3JtYXQgLmZpbGVzdHlsZXtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYnRuLXN0eWxle1xuICAtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmltYWdlLWJveHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1hZ2UtYm94IGltZ3tcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udXBsb2FkaW1hZ2UtZHJhZ25kcm9wIHtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogZGFzaGVkIDJweCB2YXIoLS1kYXNoYm9yZGVyLWNvbG9yKTsgXG4gIH1cbiAudXBsb2FkLWltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTIlO1xuICAgIHdpZHRoOiA1MXB4O1xuICAgIGhlaWdodDogMzNweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnVwbG9hZC1pbWFnZS1ib3h7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXNoYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXJcbn1cbi51cGxvYWQtaW1hZ2UtYm94IGltZ3tcbiAgaGVpZ2h0OiAxMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4udGl0bGUtd2l0aC1pY297XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggMHB4IHJnYmEoMTQ4LDE0OCwxNDgsMSk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggMHB4IHJnYmEoMTQ4LDE0OCwxNDgsMSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IDBweCByZ2IoMjE2LCAyMTAsIDIxMCk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50aXRsZS13aXRoLWljbyBpbWd7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4gICAgIFxuLnVwbG9hZGltYWdlLWRyYWduZHJvcCB7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBkYXNoZWQgMnB4IHZhcigtLWRhc2hib3JkZXItY29sb3IpOyBcbiAgfVxuXG5cbi8vICAgLnN3aXRjaCB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICB3aWR0aDogNDBweDtcbi8vICAgICBoZWlnaHQ6IDE1cHg7XG4vLyB9XG4vLyAudG9vZ2xlLXNsaWRlLnJvdW5kIHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gfVxuLy8gLnRvb2dsZS1zbGlkZSB7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICB0b3A6IDBweDtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIGJvdHRvbTogMDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4vLyAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4vLyAgICAgdHJhbnNpdGlvbjogLjRzO1xuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG4vLyB9XG4vLyAudG9vZ2xlLXNsaWRlLnJvdW5kOmJlZm9yZSB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gfVxuLy8gLnRvb2dsZS1zbGlkZTpiZWZvcmUge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgIGhlaWdodDogMjBweDtcbi8vICAgICB3aWR0aDogMjBweDtcbi8vICAgICBsZWZ0OiAtMnB4O1xuLy8gICAgIHRvcDogLTVweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcikgIWltcG9ydGFudDtcbi8vICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbi8vICAgICB0cmFuc2l0aW9uOiAuNHM7XG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRncmF5LWNvbG9yKTtcbi8vIH1cbi8vIGlucHV0OmNoZWNrZWQgKyAudG9vZ2xlLXNsaWRlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcbi8vIH1cblxuLy8gaW5wdXQ6Zm9jdXMgKyAudG9vZ2xlLXNsaWRlIHtcbi8vICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1yZWQtY29sb3IpO1xuLy8gfVxuXG4vLyBpbnB1dDpjaGVja2VkICsgLnRvb2dsZS1zbGlkZTpiZWZvcmUge1xuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcbi8vICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xuLy8gfVxuXG4udm9pbGV0Qkd7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcHVycGxlLWNvbG9yKSFpbXBvcnRhbnQ7ICAgIFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICB9XG5cblxuXG5cblxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/admin/form/form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/admin/form/form.component.ts ***!
  \****************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/alert.service */ "./src/app/service/alert.service.ts");
/* harmony import */ var src_app_class_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/class/data */ "./src/app/class/data.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let FormComponent = class FormComponent {
    constructor(router, alertService, firestore, activatedRoute) {
        this.router = router;
        this.alertService = alertService;
        this.firestore = firestore;
        this.activatedRoute = activatedRoute;
        this.iconField = src_app_class_data__WEBPACK_IMPORTED_MODULE_4__["icons_and_fields"];
        this.value = {
            label: '',
            value: false
        };
        this.pictureChoiceValue = {
            label: '',
            value: false,
            img: '',
            name: '',
        };
        this.showBtn = false;
        this.hideClass = 'mainshow';
        this.showNav = true;
        this.numberArray = [1, 2, 3, 4, 5];
        this.success = false;
        this.showProperties = false;
        this.selectedItem = {};
        this.currentPageIndex = 0;
        this.report = false;
        this.reports = [];
        // dropdown for show email and phone list for validation
        this.emailDropdownList = [];
        this.emailSettings = {};
        this.phoneSettings = {};
        this.phoneDropdownList = [];
        this.httpSettings = {};
        this.httpDropdownList = [];
        this.comSettings = {};
        this.comDropdownList = [];
        this.fontSettings = {};
        this.FontDropdownList = [];
        this.assingToUser = {
            email: '',
            phone: ''
        };
        this.conditionalQuesList = [];
        this.conditionalAnsList = [];
        this.showGenSetting = true;
        // for assign model
        this.selfAssing = true;
        this.FontStyleArray = [
            {
                name: 'Arial',
                fontStyle: { fontFamily: 'Arial' }
            },
            {
                name: 'Helvetica',
                fontStyle: { fontFamily: 'Helvetica' }
            },
            {
                name: 'Times New Roman',
                fontStyle: { fontFamily: 'Times New Roman' }
            },
            {
                name: 'Poppins',
                fontStyle: { fontFamily: 'Poppins' }
            },
            {
                name: 'Courier New',
                fontStyle: { fontFamily: 'Courier New' }
            },
            {
                name: 'Courier',
                fontStyle: { fontFamily: 'Courier' }
            },
            {
                name: 'Verdana',
                fontStyle: { fontFamily: 'Verdana' }
            },
            {
                name: 'Georgia',
                fontStyle: { fontFamily: 'Georgia' }
            },
            {
                name: 'Palatino',
                fontStyle: { fontFamily: 'Palatino' }
            },
            {
                name: 'Garamond',
                fontStyle: { fontFamily: 'Garamond' }
            },
            {
                name: 'Bookman',
                fontStyle: { fontFamily: 'Bookman' }
            },
            {
                name: 'Comic Sans MS',
                fontStyle: { fontFamily: 'Comic Sans MS' }
            },
            {
                name: 'Trebuchet MS',
                fontStyle: { fontFamily: 'Trebuchet MS' }
            },
        ];
        this.formStorge = [];
        this.form_Id = '';
        this.alertService.showLoader('Loading....');
        setTimeout(() => {
            $('[data-toggle="tooltip"]').tooltip();
        }, 0);
        // this.formStorge = JSON.parse(localStorage.getItem('formList'));
        this.subscribeRouteChanges();
    }
    ngOnInit() {
        this.showNavbar();
        this.emailDropdownList = [
            {
                id: 1,
                label: 'Gmail',
                pattern: '@Gmail.com',
            },
            {
                id: 2,
                label: 'Outlook',
                pattern: '@Outlook.com',
            },
            {
                id: 3,
                label: 'Yahoo',
                pattern: '@Yahoo.com',
            },
            {
                id: 4,
                label: 'Zoho',
                pattern: '@Zoho.com',
            },
            {
                id: 5,
                label: 'Mail',
                pattern: '@Mail.com',
            },
            {
                id: 6,
                label: 'ProtonMail',
                pattern: '@ProtonMail.com',
            },
            {
                id: 7,
                label: 'GMX',
                pattern: '@GMX.com',
            },
        ];
        this.emailSettings = {
            singleSelection: false,
            idField: 'pattern',
            textField: 'label',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 2,
            allowSearchFilter: true
        };
        this.phoneSettings = {
            singleSelection: false,
            idField: 'pattern',
            textField: 'label',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 2,
            allowSearchFilter: true
        };
        this.phoneDropdownList = [
            {
                id: 1,
                label: 'India',
                pattern: '+91',
            },
            {
                id: 2,
                label: 'pakistan',
                pattern: 'pakian',
            },
            {
                id: 3,
                label: 'BanglaDesh',
                pattern: 'Banglesh',
            },
            {
                id: 4,
                label: 'china',
                pattern: 'chia',
            },
            {
                id: 5,
                label: 'japan',
                pattern: 'jaan',
            },
            {
                id: 6,
                label: 'U S A',
                pattern: 'usa',
            },
            {
                id: 7,
                label: 'Brazil',
                pattern: '@Gmail.com',
            },
        ];
        this.httpSettings = {
            singleSelection: false,
            idField: 'pattern',
            textField: 'label',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 2,
            allowSearchFilter: false,
        };
        this.httpDropdownList = [
            {
                id: 1,
                label: 'HTTP://',
                pattern: 'http://',
            },
            {
                id: 2,
                label: 'HTTPS://',
                pattern: 'https://',
            },
        ];
        this.comSettings = {
            singleSelection: false,
            idField: 'pattern',
            textField: 'label',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 2,
            allowSearchFilter: true
        };
        this.comDropdownList = [
            {
                id: 1,
                label: '.Com',
                pattern: '.com',
            },
            {
                id: 2,
                label: '.IN',
                pattern: '.in',
            },
            {
                id: 3,
                label: '.CO',
                pattern: '.co',
            },
            {
                id: 4,
                label: '.NET',
                pattern: '.net',
            },
            {
                id: 5,
                label: '.CO.IN',
                pattern: '.co.in',
            },
            {
                id: 6,
                label: '.NET.IN',
                pattern: '.net.in',
            },
            {
                id: 7,
                label: '.EDU',
                pattern: '.edu',
            },
        ];
        this.fontSettings = {
            singleSelection: true,
            idField: 'fontStyle',
            textField: 'name',
            allowSearchFilter: true
        };
        this.FontDropdownList = [
            {
                name: 'Arial',
                fontStyle: { fontFamily: 'Arial' }
            },
            {
                name: 'Helvetica',
                fontStyle: { fontFamily: 'Helvetica' }
            },
            {
                name: 'Times New Roman',
                fontStyle: { fontFamily: 'Times New Roman' }
            },
            {
                name: 'Courier New',
                fontStyle: { fontFamily: 'Courier New' }
            },
            {
                name: 'Courier',
                fontStyle: { fontFamily: 'Courier' }
            },
            {
                name: 'Verdana',
                fontStyle: { fontFamily: 'Verdana' }
            },
            {
                name: 'Georgia',
                fontStyle: { fontFamily: 'Georgia' }
            },
            {
                name: 'Palatino',
                fontStyle: { fontFamily: 'Palatino' }
            },
            {
                name: 'Garamond',
                fontStyle: { fontFamily: 'Garamond' }
            },
            {
                name: 'Bookman',
                fontStyle: { fontFamily: 'Bookman' }
            },
            {
                name: 'Comic Sans MS',
                fontStyle: { fontFamily: 'Comic Sans MS' }
            },
            {
                name: 'Trebuchet MS',
                fontStyle: { fontFamily: 'Trebuchet MS' }
            },
        ];
    }
    subscribeRouteChanges() {
        this.activatedRoute.queryParams
            .subscribe((e) => {
            // tslint:disable-next-line: radix
            console.log(e);
            this.form_Id = e.formId;
            this.getformById(this.form_Id);
        }, (err) => {
            this.router.navigate(['/process']);
        });
    }
    getformById(id) {
        this.firestore.collection('formList').doc(id).get().subscribe(doc => {
            this.model = doc.data();
            this.changeFontStyle(this.model.theme.fontFamily);
            this.changeQuestColor();
            this.changeAnsColor();
            this.formCurrentPage = this.model.attributes[this.currentPageIndex];
            //   console.log(this.model);
            console.log(doc.data());
            this.alertService.closeLoader();
        });
    }
    allowDrop(event) {
    }
    drop(event) {
    }
    onDragStart(event) {
        console.log('drag started', JSON.stringify(event, null, 2));
    }
    onDragEnd(event) {
        console.log('drag ended', JSON.stringify(event, null, 2));
    }
    onDraggableCopied(event) {
        console.log('draggable copied', JSON.stringify(event, null, 2));
    }
    onDraggableLinked(event) {
        console.log('draggable linked', JSON.stringify(event, null, 2));
    }
    onDragged(item, list, effect) {
        if (effect === 'move') {
            const index = list.indexOf(item);
            list.splice(index, 1);
        }
    }
    onDragCanceled(event) {
        console.log('drag cancelled', JSON.stringify(event, null, 2));
    }
    onDragover(event) {
        console.log('dragover', JSON.stringify(event, null, 2));
    }
    onDrop(event, list) {
        console.log(event);
        console.log(list);
        let index = event.index;
        if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
            if (event.dropEffect === 'copy') {
                event.data.name = event.data.fielType + '-' + new Date().getTime();
                event.data.id = new Date().getTime();
            }
            if (typeof index === 'undefined') {
                index = list.length;
            }
            list.splice(index, 0, event.data);
        }
        this.currentValidation(event.data, index);
    }
    dblclickMove(event, list, item) {
        console.log(event);
        item.name = item.fielType + '-' + new Date().getTime();
        item.id = new Date().getTime();
        console.log(item);
        list.splice(list.length, 0, JSON.parse(JSON.stringify(item)));
        console.log(list);
        this.currentValidation(item, list.length - 1);
    }
    currentValidation(item, i) {
        delete this.selectedItem;
        console.log(i);
        this.showProperties = true;
        this.selectedItem = item;
        this.checkConditionalQuest();
        this.currentFieldIndex = i;
        this.showGenSetting = false;
    }
    changeSelectValidation(event) {
        console.log(event);
        console.log('its working bro');
    }
    checkConditionalQuest() {
        this.conditionalQuesList = [];
        this.formCurrentPage.field.forEach(element => {
            // tslint:disable-next-line: max-line-length
            if ((element.fielType === 'yesNo') || (element.fielType === 'trueFalse') || (element.fielType === 'picture') || (element.fielType === 'multiple') || (element.fielType === 'dropdown')) {
                if (this.selectedItem.id !== element.id) {
                    this.conditionalQuesList.push(element);
                }
            }
        });
    }
    onChange(val) {
        console.log(val);
        console.log('its clcik');
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
    addValue(values) {
        values.push(this.value);
        this.value = { label: '', value: false };
    }
    addPicture(values) {
        values.push(this.pictureChoiceValue);
        this.pictureChoiceValue = {
            label: '',
            value: false,
            img: '',
            name: '',
        };
    }
    onSelectFile(event, val) {
        if (event.target.files && event.target.files[0]) {
            val.name = event.target.files[0].name;
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            // tslint:disable-next-line: no-shadowed-variable
            reader.onload = (event) => {
                console.log(event);
                val.img = event.target.result;
            };
        }
    }
    uploadFileClick(id) {
        document.getElementById(id).click();
    }
    generateDynamicArray(item, no) {
        console.log(no);
        item.ratingArray.splice(0, item.ratingArray.length);
        for (let i = 0; i < no; i++) {
            item.ratingArray.push(i);
            console.log(i, no);
        }
        // item.ratingArray = item.ratingArray;
        console.log(item.ratingArray);
    }
    removeField(i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'Do you want to remove this field?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove!'
        }).then((result) => {
            if (result.value) {
                this.formCurrentPage.field.splice(i, 1);
                delete this.selectedItem;
                this.selectedItem = this.formCurrentPage.field[i - 1];
            }
        });
    }
    removePage(i, mesg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'Do you want to remove ' + mesg + ' Page?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove!'
        }).then((result) => {
            if (result.value) {
                // if (i > this.model.attributes.length) {
                //   this.model.attributes.splice(i, 1);
                //   delete this.formCurrentPage;
                //   this.formCurrentPage = this.model.attributes[i - 1];
                // } else {
                //   this.formCurrentPage = [];
                // }
                this.deletePage(i);
            }
        });
    }
    showNavbar() {
        if (this.showBtn) {
            this.showNav = false;
            this.hideClass = 'mainhide';
        }
        else {
            this.showNav = true;
            this.hideClass = 'mainshow';
        }
        this.showBtn = !this.showBtn;
    }
    submitbtn(navigate) {
        let errorCount = 0;
        let checkAllCond = 0;
        let checkPageCond = 0;
        this.model.attributes.forEach(element => {
            element.field.forEach(el => {
                if (el.makeItCondsnl) {
                    checkPageCond++;
                }
                if (((el.fielType === 'email') && (el.emailList.length < 1))) {
                    el.emailList = this.emailDropdownList;
                }
                if (((el.fielType === 'phone') && (el.phoneList.length < 1))) {
                    el.phoneList = this.phoneDropdownList;
                }
                if (((el.fielType === 'website') && (el.httpList.length < 1))) {
                    el.httpList = this.httpDropdownList;
                }
                if (((el.fielType === 'website') && (el.comList.length < 1))) {
                    el.comList = this.comDropdownList;
                }
                if ((el.fielType === 'multiple') || (el.fielType === 'dropdown') || (el.fielType === 'picture') || (el.fielType === 'file')) {
                    if (!this.isValidObject(el.validOption)) {
                        el.validOption = {};
                    }
                }
                if (el.makeItCondsnl && !this.isValidObject(el.ConditionalQuest.answers)) {
                    errorCount++;
                    this.alertService.showErrorAlert('please Check the Condition  to Make conditional Question of ' + el.label);
                }
            });
            if (!(checkPageCond < element.field.length)) {
                this.alertService.showErrorAlert('please Check the Condition  You may  Make All the Question conditional  of page ' + element.name);
                checkAllCond++;
            }
        });
        if ((errorCount < 1) && (checkAllCond < 1)) {
            this.alertService.showSuccessToast('Form Save Successfuly');
            this.firestore.collection('formList').doc(this.form_Id).update(this.model);
        }
        if ((navigate && (errorCount < 1)) && (checkAllCond < 1)) {
            $('#assingModel').modal('show');
        }
    }
    makeItConditional(item, val) {
        item.makeItCondsnl = val;
        if (!val) {
            item.ConditionalQuest = {
                showIf: true,
                question: {},
                answers: {}
            };
        }
    }
    goToForm() {
        $('#assingModel').modal('hide');
        // this.router.navigate(['/formView'], { queryParams: { formId: this.form_Id } });
        const win = window.open('https://ncbpm-1.firebaseapp.com/formView?formId=' + this.form_Id, '_blank');
        win.focus();
    }
    changeFontStyle(val) {
        this.model.theme.fontFamily = val;
        $('.name-input').css('fontFamily', val);
        // const nodes = document.getElementsByClassName('name-input') as HTMLCollectionOf<HTMLElement>;
        // for (let i = 0; i < nodes.length; i++) {
        //   // const node = nodes[i].getElementsByClassName('name-input') as HTMLCollectionOf<HTMLElement>;
        //   // for (let j = 0; j < node.length; j++) {
        //   nodes[i].style.fontFamily = val;
        //   //   console.log(node[j]);
        //   //   // tslint:disable-next-line: no-debugger
        //   //   debugger;
        //   // }
        // }
    }
    changeQuestColor() {
        const nodes = document.getElementsByClassName('maker-input');
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i].getElementsByClassName('name-input');
            for (let j = 0; j < node.length; j++) {
                node[j].style.color = this.model.theme.qestColor;
            }
        }
    }
    changeAnsColor() {
        const nodes = document.getElementsByClassName('user-input');
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i].getElementsByClassName('name-input');
            for (let j = 0; j < node.length; j++) {
                node[j].style.color = this.model.theme.ansColor;
            }
        }
    }
    addPages() {
        console.log(this.formCurrentPage);
        console.log('add page');
        this.model.attributes.push({ name: 'Page  ' + (this.model.attributes.length + 1), field: [] });
        console.log(this.model.attributes);
        this.formCurrentPage = this.model.attributes[this.model.attributes.length - 1];
        this.currentPageIndex = this.model.attributes.length - 1;
        console.log(this.formCurrentPage);
    }
    goToPage(index) {
        this.currentPageIndex = index;
        this.formCurrentPage = this.model.attributes[this.currentPageIndex];
    }
    deletePage(index) {
        console.log('delete Page');
        this.model.attributes.splice(index, 1);
        this.currentPageIndex = index;
        if (this.model.attributes.length == this.currentPageIndex) {
            this.currentPageIndex--;
        }
        if (this.currentPageIndex < 0) {
            this.currentPageIndex = 0;
            this.model.attributes.push({ name: 'Page 1', field: [] });
        }
        this.formCurrentPage = this.model.attributes[this.currentPageIndex];
    }
    navigateToPage(val) {
        this.currentPageIndex = this.currentPageIndex + val;
        this.formCurrentPage = this.model.attributes[this.currentPageIndex];
    }
    editPageName(page) {
        this.formCurrentPage = page;
    }
    validationSelect(val) {
        this.selectedItem.validOption = val;
        console.log(val);
        console.log(this.selectedItem.validOption);
    }
    updateForm() {
        // let input = new FormData;
        // input.append('id', this.model._id);
        // input.append('name', this.model.name);
        // input.append('description', this.model.description);
        // input.append('bannerImage', this.model.theme.bannerImage);
        // input.append('bgColor', this.model.theme.bgColor);
        // input.append('textColor', this.model.theme.textColor);
        // input.append('attributes', JSON.stringify(this.formCurrentPage));
        // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
        //   console.log(r);
        //   swal('Success','App updated successfully','success');
        // });
    }
    initReport() {
        this.report = true;
        let input = {
            id: this.model._id
        };
        // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
        //   this.reports = r.data;
        //   console.log('reports',this.reports);
        //   this.reports.map(records=>{
        //     return records.attributes.map(record=>{
        //       if(record.type=='checkbox'){
        //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
        //       }
        //     })
        //   });
        // });
    }
    toggleValue(item) {
        item.selected = !item.selected;
    }
    submit() {
        let valid = true;
        let validationArray = JSON.parse(JSON.stringify(this.formCurrentPage));
        validationArray.reverse().forEach(field => {
            console.log(field.label + '=>' + field.required + '=>' + field.value);
            if (field.required && !field.value && field.type != 'checkbox') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error', 'Please enter ' + field.label, 'error');
                valid = false;
                return false;
            }
            if (field.required && field.regex) {
                let regex = new RegExp(field.regex);
                if (regex.test(field.value) == false) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error', field.errorText, 'error');
                    valid = false;
                    return false;
                }
            }
            if (field.required && field.type == 'checkbox') {
                if (field.values.filter(r => r.selected).length == 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Error', 'Please enterrr ' + field.label, 'error');
                    valid = false;
                    return false;
                }
            }
        });
        if (!valid) {
            return false;
        }
        console.log('Save', this.model);
        let input = new FormData;
        input.append('formId', this.model._id);
        input.append('attributes', JSON.stringify(this.formCurrentPage));
        // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
        //   console.log(r);
        //   swal('Success','You have contact sucessfully','success');
        //   this.success = true;
        // },error=>{
        //   swal('Error',error.message,'error');
        // });
    }
};
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! ./form.component.html */ "./src/app/pages/admin/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/pages/admin/form/form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]))
], FormComponent);



/***/ }),

/***/ "./src/app/pages/admin/form/form.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/admin/form/form.module.ts ***!
  \*************************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/ngx-drag-drop.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-routing.module */ "./src/app/pages/admin/form/form-routing.module.ts");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form.component */ "./src/app/pages/admin/form/form.component.ts");








let FormModule = class FormModule {
};
FormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _form_routing_module__WEBPACK_IMPORTED_MODULE_6__["FormRoutingModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DndModule"],
        ]
    })
], FormModule);



/***/ })

}]);
//# sourceMappingURL=form-form-module.js.map