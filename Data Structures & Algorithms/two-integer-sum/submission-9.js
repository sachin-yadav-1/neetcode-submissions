class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(!nums.length) return [null, null];

        const hash = new Map();

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if(hash.has(nums[i])) {
                return [hash.get(nums[i]), i];
            } else {
                hash.set(diff, i);
            }
            // if(hash.hasOwnProperty([nums[i]])) {
            //     return [hash[nums[i]], i];
            // } else {
            //     hash[diff] = i;
            // }
        }

        return [null, null];
    }
}
