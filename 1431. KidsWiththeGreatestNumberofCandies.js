var kidsWithCandies = function(candies, extraCandies) {
    let max=Math.max(...candies);
    const result=[];
    for(i of candies){
        if((i+extraCandies)>=max){
            result.push(true);
        }else{
            result.push(false);
        }
    }
    return result;
};

//Q: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/ 