const num_primo = require('../algoritmos js/numeroprimo');

test('O número 6 não deve ser um número primo', () => {
    expect(num_primo(6)).toBe(false);
});

test('O número 23  deve ser um número primo', () => {
    expect(num_primo(23)).toBe(true);
});