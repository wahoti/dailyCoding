// Good morning! Here's your coding interview problem for today.
//
// This problem was asked by Uber.
//
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
//
// Follow-up: what if you can't use division?

const in1 = [1, 2, 3, 4, 5]
const out1 = [120, 60, 40, 30, 24]
const in2 = [3, 2, 1]
const out2 = [2, 3, 6]

const productArrayWithDivision = (input) => {
  if (!Array.isArray(input)) return []
  if (input.length < 2) return []

  const productOfAll = input.reduce((x, y) => x * y)

  let output = []
  input.map(x => {
    output.push(productOfAll / x)
  })

  return output
}

const productArrayNoDivision = (input) => {
  if (!input) return []
  if (input.length < 2) return []

  let output = []
  input.map((x, i) => {
    inputWithoutI = input.slice()
    inputWithoutI.splice(i, i)
    output.push(inputWithoutI.reduce((x, y) => x * y))
  })

  return output
}

console.log('daily coding problem 2')

const testSolution = (input, expected, solution) =>
  console.log('\n\ninput\t', input, '\noutput\t', solution(input), '\nexpect\t', expected)

testSolution(in1, out1, productArrayWithDivision)
testSolution(in2, out2, productArrayWithDivision)
testSolution(in1, out1, productArrayNoDivision)
testSolution(in2, out2, productArrayNoDivision)
