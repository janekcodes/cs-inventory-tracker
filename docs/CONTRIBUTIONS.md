# Contributions Documentation

Welcome to the **CS Inventory Tracker** contribution documentation.

This guide provides a complete, structured, and professional workflow for contributing to the project.  
All contributors are expected to follow these steps and standards to ensure code quality and maintainability.

---

## 📌 Overview

Before contributing:

- Read this document completely  
- Follow all workflows and standards  
- Ensure your contribution aligns with project goals  

Additional contribution resources can be found in:
[Contributions Guide](../contributions/README.md)


---

## 🚀 Step-by-Step Contribution Process

### Step 1 — Fork the Repository

- Navigate to the GitHub repository  
- Click the **Fork** button (top right)  
- This creates your personal copy  

---

### Step 2 — Clone Your Fork

```bash
git clone https://github.com/your-username/cs-inventory-tracker.git
cd cs-inventory-tracker
```

---

### Step 3 — Add Upstream Repository

```bash
git remote add upstream https://github.com/janekcodes/cs-inventory-tracker.git
```
Verify: 
```bash
git remote -v
```

---

### Step 4 — Sync with Latest Changes

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

---

### Step 5 — Create a New Branch

```bash
git checkout -b feature/your-feature-name
```

---

### Step 6 — Make Your Changes

While developing:

- Follow guidelines in `/contributions/`
- Write clean, readable, and maintainable code
- Keep changes focused and minimal
- Avoid unnecessary complexity

---

### Step 7 — Test Your Changes

Before committing:

- Run the project locally
- Verify your changes work correctly
- Ensure no existing functionality is broken
- Check for errors or warnings

---

### Step 8 — Commit Changes

Stage your work:

```bash
git add .
```

Commit using Conventional Commits:

```bash
git commit -m "feat: add inventory filtering system"
```

---

### Step 9 — Push Your Branch

```bash
git push origin feature/your-feature-name
```

---

### Step 10 — Open a Pull Request

1. Go to your fork on GitHub
2. Click Compare & pull request
3. Submit your PR to the main branch

---

### Keeping Your Fork Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
git checkout your-branch
git merge main
```

---

### License

By contributing, you agree that your contributions are licensed under the project's license.