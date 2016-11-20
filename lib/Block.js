"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

var _reactDebounceInput = require("react-debounce-input");

var _reactDebounceInput2 = _interopRequireDefault(_reactDebounceInput);

var _highlight = require("highlight.js");

var _highlight2 = _interopRequireDefault(_highlight);

var _defaultContent = require("./default-content");

var _defaultContent2 = _interopRequireDefault(_defaultContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Egdar U. Joya <eujc21@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BlockContent = _megadraft.MegadraftPlugin.BlockContent,
    BlockData = _megadraft.MegadraftPlugin.BlockData,
    CommonBlock = _megadraft.MegadraftPlugin.CommonBlock;

var Block = function (_Component) {
  _inherits(Block, _Component);

  function Block(props) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

    _this.state = {
      editorState: (0, _megadraft.editorStateFromRaw)(_defaultContent2.default)
    };

    _this.handleChange = _this.handleChange.bind(_this);

    _this.actions = [{ "key": "delete", "icon": _megadraft.MegadraftIcons.DeleteIcon, "action": _this.props.container.remove }];
    return _this;
  }

  _createClass(Block, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.props.container.updateData({ code: event.target.value });
      document.querySelectorAll("code").forEach(function (obj, i) {
        _highlight2.default.highlightBlock(obj);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        CommonBlock,
        _extends({}, this.props, { actions: this.actions }),
        _react2.default.createElement(
          BlockContent,
          null,
          _react2.default.createElement(
            "pre",
            null,
            _react2.default.createElement(
              "code",
              {
                className: "megadraft-codeblock-plugin preview",
                ref: function ref(c) {
                  return _this2.code = c;
                } },
              this.props.data.code || "- NO CODE -"
            )
          )
        ),
        _react2.default.createElement(
          BlockData,
          null,
          _react2.default.createElement(_reactDebounceInput2.default, {
            element: "textarea",
            minLength: 2,
            debounceTimeout: 1000,
            onChange: this.handleChange,
            className: "megadraft-codeblock-plugin-textarea" })
        )
      );
    }
  }]);

  return Block;
}(_react.Component);

exports.default = Block;