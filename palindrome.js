function palindrome(str) {
  // upper the str to simplify the problem
  let check = str.toUpperCase();
  let i = 0;
  let j = str.length - 1;
  while (true) {
    // extract the ASCII value of char
    let leftValue = check.charCodeAt(i);
    let rightValue = check.charCodeAt(j);
    // Make sure that there is at least 2 char to be checked
    if (j - i > 0) {
      // check if leftValue is alphanumeric
      if ((leftValue >= 65 && leftValue <= 90) || (leftValue >= 48 && leftValue <= 57)) {
        // check if rightValue is alphabet
        if ((rightValue >= 65 && rightValue <= 90) || (rightValue >= 48 && rightValue <= 57)) {
          // check if leftValue equals to rightValue
          if (leftValue == rightValue) {
            i += 1;
            j -= 1;
            continue;
          }
          // if the leftValue inequal to rightValue
          else {
            return false;
          }
        }
        // if the rightValue is not an alphabet
        // shift the rightValue 1 char to left
        else {
          j -= 1;
          continue;
        }
      }
      // if the leftValue is not an alphabet
      // shift the leftValue 1 char to right
      else {
        i += 1;
        continue;
      }
    } else {
      return true;
    }
  }
}

console.log(palindrome("eye"));
