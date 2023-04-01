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

module.exports = { getBooks, addBook };
