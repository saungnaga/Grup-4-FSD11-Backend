const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require('../config/database');

// Sync database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Unable to sync database:', err);
  });

// Middleware to parse JSON bodies
app.use(express.json());

// Import routers
const roomRouter = require('../routers/roomRouter');

// Use room router for routes starting with /api/rooms
app.use('/api/rooms', roomRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});