/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let profit = 0;
    let totalProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        profit = prices[i] - minPrice;

        if (profit > 0) {
            totalProfit += profit;
            minPrice = prices[i];
            profit = 0;
        }
    }

    return totalProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
