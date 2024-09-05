const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

/**
 * Use body parser to get the field from body of the API
 * app.use(express.json());
 */

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

/**
 * Using middleware
 */
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})