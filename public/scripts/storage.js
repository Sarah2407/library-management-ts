const STORAGE_KEY = "libraryBooks";
export class Storage {
    static saveBooks(books) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    }
    static getBooks() {
        const books = localStorage.getItem(STORAGE_KEY);
        return books ? JSON.parse(books) : [];
    }
    static clearBooks() {
        localStorage.removeItem(STORAGE_KEY);
    }
}
