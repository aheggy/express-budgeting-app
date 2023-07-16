//DEPENDENCIES
const express = require("express");
const cors =require("cors")
const transactions = require("./controllers/transactionsController")


//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors())

//ROUTES
app.get("/", (req, res) => {
    res.send("welcome to Budget app")
});

app.use("/transactions", transactions)

// //404 PAGE
// app.use("/*", (req, res) => {
//     res.status(404).send("Sorry, No page found!")
// });

// EXPORT 
module.exports = app;