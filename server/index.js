const express = require('express');
const app = express();
const cors = require('cors') ;
const pool = require('./db.js')
const PORT = 5000;

app.use(cors());
app.use(express.json());


// get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo;"
        );
        res.json(allTodos.rows);
    } catch(err) {
        console.error(err.message);
    }
})


// get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1;",
            [id]
        )
        res.json(todo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})


// create a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *;",
            [description]
        );
        res.json(newTodo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})


// update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { description } = req.body;
        const { id } = req.params;
        await pool.query(
            "UPDATE todo SET description = $2 WHERE todo_id = $1 ",
            [id, description]
        )
        res.json('Todo was updated!');
    } catch(err) {
        console.error(err.message);
    }
})


// delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        )
        res.json('Todo was successfully deleted!')
    } catch(err) {
        console.error(err.message);
    }
})



app.listen(PORT, () => {
    console.log(`Serer has started on port ${PORT}`)
})