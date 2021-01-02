/*409. Longest Palindrome
Easy

1386

95

Add to List

Share
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Example 3:

Input: s = "bb"
Output: 2
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = {};
    for(let i = 0; i< s.length; i++) {
        if(map[s[i]]){
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    
    let isOdd = false;
    let length = 0;
    
    Object.keys(map).forEach((key) => {
        if(map[key] % 2 === 0) {
            length += map[key];
        } else {
            isOdd = true;
            length += (map[key] - 1);
        }
    });
    
    if(isOdd) {
        length++;
    }
    
    return length;
};
