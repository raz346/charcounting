
// func to count letters and return obj
var lettersCount = {

 };


function countLetters(input) {
  // get rid of the spaces
  var sentence = input.replace(/\s/g, "");
  //  go through the char of the string

  for (var i = 0; i < sentence.length; i++) {
    var currentChar = sentence[i];
    if ( currentChar in lettersCount) {
      // push to the object
      lettersCount[currentChar] += 1;
    }
    else { lettersCount[currentChar] = 1 ;}
  }

}
countLetters("lighthouse in the house ");
// console.log(countLetters("lighthouse in the house "))
console.log(lettersCount);

