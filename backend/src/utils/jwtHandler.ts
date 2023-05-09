import jwt from 'jsonwebtoken'

const KEY = process.env.JWT_KEY ? process.env.JWT_KEY : ''

if (!KEY) {
    throw 'JWT private KEY not set not set!'
}

/**
 * Generates jwt from given subject.
 * @param id subject for the token
 * @returns jwt token if successful and empty string if failed
 */
export const generateJWT = (id: string) => {
    try {
        return jwt.sign({ sub: id }, KEY, { expiresIn: '1h' })
    } catch (err) {
        console.log(err)
        return ''
    }
}

/**
 * Returns the subject on the token. Also check if the token is valid
 * @param token token to be checked
 * @returns string, subject if the token is valid, otherwise empty string
 */
export const getSubjectJWT = (token: string) => {
    try {
        const decoded = jwt.verify(token, KEY)
        return decoded
    } catch {
        return ''
    }
}
