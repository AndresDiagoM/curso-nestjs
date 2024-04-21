const myName = 'Alice'

function sayHello(name: string) {
  return `Hello ${name}!`
}

console.log(sayHello(myName)) // Hello Alice!

const suma = (a: number, b: number) => a + b

console.log(suma(2, 8)) // but TypeScript will warn you if using string instead of number

// class in typescript

class Person {
  private name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  sayHello() {
    return `Hello ${this.name}!`
  }
}

const person = new Person('Alice', 24)
console.log(person.sayHello()) // Hello Alice!
