import _ from 'lodash';
import { Request, Response } from 'express';
import { UserToCreate } from '../../schematas/user.schemata';
import { wireToCreateUserSchemata } from '../../diplomats/userDiplomat';
import { validateCreateUserSchemata } from '../../logic/createUserValidation';
import { userCreation } from '../../orquestrators/userCreator';

export const createUsersHandler = async (req: Request, res: Response) => {

    const schemata: UserToCreate = wireToCreateUserSchemata(req.body);
    const validations = validateCreateUserSchemata(schemata);

    if (validations.validations.some(v => v.valid === false)) {
        res.status(400)
        res.send({
            message: "validation failed",
            validations: validations.validations
        })
    }

    const result = await userCreation(schemata);

    if (result.success) {
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
