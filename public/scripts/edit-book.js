import { Storage } from "./storage.js";
import { Book } from "../models/Book.js";
const editBookForm = document.getElementById("edit-book-form");
export function loadEditForm(bookTitle) {
    const books = Storage.getBooks();
    const bookToEdit = books.find((book) => book.title === bookTitle);
    if (bookToEdit) {
        document.getElementById("edit-title").value =
            bookToEdit.title;
        document.getElementById("edit-author").value =
            bookToEdit.author;
        document.getElementById("edit-year").value =
            bookToEdit.year.toString();
    }
}
function getBookTitleFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("title");
}
function updateBook(oldTitle, newTitle, author, year) {
    const books = Storage.getBooks();
    const bookIndex = books.findIndex((book) => book.title === oldTitle);
    if (bookIndex !== -1) {
        books[bookIndex] = new Book(newTitle, author, year, "available");
        Storage.saveBooks(books);
    }
}
const oldTitle = getBookTitleFromUrl();
if (oldTitle) {
    loadEditForm(oldTitle);
    editBookForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newTitle = document.getElementById("edit-title").value.trim();
        const author = document.getElementById("edit-author").value.trim();
        const year = parseInt(document.getElementById("edit-year").value.trim(), 10);
        updateBook(oldTitle, newTitle, author, year);
        alert("Book updated successfully!");
        window.location.href = "index.html";
    });
}
else {
    alert("Book not found.");
}
