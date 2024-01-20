import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema(
    {
        urlId: {
            type: String,
            required: true
        },
        origUrl: {
            type: String,
            required: true
        },
        shortUrl: {
            type: String,
            required: true
        },
        clicks: {
            type: Number,
            required: true,
            default: 0
        },
        queryParams: {
            type: String,
            default: '', 
        },
        userRef: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
)

const urlData = mongoose.model('urlData', urlSchema)

export default urlData