# nlp-learning


#### 1 Create a Rest API

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