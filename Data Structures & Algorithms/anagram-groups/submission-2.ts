class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (!strs.length) return [];

        const map = new Map<string, string[]>();

        for(let i = 0; i < strs.length; i++) {
            const sorted = this.sortChars(strs[i]);
            if(!map.has(sorted)) map.set(sorted, []);
            map.get(sorted).push(strs[i]);
        }

        const res = [];
        for (const [_, value] of map) res.push(value);
        return res;
    }

    sortChars(str: string): string {
        return str.split('').sort().join();
    }
}
