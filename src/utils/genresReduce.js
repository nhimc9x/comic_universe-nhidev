
const arrr1 = [
  { id: 'action-95', name: 'Action' },
  { id: 'drama-103', name: 'Drama' },
  { id: 'mystery', name: 'Mystery' },
  { id: 'truyen-mau-214', name: 'Truyện Màu' }
]
// Action, Drama, Mystery, Mystery, Truyện

const test = arrr1.reduce((accumulator, currentValue) => {
  accumulator.push(currentValue.name)
  return accumulator
}, [])

console.log(test.map(data => data).join(', '))