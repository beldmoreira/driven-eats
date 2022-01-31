let pedidoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;
let precoPedido = null;
let precoBebida = null;
let precoSobremesa = null;

function selecionarPedido(frango) {
  const botaoSelecionado = document.querySelector(".prato.modo-selecionado");
  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("modo-selecionado");
  }
  frango.classList.add("modo-selecionado");
  pedidoSelecionado = frango.innerHTML;

  const preco = document.querySelector(
    ".prato.modo-selecionado >.parte-inferior-pedido> .preco-produto>.valor"
  );
  precoPedido = parseFloat(preco.innerText.replace(",", "."));

  selecionarOsTres();
}

function selecionarBebida(coquinha) {
  const botaoSelecionado = document.querySelector(
    ".refrigerante.modo-selecionado"
  );
  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("modo-selecionado");
  }
  coquinha.classList.add("modo-selecionado");
  bebidaSelecionada = coquinha.innerHTML;

  const preco = document.querySelector(
    ".prato.modo-selecionado >.parte-inferior-pedido> .preco-produto>.valor"
  );
  precoBebida = parseFloat(preco.innerText.replace(",", "."));
  selecionarOsTres();
}

function selecionarSobremesa(pudim) {
  const botaoSelecionado = document.querySelector(
    ".sobremesa.modo-selecionado"
  );
  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("modo-selecionado");
  }
  pudim.classList.add("modo-selecionado");
  sobremesaSelecionada = pudim.innerHTML;
  const preco = document.querySelector(
    ".prato.modo-selecionado >.parte-inferior-pedido> .preco-produto>.valor"
  );
  precoSobremesa = parseFloat(preco.innerText.replace(",", "."));
  selecionarOsTres();
}

function trocarBotao() {
  const botaoVerde = document.querySelector("#botaoVerde");
  botaoVerde.classList.remove("escondido");
  const botaoCinza = document.querySelector("#botaoCinza");
  botaoCinza.classList.add("escondido");
}

function selecionarOsTres() {
  if (
    pedidoSelecionado !== null &&
    bebidaSelecionada !== null &&
    sobremesaSelecionada !== null
  ) {
    trocarBotao();
  }
}

function whatsapp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  window.location.href = `https://wa.me/5521984103465?text=${texto}`;
}

function finalizarPedido() {
  const precoTotal = precoPedido + precoBebida + precoSobremesa;
  const nomePrato = document.querySelector(
    ".prato.modo-selecionado >.nome-produto"
  ).innerText;
  const nomeBebida = document.querySelector(
    ".refrigerante.modo-selecionado >.nome-produto"
  ).innerText;
  const nomeSobremesa = document.querySelector(
    ".sobremesa.modo-selecionado >.nome-produto"
  ).innerText;
  const nome = prompt("Qual seu nome?");
  const endereco = prompt("Qual o endereço de entrega?");
  whatsapp(
    "Olá, gostaria de fazer o pedido:\n " +
      "- Prato: " +
      nomePrato +
      "\n" +
      " - Bebida: " +
      nomeBebida +
      "\n" +
      "- Sobremesa: " +
      nomeSobremesa +
      "\n" +
      "Total: R$ " +
      precoTotal.toFixed(2) +
      "\n" +
      "Nome: " +
      nome +
      "\n" +
      "Endereço: " +
      endereco
  );
}
