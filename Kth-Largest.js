let nums = [2,1], k = 2;
let ascend = [...nums.sort((a, b)=>{return a-b})];
let descend =  [...nums.sort((a, b)=>{return b-a})];

let res =  ( ascend[k-1] > descend[k-1] ) ? ascend[k-1] : descend[k-1];
console.log( ascend, descend, res );
