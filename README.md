# 📘 Notes Resolver
**A modern, fast, and scalable academic notes library for students.**

Notes Resolver is a full-stack MERN application built to provide unit-wise academic resources. The platform prioritizes high performance, a clean user interface, and a secure file-delivery system.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Deployment](https://img.shields.io/badge/deployment-Vercel%20%26%20Render-orange)

---

## 🚀 Key Features
* **Hierarchical Organization:** Notes are structured by Subject → Unit for intuitive navigation.
* **Secure Downloads:** Backend proxy logic generates secure URLs, preventing direct exposure of storage links.
* **Cloud Architecture:** Leveraging Cloudinary RAW storage for high-availability PDF hosting.
* **Premium UX:** Fluid, animated transitions powered by **Framer Motion**.
* **Dual-Admin System:** Separated workflows for content uploading and infrastructure maintenance.

---

## 🧱 Tech Stack

### Frontend
- **React.js** (UI Logic)
- **Framer Motion** (Animations)
- **Tailwind CSS** (Styling)
- **React Router** (Navigation)

### Backend
- **Node.js & Express** (API Service)
- **MongoDB & Mongoose** (Database)
- **Cloudinary** (Asset Management)
- **Postman** (API Testing)

---

## 🔄 Secure PDF Download Flow
The application implements a secure bridge to protect static assets:

1.  **Request:** User triggers a download from the Frontend.
2.  **Handshake:** Frontend sends the `publicId` to the Node.js API.
3.  **Resolution:** The Backend validates the request and generates a secure access link.
4.  **Delivery:** The PDF is served to the user without exposing raw Cloudinary credentials.

`GET /api/pdf/download/:publicId`

---

## 🛠️ Installation & Setup

### 1. Clone the repository

git clone [https://github.com/your-username/notes-resolver.git](https://github.com/your-username/notes-resolver.git)
cd notes-resolver

# Install & start backend
cd backend && npm install && npm start

# Install & start frontend
cd frontend && npm install && npm run dev

📈 Roadmap
- Initial MERN Architecture setup.

- Migrate all legacy PDFs to Cloudinary.

- Resolve SPA routing issues on page refresh.

- Implement global search and filter system.

- Develop dedicated Admin Dashboard for analytics.

🔥 Notes Resolver — Learn smarter, not harder. > Built with passion for students and real-world learning.
