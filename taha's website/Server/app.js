const express = require('express');
const mongoose = require('mongoose');
const ebookRoutes = require('./Routes/ebooks');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ebook_marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit with error
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/ebooks', ebookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
