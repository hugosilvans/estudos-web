//Eventos:
//Propriedade:

//Onclick
let botao1 = document.getElementById("botao1");

//manipulador (comportamento para esse botão)
botao1.onclick = function(){
    console.log("Primeiro evento");
    alert("Evento!")
}

botao1.onclick = function(){
    botao1.textContent = "Texto alterado";
}

//mouseover
let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    botao2.style.backgroundColor = "red";
}

botao2.onmouseout = function(){
    botao2.style.backgroundColor = "";
}

//double click
botao2.ondblclick = function(){
    botao2.textContent = "Duplo Clique"
}

//onkeydown (pressionar tecla)
let campoEntrada = document.getElementById("input");
let resultado = document.getElementById("resultado");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("teste");
        resultado.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    }
}

//multiplos eventos
let clique3 = document.getElementById("clique3");
let mensagem1 = document.getElementById("mensagem1");
let mensagem2 = document.getElementById("mensagem2");
clique3.addEventListener("click", function(){
    mensagem1.textContent = "Primeiro evento!";
    }
);

clique3.addEventListener("click", function(){
    alert("Segundo Evento!");
    mensagem2.textContent = "Segundo Evento!";
});
