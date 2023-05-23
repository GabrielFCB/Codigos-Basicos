const MDC = require('../algoritmos js/mdc');

test('O máximo divisor comum entre 24 e 36 deve ser 12', () => {
    expect(MDC([24,36])).toBe(12);
});

test('O máximo divisor comum entre 5 e 2 deve ser 1', () => {
    expect(MDC([5,2])).toBe(1);
})