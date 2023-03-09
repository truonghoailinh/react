import React, { useState } from 'react'
function Conditional () {
  const [isHidden, setIsHidden] = useState(false)
  function handleShow () {
    setIsHidden(!isHidden)
  }
  return (
    <>
      <h1>Conditional: {isHidden ? 'show' : 'hidden'}</h1>
      <button onClick={handleShow}> Click handle conditional </button>
    </>
  )
}
export default Conditional