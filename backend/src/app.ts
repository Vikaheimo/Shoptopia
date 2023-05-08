import express from 'express'
import dotenv from 'dotenv'
import { router } from 'express-file-routing'
import { init as initMongoDB } from './services/mongoDB'
import requestLogger from './middleware/requestLogger'
dotenv.config()

const app = express()
const port = process.env.PORT
const db = initMongoDB()

app.use(express.json())
app.use('/', requestLogger)
app.use('/api', router())

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
