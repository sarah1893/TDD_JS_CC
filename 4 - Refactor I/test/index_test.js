const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      // Setup      
      const expectedResult = 6;
      const inputArray = [1,2,3]
      // Exercise
      const result = Calculate.sum(inputArray)
      // Verification
      assert.equal(result, expectedResult);
    });
  });
});
