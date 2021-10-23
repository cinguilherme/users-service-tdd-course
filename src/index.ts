import { startService } from './service/service';

export const add = (a: number,b: number) => {
    return a + b;
};

startService(3000);
