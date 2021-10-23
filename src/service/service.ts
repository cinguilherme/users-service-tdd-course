
const express = require('express');
import {router as helloRouter} from './http-in/routes'

export const startService = (port: number) => {
    const app = express();

    app.use('/hello', helloRouter);

    app.listen(port, () => {
        console.log('app running');
    });

    return app;
}



