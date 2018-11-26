import fs from 'fs'
import promisify from 'promisify-node'
import path from 'path';

import ReportModel from './../models/report.model'

const ReportController = (jsreport) => {

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

                const readFile = promisify(fs.readFile)

                const data = await readFile(dir + '/data.json')
                const footer = await readFile(dir + '/footer.html')
                const header = await readFile(dir + '/header.html')
                const helpers = await readFile(dir + '/helpers.js')
                const page = await readFile(dir + '/page.html')

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

                const writeFile = promisify(fs.writeFile)

                const dir = path.resolve("./src/reports/" + report._id + '-' + report.url)

                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }

                await writeFile(dir + "/helpers.js", "// Project")
                await writeFile(dir + "/data.json", "// Project")
                await writeFile(dir + "/page.html", "<!-- Project: " + report.projectName + " -->")
                await writeFile(dir + "/header.html", "<!-- Project: " + report.projectName + " -->")
                await writeFile(dir + "/footer.html", "<!-- Project: " + report.projectName + " -->")

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

                const { data, footer, header, helpers, page } = req.body

                const writeFile = promisify(fs.writeFile)

                const readFile = promisify(fs.readFile)

                const dir = path.resolve("./src/reports/" + report._id + '-' + report.url)

                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }

                try {
                    await writeFile(dir + "/data.json", data)
                    await writeFile(dir + "/footer.html", footer)
                    await writeFile(dir + "/header.html", header)
                    await writeFile(dir + "/helpers.js", helpers)
                    await writeFile(dir + "/page.html", page)
                } catch (err) {
                    res.status(400).send({ error: 'Ocorreu algum erro ao atualizar PDF' })
                }


                const dataRead = await readFile(dir + '/data.json')
                const footerRead = await readFile(dir + '/footer.html')
                const headerRead = await readFile(dir + '/header.html')
                const helpersRead = await readFile(dir + '/helpers.js')
                const pageRead = await readFile(dir + '/page.html')

                return res.send({
                    report,
                    data: dataRead.toString(),
                    footer: footerRead.toString(),
                    header: headerRead.toString(),
                    helpers: helpersRead.toString(),
                    page: pageRead.toString()
                })

            } catch (err) {
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