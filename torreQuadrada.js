let base = 20;
let torre = '';

for(let i = 1; i <= base; i++){ // Imprime a base 
    torre += '          ';// 
for(let j = 1; j <= base; j++){ // Dobra os andares da torre
 torre += '#'; 
}
torre += '\n';
}
 console.log(torre);

