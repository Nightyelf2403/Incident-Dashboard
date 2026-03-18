# 🚨 Incident Monitoring Dashboard  
### Axentra OS Frontend Assessment

---

## 📌 Overview

This project is a **frontend application** developed as part of the **Axentra OS assessment**.  

It demonstrates a scalable and structured React application for monitoring incidents in real-time, focusing on **clean architecture, reusable UI components, and modern frontend practices**.

---

## 🎯 Key Features

- 📊 **Dashboard View**
  - Displays incident statistics and trends
  - Includes charts and real-time simulated updates

- 🔐 **Authentication (Simulated)**
  - Login and Signup pages
  - Maintains user session in frontend

- 🧩 **Centralized UI Components**
  - Reusable `Button`, `Card`, and `Label` components
  - Ensures consistency and scalability across the app

- ⚙️ **Settings Page**
  - Theme toggle (Redux-based)
  - User preference placeholder

- 📄 **Legal Pages**
  - Terms & Conditions
  - Privacy Policy

- 🔄 **Real-Time Simulation**
  - Incident list updates dynamically

---

## 🏗️ Project Structure

The project follows a **modular and scalable folder structure**:

```
src/
├── components/
│   ├── Ui/              # Reusable UI components (Button, Card, Label)
│   ├── Layout/          # Header, Sidebar, MainLayout
│   └── Dashboard/       # Dashboard-specific components
│
├── pages/               # Route-level pages (Home, Dashboard, Settings, Auth)
├── redux/               # State management (store, slices)
├── router/              # Routing configuration
├── context/             # Auth & theme context
├── auth/                # Auth service structure (no API calls)
├── hooks/               # Custom hooks
├── lib/                 # Static data & constants
├── utility/             # Helper functions
```

---

## 🧠 Architecture Highlights

- **Component Reusability**  
  All UI elements are centralized in the `components/Ui` directory.

- **Separation of Concerns**  
  Routing, state management, UI, and utilities are clearly separated.

- **Scalable Design**  
  Designed to support future backend integration and feature expansion.

- **Clean Routing Setup**  
  Routes are defined in a dedicated file and rendered via a router component.

---

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Redux Toolkit**
- **React Router**
- **Recharts**
- **Lucide React**

---

## ⚠️ Notes

- This is a **frontend-only implementation**
- Authentication is **simulated** (no backend integration)
- API service structure is prepared but does not make real requests

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

---

## 📬 Submission

This project was developed as part of the **Axentra OS frontend assessment**, focusing on:

- Code structure
- Reusability
- Clean UI implementation
- Maintainable architecture

---

## 👨‍💻 Author

**Lalith Aditya Chunduri**  
Frontend Developer | AI & Full-Stack Enthusiast
