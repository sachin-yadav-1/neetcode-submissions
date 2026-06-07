class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (
            !s.length || 
            !t.length || 
            (s.length !== t.length)
        ) return false;

        const sCharHash = {};
        const tCharHash = {};

        for(let i = 0; i < s.length; i++) {
            const char = s[i];

            if(sCharHash[char]) sCharHash[char] += 1;
            else sCharHash[char] = 1;
        }

        for(let i = 0; i < t.length; i++) {
            const char = t[i];

            if(tCharHash[char]) tCharHash[char] += 1;
            else tCharHash[char] = 1;
        }

        for(let key in sCharHash) {
            if(tCharHash[key] !== sCharHash[key]) {
                return false;
            }
        }

        return true;
    }
}
