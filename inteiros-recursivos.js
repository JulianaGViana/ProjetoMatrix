function validCheck(n){
  if(typeof n === "number" && n === Math.floor(n) && n >= 0){
    return true;
  }
}

function somarInteiros(n){
  function somar(n){
    return n===0 ? n : (n + somar(n-1));
  }
  if(validCheck(n)) return somar(n);
}


function somarImpares(n){
  function somarI(n){
      return n===0 ? n : (n+(n-1))+somarImpares(n-1);
  }
  if(validCheck(n)) return somarI(n);
}


function multiplicarInteiros(n){
  function multiplicar(n){
      return n===0 || n===1 ? n : (n * multiplicarInteiros(n-1));
  }
  if(validCheck(n)) return multiplicar(n);
}

/*
Exercícios de recursividade otimizados e com encapsulamento
Juliana Galante Viana
*/
