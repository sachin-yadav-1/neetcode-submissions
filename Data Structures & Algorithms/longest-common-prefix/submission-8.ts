class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let prefix = strs[0];

        for(let i = 1; i < strs.length; i++) {
            const curr = strs[i];

            let j = 0;
            const max =  Math.min(prefix.length, curr.length)

            while (j < max) {
                if(prefix[j] !== curr[j]) {
                    break;
                }

                j++;
            }

            prefix = prefix.slice(0, j);
        }

        return prefix;
    }
}
