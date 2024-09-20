import { Book } from "../models/Book";

export class Library {
  constructor(private books: Book[] = []) {}

  // add a book
  addBook(book: Book): void {
    const availableBook = this.books.find(
      (book1) => book1.title === book.title && book1.author === book.author
    );
    if (availableBook) {
      alert(
        `Book with title ${availableBook.title} and author ${availableBook.author} already exists`
      );
      return;
    }
    this.books.push(book);
  }

  // get all books
  getBooks(): Book[] {
    return this.books;
  }

  // borrow a book
  borrowBook(title: string): boolean {
    const book = this.books.find(
      (book) => book.title === title && book.status === "available"
    );
    if (book) {
      book.status = "borrowed";
      return true;
    }
    alert("Book is not available");
    return false;
  }

  // return a book
  returnBook(title: string): boolean {
    const book = this.books.find(
      (book) => book.title === title && book.status === "borrowed"
    );
    if (book) {
      book.status = "available";
      return true;
    }
    return false;
  }
}
