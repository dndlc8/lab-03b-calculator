import {add, sub, multi, div} from './equations.js'


const test = QUnit.test;

test('should add the two input numbers', function(expect) {
    //Arrange
    const numberOne = 8;
    const numberTwo = 2;
    const expected = 10;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should add the two input numbers', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const numberOne = 12;
    const numberTwo = 4;
    const expected = 16;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should add the two input numbers', function(expect) {
    //Arrange
    const numberOne = 5;
    const numberTwo = 7;
    const expected = 12;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should subtract the two input numbers', function(expect) {
    //Arrange
    const numberOne = 5;
    const numberTwo = -7;
    const expected = -2;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = sub(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should subtract the two input numbers', function(expect) {
    //Arrange
    const numberOne = 12;
    const numberTwo = 4;
    const expected = 8;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = sub(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should subtract the two input numbers', function(expect) {
    //Arrange
    const numberOne = 20;
    const numberTwo = 6;
    const expected = 14;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = sub(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should multiple the two input numbers', function(expect) {
    //Arrange
    const numberOne = 2;
    const numberTwo = 4;
    const expected = 8;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = multi(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should multiple the two input numbers', function(expect) {
    //Arrange
    const numberOne = 5;
    const numberTwo = 4;
    const expected = 20;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = multi(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should multiple the two input numbers', function(expect) {
    //Arrange
    const numberOne = 3;
    const numberTwo = 9;
    const expected = 27;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = multi(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should div the two input numbers', function(expect) {
    //Arrange
    const numberOne = 8;
    const numberTwo = 2;
    const expected = 4;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = div(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should div the two input numbers', function(expect) {
    //Arrange
    const numberOne = 10;
    const numberTwo = 5;
    const expected = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = div(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});

test('should div the two input numbers', function(expect) {
    //Arrange
    const numberOne = 35;
    const numberTwo = 5;
    const expected = 6;
    //Act 
    // Call the function you're testing and set the result to a const
    const sum = div(numberOne, numberTwo);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal();
});