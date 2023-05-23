function num_primo(Num){

    let ehPrimo = true
    for (let i = 2; i < Num; i++) {
      if (Num % i == 0) {
          ehPrimo = false;
          break;
      }
     
    }
    return ehPrimo;
    }

    module.exports = num_primo;