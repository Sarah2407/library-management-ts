export class Library {
    constructor(books = []) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
    }
    getBooks() {
        return this.books;
    }
    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
    }
    borrowBook(title) {
        const book = this.books.find((book) => book.title === title && book.status === "available");
        if (book) {
            book.status = "borrowed";
            return true;
        }
        return false;
    }
    returnBook(title) {
        const book = this.books.find((book) => book.title === title && book.status === "borrowed");
        if (book) {
            book.status = "available";
            return true;
        }
        return false;
    }
}
