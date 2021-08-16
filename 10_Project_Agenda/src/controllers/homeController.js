const Contact = require('../models/ContactModel');

exports.index = async (req, res) => {
    const contacts = await Contact.findContacts();
    res.render('index', {contacts});
}
