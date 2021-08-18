import validator from 'validator';

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        const emailMsg = el.querySelector('.email-msg');
        const passwordMsg = el.querySelector('.password-msg');
        let error = false;

        emailMsg.innerHTML = '';
        passwordMsg.innerHTML = '';

        if(!emailInput.value){
            emailMsg.innerHTML = 'E-mail is required!';
            error = true;
            return;
        }

        if(!passwordInput.value){
            passwordMsg.innerHTML = 'Password is required!';
            error = true;
            return;
        }

        if(!validator.isEmail(emailInput.value)){
            emailMsg.innerHTML = 'Invalid E-mail!';
            error = true;
            return;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            passwordMsg.innerHTML = 'Password must be between 3 and 50 characters!';
            error = true;
            return;
        }

    }

}