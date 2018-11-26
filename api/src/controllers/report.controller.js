import path from 'path';

import jsreport from '../modules/jsreport.module'

import ReportModel from './../models/report.model'

import UtilReport from './../util/report.util'

const ReportController = () => {

    const Report = {
        query: async (req, res) => {
            try {

                const reports = await ReportModel.find()

                res.send({ reports })

            } catch (err) {
                res.status(400).send({
                    error: 'Erro ao buscar lista de reports'
                })
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
                    data: data.toString(),
                    footer: footer.toString(),
                    header: header.toString(),
                    helpers: helpers.toString(),
                    page: page.toString()
                })

            } catch (err) {
                return res.status(400).send({ error: 'Erro ao buscar report' })
            }

        },
        create: async (req, res) => {
            try {
                const report = await ReportModel.create(req.body)

                const dir = path.resolve("./src/reports/" + report._id + '-' + report.url)

                const Util = UtilReport()

                const bodyPdf = {
                    data: "//Report",
                    footer: "<!--  Report -->",
                    header: "<!--  Report -->",
                    helpers: "//Report",
                    page: "<!--  Report -->"
                }

                await Util.writeFile(dir, bodyPdf)

                res.send(report)

            } catch (err) {
                res.status(400).send({ error: 'Erro ao criar report' })
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
                    data: data.toString(),
                    footer: footer.toString(),
                    header: header.toString(),
                    helpers: helpers.toString(),
                    page: page.toString()
                })

            } catch (err) {
                console.log(err)
                res.status(400).send({ error: 'Ocorreu algum erro ao atualizar o projeto' })
            }

        },
        run: async (req, res) => {
            try {
                const data = await jsreport.render({
                    template: {
                        content: '<h1>Hello {{:foo}}</h1>',
                        engine: 'handlebars',
                        recipe: 'phantom-pdf'
                    },
                    data: {
                        foo: "world"
                    }
                });

                const pdfData = data.content

                res.writeHead(200, {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition': 'attachment; filename=Laudos.pdf',
                    'Content-Length': pdfData.length
                });

                return res.end(pdfData);

            } catch (err) {
                return res.status(400).send({ error: 'Erro ao renderizar PDF' })
            }


            // //Retornando PDF
            // jsreport.then(function() {
            // jsreport.render({
            //     template: {
            //         content: '<h1>Hello {{:foo}}</h1>',
            //         engine: 'handlebars',
            //         recipe: 'phantom-pdf'
            //     },
            //     data: {
            //         foo: "world"
            //     }
            // }).then(function(resp) {
            //     //prints pdf with headline Hello world
            //     // console.log(resp.content.toString())
            //     const pdfData = resp.content;



            // });
            // }).catch(function(e) {
            //     console.log(e)
            // });

            // jsreport.init().then(() => {
            //     console.log('jsreport server started')
            // }).catch((e) => {
            //     console.error(e);
            // });
            // console.log()
            // const id = req.params.id

            // const report = await ReportModel.findOne({ _id: id })

            // const readFile = promisify(fs.readFile)

            // const dir = path.resolve("./src/reports/" + report._id + '-' + report.url)

            // const data = await readFile(dir + '/data.json')
            // const footer = await readFile(dir + '/footer.html')
            // const header = await readFile(dir + '/header.html')
            // const helpers = await readFile(dir + '/helpers.js')
            // const page = await readFile(dir + '/page.html')


            // jsreport.init().then(function() {
            //     jsreport.render({
            //         template: {
            //             content: page,
            //             helpers: helpers,
            //             engine: 'handlebars',
            //             recipe: 'phantom-pdf',
            //             phantom: {
            //                 format: "A4",
            //                 width: "700px",
            //                 margin: "1cm",
            //                 numberOfWorkers: 1,
            //                 timeout: 180000,
            //                 allowLocalFilesAccess: false,
            //                 header: header,
            //                 headerHeight: "3cm",
            //                 footer: footer,
            //                 footerHeight: "21px"
            //             }
            //         },
            //         data: data

            //     }).then(function(resp) {
            //         const pdfData = resp.content;

            //         res.writeHead(200, {
            //             'Content-Type': 'application/pdf',
            //             'Content-Disposition': 'attachment; filename=Laudos.pdf',
            //             'Content-Length': pdfData.length
            //         });

            //         //Retornando PDF
            //         res.end(pdfData);
            //         //res.end(new Buffer(pdfData, 'binary'));

            //     });

            // }).catch(function(e) {
            //     console.log(e);
            // });
            // res.send(jsreport)
        }
    }

    return Report
}

export default ReportController