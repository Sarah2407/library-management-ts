import { Storage } from "./storage.js";
export function borrowBook(bookId) {
    const books = Storage.getBooks();
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1 && books[bookIndex].status === "available") {
        books[bookIndex].status = "borrowed";
        Storage.saveBooks(books);
        alert(`${books[bookIndex].title} has been borrowed successfully!`);
    }
}
