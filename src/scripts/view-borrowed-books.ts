import { Storage } from "./storage.js";
import { returnBook } from "./return.js";

//get html element
const borrowedBookList = document.querySelector(
  ".borrowed-book-list"
) as HTMLUListElement;

//show borrowed books
export function showBorrowedBooks(): void {
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

      const returnBtn = li.querySelector(".return-btn") as HTMLButtonElement;
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
