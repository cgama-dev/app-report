const ReportController = () => {

    const Report = {
        query: (req, res) => {
            res.send('Query')
        },
        get: (req, res) => {
            res.send('Get')
        },
        create: (req, res) => {
            res.send('Create')
        },
        update: (req, res) => {
            res.send('Update')
        }
    }

    return Report
}

export default ReportController