// Get the UI elements
const titleEl = document.getElementById("title");
const authorEl = document.getElementById("author");
const isbnEl = document.getElementById("isbn");
const alertEl = document.getElementById("alert");
let form = document.getElementById("form-list");
let bookList = document.getElementById("book-list");

// Define Function

const checkLocalStorage = () => {
  // Q1. Screib eine Funktion, die Prüft ob es schon ein Array von Books schon auf dein Localstorage liegt wenn Ja hol die Bücher vom Localstorage
};

const newBook = () => {
  let list = document.getElementById("book-list");
  let row = document.createElement("tr");
  let books = [];

  if (!titleEl || !authorEl || !isbnEl) {
    alertEl.innerHTML = "Please Fill All The Fields!";
  } else if (isbnEl.value.charAt(0) === String(0)) {
    alertEl.innerHTML = "ISBN should be numbers and should not start with 0";
  } else {
    let book = {
      // Q2. sollte gefüllt werden mit ...
    };

    // Q3. Ruf die "checkLocalStorage" auf und füge das neue Buch in Books Array und speichere es im Localstorage

    //***********start */

    //***********Ende */
    alertEl.innerHTML = "New Book Added!!";

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a onclick="deleteBook(${book.isbn})" class="delete" id="${book.isbn}">X</a></td>
    `;
    list.appendChild(row);
  }

  titleEl.value = "";
  authorEl.value = "";
  isbnEl.value = "";

  event.preventDefault();
};

// addEventListener
// das macht sicher ob du schon auf localstorage Ein array von Books hast wenn die Seite lädt
document.addEventListener("DOMContentLoaded", () => {
  let books=[];
  // Q4. Ruf die "checkLocalStorage" auf um zu prüfen ob ein Array von Books schon auf dein Localstorage liegt wenn Ja hol die Bücher vom Localstorage
  //***********start */

  //***********Ende */
  if (books.length != 0) {
    books.forEach((book) => {
      let list = document.getElementById("book-list");
      let row = document.createElement("tr");

      row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a onclick="deleteBook(${book.isbn})" class="delete" id="${book.isbn}">X</a></td>
            `;
      list.appendChild(row);
    });
  }
});

const deleteBook = (isbn) => {
  let books=[];
  // Q5. Ruf die "checkLocalStorage" auf um zu prüfen ob ein Array von Books schon auf dein Localstorage liegt wenn Ja hol die Bücher vom Localstorage
  //***********start */

  //***********Ende */

  books.forEach((book, index) => {
    if (book.isbn === String(isbn)) {
      console.log(isbn);
      books.splice(index, 1);
      alertEl.innerHTML = "Book removed";
    }

    // Q6. sicherstellen, dass das Array nach der Löschung aktualisiert wird
    //***********start */

    //***********Ende */
  });

  location.reload();
  event.preventDefault();
};