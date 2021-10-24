import {Request, Response} from 'express';
import {createUsers} from "../../models/users";
import {User} from "../../schemas/UserSchema";

export const createUsersHandler = async (req: Request, res: Response) => {
    const user = req.body;

    console.log('create user params', user);

    const created = await createUsers(user);

    console.log('on handler: created => ', created);

    res.status(201);
    res.send({
        result: created
    });
}
