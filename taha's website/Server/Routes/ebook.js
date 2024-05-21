const express = require('express');
const router = express.Router();
const Ebook = require('../Models/Ebook');

// Get all e-books
router.get('/', async (req, res) => {
  try {
    const ebooks = await Ebook.find();
    res.json(ebooks);
  } catch (error) {
    res.status(500).json({ message: 'Error getting e-books', error });
  }
});

// Get a single e-book by ID
router.get('/:id', async (req, res) => {
  try {
    const ebook = await Ebook.findById(req.params.id);
    if (!ebook) {
      return res.status(404).json({ message: 'E-book not found' });
    }
    res.json(ebook);
  } catch (error) {
    res.status(500).json({ message: 'Error getting e-book', error });
  }
});

module.exports = router;
