/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

var hammingDistance = function (x, y) {
  var tmp = x ^ y
  var result = 0

  for (var i = 0; i < 64; i++) {
    result += (tmp & 1
      ? 1
      : 0)

    tmp >>= 1
  }
  return result
}

console.log(hammingDistance(8, 127));