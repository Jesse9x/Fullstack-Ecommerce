import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDb from './config/MongoDb';
import ProductRouter from './routes/ProductRouter';

dotenv.config();

connectDb();

const app = express();
const port = process.env.PORT || 1000;

app.use(cors()); // Fix Bug Cors
app.use('/v1/api', ProductRouter); // Create API

app.get('/', (req, res) => {
    res.send('Welcome You From Server NodeJS');
});

app.listen(port, () => {
    console.log(`Server Running http://localhost:${port}`);
});
