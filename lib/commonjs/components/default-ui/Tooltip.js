"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _reactNative = require("react-native");
var _Button = require("./Button.js");
var _style = require("../style.js");
var _CopilotProvider = require("../../contexts/CopilotProvider.js");
var _jsxRuntime = require("react/jsx-runtime");
const Tooltip = ({
  labels
}) => {
  const {
    goToNext,
    goToPrev,
    stop,
    currentStep,
    isFirstStep,
    isLastStep
  } = (0, _CopilotProvider.useCopilot)();
  const handleStop = () => {
    void stop();
  };
  const handleNext = () => {
    void goToNext();
  };
  const handlePrev = () => {
    void goToPrev();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: _style.styles.tooltipContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        testID: "stepDescription",
        style: _style.styles.tooltipText,
        children: currentStep?.text
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [_style.styles.bottomBar],
      children: [!isLastStep ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        onPress: handleStop,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          children: labels.skip
        })
      }) : null, !isFirstStep ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        onPress: handlePrev,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          children: labels.previous
        })
      }) : null, !isLastStep ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        onPress: handleNext,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          children: labels.next
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        onPress: handleStop,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.Button, {
          children: labels.finish
        })
      })]
    })]
  });
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map