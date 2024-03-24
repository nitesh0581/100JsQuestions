var fib = function(n) {
    if(mem[n]!=undefined){
        return mem[n];
    }
    return mem[n]=fib(n-1)+fib(n-2);
};
//Q: https://leetcode.com/problems/fibonacci-number/ 