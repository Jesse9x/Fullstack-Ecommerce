import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    rating: {
        type: { type: String },
        rate: { type: Number, require: true },
        count: { type: Number, require: true },
    },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
