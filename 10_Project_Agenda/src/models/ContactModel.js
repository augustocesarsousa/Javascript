const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    first_name: { type: String, required: true},
    last_name: { type: String, required: false, default: ''},
    email: { type: String, required: false, default: ''},
    phone: { type: String, required: false, default: ''},
    date_created: { type: Date, default: Date.now}
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.contact = null;
    }

    async register(){
        this.validate();

        if(this.errors.length > 0) return;

        this.contact = await ContactModel.create(this.body);
        
    }

    validate(){
        this.cleanUp();
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Invalid E-mail!');
        if(!this.body.first_name) this.errors.push('First name is mandatory!');
        if(!this.body.email && !this.body.phone) this.errors.push('Inform e-mail or phone!');
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key]  !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            first_name: this.body.first_name,
            last_name: this.body.last_name,
            email: this.body.email,
            phone: this.body.phone
        }
    }

    static async findById(id){
        if(typeof id !== 'string') return;
        const contact = await ContactModel.findById(id);
        return contact;
    }

    static async findContacts(){
        const contact = await ContactModel.find().sort({name: 1});
        return contact;
    }

    async edit(id){
        if(typeof id !== 'string') return;
        
        this.validate();
        if(this.errors.length > 0) return;

        this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
    }
    
}

module.exports = Contact;