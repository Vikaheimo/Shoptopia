import express from 'express'

const router = express.Router()

router.use('/', async (req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

export default router
