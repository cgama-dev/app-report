import mongoose from 'mongoose'


mongoose.connect('mongodb://cgamadev:cgama123@ds161856.mlab.com:61856/appreport', {
    useNewUrlParser: true
})

mongoose.Promise = global.Promise

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar com o banco'))

db.once('open', () => {
    console.log(`Conectado no MongoDB: ${new Date()}`)
})

export default mongoose