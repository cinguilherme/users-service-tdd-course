import { CreateUserWire, UserToCreate } from "../schematas/user.schemata"

type WireToSchemata = (body: CreateUserWire) => UserToCreate

export const wireToCreateUserSchemata: WireToSchemata = (body) => {

  const { user, email } = body;

  return {
    username: user,
    email: email
  }
}