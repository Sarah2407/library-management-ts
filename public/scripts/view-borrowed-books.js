import { Storage } from "./storage.js";
import { returnBook } from "./return.js";
const borrowedBookList = document.querySelector(".borrowed-book-list");
export function showBorrowedBooks() {
    borrowedBookList.innerHTML = "";
    const books = Storage.getBooks();
    books.forEach((book) => {
        if (book.status === "borrowed") {
            const li = document.createElement("li");
            li.innerHTML = `
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p>Year: ${book.year}</p>     
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
