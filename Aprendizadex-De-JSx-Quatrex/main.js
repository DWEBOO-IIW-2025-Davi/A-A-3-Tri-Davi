/*const temp = Number(prompt('Temperatura agora (C)'));
if(temp > 21){
    console.log('Muito quente pra mim...')
    console.log('Morri')
}else {
    console.log('Ta suave')
    console.log('Não morri')
}*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*const nota = Number(prompt('Insira a nota de 0 a 100'));
if(nota >= 90){
    console.log('Conceito A')
}else if(nota >= 75){
    console.log('Conceito B')
}else if(nota >= 60){
    console.log('Conceito C')
}else{
    console.log('Conceito D')
}*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*const media = Number(prompt('Insira a nota de 0 a 100'));
const frequencia = Number(prompt('Insira a frequencia de 0 a 100'));

if(media >= 70 && frequencia >= 75){
    console.log('Aprovado')
}else if(frequencia < 75){
    console.log('Reprovado por falta');
}else{
    console.log('Em recuperação')
};*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*const Idade = Number(prompt('Qual a sua idade?'));

if(Idade >= 16){
    const temTitulo = confirm ('Você possuí título de eleitor');
    if(temTitulo){
        console.log('Você pode votar');
    }else{
        console.log('Você deve tirar o título')
    }
}else{
    console.log('Você não tem idade para votar')
}*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*const Idade = Number(prompt('Qual a sua idade?'));
let tipo;

if(Idade >= 18){
    tipo = 'Adulto';
}else{
    tipo = 'Criança'
}
console.log('Você é', tipo);
*/

/*const idade = Number(prompt('Qual a sua idade?'));
const Tipo = idade >= 18 ? 'Adulto' : 'Criança';
console.log(Tipo)*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

const opcao = prompt('Cardápio da cantina com as opções \n 1- pastel \n 2-coxinha \n 3-suco');
switch(opcao){
    case '1':
        console.log('Pastel: R$11,00');
        break;
    case '2':
        console.log('Coxinha: R$11,00')
        break
    case '3':
        console.log('Suco: R$15,00')
        break
    default:
        console.log('Opção inválida')
}