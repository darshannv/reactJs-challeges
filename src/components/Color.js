import React from 'react'

function Color({hex, name, setBackground}) {
  return (
    <button className='color-square' style={{backgroundColor: hex}} onClick={() => setBackground(hex)}>
        <h2>{name}</h2>
    </button>
  )
}

export default Color