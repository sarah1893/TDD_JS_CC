var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum', () => {
    it('returns the sum of a three item list', ()=> {
      const solution = 6;
      const inputArray = [1,2,3];

      const result = Calculate.sum(inputArray);

      assert.equal(solution, result);
    });


   it('returns the sum of a four item list', () => {
      const solution = 22;
      const inputArray = [4, 5, 6, 7];

      const result = Calculate.sum(inputArray);

      assert.equal(solution, result);
    });
  });
});
