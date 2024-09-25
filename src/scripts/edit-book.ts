import { Storage } from "./storage.js";
import { Book, isValidYear } from "../models/Book.js";

const editBookForm = document.getElementById(
  "edit-book-form"
) as HTMLFormElement;

// Load book details into the edit form
export function loadEditForm(bookId: string) {
  const books = Storage.getBooks();
  const bookToEdit = books.find((book) => book.id === bookId);

  if (bookToEdit) {
    (document.getElementById("edit-title") as HTMLInputElement).value =
      bookToEdit.title;
    (document.getElementById("edit-author") as HTMLInputElement).value =
      bookToEdit.author;
    (document.getElementById("edit-year") as HTMLInputElement).value =
      bookToEdit.year.toString();
  }
}

// Get book id from URL
function getBookIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// Function to update the book
function updateBook(
  bookId: string,
  newTitle: string,
  author: string,
  year: number
) {
  const books = Storage.getBooks();

  // Check if another book with the same title/ author already exists but exclude the current book being updated
  const bookExists = books.some(
    (book) =>
      book.title === newTitle && book.author === author && book.id !== bookId
  );

  if (bookExists) {
    alert("This book already exists in the library.");
    return;
  }

  //check if year is valid
  if (!isValidYear(year)) {
    alert("Please enter a valid 4-digit year.");
    return;
  }

  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex !== -1) {
    // Update book details
    books[bookIndex] = new Book(bookId, newTitle, author, year, "available");
    Storage.saveBooks(books);
  }

  alert("Book updated successfully!");
}

const bookID = getBookIdFromUrl();

if (bookID) {
  //load book details
  loadEditForm(bookID);

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

    updateBook(bookID, newTitle, author, year);

    window.location.href = "index.html";
  });
} else {
  alert("Book not found.");
}
