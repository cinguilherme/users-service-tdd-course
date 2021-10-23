import {helloHandler} from "./helloHandler";

const express = require('express');
export const router = express.Router();

router.get('/', helloHandler);

