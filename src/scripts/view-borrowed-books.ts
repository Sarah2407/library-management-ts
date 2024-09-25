import { Storage } from "./storage.js";
import { returnBook } from "./return.js";

//get html elements
const borrowedBookList = document.querySelector(
  ".borrowed-book-list"
) as HTMLUListElement;
const noBorrowedBooksMsg = document.getElementById(
  "no-borrowed-books-message"
) as HTMLDivElement;

//show borrowed books
export function showBorrowedBooks(): void {
  borrowedBookList.innerHTML = "";

  const books = Storage.getBooks();

  const borrowedBooks = books.filter((book) => book.status === "borrowed");
  if (borrowedBooks.length === 0) {
    noBorrowedBooksMsg.style.display = "block";
  } else {
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

      const returnBtn = li.querySelector(".return-btn") as HTMLButtonElement;
      returnBtn.onclick = () => {
        returnBook(book.id);
        showBorrowedBooks();
      };

      borrowedBookList.appendChild(li);
    }
  });
}

window.onload = () => {
  showBorrowedBooks();
};
