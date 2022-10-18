///////Iteración #1: Buscar el máximo/////

function sum(a, b) {
  return Math.max(a, b)
}
console.log(sum(6, 2))

/////////Iteración #2: Buscar la palabra más larga//////


const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.',
]
function findLongestWord(param) {
  let longest = ''
  param.map((word) = (word.length > longest.length ? (longest = word) : ''))
  return longest
}
console.log(findLongestWord(avengers))

////////Iteración #3: Calcular la suma///////

let numbers = [1, 2, 3, 5, 45, 37, 58]
function sumAll(param) {
  return param.reduce((prev, current) = prev + current)
}
console.log(sumAll(numbers))

//////////////// Iteration 4 //////////////////

numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  return Math.floor(
    param.reduce((prev, current) = prev + current) / numbers.length
  )
}
console.log(average(numbers))

///////////////// Iteration 5 /////////////7

const mixedElements = [6, 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let total = 0
  mixedElements.map((item) =
    typeof item === 'number' ? (total += item) : (total += item.length)
  )
  return total
}
console.log(averageWord(mixedElements))

///////////// Iteration 6 /////////

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda',
]
function removeDuplicates(param) {
  let newArray = []
  for (let word of param) {
    !newArray.includes(word) ? newArray.push(word) : ''
  }
  return newArray
}
console.log(removeDuplicates(duplicates))

////////////// Iteration 7 //////////////

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc',
]
function finderName(array, name) {
  if (array.includes(name)) {
    console.log(
      `El nombre ${name} existe en la posicion ${array.indexOf(name)}`
    )
    return true
  } else {
    return false
  }
}
console.log(finderName(nameFinder, 'Xabier'))

/////////////// Iteration 8  //////////

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code',

];
function repeatCounter(param) {
  const uniqueStrings = [...new Set(counterWords)]
  const repeated =  {}
  for (let k of uniqueStrings) {
    repeated[k] = 0
  }
  param.forEach(s => {
    uniqueStrings.forEach(e => {
      if(e === s) repeated[e] += 1
    })
  })

  return repeated
}

 const k = repeatCounter(counterWords)
console.log(k)