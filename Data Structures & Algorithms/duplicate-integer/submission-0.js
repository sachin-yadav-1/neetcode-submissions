class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length <= 1) {
            return false;
        }

        const countHash = {};

        for(let i = 0; i < nums.length; i++) {
            if(countHash[nums[i]]) {
                countHash[nums[i]] = countHash[nums[i]] + 1;
            } else {
                countHash[nums[i]] = 1;
            }
        }

        for (let key in countHash) {
            if(countHash[key] > 1) {
                return true;
            }
        }

        return false;
    }
}
