# nlp-learning


#### 1 Create an Express Server

* Connect node
    ```
    node init
    ```

* Import necessary libraries
    Libraries Used -
    * Express
    * Mongoose
    * Dotenv
    * Nodemon
    * Helmet
    * Morgan

* Create index.js file & use as the starting point to start the app
    package.json -
    ```
    {
        "name": "nlplearning",
        "version": "1.0.0",
        ...
        "scripts": {
            "start": "nodemon index.js"
        },
        ...
    }

    ```

* Create an Express server
    index.js -
    ```
        const express = require("express");
        const app = express();

        app.listen(5000, ()=>{
            console.log("Backend server is running!!");
        });
    ```

#### 2 Connect with MongoDB

* [MongoDB](https://www.mongodb.com/) -> Connect -> Connect your Application -> Copy the connection string.

* Create a .env file inside the root folder of your app. Paste the connection string here.
    .env -
    ```
        MONGO-URL = mongodb+srv://Chitranxshi:<password>@cluster0.4boo82o.mongodb.net/?retryWrites=true&w=majority
    ```
    
    index.js
    ```
        const express = require("express");
        const app = express();
        const mongoose = require("mongoose");
        const helmet = require("helmet");
        const morgan = require("morgan");
        const dotenv = require("dotenv");

        dotenv.config();

        mongoose.connect(process.env.MONGO_URL, ()=>{
            console.log("Connected to MongoDB!!");
        });

        // middleware
        app.use(express.json());
        app.use(helmet());
        app.use(morgan("common"));

        app.get("/", (req, res)=>{
            // res.send("Welcome to homepage!!");
            // res.sendFile(__dirname + "/package-lock.json");
        });

        app.listen(5000, ()=>{
            console.log("Backend server is running!!");
        });
    ```

#### 3 Create Routes

#### login & registration system

#### Node.js Express CRUD
#### Follow & Unfollow user
#### Create models
#### Node.js Post CRUD
#### Like & dislike post
#### Nested asynchronous fetch

#### 4 Connect with MongoDB