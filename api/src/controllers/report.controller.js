import ReportModel from './../models/report.model'
import fs from 'fs'
import path from 'path';

const ReportController = () => {

    const Report = {
        query: async (req, res) => {
            try {
                const reports = await ReportModel.find()
                res.send({
                    reports
                })
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
                    return res.status(400).send({
                        error: ' Erro ao buscar report'
                    })

                res.send(report)

            } catch (err) {
                console.log(err)
                res.status(400).send({
                    error: 'Erro ao buscar report'
                })
            }


        },
        create: async (req, res) => {
            try {
                const report = await ReportModel.create(req.body)

                const dir = "./src/reports/" + report._id + '-' + report.url

                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }

                const helpers = await fs.writeFile(dir + "/data.json", "// Project")
                const data =    await fs.writeFile(dir + "/data.json", "// Project")
                const html =    await fs.writeFile(dir + "/page.html", "<!-- Project: " + report.projectName + " -->")
                const header =  await fs.writeFile(dir + "/header.html", "<!-- Project: " + report.projectName + " -->")
                const footer =  await fs.writeFile(dir + "/footer.html", "<!-- Project: " + report.projectName + " -->")

                res.send(report)

            } catch (err) {
                res.status(400).send({
                    error: 'Erro ao criar report',
                    e: err

                })
            }
        },
        update: (req, res) => {
            res.send('Update')
        }
    }

    return Report
}

export default ReportController