import mongoose from "mongoose";
import todo from './todo.js'
mongoose.set('debug',true)
const connection_url = `mongodb+srv://matt-admin:U88tWXTqbrqvzQeC@cluster0.14vum.mongodb.net/todolistDB?retryWrites=true&w=majority`

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

mongoose.Promise = Promise;

export default todo;

