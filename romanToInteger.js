/**
 * @param {string} s
 * @return {number}
 */
 //XXXX
 var romanToInt = function(s) {
    let result=0;
    for(let i=0; i<s.length; i++){
        if(s.charAt(i)==='I'){
            if(s.charAt(i+1)==='V'){
                result+=4;
                i=i+1;
            }else if(s.charAt(i+1)==='X'){
                result+=9;
                i=i+1;
            }else{
                result+=1;
            }
        }else if(s.charAt(i)==='X'){
            if(s.charAt(i+1)==='L'){
                result+=40;
                i=i+1;
            }else if(s.charAt(i+1)==='C'){
                result+=90;
                i=i+1;
            }else{
                result+=10;
            }           
        }else if(s.charAt(i)==='C'){
            if(s.charAt(i+1)==='D'){
                result+=400;
                i=i+1;
            }else if(s.charAt(i+1)==='M'){
                result+=900;
                i=i+1;
            }else{
                result+=100;
            }
        }else if(s.charAt(i)==='L'){
            result+=50;
        }else if(s.charAt(i)==='D'){
            result+=500;
        }else if(s.charAt(i)==='M'){
            result+=1000;
        }else if(s.charAt(i)==='V'){
            result+=5;
        }
    }
    return result;
};