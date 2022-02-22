// Basic Types
let id: number = 5
let company: string = 'Totally dude'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Matt', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Matt'],
  [2, 'Bob'],
  [3, 'Jiminy'],
]

// Union
let pid: string | number = 22
pid = '22'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Sky',
  Down = 'Ground',
  Left = 'West',
  Right = 'East'
}

// console.log(Direction1.Left)
// console.log(Direction2.Left)

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y 
}

// Void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}


interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  // A constructor will run whenever an object is instantiated from that class
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

// This is creating a new Person object inside this variable called matt. This is instantiating the class
const matt = new Person(1, 'Matt Dudzik')
const bob = new Person(2, 'Bob Baggins')

// console.log(matt.register())

// console.log(matt, bob)

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Johnny', 'Developer')

console.log(emp.name)
console.log(emp.register())


// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Matt', 'John', 'Jill'])

strArray.push('hello')
numArray.push(1)

// To use with react:
// npx create-react-app . --template typescript