const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction.js");

//INDEX
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// SHOW
transactions.get("/:arrayIndex", (req, res) => {
  if (transactionsArray[req.params.arrayIndex]) {
    res.json(transactionsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});


// DELETE
transactions.delete("/:arrayIndex", (req, res) => {
  if (transactionsArray[req.params.arrayIndex]) {
    const deletedLog = transactionsArray.splice(req.params.arrayIndex, 1);
    res.status(200).json(deletedLog);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});


// UPDATE
transactions.put("/:arrayIndex", (req, res) => {
  if (transactionsArray[req.params.arrayIndex]) {
    transactionsArray[req.params.arrayIndex] = req.body;
    res.status(200).json(transactionsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = transactions;
