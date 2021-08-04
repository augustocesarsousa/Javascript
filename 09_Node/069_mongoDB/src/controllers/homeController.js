const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     id: 2,
//     description: 'Test 02',
//     value: 200
// })
//     .then(datas => console.log(datas))
//     .catch( e => console.log(e));

HomeModel.find()
    .then(datas => console.log(datas))
    .catch( e => console.log(e));

exports.homePage = (req, res) => {    
    res.render(`index`);
}

exports.setPost = (req, res) => {    
    res.send(req.body);
}