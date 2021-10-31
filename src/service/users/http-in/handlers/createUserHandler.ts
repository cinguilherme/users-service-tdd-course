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
        .resolve(wireToCreateUserSchemata(req.body))
        .then(makeSchemata())
        .then(createUser())

    resolveRequest(result, res)
}

const resolveRequest = (result: Result, response: Response) => {

    const resultCreation = _.get(result, 'result');
    if (resultCreation) {
        resolveRequestBang(resultCreation, response)
    } else {
        resolveValidationRequest(result, response);
    }
}

const resolveRequestBang = (result: CreateUserResult, res: Response) => {
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

const createUser: CreateUserF = () => {
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


function resolveValidationRequest(result: Result, response: Response) {
    response.status(400)
    response.send({
        validations: result.validations
    })

}

function makeSchemata(): ((value: UserToCreate) => { schemata: UserToCreate; validations: import("/Users/guilhermecintra/Development/users-service-tdd/users-service-tdd-course/src/service/users/logic/createUserValidation").ValidationsResult; } | PromiseLike<{ schemata: UserToCreate; validations: import("/Users/guilhermecintra/Development/users-service-tdd/users-service-tdd-course/src/service/users/logic/createUserValidation").ValidationsResult; }>) | null | undefined {
    return (schemata: UserToCreate) => {
        return {
            schemata,
            validations: validateCreateUserSchemata(schemata)
        };
    };
}
