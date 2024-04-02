// na linha a baixo é uma variável chamada tempoFilme está sendo declarada e inicializada com o valor 60
var tempoFilme = 60;
// a linha a baixo mostra uma variável chamada inicioFilme está sendo declarada e inicializada com o valor 0
var inicioFilme = 0;

//var t = 0 é uma variável t e é inicializada com o valor 0, o t < tempoFilme é a condição de continuação do loop e o t++ é o quando depois de cada iteração do loop, o valor da variável t é adicionado mais 1
for (var t = 0; t < tempoFilme; t++) {
//na linha a baixo o código setTimeout() é usado para iniciar um temporizador
    setTimeout(function(){
//na linha de baixo a função console.clear() é usada para limpar a janela do console no navegador, apagando as mensagens anteriores
    console.clear();
//na linha de baixo, console.log() é usado para imprimir uma mensagem no console do navegador, inicioFilme é uma variável que representa o tempo de início filme, tempoFilme - inicioFilme calcula quanto tempo ainda falta até o final do filme, diminuindo o tempo de início do tempo total do filme
    console.log("Assistindo filme 60 segundos... Ainda faltam [" + (tempoFilme - inicioFilme) + "]segundos.");
//a linha a baixo é uma variável que representa o tempo desde o início do filme em segundos
    inicioFilme++;
//a linha de baixo é o tempo de espera em milissegundos onde t está sendo multiplicado por 1000
    },t*1000);
//fechamento
}