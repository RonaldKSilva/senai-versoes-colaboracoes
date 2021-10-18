// Sistema de Controle de Alunos de uma Escola
// Aluno: Ronald Kelley da Silva

// Para a quantidade de alunos presentes, percorrer do zero ao número total de alunos;
// Se o número for par, escreva PAR e o número correspondente;
// Se o número for ímpar, escreva ÍMPAR e o número correspondente;
// Se o número for zero, escreva ZERO e o número correspondente.

let listaDeAlunos = ["Abel", "Ana", "Beatriz", "Bento", "Carolina", "Celso", "Dalia", "Daniel", "Eva", "Evandro", "Fátima"];
let listaDeNumeros = [];
let quantidadeDeAlunos = 0;
let contador = 0;

for (let index = 0; index < listaDeAlunos.length; index++) {

    if (index == 0) {

        listaDeNumeros[index] = "ZERO ";

    } else if ((index % 2) == 1) {

        listaDeNumeros[index] = "ÍMPAR";

    } else {

        listaDeNumeros[index] = "PAR  ";

    } // END IF Teste de Número

    quantidadeDeAlunos++;

} // END FOR da Pesquisa na Lista de Alunos

console.log("\n\n***** RELATÓRIO DE ALUNOS E NÚMEROS SEQUENCIAIS *****\n")

while (contador < quantidadeDeAlunos) {

    if (contador < 10) { // Alinhar as colunas do relatório

        console.log("Número Sequencial = ", contador, " Tipo =", listaDeNumeros[contador], "  Nome =", listaDeAlunos[contador]);

    } else {

        console.log("Número Sequencial =", contador, " Tipo =", listaDeNumeros[contador], "  Nome =", listaDeAlunos[contador]);

    } // END IF Alinhamento das Colunas do Relatório

    contador++;

} // END WHILE quantidade de alunos

console.log("\nQuantidade Total de Alunos(as) =", quantidadeDeAlunos);
console.log("\n<<<<<------------------------------------------->>>>>\n\n");

// END Sistema de Controle de Alunos
