import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// dotenv configuration
dotenv.config()

const app = express()

// db connection
mongoose.connect(process.env.MONGO)
    .then(() => console.log('Database connected successfully!'))
    .catch((error) => console.log(error))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening at PORT:${PORT}`)
})