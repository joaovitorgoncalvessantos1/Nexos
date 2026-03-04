import styles from './CardsTransacoes.module.css'
function CardsTransacoes({titulo,valor}) {
  return (
<div className={styles.CardsTransacoes}>
    <h1>{titulo}</h1>
    <p>{valor}</p>
</div>
  )
}

export default CardsTransacoes