var restoreString = function(s, indices) {
    const result=[];
    for(let i=0; i<indices.length; i++){
        result[indices[i]]=s[i];
    }
    return result.join("");
};

//Q: https://leetcode.com/problems/shuffle-string/