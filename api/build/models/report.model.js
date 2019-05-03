'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _database = require('./../database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReportSchema = new _database2.default.Schema({
    projectName: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Report = _database2.default.model('Projects', ReportSchema);

exports.default = Report;
//# sourceMappingURL=report.model.js.map