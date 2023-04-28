# Todo App (PERN Stack - Postgres, Express, React, and Node)

A simple Todo App built with the PERN stack combining PERN technologies, so they can interact in order for it to function as full-stack web application.

## Main Learning Points:

* How the Front End interacts with the Server and Relational Database via REST API which is using Hypertext Transfer Protocol (HTTP Requests) to run CRUD operations in the database.
* Actual CRUD Operations only occur in our database (whether postgres, MongoDB, MySQL...)
* Building a server (index.js) require libraries, adding the middleware app.use and app.listen to start server.
* How to create a Postgres Database and Table (including defining our PostgreSQL Schema)
* Connecting a Postgres Database and Server (require 'pg' library and our Pool, create a new Pool and set up our configurations inside, import into Server index.js).
* Building Routes (POST, GET, PUT, DELETE) with PostgreSQL Queries (REST API)
* Testing RESTful APIs with Postman and/or Thunder in VS Code.
* Setting up a Client Side with React.
* Building Components (Input, List, Edit and Delete).
* Passing Props via components.
* Using Bootstrap v5 Library to add Tables, Buttons and Modals to the app.


## Built with:

* React.js
* JavaScript
* Node.js
* Express
* PostgreSQL
* CORS - Cross-Origin Resource Sharing
* HTML
* CSS
* Bootstrap 5

## Deployed with:

* Deployed using ....

## Project Setup & Running:

* Prerequisites
  * Install Node.js
  * Install [postgres](https://www.youtube.com/watch?v=fZQI7nBu32M&t=0s)

* Clone Repo `https://github.com/MiguelLamas/to-do-app-pern-stack.git`

* Before starting the project, follow these steps to create project and get your server up and running:

  * `mkdir server` - starting our server
  * `cd server`
  * `npm init` - is going to keep track of all our packages inside the application
  * `npm install express pg cors` - express allows us to quickly create a server in Node.js, cors allows different domain applications to interact with each other (server will be running on localhost:5000 & React App on localhost:3000, postgres is there to connect our server with our database in order to run postgres queries)
  * `touch index.js` - require the libraries in this file, app.listen to start server, app.use to create middlewear (express, cors)
  * `npm install -g nodemon`
  * `nodemon index` - will watch index.js file, every time there's a change it will instantly restart it
  * `npx create-react-app client` - setting up client side with React
  * `npm start` - to get client side started

* To make your dev experience easier, download these VS code extensions:
  * ES7 React/Redux/GraphQL/React-Native snippets
  * ESLint

## Developer:

* Miguel Lamas - [GitHub](https://github.com/MiguelLamas)

## License:

Copyright (c) 2023 Miguel Lamas - https://github.com/MiguelLamas


