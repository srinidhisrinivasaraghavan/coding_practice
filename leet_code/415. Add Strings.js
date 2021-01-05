/*415. Add Strings
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = "";
    
    while( i >= 0 || j>=0 || carry) {
        let number1 = i < 0 ? 0 : parseInt(num1.charAt(i));
        let number2 = j < 0 ? 0 : parseInt(num2.charAt(j));
        let addition = number1 + number2 + carry;
        
        console.log(number1, number2, addition)
        
        sum = (addition % 10) + sum;
        carry = Math.floor(addition / 10);
        i--;
        j--;
    }
    
    return sum;
};
