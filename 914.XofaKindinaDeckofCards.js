var hasGroupsSizeX = function(deck) {
    const map={};
    for(i of deck){
        if(!map[i]){
            map[i]=1;
        }else{
            map[i]++;
        }
    }
    let arr=Object.values(map);
    let minValue=Math.min.apply(0,arr);
    if(minValue<2){
        return false;
    }

    for(let i=minValue; i>=2; i--){
        let find=true;
            for(let j=0; j<arr.length; j++){
                if(arr[j]%i!=0){
                    find=false;
                    break;
                }
            }
            if(find){
               return true
            }
    }
    return false;
};