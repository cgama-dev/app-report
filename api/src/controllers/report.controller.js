import path from 'path';

import jsreport from '../modules/jsreport.module'

import ReportModel from './../models/report.model'

import UtilReport from './../util/report.util'

const ReportController = () => {

    const Report = {
        query: async (req, res) => {
            try {

                const reports = await ReportModel.find()

                return res.send({ reports })

            } catch (err) {
                return res.status(400).send({ error: 'Erro ao buscar lista de reports' })
            }

        },
        get: async (req, res) => {
            const id = req.params.id
            try {
                const report = await ReportModel.findOne({
                    _id: id
                })

                if (!report)
                    return res.status(400).send({ error: ' Erro ao buscar report' })

                const dir = path.resolve("./src/reports/" + report._id + '-' + report.url)

                const Util = UtilReport()

                const { data, footer, header, helpers, page } = await Util.readFile(dir)

                return res.send({
                    report,
                    data: data,
                    footer: footer,
                    header: header,
                    helpers: helpers,
                    page: page
                })

            } catch (err) {
                console.log(err)
                return res.status(400).send({ error: 'Erro ao buscar report' })
            }

        },
        create: async (req, res) => {
            try {
                const report = await ReportModel.create(req.body)

                const dir = path.resolve("./src/reports/" + report._id + '-' + report.url)

                const defaultDir = path.resolve("./src/reports/default")

                const Util = UtilReport()

                const { data, footer, header, helpers, page } = await Util.readFile(defaultDir)

                const bodyPdf = {
                    data: data,
                    footer: footer,
                    header: header,
                    helpers: helpers,
                    page: page
                }

                await Util.writeFile(dir, bodyPdf)

                return res.send(report)

            } catch (err) {
                console.log(err)
                return res.status(400).send({ error: 'Erro ao criar report' })
            }
        },
        update: async (req, res) => {

            const id = req.params.id

            try {

                const report = await ReportModel.findOne({ _id: id })

                if (!report)
                    return res.status(400).send({ error: 'Esse projeto não existe na base de dados' })

                const Util = UtilReport()

                const dir = path.resolve("./src/reports/" + report._id + '-' + report.url)

                await Util.writeFile(dir, req.body)

                const { data, footer, header, helpers, page } = await Util.readFile(dir)

                return res.send({
                    report,
                    data,
                    footer,
                    header,
                    helpers,
                    page
                })

            } catch (err) {

                return res.status(400).send({ error: 'Ocorreu algum erro ao atualizar o projeto' })
            }

        },
        run: async (req, res) => {

            const id = req.params.id

            try {
            
                const report = await ReportModel.findOne({ _id: id })

                if (!report)
                    return res.status(400).send({ error: 'Esse projeto não existe na base de dados' })

                const Util = UtilReport()
                
                const dir = path.resolve("./src/reports/" + report._id + '-' + report.url)

                const { data, footer, header, helpers, page } = await Util.readFile(dir)

                const pdf = await jsreport.render({
                    template: {
                        content: page,
                        helpers: helpers,
                        engine: 'handlebars',
                        recipe: 'phantom-pdf',
                        phantom: {
                            format: "A4",
                            width: "700px",
                            margin: "1cm",
                            numberOfWorkers: 1,
                            timeout: 180000,
                            allowLocalFilesAccess: false,
                            header: header,
                            headerHeight: "3cm",
                            footer: footer,
                            footerHeight: "3cm"
                        }

                    },
                    data: data
                });

                const pdfData = pdf.content

                res.writeHead(200, {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition': 'attachment; filename=Laudos.pdf',
                    'Content-Length': pdfData.length
                });

                return res.end(pdfData)

            } catch (err) {
                console.log(err)
                return res.status(400).send({ error: 'Erro ao renderizar PDF' })
            }
        }
    }

    return Report
}

export default ReportController