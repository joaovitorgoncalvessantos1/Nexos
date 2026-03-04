import React from 'react'

function Botao({texto,onClick,type,className}) {
  return (
    <button className={className}type={type} onClick={onClick}>{texto}</button>
  )
}

export default Botao