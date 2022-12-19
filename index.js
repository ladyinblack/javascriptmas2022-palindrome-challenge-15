// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Palindromes</h1>`;

/**
 * Palindromes are words that are the same forward and bacward.  For example, the words "noon" and "kayak" are a paldinromes.
 *
 * Write a function to check if a lowercased string of letters is a palindrome.  If the word is palindrome, return true.  If it isn't, return false.
 *
 * Examples of Palindromes: civic, kayak, level, madam, racecar, noon, rotator, solos, tenet, wow, radar
 *
 * BIG HINT:
 * - Reverse the word and compare it to the original word.
 */
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr == str;
}

console.log(isPalindrome('abba'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('octopus'));
console.log(isPalindrome('pumpkins'));
console.log(isPalindrome('madam'));
