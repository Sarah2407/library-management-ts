import { Book } from "../models/Book";

export class Library {
  constructor(private books: Book[] = []) {}

  // add a book
  addBook(book: Book): void {
    this.books.push(book);
  }

  // get all books
  getBooks(): Book[] {
    return this.books;
  }

  // remove a book
  removeBook(title: string): void {
    this.books = this.books.filter((book) => book.title !== title);
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
