const bookModel = require("../models/bookModels");

const getBooks = async (req, res) => {
  try {
    const data = await bookModel.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = await bookModel.create(req.body);
    res.status(201).send(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

const getBookById = async (req, res) => {
  const { bookId } = req.params;

  try {
    const book = await bookModel.findById(bookId);

    if (!book) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteBookById = async (req, res) => {
  const { bookId } = req.params;
  console.log(bookId);
  try {
    const bookForDelte = await bookModel.findByIdAndDelete(bookId);
    console.log(bookForDelte);
    if (!bookForDelte) {
      res.status(404).json({ message: "book not found" });
      return;
    }

    res.status(200).json({ message: "book was deleted" });
  } catch (error) {
    console.log(error);
  }
};

const updateBook = async (req, res) => {
  const { bookId } = req.params;
  const body = req.body;

  try {
    const bookForUpdate = await bookModel.findByIdAndUpdate(bookId, body, { new: true });
    if (!bookForUpdate) {
      res.status(400).json({ message: "book is not found" });
      return;
    }

    res.status(200).json(bookForUpdate);
  } catch (error) {
    console.log(error);
  }
};

const updateIsReadStatus = async (req, res) => {
  const { bookId } = req.params;
  const body = req.body;

  try {
    const bookForStatusUpdate = await bookModel.findByIdAndUpdate(bookId, body, { new: true });
    if (!bookForStatusUpdate) {
      res.status(400).json({ message: "book is not found" });
      return;
    }

    res.status(200).json(bookForStatusUpdate);
  } catch (error) {}
};

module.exports = { getBooks, addBook, getBookById, deleteBookById, updateBook, updateIsReadStatus };