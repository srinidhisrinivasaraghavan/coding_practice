/**
 * Title: Find Common Array Elements
 *
 * Summary: Given two arrays, find all integers that appear in both arrays.
 *
 * Difficulty: Easy
 *
 * Tags: Search, Array
 *
 * Specification:
 *
 * input is of the form [[a1,a2,...,aX],[b1,b2,...,bY]] 
 * where all array elements are integers. Note, there may
 * be duplicates within the a or b arrays.
 * 
 * output must be a sorted array of unique integers,
 * [c1,c2,...,cZ], where an integer only appears in the 
 * c array if it appears in both the a and b arrays.
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input: [[1,4,12,3],[8,2,9,4,3,1]]
 *  output: [1,3,4]
 *
 * Test Case 2:
 *   input: [[12,3],[8,2,9,4,1]]
 *  output: []
 *
 * Test Case 3:
 *   input: [[8,2,9,4,1],[1,2,8,4,9]]
 *  output: [1,2,4,8,9]
 *
 * [open any solution to see all test cases]
 */

function kungfoo(input) {
    var arr1 = input[0];
    var arr2 = input[1];

    if(arr1.length > arr2.length) {
        arr1 = input[1];
        arr2 = input[0];
    }

    var output = [];

    for(var i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i]) > -1 && output.indexOf(arr1[i]) < 0) {
            output.push(arr1[i]);
        }
    }
    
    
    
    
    return output.sort();
}