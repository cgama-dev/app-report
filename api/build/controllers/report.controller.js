'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _report = require('./../models/report.model');

var _report2 = _interopRequireDefault(_report);

var _report3 = require('./../util/report.util');

var _report4 = _interopRequireDefault(_report3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReportController = () => {

    const Report = {
        query: async (req, res) => {
            try {

                const reports = await _report2.default.find();

                return res.send({ reports });
            } catch (err) {
                return res.status(400).send({ error: 'Erro ao buscar lista de reports' });
            }
        },
        get: async (req, res) => {

            const id = req.params.id;

            try {
                const report = await _report2.default.findOne({
                    _id: id
                });

                if (!report) return res.status(400).send({ error: ' Erro ao buscar report' });

                const dir = _path2.default.resolve("./build/reports/" + report._id + '-' + report.url);

                const Util = (0, _report4.default)();

                const { data, footer, header, helpers, page } = await Util.readFile(dir);

                return res.send({
                    report,
                    data,
                    footer,
                    header,
                    helpers,
                    page
                });
            } catch (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao buscar report' });
            }
        },
        create: async (req, res) => {
            try {
                const report = await _report2.default.create(req.body);

                const dir = _path2.default.resolve("./build/reports/" + report._id + '-' + report.url);

                const defaultDir = _path2.default.resolve("./build/reports/default");

                const Util = (0, _report4.default)();

                const { data, footer, header, helpers, page } = await Util.readFile(defaultDir);

                const bodyPdf = {
                    data: data,
                    footer: footer,
                    header: header,
                    helpers: helpers,
                    page: page
                };

                await Util.writeFile(dir, bodyPdf);

                return res.send(report);
            } catch (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao criar report' });
            }
        },
        update: async (req, res) => {

            const id = req.params.id;

            try {

                const report = await _report2.default.findOne({ _id: id });

                if (!report) return res.status(400).send({ error: 'Esse projeto não existe na base de dados' });

                const Util = (0, _report4.default)();

                const dir = _path2.default.resolve("./build/reports/" + report._id + '-' + report.url);

                await Util.writeFile(dir, req.body);

                const { data, footer, header, helpers, page } = await Util.readFile(dir);

                return res.send({
                    report,
                    data,
                    footer,
                    header,
                    helpers,
                    page
                });
            } catch (err) {

                return res.status(400).send({ error: 'Ocorreu algum erro ao atualizar o projeto' });
            }
        },
        generate: async (req, res) => {

            const id = req.body.reportId;

            try {

                const report = await _report2.default.findOne({ _id: id });

                if (!report) return res.status(400).send({ error: 'Esse projeto não existe na base de dados' });

                const Util = (0, _report4.default)();

                // console.log(req.body)

                const pdfData = await Util.generatePdf(req.body);

                console.log(pdfData);

                res.writeHead(200, {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition': 'attachment; filename=Laudos.pdf',
                    'Content-Length': pdfData.length
                });

                return res.end(pdfData);
            } catch (err) {
                console.log(err);
                return res.status(400).send({ error: 'Erro ao renderizar PDF' });
            }
        }
    };

    return Report;
};

exports.default = ReportController;
//# sourceMappingURL=report.controller.js.map