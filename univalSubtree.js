var { get } = require('lodash')

// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// A unival tree (which stands for "universal value")
// is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

class Node {
  constructor(val = 'null', left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const isUnivalTree = (node) => {
  if (!node) {
    return true
  }

  let left = get(node, 'left')
  let right = get(node, 'right')

  if (get(left, 'val') != get(node, 'val')) {
    return false
  }

  return isUnivalTree(left) && isUnivalTree(right)
}

const countUnivalSubtrees = (node, count = 0) => {
  if (isUnivalTree(node)) {
    count++
  }

  if (!node) {
    return count
  }

  let left = get(node, 'left')
  let right = get(node, 'right')

  count += countUnivalSubtrees(left, count)
  count += countUnivalSubtrees(right, count)

  console.log('?', count)

  return count
}

// const countUnivalSubtrees = (node) => {
//   let count = 0
//
//   if (!node) {
//     return count
//   }
//
//   if (get(node, 'left.val') === get(node, 'right.val')) {
//     count++
//   }
//
//   let left = get(node, 'left')
//   let right = get(node, 'right')
//
//   if (left) {
//     count += countUnivalSubtrees(left)
//   }
//   if (right) {
//     count += countUnivalSubtrees(right)
//   }
//
//   return count
// }

const doTest = () => {
  const tree = new Node('0')

  tree.left = new Node('1')
  tree.right = new Node('0')

  tree.right.left = new Node('1')
  tree.right.right = new Node('0')

  tree.right.left.left = new Node('1')
  tree.right.left.right = new Node('1')

  console.log('test', countUnivalSubtrees(tree)), 'expected 5'
}

doTest()
