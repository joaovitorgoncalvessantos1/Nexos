import Botao from "../Botao/Botao";
import styles from "./ListaTransacao.module.css";
import { MdDelete } from "react-icons/md";

function ListaTransacao({ transacoes }) {
  function removerItem(transacoes,index){
   transacoes.filter((transacaoRemove)=>( console.log(teste)))
   
   
  }
  return (
    <table className={styles.tabela}>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Valor</th>
          <th>Descrição</th>
          <th>Acão</th>
        </tr>
      </thead>
      <tbody className={styles.pai}>
        {transacoes.map((transacao, index) => (
          <tr key={index}>
            <td>{transacao.tipo}</td>
            <td>{transacao.valor}</td>
            <td>{transacao.descricao} </td>
            <td >
              
              <Botao onClick={removerItem}className={styles.Botao} texto={<MdDelete  />}></Botao>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaTransacao;
