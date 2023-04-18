let library = [];
let id = 1;

function Book(title, author, length) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.length = length;
  this.read = false;
}

Book.prototype.info = function () {
  const isRead = this.read ? "read" : "not read yet";
  return `${this.title} by ${this.author}, ${this.length} pages, ${isRead} `;
};

const clearBooks = () => {
  const books = document.querySelectorAll(".book");
  books.forEach((book) => {
    book.remove();
  });
};

const addBookToLibrary = () => {
  clearBooks();
  const books = document.getElementById("books");
  library.forEach((book) => {
    const bookDiv = createBook(book);
    books.appendChild(bookDiv);
  });
};

const createBook = (book) => {
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("id", book.id);
  bookDiv.setAttribute("class", "book");

  const title = createTitle(book);
  const author = createAuthor(book);
  const pages = createPages(book);
  const button = document.createElement("button");
  button.innerHTML = "read";

  button.addEventListener("click", (e) => {
    bookDiv.style.backgroundColor = "#d4e4bc";
    book.read = true;
  });

  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(pages);
  bookDiv.appendChild(button);

  return bookDiv;
};

const createTitle = (book) => {
  const titleHeader = document.createElement("h2");
  const titleText = document.createTextNode(book.title);
  titleHeader.appendChild(titleText);
  return titleHeader;
};

const createAuthor = (book) => {
  const authorHeader = document.createElement("h4");
  const authorText = document.createTextNode(book.author);
  authorHeader.appendChild(authorText);
  return authorHeader;
};

const createPages = (book) => {
  const pages = document.createElement("p");
  const numPages = document.createTextNode(`# pages: ${book.length}`);
  pages.appendChild(numPages);
  return pages;
};

const bookForm = document.getElementById("createBook");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookForm = document.getElementById("createBook");
  const title = bookForm.elements["title"];
  const author = bookForm.elements["author"];
  const pages = bookForm.elements["pages"];
  const newBook = new Book(title.value, author.value, pages.value);
  library.push(newBook);
  id++;
  addBookToLibrary();
});

addBookToLibrary();
