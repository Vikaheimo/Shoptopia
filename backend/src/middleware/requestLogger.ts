import express, { Request, Response } from "express";

const router = express.Router()

router.use("/", async (req, res, next) => {
    console.log(`${req.method} ${req.path}`)
})

export default router