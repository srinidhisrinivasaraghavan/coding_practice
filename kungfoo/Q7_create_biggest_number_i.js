/**
 * Title: Create Biggest Number
 *
 * Summary: Combine Array of numbers so resulting number is as large as possible.
 *
 * Difficulty: Easy
 *
 * Tags: Array
 *
 * Specification:
 *
 * input: Array of positive integers.
 * 
 * output: Integer created by sorting and combining
 *         input integers such that resulting integer
 *         is as large a possible.
 * 
 * Example:
 * [15,21] - > 2115
 * [1,5,3,10,1] -> 531110
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: [1,2,3,4,5,6,7,8,9]
 *  output: 987654321
 *
 * Test Case 2:
 *   input: [80,35,2,9,45,8]
 *  output: 988045352
 *
 * Test Case 3:
 *   input: [509,7,49,21,527,2,742]
 *  output: 774252750949221
 */

function kungfoo(input) {
    var output;
    
    input.sort((function(a,b){
        var res = 0;
         if (b.toString() + a.toString() > a.toString() + b.toString())
            res = 1;
        else 
            res = -1;
    
        return res
    }));
    
    console.log(input);
    output = parseInt(input.join(""));
    
    return output;
}