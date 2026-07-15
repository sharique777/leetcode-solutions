/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let max = Math.max(nums1.length - m, nums2.length - n);

    for (let i = 0; i < max; i++) {
        if (nums1.length > m) nums1.pop();
        if (nums2.length > n) nums2.pop();
    }

    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};