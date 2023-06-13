const Sequelize = require('sequelize');
const express = require('express');

// Database connection
const sequelize = new Sequelize('postgres://Student%40postgresql-db1.postgres.database.azure.com:Pa55w0rd1234@postgresql-db1.postgres.database.azure.com.postgres.database.azure.com:5432/cnainventory');
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define Inventory model
const Inventory = sequelize.define('inventory', {
   id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
   name: { type: Sequelize.STRING, allowNull: false },
   quantity: { type: Sequelize.INTEGER },
   date: { type: Sequelize.DATEONLY, defaultValue: Sequelize.NOW }
}, {
   freezeTableName: true,
   timestamps: false
});

// Create Express app
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Sample app is listening on port ${port}!`);
});
