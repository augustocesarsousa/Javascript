const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {    
    res.send(`
    <form action="/" method="POST">
        <label for="text">Text:</label>
        <input type="text" name="text">
        <button>Send Form</button>
    </form>
    `);
});

app.get('/test/:idUser?/:parameters?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUser);
});

app.post('/', (req, res) => {    
    console.log(req.body);
    res.send(`Form received: (${req.body.text})`);
});

app.listen(3000, () => {
    console.log('Server is on!')
    console.log('Acess http://localhost:3000');
});