# Inventory Management System

This repository contains a sample application for managing inventory using Node.js, Express.js, and Sequelize.js. The application connects to a PostgreSQL database and provides endpoints to perform CRUD operations on the inventory.

## Prerequisites

To run this application, you need to have the following installed on your system:

- Node.js (version 10 or higher)
- PostgreSQL database

## Installation

1. Clone the repository:
git clone <repository-url>

2. Install the dependencies by running the following command in the project directory: `npm install`

3. Configure the database connection:

- Open the `index.js` file in the project root directory.
- Modify the `const sequelize` declaration to match your PostgreSQL connection details.

## Usage

To start the application, run the following command:
npm start

The application will start the server and listen on the specified port (default is 8080). Once the server is running, you can access the following endpoints:

- `POST /inventory`: Create a new item in the inventory.
- `GET /inventory/:id`: Retrieve information about an item in the inventory by its ID.

Make sure to replace `<id>` in the URL with the actual ID of the item you want to retrieve.

## Database Connection

The application uses Sequelize to connect to the PostgreSQL database. The connection details are specified in the `const sequelize` declaration in the `index.js` file. You should modify this declaration to match your own database configuration.

The application also performs an authentication check using `sequelize.authenticate()` to ensure the connection to the database is successful. If there is an error during authentication, an error message will be logged to the console.

## Inventory Model

The `Inventory` model is defined using Sequelize. It represents the structure of an item in the inventory and defines the attributes and their data types.

The model has the following attributes:

- `id` (integer, primary key): Unique identifier for the item.
- `name` (string): Name of the item.
- `quantity` (integer): Quantity of the item.
- `date` (date): Date of the item's creation (defaults to the current date).

## API Endpoints

### POST /inventory

This endpoint allows you to create a new item in the inventory. The request body should contain JSON data representing the item.

Example request body:
{
"name": "Product A",
"quantity": 10
}

On successful creation, the endpoint will respond with a JSON object containing the newly created item.

### GET /inventory/:id

This endpoint retrieves information about an item in the inventory based on its ID. Replace `:id` in the URL with the actual ID of the item you want to retrieve.

The endpoint returns a JSON object representing the item's details.

## Error Handling

If any error occurs during the execution of the API endpoints or the database operations, the application will log the error details to the console.
