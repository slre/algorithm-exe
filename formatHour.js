
var s = '12:40:22AM';


function timeConversion(s) {
    let tmpArr = [];
    // Write your code here
    tmpArr = s.split(':');
    switch( tmpArr[2].slice(-2) ){
        case 'AM':
            tmpArr[0] = ( tmpArr[0] === '12' ) ? '00' : tmpArr[0];
        break;
        case 'PM':
            tmpArr[0] = ( tmpArr[0] !== '12' ) ?parseInt( tmpArr[0] ) + 12 : tmpArr[0];
        break;    
    }
    tmpArr[2]= tmpArr[2].slice(0, 2);
    return tmpArr.join(':');

}

timeConversion(s);
