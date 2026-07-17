/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const alphabets = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];

    let columnTitle = "";

    while (columnNumber > 0) {
        columnNumber--;

        columnTitle =
            alphabets[columnNumber % 26] + columnTitle;

        columnNumber = Math.floor(columnNumber / 26);
    }

    return columnTitle;
};

console.log(convertToTitle(18278));