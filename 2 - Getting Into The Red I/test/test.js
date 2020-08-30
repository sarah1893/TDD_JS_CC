console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/index_test.js', 'utf8');

describe('', function () {
  it('There is a syntax error in your code', function() {
    let structureSelectorWrongOrder = function(){
      describe($outerMsg, () => {
        describe($innerMsg,() => {
          it($itMsg, () => {

            assert.equal(6, Calculate.sum([1, 2, 3]))
          });
        });
      });
    };

    let structureSelector = function(){
      describe($outerMsg, () => {
        describe($innerMsg,() => {
          it($itMsg, () => {

            assert.equal(Calculate.sum([1, 2, 3]), 6)
          });
        });
      });
    };

    
    let isMatchSelectorOrder = Structured.match(code, structureSelectorWrongOrder);
    let isMatchSelector = Structured.match(code, structureSelector);
    
    
    let failureMessageOrder = 'Make sure that the actual result is the first argument and the expected result is the second argument.';
    let failureMessageStructure = 'Did you write an `assert.equal()` statement with `Calculate.sum([1,2,3])` and `6` as arguments?'
    assert.isNotOk(isMatchSelectorOrder, failureMessageOrder);
    assert.isOk(isMatchSelector, failureMessageStructure);
  })
})


