## Index

- [Index](#index)
- [About](#about)
  - [Links](#links)
- [Technology](#technology)
  - [Installation](#installation)
- [Running the backend](#running-the-backend)
- [Running the frontend](#running-the-frontend)


## About

This application is a copy of the playground, with its main features. Enabling the user to create a PDF easily, using html, json, javascript and css.

### Links

1. **JsReport Playground:**

    https://playground.jsreport.net/

## Technology

Here is a brief overview of our technology stack::

- **[Backend]**
- **[Docker](https://docs.docker.com)** and **[Docker Compose](https://docs.docker.com/compose/)** Tool used to create our development and test environments in aws.
- **[MongoDB](https://www.mongodb.com/)** how to store our data.
- **[Express](https://github.com/expressjs/express)**  tool to build web server with nodejs.
- **[JsReport](https://jsreport.net/)**
- **[Phantom-pdf](https://jsreport.net/learn/phantom-pdf)**

- **[Frontend]**
- **[React](https://reactjs.org/)** Library used to control the application interface
- **[Redux-Saga](https://redux-saga.js.org/)** To control asynchronous operations
- **[Reduxsauce](https://github.com/infinitered/reduxsauce)** Provides a few tools for working with Redux-based codebases.
- **[Semanti-ui-react](https://react.semantic-ui.com/)** Library used to build the application layout

### Installation

If you've never developed this app before:

1. **Clone the repository with SSH:**
    
    ```sh
    $ git@github.com:cgama-dev/app-report.git
    ```
2. **Clone the repository with HTTPS:**
    
    ```sh
    $ https://github.com/cgama-dev/app-report.git
    ```

## Running the backend

To run the server, you will have to install couchdb database

1. **Install the database:**
   
    - **[Install MongoDB](https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-windows/)**

2. **Create the database:**

    -- **Ex: db_jsreport**

     ```sh 
        projectName: {
          type: String,
          required: true
        },
        url: {
          type: String
        },
        createdAt: {
          type: Date,
          default: Date.now
        }
    ```
3. **Configure Database with your credentials:**

    ```sh
        $ cd app-report/api/src
        $ vim .env.development
    ```

     -- **Ex: edit .env.development**

     ```sh
    $ MONGODB_URI=mongodb://username:password@localhost:port/db_jsreport
    ```

     -- **Ex: edit .index.js**

     ```sh
    $ cd app-report/api/src/database
    $ vim index.js
    ```
     -- **Add variable MONGODB_URI in connect**
     ```sh
    $ mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true
    })
    ```

4. **Install project dependency:**
   
   ```sh
    $ cd  app-report/api/ && yarn
    ```
    ou

    ```sh
    $ cd  app-report/api/ && npm install
    ```

5. **Then finally run the server with development:**    
    ```sh
    $ yarn start
    ```

6. **The application is running by default on port 4010**

    ```sh
    $ http://localhost:3011
    ```

## Running the frontend

1. **Install project dependency:**
   
    ```sh
    $ cd app-report/client && yarn
    ```
        ou

    ```sh
    $ cd app-report/client && npm install
    ```

2. **Configure conection with api edit file:**    

    ```sh
    $ vim app-report/client/src/redux/sagas/reports.js
    ```

4. **Then finally run the client with**
     
    ```sh
    $ yarn start
    ```
5. **Default loading in port 3000**

    ```sh
    $ http://localhost:3000
    ```
