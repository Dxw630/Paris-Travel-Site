const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'Public')));

const destinations = [
    { name: "Paris", description: "The city of love", image: "paris.jpg" },
    { name: "Tokyo", description: "A blend of tradition and modernity", image: "tokyo.jpg" },
    { name: "New York", description: "The city that never sleeps", image: "newyork.jpg" },
    { name: "Rome", description: "A city full of history", image: "rome.jpg" }
];

// Home Page
app.get('/', (req, res) => {
    res.render('index', { destinations });
});

// Destination Pages
app.get('/destination/:name', (req, res) => {
    const destination = destinations.find(d => d.name.toLowerCase() === req.params.name.toLowerCase());
    if (destination) {
        res.render('destination', { destination });
    } else {
        res.status(404).send("Destination not found");
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
