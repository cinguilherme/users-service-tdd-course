import _ from 'lodash';
import { Request, Response } from 'express';
import { UserToCreate } from '../../schematas/user.schemata';
import { wireToCreateUserSchemata } from '../../diplomats/userDiplomat';
import { validateCreateUserSchemata, ValidationsResult } from '../../logic/createUserValidation';
import { userCreation } from '../../orquestrators/userCreator';
import { CreateUserResult } from '../../models/db/createUser';

interface Result {
    result?: CreateUserResult
    message: string
    validations: ValidationsResult
}

export const createUsersHandler = async (req: Request, res: Response) => {

    const result: Result = await Promise
        .resolve(req.body)
        .then(wireToCreateUserSchemata)
        .then(validateSchemata())
        .then(createUserBang())

    resolveRequestBang(result, res)
}

const resolveRequestBang = (result: Result, response: Response) => {

    const resultCreation = _.get(result, 'result');
    if (resultCreation) {
        resolveRequestCreate(resultCreation, response)
    } else {
        resolveValidationRequest(result, response);
    }
}

const resolveRequestCreate = (result: CreateUserResult, res: Response) => {
    if (result.success) {
        res.status(201);
        res.send({
            result: result.created
        });
    } else {
        res.status(400);
        res.send({
            result: result.fail
        });
    }
}

type CreateUserF = () => (comp: { schemata: UserToCreate, validations: ValidationsResult }) => Promise<Result>

const createUserBang: CreateUserF = () => {
    return async (comp: { schemata: UserToCreate, validations: ValidationsResult }) => {
        const { schemata, validations } = comp;

        if (validations.validations.some(v => v.valid === false)) {
            return {
                message: "bad format",
                validations: validations
            };
        } else {
            const result = await userCreation(schemata);
            return {
                message: "validated",
                validations: validations,
                result: result
            }
        }
    };
}


const resolveValidationRequest = (result: Result, response: Response) => {
    response.status(400)
    response.send({
        validations: result.validations
    })

}

const validateSchemata = () => {
    return (schemata: UserToCreate) => {
        return {
            schemata,
            validations: validateCreateUserSchemata(schemata)
        };
    };
}
