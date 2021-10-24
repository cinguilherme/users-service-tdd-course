import {Request, Response} from 'express';
import {createUsers} from "../../models/users";
import {User} from "../../schemas/UserSchema";

export const updateUsersHandler = async (req: Request, res: Response) => {
    const user: User = req.body.username;

    const updated = await createUsers(user);

    res.status(200);
    res.send({
        result: updated
    });
}
