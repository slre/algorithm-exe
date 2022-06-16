function balanced( arr ){
  console.log('arr',arr.length,arr)
    var flag;
    if( arr.length !== 0 ){
        if( ( arr.indexOf( '[]' ) !==-1 ) || ( arr.indexOf( '()' ) !==-1 ) || ( arr.indexOf( '{}' ) !==-1 )  ){
            arr = arr.replace('()', '');
            arr = arr.replace('[]', '');
            arr = arr.replace('{}', '');
            balanced(arr);
        }
        else{
            
        }        
    }
    else{
      arr =[];
    }
  console.log(arr);
  flag = ( arr.length !== 0 ) ? 'NO' : 'YES';
  return flag;
}


let strs = ['}][}}(}][))]','[](){()}','()','({}([][]))[]()','{)[](}]}]}))}(())(','([[)'];
/*
strs.forEach( (el)=> {
    console.log(el);
    console.log(balanced(el));
  })
*/
console.log(strs[3]);
console.log(balanced(strs[3]));
