'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Object$assign = _interopDefault(require('@babel/runtime-corejs3/core-js-stable/object/assign'));
var _trimInstanceProperty = _interopDefault(require('@babel/runtime-corejs3/core-js-stable/instance/trim'));
var _mapInstanceProperty = _interopDefault(require('@babel/runtime-corejs3/core-js-stable/instance/map'));
var _Set = _interopDefault(require('@babel/runtime-corejs3/core-js-stable/set'));
var React = _interopDefault(require('react'));
var velocityReact = require('velocity-react');
require('velocity-animate');
require('velocity-animate/velocity.ui');
var PropTypes = _interopDefault(require('prop-types'));
var Prism = _interopDefault(require('prismjs'));
require('prismjs/themes/prism-dark.css');

var style = {
  container: {
    margin: "8px auto"
  },
  pre: {
    width: "100%",
    height: "100%",
    color: "rgb(255, 255, 255)",
    tabSize: "1.5em",
    background: "rgb(40, 44, 52)",
    borderRadius: 10,
    overflow: "auto",
    padding: "1rem 1.5rem"
  }
};

var toHtml = function toHtml(code) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "javascript";
  return Prism.languages[type] ? Prism.highlight(code, Prism.languages[type], type) : "";
};

var set = new _Set();
var i = 0;

var everyLine = function everyLine(code) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "javascript";
  var allLines = code.split(/\r?\n/);
  set.clear();
  i = 0;
  return _mapInstanceProperty(allLines).call(allLines, function (line) {
    console.log("line: ", line);

    var key = _trimInstanceProperty(line).call(line);

    if (set.has(key)) {
      key = key + "_" + i;
    }

    set.add(key);
    return /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: toHtml(line, type)
      },
      key: key
    });
  });
}; // let animationDuration = 500;


var enterAnimation = {
  animation: "transition.bounceLeftIn",
  drag: true
};
var leaveAnimation = {
  animation: "transition.bounceLeftOut",
  drag: true
};

var CodeDance = function CodeDance(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: _Object$assign({}, style.container, props.containerStyle)
  }, /*#__PURE__*/React.createElement("pre", {
    style: style.pre
  }, /*#__PURE__*/React.createElement("code", null, /*#__PURE__*/React.createElement(velocityReact.VelocityTransitionGroup, {
    enter: enterAnimation,
    leave: leaveAnimation
  }, everyLine(props.code, props.type)))));
};

CodeDance.prototype = {
  code: PropTypes.string.isRequired,
  containerStyle: PropTypes.object
};
var index = /*#__PURE__*/React.memo(CodeDance);

module.exports = index;
