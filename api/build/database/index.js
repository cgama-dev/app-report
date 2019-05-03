'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://reportlocal:reportlocal123@ds121624.mlab.com:21624/db-report-local', {
    useNewUrlParser: true
});

_mongoose2.default.Promise = global.Promise;

const db = _mongoose2.default.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar com o banco'));

db.once('open', () => {
    console.log(`Conectado no MongoDB: ${new Date()}`);
});

exports.default = _mongoose2.default;
//# sourceMappingURL=index.js.map