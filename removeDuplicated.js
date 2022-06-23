//Input: nums = [0,0,1,1,1,2,2,3,3,4]
//Output: 5, nums = [0,1,2,3,4,_,_,_,_,_];

const removeDuplicates = (nums) => {
    let tmp=[];
    let underscore = [];
    nums.forEach( (el,idx)=>{
        if ( tmp.indexOf( el ) ===-1 ){
            tmp.push(el);
        }
        else{
            underscore.push('_');
        }
    });

    return [...tmp,...underscore];
    
    
};

let nums =[1,1,2]; //[0,0,1,1,1,2,2,3,3,4];

removeDuplicates(nums);
