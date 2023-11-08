const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const flashcardRoutes = require('./routes/flashcardRoutes');
const setRoutes = require('./routes/setRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares for parsing JSON and urlencoded data built into Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your routes would be here
app.use('/api/users', userRoutes);
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/sets', setRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging

  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error.',
      status: err.status || 500,
      timestamp: new Date()
    }
  });
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Database connection failed', err);
    process.exit();
  });

module.exports = app;
