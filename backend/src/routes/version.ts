
import { Request, Response } from 'express';

export const get = async (req: Request, res: Response) => {
    res.json({"version" : process.env.npm_package_version})
}
