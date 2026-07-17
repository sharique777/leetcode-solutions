/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profits = [];
    let laterDayProfits = [...prices];

    laterDayProfits.sort((a, b) => a - b);

    let laterDayProfitsIndex = [];
    for (let i = 0; i < laterDayProfits.length; i++) {
        laterDayProfitsIndex[laterDayProfits[i]] = i;
    }

    for (let i = 0; i < prices.length; i++) {
        laterDayProfits.splice(laterDayProfits.indexOf([prices[i]]), 1);

        if (laterDayProfits.length > 0) {
            profits.push(
                laterDayProfits[laterDayProfits.length - 1] - prices[i]
            );
        }
    }

    let maxProfit = Math.max(...profits);

    return maxProfit > 0 ? maxProfit : 0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));