"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Egdar U. Joya <eujc21@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({}, this.props, { width: "29px", height: "24px", viewBox: "0 0 29 24" }),
        _react2.default.createElement(
          "title",
          null,
          "Code Blocks"
        ),
        _react2.default.createElement(
          "desc",
          null,
          "Created with Sketch."
        ),
        _react2.default.createElement(
          "defs",
          null,
          _react2.default.createElement(
            "filter",
            { x: "-50%", y: "-50%", width: "200%", height: "200%", filterUnits: "objectBoundingBox", id: "filter-1" },
            _react2.default.createElement("feColorMatrix", { values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0", type: "matrix", "in": "shadowBlurOuter1", result: "shadowMatrixOuter1" }),
            _react2.default.createElement(
              "feMerge",
              null,
              _react2.default.createElement("feMergeNode", { "in": "shadowMatrixOuter1" }),
              _react2.default.createElement("feMergeNode", { "in": "SourceGraphic" })
            )
          )
        ),
        _react2.default.createElement(
          "g",
          { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          _react2.default.createElement(
            "g",
            { id: "Group-2", filter: "url(#filter-1)", transform: "translate(-4.000000, -0.000000)" },
            _react2.default.createElement(
              "g",
              { id: "right-arrow", transform: "translate(12.000000, 0.000000)" },
              _react2.default.createElement("path", { d: "M14.7918747,12.7915118 L7.91257643,19.6705976 C7.47496996,20.1084165 6.76546609,20.1084165 6.32807207,19.6705976 C5.89064264,19.2331682 5.89064264,18.5236997 6.32807207,18.0863057 L12.415189,11.9993658 L6.32824911,5.91263839 C5.89081968,5.47503192 5.89081968,4.76563428 6.32824911,4.32820485 C6.76567854,3.89059838 7.475147,3.89059838 7.91275347,4.32820485 L14.7920517,11.2073969 C15.0107665,11.4262178 15.1199999,11.7127033 15.1199999,11.9993304 C15.1199999,12.2860991 15.010554,12.5727971 14.7918747,12.7915118 Z", id: "Shape", fill: "#FFFFFF" }),
              _react2.default.createElement("polygon", { id: "Shape", points: "0 0 24 0 24 24 0 24" })
            ),
            _react2.default.createElement(
              "g",
              { id: "left-arrow" },
              _react2.default.createElement("path", { d: "M6,11.9996255 C6,11.7129879 6.109448,11.4262794 6.32784828,11.2076628 L13.2073509,4.32821696 C13.6449659,3.89059435 14.3544835,3.89059435 14.7919214,4.32821696 C15.2293594,4.76566252 15.2293594,5.47505094 14.7919214,5.91270896 L8.70465096,11.9996255 L14.7914965,18.08679 C15.2289345,18.5242356 15.2289345,19.2337302 14.7914965,19.6711403 C14.3540586,20.1089754 13.6447534,20.1089754 13.2071385,19.6711403 L6.32760042,12.7918007 C6.10923555,12.5730779 6,12.2863694 6,11.9996255 Z", id: "Shape", fill: "#FFFFFF" }),
              _react2.default.createElement("polygon", { id: "Shape", points: "0 0 24 0 24 24 0 24" })
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react2.default.Component);

exports.default = _default;