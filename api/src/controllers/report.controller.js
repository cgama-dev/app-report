import ReportModel from './../models/report.model'

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
        get: (req, res) => {
            res.send('Get')
        },
        create: async (req, res) => {
            try {
                const report = await ReportModel.create(req.body)
                res.send(report)

            } catch (err) {
                res.status(400).send({
                    error: 'Erro ao cadastrar report'
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