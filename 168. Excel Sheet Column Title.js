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
    let x = 0,
        y = 0;

    //columnTitle = "A";
    if (columnNumber > 26) {
        x = Math.floor(columnNumber / 26);
        y = columnNumber % 26;
    } else {
        y = columnNumber;
    }
    if (columnNumber > 26) {
        columnTitle = alphabets[x - 1];
    }

    if (columnNumber > 26) {
        if (y === 0) {
            y = 26;
            x--;
        }
    }
    columnTitle += alphabets[y - 1];

    return columnTitle;
};

console.log(convertToTitle(52));
