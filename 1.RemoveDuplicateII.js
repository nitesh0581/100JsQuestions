var removeDuplicates = function(nums) {
    let n=nums.length;
    let j=2;
    //we need to check element should not occur more than 2 times so we will start from i=2 bcoz i=0 & i=1 can be same or diff (there count is not more than 2)
    for(let i=2; i<n; i++){
        //if they are not equal means they are diff vales in this case we will do nothing & just put that element
        if(nums[i]!==nums[j-2]){
            //nums[j-2]bcoz we will check in modifying array not in orignal one bcoz there we need to maintain the count
            nums[j++]=nums[i];
        }
        // console.log(nums);
    }
    return j;
}
//Q: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/ 