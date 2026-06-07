class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxWater = 0;

        if(height.length <= 1) {
            return maxWater;
        }
        

        for(let i = 0; i < height.length; i++) {
            let leftMax = height[i];
            let rightMax = height[i];

            for(let j = 0; j < i; j++) {
                leftMax = Math.max(leftMax, height[j]);
            }
            for(let j = i+ 1; j < height.length; j++) {
                rightMax = Math.max(rightMax, height[j]);
            }

            maxWater += Math.min(leftMax, rightMax) - height[i];
        }

        return maxWater;
    }
}