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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["d" /* Nav */], {
        tabs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* NavLink */], {
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
      }, "Portfolio")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* NavLink */], {
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
      }, "About me")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["e" /* NavItem */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["f" /* NavLink */], {
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
      }, "Contract"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["h" /* TabContent */], {
        activeTab: this.state.activeTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* TabPane */], {
        tabId: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["g" /* Row */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_3__static_database_portfolio_List__["a" /* default */].map(function (portfolio) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["c" /* Col */], {
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
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["b" /* CardText */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "thumbnailImage",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: "static/images/portfolio/".concat(portfolio.image_url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        })))));
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* TabPane */], {
        tabId: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cardAbout_me col-md-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "page-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Experiencee"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "\u0E1B\u0E35 2012 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E21\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E2A\u0E19\u0E43\u0E08\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E02\u0E2D\u0E49\u0E21\u0E39\u0E25\u0E40\u0E01\u0E48\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28 \u0E08\u0E36\u0E07\u0E44\u0E14\u0E15\u0E49\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E43\u0E08\u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22\u0E44\u0E2D\u0E17\u0E35\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E42\u0E14\u0E22\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E40\u0E1B\u0E47\u0E19 Blogger \u0E40\u0E02\u0E35\u0E22\u0E19\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E02\u0E2D\u0E49\u0E21\u0E39\u0E25\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E27\u0E07\u0E01\u0E32\u0E23\u0E44\u0E2D\u0E17\u0E35 \u0E41\u0E25\u0E30 \u0E23\u0E35\u0E27\u0E27\u0E34\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E15\u0E48\u0E32\u0E07\u0E46\u0E1A\u0E19\u0E40\u0E27\u0E1A\u0E47\u0E44\u0E0B\u0E14\u0E4C \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E27\u0E25\u0E32 2 \u0E1B\u0E35"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "page-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Achievement"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "\u0E1B\u0E35 2014-2015 \u0E44\u0E14\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E27\u0E07\u0E01\u0E32\u0E23 TechStartup \u0E04\u0E27\u0E1A\u0E04\u0E39\u0E01\u0E48\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E32\u0E4D\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19 FrontEnd Developer & UI Designer \u0E1F\u0E23\u0E35\u0E41\u0E25\u0E19\u0E0B\u0E4C \u0E15\u0E2D\u0E48 \u0E21\u0E32\u0E44\u0E14\u0E49\u0E40\u0E02\u0E49\u0E32 \u0E23\u0E48\u0E27\u0E21\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E17\u0E33 Web Application \u0E17\u0E48\u0E35\u0E07\u0E32\u0E19 Startup Weekend Travel Edition 2015 by Amadeus \u0E41\u0E25\u0E30 \u0E44\u0E14\u0E49 \u0E23\u0E49\u0E32\u0E07\u0E27\u0E31\u0E25\u0E0A\u0E19\u0E30\u0E40\u0E25\u0E34\u0E28\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A 3"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "page-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Education Graduate"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Graphic and Web creative design at ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.dhw.ac.jp/th/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Digital Hollywood University Bangkok"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["i" /* TabPane */], {
        tabId: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cardAbout_me col-md-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "page-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "MY channel"), "Facebook : ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.facebook.com/panjamapon",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Panjamapon Karnasuta")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), "Facebook : ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.facebook.com/panjamapon",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Panjamapon Karnasuta"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "\n            .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n                color: #fff !important;\n                background-color: #21241a;\n                border-color: transparent !important;\n            }\n            .nav-tabs {\n                width: 350px;\n                margin: auto;\n                margin-bottom: 30px;\n                border-bottom: 0;\n            }\n            a {\n                text-transform: capitalize;\n            }\n            .cardThumbnail {\n                margin-bottom:30px;\n            }\n            .thumbnailImage {\n                height:345px;\n                overflow:hidden;\n            }\n            .thumbnailImage img {\n                width:100%;\n                height: auto;\n                object-fit: cover;\n            }\n            .card-body {\n                padding:0;\n            }\n            .cardAbout_me {\n                height:auto;\n                background-color:#fff;\n                margin:auto;\n                display:block;\n                border-radius:6px;\n                box-shadow:0px 2px 10px #bdbcbc;\n                padding:32px;\n                margin-bottom:40px;\n            }\n            .cardAbout_me p {\n              line-height: 32px;\n            }\n            @media screen and (max-width: 480px) and (max-width: 600px) {\n                .nav-tabs {\n                    width: 100% !important;\n                    margin: auto;\n                    margin-bottom: 30px;\n                    border-bottom: 0;\n                    font-size: 12px;\n                }\n                .thumbnailImage {\n                    height: auto;\n                    overflow: hidden;\n                }\n            }\n        "));
    }
  }]);

  return Example;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.5e5524e4d4516ddfcec8.hot-update.js.map