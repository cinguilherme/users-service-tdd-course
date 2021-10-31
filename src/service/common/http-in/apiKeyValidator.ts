import { Request, Response } from "express";

export const apiKeyValidator = (req: Request, res: Response, next: Function) => {

    const key = req.headers.api_key;

    if (validKey(key)) {
        next()
    } else {
        res.status(401)
        res.send({ message: "api key required for this api" })
    }

}

const validKey = (key: string | string[] | undefined) => {
    if (key === undefined || typeof (key) !== 'string') {
        return false
    }
    if (key === '1234567') return true
    return false
}
