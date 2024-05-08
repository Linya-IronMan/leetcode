/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const anotherIndex = nums.indexOf(target - cur)
        ;if (anotherIndex !== -1 && anotherIndex !== i) return [i, anotherIndex] 
    }
    return []
};
// @lc code=end

