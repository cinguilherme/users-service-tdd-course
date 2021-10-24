import {Request, Response} from 'express';
import {deleteUsers} from "../../models/users";
import {User} from "../../schemas/UserSchema";

export const deleteUsersHandler = async (req: Request, res: Response) => {
    const user: User = req.body;

    const deleted = await deleteUsers(user);

    res.status(204);
    res.send({
        result: deleted
    });
}
