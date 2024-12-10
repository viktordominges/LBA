const words = [
    "level",    // palindrome
    "madam",    // palindrome
    "radar",    // palindrome
    "civic",    // palindrome
    "rotor",    // palindrome
    "deified",  // palindrome
    "reviver",  // palindrome
    "racecar",  // palindrome
    "noon",     // palindrome
    "stats",    // palindrome
    "apple",    // not a palindrome
    "banana",   // not a palindrome
    "orange",   // not a palindrome
    "computer", // not a palindrome
    "javascript"// not a palindrome
];

function getPolindrome(word) {
    if (word === word.split("").reverse().join("")) {
        return true;
    } else {    
        return false;   
    }
}

console.log(getPolindrome(words[12]));