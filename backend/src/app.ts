import express from 'express'
import dotenv from 'dotenv'
import { router } from 'express-file-routing'
import { init as initMongoDB } from './services/mongoDB'
dotenv.config()

const app = express()
const port = process.env.PORT
const db = initMongoDB()

app.use('/api', router())

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
