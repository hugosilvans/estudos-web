//Contador de Cliques
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let resultado = document.getElementById("resultado");
let ncliques = 0;
increment.onclick = function(){
    ncliques = ncliques + 1;
    let saida = `<b>${ncliques}</b>`;
    document.getElementById("resultado").innerHTML = saida;
}
decrement.onclick = function(){
    ncliques = ncliques - 1;
    if(ncliques < 0){
        alert("Erro: Só é válido números positivos!");
        ncliques = 0;
    }
    let saida = `<b>${ncliques}</b>`;
    document.getElementById("resultado").innerHTML = saida;
}

//Texto dinâmico
let campo = document.getElementById("input");
let resultado1 = document.getElementById("resultado1");

campo.onkeydown = function(event){
    if(event.key == "Enter"){
         resultado1.innerHTML = campo.value;
        campo.value = "";
    }
}

//Contador de Carac
let carac = document.getElementById("carac");
let resultado2 = document.getElementById("resultado2");

carac.oninput = function(){
    let texto = carac.value;
    let semEspacos = texto.replaceAll(" ","");
    let quantidade = semEspacos.length;
    document.getElementById("resultado2").innerHTML = quantidade + " caracteres";
}

//Add Item

let opcoes = document.getElementById("opcoes");
let li = document.getElementById("li");
let ul = document.getElementById("ul");
let campo = document.getElementById("campo");
let add = document.getElementById("add");
let reset = document.getElementById("reset");

add.onclick = function(){
    let texto = campo.value
    let tipo = opcoes.value
    let lista = document.createElement(tipo);
    let item = document.createElement("li");
    

    //document.createElement("ul");
}






