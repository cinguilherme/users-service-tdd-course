import {getUsersHandler} from "./getUsersHandler";
import {createUsersHandler} from "./createUserHandler";

const express = require('express');
export const router = express.Router();

router.get('/', getUsersHandler);
router.post('/', createUsersHandler);
