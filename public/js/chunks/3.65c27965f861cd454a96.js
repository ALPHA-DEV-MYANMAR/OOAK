(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _ChartjsBarChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsBarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue");
/* harmony import */ var _ChartjsLineChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartjsLineChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue");
/* harmony import */ var _ChartjsLineAreaChart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChartjsLineAreaChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue");
/* harmony import */ var _ChartjsRadarChart_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChartjsRadarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue");
/* harmony import */ var _ChartjsPolarAreaChart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChartjsPolarAreaChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue");
/* harmony import */ var _ChartjsDoughnutChart_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChartjsDoughnutChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue");
/* harmony import */ var _ChartjsHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChartjsHorizontalBarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue");
/* harmony import */ var _ChartjsBubbleChart_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChartjsBubbleChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue");
/* harmony import */ var _ChartjsScatterChart_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChartjsScatterChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    ChartjsBarChart: _ChartjsBarChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChartjsLineChart: _ChartjsLineChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChartjsLineAreaChart: _ChartjsLineAreaChart_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChartjsRadarChart: _ChartjsRadarChart_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ChartjsPolarAreaChart: _ChartjsPolarAreaChart_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ChartjsDoughnutChart: _ChartjsDoughnutChart_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    ChartjsHorizontalBarChart: _ChartjsHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ChartjsScatterChart: _ChartjsScatterChart_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    ChartjsBubbleChart: _ChartjsBubbleChart_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _charts_components_ChartjsComponentBarChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts-components/ChartjsComponentBarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    ChartjsComponentBarChart: _charts_components_ChartjsComponentBarChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_3__["default"],
      rangePicker: ['2019-05-01', '2019-05-10']
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _charts_components_ChartjsComponentBubbleChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-components/ChartjsComponentBubbleChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ChartjsComponentBubbleChart: _charts_components_ChartjsComponentBubbleChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"]
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _charts_components_ChartjsComponentDoughnutChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-components/ChartjsComponentDoughnutChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ChartjsComponentDoughnutChart: _charts_components_ChartjsComponentDoughnutChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"]
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_2__["default"],
      stockData: [{
        device: 'Desktop',
        symbol: 'MonitorIcon',
        color: 'text-primary',
        percentage: 80,
        upDown: 2
      }, {
        device: 'Mobile',
        symbol: 'TabletIcon',
        color: 'text-warning',
        percentage: 10,
        upDown: 8
      }, {
        device: 'Tablet',
        symbol: 'TabletIcon',
        color: 'text-success',
        percentage: 10,
        upDown: -5
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _charts_components_ChartjsComponentHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts-components/ChartjsComponentHorizontalBarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    ChartjsComponentHorizontalBarChart: _charts_components_ChartjsComponentHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_3__["default"],
      rangePicker: ['2019-05-01', '2019-05-10']
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _charts_components_ChartjsComponentLineChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts-components/ChartjsComponentLineChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ChartjsComponentLineChart: _charts_components_ChartjsComponentLineChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_3__["default"],
      rangePicker: ['2019-05-01', '2019-05-10']
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _charts_components_ChartjsComponentLineChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-components/ChartjsComponentLineChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    ChartjsComponentLineChart: _charts_components_ChartjsComponentLineChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_2__["default"],
      plugins: [// to add spacing between legends and chart
      {
        beforeInit: function beforeInit(chart) {
          /* eslint-disable func-names, no-param-reassign */
          chart.legend.afterFit = function () {
            this.height += 20;
          };
          /* eslint-enable */

        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _charts_components_ChartjsComponentPolarAreaChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-components/ChartjsComponentPolarAreaChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ChartjsComponentPolarAreaChart: _charts_components_ChartjsComponentPolarAreaChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"]
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _charts_components_ChartjsComponentRadarChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts-components/ChartjsComponentRadarChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js");
//
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
    ChartjsComponentRadarChart: _charts_components_ChartjsComponentRadarChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"]
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts-components/ChartjsComponentScatterChart.vue */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ChartjsComponentScatterChart: _charts_components_ChartjsComponentScatterChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButtonGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




/*eslint-disable */

chart_js__WEBPACK_IMPORTED_MODULE_3___default.a.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var viewVar = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = viewVar.borderWidth;
  var cornerRadius = 20;

  if (!viewVar.horizontal) {
    left = viewVar.x - viewVar.width / 2;
    right = viewVar.x + viewVar.width / 2;
    top = viewVar.y;
    bottom = viewVar.base;
    signX = 1;
    signY = top > bottom ? 1 : -1;
    borderSkipped = viewVar.borderSkipped || 'bottom';
  } else {
    left = viewVar.base;
    right = viewVar.x;
    top = viewVar.y - viewVar.height / 2;
    bottom = viewVar.y + viewVar.height / 2;
    signX = right > left ? 1 : -1;
    signY = 1;
    borderSkipped = viewVar.borderSkipped || 'left';
  }

  if (borderWidth) {
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2;
    var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);

    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    }

    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = viewVar.backgroundColor;
  ctx.strokeStyle = viewVar.borderColor;
  ctx.lineWidth = borderWidth;
  var corners = [[left, bottom], [left, top], [right, top], [right, bottom]];
  var borders = ['bottom', 'left', 'top', 'right'];
  var startCorner = borders.indexOf(borderSkipped, 0);

  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  }

  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    var nextCornerId = i + 1;

    if (nextCornerId == 4) {
      nextCornerId = 0;
    }

    var nextCorner = cornerAt(nextCornerId);
    var width = corners[2][0] - corners[1][0],
        height = corners[0][1] - corners[1][1],
        x = corners[1][0],
        y = corners[1][1];
    var _radius = cornerRadius;

    if (_radius > height / 2) {
      _radius = height / 2;
    }

    if (_radius > width / 2) {
      _radius = width / 2;
    }

    if (!viewVar.horizontal) {
      ctx.moveTo(x + _radius, y);
      ctx.lineTo(x + width - _radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + _radius);
      ctx.lineTo(x + width, y + height - _radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width, y + height);
      ctx.lineTo(x + _radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height);
      ctx.lineTo(x, y + _radius);
      ctx.quadraticCurveTo(x, y, x + _radius, y);
    } else {
      ctx.moveTo(x + _radius, y);
      ctx.lineTo(x + width - _radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + _radius);
      ctx.lineTo(x + width, y + height - _radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - _radius, y + height);
      ctx.lineTo(x + _radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height);
      ctx.lineTo(x, y + _radius);
      ctx.quadraticCurveTo(x, y, x, y);
    }
  }

  ctx.fill();

  if (borderWidth) {
    ctx.stroke();
  }
};
/* eslint-enable */


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_2__["Bar"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bubble"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Doughnut"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["HorizontalBar"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    },
    plugins: {
      type: Array,
      "default": null
    },
    styles: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options, this.plugins, this.styles);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["PolarArea"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Radar"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Scatter"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/chart.js/dist/Chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/Chart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/chart.js/dist/Chart.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/core-js/modules/es.array.fill.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/core-js/modules/web.timers.js'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources/js/src/@core/scss/base/bootstrap-extended/_include.scss 14:9           @import\n  resources/js/src/@core/scss/base/plugins/forms/pickers/form-flat-pickr.scss 1:9  @import\n  resources/js/src/@core/scss/vue/libs/vue-flatpicker.scss 2:9                     @import\n  resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue 57:9   root stylesheet");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources/js/src/@core/scss/base/bootstrap-extended/_include.scss 14:9                    @import\n  resources/js/src/@core/scss/base/plugins/forms/pickers/form-flat-pickr.scss 1:9           @import\n  resources/js/src/@core/scss/vue/libs/vue-flatpicker.scss 2:9                              @import\n  resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue 63:9  root stylesheet");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources/js/src/@core/scss/base/bootstrap-extended/_include.scss 14:9               @import\n  resources/js/src/@core/scss/base/plugins/forms/pickers/form-flat-pickr.scss 1:9      @import\n  resources/js/src/@core/scss/vue/libs/vue-flatpicker.scss 2:9                         @import\n  resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue 58:9  root stylesheet");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-chartjs/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-chartjs/es/index.js ***!
  \**********************************************/
/*! exports provided: default, VueCharts, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, mixins, generateChart */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/vue-chartjs/es/index.js'");

/***/ }),

/***/ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/var/www/html/ooak/node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "b-row",
    { staticClass: "match-height" },
    [
      _c("b-col", { attrs: { cols: "12" } }, [
        _c(
          "p",
          { staticClass: "mb-2" },
          [
            _c("span", [
              _vm._v("You can easily create reuseable chart components. "),
            ]),
            _vm._v(" "),
            _c(
              "b-link",
              { attrs: { href: "https://vue-chartjs.org/", target: "_blank" } },
              [_vm._v("\n        vue-chartjs\n      ")]
            ),
            _vm._v(" "),
            _c("span", [
              _vm._v(" is a wrapper for Chart.js. Read full documnetation "),
            ]),
            _vm._v(" "),
            _c(
              "b-link",
              {
                attrs: {
                  href: "https://vue-chartjs.org/guide/",
                  target: "_blank",
                },
              },
              [_vm._v("\n        here\n      ")]
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("b-col", { attrs: { md: "6" } }, [_c("chartjs-bar-chart")], 1),
      _vm._v(" "),
      _c(
        "b-col",
        { attrs: { md: "6" } },
        [_c("chartjs-horizontal-bar-chart")],
        1
      ),
      _vm._v(" "),
      _c("b-col", { attrs: { cols: "12" } }, [_c("chartjs-line-chart")], 1),
      _vm._v(" "),
      _c("b-col", { attrs: { md: "6" } }, [_c("chartjs-radar-chart")], 1),
      _vm._v(" "),
      _c("b-col", { attrs: { md: "6" } }, [_c("chartjs-polar-area-chart")], 1),
      _vm._v(" "),
      _c("b-col", { attrs: { cols: "12" } }, [_c("chartjs-bubble-chart")], 1),
      _vm._v(" "),
      _c("b-col", { attrs: { lg: "4" } }, [_c("chartjs-doughnut-chart")], 1),
      _vm._v(" "),
      _c("b-col", { attrs: { lg: "8" } }, [_c("chartjs-scatter-chart")], 1),
      _vm._v(" "),
      _c(
        "b-col",
        { attrs: { cols: "12" } },
        [_c("chartjs-line-area-chart")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c("b-card-title", [_vm._v("Latest Statistics")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex align-items-center" },
            [
              _c("feather-icon", {
                attrs: { icon: "CalendarIcon", size: "16" },
              }),
              _vm._v(" "),
              _c("flat-pickr", {
                staticClass:
                  "form-control flat-picker bg-transparent border-0 shadow-none",
                attrs: { config: { mode: "range" }, placeholder: "YYYY-MM-DD" },
                model: {
                  value: _vm.rangePicker,
                  callback: function ($$v) {
                    _vm.rangePicker = $$v
                  },
                  expression: "rangePicker",
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
          _c("chartjs-component-bar-chart", {
            attrs: {
              height: 400,
              data: _vm.chartjsData.latestBarChart.data,
              options: _vm.chartjsData.latestBarChart.options,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c("b-card-title", [_vm._v("Bubble Chart")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex align-items-center flex-wrap" },
            [
              _c("h5", { staticClass: "font-weight-bolder mb-0 mr-1" }, [
                _vm._v("\n        $ 100,000\n      "),
              ]),
              _vm._v(" "),
              _c(
                "b-badge",
                { attrs: { variant: "light-secondary" } },
                [
                  _c("feather-icon", {
                    staticClass: "text-danger",
                    attrs: { icon: "ArrowDownIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-25" }, [_vm._v("20%")]),
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
        "b-card-body",
        [
          _c("chartjs-component-bubble-chart", {
            attrs: {
              height: 500,
              data: _vm.chartjsData.bubbleChart.data,
              options: _vm.chartjsData.bubbleChart.options,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Sessions By Device" } },
    [
      _c("chartjs-component-doughnut-chart", {
        staticClass: "mb-3",
        attrs: {
          height: 275,
          data: _vm.chartjsData.doughnutChart.data,
          options: _vm.chartjsData.doughnutChart.options,
        },
      }),
      _vm._v(" "),
      _vm._l(_vm.stockData, function (stock, index) {
        return _c(
          "div",
          {
            key: stock.device,
            staticClass: "d-flex justify-content-between",
            class: index < _vm.stockData.length - 1 ? "mb-1" : "",
          },
          [
            _c(
              "div",
              { staticClass: "d-flex align-items-center" },
              [
                _c("feather-icon", {
                  class: stock.color,
                  attrs: { icon: stock.symbol, size: "16" },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "font-weight-bold ml-75 mr-25" }, [
                  _vm._v(_vm._s(stock.device)),
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("- " + _vm._s(stock.percentage) + "%")]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("span", [_vm._v(_vm._s(stock.upDown) + "%")]),
                _vm._v(" "),
                _c("feather-icon", {
                  class: stock.upDown > 0 ? "text-success" : "text-danger",
                  attrs: {
                    icon: stock.upDown > 0 ? "ArrowUpIcon" : "ArrowDownIcon",
                  },
                }),
              ],
              1
            ),
          ]
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { "no-body": "" } },
    [
      _c("b-card-header", [
        _c(
          "div",
          [
            _c("b-card-sub-title", { staticClass: "mb-25" }, [
              _vm._v("\n        Balance\n      "),
            ]),
            _vm._v(" "),
            _c("b-card-title", [_vm._v("$74,123")]),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex align-items-center" },
          [
            _c("feather-icon", { attrs: { icon: "CalendarIcon", size: "16" } }),
            _vm._v(" "),
            _c("flat-pickr", {
              staticClass:
                "form-control flat-picker bg-transparent border-0 shadow-none",
              attrs: { config: { mode: "range" }, placeholder: "YYYY-MM-DD" },
              model: {
                value: _vm.rangePicker,
                callback: function ($$v) {
                  _vm.rangePicker = $$v
                },
                expression: "rangePicker",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "b-card-body",
        [
          _c("chartjs-component-horizontal-bar-chart", {
            attrs: {
              height: 400,
              data: _vm.chartjsData.horizontalBarChart.data,
              options: _vm.chartjsData.horizontalBarChart.options,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=template&id=5098d874&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=template&id=5098d874& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c("b-card-title", [_vm._v("Data Science")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex align-items-center" },
            [
              _c("feather-icon", {
                attrs: { icon: "CalendarIcon", size: "16" },
              }),
              _vm._v(" "),
              _c("flat-pickr", {
                staticClass:
                  "form-control flat-picker bg-transparent border-0 shadow-none",
                attrs: { config: { mode: "range" }, placeholder: "YYYY-MM-DD" },
                model: {
                  value: _vm.rangePicker,
                  callback: function ($$v) {
                    _vm.rangePicker = $$v
                  },
                  expression: "rangePicker",
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
          _c("chartjs-component-line-chart", {
            attrs: {
              height: 450,
              data: _vm.chartjsData.lineAreaChart.data,
              options: _vm.chartjsData.lineAreaChart.options,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe& ***!
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
    { attrs: { "no-body": "" } },
    [
      _c("b-card-header", [
        _c(
          "div",
          [
            _c("b-card-title", { staticClass: "mb-1" }, [
              _vm._v("\n        Statistics\n      "),
            ]),
            _vm._v(" "),
            _c("b-card-sub-title", [
              _vm._v("Commercial networks and enterprises"),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "b-card-body",
        [
          _c("chartjs-component-line-chart", {
            attrs: {
              height: 400,
              data: _vm.chartjsData.lineChart.data,
              options: _vm.chartjsData.lineChart.options,
              plugins: _vm.plugins,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c("b-card-title", [_vm._v("Average Skills")]),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              attrs: {
                dropright: "",
                variant: "link",
                "toggle-class": "p-0",
                "no-caret": "",
              },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function () {
                    return [
                      _c("feather-icon", {
                        staticClass: "text-body",
                        attrs: { icon: "MoreVerticalIcon" },
                      }),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c("b-dropdown-item", [_vm._v("\n        Last 28 Days\n      ")]),
              _vm._v(" "),
              _c("b-dropdown-item", [_vm._v("\n        Last Month\n      ")]),
              _vm._v(" "),
              _c("b-dropdown-item", [_vm._v("\n        Last Year\n      ")]),
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
          _c("chartjs-component-polar-area-chart", {
            attrs: {
              height: 350,
              data: _vm.chartjsData.polarChart.data,
              options: _vm.chartjsData.polarChart.options,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1& ***!
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
    { attrs: { title: "Radar Chart" } },
    [
      _c("chartjs-component-radar-chart", {
        attrs: {
          height: 355,
          data: _vm.chartjsData.radarChart.data,
          options: _vm.chartjsData.radarChart.options,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c("b-card-title", [_vm._v("\n      New Product Data\n    ")]),
          _vm._v(" "),
          _c(
            "b-button-group",
            { staticClass: "mt-1 mt-sm-0" },
            [
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
                  attrs: { variant: "outline-primary" },
                },
                [_vm._v("\n        Daily\n      ")]
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
                  attrs: { variant: "outline-primary" },
                },
                [_vm._v("\n        Monthly\n      ")]
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
                  attrs: { variant: "outline-primary" },
                },
                [_vm._v("\n        Yearly\n      ")]
              ),
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
          _c("chartjs-component-scatter-chart", {
            attrs: {
              height: 415,
              data: _vm.chartjsData.scatterChart.data,
              options: _vm.chartjsData.scatterChart.options,
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

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chartjs.vue?vue&type=template&id=191fa579& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579&");
/* harmony import */ var _Chartjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chartjs.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chartjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chartjs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chartjs.vue?vue&type=template&id=191fa579& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/Chartjs.vue?vue&type=template&id=191fa579&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chartjs_vue_vue_type_template_id_191fa579___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsBarChart.vue?vue&type=template&id=d2326ab8& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8&");
/* harmony import */ var _ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChartjsBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartjsBarChart.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=template&id=d2326ab8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBarChart.vue?vue&type=template&id=d2326ab8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_template_id_d2326ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsBubbleChart.vue?vue&type=template&id=60c5daae& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae&");
/* harmony import */ var _ChartjsBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsBubbleChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBubbleChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBubbleChart.vue?vue&type=template&id=60c5daae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsBubbleChart.vue?vue&type=template&id=60c5daae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBubbleChart_vue_vue_type_template_id_60c5daae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a&");
/* harmony import */ var _ChartjsDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsDoughnutChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsDoughnutChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsDoughnutChart.vue?vue&type=template&id=1742df9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsDoughnutChart_vue_vue_type_template_id_1742df9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8&");
/* harmony import */ var _ChartjsHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsHorizontalBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChartjsHorizontalBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChartjsHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsHorizontalBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsHorizontalBarChart.vue?vue&type=template&id=0b73c7a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsHorizontalBarChart_vue_vue_type_template_id_0b73c7a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsLineAreaChart_vue_vue_type_template_id_5098d874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsLineAreaChart.vue?vue&type=template&id=5098d874& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=template&id=5098d874&");
/* harmony import */ var _ChartjsLineAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsLineAreaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChartjsLineAreaChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChartjsLineAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsLineAreaChart_vue_vue_type_template_id_5098d874___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsLineAreaChart_vue_vue_type_template_id_5098d874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsLineAreaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=template&id=5098d874&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=template&id=5098d874& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_template_id_5098d874___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsLineAreaChart.vue?vue&type=template&id=5098d874& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineAreaChart.vue?vue&type=template&id=5098d874&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_template_id_5098d874___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineAreaChart_vue_vue_type_template_id_5098d874___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsLineChart.vue?vue&type=template&id=4dd30ffe& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe&");
/* harmony import */ var _ChartjsLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsLineChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsLineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsLineChart.vue?vue&type=template&id=4dd30ffe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsLineChart.vue?vue&type=template&id=4dd30ffe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsLineChart_vue_vue_type_template_id_4dd30ffe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c&");
/* harmony import */ var _ChartjsPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsPolarAreaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsPolarAreaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsPolarAreaChart.vue?vue&type=template&id=6110a00c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsPolarAreaChart_vue_vue_type_template_id_6110a00c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsRadarChart.vue?vue&type=template&id=4015d8d1& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1&");
/* harmony import */ var _ChartjsRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsRadarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsRadarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsRadarChart.vue?vue&type=template&id=4015d8d1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsRadarChart.vue?vue&type=template&id=4015d8d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsRadarChart_vue_vue_type_template_id_4015d8d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsScatterChart.vue?vue&type=template&id=a419304e& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e&");
/* harmony import */ var _ChartjsScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsScatterChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartjsScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsScatterChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsScatterChart.vue?vue&type=template&id=a419304e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/ChartjsScatterChart.vue?vue&type=template&id=a419304e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsScatterChart_vue_vue_type_template_id_a419304e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/chartjsData.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");


 // colors

var chartColors = {
  primaryColorShade: '#836AF9',
  yellowColor: '#ffe800',
  successColorShade: '#28dac6',
  warningColorShade: '#ffe802',
  warningLightColor: '#FDAC34',
  infoColorShade: '#299AFF',
  greyColor: '#4F5D70',
  blueColor: '#2c9aff',
  blueLightColor: '#84D0FF',
  greyLightColor: '#EDF1F4',
  tooltipShadow: 'rgba(0, 0, 0, 0.25)',
  lineChartPrimary: '#666ee8',
  lineChartDanger: '#ff4961',
  labelColor: '#6e6b7b',
  grid_line_color: 'rgba(200, 200, 200, 0.2)'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  latestBarChart: {
    data: {
      labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12'],
      datasets: [{
        data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
        backgroundColor: chartColors.successColorShade,
        borderColor: 'transparent'
      }]
    },
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            display: true,
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          scaleLabel: {
            display: false
          },
          ticks: {
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          display: true,
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: chartColors.labelColor
          }
        }]
      }
    }
  },
  horizontalBarChart: {
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'top'
        }
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            zeroLineColor: chartColors.grid_line_color,
            borderColor: 'transparent',
            color: chartColors.grid_line_color,
            drawTicks: false
          },
          scaleLabel: {
            display: true
          },
          ticks: {
            min: 0,
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          scaleLabel: {
            display: true
          },
          ticks: {
            fontColor: chartColors.labelColor
          }
        }]
      }
    },
    data: {
      labels: ['MON', 'TUE', 'WED ', 'THU', 'FRI', 'SAT', 'SUN'],
      datasets: [{
        data: [710, 350, 470, 580, 230, 460, 120],
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info,
        borderColor: 'transparent',
        barThickness: 15
      }]
    }
  },
  lineChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      hover: {
        mode: 'label'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].white,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].black,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].black
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true
          },
          gridLines: {
            display: true,
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: chartColors.labelColor
          },
          gridLines: {
            display: true,
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          }
        }]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },
    data: {
      labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
      datasets: [{
        data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
        label: 'Europe',
        borderColor: chartColors.lineChartDanger,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.lineChartDanger,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.lineChartDanger,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }, {
        data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
        label: 'Asia',
        borderColor: chartColors.lineChartPrimary,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.lineChartPrimary,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.lineChartPrimary,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }, {
        data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
        label: 'Africa',
        borderColor: chartColors.warningColorShade,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.warningColorShade,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.warningColorShade,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }]
    }
  },
  radarChart: {
    data: {
      labels: ['STA', 'STR', 'AGI', 'VIT', 'CHA', 'INT'],
      datasets: [{
        label: 'Donté Panlin',
        data: [25, 59, 90, 81, 60, 82],
        fill: true,
        backgroundColor: 'rgba(255,161,161, 0.9)',
        borderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      }, {
        label: 'Mireska Sunbreeze',
        data: [40, 100, 40, 90, 40, 90],
        fill: true,
        backgroundColor: 'rgba(155,136,250, 0.9)',
        borderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        position: 'top',
        labels: {
          padding: 25,
          fontColor: chartColors.labelColor
        }
      },
      tooltips: {
        enabled: false,
        custom: function custom(tooltip) {
          var tooltipEl = document.getElementById('tooltip');

          if (tooltip.body) {
            tooltipEl.style.display = 'block';

            if (tooltip.body[0].lines && tooltip.body[0].lines[0]) {
              // eslint-disable-next-line prefer-destructuring
              tooltipEl.innerHTML = tooltip.body[0].lines[0];
            }
          } else {
            setTimeout(function () {
              tooltipEl.style.display = 'none';
            }, 500);
          }
        }
      },
      gridLines: {
        display: false
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false,
          fontColor: chartColors.labelColor
        },
        gridLines: {
          color: chartColors.grid_line_color
        },
        angleLines: {
          color: chartColors.grid_line_color
        }
      }
    }
  },
  polarChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 10,
          fontColor: chartColors.labelColor
        }
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark
      },
      scale: {
        scaleShowLine: true,
        scaleLineWidth: 1,
        ticks: {
          display: false,
          fontColor: chartColors.labelColor
        },
        reverse: false,
        gridLines: {
          display: false
        }
      },
      animation: {
        animateRotate: false
      }
    },
    data: {
      labels: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica', 'Australia'],
      datasets: [{
        label: 'Population (millions)',
        backgroundColor: [chartColors.primaryColorShade, chartColors.warningColorShade, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary, chartColors.infoColorShade, chartColors.greyColor, chartColors.successColorShade],
        data: [19, 17.5, 15, 13.5, 11, 9],
        borderWidth: 0
      }]
    }
  },
  bubbleChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 10,
            min: 0,
            max: 140,
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          display: true,
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: chartColors.labelColor
          }
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark
      }
    },
    data: {
      animation: {
        duration: 10000
      },
      datasets: [{
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 20,
          y: 74,
          r: 10
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 30,
          y: 72,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 10,
          y: 110,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 40,
          y: 110,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 20,
          y: 135,
          r: 6
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 10,
          y: 160,
          r: 12
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 30,
          y: 165,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 40,
          y: 200,
          r: 20
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 90,
          y: 185,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 50,
          y: 240,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 60,
          y: 275,
          r: 10
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 70,
          y: 305,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 80,
          y: 325,
          r: 4
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 50,
          y: 285,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 60,
          y: 235,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 70,
          y: 275,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 80,
          y: 290,
          r: 4
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 90,
          y: 250,
          r: 10
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 100,
          y: 220,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 120,
          y: 230,
          r: 4
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 110,
          y: 320,
          r: 15
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 130,
          y: 330,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 100,
          y: 310,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 110,
          y: 240,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 120,
          y: 270,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 130,
          y: 300,
          r: 6
        }]
      }]
    }
  },
  doughnutChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 60,
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            var label = data.datasets[0].labels[tooltipItem.index] || '';
            var value = data.datasets[0].data[tooltipItem.index];
            var output = " ".concat(label, " : ").concat(value, " %");
            return output;
          }
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark
      }
    },
    data: {
      datasets: [{
        labels: ['Tablet', 'Mobile', 'Desktop'],
        data: [10, 10, 80],
        backgroundColor: [chartColors.successColorShade, chartColors.warningLightColor, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary],
        borderWidth: 0,
        pointStyle: 'rectRounded'
      }]
    }
  },
  scatterChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 800,
      title: {
        display: false,
        text: 'Chart.js Scatter Chart'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 10,
            min: 0,
            max: 140,
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: chartColors.labelColor
          }
        }]
      },
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 7
        }
      }
    },
    data: {
      datasets: [{
        label: 'iPhone',
        data: [{
          x: 72,
          y: 225
        }, {
          x: 81,
          y: 270
        }, {
          x: 90,
          y: 230
        }, {
          x: 103,
          y: 305
        }, {
          x: 103,
          y: 245
        }, {
          x: 108,
          y: 275
        }, {
          x: 110,
          y: 290
        }, {
          x: 111,
          y: 315
        }, {
          x: 109,
          y: 350
        }, {
          x: 116,
          y: 340
        }, {
          x: 113,
          y: 260
        }, {
          x: 117,
          y: 275
        }, {
          x: 117,
          y: 295
        }, {
          x: 126,
          y: 280
        }, {
          x: 127,
          y: 340
        }, {
          x: 133,
          y: 330
        }],
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Samsung Note',
        data: [{
          x: 13,
          y: 95
        }, {
          x: 22,
          y: 105
        }, {
          x: 17,
          y: 115
        }, {
          x: 19,
          y: 130
        }, {
          x: 21,
          y: 125
        }, {
          x: 35,
          y: 125
        }, {
          x: 13,
          y: 155
        }, {
          x: 21,
          y: 165
        }, {
          x: 25,
          y: 155
        }, {
          x: 18,
          y: 190
        }, {
          x: 26,
          y: 180
        }, {
          x: 43,
          y: 180
        }, {
          x: 53,
          y: 202
        }, {
          x: 61,
          y: 165
        }, {
          x: 67,
          y: 225
        }],
        backgroundColor: chartColors.yellowColor,
        borderColor: 'transparent',
        pointRadius: 5
      }, {
        label: 'OnePlus',
        data: [{
          x: 70,
          y: 195
        }, {
          x: 72,
          y: 270
        }, {
          x: 98,
          y: 255
        }, {
          x: 100,
          y: 215
        }, {
          x: 87,
          y: 240
        }, {
          x: 94,
          y: 280
        }, {
          x: 99,
          y: 300
        }, {
          x: 102,
          y: 290
        }, {
          x: 110,
          y: 275
        }, {
          x: 111,
          y: 250
        }, {
          x: 94,
          y: 280
        }, {
          x: 92,
          y: 340
        }, {
          x: 100,
          y: 335
        }, {
          x: 108,
          y: 330
        }],
        backgroundColor: chartColors.successColorShade,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }]
    }
  },
  lineAreaChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8
        }
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].dark
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: chartColors.grid_line_color
          },
          scaleLabel: {
            display: true
          },
          ticks: {
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          display: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: chartColors.labelColor
          },
          scaleLabel: {
            display: true
          }
        }]
      }
    },
    data: {
      labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', ''],
      datasets: [{
        label: 'Africa',
        data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
        lineTension: 0,
        backgroundColor: chartColors.blueColor,
        pointStyle: 'circle',
        borderColor: 'transparent',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: chartColors.blueColor,
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light
      }, {
        label: 'Asia',
        data: [70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275],
        lineTension: 0,
        backgroundColor: chartColors.blueLightColor,
        pointStyle: 'circle',
        borderColor: 'transparent',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: chartColors.blueLightColor,
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light
      }, {
        label: 'Europe',
        data: [240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300, 315],
        lineTension: 0,
        backgroundColor: chartColors.greyLightColor,
        pointStyle: 'circle',
        borderColor: 'transparent',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: chartColors.greyLightColor,
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].light
      }]
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentBubbleChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentBubbleChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentBubbleChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentBubbleChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentDoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentDoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentLineChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentLineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentLineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentLineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentPolarAreaChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentPolarAreaChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentRadarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentRadarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentRadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentRadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentScatterChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/charts-and-maps/charts/chartjs/charts-components/ChartjsComponentScatterChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentScatterChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);