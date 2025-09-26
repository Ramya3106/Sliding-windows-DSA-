// Maximum Average Subarray I

var findMaxAverage = function(nums, k) {
    let window_sum=0;
    for(let i=0;i<k;i++){
        window_sum+=nums[i];
    }
    let max_sum=window_sum;
        for (let i = k; i < nums.length; i++) {
        window_sum = window_sum + nums[i] - nums[i - k];
        max_sum = Math.max(max_sum, window_sum);
    }
    return max_sum / k;   
};