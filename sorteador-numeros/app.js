function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let Intervalo = ate - de;
  let sorteados = [];
  let numero;

  if (de > ate) {
    alert("O número FINAL deve ser Menor que o número inicial!");
    limparCampos();
  } else {
    if (Intervalo < quantidade) {
      alert("A QUANTIDADE escolhida deve ser menor que o INTERVALO desejado!");
      limparCampos();
    } else {
      for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
          numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
      }
    }
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo" id="numerosSorteados"
  >Números sorteados: ${sorteados}</label>`;

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
  quantidade.value = "";
  de.value = "";
  ate.value = "";
  resultado.innerHTML = `
    <label class="texto__paragrafo" id="numerosSorteados">
      Números sorteados: nenhum até agora
    </label>`;
  alterarStatusBotao();
}

function limparCampos() {
  quantidade.value = "";
  de.value = "";
  ate.value = "";
  resultado.innerHTML = `
    <label class="texto__paragrafo" id="numerosSorteados">
      Números sorteados: nenhum até agora
    </label>`;
  alterarStatusBotao();
}
