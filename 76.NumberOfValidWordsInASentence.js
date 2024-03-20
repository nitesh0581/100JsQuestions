var countValidWords = function(sentence) {
    const words=sentence.split(" ");
    const regex=/^[a-z]+(-[a-z]+)?[!,.]?$/;
    const regexForPunch=/^[!,.]$/;

    let result= words.reduce((count,word)=>{
        let validWord=regex.test(word) || regexForPunch.test(word);
        return validWord ? count+1 : count;
    },0)
    return result;
};
//Q: https://leetcode.com/problems/number-of-valid-words-in-a-sentence/