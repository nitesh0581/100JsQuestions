var maximumWealth = function(accounts) {
    let max=0;
    for(let i=0;i<accounts.length; i++){
            let sum=0;
        for(let j=0;j<accounts[0].length;j++){
            sum+=accounts[i][j];
        }
        if(sum>max){
            max=sum;
        }
    }
    return max; 
};
//q: https://leetcode.com/problems/richest-customer-wealth/  