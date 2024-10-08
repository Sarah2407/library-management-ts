import { Storage } from "./storage.js";
import { deleteBook } from "./delete-book.js";
import { borrowBook } from "./borrow.js";

//get html element
const bookList = document.querySelector(".book-list") as HTMLUListElement;
const noBooksMsg = document.getElementById(
  "no-books-message"
) as HTMLDivElement;

//show books
export function showBooks(): void {
  bookList.innerHTML = "";

  const books = Storage.getBooks();

  const availableBooks = books.filter((book) => book.status === "available");
  if (availableBooks.length === 0) {
    noBooksMsg.style.display = "block";
  } else {
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

      const deleteBtn = li.querySelector(".delete-btn") as HTMLButtonElement;
      deleteBtn.onclick = () => deleteBook(book.id);

      const editBtn = li.querySelector(".edit-btn") as HTMLButtonElement;
      editBtn.onclick = () => {
        window.location.href = `editBook.html?id=${encodeURIComponent(
          book.id
        )}`;
      };

      const borrowBtn = li.querySelector(".borrow-btn") as HTMLButtonElement;
      borrowBtn.onclick = () => {
        borrowBook(book.id);
        showBooks();
      };

      bookList.appendChild(li);
    }
  });
}

window.onload = () => {
  showBooks();
};
