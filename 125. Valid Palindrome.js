/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
    max = Math.floor(s.length / 2);
    if (s.length % 2 !== 0) {
        max++;
    }
    let firstHalf = "";
    let lastHalf = "";
    for (let i = 0; i < max; i++) {
        firstHalf += s[i];
        lastHalf += s[s.length - 1 - i]; //+lastHalf
    }

    return firstHalf === lastHalf;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
