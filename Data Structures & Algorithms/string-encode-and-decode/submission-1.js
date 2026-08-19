class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for(let i = 0; i < strs.length; i++) {
            res += `${strs[i].length}#${strs[i]}`;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            decoded.push(str.substring(i, i + length));
            i += length;
        }

        return decoded;
    }
}
