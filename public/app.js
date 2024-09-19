import { Library } from "./classes/Library.js";
import { Book } from "./models/Book.js";
const library = new Library();
const bookList = document.querySelector(".book-list");
const addBookForm = document.getElementById("addBookForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
function showBooks() {
    bookList.innerHTML = "";
    const books = library.getBooks();
    books.forEach((book) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h4>${book.title}</h4>
        <p>${book.author}</p>
      `;
        bookList.appendChild(li);
    });
}
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    const book = new Book(title, author, "available");
    library.addBook(book);
    showBooks();
    titleInput.value = "";
    authorInput.value = "";
});
