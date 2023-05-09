import { User } from '../models/user'

interface UserQuery {
    name?: string
    email?: string
    password?: string
}

export const createUser = async (name: string, email: string, password: string) => {
    const newUser = new User({ name, email, password })
    await newUser.save()
}

export const findUser = async (query: UserQuery) => {
    return await User.find(query)
}

export const findOneUser = async (query: UserQuery) => {
    return await User.findOne(query)
}
