import { Storage } from "./storage.js";
import { showBooks } from "./app.js";

export function deleteBook(bookTitle: string) {
  const books = Storage.getBooks();

  const updatedBooks = books.filter((book) => book.title !== bookTitle);

  Storage.saveBooks(updatedBooks);

  alert("Book deleted successfully!");

  showBooks();
}
