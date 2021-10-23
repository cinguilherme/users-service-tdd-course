import {Request, Response} from 'express';
import {sayHello} from "../hello/logic/sayHello";

export const helloHandler = (req: Request, res: Response) => {
    res.send(sayHello());
}
