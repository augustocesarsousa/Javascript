const Contact = require('../models/ContactModel');

exports.index = (req, res) => {
    res.render('contact');
}

exports.register = async (req, res) => {
    try{
        const contact = new Contact(req.body);
        await contact.register();
        
        if(contact.errors.length > 0){
            req.flash('errors', contact.errors);
            req.session.save(() => res.redirect('index'));
            return;
        }
    
        req.flash('success', 'Contac created successfully!');
        req.session.save(() => res.redirect('index'));
        return;
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}