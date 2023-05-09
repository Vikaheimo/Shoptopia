import { Request, Response, NextFunction } from 'express'
import { getSubjectJWT } from '../utils/jwtHandler'

/**
 * Middleware witch checks jwt token from header named "bearer".
 */
export default () => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bearer = req.headers.bearer
        if (!bearer || typeof bearer === 'object' || !getSubjectJWT(bearer)) {
            res.status(401).json({ error: 'Authorization error' })
            return
        }
        next()
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        })
    }
}
