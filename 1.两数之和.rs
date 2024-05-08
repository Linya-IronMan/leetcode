/*
 * @lc app=leetcode.cn id=1 lang=rust
 *
 * [1] 两数之和
 */

// @lc code=start
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        for (index, item) in nums.iter().enumerate() {
            let cur = nums[index];
            if let Some(pos) = nums[index + 1..].iter().position(|&it| it == target - cur) {
                return [index as i32, (index + 1 + pos) as i32].to_vec();
            }
        }
        vec![]
    }
}
// @lc code=end
