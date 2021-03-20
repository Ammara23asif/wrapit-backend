const express = require('express');
const app = express();

const mongoose = require('mongoose');

// Database
mongoose.connect('mongodb+srv://zinu:N76rCnFxFHgI0Ggk@goblin.nlveh.mongodb.net/ammara?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
    .then(() => console.log('Connection established..'))
    .catch(err => console.error(err))

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start Server
app.listen(process.env.PORT || 3000, () => console.log('Server started on port 3000'));

// Controllers
const ProductControl = require('./controllers/productControl');
ProductControl(app);