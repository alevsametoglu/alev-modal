"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./Modal.css");

/**
 * @description Modal
 *
 * @param   {string}         props.title [title of message]
 * @param   {width}          props.width [width of modal]
 * @param   {onClose}        props.onClose [close modal]
 * @returns {Reactnode}  jsx injected in DOM
 */
var Modal = function Modal(_ref) {
  var show = _ref.show,
      title = _ref.title,
      width = _ref.width,
      image = _ref.image,
      onClose = _ref.onClose,
      text = _ref.text;

  var modal = /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container",
    style: {
      width: width
    }
  }, image && /*#__PURE__*/_react.default.createElement("img", {
    className: "container-image",
    src: image
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "modal-title"
  }, title, "!!!"), /*#__PURE__*/_react.default.createElement("p", null, text), /*#__PURE__*/_react.default.createElement("button", {
    className: "close-button",
    onClick: function onClick() {
      onClose();
    }
  }, "Close")));

  return show ? /*#__PURE__*/_reactDom.default.createPortal(modal, document.body) : null;
};
/**
 * Modal Proptypes
 */


exports.Modal = Modal;