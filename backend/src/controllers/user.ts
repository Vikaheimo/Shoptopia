import { User } from "../models/user"

const createUser = async (username: string, email: string, password: string) => {
    const newUser = new User({username, email, password})
    await newUser.save()
}