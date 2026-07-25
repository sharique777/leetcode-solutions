/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let occu = [0, 0, 0];
    for (let x of nums) {
      occu[x]++;
    }
    let idx = 0;
    for (let i = 0; i < occu.length; i++) {
      for (let j = 0; j < occu[i]; j++) {
        nums[idx++] = i;
      }
    }
};
