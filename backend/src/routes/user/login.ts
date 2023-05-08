import { Request, Response } from 'express'
import validateBody from '../../middleware/validate'
export const post = [
    validateBody(['username', 'password']),
    async (req: Request, res: Response) => {
        res.json()
    }
]
