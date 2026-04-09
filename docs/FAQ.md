# ❓ FAQ

This FAQ covers common questions about using the **Counter-Strike Inventory Tracker** spreadsheet (Excel & Google Sheets).

---

## 📂 General Questions

**Q1: What platforms are supported?**  
- Microsoft Excel (Windows & Mac)  
- Google Sheets (any browser, cross-platform)

**Q2: Do I need to install anything?**  
- No installation required. Just open the spreadsheet in Excel or Google Sheets.

**Q3: Can I use this for multiple inventories?**  
- Yes! Duplicate the spreadsheet for separate inventories or use separate sheets within the same file.

---

## 💰 Profit/Loss Calculations

**Q4: How is profit/loss calculated?**  
- Formula: `=CurrentValue - PurchasePrice`  
- Conditional formatting highlights positive values in **green** and negative in **red**.

**Q5: How do I sum total profit?**  
- Example formula: `=SUM(M11:M1000)` (adjust range for your data).

👉 Full breakdown here: [Formulas Guide](docs/FORMULAS.md)

---

## 📊 Features & Usage

**Q6: Can I track trades?**  
- Yes! Record your trades in the dedicated sheet. Profit/loss and inventory updates automatically reflect.

**Q7: Can I customize items, cases, or categories?**  
- Absolutely! Add, rename, or remove categories directly in the spreadsheet. Formulas will adjust automatically.

**Q8: Are screenshots included?**  
- Yes! See the `/screenshots/` folder for examples of Overview, Master List, and Loadout sheets.

---

## 🤝 Contributions

**Q9: Can I contribute improvements?**  
- Yes! Submit updated spreadsheets to `/contributions/` and open a Pull Request.  
- See [`CONTRIBUTING.md`](CONTRIBUTING.md) for detailed instructions.

**Q10: Is there a license for contributions?**  
- All contributions are under the **MIT License**. See [`LICENSE.md`](LICENSE.md) for details.

---

## 🔧 Troubleshooting

**Q11: Some formulas don’t work in Google Sheets / Excel**  
- Ensure you are using the correct file type: `.xlsx` for Excel, Google Sheets version for Sheets.  
- Check that ranges match your dataset.

**Q12: Conditional formatting isn’t showing**  
- Make sure your spreadsheet is not in “view-only” mode in Google Sheets.  
- In Excel, ensure “Automatic” calculation mode is enabled (`Formulas → Calculation Options → Automatic`).

---

> For further questions, feel free to open an issue on GitHub: [Issues](https://github.com/janekcodes/cs-inventory-tracker/issues)