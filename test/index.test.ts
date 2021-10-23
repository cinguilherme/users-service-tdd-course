import {add} from '../src/index';

describe('add', () => {
    test('should be 2', () => {

        expect(add(1,1)).toBe(2);
    });
});