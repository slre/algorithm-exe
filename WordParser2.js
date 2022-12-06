/*
Write a program that parses a sentence and replaces each word with the following: 
1) The first letter of the word
2) The number of distinct characters between first and last character
3) The last letter of the word. 
For example, Smooth would become S3h. 
Words are separated by spaces or non-alphabetic characters and these separators should be maintained in their original form and location in the answer. 
A few of the things we will be looking at is accuracy, efficiency, solution completeness. 
*/

function wordParser( sentence ) {
  let tmpsentence = ''; 
  sentence.split(' ').forEach( (word) =>{ /* split the sentence by words, this generates an array to ease the single word handling */
    tmpsentence = tmpsentence+' '+ checkWord(word);
  });
  return tmpsentence;
}

function checkWord( word ){
  if( word.length <= 2 ){ /* words such: is, in, of, to,... etc, won't be parsed*/
    return word;
  }else{                  //
    if( /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(word) ){ /* check for word if has special characters */
      let charInfo = word.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/); /*if special char, charInfo has the information for special char, position, group, etc*/
      let prefix = formatWord(  word.substring(0, charInfo['index']) ); /* extract the part with no special chars*/
      return prefix + word.substring(charInfo['index']); /* return the whole word with its format*/
    }else{ 
      /* if no special characters, the word will be formatted/parsed by formatWord function*/
      return formatWord( word );
    }
    
  }
}
function formatWord( word ){
  /**
   * the received word will be transformed by, isolating the forst and last character, then
   * create a set for storing the rest of the word and ignoring the repeated characters, after that, 
   * get the values size of the set and concat the first, the last and the number of characters
   */
  const wordSet = new Set();
  let tmpWord = '';
  for( let i = 1 ; i< word.length -1 ; i++){
        wordSet.add(word[i])
    }
  tmpWord =  `${word[0]}${wordSet.size}${word[word.length -1]}`  
  return tmpWord; 
}

var output = wordParser("Smooth");

//var output = wordParser("Creativity is thinking-up new things. Innovation is doing new things!");
console.log(output);
// expected: C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!
