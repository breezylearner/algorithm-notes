/* 分支法:让数组内链表,两个为一组进行升序合并,直到数组合并完为止.
  提示:链表已升序排列,代表只要保证后每个节点指向的值都比自身大,只要比较表头,就能得到新的圣墟链表
*/

// 设置合并两链表的函数
function mergeTwoLists(l1, l2) {
  const dummyHead = {}; //两链表合成结果
  let current = dummyHead; //设置存储链表值的变量,方便后面存取与指向
  // l1: 1 -> 3 -> 5
  // l2: 2 -> 4 -> 6
  while (l1 !== null && l2 !== null) {
    //当两链表不为空时执行
    // 知识点:链表只能从表头进行判断,所以此处的l1.val(l2.val),都是该表的表头存储的数据.
    if (l1.val < l2.val) {
      current.next = l1; // 把小的添加到结果链表
      current = current.next; // 移动结果链表的指针,将小的移动到前面
      l1 = l1.next; // 移动小的那个链表的指针,从l1之后的值开始比较
    } else {
      current.next = l2;
      current = current.next;
      l2 = l2.next;
    }
  }
  // 结束条件:当指向的值为null时.该链表已遍历完,留下的就是剩下链表的唯一值
  if (l1 === null) {
    current.next = l2;
  } else {
    current.next = l1;
  }
  return dummyHead.next; //前面已全部匹配完,让指针指向null,返回结果并跳出
}

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

var mergeKLists = function (lists) {
  if (lists.length === 0) return null; //当数组长度为空，说明数组不存在，返回null
  if (lists.length === 1) return lists[0]; //数组长度为1，唯一存在的链表就是h结果。
  if (lists.length === 2) {
    //当数组为2,调用分支函数
    return mergeTwoLists(lists[0], lists[1]);
  }

  // 使用位移进行索引,为lists分为两部分,生成链表数组
  const mid = lists.length >> 1;
  const l1 = [];
  for (let i = 0; i < mid; i++) {
    l1[i] = lists[i];
  }

  const l2 = [];
  for (let i = mid, j = 0; i < lists.length; i++, j++) {
    l2[j] = lists[i];
  }
  // 使用递归,进行分支合并
  return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));
};
