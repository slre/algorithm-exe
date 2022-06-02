

function checkBalnace(arr){
    var str = arr;
  var flag='';
  var stack=[];
  // bracket notation
  for (let i = 0; i < str.length; i++) {
    if( stack.length === 0 && ')}]'.indexOf(str[i]) !==-1 ){
      stack.push( str[i] );
      break;
    }
      
    if( str[i] === '(' || str[i] === '{' || str[i] === '['  ){
      stack.push(str[i]);
      console.log(stack);
    }
    else{
      if( str[i]===')' ){
        if( stack[stack.length-1]==='(' ){
          stack = [...stack].slice(0, -1);
        }
        else{
          break;
        }
      }
      else if( str[i]===']' ){
        if( stack[stack.length-1]==='[' ){
          stack = [...stack].slice(0, -1);
        }
        else{
          break;
        }
      }
      else if( str[i]==='}' ){
        if( stack[stack.length-1]==='{' ){
          stack = [...stack].slice(0, -1);
        }
        else{
          break;
        }
      }
    }
  }
    //console.log(stack );
  flag = (stack.length ===0 ) ? 'YES' : 'NO';
    return flag;
  }
  
  //let strs = ['}][}}(}][))]','[](){()}','()','({}([][]))[]()','{)[](}]}]}))}(())(','([[)'];
  let strs = ['[]][{]{(({{)[})(}[[))}{}){[{]}{})()[{}]{{]]]){{}){({(}](({[{[{)]{)}}}({[)}}([{{]]({{'];
  strs.forEach( (el)=> {
    console.log(el);
    console.log(checkBalnace(el));
  })