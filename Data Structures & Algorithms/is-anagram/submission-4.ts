class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s?.length !== t?.length) return false;

        // const s_freq = new Map<string, number>();
        // const t_freq = new Map<string, number>();

        // for(let i = 0; i < s.length; i++) {
        //     s_freq.set(s[i], (s_freq.get(s[i]) || 0) + 1);
        //     t_freq.set(t[i], (t_freq.get(t[i]) || 0) + 1);
        // }

        // for (const key of s_freq.keys()) {
        //     if(s_freq.get(key) !== t_freq.get(key)) return false;
        // }

        // return true;

        // Since we have constraint that s and t will consist of lowercase 
        // english letters only, following is more optimised.
        
        const count = new Int16Array(26);

        for(let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }

        return count.every(s => s === 0);
    }
}
