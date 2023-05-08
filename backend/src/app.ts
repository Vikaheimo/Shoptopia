const express = require('express')
const dotenv = require('dotenv')
const router = require('express-file-routing')

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use('/', router.router())

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
