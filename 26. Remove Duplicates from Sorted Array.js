/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let uniqueElements = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[uniqueElements] = nums[i];
            uniqueElements++;
        }
    }
    return { uniqueElements, nums };
};
console.log(removeDuplicates([1, 1, 2]));
