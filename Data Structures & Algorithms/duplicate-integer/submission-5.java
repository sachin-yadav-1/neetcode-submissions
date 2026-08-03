// import java.util.HashSet;
// import java.util.Set;

class Solution {
    public boolean hasDuplicate(int[] nums) {
        if (nums == null || nums.length == 0) {
            return false;
        }

        Set<Integer> seen = new HashSet<>();

        for( int i = 0; i < nums.length; i++) {
            if(seen.contains(nums[i])) {
                return true;
            }

            seen.add(nums[i]);
        }

        return false;
    }
}