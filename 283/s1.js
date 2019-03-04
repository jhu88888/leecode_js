/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var len = nums.length;
  var temp_arr = [];
  var res = [];
  
  for(var i = 0; i < len; i++) {
      if (nums[i] !== 0) {
          temp_arr.push(nums[i])
      }
  }
  

  for(var i = 0; i <= len - temp_arr.length; i++) {
      temp_arr.push(0)
  };
  
  temp_arr.forEach(num => {
      console.log(num)
      res.push(num)
  })
  
  return res;
};