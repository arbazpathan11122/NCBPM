(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["publish-publish-module"],{

/***/ "./src/app/pages/admin/publish/publish-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/publish/publish-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PublishRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishRoutingModule", function() { return PublishRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _publish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publish.component */ "./src/app/pages/admin/publish/publish.component.ts");




const routes = [
    {
        path: '',
        component: _publish_component__WEBPACK_IMPORTED_MODULE_3__["PublishComponent"],
    }
];
let PublishRoutingModule = class PublishRoutingModule {
};
PublishRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PublishRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin/publish/publish.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/publish/publish.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <div class=\"ml-5\">\n    <div class=\"d-flex flex-row\" style=\"width: max-content; \">\n\n      <div class=\"p-3 text-center mt-5 ml-2\">\n        <img class=\"m-auto\" src=\"assets/img/file-per-req.png\" height=\"50px\">\n        <p style=\"font-size: 15px\" class=\" mt-3 text-center\">\n          Purchase<br> Riquition\n        </p>\n      </div>\n\n      <div class=\"align-self-center\">\n        <div class=\"d-flex flex-row\">\n          <hr style=\"width: 20px; border:1px dashed var(--lightgray-color);\">\n        </div>\n      </div>\n\n      <div class=\"\">\n        <div class=\"card tastCard\">\n          <div class=\"card-header\">\n            <a id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <div class=\"nav-link active dropdown-toggle p-0\">Select Task <i class=\"fa fa-angle-down float-right\"\n                  aria-hidden=\"true\"></i></div>\n            </a>\n            <div class=\"dropdown-menu publishdopmenu\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item hoverColor\">Request</a>\n              <a class=\"dropdown-item hoverColor\">Preparation</a>\n              <a class=\"dropdown-item hoverColor\">View</a>\n              <a class=\"dropdown-item hoverColor\">Approve</a>\n            </div>\n          </div>\n          <div class=\"card-body\" data-toggle=\"modal\" data-target=\"#publishPageModel\">\n            <div class=\"userList\">\n              <div class=\"row\">\n                <div class=\"col-md-3 mr-0\">\n                  <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                </div>\n                <div class=\"col-md-9 pl-2\">\n                  <div class=\"title\">\n                    Shirley Setia\n                  </div>\n                  <div class=\"text-info\">\n                    shirley23@gmail.com\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                <div class=\"col-md-3 mr-0\">\n                  <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                </div>\n                <div class=\"col-md-9 pl-2\">\n                  <div class=\"title\">\n                    Shirley Setia\n                  </div>\n                  <div class=\"text-info\">\n                    shirley23@gmail.com\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-3 mr-0\">\n                  <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                </div>\n                <div class=\"col-md-9 pl-2\">\n                  <div class=\"title\">\n                    Shirley Setia\n                  </div>\n                  <div class=\"text-info\">\n                    shirley23@gmail.com\n                  </div>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"align-self-center\">\n        <div class=\"d-flex flex-row\">\n          <hr style=\"width: 20px;border:1px solid var(--lightgray-color);\">\n          <!-- <i class=\"mt-2 fa fa-plus-circle\" aria-hidden=\"true\"></i> -->\n          <img class=\"mt-2 plus-circle-ico\" src=\"assets/img/plus-circle.png\">\n          <!-- <hr style=\"width: 20px;\n     border:1.3px solid #3bb4f2\"> -->\n        </div>\n      </div>\n\n      <div class=\"align-self-center\">\n        <hr style=\"width: 20px; border:1px solid var(--lightgray-color);\">\n      </div>\n      <div class=\"\">\n        <div class=\"card tastCard\">\n          <div class=\"card-header\">\n            <a id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <div class=\"nav-link active dropdown-toggle p-0\">Select Task <i class=\"fa fa-angle-down float-right\"\n                  aria-hidden=\"true\"></i></div>\n            </a>\n            <div class=\"dropdown-menu publishdopmenu\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item hoverColor\">Request</a>\n              <a class=\"dropdown-item hoverColor\">Preparation</a>\n              <a class=\"dropdown-item hoverColor\">View</a>\n              <a class=\"dropdown-item hoverColor\">Approve</a>\n            </div>\n          </div>\n          <div class=\"card-body\" data-toggle=\"modal\" data-target=\"#publishPageModel\">\n            <div class=\"userList\">\n              <div class=\"row\">\n                <div class=\"col-md-3 mr-0\">\n                  <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                </div>\n                <div class=\"col-md-9 pl-2\">\n                  <div class=\"title\">\n                    Shirley Setia\n                  </div>\n                  <div class=\"text-info\">\n                    shirley23@gmail.com\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                <div class=\"col-md-3 mr-0\">\n                  <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                </div>\n                <div class=\"col-md-9 pl-2\">\n                  <div class=\"title\">\n                    Shirley Setia\n                  </div>\n                  <div class=\"text-info\">\n                    shirley23@gmail.com\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-3 mr-0\">\n                  <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                </div>\n                <div class=\"col-md-9 pl-2 mt-2\">\n                  <div class=\"title\">\n                    Shirley Setia\n                  </div>\n                  <div class=\"text-info\">\n                    shirley23@gmail.com\n                  </div>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"align-self-center\">\n        <div class=\"d-flex flex-row\">\n          <hr style=\"width: 20px;\n       border:1px solid var(--lightgray-color);\">\n          <img class=\"mt-2 plus-circle-ico\" src=\"assets/img/plus-circle.png\">\n          <!-- <hr style=\"width: 20px;\n       border:1.3px solid #3bb4f2\"> -->\n        </div>\n      </div>\n\n      <div class=\"align-self-center\">\n        <hr style=\"width: 20px;\n            border:1px solid var(--lightgray-color);\">\n      </div>\n\n      <div class=\"\">\n        <div class=\"card tastCard\">\n          <div class=\"card-header\">\n            <a id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <div class=\"nav-link active dropdown-toggle p-0\">Select Task <i class=\"fa fa-angle-down float-right\"\n                  aria-hidden=\"true\"></i></div>\n            </a>\n            <div class=\"dropdown-menu publishdopmenu\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item hoverColor\">Request</a>\n              <a class=\"dropdown-item hoverColor\">Preparation</a>\n              <a class=\"dropdown-item hoverColor\">View</a>\n              <a class=\"dropdown-item hoverColor\">Approve</a>\n            </div>\n          </div>\n          <div class=\"card-body\" data-toggle=\"modal\" data-target=\"#publishPageModel\">\n            <div class=\"userList\">\n              <div class=\"row\">\n                <div class=\"col-md-3 mr-0\">\n                  <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                </div>\n                <div class=\"col-md-9 pl-2\">\n                  <div class=\"title\">\n                    Shirley Setia\n                  </div>\n                  <div class=\"text-info\">\n                    shirley23@gmail.com\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                <div class=\"col-md-3 mr-0\">\n                  <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                </div>\n                <div class=\"col-md-9 pl-2\">\n                  <div class=\"title\">\n                    Shirley Setia\n                  </div>\n                  <div class=\"text-info\">\n                    shirley23@gmail.com\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-3 mr-0\">\n                  <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                </div>\n                <div class=\"col-md-9 pl-2\">\n                  <div class=\"title\">\n                    Shirley Setia\n                  </div>\n                  <div class=\"text-info\">\n                    shirley23@gmail.com\n                  </div>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"align-self-center\">\n        <div class=\"d-flex flex-row\">\n          <hr style=\"width: 20px; border:1px solid var(--lightgray-color);\">\n          <img class=\"mt-2 plus-circle-ico\" src=\"assets/img/plus-circle.png\">\n          <!-- <hr style=\"width: 20px;\n       border:1.3px solid #3bb4f2\"> -->\n        </div>\n      </div>\n\n      <div class=\"align-self-center\">\n        <hr style=\"width: 20px;\n           border:1px solid var(--lightgray-color);\">\n      </div>\n\n      <div class=\"\">\n        <div class=\"card tastCard\">\n          <div class=\"card-header\">\n            <a id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <div class=\"nav-link active dropdown-toggle p-0\">Select Task <i class=\"fa fa-angle-down float-right\"\n                  aria-hidden=\"true\"></i></div>\n            </a>\n            <div class=\"dropdown-menu publishdopmenu\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item hoverColor\">Request</a>\n              <a class=\"dropdown-item hoverColor\">Preparation</a>\n              <a class=\"dropdown-item hoverColor\">View</a>\n              <a class=\"dropdown-item hoverColor\">Approve</a>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"userList\">\n              <div class=\"row\">\n                <!-- <div class=\"col-md-3 mr-0\">\n                    <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                  </div>\n                  <div class=\"col-md-9 pl-2\">\n                    <div class=\"title\">\n                      Shirley Setia\n                    </div>\n                    <div class=\"text-info\">\n                      shirley23@gmail.com\n                    </div>\n                  </div> -->\n                <div class=\"plus-user-content m-auto\">\n                  <img src=\"assets/img/plus-ico.png\"> &nbsp; <span>Assign User</span>\n                </div>\n              </div>\n              <!-- <div class=\"row\">\n                  <div class=\"col-md-3 mr-0\">\n                    <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                  </div>\n                  <div class=\"col-md-9 pl-2\">\n                    <div class=\"title\">\n                      Shirley Setia\n                    </div>\n                    <div class=\"text-info\">\n                      shirley23@gmail.com\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-3 mr-0\">\n                    <img class=\"m-auto userlistimg\" style=\"border-radius: 50px;\" src=\"assets/img/user.jpg\">\n                  </div>\n                  <div class=\"col-md-9 pl-2 mt-2\">\n                    <div class=\"title\">\n                      Shirley Setia\n                    </div>\n                    <div class=\"text-info\">\n                      shirley23@gmail.com\n                    </div>\n                  </div>\n                </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n\n  <div class=\"hide-show-btn\">\n    <button class=\"btn btn-purple btn-publish\" type=\"button\">Move To Publish &nbsp; &nbsp; <i class=\"fa fa-arrow-right\"\n        aria-hidden=\"true\"></i></button>\n  </div>\n\n\n\n\n\n  <div class=\"modal fade\" id=\"publishPageModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-body p-2rem\">\n          <ul class=\"nav nav-pills modal-tab-menu\" id=\"pills-tab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active pl-0 pr-0 mr-4\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\"\n                role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">Users</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link pl-0 pr-0 mr-4\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\"\n                role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">Assignment Rules</a>\n            </li>\n            <button class=\"ml-auto btn btn-purple\">+ Add new</button>\n          </ul>\n\n\n          <div class=\"tab-content  mt-3\" id=\"pills-tabContent\">\n\n            <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n              <div class=\"input-group publish-modal-search\">\n                <div class=\"input-group-prepend\"><span class=\"input-group-text\" id=\"basic-addon1\">\n                    <i class=\"fa fa-search\"></i>\n                  </span>\n                </div>\n                <input aria-describedby=\"basic-addon1\" aria-label=\"Username\" class=\"form-control\"\n                  placeholder=\"Search by username, email Id or category\" style=\"border:none; font-size: 13px;\"\n                  type=\"text\">\n              </div>\n\n              <div class=\"publishmodaluserList\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"modaluserbox mt-4\">\n                      <div class=\"row\">\n                        <div class=\"col-md-3\">\n                          <img class=\"m-auto modal-user-image\" src=\"assets/img/user.jpg\" style=\"border-radius: 50px;\">\n                        </div>\n                        <div class=\"col-md-9 m-auto\">\n                          <div class=\"title\"> Nyaz Khan </div>\n                          <div class=\"text-info\"> khannyaz1705@gmail.com </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"modaluserbox mt-4\">\n                      <div class=\"row\">\n                        <div class=\"col-md-3\">\n                          <img class=\"m-auto modal-user-image\" src=\"assets/img/user.jpg\" style=\"border-radius: 50px;\">\n                        </div>\n                        <div class=\"col-md-9 m-auto\">\n                          <div class=\"title\"> Nyaz Khan </div>\n                          <div class=\"text-info\"> khannyaz1705@gmail.com </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"modaluserbox mt-4\">\n                      <div class=\"row\">\n                        <div class=\"col-md-3\">\n                          <img class=\"m-auto modal-user-image\" src=\"assets/img/user.jpg\" style=\"border-radius: 50px;\">\n                        </div>\n                        <div class=\"col-md-9 m-auto\">\n                          <div class=\"title\"> Nyaz Khan </div>\n                          <div class=\"text-info\"> khannyaz1705@gmail.com </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"modaluserbox mt-4\">\n                      <div class=\"row\">\n                        <div class=\"col-md-3\">\n                          <img class=\"m-auto modal-user-image\" src=\"assets/img/user.jpg\" style=\"border-radius: 50px;\">\n                        </div>\n                        <div class=\"col-md-9 m-auto\">\n                          <div class=\"title\"> Nyaz Khan </div>\n                          <div class=\"text-info\"> khannyaz1705@gmail.com </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"modaluserbox mt-4\">\n                      <div class=\"row\">\n                        <div class=\"col-md-3\">\n                          <img class=\"m-auto modal-user-image\" src=\"assets/img/user.jpg\" style=\"border-radius: 50px;\">\n                        </div>\n                        <div class=\"col-md-9 m-auto\">\n                          <div class=\"title\"> Nyaz Khan </div>\n                          <div class=\"text-info\"> khannyaz1705@gmail.com </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"modaluserbox mt-4\">\n                      <div class=\"row\">\n                        <div class=\"col-md-3\">\n                          <img class=\"m-auto modal-user-image\" src=\"assets/img/user.jpg\" style=\"border-radius: 50px;\">\n                        </div>\n                        <div class=\"col-md-9 m-auto\">\n                          <div class=\"title\"> Nyaz Khan </div>\n                          <div class=\"text-info\"> khannyaz1705@gmail.com </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n                <br>\n                <br>\n              </div>\n\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n              <span class=\"modal-subheading\">Select the rule here in which you want to flow your process</span>\n\n              <div class=\"custom-control custom-radio mb-4 mt-4\">\n                <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">\n                <label class=\"custom-control-label modalradiolable pl-1\" for=\"customRadio1\">All</label><br>\n                <span class=\"pl-1 modal-subheading\">Task Will not be complited untill all assignees do their\n                  tasks</span>\n              </div>\n              <div class=\"custom-control custom-radio mb-4\">\n                <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">\n                <label class=\"custom-control-label modalradiolable pl-1\" for=\"customRadio2\">Round Robbin</label><br>\n                <span class=\"pl-1 modal-subheading\">Task Will not be complited untill all assignees do their\n                  tasks</span>\n              </div>\n              <div class=\"custom-control custom-radio mb-4\">\n                <input type=\"radio\" id=\"customRadio3\" name=\"customRadio\" class=\"custom-control-input\">\n                <label class=\"custom-control-label modalradiolable pl-1\" for=\"customRadio3\">Least Loaded</label><br>\n                <span class=\"pl-1 modal-subheading\">Task Will not be complited untill all assignees do their\n                  tasks</span>\n              </div>\n              <br>\n              <br>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer border-top-none p-2rem\">\n          <button type=\"button\" class=\"btn btn-purple-light\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-purple btn-purple-2\">Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <div class=\"modal fade\" id=\"publishPagetableModel\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n\n        <div class=\"modal-body p-0\" style=\"overflow: scroll\">\n          <table class=\"table publish-modal-table table-bordered\">\n            <thead>\n              <tr>\n                <th scope=\"col\" class=\"pl-4\">S. No.</th>\n                <th scope=\"col\">Name</th>\n                <th scope=\"col\">Email I'd</th>\n                <th scope=\"col\">Mobile</th>\n                <th scope=\"col\">+ Add Field</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\" class=\"pl-4\">1</th>\n                <td contenteditable=\"true\">Shubham</td>\n                <td contenteditable=\"true\">yadavshubham2199@gmail.com</td>\n                <td contenteditable=\"true\">+91 8295796995</td>\n                <td contenteditable=\"true\"> </td>\n              </tr>\n              <tr>\n                <th scope=\"row\" class=\"pl-4\">2</th>\n                <td>Anjali</td>\n                <td>anjalisharma@gmail.com</td>\n                <td>+91 8295796995</td>\n                <td> </td>\n              </tr>\n              <tr>\n                <th scope=\"row\" class=\"pl-4\">3</th>\n                <td>Shubham</td>\n                <td>yadavshubham2199@gmail.com</td>\n                <td>+91 8295796995</td>\n                <td></td>\n              </tr>\n              <tr>\n                <th scope=\"row\" class=\"pl-4\">3</th>\n                <td contenteditable=\"true\"></td>\n                <td>arbazpathan11122@gmail.com</td>\n                <td>+91 6354725638</td>\n                <td> </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"modal-footer border-top-none\">\n          <button type=\"button\" class=\"btn btn-purple-light\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-purple btn-purple-2\">Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button class=\"btn btn-primary\" data-toggle=\"modal\"\n    data-target=\"#publishPagetableModel\">Table Modal</button>"

/***/ }),

/***/ "./src/app/pages/admin/publish/publish.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/publish/publish.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tastCard {\n  border: 2px solid var(--primary-color);\n  margin-top: 50px;\n  border-radius: 10px; }\n\n.tastCard .card-header {\n  width: 94%;\n  margin-left: 3%;\n  margin-top: -28px;\n  background-color: var(--primary-color);\n  border-radius: 10px;\n  color: var(--white-color); }\n\n.card-body {\n  padding: 40px 15px;\n  width: 215px; }\n\n.card-header {\n  padding: .5rem 1.25rem; }\n\n.tastCard .text-info {\n  color: var(--black-color) !important;\n  font-size: 12px; }\n\n.userList {\n  overflow: hidden;\n  height: 11vh; }\n\n.userlistimg {\n  height: 40px;\n  width: 40px; }\n\n.plus-circle-ico {\n  height: 20px;\n  width: 20px; }\n\n.hide-show-btn {\n  position: fixed;\n  bottom: 30px;\n  right: 80px;\n  z-index: 999; }\n\n.vl {\n  border-left: 3px solid green;\n  height: 28px;\n  margin-left: 50%; }\n\n.modal-tab-menu {\n  -border: 1px solid red; }\n\n.modal-tab-menu li a {\n  font-weight: 500;\n  font-size: 18px;\n  border: 2px solid transparent;\n  border-radius: 0px;\n  color: var(--Font-light-color); }\n\n.modal-tab-menu li a:hover:active {\n  border-bottom: 2px solid var(--main-purple-color); }\n\n#publishPageModel .nav-pills .nav-link.active {\n  color: var(--main-purple-color) !important;\n  border-bottom: 2px solid var(--main-purple-color); }\n\n.btn-publish {\n  padding: 15px 25px !important; }\n\n.publish-modal-search {\n  border: 1px solid #ced4da;\n  padding: 2px;\n  border-radius: 7px; }\n\n.modal-user-image {\n  height: 45px;\n  width: 45px; }\n\n.modaluserbox {\n  border: 1px solid #ced4da;\n  overflow: hidden;\n  border-radius: 7px;\n  padding: 15px; }\n\n.modaluserbox .text-info {\n  overflow: hidden;\n  color: var(--black-color) !important;\n  font-size: 12px; }\n\n.modalradiolable {\n  font-size: 19px;\n  color: var(--Font-light-color);\n  margin-bottom: 4px; }\n\n.modal-subheading {\n  color: var(--lightgray-color);\n  font-size: 15px; }\n\n.p-2rem {\n  padding: 2rem; }\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: var(--main-purple-color) !important;\n  border: 2px solid var(--main-purple-color) !important;\n  background-color: var(--main-purple-color) !important; }\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: none;\n  font-size: 19px;\n  font-weight: 500; }\n\n.publishdopmenu {\n  position: absolute;\n  will-change: transform;\n  top: 0px;\n  left: 0px;\n  transform: translate3d(9px, 11px, 0px) !important;\n  width: 91% !important; }\n\n.publishdopmenu .dropdown-item {\n  padding: .5rem 1.5rem !important;\n  font-size: 14px !important; }\n\n.card-header .nav-link {\n  font-size: 15px !important; }\n\n.plus-user-content span {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255YXovbmNicG0vbmNicG0wMWZpcmViYXNlL3NyYy9hcHAvcGFnZXMvYWRtaW4vcHVibGlzaC9wdWJsaXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksb0NBQW9DO0VBQ3BDLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUVoQjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVmO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSSxzQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZTtFQUNmLGVBQWU7RUFDZiw2QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLGlEQUFnRCxFQUFBOztBQUVwRDtFQUNJLDBDQUEwQztFQUMxQyxpREFBaUQsRUFBQTs7QUFFckQ7RUFDSSw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSx5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSx5QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBYztFQUNkLDhCQUE4QjtFQUM5QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSw2QkFBNkI7RUFDN0IsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSwwQ0FBMEM7RUFDMUMscURBQXFEO0VBQ3JELHFEQUFxRCxFQUFBOztBQUV6RDtFQUNJLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxpREFBaUQ7RUFDakQscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksZ0NBQWdDO0VBQ2hDLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3B1Ymxpc2gvcHVibGlzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXN0Q2FyZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGFzdENhcmQgLmNhcmQtaGVhZGVye1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbn1cbi5jYXJkLWJvZHl7XG4gICAgcGFkZGluZzogNDBweCAxNXB4O1xuICAgIHdpZHRoOiAyMTVweDtcbn1cbi5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogLjVyZW0gMS4yNXJlbTtcbn1cbi50YXN0Q2FyZCAgLnRleHQtaW5mb3tcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnVzZXJMaXN0IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTF2aDtcbn1cbi51c2VybGlzdGltZ3tcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG4ucGx1cy1jaXJjbGUtaWNve1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cbi5oaWRlLXNob3ctYnRue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDMwcHg7XG4gICAgcmlnaHQ6IDgwcHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuLnZsIHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyZWVuO1xuICAgIGhlaWdodDogMjhweDtcbiAgICBtYXJnaW4tbGVmdDo1MCU7XG59XG4ubW9kYWwtdGFiLW1lbnV7XG4gICAgLWJvcmRlcjoxcHggc29saWQgcmVkO1xufVxuLm1vZGFsLXRhYi1tZW51IGxpIGF7XG4gICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBjb2xvcjogdmFyKC0tRm9udC1saWdodC1jb2xvcik7XG59XG4ubW9kYWwtdGFiLW1lbnUgbGkgYTpob3ZlcjphY3RpdmV7XG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tbWFpbi1wdXJwbGUtY29sb3IpO1xufVxuI3B1Ymxpc2hQYWdlTW9kZWwgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZle1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXB1cnBsZS1jb2xvcikgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWFpbi1wdXJwbGUtY29sb3IpO1xufVxuLmJ0bi1wdWJsaXNoe1xuICAgIHBhZGRpbmc6IDE1cHggMjVweCAhaW1wb3J0YW50O1xufVxuLnB1Ymxpc2gtbW9kYWwtc2VhcmNoe1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NlZDRkYTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLm1vZGFsLXVzZXItaW1hZ2V7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xufVxuLm1vZGFsdXNlcmJveHtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5tb2RhbHVzZXJib3ggLnRleHQtaW5mb3tcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcikgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tb2RhbHJhZGlvbGFibGV7XG4gICAgZm9udC1zaXplOjE5cHg7XG4gICAgY29sb3I6IHZhcigtLUZvbnQtbGlnaHQtY29sb3IpO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5tb2RhbC1zdWJoZWFkaW5ne1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGdyYXktY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wLTJyZW17XG4gICAgcGFkZGluZzogMnJlbTtcbn1cbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1wdXJwbGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1wdXJwbGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wdXJwbGUtY29sb3IpICFpbXBvcnRhbnQ7XG59XG4udGFibGUgdGhlYWQgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wdWJsaXNoZG9wbWVudXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg5cHgsIDExcHgsIDBweCkgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTElICFpbXBvcnRhbnQ7XG59XG4ucHVibGlzaGRvcG1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHBhZGRpbmc6IC41cmVtIDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtaGVhZGVyIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4ucGx1cy11c2VyLWNvbnRlbnQgc3BhbntcbiAgICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/publish/publish.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/publish/publish.component.ts ***!
  \**********************************************************/
/*! exports provided: PublishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishComponent", function() { return PublishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PublishComponent = class PublishComponent {
    constructor() { }
    ngOnInit() {
    }
};
PublishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publish',
        template: __webpack_require__(/*! ./publish.component.html */ "./src/app/pages/admin/publish/publish.component.html"),
        styles: [__webpack_require__(/*! ./publish.component.scss */ "./src/app/pages/admin/publish/publish.component.scss")]
    })
], PublishComponent);



/***/ }),

/***/ "./src/app/pages/admin/publish/publish.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin/publish/publish.module.ts ***!
  \*******************************************************/
/*! exports provided: PublishModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishModule", function() { return PublishModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _publish_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publish-routing.module */ "./src/app/pages/admin/publish/publish-routing.module.ts");
/* harmony import */ var _publish_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publish.component */ "./src/app/pages/admin/publish/publish.component.ts");





let PublishModule = class PublishModule {
};
PublishModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_publish_component__WEBPACK_IMPORTED_MODULE_4__["PublishComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _publish_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublishRoutingModule"]
        ]
    })
], PublishModule);



/***/ })

}]);
//# sourceMappingURL=publish-publish-module.js.map