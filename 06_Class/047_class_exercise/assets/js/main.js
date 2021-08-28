class ValidateForm{
    constructor(){
        this.form = document.querySelector('.form-exercise');
        this.events();
    }

    events(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        });

    }

    handleSubmit(e){
        e.preventDefault();
        let validInput = this.checkValidInput();
        let validPassword = this.checkValidPassword();

        if(validInput && validPassword){
            alert('Form sended!');
            this.form.submit();
        }
    }

    checkValidInput(){
        let valid = true;

        for(let errorMsg of this.form.querySelectorAll('.error-msg')){
            errorMsg.remove();
        }

        for(let input of this.form.querySelectorAll('.validate')){
            let label = input.previousElementSibling.innerHTML;         

            if(!input.value){
                this.createError(input, `Field  "${label}" cannot be empty!` );
                valid = false;
            }

            if(input.classList.contains('cpf')){
                if(!this.validateCPF(input)) valid = false;
            }

            if(input.classList.contains('user')){
                if(!this.validateUser(input)) valid = false;
            }
        }

        return valid;
    }

    checkValidPassword(){
        let valid = true;

        let pass = this.form.querySelector('.pass');
        let repass = this.form.querySelector('.repass');

        if(pass.value !== repass.value){
            valid = false;
            this.createError(pass, 'Password and repeat password need be equals!');
            this.createError(repass, 'Password and repeat password need be equals!');
        }

        if(pass.length < 6 || pass.length > 12){
            valid = false;
            this.createError(pass, 'Password needs have between 6 and 12 characters!');
        }

        return valid;
    }

    validateCPF(input){
        let cpf = new ValidateCPF(input.value);

        if(!cpf.validate()){
            this.createError(input, 'Invalid CPF!');
            return false;
        }

        return true;
    }

    validateUser(input){
        let user = input.value;
        let valid = true;

        if(user.length < 3 || user.length > 12){
            this.createError(input, 'User needs have between 3 and 12 characters!');
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(input, 'User can only have letters and/or numbers!');
            valid = false;
        }
        
        return valid;
    }

    createError(input, msg){
        let div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-msg');
        input.insertAdjacentElement('afterend', div);
    }
}

let validate = new ValidateForm(); 