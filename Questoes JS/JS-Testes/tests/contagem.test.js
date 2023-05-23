const contagem = require('../algoritmos js/contagem');

test('A contagem dos números até 10 tem que ser y', () => { 
    expect(contagem(8.5)).toBe(8);
 });

 test('A contagem dos números até 1 deve ser 1', () => {
    expect(contagem(1)).toBe(1);
 });