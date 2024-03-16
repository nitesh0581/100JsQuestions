var countMatches = function(items, ruleKey, ruleValue) {
    let index=-1;
    if(ruleKey=="type"){
        index=0;
    }else if(ruleKey=="color"){
        index=1;
    }else{
        index=2;
    }
    const result=items.filter((elem)=>elem[index]==ruleValue);
    return result.length;
};
//Q: https://leetcode.com/problems/count-items-matching-a-rule/