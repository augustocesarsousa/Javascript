exports.homePage = (req, res) => {    
    res.render(`index`, {
        pageTitle: 'Title <span style="color: red;">injected</span>',
        numbers: [0,1,2,3,4,5,6,7,8,9]
    });
}

exports.setPost = (req, res) => {    
    res.send(req.body);
}