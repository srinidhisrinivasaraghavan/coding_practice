/*
14. Longest Common Prefix
Easy

3467

2062

Add to List

Share
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

const intersect = (prefix, current) => {
    let result = prefix;
    
    while(result.length > 0) {
        if(current.indexOf(result) === 0) {
            return result;
        } else {
            result = result.slice(0, result.length-1);
        }
    }
    
    return result;
    
}

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return "";
    }
    
    let prefix = strs[0];
    
    for(let i = 1; i < strs.length; i++) {
        prefix = intersect(prefix, strs[i]);
        
        if(prefix.length === 0) {
            return prefix;
        }
        
    }
    
    return prefix;
};
