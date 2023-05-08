import { Request, Response, NextFunction } from 'express'

/**
 * Middleware to check if a request's body contains given fields.
 */
export default (check: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        check.forEach((value) => {
            if (!req.body[value]) {
                throw `Missing field {${value}}`
            }
        })
        next()
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}
