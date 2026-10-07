console.log("com sole ponto tronco");

let nomeletiavel = "valor da letiável";
let outraletiavel = "valor da outra letiável";
let letiavelNum = "1980";
let cheiroNaSala = false
let letiavelIndefinida;

console.log(nomeletiavel);
console.log(outraletiavel);
console.log(letiavelNum);
console.log(cheiroNaSala);
console.log(letiavelIndefinida);

const texto = "texto guloso";
const num = 67;
const ativo = true;

console.log(typeof texto);
console.log(typeof num);
console.log(typeof ativo);

const aluno = "Rafaella";
const conceito1T = 4;
const conceito2T = 8;
const conceito3T = 5;

const media = (conceito1T + conceito2T + conceito3T) / 3;
const resultado = media >= 7 ? "aprovado" : "reprovado";

console.log(`O aluno ${aluno} obteve a média ${media.toFixed(2)} e foi ${resultado}`);
document.getElementById("saida").textContent = `O aluno ${aluno} obteve média ${media.toFixed(2)} e foi ${resultado}`;