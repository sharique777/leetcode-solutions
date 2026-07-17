/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profits = [];
    let laterDayProfits=[...prices]

    for (let i = 0; i < prices.length; i++) {
      laterDayProfits.shift()
    
        //for (let j = i; j < prices.length; j++) {
            profits.push(Math.max(...laterDayProfits)-prices[i]);
            
        //}
        }
let maxProfit=Math.max(...profits);
    if (maxProfit > 0) {
    return maxProfit
} else {
  return 0
};
}
console.log(maxProfit([7,1,5,3,6,4]));