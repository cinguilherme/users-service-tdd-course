import {Request, Response} from 'express';
import {sayHello} from "../logic/sayHello";

export const helloHandler = async (req: Request, res: Response) => {
    res.send(await sayHello());
}
