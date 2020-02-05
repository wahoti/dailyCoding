// Good morning! Here's your coding interview problem for today.

// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer
// linear time and constant space

// In other words,
// find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.

// For example,
// the input [3, 4, -1, 1] should give 2.
// The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

const findLowestPositiveIntegerMissing = (arr) => {
  const onlyPositives = arr.filter(val => val > 0)
  const noDupes = new Set(onlyPositives)

  const noDupesLength = noDupes.size
  let sorted = new Array(noDupesLength).fill(0)

  noDupes.forEach(val => {
    if (val < noDupesLength) {
      sorted[val] = val
    }
  })

  for (var x = 1; x < sorted.length; x++) {
    if (sorted[x] === 0) {
      return x
    }
  }

  return x
}

const alternateSolution = (arr) => {
  const onlyPositives = arr.filter(val => val > 0)
  const noDupes = Array.from(new Set(onlyPositives))

  let listA = filterItemsGreaterThanLength(noDupes)
  let listB = filterItemsGreaterThanLength(listA)

  while (true) {
    console.log('\nlistA', listA)
    console.log('lisTB', listB)
    if (listA.length === listB.length) {
      return listA.length + 1
    }
    listA = filterItemsGreaterThanLength(listB)
    listB = filterItemsGreaterThanLength(listA)
  }
}

const filterItemsGreaterThanLength = (arr) => arr.filter(val => val <= arr.length)

const testSolution = (input, expected, solution) =>
  console.log('\n\ninput\t', input, '\noutput\t', solution(input), '\nexpect\t', expected)

const input1 = [3, 4, -1, 1, 1, 9000, 1]
const output1 = 2
const input2 = [1, 2, 0, 1, 9000, 1]
const output2 = 3

const input3 = [1, ...new Array(10).fill(9000)]
const output3 = 2

const input4 = [...Array(100).keys()].slice(2)
const output4 = 1

testSolution(
  input1,
  output1,
  findLowestPositiveIntegerMissing,
)

testSolution(
  input2,
  output2,
  findLowestPositiveIntegerMissing,
)

testSolution(
  input1,
  output1,
  alternateSolution,
)

testSolution(
  input2,
  output2,
  alternateSolution,
)

testSolution(
  input3,
  output3,
  alternateSolution,
)

testSolution(
  input4,
  output4,
  alternateSolution,
)
