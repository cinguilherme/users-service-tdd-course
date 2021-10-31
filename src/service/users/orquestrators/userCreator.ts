import { createUser } from "../models/users";
import { UserToCreate } from "../schematas/user.schemata"

export const userCreation = async (user: UserToCreate) => {

    const result = await createUser(user);

    return result;

}