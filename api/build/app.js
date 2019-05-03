'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _reportRouter = require('./routes/report-router');

var _reportRouter2 = _interopRequireDefault(_reportRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: true
}));
app.use((0, _cors2.default)());

app.use('/reports', (0, _reportRouter2.default)());

app.listen(3011, () => {
    console.log('Servidor rodando na porta 3011');
});

exports.default = app;
//# sourceMappingURL=app.js.map