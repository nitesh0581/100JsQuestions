var lengthOfLongestSubstring = function(s) {

    const set=new Set();
    let count=0;
    let maxCount=0;
    for(let i=0; i<s.length; i++){
        for(let j=i; j<s.length; j++){
            if(set.has(s[j])){
                set.clear();
                count=0;
                break;
            }else{
                set.add(s[j]);
                count++;
                if(count>maxCount){
                    maxCount=count;
                }
            }
        }
    }
    return maxCount;
};