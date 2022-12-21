import products from '../data/Product';
import Product from '../models/ProductModel';

export const postAllProducts = async (req, res) => {
    await Product.deleteMany({});
    const data = await Product.insertMany(products);
    res.send({ data });
};

export const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
    throw new Error('Data Not Received 😱');
};
