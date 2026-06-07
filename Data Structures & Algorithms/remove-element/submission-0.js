class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if(nums.length <= 1) {
            return 0;
        }

        let swap_count = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                const temp = nums[i];
                nums[i] = nums[swap_count];
                nums[swap_count] = temp;
                swap_count++;
            }
        }

        return swap_count;
    }
}
