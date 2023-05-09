import validateBody from '../../middleware/validate'
import { Request, Response } from 'express'
import { isEmailValid } from '../../utils/checkEmailString'
import { findOneUser, createUser } from '../../controllers/user'
import { hashPassword } from '../../utils/hashPassword'
import { generateJWT } from '../../utils/jwtHandler'

export const post = [
    validateBody(['email', 'password', 'name']),
    async (req: Request, res: Response) => {
        try {
            const sameEmailUser = findOneUser({ email: req.body.email })

            if (!isEmailValid(req.body.email)) {
                res.status(400).json({ error: 'Given email is malformed' })
                return
            } else if (req.body.password.length < 8) {
                res.status(400).json({ error: 'Given password is too short' })
                return
            } else if (await sameEmailUser) {
                res.status(400).json({ error: 'This email is already in use' })
                return
            }

            const hashedPassword = await hashPassword(req.body.password)

            await createUser(req.body.name, req.body.email, hashedPassword)
            const user = await findOneUser({ email: req.body.email })

            if (!user) {
                throw 'Something went wrong when querying user'
            }

            const token = generateJWT(user._id.toString())
            res.status(200).json({ bearer: token })
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' })
        }
    }
]
