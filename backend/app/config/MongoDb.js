import mongoose from 'mongoose';

const connectDb = async () => {
    await mongoose
        .connect(process.env.MONGO_DATABASE_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => console.log('Connected!'))
        .catch((error) => console.log(error));
};

export default connectDb;
