class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = -Infinity;
        let currSum = 0;

        for (let i = 0; i < nums.length; i++) {
            currSum = Math.max(currSum, 0);
            currSum += nums[i];
            maxSum = Math.max(currSum, maxSum);
        }

        return maxSum;
    }
}
