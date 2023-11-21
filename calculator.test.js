const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 50000;
    actual = sum(20000,30000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2,-3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5,0);
    expect(actual).toBe(expected);
    
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 1;
    actual = subtract(-2,-3);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 20;
    actual = multiply(4,5);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 20;
    actual = multiply(-4,-5);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 15;
    actual = divide(30,2);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 15;
    actual = divide(-30,-2);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can modulus two small positive numbers', () => {
    expected = 3;
    actual = modulus(18,5);
    expect(actual).toBe(expected);
  });

  test('can modulus two negative numbers', () => {
    expected = -2;
    actual = modulus(-14,-6);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can check small even number', () => {
    expected = true;
    actual = even(8);
    expect(actual).toBe(expected);
  });

  test('can check small odd number', () => {
    expected = false;
    actual = even(9);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('can check small odd number', () => {
    expected = true;
    actual = odd(11);
    expect(actual).toBe(expected);
  });

  test('can check small even number', () => {
    expected = false;
    actual = odd(6);
    expect(actual).toBe(expected);
  });

});
