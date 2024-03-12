interface Student_1 {
  id_1: number
  name_1: string
  gender_1: 'male' | 'female'
  age_1: number
}

function findStudentById(studentList: Student_1[], studentId: number): Student_1 | undefined {
  if (studentList.length === 0) return undefined
  return studentList.find((x) => x.id_1 === studentId)
}

const studentList_1: Student_1[] = [
  { id_1: 1, name_1: 'Alice', gender_1: 'female', age_1: 20 },
  { id_1: 2, name_1: 'Bob', gender_1: 'male', age_1: 20 },
]

const bob = findStudentById(studentList_1, 3)

// console.log(bob.name) // error here ❌

// js: runtime error "Cannot read property 'name' of undefined" 💥
// ts: type error "Object is possibly 'undefined'" 💥

// FIX: do check before using ✅

if (bob) {
  console.log(`${bob.name_1}, ${bob.gender_1}, ${bob.age_1}`)
} else {
  console.log('Student undefined')
}
