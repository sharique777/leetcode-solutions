/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const alphabets = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    let columnTitle = "";

    while (columnNumber > 0) {
        columnNumber--;

        let remainder = columnNumber % 26;
        columnTitle = alphabets[remainder] + columnTitle;

        columnNumber = Math.floor(columnNumber / 26);
    }

    return columnTitle;
};

console.log(convertToTitle(1));    // A
console.log(convertToTitle(26));   // Z
console.log(convertToTitle(27));   // AA
console.log(convertToTitle(52));   // AZ
console.log(convertToTitle(701));  // ZY
console.log(convertToTitle(702));  // ZZ
console.log(convertToTitle(703));  // AAA