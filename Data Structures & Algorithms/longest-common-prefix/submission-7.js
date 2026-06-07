class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const first = strs[0];
        let pre_len = first.length;

        for(let i = 0; i < first.length; i++) {
            let no_match_found = false;

            for(let j = 1; j < strs.length; j++) {
                no_match_found = strs[j][i] !== first[i];
                if(no_match_found) {
                    pre_len = i;
                    break;
                }
            }

            if(no_match_found) break;

        }

        return first.slice(0, pre_len);
    }

}
