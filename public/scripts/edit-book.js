import { Storage } from "./storage.js";
import { Book, isValidYear } from "../models/Book.js";
const editBookForm = document.getElementById("edit-book-form");
export function loadEditForm(bookId) {
    const books = Storage.getBooks();
    const bookToEdit = books.find((book) => book.id === bookId);
    if (bookToEdit) {
        document.getElementById("edit-title").value =
            bookToEdit.title;
        document.getElementById("edit-author").value =
            bookToEdit.author;
        document.getElementById("edit-year").value =
            bookToEdit.year.toString();
    }
}
function getBookIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}
function updateBook(bookId, newTitle, author, year) {
    const books = Storage.getBooks();
    const bookExists = books.some((book) => book.title === newTitle && book.author === author && book.id !== bookId);
    if (bookExists) {
        alert("This book already exists in the library.");
        return;
    }
    if (!isValidYear(year)) {
        alert("Please enter a valid 4-digit year.");
        return;
    }
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) {
        books[bookIndex] = new Book(bookId, newTitle, author, year, "available");
        Storage.saveBooks(books);
    }
    alert("Book updated successfully!");
}
const bookID = getBookIdFromUrl();
if (bookID) {
    loadEditForm(bookID);
    editBookForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newTitle = document.getElementById("edit-title").value.trim();
        const author = document.getElementById("edit-author").value.trim();
        const year = parseInt(document.getElementById("edit-year").value.trim(), 10);
        updateBook(bookID, newTitle, author, year);
        window.location.href = "index.html";
    });
}
else {
    alert("Book not found.");
}
