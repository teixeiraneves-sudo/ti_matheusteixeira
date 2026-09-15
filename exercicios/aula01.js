/// Aula 01 - Um botao que lembra
// Responda abaixo. Mantenha os marcadores e nao apague os enunciados.

// ex1
// Escreva a linha que cria uma variavel chamada visto guardando o valor falso.
//boolean visto = false;

// ex2
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5 true
//   "5" === 5false
//   "5" == 5true
//   true === false


// ex3
// O trecho abaixo roda sem dar erro, mas apoiar um cartao bagunca os outros.
// Diga por que, e escreva a correcao.
//
//   let apoiado = false;
//
//   document.querySelectorAll(".apoiar").forEach(function(botao) {
//     botao.addEventListener("click", function() {
//       // ...
//     });
//   });
//document.querySelectorAll(".apoiar").forEach(function(botao) {
  botao.addEventListener("click", function() {
    const estaApoiado = botao.classList.toggle("apoiado");

    if (estaApoiado) {
      // Lógica ao apoiar este cartão
    } else {
      // Lógica ao retirar o apoio deste cartão
    }
  });
});

// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = ______________;
//   }
//// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = ______________;
//   }



// ex5
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.
//apoiar

// ex6
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcionar direito desde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?
//O que mudar no JavaScript

Em vez de assumir que todo cartão começa desapoiado (false), verifique o estado inicial lendo o próprio HTML no momento do clique (ou ao inicializar):

JavaScript
document.querySelectorAll(".apoiar").forEach(function(botao) {
  // Verifica se o botão já começa apoiado pelo HTML
  let apoiado = botao.textContent.trim() === "Apoiado";

  botao.addEventListener("click", function() {
    if (apoiado) {
      botao.textContent = "Apoiar";
      apoiado = false;
      // decrementa a contagem
    } else {
      botao.textContent = "Apoiado";
      apoiado = true;
      // incrementa a contagem
    }
  });
});