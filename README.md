👤 Author

Moloto Jansen Malema
Senior / Angular Frontend Developer
GitHub: https://github.com/ketumaofmafsyn

---

# 🛒 Angular Product Explorer

A single-page application (SPA) built with modern Angular using standalone components, signals, and lazy-loaded routes.  
The app allows users to browse products, view details with image galleries, manage favorites, and access a protected admin dashboard.

This project was built as part of a technical assessment to demonstrate Angular architecture, routing, state management, and UI responsiveness.

---

## 🚀 Features

- ✅ Product catalog with search and category filter
- ✅ Product details page with image gallery (next / previous)
- ✅ Favorites system with localStorage persistence
- ✅ Favorites counter in global header
- ✅ Lazy-loaded routes for all major features
- ✅ Admin dashboard protected by route guard
- ✅ Fully responsive (mobile + desktop)
- ✅ Modern Angular with Standalone Components & Signals

---

## 🧱 Tech Stack

- Angular (Standalone APIs)
- Angular Router (Lazy Loading)
- Angular Signals (state management)
- TypeScript
- CSS (responsive layout)
- LocalStorage for persistence

---

## 📂 Folder Structure


src/app
├── core
│ ├── guards
│ │ └── admin.guard.ts
│ ├── models
│ │ └── product.model.ts
│ └── services
│ ├── catalog.service.ts
│ └── favorites.service.ts
│
├── layout
│ └── header
│ └── header.component.ts
│
├── features
│ ├── catalog
│ │ └── catalog.component.ts
│ ├── product-details
│ │ └── product-details.component.ts
│ ├── favorites
│ │ └── favorites.component.ts
│ └── admin
│ └── admin.component.ts
│
├── app.routes.ts
└── app.component.ts


---

## 🧭 Routes

| Route | Description | Lazy Loaded |
|--------|------------|------------|
| `/catalog` | Product listing page | ✅ |
| `/product/:id` | Product details + gallery | ✅ |
| `/favorites` | Favorite products | ✅ |
| `/admin` | Admin dashboard (guarded) | ✅ |

---

## 🔐 Admin Access

The `/admin` route is protected using an `AdminGuard`.

Currently, admin access is simulated using a local flag inside the guard.  
This can easily be replaced with real authentication and role-based access from a backend API or JWT token.

---

## ▶️ Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/ketumaofmafsyn/angular-product-explorer.git
cd angular-product-explorer

Install dependencies
npm install

3. Run the app
ng serve --o


It will Open browser at:

http://localhost:4200
