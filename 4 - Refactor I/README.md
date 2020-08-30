# Refactor I

#### Congrats you’re in the green!

Once all your tests pass, you can confidently refactor your code — restructure and improve it without changing its external behavior. The confidence comes from knowing that our tests will catch us if we make a misstep.

When refactoring, it’s critical to test early and often — if our tests turn red, then we know that something went wrong while we were refactoring, and we can undo those changes.

A good place to start with refactoring is to restructure tests to reflect the four phases of a good test: *setup, exercise, verification, teardown*.

Let’s consider the test for our ``Phrase.initials`` method. We could rewrite the test with setup, exercise, and verification stages to make it more expressive and maintainable.
```javascript
describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      // Setup
      const inputName = 'Nelson Mandela';
      const expectedInitials = 'NM';
      // Exercise
      const result = Phrase.initials(inputName);
      // Verification
      assert.equal(result, expectedInitials);
    });
  });
});
```

Here, we have re-written the same test, but we have created variables to hold the values that we will use to test the behavior of ``.initials()``, and broken up the test into distinct phases, which are marked by the comments in the code.

Now that we have refactored our test code, we can refactor our implementation code. Our earlier code looked like this:
```javascript
const Phrase = {
  initials(phr) {
    return 'NM';
  }
}
```

In order to make our implementation code more expressive, we can change the name of the input argument of ``.initials()`` like this:
```javascript
const Phrase = {
  initials(inputName) {
    return 'NM';
  }
}
```

Refactoring will look different for each project and each iteration of the *red-green-refactor* cycle. In some cases you won’t need to refactor at all! Regardless, you should consider how you can improve your code and — although it is optional — it can set you up for success moving forward.

## Instructions

1. In **index_test.js**, refactor the code in your ``Calculate.sum`` test to include setup, exercise, and verify phases.
- Create descriptive ``const`` variables for your expected result, and then your input array
- Create a descriptive ``const`` variable for the result of your method
- Rewrite your ``assert.equal`` statement to compare the exercised result to the expected result.

> Hint
> When using **``assert.equal()``** the exercised result should be the first argument and the expected result the second.

2. Optional: Go to **index.js**. Refactor your implementation code and set the ``.sum()`` argument name to ``inputArray``. This descriptive name makes your implementation code more expressive.

Required: Run the test suite to make sure you are still in the green.

> Hint
> Run **``npm test``** in the terminal.