module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/profile.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var profile_Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("img", {
        className: "displayName",
        src: "static/images/me.jpg"
      }), external__react__default.a.createElement("h4", {
        className: "text-center"
      }, "Panjamapon Karnasuta"), external__react__default.a.createElement("h6", {
        className: "text-center",
        style: {
          fontWeight: 'lighter'
        }
      }, "CTO & UX engineer at Penedge.com"));
    }
  }]);

  return Profile;
}(external__react__default.a.Component);


// EXTERNAL MODULE: external "reactstrap"
var external__reactstrap_ = __webpack_require__(7);
var external__reactstrap__default = /*#__PURE__*/__webpack_require__.n(external__reactstrap_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(8);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// CONCATENATED MODULE: ./static/database/portfolio_List.js
var portfolio_List = [{
  "id": 1,
  "name": "homekorner",
  "image_url": "home-page.jpg"
}, {
  "id": 2,
  "name": "advance group asia",
  "image_url": "index_mini.jpg"
}, {
  "id": 3,
  "name": "nilton travel center",
  "image_url": "niltontravel.com.jpeg"
}, {
  "id": 4,
  "name": "PLC Wall",
  "image_url": "plc-wall_mini.jpg"
}, {
  "id": 5,
  "name": "E-commerce UX design",
  "image_url": "e-commerce.jpeg"
}, {
  "id": 6,
  "name": "startup weekend 2015 bangkok",
  "image_url": "11755672_10153948506912119_4074935785052254491_n.jpg"
}];
/* harmony default export */ var database_portfolio_List = (portfolio_List);
// CONCATENATED MODULE: ./components/portfolio.js
function portfolio__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { portfolio__typeof = function _typeof(obj) { return typeof obj; }; } else { portfolio__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return portfolio__typeof(obj); }

function portfolio__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function portfolio__possibleConstructorReturn(self, call) { if (call && (portfolio__typeof(call) === "object" || typeof call === "function")) { return call; } return portfolio__assertThisInitialized(self); }

function portfolio__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function portfolio__createClass(Constructor, protoProps, staticProps) { if (protoProps) portfolio__defineProperties(Constructor.prototype, protoProps); if (staticProps) portfolio__defineProperties(Constructor, staticProps); return Constructor; }

function portfolio__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function portfolio__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var portfolio_Example =
/*#__PURE__*/
function (_React$Component) {
  portfolio__inherits(Example, _React$Component);

  portfolio__createClass(Example, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      return {
        portfolio_List: database_portfolio_List
      };
    }
  }]);

  function Example(props) {
    var _this;

    portfolio__classCallCheck(this, Example);

    _this = portfolio__possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));
    _this.toggle = _this.toggle.bind(portfolio__assertThisInitialized(_this));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  portfolio__createClass(Example, [{
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

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(external__reactstrap_["Nav"], {
        tabs: true
      }, external__react__default.a.createElement(external__reactstrap_["NavItem"], null, external__react__default.a.createElement(external__reactstrap_["NavLink"], {
        className: external__classnames__default()({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this2.toggle('1');
        }
      }, "Portfolio")), external__react__default.a.createElement(external__reactstrap_["NavItem"], null, external__react__default.a.createElement(external__reactstrap_["NavLink"], {
        className: external__classnames__default()({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this2.toggle('2');
        }
      }, "About me")), external__react__default.a.createElement(external__reactstrap_["NavItem"], null, external__react__default.a.createElement(external__reactstrap_["NavLink"], {
        className: external__classnames__default()({
          active: this.state.activeTab === '3'
        }),
        onClick: function onClick() {
          _this2.toggle('3');
        }
      }, "Contract"))), external__react__default.a.createElement(external__reactstrap_["TabContent"], {
        activeTab: this.state.activeTab
      }, external__react__default.a.createElement(external__reactstrap_["TabPane"], {
        tabId: "1"
      }, external__react__default.a.createElement(external__reactstrap_["Row"], null, database_portfolio_List.map(function (portfolio) {
        return external__react__default.a.createElement(external__reactstrap_["Col"], {
          key: portfolio.id,
          sm: "4",
          className: "cardThumbnail"
        }, external__react__default.a.createElement(external__reactstrap_["Card"], {
          body: true
        }, external__react__default.a.createElement(external__reactstrap_["CardText"], null, external__react__default.a.createElement("div", {
          className: "thumbnailImage"
        }, external__react__default.a.createElement("img", {
          src: "static/images/portfolio/".concat(portfolio.image_url)
        })))));
      }))), external__react__default.a.createElement(external__reactstrap_["TabPane"], {
        tabId: "2"
      }, external__react__default.a.createElement("div", {
        className: "cardAbout_me col-md-8"
      }, external__react__default.a.createElement("h4", {
        className: "page-header"
      }, "Experiencee"), external__react__default.a.createElement("p", null, "\u0E1B\u0E35 2012 \u0E40\u0E23\u0E34\u0E48\u0E21\u0E21\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E2A\u0E19\u0E43\u0E08\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E02\u0E2D\u0E49\u0E21\u0E39\u0E25\u0E40\u0E01\u0E48\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28 \u0E08\u0E36\u0E07\u0E44\u0E14\u0E15\u0E49\u0E31\u0E14\u0E2A\u0E34\u0E19\u0E43\u0E08\u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2A\u0E32\u0E22\u0E44\u0E2D\u0E17\u0E35\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E42\u0E14\u0E22\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E40\u0E1B\u0E47\u0E19 Blogger \u0E40\u0E02\u0E35\u0E22\u0E19\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E02\u0E2D\u0E49\u0E21\u0E39\u0E25\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E27\u0E07\u0E01\u0E32\u0E23\u0E44\u0E2D\u0E17\u0E35 \u0E41\u0E25\u0E30 \u0E23\u0E35\u0E27\u0E27\u0E34\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E15\u0E48\u0E32\u0E07\u0E46\u0E1A\u0E19\u0E40\u0E27\u0E1A\u0E47\u0E44\u0E0B\u0E14\u0E4C \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E27\u0E25\u0E32 2 \u0E1B\u0E35"), external__react__default.a.createElement("br", null), external__react__default.a.createElement("h4", {
        className: "page-header"
      }, "Achievement"), external__react__default.a.createElement("p", null, "\u0E1B\u0E35 2014-2015 \u0E44\u0E14\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E27\u0E07\u0E01\u0E32\u0E23 TechStartup \u0E04\u0E27\u0E1A\u0E04\u0E39\u0E48\u0E01\u0E31\u0E1A \u0E01\u0E32\u0E23\u0E17\u0E32\u0E4D\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19 FrontEnd Developer & UI Designer \u0E1F\u0E23\u0E35\u0E41\u0E25\u0E19\u0E0B\u0E4C \u0E15\u0E2D\u0E48 \u0E21\u0E32\u0E44\u0E14\u0E49\u0E40\u0E02\u0E49\u0E32 \u0E23\u0E48\u0E27\u0E21\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19\u0E17\u0E33 Web Application \u0E17\u0E48\u0E35\u0E07\u0E32\u0E19 Startup Weekend Travel Edition 2015 by Amadeus \u0E41\u0E25\u0E30 \u0E44\u0E14\u0E49 \u0E23\u0E49\u0E32\u0E07\u0E27\u0E31\u0E25\u0E0A\u0E19\u0E30\u0E40\u0E25\u0E34\u0E28\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A 3"), external__react__default.a.createElement("br", null), external__react__default.a.createElement("h4", {
        className: "page-header"
      }, "Education Graduate"), external__react__default.a.createElement("p", null, "Graphic and Web creative design at ", external__react__default.a.createElement("a", {
        href: "https://www.dhw.ac.jp/th/",
        target: "_blank"
      }, external__react__default.a.createElement("strong", null, "Digital Hollywood University Bangkok"))))), external__react__default.a.createElement(external__reactstrap_["TabPane"], {
        tabId: "3"
      }, external__react__default.a.createElement("div", {
        className: "cardAbout_me col-md-8"
      }, external__react__default.a.createElement("h4", {
        className: "page-header"
      }, "MY channel"), "Facebook : ", external__react__default.a.createElement("a", {
        href: "https://www.facebook.com/panjamapon",
        target: "_blank"
      }, external__react__default.a.createElement("strong", null, "Panjamapon")), external__react__default.a.createElement("br", null), "GitHub : ", external__react__default.a.createElement("a", {
        href: "https://github.com/happyudong555",
        target: "_blank"
      }, external__react__default.a.createElement("strong", null, "happyudong555"))))), external__react__default.a.createElement("style", null, "\n            .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n                color: #fff !important;\n                background-color: #21241a;\n                border-color: transparent !important;\n            }\n            .nav-tabs {\n                width: 350px;\n                margin: auto;\n                margin-bottom: 30px;\n                border-bottom: 0;\n            }\n            a {\n                text-transform: capitalize;\n            }\n            .cardThumbnail {\n                margin-bottom:30px;\n            }\n            .thumbnailImage {\n                height:345px;\n                overflow:hidden;\n            }\n            .thumbnailImage img {\n                width:100%;\n                height: auto;\n                object-fit: cover;\n            }\n            .card-body {\n                padding:0;\n            }\n            .cardAbout_me {\n                height:auto;\n                background-color:#fff;\n                margin:auto;\n                display:block;\n                border-radius:6px;\n                box-shadow:0px 2px 10px #bdbcbc;\n                padding:32px;\n                margin-bottom:40px;\n            }\n            .cardAbout_me p {\n              line-height: 32px;\n            }\n            @media screen and (max-width: 480px) and (max-width: 600px) {\n                .nav-tabs {\n                    width: 100% !important;\n                    margin: auto;\n                    margin-bottom: 30px;\n                    border-bottom: 0;\n                    font-size: 12px;\n                }\n                .thumbnailImage {\n                    height: auto;\n                    overflow: hidden;\n                }\n                .cardAbout_me {\n                  height: auto;\n                  background-color: #fff;\n                  margin: auto;\n                  display: block;\n                  border-radius: 6px;\n                  box-shadow: 0px 2px 10px #bdbcbc;\n                  padding: 26px;\n                  margin-bottom: 40px;\n                }\n            }\n        "));
    }
  }]);

  return Example;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_Index; });
function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages__inherits(Index, _React$Component);

  function Index() {
    pages__classCallCheck(this, Index);

    return pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  pages__createClass(Index, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "Panjamapon Karnasuta"), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css"
      })), external__react__default.a.createElement("div", {
        className: "container-fluid"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement(profile_Profile, null), external__react__default.a.createElement("br", null), external__react__default.a.createElement(portfolio_Example, null)))), external__react__default.a.createElement("style", null, "\n                    .displayName {\n                        width: 150px;\n                        height: 150px;\n                        margin:50px auto;\n                        margin-bottom: 26px;\n                        display: block;\n                        border-radius: 100%;\n                        object-fit: cover;\n                        object-position: center top;\n                    }  \n                    .wrapLink {\n                        width:360px;\n                        margin:auto;\n                        display:block;\n                    }\n                    .wrapLink a {\n                        margin-left: 40px;\n                        text-transform: capitalize;\n                        text-decoration: none;\n                        color: #495057;\n                    }\n            "));
    }
  }]);

  return Index;
}(external__react__default.a.Component);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ })
/******/ ]);