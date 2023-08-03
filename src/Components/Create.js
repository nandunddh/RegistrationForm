import React, { useState } from 'react'

const Create = () => {
  let [x, setx] = useState(0);
  return (
    <div className='container'>
      <button data-testid="decrement-button" onClick={()=>setx(--x)}>-</button>
      <button data-testid="increment-button" onClick={()=>setx(++x)}>+</button>
      <p>clicked: {x}</p>
    </div>
  )

}

export default Create