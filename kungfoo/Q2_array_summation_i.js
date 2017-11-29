/**
 * Title: Array Summation
 *
 * Summary: Sum all elements of an array.
 *
 * Difficulty: Foundation
 *
 * Tags: Array
 *
 * Specification:
 *
 * Return the total (summation) of all input integers.
 * 
 * Help with loops and arrays:
 * http://www.w3schools.com/js/js_loop_for.asp
 * 
 * input: Array of integers.
 * 
 * output: Integer, sum of all input integers.
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: [1,6,3]
 *  output: 10
 *
 * Test Case 2:
 *   input: [6,7,8,2,6,8]
 *  output: 37
 *
 * Test Case 3:
 *   input: [23,68,29,85,16,59,36,59,27,58]
 *  output: 460
 */


function kungfoo(input) {
    var output = 0;
    
    // for(var i = 0; i<input.length; i++) {
    //     output+=input[i];
    // }
    // OR
    output = input.reduce(function(sum, current) {
        return sum + current;
    })
    
    return output;
}