# Red to Green II

Now that we have tests that cover more than one condition, it is time to program the actual behavior that we want our ``.initials`` method to execute.

Let’s think about the current state of ``Phrase.initials()``. We have one passing test and one failing test that raises the following error when you run the test suite:

    AssertionError: 'NM' == 'JMS'

This is not surprising, considering our current implementation always returns ‘NM.’

To write a more complete implementation, that could get us back into the green, we could write something like this:
```javascript
const Phrase = {
  initials(inputName) {
    // Create an empty array for initials
    const initials = [];
    // Create an array of strings 
    const words = inputName.split(" ");
    // Iterate through the array of strings and push the first character of each to array
    words.forEach((word) => {
      initials.push(word.charAt(0));
    });
    // Return the initials as one string
    return initials.join("");
  }
}
```

This implementation will successfully pass the tests we have written. Each additional test pushes us to build a complete implementation of the ``.initials`` method.

## Instructions

1. Now, in your **index.js** file, you are going to replace the line of code that returns 6, with the actual code to calculate the sum of the input array, so that your implementation code will pass both of the tests you have written.

Run your test suite to get the error message that will lead you towards writing the most concise production code to make your test pass.

Run your test suite again to make sure you are in the green.

Check your work.

> **Hint**
> Try the following:
> - Create a ``let`` variable named ``totalSum`` and set it equal to ``0``.
> - Below it, create a ``const`` variable named ``inputArrayLength`` and set it equal to ``inputArray.length``.
> - Write a ``for`` loop that iterates ``inputArrayLength`` number of times and adds the value of each element to ``totalSum``.
> - Return ``totalSum``.