alert('Bem vindo ao jogo do numero secreto!'); // Exibe uma mensagem de boas vindas a pagina!
let numeroSecreto = 29;  // Declara uma varariavel chamada numero secreto e atribui a ela um valor"29"
let chute = prompt('Escolha um Numero de 1 e 30'); //Solicita a interação do usuario a escolha de um numero e armazena na variavel "chute"

if (chute == numeroSecreto){ // IF faz uma comparação das variaveis  "se" chute for = a numeroSecreto ele executa a string de acerto dentro do console.log
    console.log('Voce descobriu o numero secreto ' + numeroSecreto)
}

