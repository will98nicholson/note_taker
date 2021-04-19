const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

app.get('/api.notes', (req, res) => {
    fs.readFile(notesData, 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});