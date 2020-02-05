
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Airbnb.

// Given a list of integers write a function
// that returns the largest sum of non-adjacent numbers.
// Numbers can be 0 or negative.

// For example,
// [2, 4, 6, 2, 5] should return 13,
// since we pick 2, 6, and 5.
// [5, 1, 1, 5] should return 10,
// since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

const nonAdjSum = (arr) => {
  let sum = 0
  while (arr.length > 0) {
    // lase element case
    if (arr.length === 1) {
      if (arr[0] > 0) {
        sum += arr[0]
        return sum
      }
      return sum
    }

    // if first element is greater/equal than second
    // there is never a reason not to take it
    if (arr[0] >= arr[1]) {
      sum += arr[0]
      arr.shift()
      arr.shift()
      continue
    }

    // first element is less than second element

    // last two element case
    if (arr.length === 2 ){
      sum += arr[1]
      return sum
    }

    // can simplify the array by adding the first value to the third
    arr[2] += arr[0]
    arr.shift()
  }

  return sum
}


const doTest = () => {
  const testSets = [
    [[2, 4, 6, 2, 5, -1000], 13],
    [[5, 1, 1, 5, -1000], 10]
  ]

  testSets.map(testSet => {
    console.log('\ninput', testSet[0])
    console.log('output', nonAdjSum(testSet[0]))
    console.log('expected', testSet[1])
  })
}

doTest()
