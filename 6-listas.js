console.log('Trabalhando com listas');

const listaDeDestinos = new Array (
       
    'Salvador','São Paulo','Rio de Janeiro',
);

listaDeDestinos.push('Curitiba',
'Paraiba',
'Ceará',
'Fortaleza'); // push , para incluir nomes na lista já existente.

console.log ("Destinos possíveis:");

console.log (listaDeDestinos);

listaDeDestinos.splice(1,5);// Excluir uma cidade.

console.log (listaDeDestinos);

//console.log (listaDeDestinos[5]);// Destaca cidade desejada


