Order Management Dashboard (OMD)

A modern, responsive admin dashboard for managing and reviewing cafe orders.
Built with Next.js (App Router) + TypeScript + Tailwind CSS, with an emphasis on
clean UI architecture and scalable patterns that fit real admin workflows.

---

🚀 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- (Optional UI libs used in the project, if any: e.g. react-icons)

---

✨ Key Features

- Responsive dashboard layout (desktop & mobile)
- Mobile sidebar navigation (drawer) with overlay
- Orders listing UI (home + history)
- Order details view with structured order info
- Order total computed from line items (avoids inconsistent stored totals)
- Mock data layer for orders/products to support UI development without backend
- Authentication page (UI only)

---

🧠 Notes on Data Modeling (Why this matters)

- Order totals are derived from:
  `sum(quantity * unitPriceAtOrder)` for each line item.
- This prevents data inconsistencies that happen when `total` is stored and later
  diverges from the actual line items.

---

📸 Screenshots

Desktop:
![Home Desktop](screenshots-01-home-desktop.png)
![Order History Desktop](screenshots-02-order-history-desktop.png)
![Order Details Desktop](screenshots-03-order-details-desktop.png)

Mobile:
![Home Mobile](screenshots-04-home-mobile.png)
![Order History Mobile](screenshots-05-order-history-mobile.png)
![Order Details Mobile](screenshots-06-order-details-mobile.png)
![Mobile Sidebar](screenshots-07-mobile-navbar.png)

---

🛠️ Running Locally

1. Install dependencies:

npm install

2. Run the dev server:

npm run dev

3. Open:

http://localhost:3000

---

✅ Quality Checks

- Lint:

npm run lint

- Production build:

npm run build

---

📌 Project Status / Roadmap

This project is actively evolving. Planned improvements include:

- Products management (CRUD UI with availability toggles)
- Advanced list controls (debounced search, sort/filter, pagination)
- Persistence layer (localStorage / API routes) and backend integration
- Authentication + role-based access (cashier / kitchen / admin)

---

👤 Author

Omar Rehan
Frontend Software Engineer

- GitHub: https://github.com/OmarRehan777
