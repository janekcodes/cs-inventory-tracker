// Calculation utilities for inventory tracking system.

// Ensure values are valid numbers
function toNumber(value) {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
}

// 💰 Profit (per item)
export function calculateProfit(currentValue, purchasePrice) {
  const current = toNumber(currentValue);
  const purchase = toNumber(purchasePrice);
  return current - purchase;
}

// 📈 ROI (%)
export function calculateROI(profit, investment) {
  const p = toNumber(profit);
  const inv = toNumber(investment);

  if (inv === 0) return 0;
  return (p / inv) * 100;
}

// 🔁 Trade profit
export function calculateTradeProfit(sellPrice, buyPrice) {
  const sell = toNumber(sellPrice);
  const buy = toNumber(buyPrice);
  return sell - buy;
}

// 📦 Total inventory value
export function calculateTotalValue(values = []) {
  return values.reduce((sum, val) => sum + toNumber(val), 0);
}

// 💰 Total investment
export function calculateTotalInvestment(values = []) {
  return values.reduce((sum, val) => sum + toNumber(val), 0);
}

// 📉 Net profit (overall)
export function calculateNetProfit(totalValue, totalInvestment) {
  return toNumber(totalValue) - toNumber(totalInvestment);
}

// 📊 Average value
export function calculateAverage(values = []) {
  if (!values.length) return 0;
  const total = calculateTotalValue(values);
  return total / values.length;
}

// 📈 Highest value
export function getMaxValue(values = []) {
  if (!values.length) return 0;
  return Math.max(...values.map(toNumber));
}

// 📉 Lowest value
export function getMinValue(values = []) {
  if (!values.length) return 0;
  return Math.min(...values.map(toNumber));
}