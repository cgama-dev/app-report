import mongoose from './../database'

const ReportSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Report = mongoose.model('Projects', ReportSchema)

export default Report