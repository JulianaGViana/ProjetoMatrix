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

/*
Função otimizada e com encapsulamento para somar inteiros ímpares
Juliana Galante Viana
*/
