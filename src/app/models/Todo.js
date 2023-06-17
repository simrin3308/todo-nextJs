const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    todo:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now()
    }
})

mongoose.model={}
mongoose.exports = mongoose.model('Todo', todoSchema)