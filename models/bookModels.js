const { Schema, model } = require("mongoose");

// title
// author
// image
// plot
// isRead
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true],
    },
    author: {
      type: String,
      required: [true],
    },
    image: {
      type: String,
    },
    plot: {
      type: String,
      required: [true],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: false }
);

const bookModel = model('book', bookSchema)

module.exports = bookModel