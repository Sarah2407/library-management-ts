import { Storage } from "./storage.js";
import { deleteBook } from "./delete-book.js";
import { borrowBook } from "./borrow.js";
const bookList = document.querySelector(".book-list");
const noBooksMsg = document.getElementById("no-books-message");
export function showBooks() {
    bookList.innerHTML = "";
    const books = Storage.getBooks();
    const availableBooks = books.filter((book) => book.status === "available");
    if (availableBooks.length === 0) {
        noBooksMsg.style.display = "block";
    }
    else {
        noBooksMsg.style.display = "none";
    }
    books.forEach((book) => {
        if (book.status === "available") {
            const li = document.createElement("li");
            li.innerHTML = `
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p>Published in: ${book.year}</p>           
            
            <div class="book-actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <button class="borrow-btn">Borrow</button>
            </div>
          `;
            const deleteBtn = li.querySelector(".delete-btn");
            deleteBtn.onclick = () => deleteBook(book.title);
            const editBtn = li.querySelector(".edit-btn");
            editBtn.onclick = () => {
                window.location.href = `editBook.html?title=${encodeURIComponent(book.title)}`;
            };
            const borrowBtn = li.querySelector(".borrow-btn");
            borrowBtn.onclick = () => {
                borrowBook(book.title);
                showBooks();
            };
            bookList.appendChild(li);
        }
    });
}
window.onload = () => {
    showBooks();
};
