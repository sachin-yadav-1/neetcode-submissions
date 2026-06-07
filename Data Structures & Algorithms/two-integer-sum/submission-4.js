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

        const sort = [];

        for(let i = 0; i < nums.length; i++) {
            sort.push([nums[i], i]);
        }

        sort.sort((a, b) => a[0] - b[0]);

        let i = 0, j = nums.length - 1;

        while(i < j) {
            const sum = sort[i][0] + sort[j][0];
            
            if(sum === target) {
                return [
                    Math.min(sort[i][1], sort[j][1]),
                    Math.max(sort[i][1], sort[j][1])
                ]
            } else if(sum < target) {
                i++;
            } else {
                j--;
            }
        }

        return [];
    }
}
