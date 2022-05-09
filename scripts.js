const myLibrary = [{
    author: 'Rowling',
    title: 'Harry Potter',
    numberOfPages: 232,
    bookInfo: function () {
        return (`${this.title} by ${this.author}, ${this.numberOfPages} pages`)
    },
}, {
    author: 'Cixin Liu',
    title: 'Problem trzech ciał',
    numberOfPages: 452,
    bookInfo: function () {
     return (`${this.title} by ${this.author}, ${this.numberOfPages} pages`)
    }
}
];


function Book(inputAuthor, inputTitle, inputNumberOfPages) {
    this.author = inputAuthor
    this.title = inputTitle
    this.numberOfPages = inputNumberOfPages
    //this.readOrNot = inputReadOrNot
    this.bookInfo = function () {
        return (`${this.title} by ${this.author}, ${this.numberOfPages} pages`)
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numberOfPages = document.getElementById("numberOfPages").value;
    //let readOrNot=document.getElementsByName("readOrNot").value;
    let book = new Book(author, title, numberOfPages);
    console.log(book);
    myLibrary.push(book);
    console.log(myLibrary);

}

document.getElementById("addNewBook").addEventListener("click", addBookToLibrary)

function displayAllBooks() {
    document.querySelectorAll(".book").forEach(el=>el.remove());
    for (i = 0; i <= myLibrary.length - 1; i++) {
        let placeForBooks = document.querySelector("#placeForBooks");
        let newDiv = document.createElement("div");
        newDiv.classList.add("book");
        placeForBooks.appendChild(newDiv);
        newDiv.textContent = myLibrary[i].bookInfo();
    }
}

document.getElementById("showBooks").addEventListener("click", displayAllBooks)

