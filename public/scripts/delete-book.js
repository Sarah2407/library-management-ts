import { Storage } from "./storage.js";
import { showBooks } from "./app.js";
export function deleteBook(bookId) {
    const books = Storage.getBooks();
    const updatedBooks = books.filter((book) => book.id !== bookId);
    Storage.saveBooks(updatedBooks);
    alert("Book deleted successfully!");
    showBooks();
}
