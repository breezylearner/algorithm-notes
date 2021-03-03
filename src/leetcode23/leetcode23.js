/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/*
思路（暴力解法）：将列表转换成数组，在对数组进行排序，再将排列好的数组拼接成链表
    暴力求解未必最复杂，关键是如何解决暴力解法中的困难点
解答：
	1.利用js中的reduce，将多维数组转换成一维。参考：https://www.jianshu.com/p/e375ba1cfc47
	2.数组sort进行排序。
	3.利用迭代将已排序的数组拼接成链表
*/

var mergeKLists = function (lists) {
  return lists
    .reduce((p, n) => {
      while (n) {
        p.push(n), (n = n.next);
      }
      return p;
    }, [])
    .sort((a, b) => a.val - b.val)
    .reduceRight((p, n) => ((n.next = p), (p = n), p), null);
};

// 时间复杂度：O(N) 空间复杂度：O(N)
