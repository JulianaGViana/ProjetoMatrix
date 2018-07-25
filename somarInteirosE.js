function validCheck(n){
  if(typeof n === "number" && n === Math.floor(n) && n>=0){
    return true;
  }
}

function somarInteiros(n){
  if(validCheck(n)){
    var soma = 0;
    for(var i = 0; i <= n; i++){
      soma += i;
    }
    return soma;
  }
}

/*
Exercício 1: Otimizado com encapsulamento
Juliana Galante Viana
*/
