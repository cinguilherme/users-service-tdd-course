import { Request, Response } from "express";

export const sanitizeCreateUserBody = (req: Request, res: Response, next: Function) => {

  console.log('got body with');
  console.log(req.body);


  const { user, email } = req.body
  req.body = { user, email }

  console.log(req.body);


  next()

}