const myLibrary = [{
    author: "J.K. Rowling",
    title: "Harry Potter i Komnata Tajemnic",
    numberOfPages: 363,
    readOrNot: true,
    bookInfo: bookInfofunction
}, {
    author: "Cixin Liu",
    title: "Problem trzech ciał",
    numberOfPages: 452,
    readOrNot: false,
    bookInfo: bookInfofunction
}
];


function Book(inputAuthor, inputTitle, inputNumberOfPages, inputReadOrNot) {
    this.author = inputAuthor;
    this.title = inputTitle;
    this.numberOfPages = inputNumberOfPages;
    this.readOrNot = inputReadOrNot;
    this.bookInfo = bookInfofunction;
}

function bookInfofunction () {
    return (`${this.title} by ${this.author}, ${this.numberOfPages} pages, ${checkIfBookRead(this.readOrNot)}`)}

function checkIfBookRead(read){
    if (read) {
        return "read already";
    } else { 
        return "not read yet";
    }
}

function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let numberOfPages = document.getElementById("numberOfPages").value;
    let readOrNot="";
    if(document.getElementById("read").checked) {
        readOrNot=true;
    } else {
        readOrNot=false;
    }
    let book = new Book(author, title, numberOfPages,readOrNot);
    myLibrary.push(book);
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("numberOfPages").value="";
    document.getElementById("read").checked=false;
    document.getElementById("unread").checked=false;
}

document.getElementById("save").addEventListener("click", addBookToLibrary);



function displayAllBooks() {
    document.querySelectorAll(".book").forEach(el => el.remove());
    let placeForBooks = document.querySelector("#placeForBooks");
    for (i = 0; i <= myLibrary.length - 1; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("book");
        placeForBooks.appendChild(newDiv);
        newDiv.textContent = myLibrary[i].bookInfo();
    }
}

document.getElementById("showBooks").addEventListener("click", displayAllBooks);


document.getElementById("formForNewBook").style.visibility="hidden";

document.getElementById("addNewBook").addEventListener("click", function(){
    document.getElementById("formForNewBook").style.visibility="visible";
}) 



