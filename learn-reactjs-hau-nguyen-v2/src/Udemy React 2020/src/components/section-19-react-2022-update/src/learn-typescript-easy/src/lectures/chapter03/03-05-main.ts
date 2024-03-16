interface Student5 {
  id: number
  name: string
}

const numberList: Array<number> = [1, 2, 3]
const wordList: Array<string> = ['easy', 'frontend']

const studentList2: Array<Student5> = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]

console.log('Array 🚀', studentList2)

interface List<T> {
  length: number
  [index: number]: T
}

const numberList1: List<number> = [1, 2, 3]
const wordList1: List<string> = ['easy', 'frontend']

const studentList3: List<Student5> = [
  { id: 1, name: 'easy' },
  { id: 2, name: 'frontend' },
  { id: 3, name: 'duynghiadev' }
]

console.log('List 🚀', studentList2)

// type other
interface List_1<T> {
  length: number
  [index: string]: T | number
}

const numberList_1: List_1<number> = {
  length: 3,
  '0': 1,
  '1': 2,
  '2': 3
}

const wordList_1: List_1<string> = {
  length: 2,
  '0': 'easy',
  '1': 'frontend'
}

console.log('----------------------------------------------------')
console.log('Number List_1 🚀', numberList_1)
console.log('Word List_1 🚀', wordList_1)

// keyof operator 👇

type StudentKeys = keyof Student5
const keys_1: StudentKeys = 'id'
const keys_2: StudentKeys = 'name'

// typeof operator 👇
console.log('----------------------------------------------------')
console.log('string ✅', typeof 'easy frontend') // 'string'
console.log('number ✅', typeof 123) // 'number'
console.log('boolean ✅', typeof false) // 'boolean'
console.log('object ✅', typeof {}) // 'object'
console.log('object ✅', typeof []) // 'object'
console.log('function ✅', typeof function () {}) // 'function'
console.log('boolean ✅', typeof window !== 'undefined') // true on client, false on server

// Mapped types 👇

type Student6 = {
  id: number
  name: string
  age: number
}

type MappedTypes = {
  [Key in keyof Student6]: boolean
}

// Example usage
const mappedProperties: MappedTypes = {
  id: true,
  name: false,
  age: true
}

console.log('----------------------------------------------------')
console.log(mappedProperties)
