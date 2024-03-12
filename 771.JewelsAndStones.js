
var numJewelsInStones = function(jewels, stones) {
    jewels=jewels.split("");
    let count=0;
    for(i of stones){
        if(jewels.includes(i)){
            count++;
        }
    }
    return count;
};