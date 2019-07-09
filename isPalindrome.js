// Check if input is a palindrome

isPalindrome = str => {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome('racecar'))