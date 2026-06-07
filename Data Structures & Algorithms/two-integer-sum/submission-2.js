class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length === 0) {
            return [];
        }

        for(let i = 0; i < nums.length; i++) {
            const val1 = nums[i];

            for(let j = Math.min(i+1, nums.length); j < nums.length; j++) {
                const val2 = nums[j];

                if( val1 + val2 === target) {
                    return [i, j];
                }
            }
        }

        return [];
    }
}
