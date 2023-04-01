const express = require('express')
const bookRouter = express.Router()
const {getBooks,addBook} = require('../controllers/booksControllers')


bookRouter.get("/", getBooks);
// bookRouter.get('/:bookId')
bookRouter.post("/", addBook);
// bookRouter.delete('/:bookId')
// bookRouter.put('/:bookId')
// bookRouter.patch('/:bookId/isRead')

module.exports = bookRouter;

