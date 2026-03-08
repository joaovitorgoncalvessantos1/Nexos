import React, { useState } from "react";
import ResumoSaldo from "../../ResumoSaldo/ResumoSaldo";
import Card from "../../Card/Card";
import CardsTransacoes from "../../CardsTransacoes/CardsTransacoes";
import FormularioTransacao from "../../FormularioTransacao/FormularioTransacao";
import Input from "../../Input/Input";
import Botao from "../../Botao/Botao";
import Conteiner from "../../Conteiner/Conteiner";
import ListaTransacao from "../../ListaTransacoes/ListaTransacao";
import { calcularResumo } from "../../../utils/calcularResumo";

function Dashboard() {
  const [transacoes, setTransacoes] = useState([]);
  const resumo = calcularResumo(transacoes);

  function adicionarTransacao( novaTransacao) {
    setTransacoes((prev) => [...prev,  novaTransacao]);
  }
  

  return (
    <>
      <ResumoSaldo saldo={resumo.saldo}titulo="Saldo Atual" />
      <Conteiner>
        <CardsTransacoes titulo="Total de entradas" valor={resumo.totalEntradas} />

        <CardsTransacoes cl titulo="Total de saídas" valor={resumo.totalSaidas} />

        <CardsTransacoes titulo="Saldo" valor={resumo.saldo}  />
      </Conteiner>
      

      <Card>
        <FormularioTransacao
          adicionarTransacao={adicionarTransacao}
        ></FormularioTransacao>
     
      </Card>

      <Card >
<ListaTransacao
  transacoes={transacoes}
  setTransacoes={setTransacoes}
/>
      </Card>

    </>
  );
}

export default Dashboard;
