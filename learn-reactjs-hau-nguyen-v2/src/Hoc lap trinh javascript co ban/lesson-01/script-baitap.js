// Bài Tập
// A = 100 + 100 + '100' - 100
// B = 100 + '100' - '100' + '100'
// C = 100 + (100 + '200') - '300'
// D = 100 + 200 - '300subs'

// A = 100 + 100 + '100' - 100 => 200 + '100' - 100 => '200100' - 100 => 200000
let A = 100 + 100 + '100' - 100
console.log(`A: ${A}, typeof A: ${typeof A}`)

// B = 100 + '100' - '100' + '100' => 100100 - '100' + '100' => 100000 + '100' => '100000100'
let B = 100 + '100' - '100' + '100'
console.log(`B: ${B}, typeof B: ${typeof B}`)

// C = 100 + (100 + '200') - '300' => 100 + '100200' - '300' => '100100200' - '300' => 100099900
let C = 100 + (100 + '200') - '300'
console.log(`C: ${C}, typeof C: ${typeof C}`)

// D = 100 + 200 - '300subs' => 300 - '300subs' => 300 - 300subs => NaN (Not A Number)
// Kết quả: NaN (Không thể trừ chuỗi '300subs' từ số 300) => Not A Number
/**
 * Trong JavaScript, khi bạn thực hiện phép trừ giữa một số và một chuỗi, JavaScript sẽ cố gắng chuyển đổi chuỗi thành số và sau đó thực hiện phép trừ. Nếu quá trình chuyển đổi không thành công (vì chuỗi không có định dạng số hợp lệ), kết quả sẽ là NaN (Not a Number).
 */
let D = 100 + 200 - '300subs'
console.log(`D: ${D}, typeof D: ${typeof D}`)
