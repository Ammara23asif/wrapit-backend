const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start Server
app.listen(process.env.PORT || 3000, () => console.log('Server started on port 3000'));

// Controllers
const ProductControl = require('./controllers/product');
ProductControl(app);