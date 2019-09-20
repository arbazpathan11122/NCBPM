(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap\");\n:root {\n  --main-purple-color: #7130ff;\n  --lightgray-color: #8b8b8b;\n  --black-color: #3c3c3c;\n  --sky-blue: #448ef6;\n  --primary-color: #50ADFF;\n  --success-color: #22c97b;\n  --dashborder-color: #8b8b8b61;\n  --solid-border: #bdbdbd8b;\n  --white-color: #ffffff;\n  --red-color: #ff4c2e;\n  --active-light-grey: #f6f6f6; }\nbody {\n  font-family: 'Poppins', sans-serif; }\n.clearfix {\n  clear: both; }\n.pointer {\n  cursor: pointer; }\n.ucfirst {\n  text-transform: capitalize; }\n.min300 {\n  min-height: 300px; }\n.inline-btn {\n  background: var(--success-color);\n  padding: 1px 5px;\n  color: var(--white-color);\n  display: inline-block;\n  margin-bottom: 5px; }\n.btn-custom {\n  border: 1px solid var(--lightgray-color); }\n.btn-purple {\n  color: var(--white-color);\n  background-color: var(--main-purple-color) !important;\n  border-color: var(--main-purple-color);\n  font-size: 17px;\n  border-radius: 10px;\n  padding: 0 20px; }\n.btn-purple:hover {\n  color: none !important; }\n.btn-purple-2 {\n  padding: 12px 45px !important; }\n.border-top-none {\n  border-top: none !important; }\n.btn-purple-light {\n  color: var(--main-purple-color);\n  font-size: 17px;\n  padding: 15px 30px; }\n.box {\n  padding: 10px;\n  margin-bottom: 10px;\n  overflow: auto;\n  box-shadow: 1px 1px 4px var(--solid-border); }\n.form-group .form-control {\n  font-size: inherit;\n  background-color: inherit; }\n.dndDropArea {\n  -padding: 10px;\n  /* border: dotted var(--solid-border) 2px; */ }\n.dndDropArea.empty {\n  min-height: 600px;\n  border: dotted var(--solid-border) 2px; }\n.field {\n  padding: 0px 10px 30px 10px;\n  margin-bottom: 10px;\n  position: relative; }\n.field:hover {\n  box-shadow: 0 1px 5px 0 rgba(101, 95, 95, 0.3);\n  -background: #f9f9f9; }\n.toggle-Wrapper {\n  padding: 15px;\n  background: var(--active-light-grey); }\n.dndHandle {\n  cursor: pointer;\n  color: var(--lightgray-color); }\n.dndDraggingSource {\n  opacity: 0.3; }\n.dndPlaceholder {\n  background: #ceeeee;\n  border-radius: 2px;\n  padding: 20px;\n  margin-bottom: 10px; }\n.mainshow {\n  margin-top: 90px; }\n.field .fa {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  font-size: 20px;\n  vertical-align: middle; }\n.red {\n  color: var(--red-color); }\n.fa-trash {\n  color: var(--red-color); }\n.marginT60 {\n  margin-top: 60px; }\n.color-red {\n  color: var(--red-color); }\n.report-block {\n  padding: 10px;\n  background: var(--active-light-grey);\n  margin-bottom: 20px; }\n.report-block .row:nth-child(even) {\n  background: var(--white-color); }\n.ftheme {\n  width: 100%; }\n.dndDropArea .field .part-hover-ico {\n  opacity: 0; }\n.dndDropArea .active .part-hover-ico {\n  opacity: 1; }\n.dndDropArea .field:hover .part-hover-ico {\n  color: var(--lightgray-color);\n  opacity: 1; }\n.colorpick {\n  height: 25px;\n  background: var(--white-color);\n  border: none; }\n.navbar {\n  padding: 0 30px;\n  background: var(--white-color);\n  box-shadow: 0 1px 3px 0 rgba(101, 95, 95, 0.3); }\n.navbar-light .navbar-nav .nav-link {\n  padding: 20px;\n  color: var(--black-color);\n  font-size: 17px; }\n.navbar-collapse {\n  display: flex !important; }\n.left-menu li.nav-item.active {\n  border-bottom: 2px solid var(--main-purple-color); }\n.left-menu li.nav-item.active a {\n  color: var(--main-purple-color) !important; }\n.profile-img {\n  height: 50px;\n  width: 50px;\n  border: 1px solid transparent;\n  border-radius: 10px; }\n.lh-49 {\n  line-height: 49px; }\n.process-part {\n  width: 450px; }\n.process-part::after {\n  content: '';\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  height: 1px;\n  width: 70%;\n  background-color: var(--sky-blue);\n  z-index: -1;\n  transform: translateX(-50%); }\n.pro-button {\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  border: 3px solid var(--white-color);\n  box-shadow: 0px 0px 0px 1px var(--sky-blue);\n  background: var(--white-color); }\n.abs-center-x {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%); }\n.dropdown-toggle::after {\n  border-top: none !important; }\n.dropdown-menu {\n  border: transparent;\n  box-shadow: 0px 1px 10px -5px rgba(12, 46, 96, 0.2); }\n.dropdown-toggle {\n  cursor: pointer; }\n.dropdown-item:active {\n  background-color: var(--active-light-grey); }\n.input-group-text {\n  background-color: transparent;\n  border: none !important; }\nlabel {\n  font-size: 15px; }\n.maker-input {\n  display: flex; }\n.maker-input .name-input {\n  order: 2;\n  display: block;\n  margin-top: 0;\n  background: none;\n  padding: 2px 2px 1px;\n  line-height: 26px;\n  height: 30px;\n  border: none;\n  width: 100%;\n  box-sizing: border-box;\n  color: var(--black-color);\n  font-size: 17px; }\n.maker-input .name-input:focus {\n  outline: none; }\n.user-input .name-input {\n  order: 2;\n  margin-top: 0;\n  border-width: 0 0 1px;\n  background: none;\n  padding: 2px 2px 1px;\n  line-height: 26px;\n  height: 35px;\n  border-style: dashed;\n  width: 100%;\n  color: var(--lightgray-color);\n  border-bottom: 1.5px dashed var(--dashborder-color); }\n.property-part .user-input .name-input {\n  border-bottom: 1px dashed var(--solid-border) !important; }\n.user-input .name-input:focus {\n  outline: none; }\n.user-answer {\n  border-bottom: 2px dashed var(--lightgray-color);\n  color: var(--lightgray-color); }\n.nice-lable {\n  padding: 10px 0;\n  font-size: 14px; }\n/*.fixed-bar{\n    height: calc(100vh - 50px);\n    position: fixed;\n    overflow-y: scroll;\n}*/\n/*-------------sidebar icon menues part-------------*/\n.menu-sidebar {\n  -border: 1px solid purple;\n  padding: 20px 25px;\n  height: calc(100vh - 50px);\n  overflow-y: auto;\n  position: fixed; }\n#side-menu {\n  padding: 0; }\n.menu-item {\n  -display: inline-block;\n  position: relative;\n  padding: 15px 5px;\n  cursor: pointer; }\n.menu-item img {\n  height: 25px;\n  width: 25px;\n  float: left;\n  margin: 0 10px 10px 0;\n  position: relative;\n  top: 15px; }\n.menu-item span {\n  font-size: 13px;\n  display: block;\n  color: var(--black-color); }\n.menu-title {\n  letter-spacing: .05em;\n  cursor: default;\n  font-size: 14px; }\n.coming-soon-part {\n  position: relative;\n  overflow: hidden; }\n.coming-soon-part .title-with-ico {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: auto; }\n.coming-soon-part p {\n  background: var(--white-color);\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  font-size: 15px;\n  padding: 0 10px;\n  color: orange; }\n.coming-soon-part:after {\n  content: '';\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: 100%;\n  border-bottom: 1.5px dashed orange;\n  overflow: hidden;\n  z-index: -1; }\n/*-------------working form part-------------*/\n.working-part {\n  overflow: hidden;\n  box-shadow: 0 1px 5px 0 rgba(101, 95, 95, 0.3);\n  height: 100%;\n  margin: auto;\n  background: var(--white-color); }\n.working-part .active {\n  box-shadow: 0 1px 5px 0 rgba(101, 95, 95, 0.3); }\n.formtitle {\n  padding: 35px 50px; }\n.formtitle .page-title {\n  color: var(--lightgray-color);\n  font-size: 13px;\n  font-weight: 400; }\n.form-page-name {\n  border-bottom: 2px dashed var(--dashborder-color);\n  padding: 5px; }\n.mb-40 {\n  margin-bottom: 40px; }\n.mb-35 {\n  margin-bottom: 35px; }\n.file-name {\n  display: flex;\n  text-align: center; }\n.file-name i {\n  margin-right: 10px;\n  font-size: 18px;\n  line-height: 30px;\n  color: var(--black-color); }\n/*-------------formats-------------*/\n/*-----rating css-------*/\nfieldset, label {\n  margin: 0;\n  padding: 0; }\n/****** Style Star Rating Widget *****/\n.rating {\n  border: none;\n  float: left; }\n.rating > input {\n  display: none; }\n.rating > label:before {\n  margin: 5px;\n  font-size: 1.25em;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"\\f006\"; }\n.rating > .half:before {\n  content: \"\\f006\";\n  position: absolute; }\n.rating > label {\n  color: var(--lightgray-color);\n  float: right; }\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating > input:checked ~ label,\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n  color: #FFD700; }\n/* hover previous stars in list */\n.rating > input:checked + label:hover,\n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label,\n.rating > input:checked ~ label:hover ~ label {\n  color: #FFED85; }\n.form-header {\n  font-size: 22px !important;\n  font-weight: 600;\n  color: var(--black-color); }\n/*-------------property part-------------*/\n.property-part {\n  height: calc(100vh - 50px);\n  position: fixed;\n  overflow-y: auto;\n  padding: 15px;\n  right: 0; }\n.property-tab {\n  padding: 15px; }\n.property-tab .tab-content {\n  -border: 1px solid var(--red-color); }\n.text-property {\n  -border: 1px solid var(--red-color); }\n.text-property a {\n  padding: 5px;\n  font-size: 14px; }\n.text-property a img {\n  height: 18px; }\n.part-title {\n  -border: 1px solid var(--red-color);\n  margin-bottom: 15px;\n  font-size: 15px; }\n.add-new-property a {\n  padding: 5px;\n  margin-right: 10px;\n  font-size: 14px;\n  display: inline-grid; }\n.add-new-property span {\n  font-size: 10px;\n  color: var(--lightgray-color);\n  text-align: center; }\n.add-new-property a img {\n  height: 25px; }\n.required-part {\n  line-height: 18px; }\n.inline-selection span {\n  display: inline-block;\n  width: 50%;\n  padding: 0 5px; }\n.theme-setting-color {\n  border-bottom: 2px dashed var(--dashborder-color); }\n.que-color p {\n  display: inline;\n  font-size: 15px; }\n.que-color input {\n  height: 23px;\n  width: 23px !important;\n  position: relative;\n  top: 5px;\n  border-radius: 1px;\n  float: right;\n  padding: 0;\n  margin: 0;\n  background: var(--white-color);\n  border: none; }\n.que-color i {\n  position: relative;\n  top: 5px;\n  font-size: 18px; }\n.form-pages .pages a {\n  color: var(--black-color); }\n.form-pages .pages a:hover {\n  color: var(--primary-color); }\n.form-pages .pages .pages-ico a {\n  opacity: 0; }\n.form-pages .pages:hover .pages-ico a {\n  opacity: 1; }\n.form-pages .pages a:active {\n  color: var(--primary-color); }\n.form-pages .pages:active .pages-ico a {\n  opacity: 1; }\n.mtb {\n  margin: 35px 0; }\n.multiselect-dropdown {\n  position: relative;\n  width: 100%;\n  font-size: inherit;\n  font-family: inherit;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  box-shadow: inset 0px 0px 5px 0px var(--dashborder-color); }\n.multiselect-dropdown .dropdown-btn .selected-item {\n  border: none !important;\n  background: var(--white-color) !important;\n  color: var(--black-color) !important;\n  font-size: 15px !important; }\n.multiselect-dropdown .dropdown-btn .selected-item a {\n  color: var(--red-color) !important; }\n.multiselect-item-checkbox input[type=checkbox] + div:before {\n  border: 2px solid var(--active-light-grey) !important; }\n.multiselect-dropdown .dropdown-btn {\n  border-bottom: 1px solid var(--active-light-grey) !important;\n  border-top: none !important;\n  border-right: none !important;\n  border-left: none !important;\n  border-radius: 0px !important;\n  font-size: 15px; }\n.multiselect-dropdown .dropdown-btn .dropdown-down {\n  border-top: 7px solid var(--active-light-grey) !important;\n  border-left: 7px solid transparent !important;\n  border-right: 7px solid transparent !important; }\n.multiselect-dropdown .dropdown-btn .dropdown-up {\n  border-bottom: 7px solid var(--active-light-grey) !important;\n  border-left: 7px solid transparent !important;\n  border-right: 7px solid transparent !important; }\n.multiselect-item-checkbox input[type=checkbox]:checked + div:before {\n  border: 2px solid #337ab7 !important; }\n.dropdown-list li {\n  border-bottom: 1px solid var(--active-light-grey) !important; }\n.dropdown-list .filter-textbox {\n  border-bottom: 1px solid var(--active-light-grey) !important; }\n.dropdown-list {\n  border: 1px solid var(--active-light-grey) !important;\n  padding-top: 0px !important;\n  margin-top: 5px !important;\n  box-shadow: none !important; }\n.dropdown-list ul {\n  padding: 0px 0 !important; }\n.toggle-imag {\n  width: 33px;\n  height: 100%;\n  background-size: cover; }\n/* width */\n::-webkit-scrollbar {\n  width: 5px; }\n/* Track */\n::-webkit-scrollbar-track {\n  background: var(--active-light-grey); }\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--solid-border); }\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: var(--dashborder-color); }\n.form-control:focus {\n  box-shadow: none; }\n.form-page {\n  background: var(--active-light-grey);\n  overflow-x: hidden; }\n.working-part {\n  background: var(--white-color); }\n.formtitle {\n  padding: 35px 40px 0px 40px; }\n#multiple-choice-format {\n  padding: 40px; }\n#statement-format {\n  padding: 40px; }\n#dropdown-format {\n  padding: 40px; }\n#conditional-dropdown-format {\n  padding: 40px; }\n#picture-choice-format {\n  padding: 40px; }\n.maker-input input {\n  color: var(--black-color); }\n.maker-input .name-input::-webkit-input-placeholder {\n  color: #3c3c3c; }\n.maker-input .name-input::-moz-placeholder {\n  color: #3c3c3c; }\n.maker-input .name-input::-ms-input-placeholder {\n  color: #3c3c3c; }\n.maker-input .name-input::placeholder {\n  color: #3c3c3c; }\n.rating-ico span {\n  font-size: 20px; }\n.form-header {\n  font-size: 20px;\n  font-weight: 600; }\n.form-statement {\n  font-weight: 300;\n  font-style: italic;\n  border: none; }\n.add-dropdown {\n  padding-bottom: 5px;\n  position: relative; }\n.add-dropdown .left-ico {\n  float: left;\n  position: relative;\n  top: 20px;\n  color: var(--lightgray-color); }\n.add-dropdown .right-ico {\n  right: 0;\n  position: absolute;\n  top: 0px;\n  color: var(--lightgray-color);\n  cursor: pointer; }\n.add-dropdown input {\n  padding-left: 25px;\n  border-bottom: 1px solid var(--dashborder-color);\n  width: 50%;\n  margin-right: 30px; }\n.add-dropdown .numbering {\n  position: relative;\n  top: 26px; }\n#submit-part {\n  padding: 40px; }\n#submit-part .btn {\n  padding: 7px 20px; }\n.add-condi-dropdown {\n  padding-bottom: 5px;\n  position: relative;\n  display: inline-block; }\n.add-condi-dropdown .left-ico {\n  float: left;\n  position: relative;\n  top: 20px;\n  color: var(--lightgray-color); }\n.add-condi-dropdown .right-ico {\n  right: 0;\n  position: absolute;\n  top: 6px;\n  color: var(--lightgray-color); }\n.add-condi-dropdown input {\n  border-bottom: 1px solid var(--dashborder-color); }\n.multiselect-item-checkbox input[type=checkbox]:checked + div:before {\n  background: var(--white-color) !important;\n  border: 2px solid var(--active-light-grey) !important;\n  color: var(--solid-border) !important; }\n.multiselect-item-checkbox input[type=checkbox] + div:after {\n  border-color: var(--lightgray-color) !important; }\n.multiselect-item-checkbox input[type=checkbox] + div:after {\n  top: 50% !important;\n  left: 5px !important;\n  width: 6px !important;\n  height: 2px !important;\n  margin-top: -3px !important; }\n.fw-normal {\n  font-weight: normal !important; }\n@media (max-width: 991.98px) {\n  .navbar-light .navbar-nav .nav-link {\n    padding: 12px !important; }\n  .navbar {\n    padding: 0 15px !important; }\n  .process-part {\n    width: 350px !important; }\n  .navbar-nav {\n    display: -webkit-box !important; }\n  .menu-item {\n    padding: 10px 5px; }\n  .menu-sidebar {\n    padding: 10px 15px; }\n  .mob-tabl-none {\n    display: none; }\n  .profile-img {\n    height: 40px;\n    width: 40px; }\n  .pro-button {\n    height: 20px;\n    width: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255YXovbmNicG0vbmNicG0wMWZpcmViYXNlL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkEsbUZBQVk7QUFqQlo7RUFDSSw0QkFBb0I7RUFDcEIsMEJBQWtCO0VBQ2xCLHNCQUFjO0VBQ2QsbUJBQVc7RUFDWCx3QkFBZ0I7RUFDaEIsd0JBQWdCO0VBQ2hCLDZCQUFtQjtFQUNuQix5QkFBZTtFQUNmLHNCQUFjO0VBQ2Qsb0JBQVk7RUFDWiw0QkFBb0IsRUFBQTtBQU94QjtFQUNJLGtDQUFrQyxFQUFBO0FBRXRDO0VBQVUsV0FBVSxFQUFBO0FBQ3BCO0VBQVMsZUFBZSxFQUFBO0FBQ3hCO0VBQVMsMEJBQTBCLEVBQUE7QUFDbkM7RUFBUSxpQkFBZ0IsRUFBQTtBQXNCeEI7RUFDSSxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7QUFFdEI7RUFDSSx3Q0FBdUMsRUFBQTtBQUUzQztFQUNJLHlCQUF5QjtFQUN6QixxREFBcUQ7RUFDckQsc0NBQXFDO0VBQ3JDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0FBRW5CO0VBQ0ksc0JBQXFCLEVBQUE7QUFFekI7RUFDSSw2QkFBNkIsRUFBQTtBQUVqQztFQUNJLDJCQUEyQixFQUFBO0FBRS9CO0VBQ0ksK0JBQStCO0VBQy9CLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUV0QjtFQUNJLGFBQWE7RUFDYixtQkFBa0I7RUFDbEIsY0FBYztFQUNkLDJDQUEyQyxFQUFBO0FBRS9DO0VBQ0ksa0JBQWlCO0VBQ2pCLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksY0FBYztFQUNkLDRDQUFBLEVBQTZDO0FBR2pEO0VBQ0ksaUJBQWdCO0VBQ2hCLHNDQUFzQyxFQUFBO0FBRzFDO0VBQ0ksMkJBQTBCO0VBQzFCLG1CQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUV0QjtFQUNJ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QUFBO0FBTXBEO0VBQ0kseUNBQXlDO0VBQ3pDLHFEQUFxRDtFQUNyRCxxQ0FBcUMsRUFBQTtBQUV6QztFQUNJLCtDQUE4QyxFQUFBO0FBRWxEO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBO0FBRS9CO0VBQ0ksOEJBQThCLEVBQUE7QUFzQmxDO0VBQ0U7SUFDRSx3QkFBd0IsRUFBQTtFQUUxQjtJQUNFLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSwrQkFBK0IsRUFBQTtFQUVoQztJQUNDLGlCQUFpQixFQUFBO0VBRWpCO0lBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7SUFDSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxZQUFZO0lBQ1osV0FBVyxFQUFBO0VBRWY7SUFDSSxZQUFZO0lBQ1osV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAgIC0tbWFpbi1wdXJwbGUtY29sb3I6ICM3MTMwZmY7ICBcbiAgICAtLWxpZ2h0Z3JheS1jb2xvcjogIzhiOGI4YjtcbiAgICAtLWJsYWNrLWNvbG9yOiAjM2MzYzNjOyAgXG4gICAgLS1za3ktYmx1ZTogIzQ0OGVmNjtcbiAgICAtLXByaW1hcnktY29sb3I6ICM1MEFERkY7ICAgXG4gICAgLS1zdWNjZXNzLWNvbG9yOiAjMjJjOTdiO1xuICAgIC0tZGFzaGJvcmRlci1jb2xvcjogIzhiOGI4YjYxO1xuICAgIC0tc29saWQtYm9yZGVyOiAjYmRiZGJkOGI7IFxuICAgIC0td2hpdGUtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1yZWQtY29sb3I6ICNmZjRjMmU7XG4gICAgLS1hY3RpdmUtbGlnaHQtZ3JleTogI2Y2ZjZmNjtcbiAgfVxuXG5cblxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6NDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cbi5jbGVhcmZpeHtjbGVhcjpib3RoO31cbi5wb2ludGVye2N1cnNvcjogcG9pbnRlcjt9XG4udWNmaXJzdHt0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTt9XG4ubWluMzAwe21pbi1oZWlnaHQ6MzAwcHh9XG4vLyAuYXBwLWJveHtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206MjBweDtcbi8vICAgICBoZWlnaHQ6IDIzMHB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICNiNWU4ZDQ7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICAtYm94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tZGFzaGJvcmRlci1jb2xvcik7XG4vLyB9XG4vLyAuYXBwLWJveDpob3Zlcntcbi8vICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCB2YXIoLS1saWdodGdyYXktY29sb3IpO1xuLy8gfVxuLy8gLmFwcC1ib3ggLnJlbW92ZXtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDIxcHg7XG4vLyAgICAgdG9wOiAwcHg7XG4vLyAgICAgY29sb3I6ICM1NDU0NTQ7XG4vLyAgICAgZGlzcGxheTpub25lO1xuLy8gfVxuLy8gLmFwcC1ib3g6aG92ZXIgLnJlbW92ZXtcbi8vICAgICBkaXNwbGF5OmJsb2NrO1xuLy8gfVxuLmlubGluZS1idG57XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XG4gICAgcGFkZGluZzogMXB4IDVweDtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uYnRuLWN1c3RvbXtcbiAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG59XG4uYnRuLXB1cnBsZXtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcHVycGxlLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjp2YXIoLS1tYWluLXB1cnBsZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMCAyMHB4O1xufVxuLmJ0bi1wdXJwbGU6aG92ZXJ7XG4gICAgY29sb3I6bm9uZSAhaW1wb3J0YW50O1xufVxuLmJ0bi1wdXJwbGUtMntcbiAgICBwYWRkaW5nOiAxMnB4IDQ1cHggIWltcG9ydGFudDtcbn1cbi5ib3JkZXItdG9wLW5vbmV7XG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xufVxuLmJ0bi1wdXJwbGUtbGlnaHR7XG4gICAgY29sb3I6IHZhcigtLW1haW4tcHVycGxlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xufVxuLmJveHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCB2YXIoLS1zb2xpZC1ib3JkZXIpO1xufVxuLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbHtcbiAgICBmb250LXNpemU6aW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uZG5kRHJvcEFyZWF7XG4gICAgLXBhZGRpbmc6IDEwcHg7XG4gICAgLyogYm9yZGVyOiBkb3R0ZWQgdmFyKC0tc29saWQtYm9yZGVyKSAycHg7ICovXG59XG5cbi5kbmREcm9wQXJlYS5lbXB0eXtcbiAgICBtaW4taGVpZ2h0OjYwMHB4O1xuICAgIGJvcmRlcjogZG90dGVkIHZhcigtLXNvbGlkLWJvcmRlcikgMnB4O1xufVxuXG4uZmllbGR7XG4gICAgcGFkZGluZzowcHggMTBweCAzMHB4IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5maWVsZDpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDEwMSwgOTUsIDk1LCAwLjMpO1xuICAgIC1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuLnRvZ2dsZS1XcmFwcGVye1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpO1xufVxuLmRuZEhhbmRsZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6dmFyKC0tbGlnaHRncmF5LWNvbG9yKTtcbn1cbi5kbmREcmFnZ2luZ1NvdXJjZXtcbiAgICBvcGFjaXR5OjAuMztcbn1cbi5kbmRQbGFjZWhvbGRlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA2LCAyMzgsIDIzOCk7IGJvcmRlci1yYWRpdXM6IDJweDsgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG59IFxuXG4ubWFpbnNob3d7XG4gICAgbWFyZ2luLXRvcDogOTBweDs7XG59XG4uZmllbGQgLmZhe1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbn1cbi5yZWR7Y29sb3I6IHZhcigtLXJlZC1jb2xvcil9XG4uZmEtdHJhc2h7Y29sb3I6IHZhcigtLXJlZC1jb2xvcil9XG4ubWFyZ2luVDYwe1xuICAgIG1hcmdpbi10b3A6NjBweDtcbn1cblxuLmNvbG9yLXJlZHtjb2xvcjp2YXIoLS1yZWQtY29sb3IpO31cbi5yZXBvcnQtYmxvY2t7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGJhY2tncm91bmQ6dmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpO1xuICAgIG1hcmdpbi1ib3R0b206MjBweDtcbn1cbi5yZXBvcnQtYmxvY2sgLnJvdzpudGgtY2hpbGQoZXZlbil7XG4gICAgYmFja2dyb3VuZDp2YXIoLS13aGl0ZS1jb2xvcik7XG59XG5cbi5mdGhlbWV7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuLmRuZERyb3BBcmVhIC5maWVsZCAucGFydC1ob3Zlci1pY297XG4gICAgb3BhY2l0eTowO1xufVxuLmRuZERyb3BBcmVhICAuYWN0aXZlIC5wYXJ0LWhvdmVyLWljb3tcbiAgICBvcGFjaXR5OjE7XG59XG4uZG5kRHJvcEFyZWEgLmZpZWxkOmhvdmVyIC5wYXJ0LWhvdmVyLWljb3tcbiAgICBjb2xvcjp2YXIoLS1saWdodGdyYXktY29sb3IpO1xuICAgIG9wYWNpdHk6MTtcbn1cblxuLmNvbG9ycGlja3tcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5uYXZiYXJ7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIC8vIHotaW5kZXg6IDk5OTk5OyBcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgxMDEsIDk1LCA5NSwgMC4zKTtcbiAgfVxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgY29sb3I6dmFyKC0tYmxhY2stY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICB9XG4vLyAgIC5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcbi8vICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vICAgLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIge1xuLy8gICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbi8vICAgfVxuICAubmF2YmFyLWNvbGxhcHNle1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuICAubGVmdC1tZW51IGxpLm5hdi1pdGVtLmFjdGl2ZXtcbiAgICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLW1haW4tcHVycGxlLWNvbG9yKTtcbiAgfVxuICAubGVmdC1tZW51IGxpLm5hdi1pdGVtLmFjdGl2ZSBhe1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLXB1cnBsZS1jb2xvcikgIWltcG9ydGFudDtcbn1cbiAgLnByb2ZpbGUtaW1nIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5saC00OXtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xuICB9XG4gIC5wcm9jZXNzLXBhcnR7XG4gICB3aWR0aDogNDUwcHg7XG4gICAgIH1cbiAgICAucHJvY2Vzcy1wYXJ0OjphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNSU7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG4gICAgLnByby1idXR0b257XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCB2YXIoLS1za3ktYmx1ZSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgfVxuICAgIC5hYnMtY2VudGVyLXgge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuICAgICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IC01cHggcmdiYSgxMiwgNDYsIDk2LCAwLjIpO1xuICAgIH1cbiAgICAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZHJvcGRvd24taXRlbTphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtbGlnaHQtZ3JleSk7XG4gICAgfVxuXG5cbi8vIG5hdmJhclxuLy8gICAubm90aWZpY2F0aW9ue1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBoZWlnaHQ6IDkwcHg7XG4vLyAgIH1cbi8vICAgLm5vdGlmaWNhdGlvbiBpe1xuLy8gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICB9XG4vLyAgIC5wcm9maWxlLXBhcnR7XG4vLyAgICAgcGFkZGluZzogMTVweCAxMHB4OyBcbi8vICAgICB6LWluZGV4OiA5OTk5OSAhaW1wb3J0YW50O1xuLy8gICB9XG4vLyAgIHtcbi8vICAgICBoZWlnaHQ6IDQ0cHg7XG4vLyAgICAgd2lkdGg6IDQ0cHg7XG4vLyAgICAgYm9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgIGZsb2F0OiBsZWZ0O1xuLy8gICB9LnByb2ZpbGUtaW1nXG4gIFxuICAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWtlci1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5tYWtlci1pbnB1dCAubmFtZS1pbnB1dHtcbiAgICBvcmRlcjogMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogMnB4IDJweCAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5tYWtlci1pbnB1dCAubmFtZS1pbnB1dDpmb2N1c3tcblx0b3V0bGluZTogbm9uZTtcbn1cbi51c2VyLWlucHV0IC5uYW1lLWlucHV0e1xuICAgIG9yZGVyOiAyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyLXdpZHRoOjAgMCAxcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nOiAycHggMnB4IDFweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyLXN0eWxlOmRhc2hlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtaW4td2lkdGg6IDMwJTtcbiAgICAvLyBtYXgtd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggZGFzaGVkIHZhcigtLWRhc2hib3JkZXItY29sb3IpO1xufVxuLnByb3BlcnR5LXBhcnQgLnVzZXItaW5wdXQgLm5hbWUtaW5wdXR7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1zb2xpZC1ib3JkZXIpICFpbXBvcnRhbnQ7XG59XG4udXNlci1pbnB1dCAubmFtZS1pbnB1dDpmb2N1c3tcblx0b3V0bGluZTogbm9uZTtcbn1cbi51c2VyLWFuc3dlcntcblx0Ym9yZGVyLWJvdHRvbToycHggZGFzaGVkIHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG5cdGNvbG9yOnZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG59XG4ubmljZS1sYWJsZXtcbiAgICBwYWRkaW5nOjEwcHggMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4vKi5maXhlZC1iYXJ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0qL1xuLyotLS0tLS0tLS0tLS0tc2lkZWJhciBpY29uIG1lbnVlcyBwYXJ0LS0tLS0tLS0tLS0tLSovXG4ubWVudS1zaWRlYmFye1xuXHQtYm9yZGVyOjFweCBzb2xpZCBwdXJwbGU7XG5cdHBhZGRpbmc6IDIwcHggMjVweDtcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gICAgb3ZlcmZsb3cteTphdXRvO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cbiNzaWRlLW1lbnV7XG5cdHBhZGRpbmc6MDtcbn1cbi5tZW51LWl0ZW17XG5cdC1kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZW51LWl0ZW0gaW1ne1xuXHRoZWlnaHQ6IDI1cHg7XG5cdHdpZHRoOjI1cHg7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW46MCAxMHB4IDEwcHggMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDE1cHg7XG59XG4ubWVudS1pdGVtIHNwYW57XG5cdGZvbnQtc2l6ZTogMTNweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGNvbG9yOnZhcigtLWJsYWNrLWNvbG9yKTtcbn1cblxuLm1lbnUtdGl0bGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAuMDVlbTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbWluZy1zb29uLXBhcnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29taW5nLXNvb24tcGFydCAudGl0bGUtd2l0aC1pY297XG4gICAgd2lkdGg6bWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmNvbWluZy1zb29uLXBhcnQgcHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgY29sb3I6IG9yYW5nZTtcbn1cbi5jb21pbmctc29vbi1wYXJ0OmFmdGVye1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MTJweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206MS41cHggZGFzaGVkIG9yYW5nZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IC0xO1xufVxuLyotLS0tLS0tLS0tLS0td29ya2luZyBmb3JtIHBhcnQtLS0tLS0tLS0tLS0tKi9cbi53b3JraW5nLXBhcnR7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJveC1zaGFkb3c6MCAxcHggNXB4IDAgcmdiYSgxMDEsIDk1LCA5NSwgMC4zKTtcblx0aGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLWNvbG9yKTtcbn1cbi53b3JraW5nLXBhcnQgLmFjdGl2ZXtcbiAgICAgYm94LXNoYWRvdzowIDFweCA1cHggMCByZ2JhKDEwMSwgOTUsIDk1LCAwLjMpO1xufVxuLmZvcm10aXRsZXtcblx0cGFkZGluZzogMzVweCA1MHB4O1xufVxuLmZvcm10aXRsZSAucGFnZS10aXRsZXtcblx0Y29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG5cdGZvbnQtc2l6ZToxM3B4O1xuXHRmb250LXdlaWdodDo0MDA7XG59XG4uZm9ybS1wYWdlLW5hbWV7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCB2YXIoLS1kYXNoYm9yZGVyLWNvbG9yKTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4ubWItNDB7XG5cdG1hcmdpbi1ib3R0b206NDBweDtcbn1cbi5tYi0zNXtcblx0bWFyZ2luLWJvdHRvbTozNXB4O1xufVxuLmZpbGUtbmFtZXtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpbGUtbmFtZSBpe1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZToxOHB4O1xuICBsaW5lLWhlaWdodDozMHB4OyBcbiAgY29sb3I6dmFyKC0tYmxhY2stY29sb3IpO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLWZvcm1hdHMtLS0tLS0tLS0tLS0tKi9cblxuXG4vKi0tLS0tcmF0aW5nIGNzcy0tLS0tLS0qL1xuZmllbGRzZXQsIGxhYmVsIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XG5cbi8qKioqKiogU3R5bGUgU3RhciBSYXRpbmcgV2lkZ2V0ICoqKioqL1xuXG4ucmF0aW5nIHsgXG4gIGJvcmRlcjogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yYXRpbmcgPiBpbnB1dCB7IGRpc3BsYXk6IG5vbmU7IH0gXG4ucmF0aW5nID4gbGFiZWw6YmVmb3JlIHsgXG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXFxmMDA2XCI7XG59XG5cbi5yYXRpbmcgPiAuaGFsZjpiZWZvcmUgeyBcbiAgY29udGVudDogXCJcXGYwMDZcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmF0aW5nID4gbGFiZWwgeyBcbiAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7IFxuIGZsb2F0OiByaWdodDsgXG59XG5cbi8qKioqKiBDU1MgTWFnaWMgdG8gSGlnaGxpZ2h0IFN0YXJzIG9uIEhvdmVyICoqKioqL1xuXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLCAvKiBzaG93IGdvbGQgc3RhciB3aGVuIGNsaWNrZWQgKi9cbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyLCAvKiBob3ZlciBjdXJyZW50IHN0YXIgKi9cbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyIH4gbGFiZWwgeyBjb2xvcjogI0ZGRDcwMDsgIH0gLyogaG92ZXIgcHJldmlvdXMgc3RhcnMgaW4gbGlzdCAqL1xuXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLCAvKiBob3ZlciBjdXJyZW50IHN0YXIgd2hlbiBjaGFuZ2luZyByYXRpbmcgKi9cbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXG4ucmF0aW5nID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsIC8qIGxpZ2h0ZW4gY3VycmVudCBzZWxlY3Rpb24gKi9cbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7IGNvbG9yOiAjRkZFRDg1OyAgfVxuXG5cbi5mb3JtLWhlYWRlcntcbiAgZm9udC1zaXplOjIycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6dmFyKC0tYmxhY2stY29sb3IpO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLXByb3BlcnR5IHBhcnQtLS0tLS0tLS0tLS0tKi9cbi5wcm9wZXJ0eS1wYXJ0e1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdy15OmF1dG87XG4gICAgcGFkZGluZzoxNXB4O1xuICAgIHJpZ2h0OjA7XG59XG4ucHJvcGVydHktdGFie1xuXHRwYWRkaW5nOiAxNXB4O1xufVxuLnByb3BlcnR5LXRhYiAudGFiLWNvbnRlbnR7XG5cdC1ib3JkZXI6MXB4IHNvbGlkIHZhcigtLXJlZC1jb2xvcik7XG59XG4udGV4dC1wcm9wZXJ0eXtcblx0LWJvcmRlcjoxcHggc29saWQgdmFyKC0tcmVkLWNvbG9yKTtcbn1cbi50ZXh0LXByb3BlcnR5IGF7XG5cdHBhZGRpbmc6NXB4O1xuXHRmb250LXNpemU6MTRweDtcbn1cbi50ZXh0LXByb3BlcnR5IGEgaW1ne1xuXHRoZWlnaHQ6MThweDtcbn1cbi5wYXJ0LXRpdGxle1xuXHQtYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1yZWQtY29sb3IpO1xuXHRtYXJnaW4tYm90dG9tOjE1cHg7XG5cdGZvbnQtc2l6ZTogMTVweDtcbn1cbi5hZGQtbmV3LXByb3BlcnR5IGF7XG5cdHBhZGRpbmc6NXB4O1xuXHRtYXJnaW4tcmlnaHQ6MTBweDtcblx0Zm9udC1zaXplOjE0cHg7XG5cdGRpc3BsYXk6IGlubGluZS1ncmlkO1xufVxuLmFkZC1uZXctcHJvcGVydHkgc3Bhbntcblx0Zm9udC1zaXplOjEwcHg7XG5cdGNvbG9yOiB2YXIoLS1saWdodGdyYXktY29sb3IpO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWRkLW5ldy1wcm9wZXJ0eSBhIGltZ3tcblx0aGVpZ2h0OjI1cHg7XG59XG4ucmVxdWlyZWQtcGFydHtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG59XG4vLyAucmVxdWlyZWQtcGFydCAuc3dpdGNoIHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdpZHRoOiA0MHB4O1xuLy8gICBoZWlnaHQ6IDE4cHg7XG4vLyB9XG5cbi8vIC5yZXF1aXJlZC1wYXJ0IC5zd2l0Y2ggaW5wdXQgeyBcbi8vICAgb3BhY2l0eTogMDtcbi8vICAgd2lkdGg6IDA7XG4vLyAgIGhlaWdodDogMDtcbi8vIH1cblxuLy8gLnJlcXVpcmVkLXBhcnQgLnNsaWRlciB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB0b3A6IDA7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICBib3R0b206IDA7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhc2hib3JkZXItY29sb3IpO1xuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbi8vICAgdHJhbnNpdGlvbjogLjRzO1xuLy8gfVxuXG4vLyAucmVxdWlyZWQtcGFydCAuc2xpZGVyOmJlZm9yZSB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgY29udGVudDogXCJcIjtcbi8vICAgaGVpZ2h0OiAxNXB4O1xuLy8gICB3aWR0aDogMTVweDtcbi8vICAgbGVmdDogNHB4O1xuLy8gICBib3R0b206IDJweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuLy8gICB0cmFuc2l0aW9uOiAuNHM7XG4vLyB9XG5cbi8vIC5yZXF1aXJlZC1wYXJ0IGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4vLyB9XG5cbi8vIC5yZXF1aXJlZC1wYXJ0IGlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4vLyB9XG5cbi8vIC5yZXF1aXJlZC1wYXJ0IGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4vLyAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xuLy8gICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XG4vLyB9XG5cbi8vIC5yZXF1aXJlZC1wYXJ0IC5zbGlkZXIucm91bmQge1xuLy8gICBib3JkZXItcmFkaXVzOiAzNHB4O1xuLy8gfVxuXG4vLyAucmVxdWlyZWQtcGFydCAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vIH1cbi8vIC5yZXF1aXJlZC1pY29ucyBpe1xuLy8gICBmb250LXNpemU6IDE2cHg7XG4vLyAgIGNvbG9yOiAjYTBhNmFkO1xuLy8gfVxuXG4uaW5saW5lLXNlbGVjdGlvbiBzcGFue1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOjUwJTtcblx0cGFkZGluZzogMCA1cHg7XG59XG5cbi50aGVtZS1zZXR0aW5nLWNvbG9ye1xuXHRib3JkZXItYm90dG9tOjJweCBkYXNoZWQgdmFyKC0tZGFzaGJvcmRlci1jb2xvcik7XG59XG4ucXVlLWNvbG9yIHB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5xdWUtY29sb3IgaW5wdXR7XG5cdGhlaWdodDogMjNweDtcbiAgICB3aWR0aDogMjNweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ucXVlLWNvbG9yIGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDo1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZvcm0tcGFnZXMgLnBhZ2VzIGF7XG4gICAgY29sb3I6dmFyKC0tYmxhY2stY29sb3IpO1xufVxuLmZvcm0tcGFnZXMgLnBhZ2VzIGE6aG92ZXJ7XG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uZm9ybS1wYWdlcyAucGFnZXMgLnBhZ2VzLWljbyBhe1xuICAgIG9wYWNpdHk6IDA7XG59XG4uZm9ybS1wYWdlcyAucGFnZXM6aG92ZXIgLnBhZ2VzLWljbyBhe1xuICAgIG9wYWNpdHk6IDE7XG59XG4uZm9ybS1wYWdlcyAucGFnZXMgYTphY3RpdmV7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmZvcm0tcGFnZXMgLnBhZ2VzOmFjdGl2ZSAucGFnZXMtaWNvIGF7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5tdGJ7XG5cdG1hcmdpbjogMzVweCAwO1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3due1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IDBweCB2YXIoLS1kYXNoYm9yZGVyLWNvbG9yKTtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVtIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1jb2xvcikgIWltcG9ydGFudDtcbiAgICBjb2xvcjp2YXIoLS1ibGFjay1jb2xvcikgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW0gYSB7XG4gICAgY29sb3I6IHZhcigtLXJlZC1jb2xvcikgIWltcG9ydGFudDtcbn1cbi5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdICsgZGl2OmJlZm9yZSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpICFpbXBvcnRhbnQ7XG59XG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjdGl2ZS1saWdodC1ncmV5KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3A6bm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yaWdodDpub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWxlZnQ6bm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd24ge1xuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB2YXIoLS1hY3RpdmUtbGlnaHQtZ3JleSkgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi11cCB7XG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHZhcigtLWFjdGl2ZS1saWdodC1ncmV5KSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGRpdjpiZWZvcmUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzdhYjcgIWltcG9ydGFudDtcbn1cbi5kcm9wZG93bi1saXN0IGxpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpICFpbXBvcnRhbnQ7XG59XG4uZHJvcGRvd24tbGlzdCAuZmlsdGVyLXRleHRib3gge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY3RpdmUtbGlnaHQtZ3JleSkgIWltcG9ydGFudDtcbn1cbi5kcm9wZG93bi1saXN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY3RpdmUtbGlnaHQtZ3JleSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmRyb3Bkb3duLWxpc3QgdWwge1xuICAgIHBhZGRpbmc6IDBweCAwICFpbXBvcnRhbnQ7XG59XG5cblxuLnRvZ2dsZS1pbWFne1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1saWdodC1ncmV5KTsgXG59XG4gXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zb2xpZC1ib3JkZXIpIDsgXG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhc2hib3JkZXItY29sb3IpOyBcbn1cbi8vIGZvcm1cblxuLmZvcm0tY29udHJvbDpmb2N1c3tcbiAgICBib3gtc2hhZG93OiBub25lXG59XG4uZm9ybS1wYWdle1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1saWdodC1ncmV5KTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ud29ya2luZy1wYXJ0e1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLWNvbG9yKVxufVxuLmZvcm10aXRsZSB7XG4gICAgcGFkZGluZzogMzVweCA0MHB4IDBweCA0MHB4O1xufVxuI211bHRpcGxlLWNob2ljZS1mb3JtYXR7XG4gICAgcGFkZGluZzogNDBweDtcbn1cbiNzdGF0ZW1lbnQtZm9ybWF0e1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG4jZHJvcGRvd24tZm9ybWF0e1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG4jY29uZGl0aW9uYWwtZHJvcGRvd24tZm9ybWF0e1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG4jcGljdHVyZS1jaG9pY2UtZm9ybWF0e1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG4ubWFrZXItaW5wdXQgaW5wdXR7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbn1cbi5tYWtlci1pbnB1dCAubmFtZS1pbnB1dDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6IzNjM2MzYztcbn1cbi5yYXRpbmctaWNvIHNwYW57XG5mb250LXNpemU6IDIwcHg7XG59XG4uZm9ybS1oZWFkZXJ7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLmZvcm0tc3RhdGVtZW50e1xuICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgIGJvcmRlcjpub25lO1xufVxuLmFkZC1kcm9wZG93bntcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hZGQtZHJvcGRvd24gLmxlZnQtaWNve1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6MjBweDtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRncmF5LWNvbG9yKTtcbn1cbi5hZGQtZHJvcGRvd24gLnJpZ2h0LWljb3tcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjBweDtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRncmF5LWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWRyb3Bkb3duIGlucHV0e1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFzaGJvcmRlci1jb2xvcik7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uYWRkLWRyb3Bkb3duIC5udW1iZXJpbmd7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjZweDtcbn1cbi8vICNjb25kaXRpb25hbC1kcm9wZG93bi1mb3JtYXQgLmFkZC1kcm9wZG93biAucmlnaHQtaWNve1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6MzBweDtcbi8vICAgICBjb2xvcjogdmFyKC0tbGlnaHRncmF5LWNvbG9yKTtcbi8vIH1cbi8vIC5hZGQtcGljdHVyZXtcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIH1cbi8vIC5hZGQtcGljdHVyZSAucmlnaHQtaW1ne1xuLy8gICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tZGFzaGJvcmRlci1jb2xvcik7XG4vLyAgICAgd2lkdGg6IDMwJTtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgaGVpZ2h0OiAzMHB4O1xuLy8gfVxuLy8gLmFkZC1waWN0dXJlIC5sZWZ0LWljb3tcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgdG9wOjI1cHg7XG4vLyAgICAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG4vLyB9XG4vLyAuYWRkLXBpY3R1cmUgaW5wdXR7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXNoYm9yZGVyLWNvbG9yKTtcbi8vICAgICB3aWR0aDogNjclO1xuLy8gfVxuLy8gLmFkZC1waWN0dXJlIC5yaWdodC1pY297XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHRvcDoyNHB4O1xuLy8gICAgIGNvbG9yOiB2YXIoLS1saWdodGdyYXktY29sb3IpO1xuLy8gfVxuLy8gLmFkZC1waWN0dXJlIGJ1dHRvbntcbi8vICAgICBib3JkZXI6MnB4IGRhc2hlZCAjZGRkZGRkO1xuLy8gICAgIHBhZGRpbmc6IDVweCAxMHB4Oztcbi8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcbi8vIH1cbiNzdWJtaXQtcGFydHtcbiAgICBwYWRkaW5nOiA0MHB4XG59XG4jc3VibWl0LXBhcnQgLmJ0bntcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbn1cbi5hZGQtY29uZGktZHJvcGRvd257XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmFkZC1jb25kaS1kcm9wZG93biAubGVmdC1pY297XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDoyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGdyYXktY29sb3IpO1xufVxuLmFkZC1jb25kaS1kcm9wZG93biAucmlnaHQtaWNve1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NnB4O1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGdyYXktY29sb3IpO1xufVxuLmFkZC1jb25kaS1kcm9wZG93biBpbnB1dHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFzaGJvcmRlci1jb2xvcilcbn1cblxuXG5cblxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGRpdjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1saWdodC1ncmV5KSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS1zb2xpZC1ib3JkZXIpICFpbXBvcnRhbnQ7XG59XG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGRpdjphZnRlcntcbiAgICBib3JkZXItY29sb3I6dmFyKC0tbGlnaHRncmF5LWNvbG9yKSAhaW1wb3J0YW50O1xufVxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBkaXY6YWZ0ZXIge1xuICAgIHRvcDogNTAlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDZweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xufVxuLmZ3LW5vcm1hbHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cblxuXG5cblxuXG5cblxuXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICBcbn1cblxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgbGVzcyB0aGFuIDc2OHB4KVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIFxufVxuXG4vLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgbGVzcyB0aGFuIDk5MnB4KVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2Nlc3MtcGFydCB7XG4gICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1uYXYge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gICB9XG4gICAubWVudS1pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICB9XG4gICAgLm1lbnUtc2lkZWJhciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB9XG4gICAgLm1vYi10YWJsLW5vbmV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5wcm9maWxlLWltZyB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgfVxuICAgIC5wcm8tYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICB9XG59XG5cbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICBcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjQwMCw1MDAmZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICAtLW1haW4tcHVycGxlLWNvbG9yOiAjNzEzMGZmO1xuICAtLWxpZ2h0Z3JheS1jb2xvcjogIzhiOGI4YjtcbiAgLS1ibGFjay1jb2xvcjogIzNjM2MzYztcbiAgLS1za3ktYmx1ZTogIzQ0OGVmNjtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjNTBBREZGO1xuICAtLXN1Y2Nlc3MtY29sb3I6ICMyMmM5N2I7XG4gIC0tZGFzaGJvcmRlci1jb2xvcjogIzhiOGI4YjYxO1xuICAtLXNvbGlkLWJvcmRlcjogI2JkYmRiZDhiO1xuICAtLXdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuICAtLXJlZC1jb2xvcjogI2ZmNGMyZTtcbiAgLS1hY3RpdmUtbGlnaHQtZ3JleTogI2Y2ZjZmNjsgfVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjsgfVxuXG4uY2xlYXJmaXgge1xuICBjbGVhcjogYm90aDsgfVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4udWNmaXJzdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XG5cbi5taW4zMDAge1xuICBtaW4taGVpZ2h0OiAzMDBweDsgfVxuXG4uaW5saW5lLWJ0biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xuICBwYWRkaW5nOiAxcHggNXB4O1xuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxuXG4uYnRuLWN1c3RvbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7IH1cblxuLmJ0bi1wdXJwbGUge1xuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXB1cnBsZS1jb2xvcikgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLXB1cnBsZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMCAyMHB4OyB9XG5cbi5idG4tcHVycGxlOmhvdmVyIHtcbiAgY29sb3I6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uYnRuLXB1cnBsZS0yIHtcbiAgcGFkZGluZzogMTJweCA0NXB4ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci10b3Atbm9uZSB7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uYnRuLXB1cnBsZS1saWdodCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLXB1cnBsZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZzogMTVweCAzMHB4OyB9XG5cbi5ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggdmFyKC0tc29saWQtYm9yZGVyKTsgfVxuXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0OyB9XG5cbi5kbmREcm9wQXJlYSB7XG4gIC1wYWRkaW5nOiAxMHB4O1xuICAvKiBib3JkZXI6IGRvdHRlZCB2YXIoLS1zb2xpZC1ib3JkZXIpIDJweDsgKi8gfVxuXG4uZG5kRHJvcEFyZWEuZW1wdHkge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgYm9yZGVyOiBkb3R0ZWQgdmFyKC0tc29saWQtYm9yZGVyKSAycHg7IH1cblxuLmZpZWxkIHtcbiAgcGFkZGluZzogMHB4IDEwcHggMzBweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmZpZWxkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgxMDEsIDk1LCA5NSwgMC4zKTtcbiAgLWJhY2tncm91bmQ6ICNmOWY5Zjk7IH1cblxuLnRvZ2dsZS1XcmFwcGVyIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpOyB9XG5cbi5kbmRIYW5kbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1saWdodGdyYXktY29sb3IpOyB9XG5cbi5kbmREcmFnZ2luZ1NvdXJjZSB7XG4gIG9wYWNpdHk6IDAuMzsgfVxuXG4uZG5kUGxhY2Vob2xkZXIge1xuICBiYWNrZ3JvdW5kOiAjY2VlZWVlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cblxuLm1haW5zaG93IHtcbiAgbWFyZ2luLXRvcDogOTBweDsgfVxuXG4uZmllbGQgLmZhIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLnJlZCB7XG4gIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpOyB9XG5cbi5mYS10cmFzaCB7XG4gIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpOyB9XG5cbi5tYXJnaW5UNjAge1xuICBtYXJnaW4tdG9wOiA2MHB4OyB9XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogdmFyKC0tcmVkLWNvbG9yKTsgfVxuXG4ucmVwb3J0LWJsb2NrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5yZXBvcnQtYmxvY2sgLnJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZS1jb2xvcik7IH1cblxuLmZ0aGVtZSB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5kbmREcm9wQXJlYSAuZmllbGQgLnBhcnQtaG92ZXItaWNvIHtcbiAgb3BhY2l0eTogMDsgfVxuXG4uZG5kRHJvcEFyZWEgLmFjdGl2ZSAucGFydC1ob3Zlci1pY28ge1xuICBvcGFjaXR5OiAxOyB9XG5cbi5kbmREcm9wQXJlYSAuZmllbGQ6aG92ZXIgLnBhcnQtaG92ZXItaWNvIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG4gIG9wYWNpdHk6IDE7IH1cblxuLmNvbG9ycGljayB7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpO1xuICBib3JkZXI6IG5vbmU7IH1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDEwMSwgOTUsIDk1LCAwLjMpOyB9XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxN3B4OyB9XG5cbi5uYXZiYXItY29sbGFwc2Uge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH1cblxuLmxlZnQtbWVudSBsaS5uYXYtaXRlbS5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWFpbi1wdXJwbGUtY29sb3IpOyB9XG5cbi5sZWZ0LW1lbnUgbGkubmF2LWl0ZW0uYWN0aXZlIGEge1xuICBjb2xvcjogdmFyKC0tbWFpbi1wdXJwbGUtY29sb3IpICFpbXBvcnRhbnQ7IH1cblxuLnByb2ZpbGUtaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLmxoLTQ5IHtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7IH1cblxuLnByb2Nlc3MtcGFydCB7XG4gIHdpZHRoOiA0NTBweDsgfVxuXG4ucHJvY2Vzcy1wYXJ0OjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiA1MCU7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cblxuLnByby1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IHZhcigtLXNreS1ibHVlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpOyB9XG5cbi5hYnMtY2VudGVyLXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IC01cHggcmdiYSgxMiwgNDYsIDk2LCAwLjIpOyB9XG5cbi5kcm9wZG93bi10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpOyB9XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyB9XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG5cbi5tYWtlci1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLm1ha2VyLWlucHV0IC5uYW1lLWlucHV0IHtcbiAgb3JkZXI6IDI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAycHggMnB4IDFweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxN3B4OyB9XG5cbi5tYWtlci1pbnB1dCAubmFtZS1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLnVzZXItaW5wdXQgLm5hbWUtaW5wdXQge1xuICBvcmRlcjogMjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAycHggMnB4IDFweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tbGlnaHRncmF5LWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggZGFzaGVkIHZhcigtLWRhc2hib3JkZXItY29sb3IpOyB9XG5cbi5wcm9wZXJ0eS1wYXJ0IC51c2VyLWlucHV0IC5uYW1lLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1zb2xpZC1ib3JkZXIpICFpbXBvcnRhbnQ7IH1cblxuLnVzZXItaW5wdXQgLm5hbWUtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lOyB9XG5cbi51c2VyLWFuc3dlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgdmFyKC0tbGlnaHRncmF5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7IH1cblxuLm5pY2UtbGFibGUge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4vKi5maXhlZC1iYXJ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0qL1xuLyotLS0tLS0tLS0tLS0tc2lkZWJhciBpY29uIG1lbnVlcyBwYXJ0LS0tLS0tLS0tLS0tLSovXG4ubWVudS1zaWRlYmFyIHtcbiAgLWJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcbiAgcGFkZGluZzogMjBweCAyNXB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkOyB9XG5cbiNzaWRlLW1lbnUge1xuICBwYWRkaW5nOiAwOyB9XG5cbi5tZW51LWl0ZW0ge1xuICAtZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHggNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLm1lbnUtaXRlbSBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTVweDsgfVxuXG4ubWVudS1pdGVtIHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpOyB9XG5cbi5tZW51LXRpdGxlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNWVtO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4uY29taW5nLXNvb24tcGFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4uY29taW5nLXNvb24tcGFydCAudGl0bGUtd2l0aC1pY28ge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG4uY29taW5nLXNvb24tcGFydCBwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBjb2xvcjogb3JhbmdlOyB9XG5cbi5jb21pbmctc29vbi1wYXJ0OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggZGFzaGVkIG9yYW5nZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogLTE7IH1cblxuLyotLS0tLS0tLS0tLS0td29ya2luZyBmb3JtIHBhcnQtLS0tLS0tLS0tLS0tKi9cbi53b3JraW5nLXBhcnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDEwMSwgOTUsIDk1LCAwLjMpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpOyB9XG5cbi53b3JraW5nLXBhcnQgLmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMTAxLCA5NSwgOTUsIDAuMyk7IH1cblxuLmZvcm10aXRsZSB7XG4gIHBhZGRpbmc6IDM1cHggNTBweDsgfVxuXG4uZm9ybXRpdGxlIC5wYWdlLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4uZm9ybS1wYWdlLW5hbWUge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHZhcigtLWRhc2hib3JkZXItY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7IH1cblxuLm1iLTQwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxuXG4ubWItMzUge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4OyB9XG5cbi5maWxlLW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmZpbGUtbmFtZSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpOyB9XG5cbi8qLS0tLS0tLS0tLS0tLWZvcm1hdHMtLS0tLS0tLS0tLS0tKi9cbi8qLS0tLS1yYXRpbmcgY3NzLS0tLS0tLSovXG5maWVsZHNldCwgbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuLyoqKioqKiBTdHlsZSBTdGFyIFJhdGluZyBXaWRnZXQgKioqKiovXG4ucmF0aW5nIHtcbiAgYm9yZGVyOiBub25lO1xuICBmbG9hdDogbGVmdDsgfVxuXG4ucmF0aW5nID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5yYXRpbmcgPiBsYWJlbDpiZWZvcmUge1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiBcIlxcZjAwNlwiOyB9XG5cbi5yYXRpbmcgPiAuaGFsZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwNlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cblxuLnJhdGluZyA+IGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4vKioqKiogQ1NTIE1hZ2ljIHRvIEhpZ2hsaWdodCBTdGFycyBvbiBIb3ZlciAqKioqKi9cbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3Zlcixcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xuICBjb2xvcjogI0ZGRDcwMDsgfVxuXG4vKiBob3ZlciBwcmV2aW91cyBzdGFycyBpbiBsaXN0ICovXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLFxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3Zlcixcbi5yYXRpbmcgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XG4gIGNvbG9yOiAjRkZFRDg1OyB9XG5cbi5mb3JtLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpOyB9XG5cbi8qLS0tLS0tLS0tLS0tLXByb3BlcnR5IHBhcnQtLS0tLS0tLS0tLS0tKi9cbi5wcm9wZXJ0eS1wYXJ0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgcmlnaHQ6IDA7IH1cblxuLnByb3BlcnR5LXRhYiB7XG4gIHBhZGRpbmc6IDE1cHg7IH1cblxuLnByb3BlcnR5LXRhYiAudGFiLWNvbnRlbnQge1xuICAtYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmVkLWNvbG9yKTsgfVxuXG4udGV4dC1wcm9wZXJ0eSB7XG4gIC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQtY29sb3IpOyB9XG5cbi50ZXh0LXByb3BlcnR5IGEge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4udGV4dC1wcm9wZXJ0eSBhIGltZyB7XG4gIGhlaWdodDogMThweDsgfVxuXG4ucGFydC10aXRsZSB7XG4gIC1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7IH1cblxuLmFkZC1uZXctcHJvcGVydHkgYSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkOyB9XG5cbi5hZGQtbmV3LXByb3BlcnR5IHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1saWdodGdyYXktY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmFkZC1uZXctcHJvcGVydHkgYSBpbWcge1xuICBoZWlnaHQ6IDI1cHg7IH1cblxuLnJlcXVpcmVkLXBhcnQge1xuICBsaW5lLWhlaWdodDogMThweDsgfVxuXG4uaW5saW5lLXNlbGVjdGlvbiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAwIDVweDsgfVxuXG4udGhlbWUtc2V0dGluZy1jb2xvciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgdmFyKC0tZGFzaGJvcmRlci1jb2xvcik7IH1cblxuLnF1ZS1jb2xvciBwIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDE1cHg7IH1cblxuLnF1ZS1jb2xvciBpbnB1dCB7XG4gIGhlaWdodDogMjNweDtcbiAgd2lkdGg6IDIzcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpO1xuICBib3JkZXI6IG5vbmU7IH1cblxuLnF1ZS1jb2xvciBpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4OyB9XG5cbi5mb3JtLXBhZ2VzIC5wYWdlcyBhIHtcbiAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTsgfVxuXG4uZm9ybS1wYWdlcyAucGFnZXMgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgfVxuXG4uZm9ybS1wYWdlcyAucGFnZXMgLnBhZ2VzLWljbyBhIHtcbiAgb3BhY2l0eTogMDsgfVxuXG4uZm9ybS1wYWdlcyAucGFnZXM6aG92ZXIgLnBhZ2VzLWljbyBhIHtcbiAgb3BhY2l0eTogMTsgfVxuXG4uZm9ybS1wYWdlcyAucGFnZXMgYTphY3RpdmUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7IH1cblxuLmZvcm0tcGFnZXMgLnBhZ2VzOmFjdGl2ZSAucGFnZXMtaWNvIGEge1xuICBvcGFjaXR5OiAxOyB9XG5cbi5tdGIge1xuICBtYXJnaW46IDM1cHggMDsgfVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCAwcHggdmFyKC0tZGFzaGJvcmRlci1jb2xvcik7IH1cblxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW0ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLnNlbGVjdGVkLWl0ZW0gYSB7XG4gIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpICFpbXBvcnRhbnQ7IH1cblxuLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0gKyBkaXY6YmVmb3JlIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpICFpbXBvcnRhbnQ7IH1cblxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHg7IH1cblxuLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG4gLmRyb3Bkb3duLWRvd24ge1xuICBib3JkZXItdG9wOiA3cHggc29saWQgdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tdXAge1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgZGl2OmJlZm9yZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzdhYjcgIWltcG9ydGFudDsgfVxuXG4uZHJvcGRvd24tbGlzdCBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1hY3RpdmUtbGlnaHQtZ3JleSkgIWltcG9ydGFudDsgfVxuXG4uZHJvcGRvd24tbGlzdCAuZmlsdGVyLXRleHRib3gge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYWN0aXZlLWxpZ2h0LWdyZXkpICFpbXBvcnRhbnQ7IH1cblxuLmRyb3Bkb3duLWxpc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY3RpdmUtbGlnaHQtZ3JleSkgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5kcm9wZG93bi1saXN0IHVsIHtcbiAgcGFkZGluZzogMHB4IDAgIWltcG9ydGFudDsgfVxuXG4udG9nZ2xlLWltYWcge1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDsgfVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjdGl2ZS1saWdodC1ncmV5KTsgfVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zb2xpZC1ib3JkZXIpOyB9XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhc2hib3JkZXItY29sb3IpOyB9XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lOyB9XG5cbi5mb3JtLXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY3RpdmUtbGlnaHQtZ3JleSk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxuXG4ud29ya2luZy1wYXJ0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtY29sb3IpOyB9XG5cbi5mb3JtdGl0bGUge1xuICBwYWRkaW5nOiAzNXB4IDQwcHggMHB4IDQwcHg7IH1cblxuI211bHRpcGxlLWNob2ljZS1mb3JtYXQge1xuICBwYWRkaW5nOiA0MHB4OyB9XG5cbiNzdGF0ZW1lbnQtZm9ybWF0IHtcbiAgcGFkZGluZzogNDBweDsgfVxuXG4jZHJvcGRvd24tZm9ybWF0IHtcbiAgcGFkZGluZzogNDBweDsgfVxuXG4jY29uZGl0aW9uYWwtZHJvcGRvd24tZm9ybWF0IHtcbiAgcGFkZGluZzogNDBweDsgfVxuXG4jcGljdHVyZS1jaG9pY2UtZm9ybWF0IHtcbiAgcGFkZGluZzogNDBweDsgfVxuXG4ubWFrZXItaW5wdXQgaW5wdXQge1xuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpOyB9XG5cbi5tYWtlci1pbnB1dCAubmFtZS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzNjM2MzYzsgfVxuXG4ucmF0aW5nLWljbyBzcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5mb3JtLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG4uZm9ybS1zdGF0ZW1lbnQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG4uYWRkLWRyb3Bkb3duIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5hZGQtZHJvcGRvd24gLmxlZnQtaWNvIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tbGlnaHRncmF5LWNvbG9yKTsgfVxuXG4uYWRkLWRyb3Bkb3duIC5yaWdodC1pY28ge1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uYWRkLWRyb3Bkb3duIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFzaGJvcmRlci1jb2xvcik7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMzBweDsgfVxuXG4uYWRkLWRyb3Bkb3duIC5udW1iZXJpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjZweDsgfVxuXG4jc3VibWl0LXBhcnQge1xuICBwYWRkaW5nOiA0MHB4OyB9XG5cbiNzdWJtaXQtcGFydCAuYnRuIHtcbiAgcGFkZGluZzogN3B4IDIwcHg7IH1cblxuLmFkZC1jb25kaS1kcm9wZG93biB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5hZGQtY29uZGktZHJvcGRvd24gLmxlZnQtaWNvIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tbGlnaHRncmF5LWNvbG9yKTsgfVxuXG4uYWRkLWNvbmRpLWRyb3Bkb3duIC5yaWdodC1pY28ge1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0Z3JheS1jb2xvcik7IH1cblxuLmFkZC1jb25kaS1kcm9wZG93biBpbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXNoYm9yZGVyLWNvbG9yKTsgfVxuXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgZGl2OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlLWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY3RpdmUtbGlnaHQtZ3JleSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXNvbGlkLWJvcmRlcikgIWltcG9ydGFudDsgfVxuXG4ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGRpdjphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHRncmF5LWNvbG9yKSAhaW1wb3J0YW50OyB9XG5cbi5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdICsgZGl2OmFmdGVyIHtcbiAgdG9wOiA1MCUgIWltcG9ydGFudDtcbiAgbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50OyB9XG5cbi5mdy1ub3JtYWwge1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAxMnB4ICFpbXBvcnRhbnQ7IH1cbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7IH1cbiAgLnByb2Nlc3MtcGFydCB7XG4gICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7IH1cbiAgLm5hdmJhci1uYXYge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7IH1cbiAgLm1lbnUtaXRlbSB7XG4gICAgcGFkZGluZzogMTBweCA1cHg7IH1cbiAgLm1lbnUtc2lkZWJhciB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4OyB9XG4gIC5tb2ItdGFibC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5wcm9maWxlLWltZyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4OyB9XG4gIC5wcm8tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7IH0gfVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nyaz/ncbpm/ncbpm01firebase/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map