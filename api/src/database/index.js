import mongoose from 'mongoose'


mongoose.connect('mongodb://reportlocal:reportlocal123@ds121624.mlab.com:21624/db-report-local', {
    useNewUrlParser: true
})

mongoose.Promise = global.Promise

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar com o banco'))

db.once('open', () => {
    console.log(`Conectado no MongoDB: ${new Date()}`)
})

export default mongoose