# Practical-6: MongoDB Mongoose Integration

## Description
This project is a RESTful API built using Node.js and Express.js, integrated with MongoDB using Mongoose. It demonstrates how to define schemas and perform CRUD operations for Product, User, Cart, and Order.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure
- app.js → Main server file
- models/ → Mongoose schemas (Product, User, Cart, Order)
- routes/ → API routes
- controllers/ → Business logic
- middleware/ → Error handling

## Installation

1. Clone repository:
git clone https://github.com/Ritiksingh9724/RESTful_API_mongodb

2. Install dependencies:
npm install

3. Start MongoDB:
Make sure MongoDB is running locally on port 27017

4. Run server:
node app.js

## MongoDB Connection
The project connects to MongoDB using:
mongodb://127.0.0.1:27017/practicalDB

## 📡 API Endpoints

### Product
- POST /product → Create product
- GET /products → Get all products
- PUT /product/:id → Update product
- DELETE /product/:id → Delete product

### User
- POST /users/register
- POST /users/login

### Cart
- POST /cart
- GET /cart

### Order
- POST /orders
- GET /orders

## Testing
Use Postman to test all API endpoints.

## Output
- MongoDB Connected Successfully
- Server running on port 3000

## Author
Ritik Singh