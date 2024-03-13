var sumIndicesWithKSetBits = function(nums, k) {
    let sum=0;
    for(let i=0; i<nums.length; i++){
        let base2=i.toString(2);
        let count=0;
        for(let j=0; j<base2.length; j++){
            if(base2[j]==1){
                count++;
            }
        }
        if(count==k){
            sum+=nums[i];
        }
    }
    return sum;
}; 