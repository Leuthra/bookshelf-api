
<h1 align="center">Bookshelf API</h1>
<p align="center">Bookshelf API is a simple RESTful API developed using the hapi framework on node.js. This API allows CRUD (Create, Read, Update, Delete) operations which are basic related to bookshelf data.</p>


<h2>Prerequisites</h2>

- node.js installed on your machine [download](https://nodejs.org/en/download)
- npm (Node Package Manager) installed [see](https://npmjs.com)
- Any code editor of your choice (e.g., Visual Studio Code)

<h2>Getting Started</h2>

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/leuthra/bookshelf.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bookshelf
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npm start
    ```

   The API will be accessible at [http://localhost:3000](http://localhost:3000).

<h2>Endpoints</h2>

- `GET /books`: Get all books.
- `GET /books/{bookId}`: Get a specific book by ID.
- `POST /books`: Add a new book.
- `PUT /books/{bookId}`: Update a book by ID.
- `DELETE /books/{bookId}`: Delete a book by ID.

<h2>Usage</h2>

- You can use tools like [postman](postman.com) to test the API endpoints.

- and you can check the docs bookshelf api test on [docs](https://documenter.getpostman.com/view/29635580/2s9YsKgC32)