class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        if(nums.length === 0) {
            return nums;
        };
        
        const len = nums.length;
        const ans = new Array(2*len).fill(0);

        for( let i = 0; i < len; i++) {
            ans[i] = nums[i];
            ans[i+len] = nums[i];
        }

        return ans;
    }
}
