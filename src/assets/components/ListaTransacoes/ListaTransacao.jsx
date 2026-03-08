import Botao from "../Botao/Botao";
import styles from "./ListaTransacao.module.css";
import { MdDelete } from "react-icons/md";

function ListaTransacao({ transacoes,setTransacoes}) {
function removerItem(id) {
  
  const novaLista = transacoes.filter(transacao => transacao.id !== id)
  setTransacoes(novaLista)
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
        {transacoes.map((transacao) => (
          <tr key={transacao.id}>
            <td>{transacao.tipo}</td>
            <td>{transacao.valor}</td>
            <td>{transacao.descricao} </td>
            <td >
              
              <Botao onClick={() => removerItem(transacao.id)} className={styles.Botao} texto={<MdDelete  />}></Botao>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaTransacao;
