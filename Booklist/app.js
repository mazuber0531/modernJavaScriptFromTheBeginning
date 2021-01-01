//book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//ui constructor
function UI() {}

//Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  //create tr element
  const row = document.createElement("tr");
  //insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href='#' class="delete">X</a></td>
  `;
  list.appendChild(row);
  console.log(row);
};

//show alert
UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement("div");
  //add class name
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  //insert alert
  container.insertBefore(div, form);
  //timeout
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

//clear fields
UI.prototype.clearfields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//Event Listener for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  //get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //instantiate book
  const book = new Book(title, author, isbn);

  //instantiate ui
  const ui = new UI();

  //validation
  if (title === "" || author === "" || isbn === "") {
    //error alert
    ui.showAlert("Please fill in all fields, hon.", "error");
  } else {
    //add book to list
    ui.addBookToList(book);

    ui.showAlert("Book Added!", "success");

    //delete book
    UI.prototype.deleteBook = function (target) {
      if (target.className === "delete") {
        target.parentElement.parentElement.remove();
      }
    };
    //clear fields
    ui.clearfields();
  }

  console.log(book);
  console.log(title, author, isbn);
  e.preventDefault();
});

//event listener for delete table row
document.getElementById("book-list").addEventListener("click", function (e) {
  //instantiate UI
  const ui = new UI();

  ui.deleteBook(e.target);

  //show delete alert
  ui.showAlert("Book Removed", "success");
  e.preventDefault;
});
