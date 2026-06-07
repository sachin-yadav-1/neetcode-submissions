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

        const indicesHash = {};

        for(let i = 0; i < nums.length; i++) {
            indicesHash[nums[i]] = i;
        }



        for(let i = 0; i < nums.length; i++) {
           const diff = target - nums[i];

           if(indicesHash[diff] !== undefined && indicesHash[diff] !== i) {
                return [i, indicesHash[diff]]; 
            }
        }

        return [];
    }
}
