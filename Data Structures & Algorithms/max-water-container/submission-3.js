class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L = 0, R = heights.length - 1;
        let maxWater = 0;

        while(L < R) {
            let newMax = (R - L) * Math.min(heights[R], heights[L]);
            maxWater = Math.max(maxWater, newMax);

            if(heights[L] < heights[R] ) {
                L++;
            } else {
                R--;
            }
        }
        
        return maxWater;
    }
}
