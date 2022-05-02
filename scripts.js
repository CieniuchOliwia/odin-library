let myLibrary = [];


function Book(author, title, numberOfPages, readOrNot) {
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.readOrNot = readOrNot
    this.bookInfo = function () {
        console.log(`${title.value} by ${author.value}, ${numberOfPages.value} pages, ${readOrNot.value}`)
    }
}

function addBookToLibrary() {
    console.log("ok");
    let title=document.getElementById("title");
    let author=document.getElementById("author");
    let numberOfPages=document.getElementById("numberOfPages");
    let readOrNot=document.getElementsByName("readOrNot");
    let book= new Book(author,title,numberOfPages,readOrNot);
    book.bookInfo();
}

document.getElementById("btn").addEventListener("click", addBookToLibrary)