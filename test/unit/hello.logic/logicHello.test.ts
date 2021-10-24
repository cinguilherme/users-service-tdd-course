import {sayHello} from '../../../src/service/hello/logic/sayHello';


describe('SayHello', () => {

    test('should say hello', () => {

        expect(sayHello()).toEqual({
            details: "hello from the service",
            name: "cintra"
        });

    })


});
