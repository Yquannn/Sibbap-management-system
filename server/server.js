const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'financial_management_system'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// Routes
app.get('/users', (req, res) => {
    db.query('SELECT * FROM member_account', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.post('/users', (req, res) => {
    const { email, password } = req.body;
    db.query('INSERT INTO member_account (email, password) VALUES (?, ?)', [email, password], (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: results.insertId, email, password });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
