class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};

        for(let i = 0; i < nums.length; i++) {
            if (!hash[nums[i]]) {
                hash[nums[i]] = 0;
            }

            hash[nums[i]]++;
        }

        return Object
            .entries(hash)
            .sort((a,b) => b[1] - a[1])
            .map(c => c[0])
            .slice(0,k);
    }
}
