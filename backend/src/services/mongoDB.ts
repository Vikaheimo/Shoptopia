import mongoose from 'mongoose'

const MS_IN_SECOND = 1000
const TIMEOUT = MS_IN_SECOND * 5

export const init = () => {
    const database_uri = process.env.DATABASE_URI ? process.env.DATABASE_URI : 'mongodb://127.0.0.1:27017/shoptopia'
    setTimeout(() => {
        mongoose.connect(database_uri)
    }, TIMEOUT)
}
