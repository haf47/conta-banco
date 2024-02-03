console.log ("Terminais disponíveis:");

const idadeMaxima = 18;

const terminaisMaritimos = new Array ('Salvador', 'Porto Seguro', 'Rio de janeiro', 'Santos');

terminaisMaritimos.push('Recife', 'Pernambuco', 'João Pessoa', 'Maceió',);

console.log ("Novos teminais");

console.log (terminaisMaritimos);

if (idadeMaxima >=18) {
    console.log ("Tudo certo pode embarcar");
} else { 
    console.log ("Menor não pode embarcar");
}
console.log (idadeMaxima);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

console.log ("Livros que devemos ler quando possóivel");

const literaturaIndicada = ("Bíblia Sagrada");

const Indicações = new Array ('Gêneses', 'Êxodo', 'Levirico', 'Númmeros',);
console.log (Indicações);

Indicações.push ('Primeira João', 'Segunda Timóteo', 'Salmos', 'Apocalipse',);
Indicações.splice(1,4);
console.log (Indicações);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


console.log ("Por favor, atente as normas para emprestimo de livros:Ufba");

const idadeIdeal = 17;
console.log(idadeIdeal);

const identificação = ("Apresentar identidade.");
console.log(identificação);

const indicacaoDomes = ("Livro indicado:GeografiaAngular.");
console.log (indicacaoDomes);

const livrosDisponíveis = new Array ('Livros disponíveis:Matematica 6', 'Geografia Angular', 'Biblia','Historias da musica');
console.log (livrosDisponíveis);

livrosDisponíveis.push ('Lógica da computação', 'Segredos Revelados', 'Fazendo a coisa certa', 'Histórias de Bach.');
console.log (livrosDisponíveis);
livrosDisponíveis.splice(1,1);
console.log (livrosDisponíveis);


const emprestimoCondicionado = ("Emprestimo só será liberado ao portador do documento.");
console.log (emprestimoCondicionado);

const quatroLivrosporAluno = ("limite máximo: quatro livros por aluno");
console.log (quatroLivrosporAluno);

if (idadeIdeal >=18) {

console.log ("liberado");
    
} else {
    console.log ("Você é menor de idade, não pode fazer emprestimo de livros.");
    
}



