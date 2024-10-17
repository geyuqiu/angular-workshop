
const fizzbuzz = require("../fizzbuzz");

describe('fizzbuzz', () => {
    it('should return true', () => {
        expect(true).toBeTrue();
    });

    it('should ', () => {
        expect(fizzbuzz([3])).toEqual('fizz');
    });

    it('should be buzz', () => {
        expect(fizzbuzz([5])).toEqual('buzz');
    });

    it('should be fizzbuzz', () => {
        expect(fizzbuzz([15])).toEqual('fizzbuzz');
    });

    it('should be fizz,buzz', () => {
        expect(fizzbuzz([3, 5])).toEqual('fizz buzz');
    });
})

describe('parameterized fizzbuzz converts ', ()=> {
    [
        {nums: [3], result: 'fizz'},
        {nums: [1,2], result: '1 2'},
    ].forEach(testcase => {
        it(`${testcase.nums} to ${testcase.result}`, () => {
            expect(fizzbuzz(testcase.nums)).toEqual(testcase.result);
        });
    })
})