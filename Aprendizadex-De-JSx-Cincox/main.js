/*let contador = 0;

while(contador <= 20){
    console.log(`O número vale: ${contador}`);
    contador++
}
console.log('Terminou');*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*let senha = prompt('senha:');

while (senha !== 'ifpr'){
    console.error('senha incorreta')
    console.log('Acesso negado')
    senha = prompt('senha');
}
console.log('Acesso liberado')*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*for(let contador = 0; contador <= 10; contador++){
    console.log(`Número vale ${contador}`)
}*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*let contador = -2;
for(contador; contador <= 226; contador++){
    console.log(`Número vale ${contador}`)
}*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*for(let i = 100; i >= 65; i -= 2){
    console.log(i)
}*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*let nota;
do{
    nota = Number(prompt('Digite um número de 1 a 10'));
}while(Number.isNaN(nota) || nota < 0 || nota > 10);
console.log(`${nota} - número válido`)*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*console.log('São múltiplos de 7:')

for(let n = onabort; n <= 1000; n++){
    if ((n % 7 === 0) && (n % 2 === 0)) {
        console.log(n);
    }
}*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*let total = 0;

while(true){
    const entrada = prompt('Valor do item (ou "fim" para encerarr)');
    if (entrada === 'fim' || entrada === null){
        break;
    }
    total += Number(entrada);
}

console.log(`Total da compra: R$ ${total.toFixed(2)}`);*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*for(let tabuada = 1; tabuada <= 10; tabuada++){
    console.log(`-----TABUADA DO ${tabuada}-----`);
    for(let x = 1; x <= 10; x++){
        console.log(`${tabuada} X ${x} = ${tabuada*x}`);
    }
}*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

const altura = 8;
let arvore = "";

for (let i = 1; i <= altura; i++) {
  const espacos = " ".repeat(altura - i);
  const folhas = "*".repeat(2 * i - 1);
  arvore += espacos + folhas + "\n";
}

for (let i = 0; i < 2; i++) {
  arvore += " ".repeat(altura - 2) + "|||\n";
}

console.log(arvore);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

/*const qtde = Number(prompt('Quantos alunos em sala'));
let soma = 0;
let maior = -Infinity;
let menor = Infinity;
let aprovados = 0;

for(let j = 1; j <= qtde; j++){
    const nota = Number(prompt(`Nota aluno ${j}:`));
    soma += nota;
    if(nota > maior) maior = nota;
    if(nota < menor) menor = nota;
    if(nota >= 60) aprovados++;
}
console.log(`Média geral: ${(soma / qtde).toFixed(1)}`);
console.log(`Maior: ${maior} | Menor: ${menor}`);
console.log(`Qtde de aprovados: ${aprovados}`)*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------\\

//Crie um algoritmo para sortear um número entre 1 e 10, inclusos. 0 usuário tenta advinhar e, ao advinhar, mostra quantas tentativas ele necessitou para acertar o número. Insira uma consição onde o usuário delimita quantas chances ele terá para acertar o número

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const maxTentativas = Number(prompt("Quantas chances você quer para acertar?"));

if (!Number.isInteger(maxTentativas) || maxTentativas < 1) {
  alert("Número de chances inválido. Recarregue e tente de novo.");
} else {
  let acertou = false;

  for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    const palpite = Number(
      prompt(`Tentativa ${tentativa} de ${maxTentativas}: escolha um número de 1 a 10`)
    );

    if (palpite === numeroSecreto) {
      alert(`Parabéns! Você acertou em ${tentativa} tentativa(s).`);
      acertou = true;
      break;
    } else if (palpite < numeroSecreto) {
      alert("Muito baixo!");
    } else {
      alert("Muito alto!");
    }
  }

  if (!acertou) {
    alert(`Suas chances acabaram. O número era ${numeroSecreto}.`);
  }
}
