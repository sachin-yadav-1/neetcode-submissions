class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        let zero_ct = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) zero_ct++;
            else prod *= nums[i];
        }

        if (zero_ct > 1) {
            return new Array(nums.length).fill(0);
        }

        const res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (zero_ct > 0) {
                res[i] = nums[i] === 0 ? prod : 0
                continue;
            }

            res[i] = prod / nums[i];
        }

        return res;
    }
}
