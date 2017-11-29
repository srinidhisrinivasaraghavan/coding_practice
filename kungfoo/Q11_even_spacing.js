/**
 * Title: Even Spacing
 *
 * Summary: Determine if all values in a set of integers are evenly spaced.
 *
 * Difficulty: Easy
 *
 * Tags: Array, Math
 *
 * Specification:
 *
 * Given an set of integers return true if the set of
 * integers are evenly spaced from one another.
 * 
 * input: array of 2 or more integers.
 * 
 * output: true if the set of input integers are evenly 
 *         spaced from one another else false.
 * 
 * Example:
 * [6,2,4,8] -> true
 * [4,7,1,10] -> true
 * [5,3,8] -> false
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: [8,24,16,32]
 *  output: true
 *
 * Test Case 2:
 *   input: [50,40,55,35,45,60]
 *  output: true
 *
 * Test Case 3:
 *   input: [50,40,55,35,45,65]
 *  output: false
 */

function kungfoo(input) {
    var output;
    input.sort(function(a, b) {
        return a-b;
    })
    
    var diff = input[1] - input[0];
    
    for(var i =2 ;i< input.length; i++) {
        var currDiff = input[i] - input[i-1];
        if(currDiff !== diff) {
            return false;
        }
    }
    
    return true;
}