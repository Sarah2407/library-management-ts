import { Book, generateUniqueId, isValidYear } from "../models/Book.js";
import { Storage } from "./storage.js";
// import { generateUniqueId } from "../models/Book.js";

//get html element
const addBookForm = document.getElementById("add-book-form") as HTMLFormElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const authorInput = document.getElementById("author") as HTMLInputElement;
const yearInput = document.getElementById("year") as HTMLInputElement;

//add event listener to form
addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //form values
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const year = parseInt(yearInput.value.trim(), 10);

  const bookId = generateUniqueId();
  const book = new Book(bookId, title, author, year, "available");

  const existingBooks = Storage.getBooks();

  // check if the book already exists
  const bookExists = existingBooks.some(
    (b) => b.title === title && b.author === author
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

  existingBooks.push(book);

  //save books to local storage
  Storage.saveBooks(existingBooks);

  //clear form
  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";

  alert("Book added successfully!");
  window.location.href = "index.html";
});
