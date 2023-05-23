function quicksort(array) {

    if (array.length <= 1) {
      return array;
    } else {
       
      let arrayEsquerda = [];
      let arrayDireita = [];
      let novoArray = [];
     
      let pivot = array.pop();

      

      for (let i = 0; i < array.length; i++) {
        if (array[i] <= pivot) {
            arrayEsquerda.push(array[i]);
        } else {
            arrayDireita.push(array[i]);
        }
      }
     
      return novoArray.concat(
        quicksort(arrayEsquerda),
        pivot,
        quicksort(arrayDireita)
      );
    }
  }

module.exports = quicksort;