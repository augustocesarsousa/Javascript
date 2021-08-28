export default class Contact {
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
        const fistNameInput = el.querySelector('input[name="first_name"]');
        const emailInput = el.querySelector('input[name="email"]');
        const phoneInput = el.querySelector('input[name="phone"]');

        const fistNameMsg = el.querySelector('.first-name-msg');
        const emailMsg = el.querySelector('.email-msg');

        let error = false;

        fistNameMsg.innerHTML = '';
        emailMsg.innerHTML = '';

        if(!fistNameInput.value){
            fistNameMsg.innerHTML = 'Fist name is required!';
            error = true;
            return;
        }

        if(!emailInput.value && !phoneInput.value){
            emailMsg.innerHTML = 'Inform e-mail or phone!';
            error = true;
            return;
        }

        if(!error) el.submit();

    }

}