/**
 * Title: Pythagorean Theorem
 *
 * Summary: Use Math object to compute Pythagorean theorem.
 *
 * Difficulty: Foundation
 *
 * Tags: Math, Object
 *
 * Specification:
 *
 * Use the Math object to compute the length of the
 * hypotenuse of a right angle triangle. Round the
 * answer to the nearest integer value.
 * 
 * Help with the Math object:
 * http://www.w3schools.com/jsref/jsref_obj_math.asp
 * 
 * input: Object with side a and b values of a right
 *        angle triangle.
 * 
 * output: Integer length of hypotenuse, side c, rounded to
 *         the nearest integer value.
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: { a: 50, b: 20 }
 *  output: 54
 *
 * Test Case 2:
 *   input: { a: 34, b: 82 }
 *  output: 89
 *
 * Test Case 3:
 *   input: { a: 76, b: 97 }
 *  output: 123
 */

function kungfoo(input) {
    var output = Math.round(Math.sqrt(input.a * input.a + input.b * input.b));
    
    
    
    return output;
}