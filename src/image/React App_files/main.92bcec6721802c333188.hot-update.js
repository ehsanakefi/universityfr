webpackHotUpdate("main",{

/***/ "./src/register/Store/Storeone.tsx":
/*!*****************************************!*\
  !*** ./src/register/Store/Storeone.tsx ***!
  \*****************************************/
/*! exports provided: Storeone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storeone", function() { return Storeone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CSS_SellersStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CSS/SellersStyle.css */ "./src/CSS/SellersStyle.css");
/* harmony import */ var _CSS_SellersStyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CSS_SellersStyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _shared_inputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/inputField */ "./src/register/shared/inputField.tsx");
var _jsxFileName = "/home/akefi/doctor/web/src/register/Store/Storeone.tsx";





const Option = antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option;
const FormItem = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item;
const TextArea = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea;

class C extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const handleSubmit = this.props.handleSubmit;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "pageStore",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerStore",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerStoreLeft",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "boxRegisterStore",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "headerBoxRegisterStore",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
      className: "headerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "\u062B\u0628\u062A \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bodyBoxRegisterStore",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
      className: "formRegisterStore",
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "\u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062F\u0647"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "*"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "nameStore",
      style: {
        width: '90%',
        height: '90%'
      },
      placeholder: "\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      component: _shared_inputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\u06A9\u062F \u0627\u0642\u062A\u0635\u0627\u062F\u06CC"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "*"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "password",
      type: "text",
      placeholder: "\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      style: {
        width: '80%'
      },
      component: _shared_inputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "\u0627\u0633\u062A\u0627\u0646"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "*"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      showSearch: true,
      style: {
        width: 150,
        direction: 'rtl'
      },
      optionFilterProp: "children",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "jack",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Jack"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "lucy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Lucy"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "tom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Tom")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "\u0634\u0647\u0631\u0633\u062A\u0627\u0646"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "*"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      showSearch: true,
      style: {
        width: 190,
        direction: 'rtl'
      },
      optionFilterProp: "children",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "jack",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Jack"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "lucy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Lucy"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "tom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Tom"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "\u0622\u062F\u0631\u0633"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "*"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TextArea, {
      style: {
        width: '80%',
        direction: 'rtl'
      },
      autosize: {
        minRows: 3,
        maxRows: 8
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "\u06A9\u062F \u067E\u0633\u062A\u06CC"), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "password",
      type: "text",
      style: {
        width: '60%',
        height: '90%'
      },
      component: _shared_inputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "\u062A\u0644\u0641\u0646 \u062B\u0627\u0628\u062A"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "*"), " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "password",
      type: "text",
      style: {
        width: '60%',
        height: '90%'
      },
      component: _shared_inputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      style: {
        width: '95%',
        backgroundColor: 'gray',
        height: '1px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0635\u0627\u062E\u0628 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "*"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "password",
      type: "text",
      placeholder: "\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      component: _shared_inputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "\u06A9\u062F \u0645\u0644\u06CC \u0635\u0627\u062D\u0628 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "*"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
      name: "password",
      type: "text",
      placeholder: "\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      component: _shared_inputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "\u062C\u0646\u0633\u06CC\u062A"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      showSearch: true,
      style: {
        width: 150,
        direction: 'rtl'
      },
      optionFilterProp: "children",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "jack",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Jack"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "lucy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "Lucy"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "tom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Tom")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      showSearch: true,
      style: {
        width: 190,
        direction: 'rtl'
      },
      optionFilterProp: "children",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "jack",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "Jack"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "lucy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "Lucy"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Option, {
      value: "tom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Tom"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FormItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      htmlType: "submit",
      className: "login-form-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "\u0645\u0631\u062D\u0644\u0647 \u0628\u0639\u062F\u06CC")))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "registerStoreRight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    })));
  }

}

const Storeone = Object(formik__WEBPACK_IMPORTED_MODULE_3__["withFormik"])({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  handleSubmit: async (values, {
    props,
    setErrors
  }) => {
    const errors = await props.submit(values);

    if (errors) {
      setErrors(errors);
    }
  }
})(C);

/***/ }),

/***/ "./src/router/Router.tsx":
/*!*******************************!*\
  !*** ./src/router/Router.tsx ***!
  \*******************************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _register_Store_Storeone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/Store/Storeone */ "./src/register/Store/Storeone.tsx");
/* harmony import */ var _register_Store_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register/Store/Store */ "./src/register/Store/Store.tsx");
var _jsxFileName = "/home/akefi/doctor/web/src/router/Router.tsx";




const Routes = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/register",
  component: _register_Store_Store__WEBPACK_IMPORTED_MODULE_3__["Store"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/register",
  component: _register_Store_Storeone__WEBPACK_IMPORTED_MODULE_2__["Storeone"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})));

/***/ })

})
//# sourceMappingURL=main.92bcec6721802c333188.hot-update.js.map