/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profits = [];
    let maxProfit=-Infinity
    let currentProfit=0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
          currentProfit=prices[j] - prices[i]
          if (maxProfit < currentProfit) {
    maxProfit=currentProfit
} 
            //profits.push(prices[j] - prices[i]);
        }
    }

    return maxProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
