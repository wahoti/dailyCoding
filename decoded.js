// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26,
// and an encoded message,
// count the number of ways it can be decoded.

// For example, the message '111' would give 3,
// since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable.
// For example, '001' is not allowed.

// 1 2 3 4 5 6 7 8 9 10 11 12
// how many ways can you group numbers by 2
// conversly how many numbers can you not...

// so like - find all the consecutive pairs that are greater than 26


// 1. everything is a single digit
// 2. everything is a double digit
//
// 10
//
// 5, 10 and everything inbetween
//
// 11 11 11 11 11
// 11 11 11 11 1 1
// 1 11 11 11 11 1
//
// how to iterate this?

// 1 -> 1
//
// 11 -> 1 1, 11 -> 2
//
// 111 -> 1 1 1, 11 1, 1 11, -> 3
//
// 1111 -> 1 1 1 1, 11 1 1, 11 11, 1 1 11, 1 11 1 -> 5

// 1(99) -> 1 9 9 -> 19 9 -> 2


// different starting points
