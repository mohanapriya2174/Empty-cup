# 🏡 EmptyCup Full Stack Assignment – Interior Designer Listing App

This is a responsive web application built as part of the EmptyCup Full Stack Assignment. It showcases a list of interior designers with interactive features like shortlisting, filtering, and detailed contact views.

---

## ✨ Features

- ✅ Designer cards with:
  - Name, rating, description, project count, years of experience, price
  - Contact numbers (Phone 1 and Phone 2)
- ✅ Shortlist toggle button (per card)
- ✅ "Shortlisted" filter in the top navigation bar
- ✅ Icon-based action buttons: Details, Hide, Shortlist, Report
- ✅ Responsive layout with alternate card background styling
- ✅ Dynamically rendered with JavaScript and data from an Express backend

---

## 🧰 Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js + Express.js
- **Data Source:** `designers.json`
- **Icons:** Local image assets

---

## 🐳 Docker Support

### 🔹 Run Backend with Docker

```bash
cd server
docker build -t emptycup-backend .
docker run -p 4000:4000 emptycup-backend
