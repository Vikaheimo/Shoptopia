const express = require('express')
const dotenv = require('dotenv')
import { Request, Response } from 'express';

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
  console.log
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
