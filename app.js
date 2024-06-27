require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const reviewRoutes = require('./routes/reviewRoutes'); // Impor rute

const app = express();
app.use(express.json());

app.use('/reviews', reviewRoutes); // Gunakan rute review

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
