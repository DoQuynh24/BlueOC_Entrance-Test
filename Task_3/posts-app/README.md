# 📘 React-Redux Posts Application

This is a simple React application that uses **Redux** for state management and handles API calls to fetch and display posts. The app integrates with the public API [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) and includes a form to simulate the creation of new posts.

---

## 🚀 Features

- 🔁 Fetches and displays posts from the API.
- 📝 Allows users to submit new posts using a `PostForm` (simulation only).
- 🗂 Uses **Redux** to manage application state and side effects (e.g., API calls).
- 💡 Written in modern **ES6+ JavaScript** and structured with modular code.

---

## 🔗 API Endpoint

```
https://jsonplaceholder.typicode.com/posts
```

---

## 📁 Project Structure

```
src/
├── pages/
│   └── PostForm.js          # Component for adding new posts
│
├── service/
│   └── apiPostForm.js       # Handles API requests
│
├── store/
│   └── index.ts             # Redux store configuration
│
├── App.js                   # Main app component
└── index.js                 # Entry point of the application
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DoQuynh24/BlueOC_Entrance-Test.git
cd BlueOC_Entrance-Test
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## 🧱 Build for Production

```bash
npm run build
```

This will create an optimized production build in the `build/` directory.

---

## 📦 Technologies Used

- React
- Redux Toolkit
- ES6+ JavaScript
- Create React App

---

## ⚠️ Notes

- The `PostForm` component **simulates** a post submission; it does not actually persist data to the API.
- You are encouraged to keep your code clean and well-organized.
- This project was built as part of the **BlueOC entrance test**.


