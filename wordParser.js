
let str = "Creativity is thinking-up new things. Innovation is doing new things!";
function wordParser( str ){
    let arr = str.split(' ');
    let result = '';
    arr.forEach(( el )=>{
        result = `${result}${transform(el)} `;
    })
    return result;
}

const transform = ( phrase ) =>{
    const regex = /[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi;
    let tmpPhrase = phrase;
    let regexFlag = regex.exec(tmpPhrase);
    let suffix = '';
    let result='';
    let tmpObj={};
    if( regexFlag !== null){
        suffix = regexFlag[0];
        phrase = tmpPhrase.slice(0, tmpPhrase.length - 1);
        tmpPhrase = phrase;
    }
    if( tmpPhrase.length<=2 ) {return `${phrase}${suffix}`};
    if( tmpPhrase.indexOf('-')!== -1 ){
        tmpPhrase = tmpPhrase.slice(0,tmpPhrase.indexOf('-'));
        suffix = phrase.slice(phrase.indexOf('-'));
    }
    tmpPhrase = tmpPhrase.slice(1,tmpPhrase.length-1); 
    for (let i = 0; i < tmpPhrase.length; i++){
        if( tmpObj[tmpPhrase[i]] === undefined ){
            tmpObj[tmpPhrase[i]]= 1;
        }else{
            tmpObj[tmpPhrase[i]] = tmpObj[tmpPhrase[i]]+1
        }
    }
    result = `${phrase[0]}${Object.values(tmpObj).length}${phrase[phrase.length-1]}${suffix}`
    return result;
}

//transform('things.');
wordParser(str);

/*
{
    't':1,
    'e':2,
    'n':1
    
}

{
   'c':1,
    'r:1
}

*/

