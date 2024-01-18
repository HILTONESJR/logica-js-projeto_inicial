alert("Bem vindo ao jogo do numero secreto!"); // Exibe uma mensagem de boas vindas a pagina!
let numeroSecreto = parseInt(Math.random() * 100 + 1) // Declara uma varariavel chamada numero secreto e atribui a ela um valor de 0 a 100 aleatoriamente.
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
  chute = prompt("Escolha um numero de 1 a 100");
  // se chute for igual ao número secreto
if (chute == numeroSecreto) {
    break;
} else {
  if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
  } else {
    alert(`O número secreto é maior que ${chute}`);
  }
  tentativas++;
}
}
let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
