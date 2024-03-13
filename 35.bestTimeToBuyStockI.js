var maxProfit = function(prices) {
    let minNum=prices[0];
    let maxProfit=0;
    for(i of prices){
        minNum=Math.min(minNum,prices[i]);
        maxProfit=Math.max(prices[i]-minNum,maxProfit);
    } 
    return maxProfit;
};
