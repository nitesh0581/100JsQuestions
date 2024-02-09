class Solution {
    //Function to find if there exists a triplet in the 
    //array A[] which sums up to X.
    find3Numbers(A, n, X)
    {
        A.sort((a,b)=>a-b);
        
        for(let i=0; i<n-2; i++){
            let l=i+1;
            let r=n-1;
            while(l<r){
                if(A[i]+A[l]+A[r]===X){
                    return true;
                }else if(A[i]+A[l]+A[r]<X){
                    l++;
                }else{
                    r--;
                }
            }
        }
        return false;
    }
    
    
    
    
}