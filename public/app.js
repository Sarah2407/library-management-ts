import { Library } from "./classes/Library.js";
import { Book } from "./models/Book.js";
const library = new Library();
const bookList = document.querySelector(".book-list");
const borrowedList = document.querySelector(".borrowed-list");
const addBookForm = document.getElementById("addBookForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const borrowReturnForm = document.getElementById("borrowReturnForm");
const bookTitleInput = document.getElementById("bookTitle");
const actionInput = document.getElementById("action");
function showBooks() {
    bookList.innerHTML = "";
    borrowedList.innerHTML = "";
    const books = library.getBooks();
    books.forEach((book) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h4>${book.title}</h4>
        <p>${book.author}</p>
      `;
        if (book.status !== "available") {
            borrowedList.appendChild(li);
        }
        else {
            bookList.appendChild(li);
        }
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
borrowReturnForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = bookTitleInput.value;
    const action = actionInput.value;
    if (action === "borrow") {
        library.borrowBook(title);
    }
    else if (action === "return") {
        library.returnBook(title);
    }
    showBooks();
    bookTitleInput.value = "";
    actionInput.value = "";
});
