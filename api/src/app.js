import express from 'express'

import routerReports from './routes/report-router'

const app = express()

app.use('/', routerReports)

app.listen(3010, () => {
    console.log('Servidor rodando na  porta 3010')
})

export default app