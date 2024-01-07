import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'

// dotenv configuration
dotenv.config()

const app = express()

app.use(express.json())

// db connection
mongoose.connect(process.env.MONGO)
    .then(() => console.log('Database connected successfully!'))
    .catch((error) => console.log(error))

app.use('/backend/auth', authRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening at PORT:${PORT}`)
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})