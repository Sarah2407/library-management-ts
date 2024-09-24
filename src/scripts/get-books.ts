import { Storage } from "./storage.js";
import { deleteBook } from "./delete-book.js";

//get html element
const bookList = document.querySelector(".book-list") as HTMLUListElement;

//show books
export function showBooks(): void {
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
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <button class="borrow-btn">Borrow</button>
            </div>
          `;

      const deleteBtn = li.querySelector(".delete-btn") as HTMLButtonElement;
      deleteBtn.onclick = () => deleteBook(book.title);

      const editBtn = li.querySelector(".edit-btn") as HTMLButtonElement;
      editBtn.onclick = () => {
        window.location.href = `editBook.html?title=${encodeURIComponent(
          book.title
        )}`;
      };

      bookList.appendChild(li);
    }
  });
}

window.onload = () => {
  showBooks();
};
