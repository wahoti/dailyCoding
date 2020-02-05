// Good morning! Here's your coding interview problem for today.
//
// This problem was asked by Google.
//
// Given the root to a binary tree implement
// serialize(root), which serializes the tree into a string
// deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
    // def __init__(self, val, left=None, right=None):
        // self.val = val
        // self.left = left
        // self.right = right
// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

class Node {
  constructor(val = 'null', left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const serialize = (tree) => {
  let treeString = ''
  if (!tree) return ''
  treeString += tree.val
  treeString += ' '
  treeString += serialize(tree.left)
  treeString += serialize(tree.right)
  return treeString
}

// ROOT L LL LLL LLR LR LRL LRR R RL RLL RLR RR RRL RRR

const spaceSeparatedString = (array) => {
  return array.toString().replace(/,/g, ' ')
}

const deserialize = (treeString) => {
  const treeArray = spaceSeparatedString(treeString).split(' ')

  const numNodes = treeArray.length

  // const treeHeight = Math.floor(Math.log2(numNodes)) // don't actually use this T_T
  const root = new Node(treeArray.shift())

  if (numNodes === 1) {
    return root
  }

  root.left = deserialize(
    treeArray.slice(
      0,
      Math.floor(numNodes / 2)
    )
  )

  root.right = deserialize(
    treeArray.slice(
      Math.floor(numNodes / 2),
      numNodes - 1
    )
  )

  return root
}

const doTest = () => {
  const tree = new Node('ROOT')

  tree.left = new Node('L')
  tree.right = new Node('R')

  tree.left.left = new Node('LL')
  tree.left.right = new Node('LR')
  tree.right.left = new Node('RL')
  tree.right.right = new Node('RR')

  tree.left.left.left = new Node('LLL')
  tree.left.left.right = new Node('LLR')
  tree.left.right.left = new Node('LRL')
  tree.left.right.right = new Node('LRR')
  tree.right.left.left = new Node('RLL')
  // tree.right.left.right = new Node('RLR')
  tree.right.right.left = new Node('RRL')
  tree.right.right.right = new Node('RRR')

  const cereal1 = serialize(tree).trim()
  const decereal = deserialize(cereal1)
  const cereal2 = serialize(decereal).trim()
  console.log('~', cereal1, '~')
  console.log('~', cereal2, '~')
  console.log(cereal1 == cereal2)
}

doTest()
