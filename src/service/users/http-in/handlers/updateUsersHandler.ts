import {Request, Response} from 'express';
import {createUser} from "../../models/users";
import {User} from "../../schemas/UserSchema";

export const updateUsersHandler = async (req: Request, res: Response) => {
    const user: User = req.body.username;

    const updated = await createUser(user);

    res.status(200);
    res.send({
        result: updated
    });
}
