(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      fetchUsers: [],
      tableColumns: [{
        key: 'user',
        sortable: true
      }, {
        key: 'email',
        sortable: true
      }, {
        key: 'role',
        sortable: true
      }, {
        key: 'currentPlan',
        label: 'Plan',
        formatter: title,
        sortable: true
      }, {
        key: 'status',
        sortable: true
      }, {
        key: 'actions'
      }]
    };
  },
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=template&id=0795df5a&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=template&id=0795df5a& ***!
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
    "div",
    [
      _c("b-card", { staticClass: "mb-0", attrs: { "no-body": "" } }, [
        _c("div", { staticClass: "m-2" }, [
          _c("h1", [_vm._v("This is Category Page")]),
        ]),
        _vm._v(" "),
        _c("table", { staticClass: "table" }, [
          _c("thead", [
            _c("tr", [
              _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("First")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Last")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Handle")]),
            ]),
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
              _vm._v(" "),
              _c("td", [_vm._v("Mark")]),
              _vm._v(" "),
              _c("td", [_vm._v("Otto")]),
              _vm._v(" "),
              _c("td", [_vm._v("@mdo")]),
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
              _vm._v(" "),
              _c("td", [_vm._v("Jacob")]),
              _vm._v(" "),
              _c("td", [_vm._v("Thornton")]),
              _vm._v(" "),
              _c("td", [_vm._v("@fat")]),
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
              _vm._v(" "),
              _c("td", { attrs: { colspan: "2" } }, [_vm._v("Larry the Bird")]),
              _vm._v(" "),
              _c("td", [_vm._v("@twitter")]),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/category/categories-list/CategoryList.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/apps/category/categories-list/CategoryList.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoryList_vue_vue_type_template_id_0795df5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=template&id=0795df5a& */ "./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=template&id=0795df5a&");
/* harmony import */ var _CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryList_vue_vue_type_template_id_0795df5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoryList_vue_vue_type_template_id_0795df5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/category/categories-list/CategoryList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=template&id=0795df5a&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=template&id=0795df5a& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_0795df5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoryList.vue?vue&type=template&id=0795df5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/category/categories-list/CategoryList.vue?vue&type=template&id=0795df5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_0795df5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryList_vue_vue_type_template_id_0795df5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);