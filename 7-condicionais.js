console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array (
       
    'Salvador','São Paulo','Rio de Janeiro',
);

const idadeComprador = 15;
const estaAcopanhada = true;

console.log ("Destinos possíveis:");

console.log (listaDeDestinos);

if (idadeComprador >= 18) {

    console.log("comprador maior de idade, venda liberada.");
    listaDeDestinos.splice (1.0);
    
}else {
    console.log ("Não é maior de idade, não posso vender.");
}

console.log(idadeComprador);

