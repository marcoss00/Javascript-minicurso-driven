function apresentar () {
    let nome = "Marcos";

    return nome;
}

console.log("Olá " + apresentar())

function calcularMedia (nota1, nota2, nota3) {
    let media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;

    let resultado = "Sua média foi: " + media;
    
    return resultado;
}

console.log(calcularMedia(5, 5, 10))

//Exercicio1: Implemente a função ao lado, que retorna a string "Hello World".
function helloWorld() {
    // Escreva aqui seu código
    let resultado = "Hello World";
  
    return resultado;
  }

//Exercicio2: Implemente a função ao lado, que retorna a concatenação dos dois parâmetros que ela recebe.
function concatenar(texto1, texto2) {
    // Escreva aqui seu código
    let resultado = texto1 + texto2;
  
    return resultado;
  }

//Exercicio3: Implemente a função ao lado, que soma dois números e retorna o texto A soma deu: x, sendo x o resultado da soma.
function somar(num1, num2) {
    // Escreva aqui seu código
    let soma = num1 + num2;
    let resultado = "A soma deu: " + soma;
  
    return resultado;
  }