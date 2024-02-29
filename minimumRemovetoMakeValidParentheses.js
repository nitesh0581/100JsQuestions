var minRemoveToMakeValid = function(s) {
    const stack=[];
    let ansStr=s.split("");
    for(let i=0; i<s.length; i++){
        if(s[i]=='('){
            stack.push(i);
        }else if(s[i]==')'){
            if(stack.length!=0){
               stack.pop();
            }else{
                ansStr[i]="";
            }
        }
    }
    for(let i=0; i<stack.length; i++){
        let ind=stack[i];
        ansStr[ind]="";
    }
    return ansStr.join("");
}; 