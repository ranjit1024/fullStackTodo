const mongoose = require("mogoose");
mongoose.connect("mongodb+srv://ranjit:iamranjit@cluster0.ehxzb.mongodb.net/Todo?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    email:String,
    task:[
        {
            type:mongoose.Schema.Types.OnjectId,
            ref:todo
        }
    ]
})

const TodoSchema = mongoose.Schema({
    task:String,
    descripition:String,
    competed:Boolean
})

const User = mongoose.model("User", userSchema);
const Task = mongoose.model("Task", TodoSchema);

module.exportes = {
    User,
    Task
}