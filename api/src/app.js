import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import jsreport from 'jsreport-core';

import routerReports from './routes/report-router'

const app = express()
const reportingApp = express()

const jsreportInstance = jsreport({
    express: { app: reportingApp, server: app },
    appPath: "/reporting"
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

app.use('/reporting', reportingApp);
app.use('/reports', routerReports(jsreportInstance))

app.listen(3011, () => {
    console.log('Servidor rodando na porta 3011')
})
//Inicializando Jsreport
jsreportInstance.init();

export default app