var interpret = function(command) {
    let str='';
    let n=command.length;
    let i=0;
    while(i<n){
        if(command[i]=='G'){
            str=str+'G';
            i++;
        }else if(command[i]=='('){
            if(command[i+1]==')'){
                str=str+'o';
                i=i+2;
            }else if(command[i+1]=='a'){
                str=str+'al';
                i=i+4;
            }
        }
        console.log(str);
    }
    return str;
};