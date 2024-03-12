1365. How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function(nums) {
    const result=[];
    for(let i=0;i<nums.length;i++){
        let count=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
        result.push(count);
    }
    return result;
};