let library = [];

function Book(title, author, length) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.read = false;
}

Book.prototype.info = function () {
  const isRead = this.read ? "read" : "not read yet";
  return `${this.title} by ${this.author}, ${this.length} pages, ${isRead} `;
};
