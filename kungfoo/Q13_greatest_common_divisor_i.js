/**
 * Title: Greatest Common Divisor
 *
 * Summary: Find the greatest common divisor of two integers.
 *
 * Difficulty: Easy
 *
 * Tags: Math, Iteration
 *
 * Specification:
 *
 * Given an array of two to ten non-zero integers, return the greatest
 * common divisor of the integers. That is, the largest positive integer
 * that divides all the numbers in the array without a remainder.
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: [4,8]
 *  output: 4
 *
 * Test Case 2:
 *   input: [1,8]
 *  output: 1
 *
 * Test Case 3:
 *   input: [-25,45,15,145,175,-930]
 *  output: 5
 *
 * [open any solution to see all test cases]
 */


function kungfoo(input) {
    var output = 1;
    var inputPos = input.map(makePositive).sort();
    
    for(var i  = inputPos[0]; i> 0; i--) {
        if(isGCD(inputPos, i)) {
            output =  i;
            break;
        }
    }
    
    return output;
}

function makePositive(ele) {
    if (ele < 0) {
        ele = ele * -1;
    }
    
    return ele;
}

function isGCD(arr, gcd) {
    for(var i =1;i<arr.length;i ++) {
        if(arr[i]%gcd) {
           return false 
        } 
    }
    
    return true;
}