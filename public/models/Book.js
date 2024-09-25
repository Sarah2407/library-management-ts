export class Book {
    constructor(id, title, author, year, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
    }
}
export function generateUniqueId() {
    return Date.now().toString();
}
export function isValidYear(year) {
    return /^\d{4}$/.test(year.toString());
}
