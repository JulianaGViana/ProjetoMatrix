function somarImpares(n){
  if(typeof n === "number" && n === Math.floor(n) && n>=0){
    var soma = 0;
    for(var i = 1; i <= n; i++){
      soma += i + (i-1);
    }
    return soma;
  }
}

//Exerc�cio 2 Otimizado - Somar �mpares
//Juliana Galante Viana