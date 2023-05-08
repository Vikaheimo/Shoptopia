import { Request, Response } from 'express'
import { findUser } from '../../controllers/user'
import validateBody from '../../middleware/validate'
export const post = [
    validateBody(['email', 'password']),
    async (req: Request, res: Response) => {
        try {
            const user = await findUser(req.body)
            if (user.length === 0) {
                res.status(401).json({ error: 'Wrong email or password' })
            } else {
                res.status(200).json({ bearer: 'TODO BEARER TOKEN HERE' })
            }
        } catch (error) {
            res.status
        }
    }
]
