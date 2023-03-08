import React, { useState } from 'react';
function Form() {
  const [textInput, setTextInput] = useState('name')
  function handleChange(event) {
    setTextInput(event.target.value)
  }
  function handleSubmit() {
    alert(textInput)
  }
  return (
    <>
    <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <p>{textInput}</p>
        <label htmlFor="name">Name:
          <input type="text" id='name' value={textInput} onChange={handleChange}/>
        </label>
        <input type="submit" value="submit"/>
      </form>
      <h1>space</h1>
    </>
  )
}
export default Form