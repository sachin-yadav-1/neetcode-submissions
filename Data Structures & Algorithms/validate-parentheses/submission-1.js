class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length === 0) {
            return false;
        }

        const stack = [];
        const closeToOpen = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for(let char of s) {
            if(!closeToOpen[char]) {
                stack.push(char);
                continue;
            }

            if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop();
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}

// "[(])"