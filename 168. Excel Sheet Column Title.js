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
        y = 0

    let no = 0;
    let divided = false;

    while (columnNumber >= -1) {

//        if (columnNumber > 26) {

            if (columnNumber % 26 - 1 == -1) {
                columnTitle = "Z" + columnTitle;
            } else {
                columnTitle = alphabets[columnNumber % 26 - 1] + columnTitle;
            }

            if (divided) {
                columnNumber -= 26;
                divided = false;
            }

            columnNumber -= columnNumber % 26;

            if (columnNumber >= 26) {
                columnNumber /= 26;
                divided = true;
                //console.log(columnNumber);
            } else {
                break;
            }
        //}
    }

    return columnTitle;
};

console.log(convertToTitle(702));