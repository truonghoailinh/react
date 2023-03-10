import React from 'react'
function course() {
  // array and object
  const restData = [10, 20, 30, 40]
  const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe'
  }

  const [first, ...restOfItems] = restData
  const {temp1, temp2, ...person} = data;
  const newArray = [...restOfItems];
  const newObject = {
    ...person
  }

  // template string
  const greeting = 'Hello World'
  const answer = 'Forty Two'
  const html = `
    <div>${Math.random()} ${greeting} ${answer}</div>
  `
  // Classes

  class Person {
    constructor(name) {
      this.name = name
    }
    greet() {
    }
  }

  class Student extends Person {
    constructor(name, level) {
      super(name)
      this.level = level
    }
    greet() {
    }
  }

  const o1 = new Person("Max")
  const o2 = new Student("Tina", "1st Grade")
  const o3 = new Student("Mary", "2nd Grade")
  o3.greet = () => console.log('I am specical!')

  o1.greet()
  o2.greet()
  o3.greet()

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(resp => {
      resp.json().then(data => {
      })
    })
  }
  fetchData()

  const fetchAsync = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    const data = await resp.json()
  }
  fetchAsync()
  return(
    <>
      <h1>Course</h1>
    </>
  )
}
export default course