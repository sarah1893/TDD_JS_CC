# Red To Green I

#### Congrats you’re in the red!
The red error messages describe the failures of our implementation code, so we can specifically address each issue that is preventing our test from passing.

Let’s look at the error message from our ``Phrase.initials()`` example in the last exercise:

    ReferenceError: Phrase is not defined

The error tells us that ``Phrase is not defined``. This is because we have not created an object named ``Phrase`` yet. Let’s do that now:
```javascript
const Phrase = {}
```

When we run our test again the error would look like this:

    TypeError: Phrase.initials is not a function

We’re still in the red, but we have a new error. The error says that ``Phrase.initials`` is not a function. That’s because we haven’t added an ``.initials`` method to the ``Phrase`` object. Let’s do that now:
```javascript
const Phrase = {
    initials() {
  }
}
```

Now when we run our test we get the following error:

    AssertionError:  undefined == 'NM'

This is the first error that is referencing the actual behavior of the ``.initials`` method.

The assert statement we wrote looked like this:
```javascript
assert.equal(Phrase.initials('Nelson Mandela'), 'NM');
```

We expected the result of passing ``Nelson Mandela`` to ``Phrase.initials()`` to be ``NM``, but the actual result was ``undefined``. This is because our method has not been programmed to return anything.

Following TDD, the next step would be writing the minimum possible implementation code to make our test pass. In this example, that would involve adding a line of implementation code so that ``.initials()`` returns our expected result, which is ``NM``.

*The minimum possible implementation code to make the test pass:*
```javascript
const Phrase = {
  initials(phr) {
    return 'NM';
  }
}
```

Now our test would pass and we would be in the green. But that doesn’t mean our method is working as intended. If we entered “Jody Williams” our method would return ‘NM’, not ‘JW’. We will address this issue when it is time, but following TDD, now that we have progressed from the red to the green, we will move into the refactor phase.

## Instructions

1. Go to your **index.js** file and above the line of code that is exporting your implementation code, create an empty object named ``Calculate``.

Then run the test suite in your terminal using ``npm test``. Notice the error — you get that ``.sum()`` is not a function as an out of the box error message.

Check your work.

> Hint
> Make sure that
> - you declare **``Calculate``** as a **``const``**
> - the last line of code in **``index.js``** is:
```javascript
module.exports = Calculate;
```

2. Inside your ``Calculate`` object, add a ``.sum()`` method that takes one argument.

Run the test suite again in the terminal. You should now get an ``AssertionError``.

Check your work.

3. Address the ``AssertionError`` in the terminal by making ``.sum()`` return the same value as the expected result you defined in your test.

Run the test suite. Your test should pass!

Check your work.

> Hint
> You can see your expected result by reviewing the test you wrote in **index_test.js**