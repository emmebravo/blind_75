/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
    1 <= prices.length <= 105
    0 <= prices[i] <= 104

*/

/*

P: Array of numbers, numbers can be positive, negetive and decimals
  - Will there be any other data structure, other than an array? - No
  - Will the array always be non-empty and only contain numbers? - Yes
R: Return the maximum profit as a number, if no profit return zero
E: See below
P:
Write a function that takes in an array of numbers
initiate a buy variable with initial value of arr[0]
initiate a sell variable with inital value of -Infinity(??)
iterate through the array
  check if the price of the stock is lower than the buy price update the buy price to the current stock value
  else check if the current value is higher than the sell price and update the sell price of the stock

return sell-buy price if sell-buy price is > 0

*/

const maxProfit = function(prices) {
    let buy = Infinity
    let maxProfit = 0

    for(let i = 0; i < prices.length; i++){
      if(prices[i] < buy){
        buy = prices[i]
      } else if(prices[i] - buy > maxProfit){
        maxProfit = prices[i] - buy
      }
      console.log(`prices: ${prices[i]}, buy: ${buy}, maxProfit: ${maxProfit}`)
    }
  return maxProfit
};

/*

Emme:
Runtime: 90 ms, faster than 85.95% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.9 MB, less than 27.50% of JavaScript online submissions for Best Time to Buy and Sell Stock.

Yash:
Runtime: 56 ms, faster than 99.99% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 52.4 MB, less than 8.25% of JavaScript online submissions for Best Time to Buy and Sell Stock.

*/

console.log(maxProfit([7,1,5,3,6,4]), 5)
console.log(maxProfit([7,6,4,3,1]), 0)
console.log(maxProfit([2,4,1]), 2)
console.log(maxProfit([3,4,2,8,9,1,2,10]), 9)
