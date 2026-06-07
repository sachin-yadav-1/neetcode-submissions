class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        
        if(!nums?.length) return false;

        const freq = new Set<number>();

        for(let i = 0; i < nums.length; i++) {
            if(freq.has(nums[i])) return true;
            freq.add(nums[i]);
        }

        return false;

    }
}
