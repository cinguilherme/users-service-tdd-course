import { Request, Response } from "express";
import { User } from "../schematas/UserSchema"

export const wireTomodel = (req: Request, res: Response, next: Function) => {
  console.log("transforming the outside world data into my internal free form data");

  const wire = req.body;

  const user: User = {
    username: wire.username,
    email: wire.email
  }
  req.body.internal = user;
  console.log("altered req.body adding internal with user");

  next()
}