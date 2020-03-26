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
    for (const item of array) {
        const grid = document.querySelector('.book-grid');

        // Book card
        const book = document.createElement('div');
        book.classList.add('book');
        grid.appendChild(book);                                

        // Gradient section
        const gradient = document.createElement('div');
        gradient.classList.add('book-gradient');   

        const removeBook = document.createElement('div');
        removeBook.classList.add('remove-book');
        const removeX = document.createElement('div');
        removeX.textContent = 'x';
        removeBook.appendChild(removeX);
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

function showAddNewBook() {
    document.querySelector('.new-book-section').style.display = 'flex'
}

let newBookBtn = document.querySelector('.add-new-book')
newBookBtn.addEventListener('click', () => showAddNewBook())


function hideAddNewBook(){
    document.querySelector('.new-book-section').style.display = 'none'
}

let closeBookBtn = document.querySelector('.close-new-book')
closeBookBtn.addEventListener('click', () => hideAddNewBook())

let timsBook = new book('The Mad History Of The Kelly Gang', 'Tim Kelly', 349, true);
addBookToLibrary(timsBook);

let paulsBook = new book('Why I Dropped My Beer To Catch A Football', 'Paul Kelly', 239, false);
addBookToLibrary(paulsBook)

render(myLibrary)