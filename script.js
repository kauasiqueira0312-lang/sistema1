function gerarTabuada() {
const listaResultado = document.getElementById('numero');
const numero = parseInt(listaResultado.value);
listaResultado.innerHTML = '';
 if (isNaN(numero)) {
    const itemErro = document.createElement('li');

    itemErro.content = 'Por favor, digite um numero valido!';

    listaResultado.appendChild(itemErro);

    return;
 }

for (let i = 1; i <=10; i++) {
    const item = document.createElement('li');
    item.textContent = `${numero}  x ${i} = ${numero * i}`;
    listaResultado.appendChild(item);
  }
}
