# Formulas Guide

This document contains the complete formula system used in the Counter-Strike Inventory Tracker.

---

## 1. Core Profit System

### Basic Profit Formula (Per Item)

```excel
=CurrentValue - PurchasePrice
```

### Description:
Calculates profit or loss for a single item by subtracting purchase price from current value.

### Example:

| Item | Purchase Price | Current Value | Profit |
|------|----------------|---------------|--------|
| Skin | 50             | 80            | 30     |

---

## 2. Total Profit Calculation

```excel
=SUM(M11:M1000)
```
### Description:
Calculates total profit across all items in the inventory system.

---

## 3. Return on Investment (ROI)

```excel
=(Profit / Investment) * 100
```
### Description:
ROI measures how efficient your investments are by showing profit as a percentage of total investment.

---

## 4. Trade Profit Calculation

```excel
=SellPrice - BuyPrice
```
### Description:
Calculates profit made from a single trade transaction.

--- 

## 5. Total Inventory Value

```excel
=SUM(CurrentValueRange)
```
### Description:
Calculates the total current value of all items in your inventory.

---

## 6. Total Investment Value

```excel
=SUM(PurchasePriceRange)
```
### Description:
Shows the total amount spent on inventory purchases.

---

## 7. Net Profit (Overall Performance)

```excel
=TotalInventoryValue - TotalInvestmentValue
```
### Description:
Calculates overall profit or loss across the entire inventory system.

---

## 8. Average Item Value

```excel
=AVERAGE(CurrentValueRange)
```
### Description:
Shows the average value of all items in your inventory.

---

## 9. Highest & Lowest Item Values

Highest Value Item
```excel
=MAX(CurrentValueRange)
```
Lowest Value Item
```excel
=MIN(CurrentValueRange)
```
### Description:
Finds the most and least valuable items in your inventory.

## 10. Conditional Formatting Rules
### Profit (Green):
```excel
Cell Value > 0
```
### Loss (Red)
```excel
Cell Value < 0
```
### Neutral (Gray)
```excel
Cell Value = 0
```
### Description:
Used to visually highlight performance in your spreadsheet.

---

## Best Practices
Always use numeric formatting for all value columns
Avoid mixing text and numbers in calculation fields
Keep formulas consistent across all sheets
Do not manually overwrite formula cells

---

## System Flow
Purchase Price → Current Value → Profit → ROI → Summary Dashboard

---

## Summary

These formulas enable:

- Automated profit tracking 
- Real-time ROI calculations
- Inventory valuation 
- Trade performance analysis  
- Clean spreadsheet structure 