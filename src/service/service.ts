
const express = require('express');
import { router as helloRouter } from './hello/http-in/routes'
import { router as usersRouter } from './users/http-in/routes'

export const startService = (port: number) => {
    const app = express();
    app.use(express.json());

    //public
    app.use('/hello', helloRouter);


    //secured
    app.use('/users', usersRouter);

    app.listen(port, () => {
        console.log('app running');
    });

    return app;
}



