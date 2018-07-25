function somarImpares(n){
  if(typeof n === "number" && n === Math.floor(n) && n>=0){
    var soma = 0;
    for(var i = 1; i <= n; i++){
      soma += i + (i-1);
    }
    return soma;
  }
}

/*
Exercício 2: Função para somar ímpares otimizada
Juliana Galante Viana
*/
