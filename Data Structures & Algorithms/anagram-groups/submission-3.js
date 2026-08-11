class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {};

        for(let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const sorted = str.toLowerCase().split('').sort().join('');
            
            if(hash[sorted]) {
                hash[sorted].push(str);
                continue;
            }

            hash[sorted] = [str];
        }

        return Object.values(hash);
    }
}
