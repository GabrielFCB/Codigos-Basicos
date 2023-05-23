const quicksort = require('../algoritmos js/quicksort');



test('O Array [8, 4, 3, 9, 2] deve ser ordenado [2, 3, 4, 8, 9]', () => {
    expect(quicksort([8, 4, 3, 9, 2])).toMatchObject([2, 3, 4, 8, 9]);
})

test('O Array [40, 7, 15, 70, 10] deve ser ordenado [7, 10, 15, 40, 70]', () => {
    expect(quicksort([40, 7, 15, 70, 10])).toMatchObject([7, 10, 15, 40, 70]);
})

