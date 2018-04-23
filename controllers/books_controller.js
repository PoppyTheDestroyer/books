const express = require("express");
const book = require("../models/book.js");

const router = express.Router();

router.get("/", function(req, res) {
  book.selectAll(function(data) {
    var hbsObject = {
      books: data
    };
    /*console.log("one", data);
    console.log("two", res);*/

    //res.send("hello world!!!!");

    res.render("index", hbsObject);
  });
});

router.post("/api/books", function(req, res) {
  console.log(req.body.name);
  book.insertOne(req.body.name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/books/:id", function(req, res) {
  var condition = `id = ${req.params.id};`;
  console.log("condition", condition);

  book.updateOne(condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/books/:id", function(req, res) {
  var condition = `id = ${req.params.id};`;
  console.log(condition);
  book.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
