const orm = require("../config/orm.js");

var book = {
    selectAll: function(cb) {
        orm.selectAll(cb,function(res) {
            cb(res);
        });
    },
    insertOne: function(bookTitle, cb) {
        orm.insertOne(bookTitle, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne(condition, function(res) {
            cb(res);
        }); 
    },
    delete: function(condition, cb){
        orm.delete(condition, function(res) {
            cb(res);
        });
    }
};

module.exports = book;