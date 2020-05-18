"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.isRecord = isRecord;
var _reactNative = require("react-native");


function isRecord() {
    if (_reactNative.Platform.OS !== 'ios') { return null }
    return _reactNative.NativeModules.ScreenRecorderDetect.get();
}

const screenRecorderDetectModule = {
    isRecord
};
var _default = screenRecorderDetectModule;
exports.default = _default;