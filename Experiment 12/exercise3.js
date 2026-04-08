const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testdb')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Model
const User = mongoose.model('User', userSchema);

// CREATE
app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// READ
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// UPDATE
app.put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

// DELETE
app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});