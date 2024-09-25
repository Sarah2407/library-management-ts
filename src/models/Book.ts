export class Book {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public year: number,
    public status: "available" | "borrowed"
  ) {}
}

export function generateUniqueId(): string {
  return Date.now().toString();
}

// Validate year (4 digits only)
export function isValidYear(year: number): boolean {
  return /^\d{4}$/.test(year.toString());
}
