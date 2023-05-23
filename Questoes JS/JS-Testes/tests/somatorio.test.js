const somatorio = require('../algoritmos js/somatorio');


test('O resultado da soma 10 + 80 + 45 deve ser 135', () => {
    expect(somatorio([10,80,45])).toBe(135);
});

test('O resultado da soma 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 deve ser 55', () => {
    expect(somatorio([1,2,3,4,5,6,7,8,9,10])).toBe(55);
});

