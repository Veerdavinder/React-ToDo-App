const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model')
app.use(cors());
app.use(bodyParse.json());

mongoose.connect('mongodb://localhost:27017/todos',{
    useNewUrlParser:true
})
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});
todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({
                'todo': 'todo added successfully'});
                console.log(todo);
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
            console.log(err);
        });
});

todoRoutes.route('/update/:id').post(function(req,res){
    Todo.findById(req.params.id,function(err,todo){
        if(!todo)
        res.status(404).send("data is not found");
        else
            todo.todoDescription = req.body.todoDescription;
            todo.todoResponsible = req.body.todoResponsible;
            todo.todoPriority = req.body.todoPriority;
            todo.todoCompleted = req.body.todoCompleted;

            todo.save().then(todo=>{
                res.json('Todo updated!')
            })
            .catch(err=>{
                res.status(400).send("Update not possible")
            })
        
    })
})

app.use('/todos',todoRoutes);

app.listen(PORT,function(){
    console.log("Server is running on Port:" + PORT);
})