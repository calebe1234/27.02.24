//na linha a baixo uma variável chamada variavel1 está sendo declarada e está sendo inicializada com o valor "valor somente leitura"
const variavel1 = "valor somente leitura";
//na linha de baixo temos uma declaração de variável chamada variavel2 com o valor "valor editável"
var variavel2 = "valor editável";

//nas linhas de baixo há um bloco try que tenta atribuir um novo valor à constante variavel1 e se ocorrer um erro durante a execução do bloco try, o controle será transferido para o bloco catch, assim, como variavel1 é uma constante, a tentativa de reatribuir um novo valor a ela resultará em um TypeError
try {
    variavel1 = "valor não permitido";
    console.log("A variavel1 foi alterada para: ", variavel1)
} catch (e) {
    console.error("Ops! ocorreu o erro: " , e);
}
//nas linhas de baixo, esse código funcionará sem erros, mas se variavel2 ainda não foi declarada, ocorrerá um erro e se variavel2 for declarada, a mensagem "A variavel2 foi alterada para: valor permitido" será exibida
try {
    variavel2 = "valor permitido";
    console.log("A variavel2 foi alterada para: ", variavel2)
} catch (e) {
    console.error("Ops! ocorreu o erro: " , e);
//fechamento
}