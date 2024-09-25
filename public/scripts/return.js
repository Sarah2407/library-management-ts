import { Storage } from "./storage.js";
export function returnBook(bookId) {
    const books = Storage.getBooks();
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1 && books[bookIndex].status === "borrowed") {
        books[bookIndex].status = "available";
        Storage.saveBooks(books);
        alert(`${books[bookIndex].title} has been returned successfully!`);
    }
}
