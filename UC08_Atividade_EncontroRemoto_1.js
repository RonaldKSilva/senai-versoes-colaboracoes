// Sistema para Cadastro de Peças
// Aluno = Ronald Kelley da Silva

// Condição 01: Se a peça possuir um peso superior a 100 gramas, pode cadastrar;
// Condição 02: Dada a capacidade de cada caixa, caso a ista de peças seja superior a 10, imprimir mensagem informando não ter capacidade suficiente.
// Condição 03: Caso a peça tenha nome com quantidade inferior a 03 caracteres, informe uma mensagem de erro.

let listaDePecas = ["Pneu", "Roda", "Mola", "Amortecedor", "Coxim", "Semi-Eixo", "Junta Homocinética", "PI", "Barra Estabilizadora", "Radiador", "Carter", "Disco de Embreagem", "Bateria"];
let pesoDaPeca = [3000, 5000, 1500, 1700, 90, 900, 3500, 101, 2500, 6000, 750, 2800, 7500];
let nomeDaPeca;
let caixaDePeca = [];
let quantidadeNaCaixa = 0;

console.log("\n\n##### SISTEMA PARA CADASTRO DE PEÇAS #####");

for (let contador = 0; contador < listaDePecas.length; contador++) {

    if (quantidadeNaCaixa < 10) { // Teste da Condição 02

        console.log("\nPeça em análise:", listaDePecas[contador]);

        if (pesoDaPeca[contador] > 100) { // Teste da Condição 01

            console.log("Peso Ok");
            nomeDaPeca = listaDePecas[contador];

            if (nomeDaPeca.length >= 3) { // Teste da Condição 03

                console.log("Nome Ok");
                caixaDePeca.push(listaDePecas[contador]);
                quantidadeNaCaixa++;
                console.log("Itens incluidos na Caixa:", quantidadeNaCaixa);

            } else {

                console.log("Erro: Nome da Peça =", nomeDaPeca, " tem menos de 03 caracteres!");

            } // End IF Teste da Condição 03

        } else {

            console.log(listaDePecas[contador], "tem peso =", pesoDaPeca[contador], "gramas.");
            console.log("Erro: Somente pode cadastrar peça com peso superior a 100 gramas!");

        }; // End IF Teste da Condição 01
    } else {

        console.log("\nCadastro Encerrado: Caixa de Peças com capacidade completa!");
        break;

    }  // End IF Teste da Condição 02

} // END FOR Pesquisa de peças

console.log("\n***** RELATÓRIO DAS PEÇAS CADASTRADAS *****\n");

for (let capacidade = 0; capacidade < caixaDePeca.length; capacidade++) {

    console.log((capacidade + 1), " Nome da Peça =", caixaDePeca[capacidade]);

} // END FOR Relatório

console.log("\n<<<<<-------------------------------------------->>>>>\n\n");

// END Sistema para Cadastro de Peças