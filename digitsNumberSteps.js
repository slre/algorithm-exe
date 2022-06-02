const digitSteps = ()=> {
    //var digits = '8459761203';
    //var num = '5439';
    let digits = '0123456789';
    let num = '210';
    let arr = [];
    for( let i = 0; i< num.length; i++ ){
        arr.push( digits.indexOf( num[i]) );
    }
    let count=arr[0];

    for( let i=0;i<arr.length;i++){
        if( i === arr.length-1){
            break;
        }
        else{
            count = count +  Math.abs( arr[i]-arr[i+1] ) ;
        }
    }
    return count;

}