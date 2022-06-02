var ops = [ '5','2','C','D','+'];
//var ops = [ '5','-2','4','C','D','9','+','+' ];
var tmpScore=[];
var opsln = ops.length;
for(let i = 0; i< ops.length;i++ ){
    if( isNaN( parseInt(ops[i])) === true ){
       if( ops[i]==='C' ){
           tmpScore.pop();
       }
        else if(ops[i]==='D' ){
            tmpScore.push(tmpScore[ tmpScore.length -1 ]*2);
        }
        else if(ops[i]==='+' ){
            var last = tmpScore[ tmpScore.length -1 ];
            var plast = tmpScore[ tmpScore.length -2 ];
            console.log(last,plast);
            tmpScore.push((last)+(plast));
        }
    }
    else{
        tmpScore.push(parseInt(ops[i]));
    }   
}
var result = tmpScore.reduce((p,acc)=>p+acc,0);
console.log(result);
