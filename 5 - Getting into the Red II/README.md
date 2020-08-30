# Getting into the Red II

Congratulations, you have made it through your first red-green-refactor cycle using TDD! The next step is to repeat this cycle to build a more complete implementation of the ``.initials`` method.

Once you have a baseline test for your feature, you can start to write additional test cases that force you to write better implementation code.

Let’s consider the test suite for our ``Phrase.initials`` method. We have one test that checks if ``Phrase.initial("Nelson Mandela")`` returns ``"NM"``.
```javascript
describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      const inputName = 'Nelson Mandela';
      const expectedInitials = 'NM';
      const result = Phrase.initials(inputName);
      assert.equal(result, expectedInitials);
    });
  });
});
```

Let’s write another test that pushes us to implement a ``Phrase.initials()`` method that returns the first letter of each word for “Nelson Mandela” and a different name.

To do this, we will add another it block to our code, and inside the callback function we will again follow the setup, exercise, verification phases for writing tests. This time we will write a test based on the circumstance that the string passed to ``.initials()`` has three names: ``'Juan Manuel Santos'``.

Here is what a second test for ``.initials()`` would look like:
```javascript
describe('Phrase', () => {
  describe('.initials', () => {

    . . .

    it('returns the initials of a name', () => {
      const nameInput = 'Juan Manuel Santos';
      const expectedInitials = 'JMS';

      const result = Phrase.initials(nameInput);

      assert.equal(result, expectedInitials);
    });
  });
});
```

Although the new ``it`` block is similar to the existing example, the two together force you to implement a method that will return initials that pass both tests.

The idea of TDD is to continue building tests and going through the *red-green-refactor* process until you feel confident that your implementation code performs as expected.

## Instructions

1. Add another test to your ``describe`` block that checks if the ``Calculate.sum([4, 5, 6, 7])`` returns ``22``.

Create a new it block with the string: ``'returns the sum of a four-item list'``

Inside the ``it`` block, add setup, exercise, and verify phases.

You should see the following error message when you run your test suite.

    AssertionError: 6 == 22

>Hint
>Use the following in your setup, exercise, and verify phases:
> - **Setup** — set a ``const`` variable called ``expectedResult`` to ``22``. Set a const variable named ``inputArray`` to ``[4, 5, 6, 7]``.
> - **Exercise** — set a ``const`` variable named ``result`` to the result of passing ``inputArray`` to ``Calculate.sum()``.
> - **Verify** — assert that the two arguments ``result`` and ``expectedResult`` are equal.