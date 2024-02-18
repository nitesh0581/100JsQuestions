// Ques: https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function(matrix) {
    let row=matrix.length;
    let col=matrix[0].length;
    let rowFound=[];
    let colFound=[];
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(matrix[i][j]===0){
                rowFound.push(i);
                colFound.push(j);
            }
        }
    }
    //for rows
    for(let i of rowFound){
        for(let j=0; j<col; j++){
            matrix[i][j]=0;
        }
    }
    //for col
    for(let i=0; i<row; i++){
        for(let j of colFound){
            matrix[i][j]=0;
        }
    }
};