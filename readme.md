# Instructions for the project

# The next steps
- Create the first functions to store book objects in the myLibrary array (DONE)
- Create a render() function to loop through the myLibrary the book objects in the DOM layer (DONE)
- Add javascript to hide and show the add new book section in the html (DONE)
- Add javascript to take the user inputs and add objects to the myLibrary array and refresh the array (DONE)
- Add javascript to remove the book from the myLibrary and render() the page on button click (DONE)
- Add javascript to udpdate the books read status on the book prototype inheritance on button click (DONE)
- Store the myLibrary array to the localStorage
- Get the myLibrary array on page load and display this on the screen
- Check if the myLibrary array exists before displaying it to make sure this doesn't break the website
- General debugging
- Clean up the code 

# Notes from The Odin Project instructions
- All the books objects are going to be stored in an array, so add a function that can take ths users input and store this information in the array

Example of code
let myLibrary = []

function book() {
    // the constructor...
}

function addBookToLibrary() {
    // add the book to the myLibrary array
}

- Hook the array up with a render() function you create, that loops through the array and displays each book as a card on the page.
- Add a 'new book' button that brings up a form allowing users to enter in their info
- Add a button to remove the book from the library
HINT: you need to associate your DOM elements to the array and the easiest way is to use a data-attribute corresponding to the index of the array
- Add a button on each book's display to change its `read` status
HINT: You will want to create the function that toggles a books `read` status on your `book` prototype instance
- Store your data using localStorage, to save the library array to the the users' local computer
- Create a function that looks for the library array on the local computer on page load (make sure it doesn't crash if the library array does not exist)

# From the Webflow export
- In the HTML there will be random Webflow ID's to clean up
- In the CSS there will be CSS stylings for the random Webflow ID's to clean up
- In the JS, the js.webflow files simply makes no sense right now and I have deleted this file