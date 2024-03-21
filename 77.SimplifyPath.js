var simplifyPath = function(path) {
    const stack=[];
    const directories=path.split("/");
    for(dir of directories){
        if(dir=='.' || dir==''){
            continue;
        }else if(dir=='..'){    
                stack.pop();
        }else{
            stack.push(dir);
        }
    }
    return '/'+stack.join('/');
};
//Q: https://leetcode.com/problems/simplify-path/