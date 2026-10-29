/*

//EXERCÍCIO 01

let aleatorio = Math.floor(Math.random() * 20) + 1;
let palpite = 0;

while(palpite != aleatorio){
    palpite = prompt("Adivinhe o número entre 1 a 20: ");

if(palpite > aleatorio){
    alert("Dica: O número é menor.")
}

else if(palpite < aleatorio){
    alert("Dica: O número é maior.");
    }

else{
    alert("Parabéns! Você acertou!");
    }
}



//EXERCÍCIO 02

function escolherAleatorio(escolha){
    // Math.random() gera um número decimal aleatório entre 0 e 1 (ex: 0.73)
    // Multiplicamos pelo tamanho do array (escolha.length = 3)
    // Math.floor() arredonda para baixo, gerando 0, 1 ou 2
    // Isso é usado como índice para pegar um elemento do array

  return escolha[Math.floor(Math.random() * escolha.length)];
}

//let jogador1 = prompt("Digite Pedra, Papel ou Tesoura: ");
let escolha = ["Pedra", "Papel", "Tesoura"];
let jogador2 = escolherAleatorio(escolha);


if(jogador1 === jogador2){
    alert("Empate!");
// Verifica todas as combinações em que o jogador 1 ganha:
// Pedra vence Tesoura | Tesoura vence Papel | Papel vence Pedra
}else if (
    (jogador1 === "Pedra"   && jogador2 === "Tesoura") ||
    (jogador1 === "Tesoura" && jogador2 === "Papel")   ||
    (jogador1 === "Papel"   && jogador2 === "Pedra")
) {
    alert("Jogador 1 venceu!");
    console.log(`Vencedor: Jogador 1`);

// Se não empatou e jogador 1 não venceu, só pode ser vitória do computador
} else {
    alert("Jogador 2 venceu!");
    console.log(`Vencedor: Jogador 2`);
}

console.log(`Jogador 1: ${jogador1} | Jogador 2: ${jogador2}`);

//EXERCÍCIO 03

//let numero = Number(prompt("Digite um número: "));

let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i = 0; i < tabuada.length; i++){
    let multiplicacao = numero * tabuada[i];
    document.writeln(`${numero} x ${tabuada[i]} = ${multiplicacao} <br>`)
}

*/

//Exercicio 04

/*
let linhas = Number(prompt("Digite o número de linhas: "));

for(let i = 1; i <= linhas; i++){
    let asterisco = "";
    for(j = 1; j <= i; j++){
        asterisco += "*";
    }
    console.log(asterisco);
}
*/

//EXERCÍCIO 05
let qtd = Number(prompt("Digite a quantidade de termos: "));
let termo = 1;
let soma = 0;
let sequencia = "";
for(let i = 1; i <= qtd; i++){
    soma = soma + termo;
    termo = termo * 10 + 1;
    
if(i === qtd){
    sequencia = sequencia + termo;
    } else {
    sequencia = sequencia + termo + " + ";
    }
}

console.log(sequencia);
console.log("A soma é: ", soma);
