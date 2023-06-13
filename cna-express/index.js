require('dotenv').config(); // Load environment variables from .env file

// Database connection
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const url = 'postgres://${username}%40postgresql-db1.postgres.database.azure.com:${password}@postgresql-db1.postgres.database.azure.com.postgres.database.azure.com:5432/cnainventory'

// Database connection
const sequelize = new Sequelize(url);
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

// Manage HTTP POST requests.
app.post('/inventory', async (req, res) => {
try {
   const newItem = new Inventory(req.body)
   await newItem.save()
   res.json({ inventory: newItem })
} catch(error) {
   console.error(error)
}})

// Manage  HTTP GET requests.
app.get('/inventory/:id', async (req, res) => {
   const id = req.params.id
   try {
      const inventory = await Inventory.findAll({
      attributes: ['id', 'name', 'quantity', 'date'],
      where: {
         id: id
      }})
      res.json({ inventory })
   } catch(error) {
       console.error(error)
}})