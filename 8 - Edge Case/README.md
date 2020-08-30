# Edge Case

Now that we have written and refactored a few tests, it’s time to consider *edge cases*.

An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter — you can think of these as special cases that you need to account for.

Take our ``Phrase.initials()`` example from earlier. What happens if we pass ``.initials()`` a number instead of a string? We could write a test and then implementation code that responds to this behavior by raising an error message that instructs you to only use strings.

The test for throwing an error when a number is passed to ``Phrase.initials()`` would look like this:
```javascript
it('raises an error if the parameter passed in is not a string', () => {
  // Setup
  const nameInput = 14;   
  // Exercise
  const exercise = () => { Phrase.initials(nameInput) };
  // Verification
  assert.throws(exercise, /only use string/);        
})
```

After getting our intended error message we would write just enough implementation code to pass the test. Which in this case would be adding the following to ``Phrase.initials()``:
```javascript
if (typeof inputName !== "string") {
  throw new Error("ERROR: only use string");
}
```

The complete implementation code would now be back in the green and look like this:
```javascript
const Phrase = {
  initials(inputName) {
    if (typeof inputName !== "string") {
      throw new Error("ERROR: only use string");
    }
    const initials = [];
    const words = inputName.split(" ");

    words.forEach((word) => {
      initials.push(word.charAt(0));
    });

   return initials.join("");
  }
}
```

This is an example of creating a test for edge cases.

## Instructions

1. Now you will write your own test and implementation code for an edge case in your ``Calculate`` module, which covers the behavior of an empty array passed to ``.sum()``.

Add another it block to your ``describe`` block that has the docstring:

``"returns zero for an empty array"``

Inside the new it block, use the following steps to write the setup, exercise, and verify phases:
- Set a ``const`` variable named ``expectedResult`` equal to ``0``.
- Set a ``const`` variable named ``inputArray`` equal to an empty array.
- Set a ``const`` variable named ``result`` equal to the result of ``Calculate.sum(inputArray)``
- Assert that your ``result`` is equal to your ``expectedResult``.

Checkpoint 2 Passed

Hint
You can set a variable to an empty array using [] .

You can make assertions using the syntax: assert.equal(arg1, arg2).

2.
In your index.js file, follow the steps below to add an if block that returns0 if your inputArray is empty.

Add an if block above the .reduce() method.
Check if the length of your inputArray is equal to 0.
Inside the if block, return 0 .
Checkpoint 3 Passed

Hint
Use the following code above the .reduce() method to return 0 when the inputArray.length is equal to zero.

if (inputArray.length === 0) {
  return 0;
}