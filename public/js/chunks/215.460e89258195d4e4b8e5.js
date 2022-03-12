(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[215],{

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/@babel/runtime/helpers/esm/typeof.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/comp-functions/ui/app */ "./resources/js/src/@core/comp-functions/ui/app.js");
/* harmony import */ var _ECommerceShopLeftFilterSidebar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue");
/* harmony import */ var _useECommerceShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useECommerceShop */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/useECommerceShop.js");
/* harmony import */ var _useEcommerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useEcommerce */ "./resources/js/src/views/apps/e-commerce/useEcommerce.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  components: {
    // BSV
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadioGroup"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroupAppend"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    // SFC
    ShopLeftFilterSidebar: _ECommerceShopLeftFilterSidebar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  setup: function setup() {
    var _useShopFiltersSortin = Object(_useECommerceShop__WEBPACK_IMPORTED_MODULE_5__["useShopFiltersSortingAndPagination"])(),
        filters = _useShopFiltersSortin.filters,
        filterOptions = _useShopFiltersSortin.filterOptions,
        sortBy = _useShopFiltersSortin.sortBy,
        sortByOptions = _useShopFiltersSortin.sortByOptions;

    var _useEcommerceUi = Object(_useEcommerce__WEBPACK_IMPORTED_MODULE_6__["useEcommerceUi"])(),
        handleCartActionClick = _useEcommerceUi.handleCartActionClick,
        toggleProductInWishlist = _useEcommerceUi.toggleProductInWishlist;

    var _useShopUi = Object(_useECommerceShop__WEBPACK_IMPORTED_MODULE_5__["useShopUi"])(),
        itemView = _useShopUi.itemView,
        itemViewOptions = _useShopUi.itemViewOptions,
        totalProducts = _useShopUi.totalProducts;

    var _useShopRemoteData = Object(_useECommerceShop__WEBPACK_IMPORTED_MODULE_5__["useShopRemoteData"])(),
        products = _useShopRemoteData.products,
        fetchProducts = _useShopRemoteData.fetchProducts;

    var _useResponsiveAppLeft = Object(_core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_3__["useResponsiveAppLeftSidebarVisibility"])(),
        mqShallShowLeftSidebar = _useResponsiveAppLeft.mqShallShowLeftSidebar; // Wrapper Function for `fetchProducts` which can be triggered initially and upon changes of filters


    var fetchShopProducts = function fetchShopProducts() {
      fetchProducts({
        q: filters.value.q,
        sortBy: sortBy.value.value,
        page: filters.value.page,
        perPage: filters.value.perPage
      }).then(function (response) {
        products.value = response.data.products;
        totalProducts.value = response.data.total;
      });
    };

    fetchShopProducts();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])([filters, sortBy], function () {
      fetchShopProducts();
    }, {
      deep: true
    });
    return {
      // useShopFiltersSortingAndPagination
      filters: filters,
      filterOptions: filterOptions,
      sortBy: sortBy,
      sortByOptions: sortByOptions,
      // useShopUi
      itemView: itemView,
      itemViewOptions: itemViewOptions,
      totalProducts: totalProducts,
      toggleProductInWishlist: toggleProductInWishlist,
      handleCartActionClick: handleCartActionClick,
      // useShopRemoteData
      products: products,
      // mqShallShowLeftSidebar
      mqShallShowLeftSidebar: mqShallShowLeftSidebar
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadioGroup"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    // 3rd Party
    VueSlider: vue_slider_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    filters: {
      type: Object,
      required: true
    },
    filterOptions: {
      type: Object,
      required: true
    },
    mqShallShowLeftSidebar: {
      type: Boolean,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources/js/src/@core/scss/base/bootstrap-extended/_include.scss 14:9          @import\n  resources/js/src/@core/scss/base/pages/app-ecommerce.scss 10:9                  @import\n  resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue 328:9  root stylesheet");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".item-view-radio-group[data-v-1ee1d35e]  .btn {\n  display: flex;\n  align-items: center;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources/js/src/@core/scss/base/bootstrap-extended/_include.scss 14:9                           @import\n  resources/js/src/@core/scss/vue/libs/vue-slider.scss 1:9                                         @import\n  resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue 143:9  root stylesheet");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .categories-radio-group[data-v-0021d822]  > .custom-control, [dir] .brands-radio-group[data-v-0021d822]  > .custom-control, [dir] .price-range-defined-radio-group[data-v-0021d822]  > .custom-control {\n  margin-bottom: 0.75rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=1ee1d35e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=1ee1d35e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "inherit" } },
    [
      _c("section", { attrs: { id: "ecommerce-header" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-12" }, [
            _c("div", { staticClass: "ecommerce-header-items" }, [
              _c(
                "div",
                { staticClass: "result-toggler" },
                [
                  _c("feather-icon", {
                    staticClass: "d-block d-lg-none",
                    attrs: { icon: "MenuIcon", size: "21" },
                    on: {
                      click: function ($event) {
                        _vm.mqShallShowLeftSidebar = true
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "search-results" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.totalProducts) +
                        " results found\n            "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "view-options d-flex" },
                [
                  _c(
                    "b-dropdown",
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
                        text: _vm.sortBy.text,
                        right: "",
                        variant: "outline-primary",
                      },
                    },
                    _vm._l(_vm.sortByOptions, function (sortOption) {
                      return _c(
                        "b-dropdown-item",
                        {
                          key: sortOption.value,
                          on: {
                            click: function ($event) {
                              _vm.sortBy = sortOption
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(sortOption.text) +
                              "\n              "
                          ),
                        ]
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio-group",
                    {
                      staticClass: "ml-1 list item-view-radio-group",
                      attrs: {
                        buttons: "",
                        size: "sm",
                        "button-variant": "outline-primary",
                      },
                      model: {
                        value: _vm.itemView,
                        callback: function ($$v) {
                          _vm.itemView = $$v
                        },
                        expression: "itemView",
                      },
                    },
                    _vm._l(_vm.itemViewOptions, function (option) {
                      return _c(
                        "b-form-radio",
                        { key: option.value, attrs: { value: option.value } },
                        [
                          _c("feather-icon", {
                            attrs: { icon: option.icon, size: "18" },
                          }),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "body-content-overlay" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "ecommerce-searchbar mt-1" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "input-group-merge" },
                    [
                      _c("b-form-input", {
                        staticClass: "search-product",
                        attrs: { placeholder: "Search Product" },
                        model: {
                          value: _vm.filters.q,
                          callback: function ($$v) {
                            _vm.$set(_vm.filters, "q", $$v)
                          },
                          expression: "filters.q",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        { attrs: { "is-text": "" } },
                        [
                          _c("feather-icon", {
                            staticClass: "text-muted",
                            attrs: { icon: "SearchIcon" },
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
        "section",
        { class: _vm.itemView },
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
                          "\n              $" +
                            _vm._s(product.price) +
                            "\n            "
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
                            "\n            " +
                              _vm._s(product.name) +
                              "\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card-text",
                        { staticClass: "item-company" },
                        [
                          _vm._v("\n            By "),
                          _c("b-link", { staticClass: "ml-25" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(product.brand) +
                                "\n            "
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
                    _vm._v(
                      "\n          " +
                        _vm._s(product.description) +
                        "\n        "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "item-options text-center" },
                [
                  _c("div", { staticClass: "item-wrapper" }, [
                    _c("div", { staticClass: "item-cost" }, [
                      _c("h4", { staticClass: "item-price" }, [
                        _vm._v(
                          "\n              $" +
                            _vm._s(product.price) +
                            "\n            "
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "btn-wishlist",
                      attrs: { variant: "light", tag: "a" },
                      on: {
                        click: function ($event) {
                          return _vm.toggleProductInWishlist(product)
                        },
                      },
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-50",
                        class: { "text-danger": product.isInWishlist },
                        attrs: { icon: "HeartIcon" },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Wishlist")]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "btn-cart",
                      attrs: { variant: "primary", tag: "a" },
                      on: {
                        click: function ($event) {
                          return _vm.handleCartActionClick(product)
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
                          _vm._s(
                            product.isInCart ? "View In Cart" : "Add to Cart"
                          )
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
      ),
      _vm._v(" "),
      _c(
        "section",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c("b-pagination", {
                    attrs: {
                      "total-rows": _vm.totalProducts,
                      "per-page": _vm.filters.perPage,
                      "first-number": "",
                      align: "center",
                      "last-number": "",
                      "prev-class": "prev-item",
                      "next-class": "next-item",
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "prev-text",
                        fn: function () {
                          return [
                            _c("feather-icon", {
                              attrs: { icon: "ChevronLeftIcon", size: "18" },
                            }),
                          ]
                        },
                        proxy: true,
                      },
                      {
                        key: "next-text",
                        fn: function () {
                          return [
                            _c("feather-icon", {
                              attrs: { icon: "ChevronRightIcon", size: "18" },
                            }),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                    model: {
                      value: _vm.filters.page,
                      callback: function ($$v) {
                        _vm.$set(_vm.filters, "page", $$v)
                      },
                      expression: "filters.page",
                    },
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
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "content-renderer-sidebar-detached-left" } },
        [
          _c("shop-left-filter-sidebar", {
            attrs: {
              filters: _vm.filters,
              "filter-options": _vm.filterOptions,
              "mq-shall-show-left-sidebar": _vm.mqShallShowLeftSidebar,
            },
            on: {
              "update:mqShallShowLeftSidebar": function ($event) {
                _vm.mqShallShowLeftSidebar = $event
              },
              "update:mq-shall-show-left-sidebar": function ($event) {
                _vm.mqShallShowLeftSidebar = $event
              },
            },
          }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=0021d822&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=0021d822&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sidebar-detached sidebar-left" }, [
    _c("div", { staticClass: "sidebar" }, [
      _c(
        "div",
        {
          staticClass: "sidebar-shop",
          class: { show: _vm.mqShallShowLeftSidebar },
        },
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { cols: "12" } }, [
                _c("h6", { staticClass: "filter-heading d-none d-lg-block" }, [
                  _vm._v("\n            Filters\n          "),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-card", [
            _c(
              "div",
              { staticClass: "multi-range-price" },
              [
                _c("h6", { staticClass: "filter-title mt-0" }, [
                  _vm._v("\n            Multi Range\n          "),
                ]),
                _vm._v(" "),
                _c("b-form-radio-group", {
                  staticClass: "price-range-defined-radio-group",
                  attrs: {
                    stacked: "",
                    options: _vm.filterOptions.priceRangeDefined,
                  },
                  model: {
                    value: _vm.filters.priceRangeDefined,
                    callback: function ($$v) {
                      _vm.$set(_vm.filters, "priceRangeDefined", $$v)
                    },
                    expression: "filters.priceRangeDefined",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "price-slider" },
              [
                _c("h6", { staticClass: "filter-title" }, [
                  _vm._v("\n            Price Range\n          "),
                ]),
                _vm._v(" "),
                _c("vue-slider", {
                  attrs: {
                    direction: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                  },
                  model: {
                    value: _vm.filters.priceRange,
                    callback: function ($$v) {
                      _vm.$set(_vm.filters, "priceRange", $$v)
                    },
                    expression: "filters.priceRange",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "product-categories" },
              [
                _c("h6", { staticClass: "filter-title" }, [
                  _vm._v("\n            Categories\n          "),
                ]),
                _vm._v(" "),
                _c("b-form-radio-group", {
                  staticClass: "categories-radio-group",
                  attrs: { stacked: "", options: _vm.filterOptions.categories },
                  model: {
                    value: _vm.filters.categories,
                    callback: function ($$v) {
                      _vm.$set(_vm.filters, "categories", $$v)
                    },
                    expression: "filters.categories",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "brands" },
              [
                _c("h6", { staticClass: "filter-title" }, [
                  _vm._v("\n            Brands\n          "),
                ]),
                _vm._v(" "),
                _c("b-form-radio-group", {
                  staticClass: "brands-radio-group",
                  attrs: { stacked: "", options: _vm.filterOptions.brands },
                  model: {
                    value: _vm.filters.brands,
                    callback: function ($$v) {
                      _vm.$set(_vm.filters, "brands", $$v)
                    },
                    expression: "filters.brands",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ratings" },
              [
                _c("h6", { staticClass: "filter-title" }, [
                  _vm._v("\n            Ratings\n          "),
                ]),
                _vm._v(" "),
                _vm._l(_vm.filterOptions.ratings, function (rating) {
                  return _c(
                    "div",
                    { key: rating.rating, staticClass: "ratings-list" },
                    [
                      _c("b-link", [
                        _c(
                          "div",
                          { staticClass: "d-flex" },
                          [
                            _vm._l(5, function (star) {
                              return _c("feather-icon", {
                                key: star,
                                class: [
                                  { "fill-current": star <= rating.rating },
                                  star <= rating.rating
                                    ? "text-warning"
                                    : "text-muted",
                                ],
                                attrs: { icon: "StarIcon", size: "17" },
                              })
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-25" }, [
                              _vm._v("& up"),
                            ]),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "stars-received" }, [
                        _c("span", [_vm._v(_vm._s(rating.count))]),
                      ]),
                    ],
                    1
                  )
                }),
              ],
              2
            ),
          ]),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c("div", {
      staticClass: "body-content-overlay",
      class: { show: _vm.mqShallShowLeftSidebar },
      on: {
        click: function ($event) {
          return _vm.$emit("update:mq-shall-show-left-sidebar", false)
        },
      },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js'");

/***/ }),

/***/ "./resources/js/src/@core/comp-functions/ui/app.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/@core/comp-functions/ui/app.js ***!
  \*********************************************************/
/*! exports provided: useResponsiveAppLeftSidebarVisibility, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResponsiveAppLeftSidebarVisibility", function() { return useResponsiveAppLeftSidebarVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");


var useResponsiveAppLeftSidebarVisibility = function useResponsiveAppLeftSidebarVisibility() {
  var mqShallShowLeftSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false); // Close Active Sidebars and other stuff when going in large device

  var currentBreakPoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['app/currentBreakPoint'];
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(currentBreakPoint, function (val, oldVal) {
    // Reset chats & contacts left sidebar
    if (oldVal === 'md' && val === 'lg') mqShallShowLeftSidebar.value = false;
  });
  return {
    mqShallShowLeftSidebar: mqShallShowLeftSidebar
  };
};
var _ = {};

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

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceShop_vue_vue_type_template_id_1ee1d35e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=template&id=1ee1d35e&scoped=true& */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=1ee1d35e&scoped=true&");
/* harmony import */ var _ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _ECommerceShop_vue_vue_type_style_index_1_id_1ee1d35e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true& */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceShop_vue_vue_type_template_id_1ee1d35e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceShop_vue_vue_type_template_id_1ee1d35e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ee1d35e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_1ee1d35e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=1ee1d35e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_1ee1d35e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_1ee1d35e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_1ee1d35e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_1ee1d35e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=1ee1d35e&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=1ee1d35e&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_template_id_1ee1d35e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=template&id=1ee1d35e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=1ee1d35e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_template_id_1ee1d35e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_template_id_1ee1d35e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_0021d822_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=0021d822&scoped=true& */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=0021d822&scoped=true&");
/* harmony import */ var _ECommerceShopLeftFilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_0021d822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true& */ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ECommerceShopLeftFilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_0021d822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_0021d822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0021d822",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_0021d822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=0021d822&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_0021d822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_0021d822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_0021d822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_0021d822_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=0021d822&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=0021d822&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_0021d822_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=0021d822&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=0021d822&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_0021d822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_0021d822_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/apps/e-commerce/e-commerce-shop/useECommerceShop.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/apps/e-commerce/e-commerce-shop/useECommerceShop.js ***!
  \************************************************************************************/
/*! exports provided: useShopFiltersSortingAndPagination, useShopUi, useShopRemoteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShopFiltersSortingAndPagination", function() { return useShopFiltersSortingAndPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShopUi", function() { return useShopUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShopRemoteData", function() { return useShopRemoteData; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");



var useShopFiltersSortingAndPagination = function useShopFiltersSortingAndPagination() {
  var filters = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({
    q: '',
    priceRangeDefined: 'all',
    priceRange: [0, 100],
    categories: [],
    brands: [],
    ratings: null,
    page: 1,
    perPage: 9
  });
  var filterOptions = {
    priceRangeDefined: [{
      text: 'All',
      value: 'all'
    }, {
      text: '<= $10',
      value: '<=10'
    }, {
      text: '$10 - $100',
      value: '10-100'
    }, {
      text: '$100 - $500',
      value: '100-500'
    }, {
      text: '>= $500',
      value: '>=500'
    }],
    categories: ['Appliances', 'Audio', 'Cameras & Camcorders', 'Car Electronics & GPS', 'Cell Phones', 'Computers & Tablets', 'Health, Fitness & Beauty', 'Office & School Supplies', 'TV & Home Theater', 'Video Games'],
    brands: ['Insignia™', 'Samsung', 'Metra', 'HP', 'Apple', 'GE', 'Sony', 'Incipio', 'KitchenAid', 'Whirlpool'],
    ratings: [{
      rating: 4,
      count: 160
    }, {
      rating: 3,
      count: 176
    }, {
      rating: 2,
      count: 291
    }, {
      rating: 1,
      count: 190
    }]
  }; // Sorting

  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({
    text: 'Featured',
    value: 'featured'
  });
  var sortByOptions = [{
    text: 'Featured',
    value: 'featured'
  }, {
    text: 'Lowest',
    value: 'price-asc'
  }, {
    text: 'Highest',
    value: 'price-desc'
  }];
  return {
    // Filter
    filters: filters,
    filterOptions: filterOptions,
    // Sort
    sortBy: sortBy,
    sortByOptions: sortByOptions
  };
};
var useShopUi = function useShopUi() {
  var itemView = 'grid-view';
  var itemViewOptions = [{
    icon: 'GridIcon',
    value: 'grid-view'
  }, {
    icon: 'ListIcon',
    value: 'list-view'
  }]; // Pagination count <= required by pagination component

  var totalProducts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
  return {
    itemView: itemView,
    itemViewOptions: itemViewOptions,
    totalProducts: totalProducts
  };
};
var useShopRemoteData = function useShopRemoteData() {
  var products = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])([]);

  var fetchProducts = function fetchProducts() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch.apply(_store__WEBPACK_IMPORTED_MODULE_2__["default"], ['app-ecommerce/fetchProducts'].concat(args));
  };

  return {
    products: products,
    fetchProducts: fetchProducts
  };
};

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