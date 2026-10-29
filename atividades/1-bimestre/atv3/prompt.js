// Cada parte usa suas próprias referências para evitar declarações duplicadas.
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const resultado = document.getElementById('resultado');
let cliques = 0;

function atualizarContador(delta) {
  cliques = Math.max(0, cliques + delta);
  resultado.textContent = String(cliques);
}
increment.addEventListener('click', () => atualizarContador(1));
decrement.addEventListener('click', () => atualizarContador(-1));

const entradaTexto = document.getElementById('input');
const resultadoTexto = document.getElementById('resultado1');
entradaTexto.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // O usuário está fornecendo texto; não interprete o conteúdo como HTML.
    resultadoTexto.textContent = entradaTexto.value;
    entradaTexto.value = '';
  }
});

const caracteres = document.getElementById('carac');
const resultadoCaracteres = document.getElementById('resultado2');
caracteres.addEventListener('input', () => {
  const quantidade = caracteres.value.replaceAll(' ', '').length;
  resultadoCaracteres.textContent = `${quantidade} caracteres`;
});

const campoItem = document.getElementById('campo');
const resultadoLista = document.getElementById('resultado3');
document.getElementById('add').addEventListener('click', () => {
  const texto = campoItem.value.trim();
  if (!texto) return;
  const tipo = document.getElementById('opcoes').value === 'ol' ? 'ol' : 'ul';
  const lista = document.createElement(tipo);
  const item = document.createElement('li');
  item.textContent = texto;
  lista.appendChild(item);
  resultadoLista.appendChild(lista);
  campoItem.value = '';
});
document.getElementById('reset').addEventListener('click', () => {
  cliques = 0;
  atualizarContador(0);
  resultadoLista.replaceChildren();
  resultadoTexto.textContent = '';
  resultadoCaracteres.textContent = '';
  entradaTexto.value = caracteres.value = campoItem.value = '';
});
