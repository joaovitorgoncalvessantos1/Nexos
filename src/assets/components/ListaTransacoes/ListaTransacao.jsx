import styles from './ListaTransacao.module.css';

function ListaTransacao({ transacoes }) {
  return (
    <table className={styles.tabela} >
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Valor</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {transacoes.map((transacao, index) => (
          <tr key={index}>
            <td>{transacao.tipo}</td>
            <td>{transacao.valor}</td>
            <td>{transacao.descricao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaTransacao;