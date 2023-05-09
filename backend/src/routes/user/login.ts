import { Request, Response } from 'express'
import { findOneUser } from '../../controllers/user'
import validateBody from '../../middleware/validate'
import { passwordMatchesHash } from '../../utils/hashPassword'
export const post = [
    validateBody(['email', 'password']),
    async (req: Request, res: Response) => {
        try {
            const user = await findOneUser({ email: req.body.email })
            if (!user) {
                res.status(401).json({ error: 'Wrong email or password' })
                return
            }

            const hash = user.password
            const password = req.body.password

            if (!(await passwordMatchesHash(password, hash))) {
                res.status(401).json({ error: 'Wrong email or password' })
                return
            }

            res.status(200).json({ bearer: 'TODO BEARER TOKEN HERE' })
        } catch {
            res.status(500).json({ error: 'Internal server error' })
        }
    }
]
