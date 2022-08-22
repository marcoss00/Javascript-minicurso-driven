function umbridge() {
    let contador = 0;
    let frase = "";

    while(contador < 100) {
        contador++;
        frase += "Não devo contar mentiras ";
    }
    return frase
}

function loop() {
    for(let contador = 0; contador < 100; contador++) {
    }
}

console.log(umbridge())

//Exercicio1: Utilizando loops, implemente a função ao lado que recebe um texto e retorna uma string com o texto repetido 10 vezes.
function vezes10(texto) {
    // Escreva aqui seu código
    let s = "";
    for(let i =0; i<10; i++){
      s = s + texto;
    }
    return s;
  }

//Exercicio2: Utilizando loops, implemente a função ao lado que recebe um texto e um número de repetições. Ela deve retornar uma string com o texto repetido n vezes, sendo n o número de repetições.
function multiplica(texto, repeticoes) {
    // Escreva aqui seu código
    let s = "";
      for (let i = 0; i < repeticoes; i++) {
          s = s + texto;
      }
      return s;
  }
