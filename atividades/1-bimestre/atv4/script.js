
// criar os preços (constantes globais com o preço por litro de cada combustível)
const precoGasolina = 6.40;
const precoEtanol = 5.20;
const precoDiesel = 5.80;

// função chamada sempre que o usuário muda o combustível ou digita a quantidade
const atualizarValor = () => {
    let tipo = document.getElementById("combustivel").value; // pega o valor selecionado no <select>
    console.log(tipo); // exibe no console o combustível selecionado (útil para debug)
    let litros = parseFloat(document.getElementById("litros").value); // pega o valor do input e converte para número decimal
    let precoPorLitro; // variável que vai receber o preço do combustível escolhido

    // verifica qual combustível foi selecionado e atribui o preço correspondente
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina; // atribui o preço da gasolina
            break;
        case "etanol":
            precoPorLitro = precoEtanol; // atribui o preço do etanol
            break;
        case "diesel":
            precoPorLitro = precoDiesel; // atribui o preço do diesel
            break;
        default:
            console.log("Escolha uma opção"); // nenhum combustível válido selecionado
            return; // interrompe a função sem calcular nada
    }

    console.log(precoPorLitro); // exibe no console o preço por litro (útil para debug)
    calcularValorAbastecimento(precoPorLitro, litros); // chama a função de cálculo passando preço e litros
}

// função responsável por calcular e exibir o valor total do abastecimento
const calcularValorAbastecimento = (precoCombustivel, litros) => {
    if(litros <= 0 || isNaN(litros)){ // verifica se o valor é inválido (zero, negativo ou não numérico)
        document.getElementById("resultado").textContent = "Insira valor válido"; // exibe mensagem de erro
        return; // interrompe a função
    } else {
        let valorTotal = precoCombustivel * litros; // calcula o valor total (preço × litros)
        document.getElementById("resultado").textContent = `Valor R$ ${formatarMoeda(valorTotal)}`; // exibe o resultado formatado
    }
}

let tipoCombustivel = document.getElementById("combustivel"); // seleciona o elemento <select> do HTML
tipoCombustivel.addEventListener("change", atualizarValor); // chama atualizarValor toda vez que o usuário mudar o combustível

let litros = document.getElementById("litros"); // seleciona o campo de input de litros
litros.addEventListener("input", atualizarValor); // chama atualizarValor a cada caractere digitado no input

// adiciona suporte à tecla Enter no campo de litros
litros.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault(); // evita que o formulário seja submetido/recarregado ao pressionar Enter
        atualizarValor(); // executa o cálculo manualmente
    }
});

// função que formata um número para o padrão monetário brasileiro
const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-br", 
        {minimumFractionDigits: 2, maximumFractionDigits: 2}); // garante sempre 2 casas decimais (ex: R$ 1.280,00)
}
