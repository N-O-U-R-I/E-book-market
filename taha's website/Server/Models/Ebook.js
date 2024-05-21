const mongoose = require('mongoose');

const ebookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  coverImage: { type: String, required: true },
  downloadLink: { type: String, required: true }
});

const Ebook = mongoose.model('Ebook', ebookSchema);

module.exports = Ebook;
