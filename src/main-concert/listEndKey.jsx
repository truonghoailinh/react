import React from 'react'
function List() {
  const number = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <h1>List End Key</h1>
      <ul>
        {number.map((item, index) => 
          <li key={index}>
            item {item}
          </li>
        )}
      </ul>
    </>
  )
}
export default List