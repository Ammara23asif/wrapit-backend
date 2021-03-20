const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    occasion: {
        type: String,
        required: true
    },
    relation: {
        type: String,
        required: true
    }
});

productSchema.set('timestamps', true);
module.exports = mongoose.model('Products', productSchema);