const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     id: 2,
//     description: 'Test 02',
//     value: 200
// })
//     .then(datas => console.log(datas))
//     .catch( e => console.log(e));

// HomeModel.find()
//     .then(datas => console.log(datas))
//     .catch( e => console.log(e));

exports.homePage = (req, res) => {    
    // req.session.user = {name: 'Augusto', login: true}; 
    console.log(req.session.user);

    // req.flash('info', 'Test flash info!');
    // req.flash('error', 'Test flash error!');
    // req.flash('success', 'Test flash success!');

    console.log(req.flash('info'), req.flash('error'), req.flash('success'));

    res.render(`index`);
}

exports.setPost = (req, res) => {    
    res.send(req.body);
}