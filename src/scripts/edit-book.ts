import { Storage } from "./storage.js";
import { Book } from "../models/Book.js";

const editBookForm = document.getElementById(
  "edit-book-form"
) as HTMLFormElement;

// Load book details into the edit form
export function loadEditForm(bookTitle: string) {
  const books = Storage.getBooks();
  const bookToEdit = books.find((book) => book.title === bookTitle);

  if (bookToEdit) {
    (document.getElementById("edit-title") as HTMLInputElement).value =
      bookToEdit.title;
    (document.getElementById("edit-author") as HTMLInputElement).value =
      bookToEdit.author;
    (document.getElementById("edit-year") as HTMLInputElement).value =
      bookToEdit.year.toString();
  }
}

// Get book title from URL
function getBookTitleFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("title");
}

// Function to update the book
function updateBook(
  oldTitle: string,
  newTitle: string,
  author: string,
  year: number
) {
  const books = Storage.getBooks();
  const bookIndex = books.findIndex((book) => book.title === oldTitle);
  if (bookIndex !== -1) {
    // Update book details
    books[bookIndex] = new Book(newTitle, author, year, "available");
    Storage.saveBooks(books);
  }
}

const oldTitle = getBookTitleFromUrl();

if (oldTitle) {
  //load book details
  loadEditForm(oldTitle);

  // Edit form event listener
  editBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTitle = (
      document.getElementById("edit-title") as HTMLInputElement
    ).value.trim();
    const author = (
      document.getElementById("edit-author") as HTMLInputElement
    ).value.trim();
    const year = parseInt(
      (document.getElementById("edit-year") as HTMLInputElement).value.trim(),
      10
    );

    updateBook(oldTitle, newTitle, author, year);

    alert("Book updated successfully!");
    window.location.href = "index.html";
  });
} else {
  alert("Book not found.");
}
