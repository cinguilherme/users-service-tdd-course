import { getUsersHandler } from "./handlers/getUsersHandler";
import { createUsersHandler } from "./handlers/createUserHandler";
import { updateUsersHandler } from "./handlers/updateUsersHandler";
import { deleteUsersHandler } from "./handlers/deleteUserHandler";
import { wireTomodel } from "../diplomats/userDiplomat";

const express = require('express');
export const router = express.Router();

router.post('*', wireTomodel);

router.get('/', getUsersHandler);
router.post('/', createUsersHandler);
router.delete('/', deleteUsersHandler);
router.put('/', updateUsersHandler);
