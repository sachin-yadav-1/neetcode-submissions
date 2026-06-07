class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(!s || !t) {
            return false;
        }

        if(s.length !== t.length) {
            return false;
        }

        const charHash1 = {};
        const charHash2 = {};

        for(let i = 0; i < s.length; i++) {
            if(charHash1[s[i]]) {
                charHash1[s[i]] = charHash1[s[i]] + 1;
                continue;
            } 

            charHash1[s[i]] = 1;
        }

        for(let i = 0; i < t.length; i++) {
            if(charHash2[t[i]]) {
                charHash2[t[i]] = charHash2[t[i]] + 1;
                continue;
            } 

            charHash2[t[i]] = 1;
        }

        for(let key in charHash1) {
            if(!charHash2[key] || charHash2[key] !== charHash1[key]) {
                return false;
            }
        }
        
        return true;
    }
}
