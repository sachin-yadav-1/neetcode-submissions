class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}; // { number: indice }

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const pair = target - num;
            
            if(hash.hasOwnProperty(num)) {
                return [hash[num], i];
            } 

            hash[pair] = i;
        }

        return [-1, -1];
    }
}
