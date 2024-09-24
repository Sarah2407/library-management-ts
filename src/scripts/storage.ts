import { Book } from "../models/Book";

const STORAGE_KEY = "libraryBooks";
export class Storage {
  //method to save books to local storage
  public static saveBooks(books: Book[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }

  //method to get books from local storage
  public static getBooks(): Book[] {
    const books = localStorage.getItem(STORAGE_KEY);
    return books ? JSON.parse(books) : [];
  }

  //method to clear books from local storage
  public static clearBooks(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}
