import React from 'react'

function Input({type,placeholder,onChange,className,value}) {
  return (<input type={type} placeholder={placeholder} value={value} onChange={onChange} className={className}/>   )
}

export default Input