/**
 * Title: Multiple of 5 or 7
 *
 * Summary: Determine if a number is a multiple of 5 or 7.
 *
 * Difficulty: Foundation
 *
 * Tags: Modulus
 *
 * Specification:
 *
 * The modulus operator (%) returns the division remainder
 * and is useful in many coding problems. Use the modulus 
 * operator to determine if input is a multiple of 5 or 7.
 * 
 * Help with Modulus:
 * http://codingbat.com/doc/practice/mod-introduction.html
 * 
 * input: positive integer.
 * 
 * output: true if input is a multiple of 5 or 7 else false.
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: 5
 *  output: true
 *
 * Test Case 2:
 *   input: 7
 *  output: true
 *
 * Test Case 3:
 *   input: 15
 *  output: true
 *
 * [open any solution to see all test cases]
 */

function kungfoo(input) {
    var output = false;
    
    if ( input % 5 === 0) {
        output = true;
    } else if(input % 7 === 0) {
        output = true;
    }
    
    
    return output;
}
