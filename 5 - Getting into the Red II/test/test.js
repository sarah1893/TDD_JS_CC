console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/index_test.js', 'utf8');

describe('', function () {
  it('', function() {
    

   let structureSelector = function(){
    describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1,2,3]
      
      const result = Calculate.sum(inputArray)
      
      assert.equal(result, expectedResult);
    });
    
    // Second test goes here
    it('returns the sum of a four item list', ()=>{
      const $expectedResult = 22;
      const $inputArray = [4,6,5,7];
      
      const $result = Calculate.sum(inputArray);
      
      assert.equal($result, $expectedResult)
      
    });
  });
});
   };

    
    
    let isMatchSelector = Structured.match(code, structureSelector);

    let failureMessage = 'Did you add another `it` block, and assert that the result and expectedResult should be equal?';

    assert.isOk(isMatchSelector, failureMessage)
  })
})