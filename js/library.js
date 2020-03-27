let myLibrary = []

function book(title, author, pages, reading) {
    this.title = title
    this.author = author
    this.pages = pages
    this.reading = reading
}

function addBookToLibrary(object) {
    myLibrary.push(object)
};

function render(array) {
    const grid = document.querySelector('.book-grid');
    grid.innerHTML = '';

    for (const [index, item] of array.entries()) {

        // Book card
        const book = document.createElement('div');
        book.classList.add('book');
        book.setAttribute('data-value', index)
        grid.appendChild(book);                                

        // Gradient section
        const gradient = document.createElement('div');
        gradient.classList.add('book-gradient');   

        const removeBook = document.createElement('div');
        removeBook.classList.add('remove-book');
        removeBook.textContent = 'x';
        gradient.appendChild(removeBook);
        book.appendChild(gradient);
        
        // Publisher section
        const publisher = document.createElement('div');
        publisher.classList.add('book-classics');

        const img = new Image(); 
        img.src = "images/kangaroo.png"
        img.width = "40"

        const publisherName = new Text("Kelly");
        const publisherType = new Text("Classics");

        publisher.appendChild(publisherName);
        publisher.appendChild(img);
        publisher.appendChild(publisherType);
        book.appendChild(publisher);

        // Book title section
        const info = document.createElement('div');
        info.classList.add('book-info');

        const bookAuthor = document.createElement('div')
        bookAuthor.textContent = item.author
        bookAuthor.classList.add('book-author')
        const bookTitle = document.createElement('div')
        bookTitle.textContent = item.title
        bookTitle.classList.add('book-title')
  
        info.appendChild(bookAuthor);
        info.appendChild(bookTitle);
        book.appendChild(info);

        // Book complete section
        const pagesBlock = document.createElement('div');
        pagesBlock.classList.add('pages-block');

        const pageCount = document.createElement('div');
        pageCount.textContent = `${item.pages} pages`;

        const readButton = document.createElement('div');
        readButton.classList.add('read-button');
        if (item.reading === false) {
            readButton.classList.add('not');
            readButton.textContent = 'Reading';
        } else {
            readButton.textContent = 'Finished';
        }

        pagesBlock.appendChild(pageCount);
        pagesBlock.appendChild(readButton);
        book.appendChild(pagesBlock);
    };
}

// Show add new book form

function showAddNewBook() {
    document.querySelector('.new-book-section').style.display = 'flex'
}

let newBookBtn = document.querySelector('.add-new-book')
newBookBtn.addEventListener('click', showAddNewBook)


function hideAddNewBook(){
    document.querySelector('.new-book-section').style.display = 'none'
}

let closeBookBtn = document.querySelector('.close-new-book')
closeBookBtn.addEventListener('click', hideAddNewBook)

// Add new book to myLibrary array

function addBook() {
    let title = document.querySelector('#Title');
    let author = document.querySelector('#Author');
    let pages = document.querySelector('#Pages');
    let checkbox = document.querySelector('#reading-complete')

    if (title.value && author.value && pages.value) {
        let newBook = new book(title.value, author.value, pages.value, checkbox.checked);
        addBookToLibrary(newBook);
        render(myLibrary);

        title.value = '';
        author.value = '';
        pages.value = '';
        checkbox.checked = false;
        hideAddNewBook();
    }
};  

let submitBookBtn = document.querySelector('.submit-button');
submitBookBtn.addEventListener('click', addBook);

// Example books created in the DOM layer

let timsBook = new book('The Mad History Of The Kelly Gang', 'Tim Kelly', 349, true);
addBookToLibrary(timsBook);

let paulsBook = new book('Why I Dropped My Beer To Catch A Football', 'Paul Kelly', 239, false);
addBookToLibrary(paulsBook);

let allensBook = new book('Why I Bleep Bloop', 'Allen Elf', 238, false);
addBookToLibrary(allensBook);

// Render books in DOM layer

render(myLibrary);

// Delete book from myLibrary array

const grid = document.querySelector('.book-grid');

grid.addEventListener('click', deleteBook);

function deleteBook(e) {
    if (e.target.matches('.remove-book')) {
        bookIndex = e.target.parentNode.parentNode.getAttribute('data-value');
        myLibrary.splice(bookIndex, 1);
        render(myLibrary);
    }
};

// Toggle finished and read status

grid.addEventListener('click', toggleRead)

function toggleRead(e) {
    if (e.target.matches('.read-button')) {
        bookIndex = e.target.parentNode.parentNode.getAttribute('data-value');
        bookObject = myLibrary[bookIndex];

        if(bookObject.reading === false) {
            bookObject.reading = true;
        } else {
            bookObject.reading = false;
        }
        
        render(myLibrary)
    }
}