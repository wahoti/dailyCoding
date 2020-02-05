// Good morning! Here's your coding interview problem for today.

// This problem was asked by Apple.

// Implement a job scheduler
// takes in a function f and an integer n
// calls f after n milliseconds.

const sched = (f, n) => setTimeout(f, n)

// https://johnresig.com/blog/how-javascript-timers-work/
