class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const hash = {};

        for(let i=0; i < nums.length; i++){
            const num = nums[i]
            if(hash[num]) hash[num]++
            else hash[num] = 1;
        }

        for(let key in hash){
            if(hash[key] > (nums.length / 2)) return key
        }

    }
}
