/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s.replaceAll(/[^a-zA-Z0-9]/g, "")
    max=Math.floor(s. length /2)
    if (s. length %2 !== 0){
max++
}
let firstHalf=""
let lastHalf=""
for (let i = 0 ; i < max; i++){
  firstHalf+=s[i]
  lastHalf+=s[max-1-i]
}

return firstHalf===lastHalf
};
console.log(isPalindrome("dad")); 