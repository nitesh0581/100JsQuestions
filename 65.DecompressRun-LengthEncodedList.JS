var decompressRLElist = function(nums) {
    let result=[];
    // let j=0;
    let i=0;
    while(i<nums.length-1){
        let freq=nums[i];
        let val=nums[i+1];
        const arr = new Array(freq).fill(val);
        // const arr = Array.from({ length: freq }, () => val);
        i=i+2;
        result=[...result,...arr];
    }
    return result;
};

//q. https://leetcode.com/problems/decompress-run-length-encoded-list/
