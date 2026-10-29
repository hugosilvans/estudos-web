//Buscar o elemento HTML
let meuElemento = document.getElementById("paragrafo"); //id = 1 de cada
console.log(meuElemento);
console.log(meuElemento.textContent); //puxando o conteudo da tag

let paragrafo1 = document.getElementsByClassName("paragrafo"); //class = todos
console.log(paragrafo1);

//imprimir conteúdo da tag
for (let i = 0; i < paragrafo1.length; i++){
console.log(paragrafo1[i].textContent);
}

let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//criar os elementos HTML via JavaScript
let destino = document.getElementById("elemento"); //busca o elemento HTML
let p = document.createElement("p"); // cria o elemento HTML
p.textContent = "Paragrafo criado via JavaScript"; //Insere o conteúdo no elemento HTML
destino.append(p); //adiciona ao DOM

//Criar lista
let lista = document.getElementById("lista")

let ul = document.createElement("ul");
let itens = ["Item 1", "Item 2", "Item 3"];

for (let i = 0; i < itens.length; i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}

lista.append(ul);

//funçao somar
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    console.log(soma);
    let saida = `Resultado: <b>${soma}</b>`;
    document.getElementById("resultado").innerHTML = saida; 
}

