import fs from 'fs'
import promisify from 'promisify-node'
import jsreport from '../modules/jsreport.module'

const UtilReport = () => {
    const Report = {
        readFile: async (dir) => {

            const readFile = promisify(fs.readFile)

            const data = await readFile(dir + '/data.json')
            const footer = await readFile(dir + '/footer.html')
            const header = await readFile(dir + '/header.html')
            const helpers = await readFile(dir + '/helpers.js')
            const page = await readFile(dir + '/page.html')

            const bodyPdf = {
                data: data.toString(),
                footer: footer.toString(),
                header: header.toString(),
                helpers: helpers.toString(),
                page: page.toString()
            }

            return bodyPdf
        },
        writeFile: async (dir, bodyPdf) => {

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            const writeFile = promisify(fs.writeFile)

            const {
                data,
                footer,
                header,
                helpers,
                page
            } = bodyPdf

            await writeFile(dir + "/helpers.js", helpers)
            await writeFile(dir + "/data.json", data)
            await writeFile(dir + "/page.html", page)
            await writeFile(dir + "/header.html", header)
            await writeFile(dir + "/footer.html", footer)

            return true
        },
        generatePdf: async (bodyPdf) => {

            const { data, footer, header, helpers, page } = bodyPdf

            const pdf = await jsreport.render({
                template: {
                    content: page.toString(),
                    helpers: helpers.toString(),
                    engine: 'handlebars',
                    recipe: 'phantom-pdf',
                    phantom: {
                        format: "A4",
                        width: "700px",
                        margin: "1cm",
                        numberOfWorkers: 1,
                        timeout: 180000,
                        allowLocalFilesAccess: false,
                        header: header.toString(),
                        headerHeight: "3cm",
                        footer: footer.toString(),
                        footerHeight: "1cm"
                    }

                },
                data: data.toString()
            });

            const pdfData = pdf.content

            return pdfData
        }
    }

    return Report
}
export default UtilReport