const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

const bookRouter = require('./routers/booksRouter')
const authRouter = require('./routers/authRouter')

app.use(express.json())
app.use(morgan('tiny'))
app.use('/auth',authRouter)
app.use('/api/books',bookRouter)

const runServer = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);

    app.listen(3000, () => {

    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runServer();
