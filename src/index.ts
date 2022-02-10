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

console.log(Direction1.Left)
console.log(Direction2.Left)

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}