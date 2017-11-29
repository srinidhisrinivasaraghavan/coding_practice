/**
 * Title: Don't Tell Fibs
 *
 * Summary: This is a puzzle challenge.
 *
 * Difficulty: Easy
 *
 * Tags: Puzzle
 *
 * Specification:
 *
 * Puzzle challenges have no specifications. Solve
 * this challenge by examining the test cases.
 * 
 * Good Luck!
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: 8
 *  output: 21
 *
 * Test Case 2:
 *   input: 21
 *  output: 10946
 *
 * Test Case 3:
 *   input: 12
 *  output: 144
 *
 * [open any solution to see all test cases]
 */

function kungfoo(input) {
    var output;
    
    if(input === 0) {
        return input;
    } 
    
    if(input <= 2) {
        return 1;
    }
    
    
    var fib = [0, 1, 1];
    for(var i=3; i<=input; i++) {
        var curr = fib[i-1] + fib[i-2];
        fib.push(curr)
    }
    
    return fib[fib.length-1]
}