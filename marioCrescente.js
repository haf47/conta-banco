let base = 30; // Defina o valor de base para o número de linhas que você deseja na torre
let torre = ''; // Criando uma variável chamada torre,e atribuindo a ela uma string vazia,que pode ser modificada.
for(let i = 1; i <= base; i++){ // Esta linha está iniciando um loop for. A variável i é inicializada com o valor 1. A condição do loop é i <= base, o que significa que o loop continuará enquanto o valor de i for menor ou igual ao valor de base. A cada iteração do loop, i é incrementado em 1 (i++).
    torre += '    '; // Afasta a torre da margem
    for(let j = 1; j <= i; j++){ // Esta é a abertura de um segundo loop for dentro do primeiro. Este é chamado de loop aninhado. A variável j é inicializada com o valor 1. A condição do loop é j <= i, o que significa que este loop interno continuará enquanto o valor de j for menor ou igual ao valor atual de i. A cada iteração do loop, j é incrementado em 1 (j++).
        torre += '#'; // Esta linha está dentro do loop interno. Ela adiciona o caractere # à string torre. Isso acontecerá uma vez para cada iteração do loop interno.
    }
    torre += '\n';// Esta linha está dentro do loop externo, mas fora do loop interno. Ela adiciona um caractere de nova linha (\n) à string torre. Isso efetivamente inicia uma nova “linha” da torre.
}
console.log(torre); // Imprime a torre no console

