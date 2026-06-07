class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const size = nums.length;

        if(size === 0) {
            return [];
        }

        const ans = new Array(size);

        for(let i = 0; i < size; i++) {
            ans[i] = nums[i];
            ans[i + size] = nums[i];
        }

        return ans;
    }
}
