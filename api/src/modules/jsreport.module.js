import app from './../app'
import jsreport from 'jsreport-core';
import express from 'express'

const reportingApp = express()

const jsreportInstance = jsreport({
    express: { app: reportingApp, server: app }
});

//Inicializando JsReport
jsreportInstance.init();

export default jsreportInstance
