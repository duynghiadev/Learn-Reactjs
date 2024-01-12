// Try edit message
const note = {
  title: 'Hello word',
  label: ['C#', 'Java', 'NodeJS'],
  body: 'This is a note'
}

let label_2 = note.label //Tham chiếu
console.log('**Note before**', note)
console.log('👉 label_2:', label_2)
label_2.shift() //Lấy ra phần tử đầu tiên
console.log('**Note after**', note) //Kết quả là label trong note cũng bị thay đổi theo

console.log('------------------')

//Cách giải quyết đẻ note không bị thay đổi
//Dùng Spread Operator để tạo ra array mới
const note2 = {
  title: 'Duy Nghia Dev',
  label: ['Ronaldo', 'Messi', 'Neymar'],
  body: 'This is a soccer player'
}

let label_3 = [...note2.label]

console.log('note2 before:', note2)
console.log('👉 label_3 using Spread Operator before:', label_3)
label_3.shift()
console.log('👉 label_3 using Spread Operator after:', label_3)
console.log('note2 after:', note2)
