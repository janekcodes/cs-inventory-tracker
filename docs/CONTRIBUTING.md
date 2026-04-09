# 🤝 Contributions Documentation

Welcome to the **Counter-Strike Inventory Tracker** contribution documentation.

This guide provides a complete, structured, and professional workflow for contributing to the project.  
All contributors are expected to follow these steps and standards to ensure code quality and maintainability.

---

## 📌 Overview

Before contributing:

- Read this document completely  
- Follow all workflows and standards  
- Ensure your contribution aligns with project goals  

---

## 🚀 Step-by-Step Contribution Process

### Step 1 - Fork the Repository

- Navigate to the GitHub repository  
- Click the **Fork** button (top right)  
- This creates your personal copy  

---

### Step 2 - Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/cs-inventory-tracker.git
cd cs-inventory-tracker
```

---

### Step 3 - Add Upstream Repository

```bash
git remote add upstream https://github.com/janekcodes/cs-inventory-tracker.git
```
Verify: 
```bash
git remote -v
```

---

### Step 4 - Sync with Latest Changes

```bash
git fetch upstream
git checkout main
git rebase upstream/main
```

---

### Step 5 - Create a New Branch

```bash
git checkout -b feature/your-feature-name
```
⚠️ Do not commit or push directly to the main branch.

---

### Step 6 - Make Your Changes

While developing:

- Follow guidelines in `contributions/`
- Write clean, readable, and maintainable `.xlsx` files
- Keep changes focused and minimal
- Avoid unnecessary complexity

---

### Step 7 - Test Your Changes

Before committing:

- Open the **Excel file** locally
- Verify your changes work correctly
- Ensure no existing functionality is broken
- Check for errors or warnings

---

### Step 8 - Commit Changes

Stage your work:

```bash
git add .
```

Commit using Conventional Commits:

```bash
git commit -m "feat: @username contribution"
```

---

### Step 9 - Push Your Branch

```bash
git push origin feature/your-feature-name
```

---

### Step 10 - Open a Pull Request

1. Go to your fork on GitHub
2. Click **Compare & pull request**
3. Submit your PR to the main branch

Include in your PR:

- A clear description of changes
- What problem it solves or improves
- Screenshots (if applicable)

---

### 🔄 Keeping Your Fork Updated

```bash
git checkout main
git fetch upstream
git rebase upstream/main
git push origin main

git checkout your-branch
git rebase main
```

---

### 📜 License

By contributing, you agree that your contributions are licensed under the project's license.

👉 [View License](../LICENSE)
