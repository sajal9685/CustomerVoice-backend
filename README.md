# 📦 CustomerVoice Backend

A RESTful API service for the Ratings and Review System, built using  React.js ,  Express.js , and  MySQL . This backend handles user management, product listings, and product reviews.

      

## 🔧 Tech Stack

    Runtime : React.js
    Framework : Express.js
    Database : MySQL
    ORM : Raw SQL / Query Builder
    Authentication : (optional or in  progress)
    Hosting : Localhost (can be deployed on Render, Railway, etc.)

      

## 🚀 Getting Started

### 🔐 Environment Variables (   .env   )

Create a    .env    file in the root directory:

   env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=customervoice
PORT=3000

🔄 Installation
git clone https://github.com/sajal9685/CustomerVoice-backend
cd CustomerVoice-backend
npm install


▶️ Run Server
npm run dev

Server runs on http://localhost:3000

📚 API Endpoints
🧑‍💼 Users
| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/users`     | Get all users       |
| GET    | `/users/:id` | Get user by ID      |
| POST   | `/register`  | Register a new user |
| PUT    | `/users/:id` | Update user by ID   |
| DELETE | `/users/:id` | Delete user by ID   |


🛍️ Products
| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/products`     | Get all products     |
| GET    | `/products/:id` | Get product by ID    |
| POST   | `/products`     | Add new product      |
| PUT    | `/products/:id` | Update product by ID |
| DELETE | `/products/:id` | Delete product by ID |


📝 Reviews
| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| GET    | `/reviews`     | Get all reviews     |
| POST   | `/reviews`     | Submit a new review |
| DELETE | `/reviews/:id` | Delete review by ID |

📬 Contact
For any questions or issues, feel free to reach out:

Sajal Chaturvedi
📧 chaturvedisajal51@amail.com
