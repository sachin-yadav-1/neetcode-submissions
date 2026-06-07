class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = [];

        if(!strs.length) {
            return res;
        }
        if(strs.length === 1) {
            res.push([strs[0]]);
            return res;
        }

        const strHash = {};

        for(let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const sorted = str.split("").sort().join("");
            
            if(strHash[sorted]) {
                strHash[sorted].push(str);
            } else {
                strHash[sorted] = [str];
            }
        }

        return Object.values(strHash);
    }
}
