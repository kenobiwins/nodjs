const express = require('express')
const bookRouter = express.Router()
const {
  getBooks,
  addBook,
  getBookById,
  deleteBookById,
  updateBook,
  updateIsReadStatus,
} = require("../controllers/booksControllers");
const validateBookJoi = require("../middlewares/joiValidation");
const validatePutBookJoi = require('../middlewares/putValidateBook')
const patchValidation = require('../middlewares/patchValidate')

bookRouter.get("/", getBooks);
bookRouter.get("/:bookId", getBookById); 
bookRouter.post("/", validateBookJoi, addBook);
bookRouter.delete("/:bookId", deleteBookById);
bookRouter.put("/:bookId", validatePutBookJoi, updateBook);
bookRouter.patch("/:bookId/isRead", patchValidation, updateIsReadStatus);

module.exports = bookRouter;