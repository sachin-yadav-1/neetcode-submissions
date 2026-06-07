class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            const match = target - nums[i];

            if(map.has(match)) {
                return [map.get(match), i];
            }

            map.set(nums[i], i);
        }

        return [];
    }
}
