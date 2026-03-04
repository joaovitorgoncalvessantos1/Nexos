export function calcularResumo(transacoes) {

  const resumo = transacoes.reduce((acumulador, transacaoAtual) => {
    const valor = Number(transacaoAtual.valor);

    if (transacaoAtual.tipo === "Entrada") {
      acumulador.totalEntradas += valor;
    } else {
      acumulador.totalSaidas += valor;
    }

    return acumulador;
  }, {
    totalEntradas: 0,
    totalSaidas: 0
  });


  const saldo = resumo.totalEntradas - resumo.totalSaidas;

 
  const formatarMoeda = (valor) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);


  return {
    totalEntradas: formatarMoeda(resumo.totalEntradas),
    totalSaidas: formatarMoeda(resumo.totalSaidas),
    saldo: formatarMoeda(saldo)
  };
}

