import React, { useState } from 'react';
function Lifting() {
  const [textInput, setTextInput] = useState('name')
  function handleChange(event) {
    setTextInput(event.target.value)
  }
  function handleSubmit() {
    alert(textInput)
  }
  return(
    <>
      <h1>Lifting</h1>
      <form onSubmit={handleSubmit}>
        <p>{
          textInput > 99 ? 'boil' : 'not boil'
        }</p>
        <label htmlFor="boil">Name:
          <input type="number" id='boil' value={textInput} onChange={handleChange}/>
        </label>
        <input type="submit" value="submit"/>
      </form>
      <h1>ENd Lifting</h1>
    </>
  )
}
export default Lifting