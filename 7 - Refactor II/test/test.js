console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
  it('', function() {
    // setup
    let structureSelectorArrow = function(){
      const Calculate = {
        sum($inputArray){
          return $inputArray.reduce(($sum, $value) => {return $sum + $value})
        }
      }
    };
   
    let structureSelectorFunction = function() {
      const Calculate = {
        sum($inputArray){
          return $inputArray.reduce(function($a, $b) {
            return $a + $b
          })
        }
      }
    }

    // exercise
    let isMatchSelectorArrow = Structured.match(code, structureSelectorArrow);
    let isMatchSelectorFunction = Structured.match(code, structureSelectorFunction);
    let failureMessage = 'Did you write replace all of the previous implementation code inside `Calculate.sum()`? ' ;

    // verify
    assert.isOk(isMatchSelectorArrow || isMatchSelectorFunction, failureMessage);
  })
})