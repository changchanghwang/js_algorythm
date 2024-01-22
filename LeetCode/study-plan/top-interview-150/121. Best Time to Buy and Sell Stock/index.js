/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let min = prices[0]
  let profit = 0
    for(i=1;i<prices.length;i++){
      if(prices[i] < min){
        min = prices[i]
      }
      else if (prices[i] - min > profit){
        profit = prices[i] - min
      }
    }
    return profit
};

const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))