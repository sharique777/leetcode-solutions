/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profits = [];

    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            profits.push(prices[j] - prices[i]);
        }
    }

    return Math.max(...profits);
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
