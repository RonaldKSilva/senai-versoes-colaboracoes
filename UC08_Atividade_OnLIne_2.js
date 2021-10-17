// CADASTRO DE EVENTOS E PARTICIPANTES : ATÉ 100 PESSOAS MAIORES DE 18 ANOS

// Aluno = Ronald Kelley da Silva.

// Devido operação por linha de comando, os dados de entrada e opções do usuário serão atribuídos no código //
// Nesta fase do aprendizado, apenas testamos a lógica do procedimento e a sintaxe do código                //

let continuar = 1;

while (continuar > 0) { // Executar a entrada de dados até a opção do usuário -> continuar: SIM (1) ou NÃO (0).

    let tituloDoEvento = "SENAI - Full Stack - Turma 02";
    let dataDoEvento = "30/11/2021";
    let lotacaoDePalestrantes = 10;
    let lotacaoDeParticipantes = 100;
    let idadeMinimaNoEvento = 18;
    let listaDePalestrantesCadastrados = [];
    let listaDeParticipantesCadastrados = [];
    let listaDeIdadeDosParticipantesCadastrados = [];

    if (dataDoEvento >= "18/10/2021") { // Teste de Coerência da Data Informada para o Evento

        let listaDeInteressados = ["Helena", "Mário", "José", "Maria", "João", "Paulo", "Mateus", "Madalena", "Joana", "Ester"];
        let listaDeIdadeDoInteressado = ["21", "17", "55", "25", "18", "35", "29", "44", "30", "27"];
        let listaDePalestrantes = ["BigOne", "MasterTech", "AllonMind"];
        let quantidadeDePalestrantes = 0;
        let quantidadeDeParticipantes = 0;
        let date = Date();

        // Inicia o cadastro do evento

        console.log("\n\n\n[[[[[ SISTEMA PARA CADASTRO DE EVENTOS ]]]]]");
        console.log("\nInformar o Título do Evento:\n");
        console.log(tituloDoEvento);
        console.log("\nInformar a Data do Evento:\n");
        console.log(dataDoEvento);

        // Inicia o cadastro de Palestrantes

        for (let localizador = 0; localizador < listaDePalestrantes.length; localizador++) { // O loop foi usado devido a entrada de dados ser pela lista no código

            if (quantidadeDePalestrantes < lotacaoDePalestrantes) { // Teste da Lotação de Palestrantes no Evento

                console.log("\nInformar nome do palestrante:\n")
                console.log("Nome =", listaDePalestrantes[localizador]);
                listaDePalestrantesCadastrados.push(listaDePalestrantes[localizador]);
                quantidadeDePalestrantes++;

            } else {

                console.log("\nEvento com Lotação de Palestrantes Esgotada =", quantidadeDePalestrantes, "palestrantes.\n");

            } // End IF Palestrantes

        } // End For Palestrantes

        // Inicia o cadastro de Participantes

        for (let localizador = 0; localizador < listaDeInteressados.length; localizador++) { // O loop foi usado devido a entrada de dados ser pela lista no código

            if (quantidadeDeParticipantes < lotacaoDeParticipantes) { // Teste da Lotação de Participantes no Evento

                console.log("\nInformar Nome e Idade do Interesssado:\n");
                console.log("Nome =", listaDeInteressados[localizador]);
                console.log("Idade =", listaDeIdadeDoInteressado[localizador]);

                if (listaDeIdadeDoInteressado[localizador] >= idadeMinimaNoEvento) { // Teste da Idade Mínima do Interessado

                    listaDeParticipantesCadastrados.push(listaDeInteressados[localizador]);
                    listaDeIdadeDosParticipantesCadastrados.push(listaDeIdadeDoInteressado[localizador]);
                    quantidadeDeParticipantes++;

                } else {

                    console.log(">>>>> Não é possível cadastrar interessado Menor de Idade !\n");

                } // END IF Teste de Idade

                console.log("Continuar Cadastro de Interessados no Evento ?"); // Opção hipotética para o Usuário escolher
                // Atribuímos que nesta condição o usuário deve prosseguir -> continuar = 1

                if (continuar > 0) {  // Opção hipotética de continuar 
                    if ((localizador + 1) == listaDeInteressados.length) {
                        console.log("Não"); // Quando alcançar o final da lista de entrada
                    } else {
                        console.log("Sim"); // Enquando não alcançar o final da lista de entrada 
                    }
                } else {
                    console.log("Não");
                    break;
                } // End IF Opção de Continuar após cadastro de interessado

            } else {

                console.log("\nEvento com Lotação de Participantes Esgotada =", quantidadeDeParticipantes, "participantes.\n");

            } // End IF Teste de Quantidade de Participantes

        } // END FOR Entrada de Dados

        console.log("\n\n##############################################################");
        console.log(date);
        console.log("\nNome do Evento =", tituloDoEvento);
        console.log("Data do Evento =", dataDoEvento);
        console.log("______________________________________________________________\n");
        console.log("*******         RELATÓRIO DO CADASTRO NO EVENTO        *******");

        console.log("\nTotal de Palestrantes Cadastrados =", quantidadeDePalestrantes, "\n");
        for (contador = 0; contador < quantidadeDePalestrantes; contador++) {
            console.log((contador + 1), "Nome =", listaDePalestrantesCadastrados[contador]);
        }

        console.log("\nTotal de Participantes Cadastrados =", quantidadeDeParticipantes, "\n");
        for (contador = 0; contador < quantidadeDeParticipantes; contador++) {
            console.log((contador + 1), "Nome =", listaDeParticipantesCadastrados[contador], "--> Idade =", listaDeIdadeDosParticipantesCadastrados[contador], "anos");
        }

        console.log("\nFim do Cadastro de Eventos e Participantes.");
        console.log("\n<<<<< ------------------------------- >>>>>\n\n");

        continuar = 0; // Encerrar o Cadastro de Eventos

    } else {

        console.log("Não é possível cadastrar este evento: Data Inválida!");
        console.log("Continuar Cadastro ?"); // Opção hipotética para o Usuário escolher
        // Atribuímos que nesta condição o usuário deve prosseguir -> continuar = 1;

        if (continuar > 0) { // // Opção hipotética de continuar 
            console.log("SIM\n");
        } else {
            console.log("Não\n");
            break;
        } // End IF Opção de Continuar após data inválida

    } // End IF Teste da Data

} // END While Continuar

// shift+Alt+F= Format Code