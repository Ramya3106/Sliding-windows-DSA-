// Max Consecutive Ones III

var longestOnes = function(nums, k) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        let windowLen = right - left + 1;
        if (windowLen > maxLen) {
            maxLen = windowLen;
        }
    }
    return maxLen;
};