import React from 'react'

function Option({value,texto,onChange}) {
  return (
        <option onChange={onChange} value={value}>{texto}</option>

  )
}

export default Option