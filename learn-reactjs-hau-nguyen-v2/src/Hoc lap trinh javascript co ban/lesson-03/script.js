// Channel: EASY FRONTEND - Hậu Nguyễn
// Youtube channel: https://www.youtube.com/channel/UCG2ovypNCpVOTFeY1YCocmQ
// THAM TRỊ vs THAM CHIẾU trong Javascript

// CHIA SẺ
// 1. Tham trị vs tham chiếu là gì?
// 2. Các khái niệm:
//     - stored by value
//     - stored by reference
//     - pass by value
//     - pass by reference
// 3. Cách khắc phục lỗi liên quan tới reference
// 4. Có liên quan gì tới ReactJS, Redux hk?
// Hôm nay học tới đây đủ rồi⁉️ 🤣

// -----------------
// THAM TRỊ - VALUE TYPE
// - Ví dụ cái box sau đây là đại diện cho biến trong JS.

// |                  |
// | number           |
// | string           |  => lưu luôn giá trị
// | boolean          |     vd số 1000, string 'Easy Frontend'
// | null, undefined  |
// |__________________|

// const a = 1000;
// |                  |
// | 1000             |
// | 'Easy Frontend'  |
// | true, false      |
// | null, undefined  |
// |__________________|

// -----------------
// THAM CHIẾU - REFERENCE TYPE

// |                         |    ===>    | KHO CHỨA 1E2F  |
// | object, array           |    ===>    |                |
// |                         |    ===>    | {name: 'Hau'}  |
// | const a = {name: 'Hau'} |    ===>    |                |
// | thực chất a = 1E2F      |    ===>    |                |
// |_________________________|    ===>    |________________|
// => chỉ lưu địa chỉ nơi giữ giá trị
// => phép gán với object === copy địa chỉ
// const b = a; --> b cũng trỏ về địa chỉ 1E2F

// tham trị - stored as value type
let a = 5
let b = a
a = 10
console.log(b)

// tham chiếu - stored as reference type
const a_1 = { name: 'Hau' } // 1E2F
const b_1 = a_1 // 1E2F
a_1.name = 'Po'
console.log(b_1.name)

// truyền tham số dạng tham trị - pass by value
function doMagic1(number) {
  number = 10
  return number
}
const a_2 = 5
doMagic1(a_2)
console.log(a_2) // 5 or 10
console.log(doMagic1(a_2)) // ???

// truyền tham số dạng tham chiếu - pass by reference
function doMagic2(a_3) {
  a_3.name = 'Po'
}
const a_3 = { name: 'Hau' }
// const a1 = a; // 1e2f
doMagic2(a_3)
console.log(a_3.name) // Hau or Po???

// Làm sao để không bị dính tham chiếu
// --> Clone object
// --> Clone array
// ES6: spread operator (...)
const a_4 = { name: 'Hau' } // 1E2F
const b_4 = { ...a_4 } // 1E2G
a_4.name = 'Po'
console.log(b_4.name)

const a_5 = [1, 2, 3]
const b_5 = [...a_5]
a_5.push(4)
console.log(b_5)

// Tham trị vs cả tham chiếu
// Cái này liên quan gì tới ReactJS, Redux?
// Có đó nha! :P
// Thỉnh thoảng component hk re-render
// mặc dù bạn nói đã thay đổi giá trị props rồi.

/**
 * Đây là cách chúng ta làm không clone ra object mới, mà ta update lun vào object cũ.
 *
 * - Khi chúng ta tạo 1 object thì object đó sẽ tạo trong bộ nhớ RAM máy tính
 * - Khi chúng ta cập nhật vào trong object cũ thì thằng React nó phát hiện là bộ nhớ lưu trữ của object mới và bộ nhớ lưu trữ của object cũ giống nhau => Nó compare thấy không thay đổi gì => thì nó sẽ không thay đổi
 *
 * - Cho nên cách giải quyết là ta clone ra 1 object từ object cũ, sau đó ta thao tác trên object mới. Khi render thì nó sẽ cập nhật giá trị theo object mới
 */

// class App extends PureComponent {
//   constructor(props) {
//     super(props)
//     this.state = {
//       numberList: []
//     }
//   }

//   componentDidMount() {
//     const { numberList } = this.state
//     newNumberList.push(1)
//     // will it re-render?
//     // shallow comparison
//     this.setState({ numberList: numberList })
//   }

//   render() {
//     // 0 or 1 --> 0
//     const { numberList } = this.state
//     return <p>{numberList.length}</p>
//   }
// }

// Đây là cách giải quyết từ cách trên => Cập nhật lại state bằng cách tạo ra 1 object từ object cũ 👍

// class App extends PureComponent {
//   constructor(props) {
//     super(props)
//     this.state = {
//       numberList: []
//     }
//   }

//   componentDidMount() {
//     const { numberList } = this.state
//     const newNumberList = [...numberList]
//     newNumberList.push(1)
//     // will it re-render?
//     // shallow comparison
//     this.setState({ numberList: newNumberList })
//   }

//   render() {
//     // 0 or 1 --> 1
//     const { numberList } = this.state
//     return <p>{numberList.length}</p>
//   }
// }

// NHỚ NÈ
// - Tham trị chứa giá trị (mấy kiểu dữ liệu đơn giản)
// - Tham chiếu chứa địa chi (kiểu dữ liệu phức tạp như object, array)
// - Nhớ clone ra object mới khi thay đổi props/state trong ReactJS / Redux.
// 💻 HAPPY CODING! ❤️

// Nhớ like, share và subscribe để ủng hộ mình nhen.
// Còn nếu muốn ủng hộ 💰 thì tìm trong phần mô tả video nhé!

// BÀI TẬP GIẢI TRÍ
// Câu 1:
function doSomethingCool(number, obj) {
  number = 1500
  obj.value = 2500
}
const a_6 = 1000
const b_6 = { value: 2000 }
doSomethingCool(a_6, b_6)
console.log(a_6 + b_6.value) // in ra bao nhiêu?

// Câu 2:
function doSomethingGreat(obj, arr) {
  obj.value = 3500
  arr.push(obj.value)
}
const a_7 = { value: 1500 }
const b_7 = [1000]
b_7.push(a_7.value)
doSomethingGreat(a_7, b_7)
console.log(b_7) // in ra cái gì?

// Giải và comment đáp án của bạn bên dưới nhé 😅
