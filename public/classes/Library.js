export class Library {
    constructor(books = []) {
        this.books = books;
    }
    addBook(book) {
        const availableBook = this.books.find((book1) => book1.title === book.title && book1.author === book.author);
        if (availableBook) {
            alert(`Book with title ${availableBook.title} and author ${availableBook.author} already exists`);
            return;
        }
        this.books.push(book);
    }
    getBooks() {
        return this.books;
    }
    borrowBook(title) {
        const book = this.books.find((book) => book.title === title && book.status === "available");
        if (book) {
            book.status = "borrowed";
            return true;
        }
        alert("Book is not available");
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
