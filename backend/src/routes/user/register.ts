import validateBody from '../../middleware/validate'
import { Request, Response } from 'express'
import { isEmailValid } from '../../utils/checkEmailString'
import { findUser, createUser } from '../../controllers/user'
import { hashPassword } from '../../utils/hashPassword'

export const post = [
    validateBody(['email', 'password', 'name']),
    async (req: Request, res: Response) => {
        try {
            const sameEmailUser = findUser({ email: req.body.email })

            if (!isEmailValid(req.body.email)) {
                res.status(400).json({ error: 'Given email is malformed' })
                return
            } else if (req.body.password.length < 8) {
                res.status(400).json({ error: 'Given password is too short' })
                return
            } else if ((await sameEmailUser).length !== 0) {
                res.status(400).json({ error: 'This email is already in use' })
                return
            }

            const hashedPassword = await hashPassword(req.body.password)

            await createUser(req.body.name, req.body.email, hashedPassword)
            res.status(200).send()
        } catch {
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }
]
