# Library Management Tool

A simple library management tool built using TypeScript, HTML, and CSS. This project allows users to add, edit, delete, and borrow books. The data is stored in the browser's local storage.

## Features

- Add a new book with title, author, and year.
- Edit the details of an existing book.
- Delete a book from the library.
- Borrow a book and return it when done.
- Prevent duplicate books from being added.
- Validate book information such as year (only valid 4-digit years are accepted).

## Technologies Used

- **TypeScript**: Used for writing the logic and handling the book management system.
- **HTML/CSS**: For the UI and structure.
- **Local Storage**: To persist book data in the browser.

## How to Run the Project

### Prerequisites

You need a browser with JavaScript enabled to run this project. The project uses local storage, so no backend is required.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Sarah2407/library-management-ts.git
   cd library-management-ts
   ```

2. Open the `index.html` file in your browser:

   ```bash
   open index.html
   ```

3. You can now add, edit, and manage books using the system.

## Project Structure

- `public/`
  - `styles/`: Contains CSS styles for the UI.
  - `scripts/`: Contains TypeScript files that handle the core logic (e.g., adding books, updating books, and managing local storage).
  - `models/`: Contains the book model.
- `index.html`: The main page of the library management system.
- `README.md`: Project documentation.

## How the Add/Edit Functionality Works

- **Adding a Book**: You can add a new book by clicking the "Add New Book" button, which will open a modal. Fill in the book details (title, author, and year), and the book will be added to the library.
- **Editing a Book**: Click on the edit button next to a book to open a page with pre-filled information. You can update the details and save the changes.

## Local Storage

The data is saved in the browser's local storage. If you close and reopen the browser, your book list will still be available. To clear the data, you can clear your browser's local storage.
