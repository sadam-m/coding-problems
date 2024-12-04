
var productExceptSelf = function(nums) {
    
    const prefixArray=[];

    const suffixArray=[];

    let prefixProduct=1;
    let suffixProduct=1;
    
    for(let ind=0;ind<nums.length;ind++){

        if(ind==0){
            prefixArray[0]=prefixProduct;
        }
        else{
            prefixProduct*=nums[ind-1];
            prefixArray[ind]=prefixProduct;
        }
    }
    for(let ind=nums.length-1;ind>=0;ind--){

        if(ind==nums.length-1){
            suffixArray[ind]=1;
        }
        else{
            suffixProduct*=nums[ind+1];
            suffixArray[ind]=suffixProduct;
        }
    }
    let result=[];

    for(let j=0;j<prefixArray.length;j++){

        result[j]=(prefixArray[j]*suffixArray[j]);
    }

    return result;
};