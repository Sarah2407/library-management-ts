import { Storage } from "./storage.js";
import { returnBook } from "./return.js";
const borrowedBookList = document.querySelector(".borrowed-book-list");
const noBorrowedBooksMsg = document.getElementById("no-borrowed-books-message");
export function showBorrowedBooks() {
    borrowedBookList.innerHTML = "";
    const books = Storage.getBooks();
    const borrowedBooks = books.filter((book) => book.status === "borrowed");
    if (borrowedBooks.length === 0) {
        noBorrowedBooksMsg.style.display = "block";
    }
    else {
        noBorrowedBooksMsg.style.display = "none";
    }
    books.forEach((book) => {
        if (book.status === "borrowed") {
            const li = document.createElement("li");
            li.innerHTML = `
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p>Published in: ${book.year}</p>     
            <button class="return-btn">Return</button>
          `;
            const returnBtn = li.querySelector(".return-btn");
            returnBtn.onclick = () => {
                returnBook(book.title);
                showBorrowedBooks();
            };
            borrowedBookList.appendChild(li);
        }
    });
}
window.onload = () => {
    showBorrowedBooks();
};
