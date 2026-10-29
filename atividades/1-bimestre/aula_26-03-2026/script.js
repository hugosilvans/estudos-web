//criar os preços
const precoGasolina = 6.40;
const precoEtanol = 5.20;
const precoDiesel = 5.80;

//função: identificar o combustível selecionado pelo usuário
function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);

    let litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("Escolha uma opção");
            return;
    };
    console.log(precoPorLitro);
    calcularValorAbastecimento(precoPorLitro, litros);
};

function calcularValorAbastecimento(precoCombustivel, litros){
    //let valorTotal = precoCombustivel * litros;
    //document.getElementById("resultado").textContent = valorTotal;

    if(litros<=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira valor válido";
        return;
    } else {
        let valorTotal = precoCombustivel * litros;
        document.getElementById("resultado").textContent = `Valor R$ ${formatarMoeda(valorTotal)}`;
    }
};

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

litros.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault(); //evita que o formulário seja recarregado
        atualizarValor();
    }
});

function formatarMoeda(valor){
    return "R$ " + valor.toLocaleString("pt-br", 
        {minimumFractionDigits: 2, maximumFractionDigits: 2});
};