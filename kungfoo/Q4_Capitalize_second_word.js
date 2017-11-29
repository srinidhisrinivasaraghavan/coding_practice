/**
 * Title: Capitalize 2nd Word
 *
 * Summary: Capitalize the second word of a string.
 *
 * Difficulty: Foundation
 *
 * Tags: Array, String
 *
 * Specification:
 *
 * To complete this kungfoo() capitalize the second word
 * of the input string.
 * 
 * Helpful Methods:
 * http://www.w3schools.com/jsref/jsref_split.asp
 * http://www.w3schools.com/jsref/jsref_touppercase.asp
 * http://www.w3schools.com/jsref/jsref_join.asp
 * 
 * input: String of words separated by spaces.
 * 
 * output: input string with the second word capitalized.
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: "a b c"
 *  output: "a B c"
 *
 * Test Case 2:
 *   input: "one two three"
 *  output: "one TWO three"
 *
 * Test Case 3:
 *   input: "first second third"
 *  output: "first SECOND third"
 */

function kungfoo(input) {
    var output = input.split(" ");
    
    output[1] = output[1].toUpperCase()
    
    console.log(output)
    return output.join(" ");
}