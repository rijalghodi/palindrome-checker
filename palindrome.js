/*
Created by Rijal Ghodi on August 25, 2022
email : rijalghodi10@gmail.com
github : https://github.com/rijalghodi

This is a javascript code to check if a string is a palindrome

Palindrome is a word or sentence that's spelled the same way both forward and 
backward, ignoring punctuation, case, and spacing.

*/

// + Define palindrome function, accepting string as an argument
function palindrome(str) {
  //
  // To simplify the problem, upper the string
  let upperStr = str.toUpperCase();
  let i = 0;
  let j = str.length - 1;

  // + Check if every leftmost and righmost char is same
  while (true) {
    //
    // + extract the ASCII value of leftmost and rightmost char
    let leftChar = upperStr.charCodeAt(i);
    let rightChar = upperStr.charCodeAt(j);

    //
    // Make sure that there is at least 2 char to be checked
    if (j - i > 0) {
      //
      // Make sure that leftmost Char is alphanumeric
      if ((leftChar >= 65 && leftChar <= 90) || (leftChar >= 48 && leftChar <= 57)) {
        //
        // Make sure that rightmost Char is also alphanumeric
        if ((rightChar >= 65 && rightChar <= 90) || (rightChar >= 48 && rightChar <= 57)) {
          //
          // Make sure that leftmost char is same as rightmost char
          if (leftChar == rightChar) {
            // if so, continue checking the next leftmost and rightmost char
            i += 1;
            j -= 1;
            continue;
          }
          // if the leftmost char is not same as rightmost char, return false
          else {
            return false;
          }
        }
        // if the rightmost char is not alphanumeric, ignore it and
        // shift to left by one-position
        else {
          j -= 1;
          continue;
        }
      }
      // if the leftmost char is not analphanumeric, ignore it and
      // shift to right by one-position
      else {
        i += 1;
        continue;
      }
    }
    // if there is one or zero char in string, or if all of the leftmost
    // alphanumeric char is same as rightmost alphanumeric char, then
    // return true
    else {
      return true;
    }
  }
}

// + Test
console.log(palindrome("eye"));
