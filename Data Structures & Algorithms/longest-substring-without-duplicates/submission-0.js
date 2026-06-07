class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let chars = new Set();
        let len = 0;
        let L = 0;
        let R = 0

        for(; R < s.length; R++) {
            while(chars.has(s[R])) {
                chars.delete(s[L]);
                L++;
            }
            
            chars.add(s[R]);
            len = Math.max(len, R - L + 1);
        }

        return len;
    }
}
