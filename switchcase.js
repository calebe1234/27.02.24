//const é usada para declarar uma variável constante e é chamada de sortear
const sortear = () => {
    //a linha de baixo declarada uma variável chamada nomes com os valores "Dora", "Duda", "Ana", "Sasah", "Gigi", "Gabriel", "Bibi", "Nemo", "Lolo", "Mari", "Jão", "Gui", "Miguel", "Nadyeska", "Vitória", "Calebe", "Felipe", "Laura", "Bernardo", "Jheni" dentro
        let nomes = ["Dora", "Duda", "Ana", "Sasah", "Gigi", "Gabriel", "Bibi", "Nemo", "Lolo", "Mari", "Jão", "Gui", "Miguel", "Nadyeska", "Vitória", "Calebe", "Felipe", "Laura", "Bernardo", "Jheni"];
    //na linha a baixo é uma declaração de variável chamada h1Nome com o ID "nome" e armazenando uma referência a esse elemento na variável h1Nome utilizando getElementById()
        let h1Nome = document.getElementById("nome");
    //na linha a baixo temos uma variável chamada achouNumero com o valor false
        let achouNumero = false;
    //na linha de baixo temos a declarção de uma variável chamada numeroSorteado
        let numeroSorteado;
    
    //na linha a baixo o código inicia o loop while e enquando achouNumero == false, o código do bloco do loop será executado repetidamente
        while (achouNumero == false) {
    //na linha de baixo é gerado um número aleatório entre 0 e 99 e armazendo na variável numeroSorteado, Math.random() pode retornar qualquer número entre 0 e e 0.99999...
            numeroSorteado = Math.floor(Math.random() * 100);
    //a linha de baixo verifica se o valor armazenado na variável numeroSorteado é menor que o nomes.length
            if (numeroSorteado < nomes.length) {
    //a linha a baixo atribui o valor true à variável achouNumero
                achouNumero = true;
            }
        }
    //na linhda de baixo switch é uma estrutura que permite avaliar uma expressão, que será o "numeroSorteado"
        switch (numeroSorteado) {
    //nas linhas de baixo break indica o fim do bloco de código, case 0 indica que este bloco de código será executado quando numeroSorteado for igual a 0 e assim sucessivamente.
            case 0:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 1:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 2:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 3:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 4:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 5:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 6:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 7:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 8:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 9:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 10:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 11:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 12:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 13:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 14:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 15:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 16:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 17:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 18:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 19:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
            case 20:
                h1Nome.innerText = nomes[numeroSorteado];
                break;
    
    //na linha a baixo default especifica o que fazer se numeroSorteado não corresponder a nenhum dos casos anteriores, caso não correspondera mensagem "Ops! Nome não consta na lista. aparecerá
            default:
                h1Nome.innerText = "Ops! Nome não consta na lista.";
                break;
        }
    //na linha a baixo é onde acontecerá o sorteio aparecendo a mensagem "O Número sorteado foi:" e em seguida aparecerá o número
        h1Nome.innerText += " O Número sorteado foi:" + numeroSorteado;
    //fechamento
    }