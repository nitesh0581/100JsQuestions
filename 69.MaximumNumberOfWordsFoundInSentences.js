var mostWordsFound = function(sentences) {
    let maxWords=0;
    for(i of sentences){
        maxWords=Math.max(maxWords,i.split(" ").length);
    }
    return maxWords;
};
//Q: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/