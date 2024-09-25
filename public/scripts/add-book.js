import { Book } from "../models/Book.js";
import { Storage } from "./storage.js";
const addBookForm = document.getElementById("add-book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const year = parseInt(yearInput.value.trim(), 10);
    const book = new Book(title, author, year, "available");
    const existingBooks = Storage.getBooks();
    const bookExists = existingBooks.some((b) => b.title === title && b.author === author);
    if (bookExists) {
        alert("This book already exists in the library.");
        return;
    }
    existingBooks.push(book);
    Storage.saveBooks(existingBooks);
    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    alert("Book added successfully!");
});
