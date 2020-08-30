# Refactor II

Congrats, you’re back in the green!

Which means the next step is to refactor the code so that your tests are fast, complete, reliable, isolated, maintainable, and expressive. Also, you want to make sure your implementation code is descriptive and efficient.

Sometimes refactoring can take place in test and implementation code, either one, or neither. The purpose of the refactor phase is to think critically about the code you have and decide whether there is anything unnecessary, redundant, or that could be done more clearly or efficiently.

## Instructions

1. Refactor the code in your **index.js** file by replacing the current implementation code inside ``Calculate.sum()`` with a function that uses the built-in JavaScript method ``.reduce()`` to accumulate the total value of an array of numbers.

You can read more about ``.reduce()`` in the [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a).

Run your test to make sure you are still in the green.

> **Hint**
> You can use the **``.reduce``** method to accumulate each element in an array— reduced to one value.
```javascript
return myArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
```