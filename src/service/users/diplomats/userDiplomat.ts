import { get } from 'lodash';
import { Request, Response } from "express";
import { validateCreateUserSchemata, validateUsername } from "../logic/createUserValidation";
import { CreateUserWire, UserToCreate } from "../schematas/UserSchema"

export const wireToCreateUserSchemata = (req: Request, res: Response, next: Function) => {

  const { user, email } = req.body;
  req.body = { user, email }

  const wire: CreateUserWire = req.body;

  if (get(wire, 'email') == null || get(wire, 'user') == null) {
    res.status(400)
    res.send({ message: "required fields email and user" })
  } else {
    const userToCreate: UserToCreate = {
      username: wire.user,
      email: wire.email
    }

    req.body.schemata = userToCreate;

    next()
  }
}

export const createUserSchemataValidation = (req: Request, res: Response, next: Function) => {

  const validation = validateCreateUserSchemata(req.body.schemata);

  if (validation.validations.some(v => v.valid === false)) {
    console.log("validations failed");

    res.status(400)
    res.send({
      createUserValidation: "Not possible to create user with sent data",
      validations: validation.validations.filter(v => v.valid == false).map(f => f.details!)
    })
  } else {
    next()
  }
}