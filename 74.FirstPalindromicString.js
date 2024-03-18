//Q: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

var firstPalindrome = function(words) {
    for(i of words){
        if(isPalin(i)){
            return i;
        }
    }
    return "";
};
function isPalin(str){
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i]!=str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}