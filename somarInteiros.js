function somarInteiros(n){
  if(typeof n === "number" && n === Math.floor(n) && n>=0){
    var soma = 0;
    for(var i = 0; i <= n; i++){
      soma += i;
    }
    return soma;
  }
}

//Exercício 1 Otimizado - Somar Inteiros
//Juliana Galante Viana