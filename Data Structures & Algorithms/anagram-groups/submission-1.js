class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};

        for(let i = 0; i < strs.length; i++) {
            const counts = new Array(26).fill(0);
            const str = strs[i];

            for(let j = 0; j< str.length; j++) {
                counts[str.charCodeAt(j) - 'a'.charCodeAt(0)]++;
            }
            
            const key = counts.join(',');
            if(!anagrams[key]) {
                anagrams[key] = [];
            }

            anagrams[key].push(str);
        }

        return Object.values(anagrams);
    }
}
