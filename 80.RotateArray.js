var rotate = function(nums, k) {
    let i=0, r=nums.length-1;
    k=k%nums.length;
    reverse(nums,i,r);
    reverse(nums,0,k-1);
    reverse(nums,k,r);

};
function reverse(nums,i,j){
    while(i<j){
        let temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
        i++;
        j--;
    }
}
// Q: https://leetcode.com/problems/rotate-array/description/