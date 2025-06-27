# 📚 Online Library System

An interactive and responsive web application built using **React**, **Redux**, and **Vite**, simulating a real-world online library.

🔗 **GitHub Repository**: [https://github.com/Mamta0303/online-library](https://github.com/Mamta0303/online-library)

---

## 🚀 How to Run This Project

```bash
npm install
npm run dev


🎯 Features
✅ Home Page
Welcome message

Book categories: Fiction, Non-Fiction, Sci-Fi

Popular books displayed as image cards

Clean and centered layout with hover effects

✅ Browse Books
Filter books by category (e.g., /books/fiction)

Search by title or author

Dynamic routing and real-time filtering

✅ Book Details Page
View book title, author, rating, and description

Dynamic route (/book/:id)

"Back to Browse" link

✅ Add Book Page
Add new books with form: title, author, category, description, rating, image URL

Uses Redux for state management

Form validation + redirect on success

✅ 404 Page
Custom "Page Not Found" with link to Home

📁 Folder Structure
bash
Copy
Edit
src/
├── components/        # Navbar, BookCard
├── pages/             # Home, BrowseBooks, BookDetails, AddBook, NotFound
├── redux/             # bookSlice.js, store.js
├── style.css          # Final styling (responsive + clean)
├── App.jsx
├── main.jsx
✨ Final Enhancements
Responsive UI

Hover effects on book cards

Centered navigation bar

Clean layout using CSS

Realistic book cover images via OpenLibrary API

👩‍💻 Author
Mamta Prajapati
MCA | React Developer | Tech Enthusiast