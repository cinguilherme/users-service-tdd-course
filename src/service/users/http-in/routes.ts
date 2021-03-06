import { getUsersHandler } from "./handlers/getUsersHandler";
import { createUsersHandler } from "./handlers/createUserHandler";
import { updateUsersHandler } from "./handlers/updateUsersHandler";
import { deleteUsersHandler } from "./handlers/deleteUserHandler";
import { apiKeyValidator } from "../../common/http-in/middleware/apiKeyValidator";
import { sanitizeCreateUserBody } from "./middlewares/createUserSanitizer";

const express = require('express');
export const router = express.Router();

router.use('*', apiKeyValidator);

router.get('/', getUsersHandler);

router.post('*', sanitizeCreateUserBody);
router.post('/', createUsersHandler);

router.delete('/', deleteUsersHandler);
router.put('/', updateUsersHandler);
