const myLibrary = [{
    author: "J.K. Rowling",
    title: "Harry Potter i Komnata Tajemnic",
    numberOfPages: 363,
    readOrNot: "read already",
    bookInfo: function () {
        return (`${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.readOrNot}`)
    },
}, {
    author: "Cixin Liu",
    title: "Problem trzech ciał",
    numberOfPages: 452,
    readOrNot: "not read yet",
    bookInfo: function () {
        return (`${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.readOrNot}`)
    }
}
];


function Book(inputAuthor, inputTitle, inputNumberOfPages, inputReadOrNot) {
    this.author = inputAuthor
    this.title = inputTitle
    this.numberOfPages = inputNumberOfPages
    this.readOrNot = inputReadOrNot
    this.bookInfo = function () {
        return (`${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.readOrNot}`)
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numberOfPages = document.getElementById("numberOfPages").value;
    let readOrNot="";
    if(document.getElementById("read").checked) {
        readOrNot="read already"
    } else if (document.getElementById("unread").checked){
        readOrNot="not read yet"
    }
    let book = new Book(author, title, numberOfPages,readOrNot);
    console.log(book);
    myLibrary.push(book);
    console.log(myLibrary);

}

document.getElementById("addNewBook").addEventListener("click", addBookToLibrary)

function displayAllBooks() {
    document.querySelectorAll(".book").forEach(el => el.remove());
    for (i = 0; i <= myLibrary.length - 1; i++) {
        let placeForBooks = document.querySelector("#placeForBooks");
        let newDiv = document.createElement("div");
        newDiv.classList.add("book");
        placeForBooks.appendChild(newDiv);
        newDiv.textContent = myLibrary[i].bookInfo();
    }
}

document.getElementById("showBooks").addEventListener("click", displayAllBooks)

//dlaczego przy addEventListenerze nie muszę podawać nawiasów przy funkcji?
//debugowanie krok po kroku
//dlaczego wywala polskie znaki przy wyświetlaniu
