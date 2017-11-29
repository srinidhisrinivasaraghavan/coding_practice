/**
 * Title: Encode Repeats
 *
 * Summary: Replace repeated letters in a string with the letter count.
 *
 * Difficulty: Easy
 *
 * Tags: String
 *
 * Specification:
 *
 * Replace consecutive repeated letters in a string with 
 * the count of the repeated letters. Only perform a 
 * replacement when the total number of characters would 
 * be reduced.
 * 
 * For Example:
 * "abc" => "abc"
 * "abbbc" => "ab2c"
 * "abbc" => "abbc"
 * "acccccbacccb" => "ac4bac2b"
 * 
 * input: String of only lower case letters.
 * 
 * output: String with repeated letters encoded.
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: "aaa"
 *  output: "a2"
 *
 * Test Case 2:
 *   input: "asaddafgggagggghjkl"
 *  output: "asaddafg2ag3hjkl"
 *
 * Test Case 3:
 *   input: "qweerdddddddddddddddddddtyuioooop"
 *  output: "qweerd18tyuio3p"
 *
 * [open any solution to see all test cases]
 */

function kungfoo(input) {
    var output = [];
    
    for(var i = 0; i < input.length; i++) {
        output.push(input[i]);
        var count = getCount(input, input[i], i+1);
        
        if(count >= 2) {
            output.push(count);
            i+=count;
        }
    }
    
    console.log(output);
    return output.join("");
}

function getCount(arr, item, index) {
    var count = 0;
    for(var i = index; i<arr.length; i++) {
        if(arr[i] === item) {
            count +=1;
        } else {
            break;
        }
    }
    
    return count;
}