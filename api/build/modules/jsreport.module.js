'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = require('./../app');

var _app2 = _interopRequireDefault(_app);

var _jsreportCore = require('jsreport-core');

var _jsreportCore2 = _interopRequireDefault(_jsreportCore);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reportingApp = (0, _express2.default)();

const jsreportInstance = (0, _jsreportCore2.default)({
    express: { app: reportingApp, server: _app2.default }
});

//Inicializando JsReport
jsreportInstance.init();

exports.default = jsreportInstance;
//# sourceMappingURL=jsreport.module.js.map