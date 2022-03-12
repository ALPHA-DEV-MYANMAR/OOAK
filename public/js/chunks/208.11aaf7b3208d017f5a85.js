(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[208],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _AccountSettingGeneral_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingGeneral.vue */ "./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue");
/* harmony import */ var _AccountSettingPassword_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountSettingPassword.vue */ "./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue");
/* harmony import */ var _AccountSettingInformation_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccountSettingInformation.vue */ "./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue");
/* harmony import */ var _AccountSettingSocial_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccountSettingSocial.vue */ "./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue");
/* harmony import */ var _AccountSettingNotification_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccountSettingNotification.vue */ "./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTab"],
    AccountSettingGeneral: _AccountSettingGeneral_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AccountSettingPassword: _AccountSettingPassword_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AccountSettingInformation: _AccountSettingInformation_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AccountSettingSocial: _AccountSettingSocial_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AccountSettingNotification: _AccountSettingNotification_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      options: {}
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    this.$http.get('/account-setting/data').then(function (res) {
      _this.options = res.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_comp_functions_forms_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/comp-functions/forms/form-utils */ "./resources/js/src/@core/comp-functions/forms/form-utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormFile"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaBody"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    generalData: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      optionsLocal: JSON.parse(JSON.stringify(this.generalData)),
      profileFile: null
    };
  },
  methods: {
    resetForm: function resetForm() {
      this.optionsLocal = JSON.parse(JSON.stringify(this.generalData));
    }
  },
  setup: function setup() {
    var refInputEl = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])(null);
    var previewEl = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])(null);

    var _useInputImageRendere = Object(_core_comp_functions_forms_form_utils__WEBPACK_IMPORTED_MODULE_3__["useInputImageRenderer"])(refInputEl, previewEl),
        inputImageRenderer = _useInputImageRendere.inputImageRenderer;

    return {
      refInputEl: refInputEl,
      previewEl: previewEl,
      inputImageRenderer: inputImageRenderer
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_6__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 // eslint-disable-next-line import/no-extraneous-dependencies


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTextarea"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default.a,
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    informationData: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      countryOption: ['USA', 'India', 'Canada'],
      localOptions: JSON.parse(JSON.stringify(this.informationData)),
      clevePhone: {
        phone: true,
        phoneRegionCode: 'US'
      }
    };
  },
  methods: {
    resetForm: function resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.informationData));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    notificationData: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      localOptions: JSON.parse(JSON.stringify(this.notificationData))
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroupAppend"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      passwordValueOld: '',
      newPasswordValue: '',
      RetypePassword: '',
      passwordFieldTypeOld: 'password',
      passwordFieldTypeNew: 'password',
      passwordFieldTypeRetype: 'password'
    };
  },
  computed: {
    passwordToggleIconOld: function passwordToggleIconOld() {
      return this.passwordFieldTypeOld === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    },
    passwordToggleIconNew: function passwordToggleIconNew() {
      return this.passwordFieldTypeNew === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    },
    passwordToggleIconRetype: function passwordToggleIconRetype() {
      return this.passwordFieldTypeRetype === 'password' ? 'EyeIcon' : 'EyeOffIcon';
    }
  },
  methods: {
    togglePasswordOld: function togglePasswordOld() {
      this.passwordFieldTypeOld = this.passwordFieldTypeOld === 'password' ? 'text' : 'password';
    },
    togglePasswordNew: function togglePasswordNew() {
      this.passwordFieldTypeNew = this.passwordFieldTypeNew === 'password' ? 'text' : 'password';
    },
    togglePasswordRetype: function togglePasswordRetype() {
      this.passwordFieldTypeRetype = this.passwordFieldTypeRetype === 'password' ? 'text' : 'password';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    socialData: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      localOptions: JSON.parse(JSON.stringify(this.socialData))
    };
  },
  methods: {
    resetForm: function resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.socialData));
    }
  }
});

/***/ }),

/***/ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js":
/*!***************************************************************!*\
  !*** ./node_modules/cleave.js/dist/addons/cleave-phone.us.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/cleave.js/dist/addons/cleave-phone.us.js'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources/js/src/@core/scss/base/bootstrap-extended/_include.scss 14:9            @import\n  resources/js/src/@core/scss/vue/libs/vue-select.scss 4:9                          @import\n  resources/js/src/views/pages/account-setting/AccountSettingInformation.vue 163:9  root stylesheet");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingInformation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-cleave-component/dist/vue-cleave.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/vue-cleave-component/dist/vue-cleave.min.js'");

/***/ }),

/***/ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=template&id=29f705f7&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=template&id=29f705f7& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-tabs",
    {
      attrs: {
        vertical: "",
        "content-class": "col-12 col-md-9 mt-1 mt-md-0",
        pills: "",
        "nav-wrapper-class": "col-md-3 col-12",
        "nav-class": "nav-left",
      },
    },
    [
      _c(
        "b-tab",
        {
          attrs: { active: "" },
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function () {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "UserIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("General"),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _vm.options.general
            ? _c("account-setting-general", {
                attrs: { "general-data": _vm.options.general },
              })
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function () {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "LockIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Change Password"),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [_vm._v(" "), _c("account-setting-password")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function () {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "InfoIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Information"),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _vm.options.info
            ? _c("account-setting-information", {
                attrs: { "information-data": _vm.options.info },
              })
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function () {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "LinkIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Social"),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _vm.options.social
            ? _c("account-setting-social", {
                attrs: { "social-data": _vm.options.social },
              })
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function () {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "BellIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Notifications"),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _vm.options.notification
            ? _c("account-setting-notification", {
                attrs: { "notification-data": _vm.options.notification },
              })
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=template&id=1ff6a321&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=template&id=1ff6a321& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    [
      _c(
        "b-media",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-media-aside",
            [
              _c(
                "b-link",
                [
                  _c("b-img", {
                    ref: "previewEl",
                    attrs: {
                      rounded: "",
                      src: _vm.optionsLocal.avatar,
                      height: "80",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-media-body",
            { staticClass: "mt-75 ml-75" },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  staticClass: "mb-75 mr-75",
                  attrs: { variant: "primary", size: "sm" },
                  on: {
                    click: function ($event) {
                      return _vm.$refs.refInputEl.$el.click()
                    },
                  },
                },
                [_vm._v("\n        Upload\n      ")]
              ),
              _vm._v(" "),
              _c("b-form-file", {
                ref: "refInputEl",
                attrs: { accept: ".jpg, .png, .gif", hidden: true, plain: "" },
                on: { input: _vm.inputImageRenderer },
                model: {
                  value: _vm.profileFile,
                  callback: function ($$v) {
                    _vm.profileFile = $$v
                  },
                  expression: "profileFile",
                },
              }),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(186, 191, 199, 0.15)",
                      expression: "'rgba(186, 191, 199, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  staticClass: "mb-75 mr-75",
                  attrs: { variant: "outline-secondary", size: "sm" },
                },
                [_vm._v("\n        Reset\n      ")]
              ),
              _vm._v(" "),
              _c("b-card-text", [
                _vm._v("Allowed JPG, GIF or PNG. Max size of 800kB"),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form",
        { staticClass: "mt-2" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Username",
                        "label-for": "account-username",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: { placeholder: "Username", name: "username" },
                        model: {
                          value: _vm.optionsLocal.username,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "username", $$v)
                          },
                          expression: "optionsLocal.username",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Name", "label-for": "account-name" } },
                    [
                      _c("b-form-input", {
                        attrs: { name: "name", placeholder: "Name" },
                        model: {
                          value: _vm.optionsLocal.fullName,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "fullName", $$v)
                          },
                          expression: "optionsLocal.fullName",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: { label: "E-mail", "label-for": "account-e-mail" },
                    },
                    [
                      _c("b-form-input", {
                        attrs: { name: "email", placeholder: "Email" },
                        model: {
                          value: _vm.optionsLocal.email,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "email", $$v)
                          },
                          expression: "optionsLocal.email",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { sm: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Company",
                        "label-for": "account-company",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: { name: "company", placeholder: "Company name" },
                        model: {
                          value: _vm.optionsLocal.company,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "company", $$v)
                          },
                          expression: "optionsLocal.company",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mt-75", attrs: { cols: "12" } },
                [
                  _c(
                    "b-alert",
                    {
                      staticClass: "mb-50",
                      attrs: { show: "", variant: "warning" },
                    },
                    [
                      _c("h4", { staticClass: "alert-heading" }, [
                        _vm._v(
                          "\n            Your email is not confirmed. Please check your inbox.\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "alert-body" },
                        [
                          _c("b-link", { staticClass: "alert-link" }, [
                            _vm._v(
                              "\n              Resend confirmation\n            "
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mt-2 mr-1",
                      attrs: { variant: "primary" },
                    },
                    [_vm._v("\n          Save changes\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mt-2",
                      attrs: { variant: "outline-secondary", type: "reset" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.resetForm.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("\n          Reset\n        ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=template&id=6fd394e5&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=template&id=6fd394e5& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    [
      _c(
        "b-form",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Bio", "label-for": "bio-area" } },
                    [
                      _c("b-form-textarea", {
                        attrs: {
                          id: "bio-area",
                          rows: "4",
                          placeholder: "Your bio data here...",
                        },
                        model: {
                          value: _vm.localOptions.bio,
                          callback: function ($$v) {
                            _vm.$set(_vm.localOptions, "bio", $$v)
                          },
                          expression: "localOptions.bio",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "example-datepicker",
                        label: "Birth date",
                      },
                    },
                    [
                      _c("flat-pickr", {
                        staticClass: "form-control",
                        attrs: { name: "date", placeholder: "Birth date" },
                        model: {
                          value: _vm.localOptions.dob,
                          callback: function ($$v) {
                            _vm.$set(_vm.localOptions, "dob", $$v)
                          },
                          expression: "localOptions.dob",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { "label-for": "countryList", label: "Country" } },
                    [
                      _c("v-select", {
                        attrs: {
                          id: "countryList",
                          dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                          label: "title",
                          options: _vm.countryOption,
                        },
                        model: {
                          value: _vm.localOptions.country,
                          callback: function ($$v) {
                            _vm.$set(_vm.localOptions, "country", $$v)
                          },
                          expression: "localOptions.country",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { "label-for": "website", label: "Website" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "website",
                          placeholder: "Website address",
                        },
                        model: {
                          value: _vm.localOptions.website,
                          callback: function ($$v) {
                            _vm.$set(_vm.localOptions, "website", $$v)
                          },
                          expression: "localOptions.website",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { "label-for": "phone", label: "Phone" } },
                    [
                      _c("cleave", {
                        staticClass: "form-control",
                        attrs: {
                          id: "phone",
                          raw: false,
                          options: _vm.clevePhone,
                          placeholder: "Phone number",
                        },
                        model: {
                          value: _vm.localOptions.phone,
                          callback: function ($$v) {
                            _vm.$set(_vm.localOptions, "phone", $$v)
                          },
                          expression: "localOptions.phone",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mt-1 mr-1",
                      attrs: { variant: "primary" },
                    },
                    [_vm._v("\n          Save changes\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mt-1",
                      attrs: { type: "reset", variant: "outline-secondary" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.resetForm.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("\n          Reset\n        ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=template&id=f54761fc&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=template&id=f54761fc& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    [
      _c(
        "b-row",
        [
          _c("h6", { staticClass: "section-label mx-1 mb-2" }, [
            _vm._v("\n      Activity\n    "),
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch1",
                    checked: _vm.localOptions.commentOnArticle,
                    name: "check-button",
                    switch: "",
                    inline: "",
                  },
                },
                [
                  _c("span", [
                    _vm._v("Email me when someone comments on my article"),
                  ]),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch2",
                    checked: _vm.localOptions.AnswerOnForm,
                    name: "check-button",
                    switch: "",
                    inline: "",
                  },
                },
                [
                  _c("span", [
                    _vm._v("Email me when someone answers on my form"),
                  ]),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch3",
                    checked: _vm.localOptions.followMe,
                    name: "check-button",
                    switch: "",
                    inline: "",
                  },
                },
                [_c("span", [_vm._v("Email me hen someone follows me")])]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h6", { staticClass: "section-label mx-1 mt-2" }, [
            _vm._v("\n      Application\n    "),
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mt-1 mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch4",
                    checked: _vm.localOptions.newAnnouncements,
                    name: "check-button",
                    switch: "",
                    inline: "",
                  },
                },
                [_c("span", [_vm._v("News and announcements")])]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch5",
                    checked: _vm.localOptions.productUpdates,
                    name: "check-button",
                    switch: "",
                    inline: "",
                  },
                },
                [_c("span", [_vm._v("Weekly product updates")])]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "mb-2", attrs: { cols: "12" } },
            [
              _c(
                "b-form-checkbox",
                {
                  attrs: {
                    id: "accountSwitch6",
                    checked: _vm.localOptions.blogDigest,
                    name: "check-button",
                    switch: "",
                    inline: "",
                  },
                },
                [_c("span", [_vm._v("Weekly blog digest")])]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  staticClass: "mr-1 mt-1",
                  attrs: { variant: "primary" },
                },
                [_vm._v("\n        Save changes\n      ")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(186, 191, 199, 0.15)",
                      expression: "'rgba(186, 191, 199, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  staticClass: "mt-1",
                  attrs: { type: "reset", variant: "outline-secondary" },
                },
                [_vm._v("\n        Cancel\n      ")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=template&id=aa6cff9c&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=template&id=aa6cff9c& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    [
      _c(
        "b-form",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Old Password",
                        "label-for": "account-old-password",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "account-old-password",
                              name: "old-password",
                              type: _vm.passwordFieldTypeOld,
                              placeholder: "Old Password",
                            },
                            model: {
                              value: _vm.passwordValueOld,
                              callback: function ($$v) {
                                _vm.passwordValueOld = $$v
                              },
                              expression: "passwordValueOld",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "b-input-group-append",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer",
                                attrs: { icon: _vm.passwordToggleIconOld },
                                on: { click: _vm.togglePasswordOld },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-new-password",
                        label: "New Password",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "account-new-password",
                              type: _vm.passwordFieldTypeNew,
                              name: "new-password",
                              placeholder: "New Password",
                            },
                            model: {
                              value: _vm.newPasswordValue,
                              callback: function ($$v) {
                                _vm.newPasswordValue = $$v
                              },
                              expression: "newPasswordValue",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "b-input-group-append",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer",
                                attrs: { icon: _vm.passwordToggleIconNew },
                                on: { click: _vm.togglePasswordNew },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-retype-new-password",
                        label: "Retype New Password",
                      },
                    },
                    [
                      _c(
                        "b-input-group",
                        { staticClass: "input-group-merge" },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "account-retype-new-password",
                              type: _vm.passwordFieldTypeRetype,
                              name: "retype-password",
                              placeholder: "New Password",
                            },
                            model: {
                              value: _vm.RetypePassword,
                              callback: function ($$v) {
                                _vm.RetypePassword = $$v
                              },
                              expression: "RetypePassword",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "b-input-group-append",
                            { attrs: { "is-text": "" } },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer",
                                attrs: { icon: _vm.passwordToggleIconRetype },
                                on: { click: _vm.togglePasswordRetype },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mt-1 mr-1",
                      attrs: { variant: "primary" },
                    },
                    [_vm._v("\n          Save changes\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mt-1",
                      attrs: { type: "reset", variant: "outline-secondary" },
                    },
                    [_vm._v("\n          Reset\n        ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=template&id=dfd99078&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=template&id=dfd99078& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    [
      _c(
        "b-form",
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { cols: "12" } }, [
                _c(
                  "div",
                  { staticClass: "d-flex align-items-center mb-2" },
                  [
                    _c("feather-icon", {
                      attrs: { icon: "LinkIcon", size: "18" },
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "mb-0 ml-75" }, [
                      _vm._v("\n            Social Links\n          "),
                    ]),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-twitter",
                        label: "Twitter",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-twitter",
                          placeholder: "Add link",
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.twitter,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "twitter",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.twitter",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-facebook",
                        label: "Facebook",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-facebook",
                          placeholder: "Add link",
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.facebook,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "facebook",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.facebook",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-google",
                        label: "Google+",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-google",
                          placeholder: "Add link",
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.google,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "google",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.google",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        "label-for": "account-linkedin",
                        label: "LinkedIn",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-linkedin",
                          placeholder: "Add link",
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.linkedIn,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "linkedIn",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.linkedIn",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Instagram",
                        "label-for": "account-instagram",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "account-instagram",
                          placeholder: "Add link",
                        },
                        model: {
                          value: _vm.localOptions.socialLinks.instagram,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.localOptions.socialLinks,
                              "instagram",
                              $$v
                            )
                          },
                          expression: "localOptions.socialLinks.instagram",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { "label-for": "account-quora", label: "Quora" } },
                    [
                      _c("b-form-input", {
                        attrs: { id: "account-quora", placeholder: "Add link" },
                        model: {
                          value: _vm.localOptions.socialLinks.quora,
                          callback: function ($$v) {
                            _vm.$set(_vm.localOptions.socialLinks, "quora", $$v)
                          },
                          expression: "localOptions.socialLinks.quora",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("b-col", { attrs: { cols: "12" } }, [
                _c("hr", { staticClass: "my-2" }),
              ]),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mt-1", attrs: { cols: "12" } },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex align-items-center mb-3" },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "UserIcon", size: "18" },
                      }),
                      _vm._v(" "),
                      _c("h4", { staticClass: "mb-0 ml-75" }, [
                        _vm._v("\n            Profile Connections\n          "),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", cols: "6" } },
                        [
                          _c(
                            "b-card-text",
                            { staticClass: "font-weight-bold" },
                            [
                              _vm._v(
                                "\n              Your Twitter\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mb-1" },
                            [
                              _c("b-avatar", {
                                attrs: {
                                  size: "40",
                                  src: _vm.localOptions.connections.twitter
                                    .profileImg,
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-card-text", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n              @" +
                                _vm._s(
                                  _vm.localOptions.connections.twitter.id
                                ) +
                                "\n            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("b-link", [
                            _vm._v("\n              Disconnect\n            "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", cols: "6" } },
                        [
                          _c(
                            "b-card-text",
                            { staticClass: "font-weight-bold mb-2" },
                            [
                              _vm._v(
                                "\n              Your Facebook\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "ripple",
                                  rawName: "v-ripple.400",
                                  value: "rgba(113, 102, 240, 0.15)",
                                  expression: "'rgba(113, 102, 240, 0.15)'",
                                  modifiers: { 400: true },
                                },
                              ],
                              attrs: { variant: "outline-primary" },
                            },
                            [_vm._v("\n              Connect\n            ")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", cols: "6" } },
                        [
                          _c(
                            "b-card-text",
                            { staticClass: "font-weight-bold" },
                            [
                              _vm._v(
                                "\n              Your Google\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mb-1" },
                            [
                              _c("b-avatar", {
                                attrs: {
                                  size: "40",
                                  src: _vm.localOptions.connections.google
                                    .profileImg,
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-card-text", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n              @" +
                                _vm._s(_vm.localOptions.connections.google.id) +
                                "\n            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("b-link", [
                            _vm._v("\n              Disconnect\n            "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-1", attrs: { md: "3", cols: "6" } },
                        [
                          _c(
                            "b-card-text",
                            { staticClass: "font-weight-bold mb-2" },
                            [
                              _vm._v(
                                "\n              Your GitHub\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "ripple",
                                  rawName: "v-ripple.400",
                                  value: "rgba(113, 102, 240, 0.15)",
                                  expression: "'rgba(113, 102, 240, 0.15)'",
                                  modifiers: { 400: true },
                                },
                              ],
                              attrs: { variant: "outline-primary" },
                            },
                            [_vm._v("\n              Connect\n            ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mt-1 mr-1",
                      attrs: { variant: "primary" },
                    },
                    [_vm._v("\n          Save changes\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(186, 191, 199, 0.15)",
                          expression: "'rgba(186, 191, 199, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mt-1 ml-25",
                      attrs: { type: "reset", variant: "outline-secondary" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.resetForm.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("\n          Cancel\n        ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/comp-functions/forms/form-utils.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/@core/comp-functions/forms/form-utils.js ***!
  \*******************************************************************/
/*! exports provided: useInputImageRenderer, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInputImageRenderer", function() { return useInputImageRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
var useInputImageRenderer = function useInputImageRenderer(inputEl, callback) {
  var inputImageRenderer = function inputImageRenderer() {
    var file = inputEl.value.files[0];
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      callback(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return {
    inputImageRenderer: inputImageRenderer
  };
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSetting.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSetting.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSetting_vue_vue_type_template_id_29f705f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSetting.vue?vue&type=template&id=29f705f7& */ "./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=template&id=29f705f7&");
/* harmony import */ var _AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSetting.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSetting_vue_vue_type_template_id_29f705f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSetting_vue_vue_type_template_id_29f705f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-setting/AccountSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=template&id=29f705f7&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=template&id=29f705f7& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_29f705f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSetting.vue?vue&type=template&id=29f705f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSetting.vue?vue&type=template&id=29f705f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_29f705f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_29f705f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingGeneral_vue_vue_type_template_id_1ff6a321___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingGeneral.vue?vue&type=template&id=1ff6a321& */ "./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=template&id=1ff6a321&");
/* harmony import */ var _AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingGeneral.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingGeneral_vue_vue_type_template_id_1ff6a321___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingGeneral_vue_vue_type_template_id_1ff6a321___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=template&id=1ff6a321&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=template&id=1ff6a321& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_template_id_1ff6a321___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingGeneral.vue?vue&type=template&id=1ff6a321& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingGeneral.vue?vue&type=template&id=1ff6a321&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_template_id_1ff6a321___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingGeneral_vue_vue_type_template_id_1ff6a321___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingInformation_vue_vue_type_template_id_6fd394e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingInformation.vue?vue&type=template&id=6fd394e5& */ "./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=template&id=6fd394e5&");
/* harmony import */ var _AccountSettingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingInformation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AccountSettingInformation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountSettingInformation.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AccountSettingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingInformation_vue_vue_type_template_id_6fd394e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingInformation_vue_vue_type_template_id_6fd394e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-setting/AccountSettingInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingInformation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=template&id=6fd394e5&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=template&id=6fd394e5& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_template_id_6fd394e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingInformation.vue?vue&type=template&id=6fd394e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingInformation.vue?vue&type=template&id=6fd394e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_template_id_6fd394e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingInformation_vue_vue_type_template_id_6fd394e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingNotification_vue_vue_type_template_id_f54761fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingNotification.vue?vue&type=template&id=f54761fc& */ "./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=template&id=f54761fc&");
/* harmony import */ var _AccountSettingNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingNotification.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingNotification_vue_vue_type_template_id_f54761fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingNotification_vue_vue_type_template_id_f54761fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-setting/AccountSettingNotification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=template&id=f54761fc&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=template&id=f54761fc& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_template_id_f54761fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingNotification.vue?vue&type=template&id=f54761fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingNotification.vue?vue&type=template&id=f54761fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_template_id_f54761fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingNotification_vue_vue_type_template_id_f54761fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingPassword_vue_vue_type_template_id_aa6cff9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingPassword.vue?vue&type=template&id=aa6cff9c& */ "./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=template&id=aa6cff9c&");
/* harmony import */ var _AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingPassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingPassword_vue_vue_type_template_id_aa6cff9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingPassword_vue_vue_type_template_id_aa6cff9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-setting/AccountSettingPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=template&id=aa6cff9c&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=template&id=aa6cff9c& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_template_id_aa6cff9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingPassword.vue?vue&type=template&id=aa6cff9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingPassword.vue?vue&type=template&id=aa6cff9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_template_id_aa6cff9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingPassword_vue_vue_type_template_id_aa6cff9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingSocial_vue_vue_type_template_id_dfd99078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingSocial.vue?vue&type=template&id=dfd99078& */ "./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=template&id=dfd99078&");
/* harmony import */ var _AccountSettingSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingSocial.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingSocial_vue_vue_type_template_id_dfd99078___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettingSocial_vue_vue_type_template_id_dfd99078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-setting/AccountSettingSocial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingSocial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=template&id=dfd99078&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=template&id=dfd99078& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_template_id_dfd99078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettingSocial.vue?vue&type=template&id=dfd99078& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-setting/AccountSettingSocial.vue?vue&type=template&id=dfd99078&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_template_id_dfd99078___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingSocial_vue_vue_type_template_id_dfd99078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);