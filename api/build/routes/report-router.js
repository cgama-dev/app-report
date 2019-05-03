'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _report = require('../controllers/report.controller');

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routeReport = () => {

    const router = _express2.default.Router();

    const controller = (0, _report2.default)();

    router.get('/', controller.query);
    router.get('/:id', controller.get);
    router.post('/', controller.create);
    router.post('/report/generate', controller.generate);
    router.put('/:id', controller.update);

    return router;
};

exports.default = routeReport;
//# sourceMappingURL=report-router.js.map