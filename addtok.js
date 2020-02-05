// Good morning! Here's your coding interview problem for today.
//
// This problem was recently asked by Google.
//
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//
// Bonus: Can you do this in one pass?

console.log('ayyy')

// setup for commandline inputs?

const k = 17

const arr = [10, 15, 3, 7]

const addstoK = (arr, k) => {
  const arrLength = arr.length

  arr.map((x, i) => {
    console.log(x, i)
    for (var n = i+1; n < arrLength; n++) {
      console.log(arr[n])
      if (x + arr[n] === k) {
        console.log('adds to k!', x, arr[n])
        return true
      }
    }
  })

  return false
}

addstoK(arr, k)
