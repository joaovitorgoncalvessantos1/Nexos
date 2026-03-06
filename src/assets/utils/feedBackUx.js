export function feedBackUx(
  valor,
  descricao,
  saida,
  adicionarTransacao,
  novaTransacao,
  setMensagem
) {

  const valorNumero = Number(valor);

  if (saida === "") {
    setMensagem("Selecione o tipo da transação");
    return;
  }

  if (valorNumero <= 0) {
    setMensagem("O valor precisa ser maior que zero");
    return;
  }

  if (descricao.trim() === "") {
    setMensagem("A descrição não pode estar vazia");
    return;
  }

adicionarTransacao(novaTransacao);

setMensagem(setMensagem);

setTimeout(() => {
  setMensagem("");
}, 2000);

}
