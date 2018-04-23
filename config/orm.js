const connection = require("./connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value ="'" + value + "'";
            }
            arr.push(`${key} = ${value}`);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM books;";
        connection.query(queryString, function(err, res) {
            if(err) throw err;
            console.log(res);
            console.log("crap");
            cb(res);
            return res;
        });
    },
    insertOne: function(bookName, cb) {
        var queryString = `INSERT INTO books (book_name, devoured) VALUES ("${bookName}", false);`;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if(err) throw err;
            console.log(res);
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        console.log(condition);
        var queryString = `UPDATE books SET devoured = true WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    delete: function(condition, cb) {
        var queryString = `DELETE FROM books WHERE ${condition}`;
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
};

module.exports = orm;