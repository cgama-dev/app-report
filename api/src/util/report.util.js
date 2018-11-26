import fs from 'fs'
import promisify from 'promisify-node'


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
                data,
                footer,
                header,
                helpers,
                page
            }

            return bodyPdf
        },
        writeFile: async (dir, bodyPdf) => {
            
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            const writeFile = promisify(fs.writeFile)

            const { data, footer, header, helpers, page } = bodyPdf

            await writeFile(dir + "/helpers.js", helpers)
            await writeFile(dir + "/data.json", data)
            await writeFile(dir + "/page.html", page)
            await writeFile(dir + "/header.html", header)
            await writeFile(dir + "/footer.html", footer)

            return true
        }
    }

    return Report
}
export default UtilReport