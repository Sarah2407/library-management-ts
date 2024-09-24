import { Library } from "../classes/Library.js";
import { Book } from "../models/Book.js";

// create a new library instance
const library = new Library();

//#region Html Elements
const bookList = document.querySelector(".book-list") as HTMLUListElement;
const borrowedList = document.querySelector(
  ".borrowed-list"
) as HTMLUListElement;

const addBookForm = document.getElementById("addBookForm") as HTMLFormElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const authorInput = document.getElementById("author") as HTMLInputElement;

const borrowReturnForm = document.getElementById(
  "borrowReturnForm"
) as HTMLFormElement;
const bookTitleInput = document.getElementById("bookTitle") as HTMLInputElement;
const actionInput = document.getElementById("action") as HTMLSelectElement;

//#endregion

//#region Book Methods

// show books
function showBooks(): void {
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
    } else {
      bookList.appendChild(li);
    }
  });
}

//#endregion

//#region Event Listeners

// add a book
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

//borrow or return book
borrowReturnForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = bookTitleInput.value;
  const action = actionInput.value;

  if (action === "borrow") {
    library.borrowBook(title);
  } else if (action === "return") {
    library.returnBook(title);
  }

  showBooks();

  bookTitleInput.value = "";
  actionInput.value = "";
});

//#endregion
