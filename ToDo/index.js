const sequelize = require("./utility/database");
const Todo = require("./model/tasks");
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
dotenv.config();
const PORT = process.env.port || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

sequelize
    .sync({
        alter: true
    });

async function insertTask(id, task) {
    await Todo.create({
        id: id,
        task: task,

    });
}

async function deleteTask(id) {
    await Todo.destroy({
        where: {
            id: id
        }
    });
}

async function getTask() {
    let todo = await Todo.findAll();
    console.log("Task are", JSON.stringify(todo, null, 2));
    return todo;
}

async function updateTask(id, task) {
    await Todo.update({
        task: task
    }, {
        where: {
            id: id
        }
    });
}

app.get('/get', (req, res) => {
    getTask().then((result) => {
        res.send(result);
        console.log("Your have to do above tasks");
    });
});

app.post('/post', (req, res) => {
    let id = req.body.id;
    let task = req.body.task;
    insertTask(id, task).then(() => console.log("Your Tasks are added"));
});

app.put('/put/:id', (req, res) => {
    let id = req.params.id;
    let task = req.body.task;
    updateTask(id, task).then(() => console.log("Updated data has id : ", id));
});

app.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    deleteTask(id).then(() => console.log("Task that has been  deleted has ID: ", id));
});

app.listen(PORT, () => console.log("Listening at port:", PORT));