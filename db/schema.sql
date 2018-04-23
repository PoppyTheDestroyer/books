DROP DATABASE if exists books_db;

CREATE DATABASE books_db;
USE books_db;

CREATE TABLE books (
    id INT AUTO_INCREMENT NOT NULL,
    book_title VARCHAR(60) NOT NULL,
    author VARCHAR(30) NOT NULL,
    summary VARCHAR(300),
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

