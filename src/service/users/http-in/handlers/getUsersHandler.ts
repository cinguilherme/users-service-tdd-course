import {Request, Response} from 'express';
import {getUsers} from "../../models/users";


export const getUsersHandler = async (req: Request, res: Response) => {
    const users = await getUsers();
    res.send(users);
}
