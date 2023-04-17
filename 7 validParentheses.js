
/*
20. Valid Parentheses
Easy
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:

Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    Example 1:
Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false
*/


function isValid(brackets) {

    var closedToOpened = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    var stack = []
    var opened = Object.values(closedToOpened);

    for (let i = 0; i < brackets.length; i++) {
        if (opened.includes(brackets[i])) {
            stack.push(brackets[i])
        } else {
            var last = stack[stack.length - 1];

            if (last !== closedToOpened[brackets[i]]) {
                return false
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}


console.log(isValid('({})')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false