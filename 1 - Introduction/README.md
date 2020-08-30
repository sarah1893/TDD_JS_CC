# Introduction

Test-driven development (TDD) is a programming technique where you write test code before implementation code. Test code is written to define the desired behavior of your program. The test output provides descriptive error messages that inform the implementation of your program.

## The Red-Green-Refactor Cycle

One of the driving forces of TDD is the *red-green-refactor* cycle. “Red” and “green” correspond to the color of the text that our test framework produces in the terminal while running the tests in our suite. Red signifies failing tests and green corresponds to passing tests.

Use this red, green, refactor diagram to help you as you read the steps below:
<img src="red-green-refactor-tdd.png"
     style="float: left; margin-right: 10px;" />

- Red — Write tests that describe the intended behavior of implementation code, and then compare developer expectations with the actual results of implementation code. The tests should always fail at first because the implementation code for the desired behavior will be written in response to the failing test.
- Green — Write just enough implementation code to make the test pass. The tests return *green* because the implementation code executes the intended behavior described by the test in the *red* phase.
- Refactor — Clean up and optimize code following the [characteristics of a good test](good_test.md). Refactoring involves actively considering test and implementation code and making revisions to the code base. The tests are passing and should continue to pass throughout this phase of the cycle.

In this lesson, you will use a test-driven development approach to program a method that calculates the sum of an array of numbers.

## Instructions

1. Locate the **index_test.js** file in your editor.

This code has an error in it! You can identify the error by running the test suite and reviewing the output.

Use ``npm test`` in the terminal to run the test suite.

Based on the feedback in your terminal, fix the code, then run your test again. Check your work once it passes.