var isHappy = function(n) {
    const map={};
        while(n!=1 && !map[n]){
            map[n]=true;
            let sum=0;
                while(n!=0){
                let rem=n%10;
                sum+=rem*rem;
                n=Math.floor(n/10);
                }
            n=sum;
        }
        return n==1;
};
//Q: https://leetcode.com/problems/happy-number