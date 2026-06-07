class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length === 0) return 0;

        let k = 1;
        let last_uniq_idx = 0;

        for(let i = 1; i < nums.length; i++) {
            if(nums[i] !== nums[i-1]) {
                nums[last_uniq_idx + 1] = nums[i];
                k++;
                last_uniq_idx++;
            }
        }

        return k;
    }
}
