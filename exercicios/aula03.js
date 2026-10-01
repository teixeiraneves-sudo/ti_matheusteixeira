// ex1
// Se eu apagar a linha <link rel="stylesheet" href="styles.css"> do index.html,
// o arquivo styles.css continuará na pasta, mas não será carregado pelo navegador.
// A página será exibida apenas com o HTML, sem os estilos definidos no CSS.
// Portanto, cores, tamanhos, espaçamentos, bordas e demais formatações desaparecerão,
// e o navegador mostrará a página com o estilo padrão do HTML.

// ex2
// Não necessariamente. Se o <script> estiver no fim do <body>, o HTML anterior
// já terá sido carregado e o JavaScript poderá encontrar os elementos da página,
// mesmo sem o atributo defer.
// A diferença é que, no <head> com defer, o navegador baixa o JavaScript sem
// bloquear o carregamento do HTML e só executa o script depois que o HTML for
// processado. Já no fim do <body>, o script é encontrado somente depois que os
// elementos anteriores já foram carregados. Os dois casos podem funcionar,
// mas o defer permite manter o script no <head> sem bloquear a construção da página.

// ex3
// :root {
//   --cor-urgente: #fcfbfb;
// }
//
// .cartao-urgente {
//   border: 3px solid var(--cor-urgente);
// }
//
// .titulo-urgente {
//   color: var(--cor-urgente);
// }

// ex4
// Separei o index.html em index.html, styles.css e script.js.
// O primeiro problema encontrado foi conferir se os caminhos dos arquivos estavam
// corretos. Depois de corrigir/conferir os caminhos, verifiquei no navegador se o
// Radar continuava funcionando, incluindo a aparência da página, os estilos CSS
// e as funcionalidades do JavaScript.
// Para garantir que a separação estava correta, também conferi se o index.html
// carregava o styles.css com <link rel="stylesheet" href="styles.css"> e o
// script.js com <script src="script.js" defer></script>.

// ex5
// As quatro variáveis escolhidas foram:
//
// --cor-primaria: representa a cor principal usada no Radar, facilitando a alteração
// da identidade visual do projeto.
//
// --cor-destaque: representa as cores usadas para destacar informações importantes,
// evitando repetir o mesmo valor de cor em vários lugares.
//
// --espacamento-padrao: representa um espaçamento usado com frequência entre os
// elementos, deixando o layout mais consistente.
//
// --borda-padrao: representa o tamanho/estilo de borda utilizado em vários elementos,
// permitindo alterar as bordas do projeto em um único lugar.
//
// Essas variáveis foram criadas em :root e os valores repetidos correspondentes
// no CSS foram substituídos por var(--nome-da-variavel).