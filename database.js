const mysql = require('mysql2/promise');
require('dotenv').config();

// Database connection
const db = mysql.createPool({
host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Get all products
async function getProducts() {
  const [results] = await db.query('SELECT * FROM products');
  return results;
}

// Get product by ID
async function getProductById(id) {
  const [results] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
  return results[0];
}



async function getReviews() {
  const [rows] = await pool.query('SELECT * FROM reviews');
  return rows;
}


// Get reviws by ID
async function getReviewsById(product_id) {
  const [results] = await db.query('SELECT * FROM reviews WHERE product_id = ?', [product_id]);
  return results[0];
}

module.exports = {
  db,
  getProducts,
  getProductById,
  getReviews,
  getReviewsById                                    
};
