console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
	it('', function() {
		
    let structureSelector = function(){
			const Calculate = {
        sum(inputArray) {
          return 6;
        }
        
      };
      
      module.exports = Calculate;
		};

    let isMatchSelector = Structured.match(code, structureSelector);
    let failureMessage = 'Did you rename the argument that your `.sum()` method accepts to \'inputArray\'?';
    assert.isOk(isMatchSelector, failureMessage);  
	})
})



    