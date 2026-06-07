class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums.length) return false;

        const valHash = {};

        for(let i = 0; i < nums.length; i++) {
            if(valHash[nums[i]]) {
                return true;
            }

            valHash[nums[i]] = true;
        }

        return false;
    }
}
