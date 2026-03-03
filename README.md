👤 Author

Moloto Jansen Malema
Senior Angular Frontend Developer
GitHub: https://github.com/ketumaofmafsyn

🛒 Angular Product Explorer (DVT Tech Challenge)

A modern single-page storefront application built with Angular using standalone components, signals, and lazy-loaded routes.

This project was completed as part of the DVT Frontend Technical Assessment and demonstrates:

Clean architecture

Proper state management

Network request handling

Routing

Semantic HTML

Polished UI

Good Git practices

The application consumes the Fake Store API and allows users to browse products, view details, manage favorites, add items to a cart, and complete a checkout flow.

🚀 Features
🛍 Product Experience

✅ Product catalog with search and category filtering

✅ Product details page with image gallery (next / previous navigation)

✅ Semantic card layout using <article> structure

✅ Loading spinner while fetching products

✅ Error handling with retry option

❤️ Favorites

✅ Add / Remove favorites

✅ Favorites persisted in localStorage

✅ Live favorites counter in header

✅ Reactive updates using Angular Signals

🛒 Cart

✅ Add to Cart button directly on product image

✅ Cart page with item listing

✅ Live cart item count badge in header

✅ Global CartService for state management

✅ Reactive cart updates across components

🔐 Admin

✅ Protected /admin route

✅ Route guard implementation

✅ Easily extendable for real authentication

⚙ Architecture

✅ Standalone Components

✅ Lazy-loaded feature routes

✅ Signals-based state management

✅ Clean service separation

✅ Strong TypeScript typing (no any abuse)

🧱 Tech Stack

Angular (Standalone APIs)

Angular Router (Lazy Loading)

Angular Signals (State Management)

TypeScript

CSS (Responsive Grid Layout)

HttpClient (Network Requests)

LocalStorage (Persistence)

🧠 Architectural Decisions
State Management

Global state is handled using Angular Signals inside dedicated services:

ProductsService → manages product fetching, loading, and error state

FavoritesService → manages favorite IDs and persistence

CartService → manages cart items and total count

This approach avoids unnecessary dependencies like NgRx while still providing predictable and reactive state updates across the application.

Network Handling

The application properly handles:

Loading state

API errors

Retry mechanism

Strongly typed responses

Example states managed in ProductsService:

loading

error

products

This ensures the UI remains stable even during network failures.

Routing Structure
Route	Description	Lazy Loaded
/catalog	Product listing page	✅
/product/:id	Product details + gallery	✅
/favorites	Favorite products	✅
/cart	Shopping cart page	✅
/admin	Admin dashboard (guarded)	✅
📂 Folder Structure
src/app
├── core
│   ├── guards
│   │   └── admin.guard.ts
│   ├── models
│   │   └── product.model.ts
│   └── services
│       ├── products.service.ts
│       ├── favorites.service.ts
│       └── cart.service.ts
│
├── layout
│   └── header
│       └── header.component.ts
│
├── features
│   ├── catalog
│   │   └── catalog.component.ts
│   ├── product-details
│   │   └── product-details.component.ts
│   ├── favorites
│   │   └── favorites.component.ts
│   ├── cart
│   │   └── cart.component.ts
│   └── admin
│       └── admin.component.ts
│
├── app.routes.ts
└── app.component.ts
🎨 UI & Accessibility

Semantic HTML (proper heading structure)

Accessible buttons with aria-label

Keyboard focus states

Floating action buttons on product images

Clean card-based layout

Responsive grid system

Responsiveness is supported but was not the primary focus per assessment requirements.

🔐 Admin Access

The /admin route is protected using an AdminGuard.

Admin access is currently simulated using a local flag.
This can easily be replaced with real authentication and role-based access via backend API or JWT.

🤖 AI Tool Usage Disclosure

AI tools were used selectively for:

Project scaffolding guidance

Boilerplate structuring suggestions

Minor UI refinements

Documentation refinement

All implementation logic, architecture decisions, and state management were designed and understood independently. No full project generation was performed.

▶️ Running the Project Locally
1. Clone the repository
git clone https://github.com/DVT/challenge-angular-storefront-moloto-malema.git
cd angular-product-explorer
2. Install dependencies
npm install
3. Run the application
ng serve --open

Application runs at:

http://localhost:4200
📌 Final Notes

This project demonstrates:

Clean Angular architecture

Proper separation of concerns

Reactive state management

Strong TypeScript usage

UI polish

Practical frontend engineering patterns

The goal was not over-engineering, but delivering a well-structured, maintainable storefront application aligned with DVT's expectations.
