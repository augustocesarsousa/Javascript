exports.homePage = (req, res) => {    
    res.send(`
    <form action="/" method="POST">
        <label for="text">Text:</label>
        <input type="text" name="text">
        <button>Send Form</button>
    </form>
    `);
}

exports.setPost = (req, res) => {    
    res.send(`Post received!`);
}