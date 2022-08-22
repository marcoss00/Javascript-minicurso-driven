function aprovadoOuReprovado (nota1, nota2, nota3, faltas) {
    let media = (nota1 + nota2 + nota3) / 3;

    let aprovado = media >= 7;

    if(aprovado && faltas < 10){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}

function classificado (notaVestibular, notaEnem) {
    let aprovadoVestibular = notaVestibular > 8;
    let aprovadoEnem = notaEnem > 700;

    if(aprovadoEnem || aprovadoVestibular){
        return "Classificado";
    } else { //!aprovadoEnem || !aprovadoVestibular
        return "Desclassificado";
    }
}

console.log(aprovadoOuReprovado(7,7,7,11))
console.log(classificado(5,500))

//Exercicio1: Implemente a função ao lado, que recebe um preço e um booleano indicando se já está com desconto ou não. Se o preço for maior que 100 e não estiver com desconto, a função deve retornar Quero pechinchar. Caso contrário, deve retornar Negócio fechado
function pecoDesconto(preco, estaComDesconto) {
    // Escreva aqui seu código
    if(preco>100 && estaComDesconto!=true){
      return "Quero pechinchar";
    }else{
      return "Negócio fechado";
    }
  }

//Exercicio2: Implemente a função ao lado, que recebe uma nota e um número de faltas e retorna Aprovado caso a média seja maior ou igual a 7 e o número de faltas menor que 10, ou Reprovado caso contrário.
function aprovado(nota, faltas) {
    // Escreva aqui seu código
    if(nota>=7 && faltas<10){
        return "Aprovado";
    }
    else{
        return "Reprovado";
    }
  }

//Exercicio3: Implemente a função ao lado, que recebe 3 números e retorna Tem negativo! caso pelo menos 1 deles seja menor que 0. Caso contrário, ela deve retornar Tudo positivo!
function tudoPositivo(num1, num2, num3) {
    // Escreva aqui seu código
      if (num1 < 0 || num2 < 0 || num3 < 0){
        return "Tem negativo!";
    } else{
        return "Tudo positivo!"
    }
  }