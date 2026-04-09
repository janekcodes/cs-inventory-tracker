// Formatting utilities for consistent data display.

// Ensure valid number
function toNumber(value) {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
}

// 💰 Format currency (USD default)
export function formatCurrency(value, currency = "USD") {
  const num = toNumber(value);

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(num);
}

// 📈 Format percentage
export function formatPercentage(value, decimals = 2) {
  const num = toNumber(value);

  return `${num.toFixed(decimals)}%`;
}

// 🔢 Format number with commas
export function formatNumber(value) {
  const num = toNumber(value);

  return new Intl.NumberFormat("en-US").format(num);
}

// 📊 Format compact numbers (e.g. 1.2K, 3.4M)
export function formatCompact(value) {
  const num = toNumber(value);

  return new Intl.NumberFormat("en", {
    notation: "compact"
  }).format(num);
}

// ⏱ Format date
export function formatDate(date) {
  const d = new Date(date);

  if (isNaN(d)) return "Invalid Date";

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}