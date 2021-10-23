const express = require('express');
import {Response, Request} from 'express';

export const startService = (port: number) => {
    const app = express();

    app.get('/hello', (req: Request, res: Response) => {
        res.send({name: 'cintra', details: 'hello from the service'});
    });

    app.listen(port, () => {
        console.log('app running');
    });

    return app;
}



