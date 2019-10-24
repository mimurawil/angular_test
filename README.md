# Simple List & Details (Angular 8 + Redux)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Objective

Using Redux (@ngrx/store and @ngrx/effects), adapt the existing components `books-list.component` and `book-detail.component` to create a simple List & Show Details app.

Don't worry about CSS style, but please make it at least readable in the UI.

### Books List

`books-list.component` will load and show a simple list of books.

- While loading the data, display a simple message `loading...`
- After loading the data, display the books list
- When the user clicks on a title, the app will navigate to the details of the book


### Book Detail

`books-detail.component` will display the details of the book when receiving an id in the url.

- While loading the data, display a simple message `loading...`


### Service

For all service calls, add a delay of 3 seconds so I can see there's something loading.

All data can be stored in the service. I just want to see the CRUD working coherently once the app is running.

## Important

Don't forget to lint and build to make sure your code is clean.

`ng lint`

`ng build --aot`

You can make use of any other npm libraries if you want, but make sure your package has no vulnerabilities.
