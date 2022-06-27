const letter = '     bici     coche balón _playstation bici     coche     peluche';

function listGifts(letter) {
    // ¡Tú puedes!
    letter = letter.trim();
    let tmp = letter.split(' ')
    let tmpStack = {};
    tmp = tmp.filter( el=> (el.indexOf('_') === -1) && el !==''  );
    tmp.forEach(el => {
        if( tmpStack.hasOwnProperty( el ) ){
            tmpStack[el] = tmpStack[el] +1
        }else{
            tmpStack[el] = 1;
        }
        
    });
    console.log(tmp);
    return tmpStack;
}

console.log(listGifts(letter));