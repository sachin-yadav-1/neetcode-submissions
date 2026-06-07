class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let L = 0, R = s.length -1;

        while(L < R) {
            const left = s[L].toLowerCase();
            if(!this.isAlpha(left)) {
                L++;
                continue;
            }

            const right = s[R].toLowerCase();
            if(!this.isAlpha(right)) {
                R--;
                continue;
            }

            if(left !== right) return false;
            
            L++;
            R--;
        }    

        return true;
    }


    isAlpha(char) {
        return 'abcdefghijklmnopqprstuvwxyz1234567890'.includes(char);
    }
}
