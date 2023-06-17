const mongoose = require('mongoose')

export default async function connectDb(){
    await mongoose.connect("mongodb://127.0.0.1:27017/TODO_crud", console.log("connected"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}