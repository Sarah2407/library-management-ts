import { Storage } from "./storage.js";
const bookList = document.querySelector(".book-list");
function showBooks() {
    bookList.innerHTML = "";
    const books = Storage.getBooks();
    books.forEach((book) => {
        if (book.status === "available") {
            const li = document.createElement("li");
            li.innerHTML = `
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p>Year: ${book.year}</p>           
            
            <div class="book-actions">
                <button onclick="editBook('${book.title}')">Edit</button>
                <button onclick="deleteBook('${book.title}')">Delete</button>
                <button onclick="borrowBook('${book.title}')">Borrow</button>
            </div>
          `;
            bookList.appendChild(li);
        }
    });
}
window.onload = () => {
    showBooks();
};
