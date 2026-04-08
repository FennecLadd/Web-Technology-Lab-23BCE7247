const express = require('express');

const app = express();
const PORT = 3000;

// Global Middleware
app.use((req, res, next) => {
    console.log(`[GLOBAL] ${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// Middleware Layer 1
const middleware1 = (req, res, next) => {
    console.log('Middleware 1 executed');
    next();
};

// Middleware Layer 2
const middleware2 = (req, res, next) => {
    console.log('Middleware 2 executed');
    next();
};

// Route-level Middleware
app.get('/test', middleware1, middleware2, (req, res) => {
    res.send('Middleware chain executed successfully');
});

// Another route
app.get('/', (req, res) => {
    res.send('Home route');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});