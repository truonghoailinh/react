import React, { useState } from 'react'
function HandelEvent () {
  const [count, setCount] = useState(0)
  function handleClick () {
    setCount(count + 1)
  }
  return (
    <>
      <h1> Handle Click: {count} </h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default HandelEvent