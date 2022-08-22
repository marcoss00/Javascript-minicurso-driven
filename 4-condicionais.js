function aprovadoOuReprovado (nota1, nota2, nota3) {
    let media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;

    let aprovado = media >= 7;

    if(aprovado){
        return "Aprovado";
    }else if(media < 0){
        return "Não existe";
    }else{
        return "Reprovado";
    }
}

console.log(aprovadoOuReprovado(5,7,9));

//Exercicio1: Implemente a função ao lado, que retorna Maior de idade caso a idade passada seja maior que 17 ou Menor de idade caso contrário.
function maiorDeIdade(idade) {
    // Escreva aqui seu código
    if(idade>17){
      return "Maior de idade";
    }else{
      return "Menor de idade";
    }
  }

//Exercicio2: Implemente a função ao lado, que retorna Aprovado caso a nota passada seja maior ou igual a 7, Prova Final caso seja maior ou igual a 5 porém menor que 7 ou Reprovado caso contrário.
function situacao(nota) {
    // Escreva aqui seu código
    if(nota>=7){
        return "Aprovado";
    }else if(nota>=5){
        return "Prova Final";
    }else{
        return "Reprovado";
    }
  }

//Exercicio3: Implemente a função ao lado, que recebe 3 notas e retorna as strings sim ou não, indicando se a média simples entre as 3 notas (somar e dividir por 3) é maior ou igual a 7.
function aprovado(nota1, nota2, nota3) {
    // Escreva aqui seu código
    let media = (nota1 + nota2 + nota3) / 3;
  
    if(media >= 7){
        return "sim";
    }
    else{
        return "não"
    }
  }
