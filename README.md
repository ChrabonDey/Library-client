Great! Since you're using **Redux** along with **RTK Query**, here's the **updated `README.md`** that **includes Redux setup and usage**:

---

```markdown
# 📚 Library Management System - Client

This is the **client-side** of the Library Management System built with:

- ⚛️ React + TypeScript
- 🧰 Redux Toolkit & RTK Query
- 🎨 Tailwind CSS
- 🔔 SweetAlert2 for modal dialogs
- 🚀 Vite for development & build
- 🌐 Connected to a Node.js + Express + MongoDB backend

---

## 🔥 Features

- ✅ View all books with availability
- ➕ Add new books
- ✏️ Edit book details
- 🗑️ Delete books (with confirmation)
- 📖 Borrow books with quantity and due date
- 📊 Borrow summary report
- 🔄 Redux store for state management
- 🌐 Deployed via Vercel/Render

---

## 📁 Project Structure

```

src/
├── components/       # Reusable UI components
├── pages/            # App screens (BookList, CreateBook, etc.)
├── Services/         # RTK Query endpoints (bookApi)
├── store/            # Redux store configuration
├── App.tsx           # Route management
├── main.tsx          # App entry
└── ...

````

---

## ⚙️ Technologies

| Tech           | Description                       |
|----------------|-----------------------------------|
| React + TS     | UI & Type Safety                  |
| Redux Toolkit  | Centralized state management      |
| RTK Query      | API calls & caching               |
| Tailwind CSS   | Fast, responsive design           |
| SweetAlert2    | Confirmation & error modals       |
| Vite           | Lightning-fast dev server         |

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/library-client.git
cd library-client
````

### 2. Install Dependencies

```bash
npm install
```

```

### 4. Start Development Server

```bash
npm run dev
```



## 🧰 Redux & RTK Query Setup

### Store

```ts
// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { bookApi } from '../Services/bookApi';

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Provider

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

---

## 🔁 API Endpoints

| Endpoint          | Method | Description    |
| ----------------- | ------ | -------------- |
| `/books`          | GET    | Get all books  |
| `/books`          | POST   | Create a book  |
| `/books/:id`      | PATCH  | Update a book  |
| `/books/:id`      | DELETE | Delete a book  |
| `/borrow/:bookId` | POST   | Borrow a book  |
| `/borrow-summary` | GET    | Borrow summary |

---

