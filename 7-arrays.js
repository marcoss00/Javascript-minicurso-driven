function array() {
    let alunos = ["Ana", "Bia", "Carlos"];
    let texto = "";

    for(let i = 0; i<alunos.length; i++){
        texto = texto + alunos[i];
    }

    return texto;
}

console.log(array())

function somarTods(lista) {
    let soma = 0;

    for(let i = 0; i<lista.length; i++){
        soma = soma + lista[i];
    }

    return soma;
}

console.log(somarTods([10, 20 ,30]))

//Exercicio1: Implemente a função ao lado que recebe 3 nomes e retorna esses nomes em uma array.
function listar(nome1, nome2, nome3) {
    // Escreva aqui seu código
  
    return [nome1, nome2, nome3];
  }

//Exercicio2: Implemente a função ao lado que recebe uma array e retorna a soma de todos os seus números multiplicados por 2.
function dobraASoma(lista) {
    // Escreva aqui seu código
      let soma = 0;
  
      for (let i = 0; i < lista.length; i++) {
          soma = soma + lista[i];
      }
  
      return soma * 2;
  }

//Exercicio3: Implemente a função ao lado que recebe uma array de números positivos diferentes entre si e retorna o índice do maior número encontrado.
//Exemplo: se a array for [10,50,30], o maior número é o 50, então a função deve retornar o índice 1.
//Lembre-se que os índices das arrays começam em 0.


//Exercicio4: Implemente a função ao lado que vai retornar qual o dia da semana vai ser a partir de um dia passado como string e de uma quantidade de dias a ser avançado. Para isso, a função deve receber uma string e um número como parâmetros e retornar uma string.
//Obs: os dias devem ser retornados no seguinte formato
//"Segunda-feira, Terca-feira, Quarta-feira, Quinta-feira, Sexta-feira, Sabado, Domingo"
//Se for passado “Segunda-feira” e 5: a função deve retornar “Sabado”, pois avançar 5 dias a partir da segunda-feira cai no sábado.
//Se for passado “Segunda-feira” e 8, a função deve retornar “Terca-feira”, pois avançar 8 dias a partir da segunda-feira cai na terça-feira da semana seguinte.

//Exercicio5: Implemente a função ao lado que recebe 3 números como parâmetros. Os dois primeiros delimitam um intervalo. A função deve retornar um array contendo os menores números pares dentro do intervalo. A quantidade de elementos nesse array deve ser igual ao 3o parâmetro passado Obs: O 1o parâmetro sempre será menor que o 2o parâmetro No intervalo passado sempre haverá números pares suficientes para a quantidade passada A função deve retornar os menores números pares possíveis dentro do intervalo Exemplo: se for passado os valores “2”, “10”, “3”, a função deve retornar o array [4,6,8] Exemplo: se for passado os valores “2”, “10”, “2”, a função deve retornar o array [4,6] Dica: para realizar essa questão você vai precisar de uma ferramenta nova. Talvez seja útil construir um array vazio. Você pode fazer isso com o seguinte comando: const arr =[]//constrói um array vazio chamado “arr” Depois disso, você, talvez, queira encher esse novo array com elementos. Você pode fazer isso escrevendo “.push” logo após o nome do array. Então, para inserir o número “3” no array que acabamos de criar fazemos: arr.push(3)//Insere o número 3 dentro do array “arr”
