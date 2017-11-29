/**
 * Title: Reverse Sort
 *
 * Summary: Use array sort method to sort array in descending order.
 *
 * Difficulty: Foundation
 *
 * Tags: Array, Sort
 *
 * Specification:
 *
 * To complete this kungfoo() use the array sort function
 * to sort the input array in descending order.
 * 
 * If you need help with array sort see:
 * http://www.w3schools.com/jsref/jsref_sort.asp
 * 
 * input: Array of integers.
 * 
 * output: Array of input integers sorted in descending
 *         order (largest to smallest).
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: [1,2,3]
 *  output: [3,2,1]
 *
 * Test Case 2:
 *   input: [6,2,7,1,5,8]
 *  output: [8,7,6,5,2,1]
 *
 * Test Case 3:
 *   input: [93,27,95,55,26,69,26,49,28,39,48]
 *  output: [95,93,69,55,49,48,39,28,27,26,26]
 */


function kungfoo(input) {
    function reverse(a, b) {
        if(a<b) return 1;
        if(a>b) return -1;
        return 0;
    }
    var output = input.sort(reverse);
    console.log(output);
    
    return output;
}

kungfoo([93,27,95,55,26,69,26,49,28,39,48]);
