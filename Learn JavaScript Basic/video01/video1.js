// HACK NÃO VỚI PHÉP TOÁN
// CỘNG TRỪ TRONG JAVASCRIPT

// ------------
// Phép cộng
// ------------

// Number + Number = Number
console.log(1 + 1)

// String + String = String
console.log('Easy' + 'FrontEnd')

// Number + String = String + String = String
// '100' + '200' = '100200'
console.log(100 + '200')

console.log(100 + 'subscribers')

// 100 + 100 = 200 + '200' = '200200'
console.log(100 + 100 + '200')

// 100 + '100' = '100100' + 200 = '100100200'
console.log(100 + '100' + 200)

// '100' + '100200' = '100100200'
console.log(100 + (100 + '200'))

// ------------
// Phép trừ
// ------------

// Number - Number = Number
console.log(2 - 1)

// String - String = NaN (Not A Number)
// NaN - NaN = NaN
console.log('abc' - 'def')

// Number - String = ???
// String - Number = ???
console.log(100 - 'def')

// NumberString - Number = ???
// Number - NumberString = Number - Number = Number
// VD NumberString: '123', '100', '1000'
// 200 - 100 = 100
console.log(200 - '100')

// 1000 - '100' = 900 - 500 = 400
console.log(1000 - '100' - 500)

console.log('1000' - 500)

// ------------
// Tổng hợp cộng và trừ???
// ------------

// 100 + '200' = '100200' - 200 = 100200 - 200 = 100000
console.log(100 + '200' - 200)

// 100 - '200' = -100 + 200 = 100
console.log(100 - '200' + 200)

// ------------
// Tóm lại
// ------------
// Cộng trừ giữa số và chuỗi thì
//  - Cộng thì ưu tiên chuỗi
//  - Trừ thì ưu tiên số (vì đơn giản chuỗi đâu trừ nhau được)

// ------------
// Giờ cho các bạn giải trí đây =)))
// Hãy comment đáp án cho những biểu thức sau nhé
// A = 100 + 100 + '100' - 100
// B = 100 + '100' - '100' + '100'
// C = 100 + (100 + '200') - '300'
// D = 100 + 200 - '300subs'
// Như vậy đủ chưa? Hay muốn thêm nữa nè? =))

console.log(100 + (100 + '200') - '300')
