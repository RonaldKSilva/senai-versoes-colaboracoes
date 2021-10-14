// CADASTRO DE EVENTOS E PARTICIPANTES : ATÉ 100 PESSOAS MAIORES DE 18 ANOS

// Aluno = Ronald Kelley da Silva.

// Devido operação por linha de comando, os dados de entrada e opções do usuário serão atribuídos no código //
// Nesta fase do aprendizado, apenas testamos a lógica do procedimento e a sintaxe do código                //

let continuar = 1;

while (continuar > 0) { // Executar a entrada de dados até a opção do usuário -> continuar: SIM (1) ou NÃO (0).

    let nomeDoEvento = "SENAI - Full Stack - Turma 02";
    let dataDoEvento = "30/10/2021";
    let lotacaoDoEvento = 100;
    let idadeMinimaNoEvento = 18;

    if (dataDoEvento >= "13/10/2021") { // Teste de Coerência da Data Informada para o Evento

        let listaDeInteressados = ["Helena", "Mário", "José", "Maria", "João", "Paulo", "Mateus", "Madalena", "Joana", "Ester"];
        let listaDeIdadeDoInteressado = ["21", "13", "55", "25", "18", "35", "29", "44", "30", "27"];
        let quantidadeDeParticipantes = 0;
        let date = Date();

        console.log("\n\n##############################################################");
        console.log(date);
        console.log("\nNome do Evento =", nomeDoEvento);
        console.log("Data do Evento =", dataDoEvento);
        console.log("______________________________________________________________\n");

        for (let localizador = 0; localizador < listaDeInteressados.length; localizador++) { // O loop foi usado devido a entrada de dados ser pela lista no código

            if (quantidadeDeParticipantes < lotacaoDoEvento) { // Teste da Lotação no Evento

                if (listaDeIdadeDoInteressado[localizador] >= idadeMinimaNoEvento) { // Teste da Idade Mínima do Interessado

                    quantidadeDeParticipantes++;
                    console.log(quantidadeDeParticipantes, "Nome =", listaDeInteressados[localizador], "--> Idade =", listaDeIdadeDoInteressado[localizador], "anos");

                } else {

                    console.log("  Nome =", listaDeInteressados[localizador], "--> Não é possível cadastrar interessado Menor de Idade (", listaDeIdadeDoInteressado[localizador], "anos)");

                } // END IF Teste de Idade

                ;

                console.log("Continuar Cadastro de Interessados no Evento ?"); // Opção hipotética para o Usuário escolher
                // Atribuímos que nesta condição o usuário deve prosseguir -> continuar = 1

                if (continuar > 0) {
                    console.log("SIM\n");
                } else {
                    console.log("Não\n");
                    break;
                } // End IF Opção de Continuar após cadastro de interessado

            } else {

                console.log("\nEvento com Lotação Esgotada =", quantidadeDeParticipantes, "participantes.\n");

            } // End IF Teste de Quantidade de Participantes

        } // END FOR Entrada de Dados

        console.log("\nTotal de Participantes Cadastrados =", quantidadeDeParticipantes);
        console.log("\nFim do Cadastro de Eventos e Participantes.");
        console.log("\n<<<<< ------------------------------- >>>>>\n\n");

        continuar = 0; // Encerrar o Cadastro de Eventos

    } else {

        console.log("Não é possível cadastrar este evento: Data Inválida!");
        console.log("Continuar Cadastro ?"); // Opção hipotética para o Usuário escolher
        // Atribuímos que nesta condição o usuário deve prosseguir -> continuar = 1;

        if (continuar > 0) {
            console.log("SIM\n");
        } else {
            console.log("Não\n");
            break;
        } // End IF Opção de Continuar após data inválida

    } // End IF Teste da Data

} // END While Continuar

// shift+Alt+F= Format Code