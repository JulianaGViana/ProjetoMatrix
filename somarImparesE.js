function validCheck(n){
  if(typeof n === "number" && n === Math.floor(n) && n>=0){
    return true;
  }
}

function somarImpares(n){
  if(validCheck(n)){
    var soma = 0;
    for(var i = 1; i <= n; i++){
      soma += i + (i-1);
    }
    return soma;
  }
}

//Exercício 2 otimizado com encapsulamento
//Juliana Galante Viana