//Write a function countLetters that can return to us all the unique characters that exist in a string that is passed into the function.
//Furthermore, the function should also report back how many instances of each letter were found in the string.

function countLetters(sentence) {
  var charMap = {}    //empty Object
  for (var i = 0; i <sentence.length; i++) {  //loop over the sentence as many characters as it has
    var mychar = sentence[i].toLowerCase();  // create Scoped variable to grab SINGLE character, make it lowercase
    if (mychar !== " ") {  // if that character does not equal a space, run code (otherwise do nothing)
      charMap[mychar] = charMap[mychar] + 1 || 1  // add character name as property to Object and add number as value. (Will loop over those numbers each time that letter occurs)
    }
  }
    return JSON.stringify(charMap, null, 4)  // convert result into a string.
}
console.log(countLetters("Lighthouse in the house"));
