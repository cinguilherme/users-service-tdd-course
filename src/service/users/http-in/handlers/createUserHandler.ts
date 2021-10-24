import {Request, Response} from 'express';
import {createUsers} from "../../models/users";

export const createUsersHandler = async (req: Request, res: Response) => {
    const user = req.body;

    const result = await createUsers(user);

    if(result.success) {
        res.status(201);
        res.send({
            result: result.created
        });
    } else {
        res.status(400)
        res.send({
            result: result.fail
        })
    }


}
