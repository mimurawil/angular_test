# Simple CRUD (Angular 8 + Redux)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Objective

Using Redux (@ngrx/store and @ngrx/effects), adapt the existing components `books-list.component` and `books-detail.component` to create a simple CRUD app.

Don't worry about CSS style, but please make it at least readable in the UI.

### Books List

`books-list.component` will load and show a simple list of books.

- In this view, add a button ("Add Book")
- While loading the data, display a simple message `loading...`
- After loading the data, display the books list
- When the user clicks on a title, the app will navigate to the details of the book


### Book Detail

`books-detail.component` will display the details of the book when receiving an id in the url, or will display the empty form when it's a create book scenario.

- In this view the user can save a new book, update an existing one, or delete the book
- In this view, add a link ("Back to Books List")
- While loading the data, display a simple message `loading...`
  - This is for the case of updating a book, or deleting a book (when you have to load the book's details)
- While processing the add/update/delete book, disable the "Save" and "Delete" buttons
- After adding/updating/deleting a book, navigate back to the "Books List" view


### Service

For all service calls, add a delay of 3 seconds so I can see there's something loading.

All data can be stored in the service. I just want to see the CRUD working coherently once the app is running.

## Important

Don't forget to lint and build to make sure your code is clean.

`ng lint`

`ng build --aot`

You can make use of any other npm libraries if you want, but make sure your package has no vulnerabilities.
