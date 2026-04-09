# 🔐 Security Policy

## Supported Versions

Only the latest version of this project is actively maintained. Current Verion: `v1.0`

| Version | Supported |
|--------|-----------|
| v1.0   | ✔ Yes |
| older  | ❌ No |

---

## ⚠️ API Keys & Sensitive Data

This project may include scripts that use external APIs.

### Important Rules:
- ❌ NEVER commit API keys to this repository
- ❌ NEVER hardcode secrets in scripts
- ✔ Use environment variables or local `.env` files
- ✔ Ensure `.env` is included in `.gitignore`

Example:
```bash
API_KEY=your_key_here
```

