import styles from "./ResumoSaldo.module.css";

function ResumoSaldo({ saldo, titulo }) {
  return (
    <div className={styles.ResumoSaldo}>
      <h1>{titulo}</h1>
      <h2>{saldo}</h2>
    </div>
  );
}

export default ResumoSaldo;
