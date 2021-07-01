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
        }
    }

    createError(input, msg){
        let div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-msg');
        input.insertAdjacentElement('afterend', div);
    }
}

let validate = new ValidateForm(); 