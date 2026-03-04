import { Children } from 'react'
import styles from './Conteiner.module.css'
import React from 'react'

function Conteiner({children}) {
  return (
<section className={styles.Conteiner}>
    {children}
</section>
  )
}

export default Conteiner