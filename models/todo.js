import mongoose from "mongoose";

const toDoListSchema =  mongoose.Schema({
    name: {
        type: String,
        required: "Name canno be blank"
    },
    done: {
        type: Boolean,
        default:false,
    },
    dateCreated: {
        type: Date,
        default: new Date()
    },

})

var Todo = mongoose.model('Todo',toDoListSchema);

export default Todo;