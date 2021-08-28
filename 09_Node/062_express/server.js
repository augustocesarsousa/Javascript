const express = require('express');
const app = express();

app.get('/', (req, res) => {    
    res.send(`
    <form action="/" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name">
        <button>Send</button>
    </form>
    `);
});

app.post('/', (req, res) => {    
    res.send(`Form received.`);
});

app.get('/contact', (req, res) => {    
    res.send('Contact page!');
})

app.listen(3000, () => {
    console.log('Server is on!')
    console.log('Acess http://localhost:3000');
});