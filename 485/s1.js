var findMaxConsecutiveOnes = function(nums) {
  var count = 0;
  var max = 0;

  if (nums.length === 0) return 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (count > max) {
        max = count
      }
      count = 0;
    } else {
      count += 1;
    }
  }

  if (count > max) {
    max = count;
  }

  return max;
}
