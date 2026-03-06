import React, { useState } from "react";
import styles from "./form.module.css";
import Label from "../Label/Label";
import Option from "../Opition/Option";
import Botao from "../Botao/Botao";
import Input from "../Input/Input";
import Card from "../Card/Card";
import { feedBackUx } from "../../utils/feedBackUx";

function FormularioTransacao({ adicionarTransacao }) {
  const [saida, setSaida] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState("")
  
  function handleSubmit(event) {
    event.preventDefault();
    const novaTransacao = {
      tipo: saida,
      valor: valor,
      descricao: descricao,
    };

feedBackUx(
  valor,
  descricao,
  saida,
  adicionarTransacao,
  novaTransacao,
  setMensagem
);
  
  }
  return (
    <>
  
      <form onSubmit={handleSubmit} className={styles.form}>
        <Label 
        
        for="TipoDeSaldo">
          <select
            className={styles.Select}
            name="saldo"
            id="saldo"
            value={saida}
            onChange={(event) => setSaida(event.target.value)}
          >
            <Option value='Selecione um tipo' texto='Selecione um tipo'/>
            <Option value="Saida" texto="Saida" />

            <Option value="Entrada" texto="Entrada" />
          </select>
        </Label>{" "}
        <Input
          className={styles.Input}
          type={"number"}
          placeholder={"0,00"}
          onChange={(event) => setValor(event.target.value)}
        ></Input>
        
        <Input
          className={styles.Input_descricao}
          onChange={(event) => setDescricao(event.target.value)}
          type={"texto"}
          placeholder={"Descrição"}
        ></Input>
        <Botao
          className={styles.Botao}
          texto={"Adicionar"}
          type={"submit"}
        ></Botao>
              <Card>

  {mensagem && <p className={styles.feedBackUx}>{mensagem}</p>}
</Card>
      
      </form>

    </>
  );
}

export default FormularioTransacao;
