import mongoose, { createConnection } from 'mongoose'

export const init = () => {
    const database_uri = process.env.DATABASE_URI ? process.env.DATABASE_URI : 'mongodb://127.0.0.1:27017/shoptopia'
    return createConnection(database_uri)
}

