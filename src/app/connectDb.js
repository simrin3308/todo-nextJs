const mongoose = require('mongoose');


export const connectDb = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/TodoCrudNext", console.log("connected"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
