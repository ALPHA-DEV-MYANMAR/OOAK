(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[176],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _NewWeight_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewWeight.vue */ "./resources/js/src/views/apps/goods/weight/NewWeight.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      colors: []
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
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    NewWeight: _NewWeight_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var self = this;
      this.$http.get("aval_weights").then(function (q) {
        self.colors = q.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=template&id=0ab05502&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=template&id=0ab05502& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          { staticClass: "m-2" },
          [
            _c(
              "b-row",
              [
                _c("b-col", { attrs: { cols: "12", md: "12" } }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-end",
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "primary" },
                          on: {
                            click: function ($event) {
                              _vm.isAddNewUserSidebarActive = true
                            },
                          },
                        },
                        [
                          _c("span", { staticClass: "text-nowrap" }, [
                            _vm._v("Add Category"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("table", { staticClass: "table" }, [
          _c("thead", [
            _c("tr", [
              _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.colors, function (c) {
              return _c("tr", { key: c.id }, [
                _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(c.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(c.name))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
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
                        attrs: {
                          to: {
                            name: "products-size-edit",
                            params: { id: c.id },
                          },
                          variant: "outline-primary",
                        },
                      },
                      [_c("feather-icon", { attrs: { icon: "EditIcon" } })],
                      1
                    ),
                  ],
                  1
                ),
              ])
            }),
            0
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/apps/goods/weight/WekghtList.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/apps/goods/weight/WekghtList.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WekghtList_vue_vue_type_template_id_0ab05502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WekghtList.vue?vue&type=template&id=0ab05502& */ "./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=template&id=0ab05502&");
/* harmony import */ var _WekghtList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WekghtList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WekghtList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WekghtList_vue_vue_type_template_id_0ab05502___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WekghtList_vue_vue_type_template_id_0ab05502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/goods/weight/WekghtList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WekghtList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WekghtList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WekghtList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=template&id=0ab05502&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=template&id=0ab05502& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WekghtList_vue_vue_type_template_id_0ab05502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WekghtList.vue?vue&type=template&id=0ab05502& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/goods/weight/WekghtList.vue?vue&type=template&id=0ab05502&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WekghtList_vue_vue_type_template_id_0ab05502___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WekghtList_vue_vue_type_template_id_0ab05502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);