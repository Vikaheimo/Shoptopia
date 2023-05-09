import argon2 from 'argon2'

const PEPPER = Buffer.from(process.env.PEPPER ? process.env.PEPPER : '')

if (PEPPER.byteLength === 0) {
    throw 'Password pepper not set!'
}

/**
 * Hashes a given password
 * @param password password to hash
 * @returns hashed password if the hashing was successful, otherwise null
 */
export const hashPassword = async (password: string) => {
    try {
        const hash = await argon2.hash(password, { secret: PEPPER })
        return hash
    } catch (err) {
        return null
    }
}

/**
 * Checks a given password against given string.
 * @param password password to check
 * @param hash hash to check against
 * @returns true if the password and hash match, false if they don't and null if the check failed
 */
export const passwordMatchesHash = async (password: string, hash: string) => {
    try {
        if (await argon2.verify(hash, password, { secret: PEPPER })) {
            return true
        } else {
            return false
        }
    } catch (err) {
        return null
    }
}