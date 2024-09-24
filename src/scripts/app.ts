// import { Library } from "../classes/Library.js";
// import { Book } from "../models/Book.js";

// // create a new library instance
// const library = new Library();

// //#region Html Elements
// const bookList = document.querySelector(".book-list") as HTMLUListElement;
// const borrowedList = document.querySelector(
//   ".borrowed-list"
// ) as HTMLUListElement;

// const addBookForm = document.getElementById("addBookForm") as HTMLFormElement;
// const titleInput = document.getElementById("title") as HTMLInputElement;
// const authorInput = document.getElementById("author") as HTMLInputElement;

// const borrowReturnForm = document.getElementById(
//   "borrowReturnForm"
// ) as HTMLFormElement;
// const bookTitleInput = document.getElementById("bookTitle") as HTMLInputElement;
// const actionInput = document.getElementById("action") as HTMLSelectElement;

// //#endregion

// //#region Book Methods

// //#endregion

// //#region Event Listeners

// //borrow or return book
// borrowReturnForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const title = bookTitleInput.value;
//   const action = actionInput.value;

//   if (action === "borrow") {
//     library.borrowBook(title);
//   } else if (action === "return") {
//     library.returnBook(title);
//   }

//   showBooks();

//   bookTitleInput.value = "";
//   actionInput.value = "";
// });

// //#endregion
