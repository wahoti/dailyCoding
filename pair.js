// Good morning! Here's your coding interview problem for today.

// This problem was asked by Jane Street.

// cons(a, b) constructs a pair
// car(pair) and cdr(pair) returns the first and last element of that pair.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

// def cons(a, b):
    // def pair(f):
        // return f(a, b)
    // return pair

// Implement car and cdr.

const cons = (a, b) => {
  const pair = (f) => f(a, b)
  return pair
}

const wtf = (a, b) => [a, b]

const car = pair => pair(wtf)[0]

const cdr = pair => pair(wtf)[1]

console.log('car(cons(3, 4))', car(cons(3, 4)), 'expects 3')
console.log('cdr(cons(3, 4))', cdr(cons(3, 4)), 'expects 4')
