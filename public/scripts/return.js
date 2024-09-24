import { Storage } from "./storage.js";
export function returnBook(bookTitle) {
    const books = Storage.getBooks();
    const bookIndex = books.findIndex((book) => book.title === bookTitle);
    if (bookIndex !== -1 && books[bookIndex].status === "borrowed") {
        books[bookIndex].status = "available";
        Storage.saveBooks(books);
        alert(`${bookTitle} has been returned successfully!`);
    }
}
