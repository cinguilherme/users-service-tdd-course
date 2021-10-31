import { Request, Response } from "express";

export const apiKeyValidator = (req: Request, res: Response, next: Function) => {

    console.log(req.headers);
    

    next()
}