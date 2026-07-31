/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    let numeratorStr = String(numerator);

    let currentDividend = 0;
    let remainder = 0;
    let digit = 0;
    let decimalAdded = false;
    let result = [];

    for (let i = 0; i < numeratorStr.length; i++) {
        let currentDigit = numeratorStr[i];

        currentDividend = currentDividend * 10 + Number(currentDigit);

        digit = Math.floor(currentDividend / denominator);

        if (digit !== 0) {
            result.push(digit);
        }

        remainder = currentDividend - digit * denominator;
        currentDividend = remainder;

        if (denominator > currentDividend && currentDividend !== 0) {
            if (i !== numeratorStr.length - 1) {
                continue;
            } else {
                numeratorStr += "0";

                if (!decimalAdded) {
                    if (i === 0) {
                        result.push("0");
                    }

                    result.push(".");
                    decimalAdded = true;
                }
            }
        }
    }

    return result.join("");
};

console.log(fractionToDecimal(1, 2));