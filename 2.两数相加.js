/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	let i = 0;
	let carry = 0;
	let result = [];
	while (l1[i] !== undefined || l2[i] !== undefined || carry) {
		let cur = (l1[i] ?? 0) + (l2[i] ?? 0) + carry;
		let cur_res = cur % 10;
		carry = Math.floor(cur / 10);
		result.push(cur_res);
		i++;
	}
	return resut;
};
// @lc code=end

const res = addTwoNumbers([2, 4, 3], [5, 6, 4]);
console.info("🚀 ~ res:", res);
