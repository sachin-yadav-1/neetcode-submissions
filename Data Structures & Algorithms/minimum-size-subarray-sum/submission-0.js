class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum = 0;
        let len = Infinity;
        let L = 0

        for(let R = 0; R < nums.length; R++) {
            sum += nums[R];

            while(sum >= target) {
                len = Math.min(len, R-L+1);
                sum -= nums[L];
                L++;
            }
        }

        return len === Infinity ? 0 : len;
    }
}
