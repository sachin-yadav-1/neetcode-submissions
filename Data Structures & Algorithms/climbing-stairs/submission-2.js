class Solution {
    /**
     * @param {number} n
     * @return {number}
     * 2
     */
    climbStairs(n) {
        const cache = {};
        
        const helper = (i) => {
            if(cache[i]) return cache[i];
            if(i > n) return 0;
            if(i === n) return 1;

            cache[i] = helper(i + 1) + helper(i + 2);
            return cache[i];
        }

        return helper(0);
    }
}
