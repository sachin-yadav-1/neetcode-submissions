class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length);
        const suffix = new Array(nums.length);
        const res = new Array(nums.length);

        prefix[0] = 1;
        suffix[nums.length - 1] = 1;

        for(let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i-1] * prefix[i-1];
        }

        for(let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i+1] * nums[i+1];
        }

        for(let i = 0; i < res.length; i++) {
            res[i] = prefix[i] * suffix[i];
        }
        
        return res;
    }
}
