# Getting Into The Red I

When we use the red, green, refactor cycle, we:

1. Write test code that fails
2. Write implementation code to make the test pass
3. Consider refactoring the code

As you learn TDD, it may feel backward to intentionally write and run code that will return errors. In TDD we react to the error messages by continually re-writing our implementation code so it behaves in the way that our test specifies.

Imagine you were trying to create a method named ``.initials``, inside of an object named ``Phrase``.

The desired behavior of ``.initials()`` is that it should return the first letter of each word in a phrase that is passed to it as an argument.

### Step 1: Write The Test

The first step to writing a test with Mocha is to use ``describe`` and ``it`` blocks to describe the desired behavior of your code. It’s very important for tests to thoroughly describe the desired behavior with natural language. This will create the most helpful error messages and make it easy for you to understand the behavior that your test failed in executing.

Before running our test, we would use an assert statement to compare the desired result of our method with the actual result.

*The first step in developing this method would be writing a test that could look like this:*
```javascript
describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      assert.equal(Phrase.initials('Nelson Mandela'), 'NM');
    })
  })
})
```

### Step 2: Run the test

If we ran this test we would get the following error message in the terminal:

ReferenceError: Phrase is not defined

### Step 3: The test fails (yea!)

The error message tells us that the error is related to the ``Phrase.initials`` code block. The ``ReferenceError`` tells us that the error is thrown because we don’t have a ``Phrase`` object. In the next exercise, we’ll show you the minimum possible code required to get this test to pass.

## Instructions

1. Complete the test for ``Calculate.sum()`` In **index_test.js** by writing an ``assert.equal()`` statement to verify that ``Calculate.sum([1,2,3])`` is equal to ``6``.

> **Hint**
**``assert``** statements should follow this syntax:
```javascript
assert.equal(actual, expected);
```
> - The first argument in your **``assert.equal()``** statement should be **``Calculate.sum([1,2,3])``**
>- The second argument should be **``6``**