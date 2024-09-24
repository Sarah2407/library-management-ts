import { Storage } from "./storage.js";

//borrow a book
export function borrowBook(bookTitle: string): void {
  const books = Storage.getBooks();
  const bookIndex = books.findIndex((book) => book.title === bookTitle);

  if (bookIndex !== -1 && books[bookIndex].status === "available") {
    books[bookIndex].status = "borrowed";
    Storage.saveBooks(books);
    alert(`${bookTitle} has been borrowed successfully!`);
  }
}
