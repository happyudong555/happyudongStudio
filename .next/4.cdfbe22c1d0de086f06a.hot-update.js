webpackHotUpdate(4,{

/***/ "./components/portfolio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Example; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_database_portfolio_List__ = __webpack_require__("./static/database/portfolio_List.js");
var _jsxFileName = "/Users/panjamaponkarnasuta/Desktop/app/components/portfolio.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  _createClass(Example, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      return {
        portfolio_List: __WEBPACK_IMPORTED_MODULE_3__static_database_portfolio_List__["a" /* default */]
      };
    }
  }]);

  function Example(props) {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  _createClass(Example, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* Nav */], {
        tabs: true,
        style: {
          width: 350,
          margin: 'auto',
          marginBottom: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* NavLink */], {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this2.toggle('1');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Portfolio")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* NavLink */], {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this2.toggle('2');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "About me")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* NavLink */], {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
          active: this.state.activeTab === '3'
        }),
        onClick: function onClick() {
          _this2.toggle('3');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Contract"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* TabContent */], {
        activeTab: this.state.activeTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["j" /* TabPane */], {
        tabId: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_3__static_database_portfolio_List__["a" /* default */].map(function (portfolio) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["d" /* Col */], {
          key: portfolio.id,
          sm: "4",
          className: "cardThumbnail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["a" /* Card */], {
          body: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["c" /* CardTitle */], {
          style: {
            textTransform: 'capitalize'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, portfolio.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* CardText */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "thumbnailImage",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: "static/images/portfolio/".concat(portfolio.image_url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        })))));
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "\n            .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n                color: #fff !important;\n                background-color: #21241a;\n                border-color: transparent !important;\n            }\n            .nav-tabs {\n                border-bottom: 0;\n            }\n            a {\n                text-transform: capitalize;\n            }\n            .cardThumbnail {\n                margin-bottom:30px;\n            }\n            .thumbnailImage img {\n                width:100%;\n            }\n        "));
    }
  }]);

  return Example;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.cdfbe22c1d0de086f06a.hot-update.js.map