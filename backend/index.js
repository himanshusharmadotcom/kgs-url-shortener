import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import serviceRouter from './routes/service.route.js'
import cookieParser from 'cookie-parser'
import path from 'path';


// dotenv configuration
dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use(cookieParser())

const __dirname = path.resolve();

// db connection
mongoose.connect(process.env.MONGO)
    .then(() => console.log('Database connected successfully!'))
    .catch((error) => console.log(error))

app.use('/backend/auth', authRouter)
app.use('/backend/service', serviceRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening at PORT:${PORT}`)
})

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
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