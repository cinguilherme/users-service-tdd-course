import { get } from 'lodash';
import { Request, Response } from "express";
import { validateCreateUserSchemata, validateUsername } from "../logic/createUserValidation";
import { CreateUserWire, UserToCreate } from "../schematas/user.schemata"

type WireToSchemata = (body: any) => UserToCreate

export const wireToCreateUserSchemata: WireToSchemata = (body) => {

  const { user, email } = body;

  return {
    username: user,
    email: email
  }
}