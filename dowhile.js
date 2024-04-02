//na linha de baixo temos uma declaração de variável, chamada matriz e cada elemento é uma string representando um vetor
var matriz = ["vetor1", "vetor2", "vetor3", "vetor4", "vetor5"];
//na linha a baixo é uma declarção de variável posicao que serve para rastrear a matriz e está com o valor 0
var posicao = 0;

//na linha de baixo while é um loop enquanto a posicao < matriz.length for verdadeira
while (posicao < matriz.length) {
// posicao é uma variável que está dentro de um loop. O código a baixo irá imprimir cada elemento da matriz em sequência, um de cada vez, até que o valor da posicao seja igual ou menor que o matriz.length
    console.log(matriz[posicao]);
//na linha de baixo a funçaõ acrescenta o valor da variável posicao em 1 a cada iteração do loop.
    posicao++;
//fechamento
}