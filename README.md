# Code Operator Indonesia & Prefix Code Country (World)

API sederhana untuk mengecek:

- **Operator seluler di Indonesia** berdasarkan nomor telepon (beserta logo operator),
- **Kode prefix negara** dari seluruh dunia.

---

## 📌 Routes

### 🔍 Cek Operator Seluler Indonesia

```
GET /v1/operator/{nomor_telepon}
```

**Contoh:**

```
/v1/operator/081234567890
```

**Response:**

```json
{
  "message": "success",
  "data": {
    "default_product_id": 2227,
    "image": "/telkomsel.png",
    "name": "Telkomsel",
    "description": "",
    "__typename": "OperatorAttributes"
  }
}
```

---

### 🌍 Cek Prefix Negara Dunia

```
GET /code-country
```

**Response:**

```json
{
  "message": "success",
  "data": {
    "image": "https://flagcdn.com/{size}/{country-code}.png",
    "listCountry": [
      {
        "name": "Afghanistan",
        "code": "93",
        "code_iso": "af / afg"
      },
      ...
    ]
  }
}
```

---

## 🚀 How to Run Locally

1. Clone repository ini:

```bash
git clone https://github.com/hendras1722/your-repo-name.git
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan server:

```bash
npm run dev
```

---

## 📦 Tech Stack

- Node.js
- Express

---

## 🧑‍💻 Author

Muh Syahendra Anindyantoro  
GitHub: [https://github.com/hendras1722](https://github.com/hendras1722)
