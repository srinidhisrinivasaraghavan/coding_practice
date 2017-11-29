/**
 * Title: Contains Duplicate
 *
 * Summary: Determine if a string contains any duplicate letters.
 *
 * Difficulty: Easy
 *
 * Tags: String
 *
 * Specification:
 *
 * input: String
 * 
 * output: true if input contains any duplicate letters
 *         else false
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: "asdfghjklqwergtyuiop"
 *  output: true
 *
 * Test Case 2:
 *   input: "asdfghjklqwertyuiop"
 *  output: false
 *
 * Test Case 3:
 *   input: ""
 *  output: false
 *
 * [open any solution to see all test cases]
 */

function kungfoo(input) {
    var output;
    for(var index =0 ;index < input.length; index++) {
        if(input.lastIndexOf(input.charAt(index)) !==index) {
            return true;
        }
    }
    
    return false;
}