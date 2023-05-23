const fibonacci = require('../algoritmos js/fibonacci');

test('Os primeiros 5 números da Sequência de Fibonacci devem ser 0, 1, 1, 2 e 3', () => {
  expect(fibonacci(5)).toMatchObject([0, 1, 1, 2, 3]);
});
test('Os primeiros 5 números da Sequência de Fibonacci devem ser 0, 1, 1, 2, 3, 5, 8, 13, 21', () => {
    expect(fibonacci(9)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });