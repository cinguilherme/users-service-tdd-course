import {Request, Response} from 'express';
import {createUsers} from "../models/users";

export const createUsersHandler = async (req: Request, res: Response) => {
    const user = {username: req.body.username};

    const created = await createUsers(user);

    console.log('on handler: created => ', created);

    res.send({
        details: 'not-yet-implemented',
        result: created
    });
}
