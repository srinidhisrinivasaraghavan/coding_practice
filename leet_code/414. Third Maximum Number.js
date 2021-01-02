/*
414. Third Maximum Number
Easy

841

1521

Add to List

Share
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max, max2, max3;
    const map = {};
    
    for(let i = 0 ;i <nums.length; i++) {
        if(map[nums[i]]) {
            continue;
        }
        
        map[nums[i]] = true;
        if(!max || nums[i] > max) {
            max3 = max2;
            max2 = max;
            max = nums[i];
        } else if (!max2 || nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        } else if (!max3 || nums[i] > max3) {
            max3 = nums[i];
        }
    }
    
    
    return typeof max3 === "undefined" ? max :  max3;
};
