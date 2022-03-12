(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/@babel/runtime/helpers/esm/typeof.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _useEcommerce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useEcommerce */ "./resources/js/src/views/apps/e-commerce/useEcommerce.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BLink"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"]
  },
  setup: function setup() {
    var _useEcommerceUi = Object(_useEcommerce__WEBPACK_IMPORTED_MODULE_5__["useEcommerceUi"])(),
        handleWishlistCartActionClick = _useEcommerceUi.handleWishlistCartActionClick;

    var products = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])([]);

    var _useEcommerce = Object(_useEcommerce__WEBPACK_IMPORTED_MODULE_5__["useEcommerce"])(),
        removeProductFromWishlist = _useEcommerce.removeProductFromWishlist;

    var removeProductFromWishlistClick = function removeProductFromWishlistClick(product) {
      removeProductFromWishlist(product.id).then(function () {
        var productIndex = products.value.findIndex(function (p) {
          return p.id === product.id;
        });
        products.value.splice(productIndex, 1);
      });
    };

    var fetchWishlistProducts = function fetchWishlistProducts() {
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('app-ecommerce/fetchWishlistProducts').then(function (response) {
        products.value = response.data.products;
      });
    };

    fetchWishlistProducts();
    return {
      products: products,
      // UI
      handleWishlistCartActionClick: handleWishlistCartActionClick,
      removeProductFromWishlistClick: removeProductFromWishlistClick
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources/js/src/@core/scss/base/bootstrap-extended/_include.scss 14:9                  @import\n  resources/js/src/@core/scss/base/pages/app-ecommerce.scss 10:9                          @import\n  resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue 136:9  root stylesheet");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceWishlist.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=template&id=39507fbc&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=template&id=39507fbc& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "grid-view wishlist-items" },
    _vm._l(_vm.products, function (product) {
      return _c(
        "b-card",
        {
          key: product.id,
          staticClass: "ecommerce-card",
          attrs: { "no-body": "" },
        },
        [
          _c(
            "div",
            { staticClass: "item-img text-center" },
            [
              _c(
                "b-link",
                {
                  attrs: {
                    to: {
                      name: "apps-e-commerce-product-details",
                      params: { slug: product.slug },
                    },
                  },
                },
                [
                  _c("b-img", {
                    staticClass: "card-img-top",
                    attrs: {
                      alt: product.name + "-" + product.id,
                      fluid: "",
                      src: product.image,
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
            "b-card-body",
            [
              _c("div", { staticClass: "item-wrapper" }, [
                _c("div", { staticClass: "item-rating" }, [
                  _c(
                    "ul",
                    { staticClass: "unstyled-list list-inline" },
                    _vm._l(5, function (star) {
                      return _c(
                        "li",
                        {
                          key: star,
                          staticClass: "ratings-list-item",
                          class: { "ml-25": star - 1 },
                        },
                        [
                          _c("feather-icon", {
                            class: [
                              { "fill-current": star <= product.rating },
                              star <= product.rating
                                ? "text-warning"
                                : "text-muted",
                            ],
                            attrs: { icon: "StarIcon", size: "16" },
                          }),
                        ],
                        1
                      )
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("h6", { staticClass: "item-price" }, [
                    _vm._v(
                      "\n            $" + _vm._s(product.price) + "\n          "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "h6",
                { staticClass: "item-name" },
                [
                  _c(
                    "b-link",
                    {
                      staticClass: "text-body",
                      attrs: {
                        to: {
                          name: "apps-e-commerce-product-details",
                          params: { slug: product.slug },
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n          " + _vm._s(product.name) + "\n        "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-card-text",
                    { staticClass: "item-company" },
                    [
                      _vm._v("\n          By "),
                      _c("b-link", { staticClass: "ml-25" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(product.brand) +
                            "\n          "
                        ),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("b-card-text", { staticClass: "item-description" }, [
                _vm._v("\n        " + _vm._s(product.description) + "\n      "),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "item-options text-center" },
            [
              _c(
                "b-button",
                {
                  staticClass: "btn-wishlist remove-wishlist",
                  attrs: { variant: "light" },
                  on: {
                    click: function ($event) {
                      return _vm.removeProductFromWishlistClick(product)
                    },
                  },
                },
                [
                  _c("feather-icon", { attrs: { icon: "XIcon" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Remove")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-cart move-cart",
                  attrs: { variant: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.handleWishlistCartActionClick(
                        product,
                        _vm.removeProductFromWishlistClick
                      )
                    },
                  },
                },
                [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "ShoppingCartIcon" },
                  }),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(product.isInCart ? "View In Cart" : "Move to Cart")
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/utils/utils.js":
/*!***********************************************!*\
  !*** ./resources/js/src/@core/utils/utils.js ***!
  \***********************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var _var_www_html_ooak_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _var_www_html_ooak_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return Object(_var_www_html_ooak_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_3__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return Object(_var_www_html_ooak_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_var_www_html_ooak_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceWishlist_vue_vue_type_template_id_39507fbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceWishlist.vue?vue&type=template&id=39507fbc& */ "./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=template&id=39507fbc&");
/* harmony import */ var _ECommerceWishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceWishlist.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceWishlist_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceWishlist.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ECommerceWishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceWishlist_vue_vue_type_template_id_39507fbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceWishlist_vue_vue_type_template_id_39507fbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceWishlist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceWishlist.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=template&id=39507fbc&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=template&id=39507fbc& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_template_id_39507fbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceWishlist.vue?vue&type=template&id=39507fbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue?vue&type=template&id=39507fbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_template_id_39507fbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceWishlist_vue_vue_type_template_id_39507fbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/useEcommerce.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/useEcommerce.js ***!
  \****************************************************************/
/*! exports provided: useEcommerce, useEcommerceUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEcommerce", function() { return useEcommerce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEcommerceUi", function() { return useEcommerceUi; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/utils */ "./resources/js/src/@core/utils/utils.js");


var useEcommerce = function useEcommerce() {
  // eslint-disable-next-line arrow-body-style
  var addProductInWishlist = function addProductInWishlist(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/addProductInWishlist', {
      productId: productId
    });
  }; // eslint-disable-next-line arrow-body-style


  var removeProductFromWishlist = function removeProductFromWishlist(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/removeProductFromWishlist', {
      productId: productId
    });
  }; // eslint-disable-next-line arrow-body-style


  var addProductInCart = function addProductInCart(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/addProductInCart', {
      productId: productId
    });
  }; // eslint-disable-next-line arrow-body-style


  var removeProductFromCart = function removeProductFromCart(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/removeProductFromCart', {
      productId: productId
    });
  };

  return {
    addProductInWishlist: addProductInWishlist,
    removeProductFromWishlist: removeProductFromWishlist,
    addProductInCart: addProductInCart,
    removeProductFromCart: removeProductFromCart
  };
};
var useEcommerceUi = function useEcommerceUi() {
  var _useRouter = Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      router = _useRouter.router;

  var toggleProductInWishlist = function toggleProductInWishlist(product) {
    var _useEcommerce = useEcommerce(),
        addProductInWishlist = _useEcommerce.addProductInWishlist,
        removeProductFromWishlist = _useEcommerce.removeProductFromWishlist;

    if (product.isInWishlist) {
      removeProductFromWishlist(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInWishlist = false;
      });
    } else {
      addProductInWishlist(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInWishlist = true;
      });
    }
  };

  var handleCartActionClick = function handleCartActionClick(product) {
    var _useEcommerce2 = useEcommerce(),
        addProductInCart = _useEcommerce2.addProductInCart;

    if (product.isInCart) {
      router.push({
        name: 'apps-e-commerce-checkout'
      });
    } else {
      addProductInCart(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInCart = true; // Update cart items count

        _store__WEBPACK_IMPORTED_MODULE_0__["default"].commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', _store__WEBPACK_IMPORTED_MODULE_0__["default"].state['app-ecommerce'].cartItemsCount + 1);
      });
    }
  };

  var handleWishlistCartActionClick = function handleWishlistCartActionClick(product, removeProductFromWishlistUi) {
    var _useEcommerce3 = useEcommerce(),
        addProductInCart = _useEcommerce3.addProductInCart,
        removeProductFromWishlist = _useEcommerce3.removeProductFromWishlist;

    if (product.isInCart) {
      router.push({
        name: 'apps-e-commerce-checkout'
      });
    } else {
      addProductInCart(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInCart = true;
        removeProductFromWishlist(product.id); // Update cart items count

        _store__WEBPACK_IMPORTED_MODULE_0__["default"].commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', _store__WEBPACK_IMPORTED_MODULE_0__["default"].state['app-ecommerce'].cartItemsCount + 1);
      }).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInWishlist = false;
        removeProductFromWishlistUi(product);
      });
    }
  };

  return {
    toggleProductInWishlist: toggleProductInWishlist,
    handleCartActionClick: handleCartActionClick,
    handleWishlistCartActionClick: handleWishlistCartActionClick
  };
};

/***/ })

}]);