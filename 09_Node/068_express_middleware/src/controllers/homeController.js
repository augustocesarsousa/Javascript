exports.homePage = (req, res) => {    
    res.render(`index`);
}

exports.setPost = (req, res) => {    
    res.send(req.body);
}