function validCheck(n){
  if(typeof n === "number" && n === Math.floor(n) && n>=0){
    return true;
  }
}

function multiplicarInteiros(n){
  if(validCheck(n)){
    var mult = 1;
    if(n === 0) return 0;
      for(var i = 1; i <= n; i++){
        mult *= i;
      }
    return mult;
  }
}

//Exerc�cio 3 - Multiplicar Inteiros com encapsulamento
//Juliana Galante Viana