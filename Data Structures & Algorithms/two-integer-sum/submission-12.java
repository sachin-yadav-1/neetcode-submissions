class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hash = new HashMap<>();

        for(int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int pair = target - num;

            if(hash.containsKey(num)) {
                return new int[]{hash.get(num), i};
            }

            hash.put(pair, i);
        }

        return new int[]{-1,-1};
    }
}
