const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login');
}

exports.register = async (req, res) => {
    try{
        const login = new Login(req.body);
        
        await login.register();
        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('index');
            });
            return;
        }
    
        req.flash('success', 'User created successfully!');
        req.session.save(() => res.redirect('index'));
        return;
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.login = async (req, res) => {
    try{
        const login = new Login(req.body);
        
        await login.login();
        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('index');
            });
            return;
        }
    
        //req.flash('success', 'User logged successfully!');
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('/');
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}