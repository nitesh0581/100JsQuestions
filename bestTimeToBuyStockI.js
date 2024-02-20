var maxProfit = function(prices) {
    let minNum=prices[0];
    let maxProfit=0;
    for(i of prices){
        minNum=Math.min(minNum,prices[i]);
        maxProfit=Math.max(prices[i]-minNum,maxProfit);
    } 
    return maxProfit;
};
// prices=[7,1,5,3,6,4]
// min-7 =>7,1,1,1,1,1
// max-0 =>0,0,4,4,5,5